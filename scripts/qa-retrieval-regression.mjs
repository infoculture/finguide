#!/usr/bin/env node
/**
 * Лексический baseline для регрессии retrieval: каждый slug из tests/qa-validation.jsonl
 * должен попадать в топ-K среди записей exports/knowledge-index.jsonl по пересечению
 * токенов вопроса с полями title, description, tags, sidebar_label, aliases и фрагментами slug.
 *
 * Дополнительно: токены вида «145-фз», «44-фз» из текста вопроса; префиксное совпадение
 * для длинных русских слов (склонения).
 *
 * Usage: node scripts/qa-retrieval-regression.mjs [--json]
 */
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const QA_PATH = path.join(ROOT, 'tests', 'qa-validation.jsonl');
const INDEX_PATH = path.join(ROOT, 'exports', 'knowledge-index.jsonl');

/** @type {Set<string>} */
const STOP = new Set(
  [
    'the',
    'and',
    'for',
    'где',
    'как',
    'что',
    'это',
    'или',
    'при',
    'над',
    'под',
    'все',
    'всё',
    'ещё',
    'его',
    'них',
    'том',
    'там',
    'они',
    'она',
    'оно',
    'книги',
    'книге',
    'страница',
    'странице',
    'обзор',
    'карточка',
    'карточку',
    'описан',
    'описаны',
    'описано',
    'есть',
    'естьли',
    'типовой',
    'типовая',
    'slug',
  ].map((s) => s.toLowerCase()),
);

function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .replaceAll('ё', 'е');
}

/**
 * @param {string} q
 * @returns {string[]}
 */
function questionTokens(q) {
  const n = norm(q);
  const raw = n.split(/[^a-zа-я0-9]+/i).filter(Boolean);
  const out = [];
  for (const w of raw) {
    if (w.length < 3) continue;
    if (STOP.has(w)) continue;
    out.push(w);
  }
  const law = [...n.matchAll(/(\d+)\s*-\s*фз/g)].map((m) => m[0].replace(/\s+/g, ''));
  for (const t of law) out.push(t);
  return [...new Set(out)];
}

/**
 * @param {object} row
 * @returns {string}
 */
function corpusText(row) {
  const slug = typeof row.slug === 'string' ? row.slug : '';
  const slugBits = slug
    .replace(/^\/+/u, '')
    .split(/[/\-_.]+/u)
    .filter((t) => t.length >= 2);
  const tags = Array.isArray(row.tags) ? row.tags.join(' ') : '';
  const aliases = Array.isArray(row.aliases) ? row.aliases.join(' ') : '';
  const title = row.title ?? '';
  const desc = typeof row.description === 'string' ? row.description : '';
  const sb = row.sidebar_label ?? '';
  return norm(`${title} ${desc} ${tags} ${aliases} ${sb} ${slugBits.join(' ')}`);
}

/**
 * @param {string[]} qTokens
 * @param {string} text
 */
function scoreDoc(qTokens, text) {
  let s = 0;
  for (const t of qTokens) {
    if (text.includes(t)) {
      s += 1;
      continue;
    }
    if (t.length >= 6) {
      for (let k = Math.min(12, t.length); k >= 5; k--) {
        if (text.includes(t.slice(0, k))) {
          s += 0.55;
          break;
        }
      }
    }
  }
  return s;
}

function loadJsonl(file) {
  const lines = fs.readFileSync(file, 'utf8').split('\n').filter((l) => l.trim().length > 0);
  return lines.map((l) => JSON.parse(l));
}

function main() {
  const jsonOut = process.argv.includes('--json');
  if (!fs.existsSync(INDEX_PATH)) {
    console.error(`qa-retrieval-regression: нет ${INDEX_PATH} — выполните npm run export:knowledge`);
    process.exit(1);
  }

  const index = loadJsonl(INDEX_PATH).filter((r) => r.draft !== true);
  const qa = loadJsonl(QA_PATH);

  /** @type {{id:string, miss:string, rank:number, score:number, top:string[]}[]} */
  const failures = [];

  const TOPK = 200;

  for (const row of qa) {
    const qTokens = questionTokens(row.question);
    const sources = Array.isArray(row.sources) ? row.sources : [];
    const scored = index.map((r) => {
      const raw = scoreDoc(qTokens, corpusText(r));
      const w = r.rag_priority === 'low' ? 0.2 : 1;
      return {slug: r.slug, score: raw * w};
    });
    scored.sort((a, b) => b.score - a.score || String(a.slug).localeCompare(String(b.slug)));

    for (const gold of sources) {
      if (gold === '/') continue;
      if (qTokens.length === 0) continue;

      const idx = scored.findIndex((x) => x.slug === gold);
      const rank = idx === -1 ? 999999 : idx + 1;
      const score = idx === -1 ? 0 : scored[idx].score;
      const ok = rank <= TOPK && score > 0.01;
      if (!ok) {
        failures.push({
          id: row.id,
          miss: gold,
          rank,
          score,
          top: scored.slice(0, 5).map((x) => `${x.slug}(${x.score.toFixed(2)})`),
        });
      }
    }
  }

  if (jsonOut) {
    console.log(JSON.stringify({topK: TOPK, failures, failCount: failures.length}, null, 2));
    if (failures.length) process.exit(1);
    return;
  }
  if (failures.length) {
    console.error(`qa-retrieval-regression: FAIL — ${failures.length} нарушений (топ-${TOPK}, нужен score>0)`);
    for (const f of failures.slice(0, 25)) {
      console.error(
        `  ${f.id} → ${f.miss} rank=${f.rank} score=${f.score.toFixed(2)} top=${f.top.join(' ')}`,
      );
    }
    if (failures.length > 25) console.error(`  … ещё ${failures.length - 25}`);
    process.exit(1);
  } else {
    console.log(`qa-retrieval-regression: OK (${qa.length} вопросов, топ-${TOPK}, черновики исключены)`);
  }
}

main();
