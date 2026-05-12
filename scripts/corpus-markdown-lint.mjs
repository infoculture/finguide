#!/usr/bin/env node
/**
 * Эвристики качества Markdown-корпуса (README-хабы, заглушки, длинные страницы без структуры).
 * Пороги намеренно консервативны: ловим регрессии, а не весь исторический долг.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WIKI = path.join(process.cwd(), 'wiki');
const CARD_PREFIXES = [
  'glossary/',
  'data-sources/',
  'organizations/',
  'information-systems/',
  'reporting/',
  'legal/',
];

const MIN_README_H2 = 1;
const MIN_README_LINKS = 3;
const MIN_README_BODY = 450;
const MIN_CARD_BODY = 180;
const LONG_LINES = 220;
const LONG_MIN_H2 = 2;

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function relWiki(file) {
  return path.relative(WIKI, file).split(path.sep).join('/');
}

function countInternalDocLinks(content) {
  const re = /\]\((\/[^)#\s]+|\.\/[^)#\s]+)\)/g;
  let n = 0;
  let m;
  while ((m = re.exec(content))) {
    const href = m[1];
    if (href.startsWith('http')) continue;
    n++;
  }
  return n;
}

function isCardPath(rel) {
  return CARD_PREFIXES.some((pre) => rel.startsWith(pre)) && !rel.endsWith('README.md');
}

let errors = 0;

for (const file of walk(WIKI)) {
  const rel = relWiki(file);
  if (rel.endsWith('-template.md')) continue;

  const raw = fs.readFileSync(file, 'utf8');
  let data;
  let content;
  try {
    const parsed = matter(raw);
    data = parsed.data;
    content = parsed.content;
  } catch (e) {
    console.error(`${rel}: frontmatter — ${e.message}`);
    errors++;
    continue;
  }

  if (data.draft === true) continue;

  const h2 = (content.match(/^##[^#]/gm) || []).length;
  const body = content.trim();
  const lines = content.split(/\r?\n/).length;
  const links = countInternalDocLinks(content);

  const isRootReadme = rel.replace(/\\/g, '/').toLowerCase() === 'readme.md';
  const isReadme = rel.endsWith('README.md') && !isRootReadme;

  if (isReadme) {
    const okHub =
      h2 >= MIN_README_H2 ||
      links >= MIN_README_LINKS ||
      body.length >= MIN_README_BODY;
    if (!okHub) {
      console.error(
        `${rel}: README похож на неполный хаб — добавьте минимум один раздел ## или ≥${MIN_README_LINKS} внутренних ссылок, либо разверните текст (сейчас h2=${h2}, ссылок=${links}, символов=${body.length}).`,
      );
      errors++;
    }
  } else if (isCardPath(rel)) {
    if (body.length > 0 && body.length < MIN_CARD_BODY) {
      console.error(
        `${rel}: карточка слишком короткая (${body.length} символов тела) — вероятная заглушка; цель ≥${MIN_CARD_BODY}.`,
      );
      errors++;
    }
  }

  if (!isRootReadme && lines >= LONG_LINES && h2 < LONG_MIN_H2) {
    console.error(
      `${rel}: длинная страница (${lines} строк) с малым числом разделов ## (${h2}); добавьте структуру (минимум ${LONG_MIN_H2}).`,
    );
    errors++;
  }
}

if (errors > 0) {
  console.error(`corpus-markdown-lint: ошибок: ${errors}`);
  process.exit(1);
}
console.log('corpus-markdown-lint: OK');
