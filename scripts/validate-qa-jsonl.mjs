#!/usr/bin/env node
/**
 * Проверяет структуру tests/qa-validation.jsonl и что sources указывают на slug из exports/knowledge-index.jsonl.
 */
import fs from 'fs';
import path from 'path';

const QA_PATH = path.join(process.cwd(), 'tests', 'qa-validation.jsonl');
const INDEX_PATH = path.join(process.cwd(), 'exports', 'knowledge-index.jsonl');

const MIN_RECORDS = 50;
const MAX_RECORDS = 500;
const DIFFICULTY = new Set(['easy', 'medium', 'hard']);

function loadIndexSlugs() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.error(`validate-qa-jsonl: нет ${INDEX_PATH} — сначала выполните npm run export:knowledge`);
    process.exit(1);
  }
  const slugs = new Set();
  for (const line of fs.readFileSync(INDEX_PATH, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      const row = JSON.parse(line);
      if (typeof row.slug === 'string') slugs.add(row.slug);
    } catch {
      console.error('validate-qa-jsonl: битая строка в knowledge-index.jsonl');
      process.exit(1);
    }
  }
  return slugs;
}

function isValidSource(s) {
  if (typeof s !== 'string' || s.length === 0) return false;
  if (s === '/') return true;
  return s.startsWith('/') && !s.includes('..') && !s.includes('://');
}

const slugs = loadIndexSlugs();
const raw = fs.readFileSync(QA_PATH, 'utf8');
const lines = raw.split('\n').filter((l) => l.trim().length > 0);

if (lines.length < MIN_RECORDS) {
  console.error(`validate-qa-jsonl: ожидалось минимум ${MIN_RECORDS} строк, получено ${lines.length}`);
  process.exit(1);
}
if (lines.length > MAX_RECORDS) {
  console.error(`validate-qa-jsonl: слишком много строк (${lines.length}), максимум ${MAX_RECORDS}`);
  process.exit(1);
}

const seenIds = new Set();
let errors = 0;

for (let i = 0; i < lines.length; i++) {
  const num = i + 1;
  let row;
  try {
    row = JSON.parse(lines[i]);
  } catch (e) {
    console.error(`validate-qa-jsonl: строка ${num}: не JSON — ${e.message}`);
    errors++;
    continue;
  }

  const id = row.id;
  if (typeof id !== 'string' || !/^qa-\d{3,}$/.test(id)) {
    console.error(`validate-qa-jsonl: строка ${num}: поле id должно быть строкой вида qa-NNN`);
    errors++;
  } else if (seenIds.has(id)) {
    console.error(`validate-qa-jsonl: дубликат id: ${id}`);
    errors++;
  } else {
    seenIds.add(id);
  }

  if (typeof row.question !== 'string' || row.question.trim().length < 3) {
    console.error(`validate-qa-jsonl: строка ${num}: question должно быть непустой строкой`);
    errors++;
  }

  if (
    typeof row.quality_criteria !== 'string' ||
    row.quality_criteria.trim().length < 3
  ) {
    console.error(`validate-qa-jsonl: строка ${num}: quality_criteria должно быть непустой строкой`);
    errors++;
  }

  if (!Array.isArray(row.sources) || row.sources.length === 0) {
    console.error(`validate-qa-jsonl: строка ${num}: sources должен быть непустым массивом`);
    errors++;
  } else {
    for (const s of row.sources) {
      if (!isValidSource(s)) {
        console.error(`validate-qa-jsonl: строка ${num}: недопустимый source "${s}"`);
        errors++;
      } else if (!slugs.has(s)) {
        console.error(
          `validate-qa-jsonl: строка ${num}: slug "${s}" отсутствует в exports/knowledge-index.jsonl (обновите вопрос или корпус)`,
        );
        errors++;
      }
    }
  }

  if (row.difficulty !== undefined && !DIFFICULTY.has(row.difficulty)) {
    console.error(
      `validate-qa-jsonl: строка ${num}: difficulty должно быть easy|medium|hard или опущено`,
    );
    errors++;
  }
}

if (errors > 0) {
  console.error(`validate-qa-jsonl: ошибок: ${errors}`);
  process.exit(1);
}

console.log(`validate-qa-jsonl: OK (${lines.length} записей, ${slugs.size} slug в индексе)`);
