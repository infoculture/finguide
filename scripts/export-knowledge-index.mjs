#!/usr/bin/env node
/**
 * Экспорт индекса корпуса и графа внутренних ссылок для RAG и проверок CI (--check).
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';

const WIKI = path.join(process.cwd(), 'wiki');
const OUT_DIR = path.join(process.cwd(), 'exports');
const INDEX_PATH = path.join(OUT_DIR, 'knowledge-index.jsonl');
const GRAPH_PATH = path.join(OUT_DIR, 'knowledge-graph.json');
const SITE = 'https://infoculture.github.io/finguide';

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function docPathToSlug(relPosix) {
  const base = relPosix.replace(/\.md$/i, '').replace(/\/README$/i, '');
  if (base.toLowerCase() === 'readme') return '/';
  return `/${base}`;
}

function extractInternalLinks(md) {
  const set = new Set();
  const re = /\]\((\/[a-zA-Z0-9\-_/]*)\)/g;
  let m;
  while ((m = re.exec(md))) {
    const href = m[1].split('#')[0];
    if (href && href.startsWith('/') && href.length > 1) set.add(href);
  }
  return [...set].sort();
}

function stableStringify(obj) {
  if (obj === null || typeof obj !== 'object') return JSON.stringify(obj);
  if (Array.isArray(obj)) return `[${obj.map(stableStringify).join(',')}]`;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => JSON.stringify(k) + ':' + stableStringify(obj[k])).join(',')}}`;
}

function hashBuffer(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function buildRecords() {
  const files = walk(WIKI).sort();
  const records = [];
  const nodes = [];
  const edges = [];

  for (const file of files) {
    const rel = path.relative(WIKI, file).split(path.sep).join('/');
    if (rel.endsWith('-template.md')) continue;

    const raw = fs.readFileSync(file, 'utf8');
    const {data, content} = matter(raw);
    const slug =
      typeof data.slug === 'string' && data.slug.startsWith('/')
        ? data.slug
        : docPathToSlug(rel);

    const internal_links = extractInternalLinks(content);
    const related =
      Array.isArray(data.related_pages) ?
        data.related_pages.filter((x) => typeof x === 'string')
      : [];

    for (const t of related) {
      edges.push({from: slug, to: t, kind: 'related_pages'});
    }
    for (const t of internal_links) {
      edges.push({from: slug, to: t, kind: 'markdown_link'});
    }

    nodes.push({slug, path: `wiki/${rel}`, title: data.title ?? null});

    records.push({
      path: `wiki/${rel}`,
      title: data.title ?? null,
      sidebar_label: data.sidebar_label ?? null,
      description: data.description ?? null,
      slug,
      url: `${SITE}${slug}`,
      content_type: data.content_type ?? null,
      entity_type: data.entity_type ?? null,
      tags: Array.isArray(data.tags) ? [...data.tags].sort() : [],
      aliases: Array.isArray(data.aliases) ? [...data.aliases].sort() : [],
      related_pages: [...related].sort(),
      internal_links,
      source_url: data.source_url ?? null,
      last_verified: data.last_verified ?? null,
      draft: data.draft === true,
      last_updated: data.last_updated ?? null,
    });
  }

  records.sort((a, b) => a.path.localeCompare(b.path));
  nodes.sort((a, b) => a.slug.localeCompare(b.slug));
  edges.sort((a, b) =>
    `${a.from}|${a.to}|${a.kind}`.localeCompare(`${b.from}|${b.to}|${b.kind}`),
  );

  return {records, graph: {nodes, edges}};
}

function writeOutputs(checkMode) {
  const {records, graph} = buildRecords();
  const lines = records.map((r) => stableStringify(r)).join('\n') + '\n';
  const graphJson = stableStringify(graph) + '\n';

  if (checkMode) {
    const errs = [];
    if (!fs.existsSync(INDEX_PATH)) errs.push(`нет файла ${INDEX_PATH}`);
    if (!fs.existsSync(GRAPH_PATH)) errs.push(`нет файла ${GRAPH_PATH}`);
    if (errs.length) {
      console.error(errs.join('\n'));
      process.exit(1);
    }
    const curIdx = fs.readFileSync(INDEX_PATH);
    const curGr = fs.readFileSync(GRAPH_PATH);
    const nextIdx = Buffer.from(lines, 'utf8');
    const nextGr = Buffer.from(graphJson, 'utf8');
    if (hashBuffer(curIdx) !== hashBuffer(nextIdx)) {
      console.error(
        'export-knowledge-index: knowledge-index.jsonl не совпадает с генерируемым — выполните npm run export:knowledge',
      );
      process.exit(1);
    }
    if (hashBuffer(curGr) !== hashBuffer(nextGr)) {
      console.error(
        'export-knowledge-index: knowledge-graph.json не совпадает — выполните npm run export:knowledge',
      );
      process.exit(1);
    }
    console.log('export-knowledge-index --check: OK');
    return;
  }

  fs.mkdirSync(OUT_DIR, {recursive: true});
  fs.writeFileSync(INDEX_PATH, lines);
  fs.writeFileSync(GRAPH_PATH, graphJson);
  console.log(`Записано ${records.length} строк в ${INDEX_PATH}`);
}

const checkMode = process.argv.includes('--check');
writeOutputs(checkMode);
