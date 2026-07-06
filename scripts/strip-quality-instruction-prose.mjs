#!/usr/bin/env node
/**
 * Удаляет строку-инструкцию «Заполняйте по определениям на странице …» из тела
 * региональных карточек источников данных, у которых таблица качества уже
 * заполнена содержательно. Шаблонные stub-карточки автоимпорта (маркер
 * «неизвестна — карточка свёрнута») пропускаются — им нужен полный
 * редакционный проход, а не косметическая правка.
 *
 * Запуск: node scripts/strip-quality-instruction-prose.mjs
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.join(process.cwd(), 'wiki', 'data-sources', 'regional');
const INSTRUCTION_RE = /^Заполняйте по определениям на странице\s+\*\*\[«Измерения качества источника данных»\]\(\/reference\/data-quality-dimensions\)\*\*\.\s*$/;
const STUB_MARKER = 'неизвестна — карточка свёрнута';

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

let changed = 0;
let skippedStub = 0;
let untouched = 0;

for (const file of walk(ROOT)) {
  const raw = fs.readFileSync(file, 'utf8');
  if (!raw.includes('Заполняйте по определениям на странице')) {
    untouched++;
    continue;
  }

  const isStub = raw.includes(STUB_MARKER);
  if (isStub) {
    skippedStub++;
    continue;
  }

  const lines = raw.split(/\r?\n/);
  let removed = false;
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (INSTRUCTION_RE.test(lines[i])) {
      removed = true;
      // Пропускаем саму строку-инструкцию и один следующий пустой разделитель,
      // чтобы не оставлять сдвоенных пустых строк.
      if (out.length > 0 && out[out.length - 1] === '' && lines[i + 1] === '') {
        // убираем висящий пустой «хвост» перед таблицей — ничего не добавляем
        continue;
      }
      continue;
    }
    out.push(lines[i]);
  }

  if (!removed) {
    untouched++;
    continue;
  }

  const next = out.join('\n');
  if (next !== raw) {
    fs.writeFileSync(file, next);
    changed++;
  }
}

console.log(
  `strip-quality-instruction-prose: изменено ${changed}, пропущено stub-карточек ${skippedStub}, без инструкции ${untouched}`,
);
