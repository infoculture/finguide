#!/usr/bin/env node
/**
 * Импорт карточек источников из Markdown-таблицы _dev/rf_finance_sources_table_full.md
 * (OpenSpec regional-sources-hierarchy). Дедупликация: по нормализованному URL в пределах субъекта
 * и относительно уже существующих карточек regional (поле source_url). После записи запустите:
 *   node scripts/bootstrap-regional-wiki.mjs refresh-overviews
 *   npm run export:knowledge
 * При необходимости пересчитайте обрезку сайдбара: `npm run fix:regional-fin-sidebar-labels`
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const TABLE = path.join(ROOT, '_dev/rf_finance_sources_table_full.md');
const WIKI_REGIONAL = path.join(ROOT, 'wiki/data-sources/regional');
const SUBJECTS = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts/data/regional-subjects.json'), 'utf8'),
);

function yq(s) {
  return JSON.stringify(s);
}

/** Короткая подпись для сайдбара: не резать строку посередине слова (до `max` символов с «…»). */
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

function normalizeUrl(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const u = raw.trim();
  if (!/^https?:\/\//i.test(u)) return null;
  try {
    const x = new URL(u);
    x.hash = '';
    x.pathname = x.pathname.replace(/\/+$/, '') || '/';
    return x.toString();
  } catch {
    return null;
  }
}

function subjectMetaByNameRu(name) {
  const t = name.trim();
  return SUBJECTS.find((s) => s.name_ru === t) || null;
}

function tagFromGroup(group) {
  const g = (group || '').toLowerCase();
  if (g.includes('закуп')) return 'procurement';
  if (g.includes('налог') || g.includes('фнс')) return 'tax';
  if (g.includes('статистик') || g.includes('росстат')) return 'statistics';
  if (g.includes('казначе') || g.includes('росказн')) return 'budget';
  if (g.includes('открыт') || g.includes('данн') || g.includes('нпа') || g.includes('банк')) return 'budget';
  if (g.includes('контроль') || g.includes('ксп') || g.includes('счёт')) return 'control';
  return 'budget';
}

function jurisdictionFrom(level) {
  const l = (level || '').toLowerCase();
  if (l.includes('оба') || l.includes('мульти')) return 'multilevel';
  if (l.includes('муниц')) return 'municipal';
  return 'regional';
}

function collectExistingSourceUrls() {
  const urls = new Map();
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith('.md')) {
        const raw = fs.readFileSync(p, 'utf8');
        const { data } = matter(raw);
        const u = normalizeUrl(data.source_url);
        if (u && data.slug && String(data.slug).startsWith('/data-sources/regional/')) {
          urls.set(u, data.slug);
        }
      }
    }
  }
  walk(WIKI_REGIONAL);
  return urls;
}

function parseRow(line) {
  if (!line.startsWith('|')) return null;
  const p = line.split('|').map((x) => x.trim());
  if (p.length < 11) return null;
  const subjectRu = p[1];
  if (!subjectRu || /^:?-+$/.test(subjectRu) || subjectRu === 'Субъект РФ') return null;
  return {
    subjectRu,
    group: p[2],
    category: p[3],
    title: p[4],
    url: p[5],
    dataDesc: p[6],
    level: p[7],
    status: p[8],
    comment: p[9],
  };
}

function makeSlug(subjectSlug, normUrl) {
  const h = crypto.createHash('sha256').update(`${subjectSlug}\n${normUrl}`).digest('hex').slice(0, 10);
  let base = `${subjectSlug}-fin-${h}`;
  if (base.length > 95) base = `${subjectSlug.slice(0, 40)}-fin-${h}`;
  return base;
}

function buildCardMarkdown(row, meta, slug, normUrl) {
  const overviewSlug = `/data-sources/regional/subject-${meta.subject_slug}-sources-overview`;
  const tag = tagFromGroup(row.group);
  const jurisdiction = jurisdictionFrom(row.level);
  const sidebar = truncateSidebarLabel(row.title || slug, 52);
  const desc = `Автоимпорт из _dev/rf_finance_sources_table_full.md (${row.group}): ${(row.dataDesc || '').slice(0, 140)}`.replace(/\s+/g, ' ').trim();

  const related = [
    overviewSlug,
    '/data-sources/regional',
    '/data-sources/regional/how-to-find-regional-data',
    '/data-sources/regional/consolidated-budgets',
    '/data-sources/federal/budget-gov-ru-datasets',
  ];

  return `---
title: ${yq(`${row.subjectRu}: ${row.title}`)}
sidebar_label: ${yq(sidebar)}
tags:
  - data-source
  - regional
  - ${tag}
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/${slug}
source_url: ${yq(normUrl)}
data_source_kind: portal
jurisdiction: ${jurisdiction}
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
rag_priority: low
description: ${yq(desc)}
content_type: data_source
entity_type: data-source
related_pages:
${related.map((x) => `  - ${x}`).join('\n')}
---

# ${row.subjectRu}: ${row.title}

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | ${jurisdiction === 'municipal' ? 'Муниципальный / региональный контур (см. колонку таблицы)' : jurisdiction === 'multilevel' ? 'Несколько уровней (см. колонку «Уровень охвата» исходной таблицы)' : 'Региональный контур субъекта РФ'} |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | ${row.title} |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: ${(row.dataDesc || 'См. колонку «Какие финансовые данные содержит» в исходной таблице.').replace(/\s+/g, ' ').trim().slice(0, 400)}

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (\`last_verified\`) | 2026-05-14 (массовый импорт; точечная проверка URL — позже) |
| Полнота (\`data_completeness\`) | неизвестна — карточка свёрнута из широкого обзора |
| Машиночитаемость (\`machine_readability\`) | HTML; машиночитаемые выгрузки не зафиксированы в таблице |
| Юридическая значимость (\`legal_significance\`) | официальный или смежный региональный вход (см. комментарий таблицы) |
| Задержка обновления (\`update_lag\`) | неизвестна |
| Глубина архива (\`archive_depth\`) | неизвестна |
| Лицензия (\`license_or_terms\`) | не указаны в таблице |

## Описание

**Категория (таблица):** ${row.category}

**Статус исследования:** ${row.status}

**Комментарий:** ${row.comment || '—'}

## Оператор

${row.title} — канонический вход: ${normUrl}

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | ${normUrl} | HTML |

## Объекты данных и показатели

- ${(row.dataDesc || 'Содержание по колонке «Какие финансовые данные содержит» исходной таблицы.').replace(/\s+/g, ' ').trim()}
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом \`import-regional-sources-from-table.mjs\` из файла \`_dev/rf_finance_sources_table_full.md\` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](${overviewSlug}) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
`;
}

function main() {
  const args = new Set(process.argv.slice(2));
  const dry = args.has('--dry-run');
  const limitArg = [...args].find((a) => a.startsWith('--limit='));
  const limit = limitArg ? Number(limitArg.split('=')[1]) : Infinity;

  const existingUrls = collectExistingSourceUrls();
  const seenPerSubject = new Map();
  let written = 0;
  let skipped = 0;
  const reasons = [];

  const lines = fs.readFileSync(TABLE, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (written >= limit) break;
    const row = parseRow(lines[i]);
    if (!row || !row.subjectRu) continue;

    const meta = subjectMetaByNameRu(row.subjectRu);
    if (!meta) {
      skipped++;
      reasons.push({ line: i + 1, why: 'unknown_subject', subject: row.subjectRu });
      continue;
    }

    const normUrl = normalizeUrl(row.url);
    if (!normUrl) {
      skipped++;
      reasons.push({ line: i + 1, why: 'bad_url', url: row.url });
      continue;
    }

    if (!seenPerSubject.has(meta.subject_slug)) seenPerSubject.set(meta.subject_slug, new Set());
    const subSeen = seenPerSubject.get(meta.subject_slug);
    if (subSeen.has(normUrl)) {
      skipped++;
      continue;
    }
    if (existingUrls.has(normUrl)) {
      skipped++;
      continue;
    }

    const slug = makeSlug(meta.subject_slug, normUrl);
    const outDir = path.join(WIKI_REGIONAL, meta.fed_okrug_slug, meta.subject_slug);
    const outFile = path.join(outDir, `${slug}.md`);
    if (fs.existsSync(outFile)) {
      skipped++;
      reasons.push({ line: i + 1, why: 'file_exists', slug });
      continue;
    }

    const md = buildCardMarkdown(row, meta, slug, normUrl);
    if (!dry) {
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, md, 'utf8');
      existingUrls.set(normUrl, `/data-sources/regional/${slug}`);
    }
    subSeen.add(normUrl);
    written++;
  }

  console.log(JSON.stringify({ dry, limit, written, skipped, sampleReasons: reasons.slice(0, 15) }, null, 2));
  if (dry) console.log('Dry-run: no files written. Drop --dry-run to write.');
}

main();
