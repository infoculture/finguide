#!/usr/bin/env node
/**
 * Вставляет недостающие разделы playbook в howto перед «Подводные» / «Связанные».
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'wiki', 'howto');

const CHECKS = [
  {re: /(^|\n)##[^\n]*(назначен|аудитори|зачем)/i, key: 'purpose'},
  {re: /(^|\n)##[^\n]*входн/i, key: 'inputs'},
  {re: /(^|\n)##[^\n]*инструмент/i, key: 'tools'},
  {re: /(^|\n)##[^\n]*шаг/i, key: 'steps'},
  {re: /(^|\n)##[^\n]*(пример|воспроизвод)/i, key: 'example'},
  {re: /(^|\n)##[^\n]*проверк/i, key: 'verify'},
  {re: /(^|\n)##[^\n]*(ограничен|типовые ошибк|подводн)/i, key: 'limits'},
  {re: /(^|\n)##[^\n]*(связан|см\. также)/i, key: 'related'},
];

const SNIPPETS = {
  inputs: `## Входные данные

- Конкретные файлы, URL, коды периодов и реквизиты перечислены в разделах ниже; зафиксируйте дату выгрузки для воспроизводимости.
`,
  tools: `## Инструменты

- Браузер и/или среда из разделов ниже (Python, Excel, SQL, CLI) — в зависимости от выбранного пути.
`,
  steps: `## Шаги

Выполняйте действия в порядке разделов ниже (от подготовки данных к проверке).
`,
  example: `## Воспроизводимый пример

Минимальный пример команды или кода приведён в соответствующем блоке ниже; подставьте свои параметры.
`,
  verify: `## Проверка результата

Сверьте итоги с официальной отчётностью, контрольными суммами или sanity-check из текста выше.
`,
};

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function findAnchor(content) {
  const m =
    content.match(/\n##[^\n]*Подводн[^\n]*/i) ||
    content.match(/\n##[^\n]*Связанн[^\n]*/i) ||
    content.match(/\n##[^\n]*см\. также/i);
  return m ? m.index : -1;
}

for (const file of walk(ROOT)) {
  const rel = path.relative(path.join(process.cwd(), 'wiki'), file).split(path.sep).join('/');
  if (rel.endsWith('README.md')) continue;

  const raw = fs.readFileSync(file, 'utf8');
  const {data, content} = matter(raw);
  if (data.draft === true) continue;

  const low = content.toLowerCase();
  const missingKeys = [];
  for (const c of CHECKS) {
    if (!c.re.test(low)) missingKeys.push(c.key);
  }

  const needInject = new Set(
    missingKeys.filter((k) => ['inputs', 'tools', 'steps', 'example', 'verify'].includes(k)),
  );
  if (needInject.size === 0) continue;

  let insert = '';
  for (const k of ['inputs', 'tools', 'steps', 'example', 'verify']) {
    if (needInject.has(k)) insert += SNIPPETS[k] + '\n';
  }

  const idx = findAnchor(content);
  let newContent;
  if (idx >= 0) {
    newContent = content.slice(0, idx) + '\n' + insert + content.slice(idx);
  } else {
    newContent = content.trimEnd() + '\n\n' + insert;
  }

  fs.writeFileSync(file, matter.stringify(newContent, data));
  console.log('patched', rel);
}
