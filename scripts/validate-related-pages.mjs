#!/usr/bin/env node
/**
 * Проверяет, что все значения related_pages во frontmatter wiki указывают на slug из exports/knowledge-index.jsonl.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {loadRelationshipTypes, validateRelationshipList} from './lib/knowledge-export.mjs';

const WIKI = path.join(process.cwd(), 'wiki');
const INDEX_PATH = path.join(process.cwd(), 'exports', 'knowledge-index.jsonl');
const RELATIONSHIP_TYPES = loadRelationshipTypes();

function loadSlugs() {
  const slugs = new Set();
  for (const line of fs.readFileSync(INDEX_PATH, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    slugs.add(JSON.parse(line).slug);
  }
  return slugs;
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const slugs = loadSlugs();
let errors = 0;

for (const file of walk(WIKI)) {
  const rel = path.relative(WIKI, file).split(path.sep).join('/');
  if (rel.endsWith('-template.md')) continue;

  const {data} = matter(fs.readFileSync(file, 'utf8'));
  const rp = data.related_pages;
  if (Array.isArray(rp)) {
    for (const s of rp) {
      if (typeof s !== 'string' || !s.startsWith('/')) {
        console.error(`${rel}: related_pages должен содержать только строки-slug, начинающиеся с / — некорректно: ${JSON.stringify(s)}`);
        errors++;
        continue;
      }
      if (!slugs.has(s)) {
        console.error(`${rel}: related_pages ссылается на неизвестный slug "${s}"`);
        errors++;
      }
    }
  }

  let relationships = [];
  try {
    relationships = validateRelationshipList(data.relationships, rel, RELATIONSHIP_TYPES);
  } catch (e) {
    console.error(e.message);
    errors++;
  }
  for (const relationship of relationships) {
    if (!slugs.has(relationship.target)) {
      console.error(
        `${rel}: relationship ${relationship.type} ссылается на неизвестный slug "${relationship.target}"`,
      );
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`validate-related-pages: ошибок: ${errors}`);
  process.exit(1);
}
console.log('validate-related-pages: OK');
