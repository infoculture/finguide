#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {loadRelationshipTypes, validateRelationshipList} from './lib/knowledge-export.mjs';

const ROOT = path.join(process.cwd(), 'wiki');
const ALLOW = new Set(
  JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts/tag-allowlist.json'), 'utf8')),
);
const RELATIONSHIP_TYPES = loadRelationshipTypes();
const LIFECYCLE_STATUSES = new Set(['current', 'renamed', 'reorganized', 'liquidated', 'unknown']);
const JURISDICTION_LEVELS = new Set([
  'federal',
  'regional',
  'municipal',
  'international',
  'multilevel',
]);
const LEGAL_SIGNIFICANCE_VALUES = new Set([
  'official',
  'aggregator',
  'civil_repackaging',
  'unknown',
]);

const CONTENT_TYPES = new Set([
  'concept',
  'organization',
  'data_source',
  'howto',
  'legal',
  'reporting',
  'reference',
]);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}T/;

function validLastUpdated(v) {
  if (v instanceof Date && !Number.isNaN(v.getTime())) return true;
  const s = String(v).trim();
  return DATE_RE.test(s) || ISO_DATE_RE.test(s);
}

function validSnapshotDate(v) {
  if (v instanceof Date && !Number.isNaN(v.getTime())) return true;
  return typeof v === 'string' && DATE_RE.test(v.trim());
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function isTemplate(rel) {
  return rel.endsWith('-template.md');
}

function describeOk(data) {
  const d = data.description;
  return typeof d === 'string' && d.trim().length > 0;
}

let errors = 0;
const slugEntities = new Map();
const successorReferences = [];

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  if (isTemplate(rel)) continue;

  const raw = fs.readFileSync(file, 'utf8');
  let data;
  let content;
  try {
    const parsed = matter(raw);
    data = parsed.data;
    content = parsed.content;
  } catch (e) {
    console.error(`${rel}: некорректный frontmatter — ${e.message}`);
    errors++;
    continue;
  }

  const draft = data.draft === true;
  const defaultSlug = `/${rel.replace(/\.md$/i, '').replace(/\/README$/i, '')}`;
  const canonicalSlug = typeof data.slug === 'string' && data.slug.startsWith('/') ? data.slug : defaultSlug;
  slugEntities.set(canonicalSlug, data.entity_type ?? null);

  if (!draft && !describeOk(data)) {
    console.error(`${rel}: отсутствует или пустое поле description`);
    errors++;
  }

  if (!draft && !data.last_updated) {
    console.error(`${rel}: отсутствует last_updated`);
    errors++;
  } else if (data.last_updated && !validLastUpdated(data.last_updated)) {
    console.error(`${rel}: last_updated должно быть датой YYYY-MM-DD или ISO 8601`);
    errors++;
  }

  if (data.last_verified && !validLastUpdated(data.last_verified)) {
    console.error(`${rel}: last_verified должно быть датой YYYY-MM-DD или ISO 8601`);
    errors++;
  }

  if (!data.content_type) {
    console.error(`${rel}: отсутствует content_type`);
    errors++;
  } else if (!CONTENT_TYPES.has(data.content_type)) {
    console.error(`${rel}: недопустимый content_type "${data.content_type}"`);
    errors++;
  }

  const tags = data.tags;
  if (!Array.isArray(tags) || tags.length === 0) {
    console.error(`${rel}: tags должно быть непустым массивом`);
    errors++;
  } else {
    for (const t of tags) {
      if (typeof t !== 'string' || !/^[a-z][a-z0-9_-]*$/.test(t)) {
        console.error(`${rel}: недопустимый формат тега "${t}"`);
        errors++;
      } else if (!ALLOW.has(t)) {
        console.error(`${rel}: тег "${t}" не входит в scripts/tag-allowlist.json`);
        errors++;
      }
    }
  }

  try {
    validateRelationshipList(data.relationships, rel, RELATIONSHIP_TYPES);
  } catch (e) {
    console.error(e.message);
    errors++;
  }

  if (data.jurisdiction_level && !JURISDICTION_LEVELS.has(data.jurisdiction_level)) {
    console.error(`${rel}: недопустимый jurisdiction_level "${data.jurisdiction_level}"`);
    errors++;
  }
  if (data.legal_significance && !LEGAL_SIGNIFICANCE_VALUES.has(data.legal_significance)) {
    console.error(`${rel}: недопустимый legal_significance "${data.legal_significance}"`);
    errors++;
  }

  const isGovNgoSnapshot =
    rel.startsWith('organizations/federal-gos-nko/') && !rel.endsWith('/README.md');
  const hasLifecycleMetadata =
    data.as_of !== undefined ||
    data.lifecycle_status !== undefined ||
    data.status_as_of !== undefined ||
    data.successor_slug !== undefined;
  if (isGovNgoSnapshot || hasLifecycleMetadata) {
    if (!validSnapshotDate(data.as_of)) {
      console.error(`${rel}: as_of должно быть датой snapshot в формате YYYY-MM-DD`);
      errors++;
    }
    if (!LIFECYCLE_STATUSES.has(data.lifecycle_status)) {
      console.error(
        `${rel}: lifecycle_status должно быть одним из ${[...LIFECYCLE_STATUSES].join(', ')}`,
      );
      errors++;
    }
    if (!validSnapshotDate(data.status_as_of)) {
      console.error(`${rel}: status_as_of должно быть датой проверки в формате YYYY-MM-DD`);
      errors++;
    }
  }
  if (data.successor_slug !== undefined) {
    if (typeof data.successor_slug !== 'string' || !data.successor_slug.startsWith('/')) {
      console.error(`${rel}: successor_slug должен быть каноническим slug, начинающимся с /`);
      errors++;
    } else {
      successorReferences.push({rel, target: data.successor_slug});
    }
  }

  void content;
}

for (const {rel, target} of successorReferences) {
  if (!slugEntities.has(target)) {
    console.error(`${rel}: successor_slug ссылается на неизвестный slug ${target}`);
    errors++;
  } else if (slugEntities.get(target) !== 'organization') {
    console.error(`${rel}: successor_slug должен ссылаться на entity_type: organization (${target})`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`frontmatter-lint: ошибок: ${errors}`);
  process.exit(1);
}
console.log('frontmatter-lint: OK');
