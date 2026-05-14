#!/usr/bin/env node
/**
 * Пересчитывает sidebar_label у массовых региональных карточек *-fin-*.md
 * по полю title (часть после «Субъект: ») с truncateSidebarLabel — см. import-regional-sources-from-table.mjs.
 *
 * Usage: node scripts/fix-regional-fin-sidebar-labels.mjs [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const REGIONAL = path.join(ROOT, 'wiki/data-sources/regional');

function truncateSidebarLabel(s, max = 52) {
  const t = String(s ?? '')
    .trim()
    .replace(/\s+/g, ' ');
  if (t.length <= max) return t;
  const budget = max - 1;
  const hard = t.slice(0, budget);
  let cut = hard.lastIndexOf(' ');
  if (cut < Math.floor(budget * 0.45)) cut = budget;
  const base = (cut === budget ? hard : t.slice(0, cut)).trimEnd();
  return base.length > 0 ? `${base}…` : `${t.slice(0, budget)}…`;
}

/** Берём хвост после первого «: » как у импорта (там sidebar из row.title). */
function baseFromTitle(title) {
  const t = String(title ?? '').trim();
  const i = t.indexOf(': ');
  return i >= 0 ? t.slice(i + 2).trim() : t;
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md') && /-fin-[a-f0-9]{10}\.md$/i.test(ent.name)) out.push(p);
  }
  return out;
}

const dry = process.argv.includes('--dry-run');
const files = walk(REGIONAL).sort();
let changed = 0;
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const title = typeof data.title === 'string' ? data.title : '';
  const nextLabel = truncateSidebarLabel(baseFromTitle(title), 52);
  const cur = typeof data.sidebar_label === 'string' ? data.sidebar_label : '';
  if (nextLabel === cur) continue;
  if (dry) {
    console.log('would update', path.relative(ROOT, file));
    console.log('  was:', JSON.stringify(cur));
    console.log('  now:', JSON.stringify(nextLabel));
    changed++;
    continue;
  }
  data.sidebar_label = nextLabel;
  fs.writeFileSync(file, matter.stringify(content, data));
  changed++;
}

console.log(dry ? `dry-run: ${changed} files would change` : `updated ${changed} files`);
