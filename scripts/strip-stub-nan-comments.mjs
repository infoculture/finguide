#!/usr/bin/env node
/**
 * Удаляет артефакты автоимпорта — строку «**Комментарий:** nan» (утечка NaN из
 * пустых ячеек исходной таблицы _dev/rf_finance_sources_table_full.md) — из
 * региональных stub-карточек. Вместе со строкой убирается один окружающий
 * пустой разделитель, чтобы не оставалось сдвоенных пустых строк.
 *
 * Запуск: node scripts/strip-stub-nan-comments.mjs
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'wiki', 'data-sources', 'regional');
const NAN_RE = /^\*\*Комментарий:\*\*\s+nan\s*$/;

function walk(d, o = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, o);
    else if (e.name.endsWith('.md')) o.push(p);
  }
  return o;
}

let changed = 0;
for (const f of walk(ROOT)) {
  const raw = fs.readFileSync(f, 'utf8');
  if (!raw.includes('**Комментарий:** nan')) continue;

  const lines = raw.split(/\r?\n/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (NAN_RE.test(lines[i])) {
      // Убираем висящий пустой разделитель до или после, чтобы не было сдвоенных пустых.
      if (out.length > 0 && out[out.length - 1] === '' && lines[i + 1] === '') {
        out.pop();
      }
      continue;
    }
    out.push(lines[i]);
  }
  const next = out.join('\n');
  if (next !== raw) {
    fs.writeFileSync(f, next);
    changed++;
  }
}
console.log(`strip-stub-nan-comments: очищено ${changed} карточек`);
