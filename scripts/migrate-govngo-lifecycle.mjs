#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki', 'organizations', 'federal-gos-nko');
const AS_OF = '2020-11-26';
const STATUS_AS_OF = '2026-07-16';

function insertFrontmatterLines(raw, lines) {
  const end = raw.indexOf('\n---', 4);
  if (!raw.startsWith('---\n') || end === -1) throw new Error('frontmatter block not found');
  return `${raw.slice(0, end)}\n${lines.join('\n')}${raw.slice(end)}`;
}

let changed = 0;
for (const name of fs.readdirSync(ROOT).sort()) {
  if (!name.endsWith('.md') || name === 'README.md') continue;
  const file = path.join(ROOT, name);
  const raw = fs.readFileSync(file, 'utf8');
  const {data} = matter(raw);
  if (data.entity_type !== 'organization') continue;
  const lines = [];
  if (!data.as_of) lines.push(`as_of: ${AS_OF}`);
  if (!data.lifecycle_status) lines.push('lifecycle_status: unknown');
  if (!data.status_as_of) lines.push(`status_as_of: ${STATUS_AS_OF}`);
  let updated = lines.length ? insertFrontmatterLines(raw, lines) : raw;
  if (!updated.includes('<!-- lifecycle-audit-note -->')) {
    updated = updated.replace(
      /\nКоротко:/u,
      `\n<!-- lifecycle-audit-note -->\n> **Статус на ${STATUS_AS_OF}:** текущий жизненный цикл не подтверждён в рамках массового аудита; карточка описывает snapshot GovNGO от ${AS_OF}. Перед выводами проверьте ЕГРЮЛ и официальный сайт.\n\nКоротко:`,
    );
  }
  if (updated === raw) continue;
  fs.writeFileSync(file, updated, 'utf8');
  changed++;
}
console.log(`migrate-govngo-lifecycle: обновлено карточек: ${changed}`);
