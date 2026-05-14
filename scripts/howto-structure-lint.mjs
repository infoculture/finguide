#!/usr/bin/env node
/**
 * Проверяет, что опубликованные howto содержат ключевые разделы по playbook.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki', 'howto');

const BLOCKS = [
  {name: 'назначение / аудитория', re: /(^|\n)##[^\n]*(назначен|аудитори|зачем)/i},
  {name: 'входные данные', re: /(^|\n)##[^\n]*входн/i},
  {name: 'инструменты', re: /(^|\n)##[^\n]*инструмент/i},
  {name: 'шаги', re: /(^|\n)##[^\n]*шаг/i},
  {name: 'пример', re: /(^|\n)##[^\n]*(пример|воспроизвод)/i},
  {name: 'проверка результата', re: /(^|\n)##[^\n]*проверк/i},
  {name: 'ограничения / ошибки', re: /(^|\n)##[^\n]*(ограничен|типовые ошибк|подводн)/i},
  {name: 'связанные страницы', re: /(^|\n)##[^\n]*(связан|см\. также)/i},
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

let errors = 0;

for (const file of walk(ROOT)) {
  const rel = path.relative(path.join(process.cwd(), 'wiki'), file).split(path.sep).join('/');
  if (rel.endsWith('README.md')) continue;

  const raw = fs.readFileSync(file, 'utf8');
  const {data, content} = matter(raw);
  if (data.draft === true) continue;

  const low = content.toLowerCase();
  for (const b of BLOCKS) {
    if (!b.re.test(low)) {
      console.error(`${rel}: нет раздела «${b.name}» (ожидается заголовок ## …)`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`howto-structure-lint: ошибок: ${errors}`);
  process.exit(1);
}
console.log('howto-structure-lint: OK');
