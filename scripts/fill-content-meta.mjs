#!/usr/bin/env node
/**
 * Заполняет content_type и entity_type по соглашению о путях в wiki/.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki');

const CONTENT_TYPES = new Set([
  'concept',
  'organization',
  'data_source',
  'howto',
  'legal',
  'reporting',
  'reference',
]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function infer(relPosix) {
  if (relPosix.endsWith('-template.md')) return null;

  if (relPosix.startsWith('glossary/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'concept', entity_type: 'glossary'};
  }
  if (relPosix.startsWith('organizations/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'organization', entity_type: 'organization'};
  }
  if (
    relPosix.startsWith('data-sources/federal/') ||
    relPosix.startsWith('data-sources/regional/') ||
    relPosix.startsWith('data-sources/international/') ||
    relPosix.startsWith('data-sources/civil/')
  ) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'data_source', entity_type: 'data-source'};
  }
  if (relPosix === 'data-sources/README.md') return {content_type: 'reference'};

  if (relPosix.startsWith('information-systems/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'reference', entity_type: 'information-system'};
  }

  if (relPosix.startsWith('reporting/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'reporting', entity_type: 'reporting-form'};
  }

  if (relPosix.startsWith('legal/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'legal', entity_type: 'legal-document'};
  }

  if (relPosix.startsWith('howto/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'howto', entity_type: 'howto'};
  }

  if (relPosix.startsWith('intro/')) return {content_type: 'reference'};
  if (relPosix.startsWith('budget-system/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'concept'};
  }
  if (relPosix.startsWith('budget-classification/')) {
    if (relPosix.endsWith('README.md')) return {content_type: 'reference'};
    return {content_type: 'concept'};
  }
  if (relPosix.startsWith('reference/')) return {content_type: 'reference'};
  if (relPosix === 'readme.md') return {content_type: 'reference'};

  return {content_type: 'reference'};
}

let updated = 0;
for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const inferred = infer(rel);
  if (!inferred) continue;

  const raw = fs.readFileSync(file, 'utf8');
  const {data, content} = matter(raw);

  let changed = false;
  if (
    data.content_type &&
    typeof data.content_type === 'string' &&
    !CONTENT_TYPES.has(data.content_type)
  ) {
    console.warn(`fill-content-meta: неизвестный content_type в ${rel}: ${data.content_type}`);
  }

  if (!data.content_type && inferred.content_type) {
    data.content_type = inferred.content_type;
    changed = true;
  }
  if (
    inferred.entity_type &&
    (data.entity_type === undefined ||
      data.entity_type === null ||
      data.entity_type === '')
  ) {
    data.entity_type = inferred.entity_type;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, matter.stringify(content, data));
    updated++;
  }
}

console.log(`fill-content-meta: обновлено файлов: ${updated}`);
