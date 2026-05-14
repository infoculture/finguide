#!/usr/bin/env node
/**
 * Одноразовое и идемпотентное заполнение отсутствующего поля description
 * из блока «Коротко:» или первого абзаца после заголовка H1.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki');

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function stripMd(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[[^\]]*]\([^)]*\)/g, (m) => m.replace(/^\[([^\]]*)].*$/, '$1'))
    .replace(/\s+/g, ' ')
    .trim();
}

function deriveDescription(body) {
  const trimmed = body.replace(/^\uFEFF?/, '').trimStart();
  const kor = trimmed.match(/(?:^|\n)Коротко:\s*([\s\S]+?)(?=\n##|\n\n##|$)/);
  if (kor) {
    let t = stripMd(kor[1].trim());
    t = t.replace(/^[\s:—\-–]+/, '').trim();
    if (t) return t;
  }
  const afterH1 = trimmed.replace(/^[\s\n]*#\s[^\n]*\n+/, '');
  const blocks = afterH1.split(/(?=^##\s)/m);
  for (const block of blocks) {
    const chunk = block.replace(/^##\s[^\n]+\n+/, '').trim();
    if (!chunk) continue;
    const para = chunk.split(/\n\n+/)[0];
    const t = stripMd(para);
    if (t.length >= 24) return t;
  }
  return null;
}

function truncate(s, max = 320) {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 3)}...`;
}

let updated = 0;
for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file);
  if (rel.endsWith('-template.md')) continue;

  const raw = fs.readFileSync(file, 'utf8');
  const {data, content} = matter(raw);

  const existing =
    data.description !== undefined &&
    data.description !== null &&
    String(data.description).trim() !== '';
  if (existing) continue;

  const derived = deriveDescription(content);
  if (!derived) {
    console.warn(`fill-descriptions: не удалось вывести описание: ${rel}`);
    continue;
  }

  data.description = truncate(derived);
  fs.writeFileSync(file, matter.stringify(content, data));
  updated++;
}

console.log(`fill-descriptions: обновлено файлов: ${updated}`);
