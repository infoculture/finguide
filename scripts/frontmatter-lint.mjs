#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki');
const ALLOW = new Set(
  JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts/tag-allowlist.json'), 'utf8')),
);

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

  void content;
}

if (errors > 0) {
  console.error(`frontmatter-lint: ошибок: ${errors}`);
  process.exit(1);
}
console.log('frontmatter-lint: OK');
