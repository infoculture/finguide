#!/usr/bin/env node
/**
 * Волна rag-corpus-navigation: заполнить пустой related_pages у карточек
 * отчётности, legal и глоссария из внутренних ссылок + дефолтного хаба.
 * Запуск: node scripts/inject-related-pages-wave.mjs
 * Требует актуальный exports/knowledge-index.jsonl (npm run export:knowledge).
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const WIKI = path.join(ROOT, 'wiki');
const INDEX = path.join(ROOT, 'exports', 'knowledge-index.jsonl');

function loadSlugSet() {
  const set = new Set();
  if (!fs.existsSync(INDEX)) {
    console.error('Нет', INDEX, '— сначала npm run export:knowledge');
    process.exit(1);
  }
  for (const line of fs.readFileSync(INDEX, 'utf8').trim().split('\n')) {
    if (!line) continue;
    set.add(JSON.parse(line).slug);
  }
  return set;
}

function walkMd(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkMd(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function extractInternalLinks(md) {
  const set = new Set();
  const re = /\]\((\/[a-zA-Z0-9\-_/]*)\)/g;
  let m;
  while ((m = re.exec(md))) {
    const href = m[1].split('#')[0];
    if (href && href.startsWith('/') && href.length > 1) set.add(href);
  }
  return [...set];
}

function docSlug(relPosix, data) {
  if (typeof data.slug === 'string' && data.slug.startsWith('/')) return data.slug;
  const base = relPosix.replace(/\.md$/i, '').replace(/\/README$/i, '');
  if (base.toLowerCase() === 'readme') return '/';
  return `/${base}`;
}

const REPORTING_SKIP = new Set([
  'reporting-card-template.md',
  'README.md',
]);

const REPORTING_DEFAULTS = [
  '/reporting/reporting-overview',
  '/reporting',
  '/data-sources/federal/roskazna-reports',
  '/data-sources/federal/minfin-opendata',
  '/budget-classification/overview',
  '/howto/analysis/kbc-decoding',
  '/glossary/kbk',
  '/legal/budget-classification-orders',
];

const LEGAL_SKIP = new Set(['README.md', 'legal-document-card-template.md']);

const LEGAL_DEFAULTS = [
  '/legal/budget-code',
  '/data-sources/federal/minfin-opendata',
  '/data-sources/federal/budget-gov-ru-datasets',
  '/information-systems/federal/giis-eb',
  '/reporting/reporting-overview',
  '/glossary/kbk',
];

const GLOSSARY_SKIP = new Set(['README.md', 'glossary-card-template.md']);

const GLOSSARY_DEFAULTS_BY_DIR = {
  'budget-classification': [
    '/legal/budget-classification-orders',
    '/data-sources/federal/minfin-opendata',
    '/budget-classification/overview',
    '/howto/analysis/kbc-decoding',
    '/glossary/kbk',
  ],
  'budget-system': [
    '/legal/budget-code',
    '/data-sources/federal/minfin-opendata',
    '/data-sources/federal/roskazna-reports',
    '/intro/russian-budget-overview',
    '/glossary/budget-system',
  ],
  procurement: [
    '/legal/44fz',
    '/legal/223-fz',
    '/data-sources/federal/procurement',
    '/information-systems/federal/zakupki',
    '/reporting/procurement-contract-reporting',
  ],
  'state-programs': [
    '/data-sources/federal/govtasks',
    '/reporting/state-program-reporting',
    '/information-systems/federal/programs-gov',
    '/glossary/gov-programs',
  ],
  'subsidies-and-transfers': [
    '/data-sources/federal/subsidy',
    '/glossary/transfers',
    '/glossary/subsidies',
    '/legal/budget-code',
  ],
  'org-types': [
    '/organizations',
    '/data-sources/federal/orgsinfo',
    '/information-systems/federal/egrul',
    '/legal/129fz-egrul',
  ],
  other: [
    '/reference/classification-codes-index',
    '/data-sources/federal/minfin-opendata',
    '/intro/data-map',
    '/glossary/kbk',
  ],
};

function defaultsForGlossary(rel) {
  // rel: glossary/<подпапка>/file.md
  const parts = rel.split('/');
  const sub = parts.length > 1 ? parts[1] : 'other';
  return GLOSSARY_DEFAULTS_BY_DIR[sub] ?? GLOSSARY_DEFAULTS_BY_DIR.other;
}

function mergeRelated(selfSlug, fromBody, defaults, slugSet, {max = 10} = {}) {
  const ordered = [...fromBody, ...defaults];
  const out = [];
  for (const s of ordered) {
    if (!s || s === selfSlug || !slugSet.has(s)) continue;
    if (!out.includes(s)) out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

function processDir(relDir, {skipNames, defaultsFn, slugSet}) {
  const absDir = path.join(WIKI, relDir);
  let n = 0;
  for (const file of walkMd(absDir)) {
    const base = path.basename(file);
    if (skipNames.has(base)) continue;
    const rel = path.relative(WIKI, file).split(path.sep).join('/');
    const raw = fs.readFileSync(file, 'utf8');
    const {data, content} = matter(raw);
    if (Array.isArray(data.related_pages) && data.related_pages.length > 0)
      continue;
    const selfSlug = docSlug(rel, data);
    const fromBody = extractInternalLinks(content);
    const defaults =
      typeof defaultsFn === 'function' ? defaultsFn(rel, data) : defaultsFn;
    const related = mergeRelated(selfSlug, fromBody, defaults, slugSet, {
      max: 10,
    });
    if (related.length === 0) continue;
    data.related_pages = related;
    const out = matter.stringify(content, data, {lineWidth: 1000});
    fs.writeFileSync(file, out, 'utf8');
    n++;
  }
  return n;
}

const slugSet = loadSlugSet();

let total = 0;

total += processDir('reporting', {
  skipNames: REPORTING_SKIP,
  slugSet,
  defaultsFn: (rel, data) => {
    const extra = [];
    if (Array.isArray(data.pairs_with))
      for (const p of data.pairs_with)
        if (typeof p === 'string') extra.push(p);
    return [...extra, ...REPORTING_DEFAULTS];
  },
});

total += processDir('legal', {
  skipNames: LEGAL_SKIP,
  slugSet,
  defaultsFn: LEGAL_DEFAULTS,
});

total += processDir('glossary', {
  skipNames: GLOSSARY_SKIP,
  slugSet,
  defaultsFn: (rel) => defaultsForGlossary(rel),
});

console.log(`inject-related-pages-wave: обновлено файлов: ${total}`);
