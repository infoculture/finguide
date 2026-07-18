#!/usr/bin/env node
/**
 * Генерирует компактные карточки источников для каждого identifier из
 * https://budget.gov.ru/epbs/opendata/list.json (кроме наборов, у которых уже
 * есть тематическая страница в wiki — см. SKIP).
 *
 * Использование:
 *   node scripts/generate-budget-gov-opendata-dataset-cards.mjs [path/to/list.json]
 * Если аргумент не передан — выполняется fetch с браузерным User-Agent.
 * Карточки пишутся в wiki/data-sources/federal/budget/ebudget/ (плоский каталог)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const GIIS_EB_BASE = path.join(
  ROOT,
  'wiki/data-sources/federal/budget/ebudget',
);

/** Каталог карточек наборов (одна папка `ebudget/`). */
function outDirForIdentifier() {
  return GIIS_EB_BASE;
}

/** Идентификаторы, для которых уже есть отдельная тематическая карточка wiki */
const SKIP = new Set([
  '7710568760-REGISTAGREEMENT',
  '7710168360-SZPK',
  '7710568760-RUBPNUBP',
  '7710568760-IKO',
  '7710568760-IKY',
  '7710568760-LBO',
  '7710168360-SVODRASHEPBS',
  '7710168360-PNOPAYMENTS',
]);

const OPENDATA_UI_BASE =
  'https://budget.gov.ru/epbs/faces/p/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/opendata';

function fetchListJson() {
  return new Promise((resolve, reject) => {
    const req = https.get(
      'https://budget.gov.ru/epbs/opendata/list.json',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (compatible; finguide-generator/1.0; +https://github.com/)',
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      },
    );
    req.on('error', reject);
  });
}

function yamlEscape(s) {
  if (!s) return '""';
  const t = String(s).replace(/\r/g, '').trim();
  if (/["\n:#]/.test(t) || t.startsWith(' ') || t.startsWith("'")) {
    return JSON.stringify(t);
  }
  return JSON.stringify(t);
}

/** Подпись в сайдбаре: название из каталога, без суффикса «(набор …)», с усечением длинных строк */
const SIDEBAR_LABEL_MAX = 58;

function sidebarLabelFromCatalogTitle(safeTitle, identifier) {
  let s = safeTitle.replace(/\s+/g, ' ').trim();
  if (!s) s = identifier;
  if (s.length <= SIDEBAR_LABEL_MAX) return s;
  const cut = s.slice(0, SIDEBAR_LABEL_MAX - 1).trimEnd();
  return `${cut}…`;
}

function formatsFromCatalog(formatField) {
  const f = (formatField || '').trim();
  if (!f) return ['json'];
  const parts = f.split(/[,;]/).map((x) => x.trim().toLowerCase()).filter(Boolean);
  const out = new Set(['json']);
  for (const p of parts) {
    if (p.includes('csv')) out.add('csv');
    if (p.includes('xml')) out.add('xml');
    if (p.includes('xlsx') || p.includes('excel')) out.add('xlsx');
    if (p.includes('json')) out.add('json');
  }
  return [...out].sort();
}

function buildMarkdown({ identifier, title, format }) {
  const safeTitle = title.replace(/\s+/g, ' ').trim();
  const slug = `/data-sources/federal/opendata-${identifier}`;
  const fname = `opendata-${identifier}.md`;
  const metaUrl = `https://budget.gov.ru/epbs/opendata/${identifier}/meta.json`;
  const htmlUrl = `${OPENDATA_UI_BASE}?code=${identifier}`;
  const formats = formatsFromCatalog(format);
  const desc = `${safeTitle.slice(0, 220)} — именованный открытый набор каталога budget.gov.ru (${identifier}); паспорт набора meta.json и файловые версии в контуре ГИИС «Электронный бюджет».`;

  const body = `# ${safeTitle}

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный каталог открытых данных **ГИИС «Электронный бюджет»**; конкретный охват субъектов и периодов — по паспорту набора |
| Тип доступа | Смешанный: HTML-карточка набора, паспорт **JSON** (\`meta.json\`), файловые выгрузки и REST там, где раскрыто оператором |
| Основные форматы | ${formats.join(', ')} (фактические версии файлов — в блоке \`data\` паспорта) |
| Оператор | **Минфин России** / **Федеральное казначейство** — см. карточку ИС |
| Режим доступа | Открытый для опубликованных материалов каталога |

Коротко: **${safeTitle}** — отдельная запись каталога \`list.json\` с постоянным идентификатором **\`${identifier}\`**; для автоматизации начните с паспорта \`meta.json\` и сверьте поля с задачей анализа (план, факт, НСИ, отчётность и т.д.).

## Описание

Карточка фиксирует **канонические URL** набора в витрине открытых данных \`budget.gov.ru\`. Содержательное описание показателей, методики и лицензии содержится **только** в актуальном паспорте на портале и в сопутствующих НПА — здесь намеренно нет копии полей, чтобы не рассинхронизироваться с оператором.

## Оператор

Публикация ведётся в контуре **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**. Сводный обзор каталога и типовых ограничений — в **[наборах данных портала](/data-sources/federal/budget-gov-ru-datasets)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Карточка набора (витрина) | ${htmlUrl} | HTML |
| Паспорт набора | ${metaUrl} | JSON |
| Каталог всех наборов | https://budget.gov.ru/epbs/opendata/list.json | JSON |

## Объекты данных и показатели

Строка набора, ключи связки (**КБК**, **ОКТМО**, **ИНН**, коды бюджета и т.д.) и периодичность версий задаются **в паспорте** и в файлах конкретной публикации. Перед стыковкой с **[казначейскими отчётами](/data-sources/federal/roskazna-reports)** или **[открытыми данными Минфина](/data-sources/federal/minfin-opendata)** сверяйте определение показателя и тип (план / факт / справочник).

## Периодичность обновления

Указывается в паспорте набора (\`meta.json\`) и может меняться между версиями; общие замечания — в разделе ограничений **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Ограничения и особенности

- Запросы к \`list.json\` и \`meta.json\` без типичного **User-Agent** браузера иногда отвечают **403**; в скриптах задавайте заголовок \`User-Agent\` (см. **[обзорную карточку каталога](/data-sources/federal/budget-gov-ru-datasets)**).
- Поле \`link\` в элементе каталога может содержать префикс \`null/\` — собирайте URL паспорта от корня \`https://budget.gov.ru/epbs/opendata/\`.
- Публичная выгрузка **не обязана** повторять полный внутренний документооборот ИС.

## Примеры доступа

Сохранить паспорт набора и просмотреть ключевые поля:

\`\`\`bash
curl -sS -A "Mozilla/5.0" "${metaUrl}" | python3 -m json.tool | head -60
\`\`\`

## Связанные страницы wiki

- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — обзор каталога, типовые объекты и ограничения.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — оператор, подсистемы, границы системы.
- **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)** — программный доступ к каталогу и объектам там, где он документирован.
`;

  const sidebarLabel = sidebarLabelFromCatalogTitle(safeTitle, identifier);

  const fm = `---
title: ${yamlEscape(safeTitle)}
sidebar_label: ${yamlEscape(sidebarLabel)}
tags:
  - data-source
  - federal
  - budget
last_updated: 2026-05-12T00:00:00.000Z
last_verified: 2026-05-12
slug: '${slug}'
source_url: ${yamlEscape(metaUrl)}
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
${formats.map((x) => `  - ${x}`).join('\n')}
status: current
related_information_system: /information-systems/federal/giis-eb
description: ${yamlEscape(desc)}
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/minfin
  - type: available_in
    target: /information-systems/federal/giis-eb
jurisdiction_level: federal
data_completeness: unknown
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
rag_priority: low
---

`;

  return { fname, content: fm + body };
}

async function main() {
  const arg = process.argv[2];
  let raw;
  if (arg) {
    raw = fs.readFileSync(path.resolve(arg), 'utf8');
  } else {
    raw = await fetchListJson();
  }
  const catalog = JSON.parse(raw);
  const rows = catalog.meta || [];
  if (!rows.length) {
    console.error('Пустой каталог meta');
    process.exit(1);
  }

  let n = 0;
  let skipped = 0;
  for (const row of rows) {
    const identifier = row.identifier;
    if (!identifier) continue;
    if (SKIP.has(identifier)) {
      skipped++;
      continue;
    }
    const { fname, content } = buildMarkdown({
      identifier,
      title: row.title || identifier,
      format: row.format,
    });
    const outDir = outDirForIdentifier();
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, fname), content, 'utf8');
    n++;
  }
  console.log(`Записано карточек: ${n}, пропущено (уже есть тематическая страница): ${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
