#!/usr/bin/env node
/**
 * Импорт пар карточек (организация + источник раскрытия) из
 * _dev/federal_gov_orgs_links_table.xlsx
 *
 *   npm run import:federal-gov-orgs
 *   npm run import:federal-gov-orgs -- --dry-run
 *   npm run import:federal-gov-orgs -- --only=rosatom
 */
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  classifyEnterpriseSubgroup,
  enterpriseDisclosurePath,
  ensureEnterpriseSubgroupCategories,
} from './lib/enterprise-subgroup.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const XLSX = path.join(ROOT, '_dev/federal_gov_orgs_links_table.xlsx');
const SLUGS = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/federal-gov-orgs-slugs.json'), 'utf8'),
);
const ORG_DIR = path.join(ROOT, 'wiki/organizations/state-sector');
const ENT_ROOT = path.join(ROOT, 'wiki/data-sources/federal/enterprises');
const LAST_VERIFIED = '2026-05-15';

/** Карточки с ручной редакцией — не перезаписывать при полном импорте. */
const PRESERVE_DISCLOSURE_SLUGS = new Set([
  'gazprom-investor-disclosure',
  'rzd-holding-disclosure',
]);

const SECTIONS = [
  { col: 3, title: 'Отчётность и раскрытие информации' },
  { col: 4, title: 'Основные показатели деятельности' },
  { col: 5, title: 'Финансы и хозяйственная деятельность' },
  { col: 6, title: 'Инвесторам / акционерам / долговые инструменты' },
  { col: 7, title: 'Закупки' },
  { col: 8, title: 'Корпоративное управление / органы управления' },
  { col: 9, title: 'Устойчивое развитие / ESG / нефинансовая отчётность' },
  { col: 10, title: 'Госреестры и открытые данные' },
  { col: 11, title: 'Профильные регуляторы и госорганы' },
  { col: 12, title: 'Нормативная база / правовой статус' },
];

const SECONDARY_HOSTS = [
  'kontur.ru',
  'smart-lab.ru',
  'finance.yahoo.com',
  'investing.com',
  'tradingview.com',
  'fin-plan.org',
  'cbonds.ru',
  'spark-interfax.ru',
  'audit-it.ru',
  'legalcollection.ru',
  'datacatalogs.ru',
];

function yq(s) {
  return JSON.stringify(String(s ?? ''));
}

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
  let u = raw.trim().replace(/\s+\([^)]*\)\s*$/u, '');
  if (!/^https?:\/\//i.test(u)) return null;
  if (u.startsWith('http://')) u = `https://${u.slice(7)}`;
  try {
    const x = new URL(u);
    if (x.pathname.startsWith('/%20(')) x.pathname = '/';
    x.hash = '';
    return x.toString();
  } catch {
    return null;
  }
}

function parseCellUrls(cell) {
  if (!cell || typeof cell !== 'string') return [];
  const t = cell.trim();
  if (!t || /^не применимо$/i.test(t) || /^не найдено$/i.test(t)) return [];
  const parts = t.split(/[;\n]+/).map((x) => x.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    const n = normalizeUrl(p);
    if (!n || seen.has(n)) continue;
    try {
      const host = new URL(n).hostname.replace(/^www\./, '');
      if (host === 'egrul.nalog.ru') continue;
    } catch {
      /* keep */
    }
    seen.add(n);
    out.push(n);
  }
  return out;
}

function urlTier(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (SECONDARY_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) return 'вторичный';
    if (
      host.includes('e-disclosure.ru') ||
      host.includes('esg-disclosure.ru') ||
      host.includes('zakupki.gov.ru') ||
      host.includes('cbr.ru') ||
      host.includes('bo.nalog.ru') ||
      host.includes('egrul.nalog.ru') ||
      host.includes('pravo.gov.ru') ||
      host.includes('consultant.ru') ||
      host.includes('garant.ru')
    ) {
      return 'официальный / агрегатор';
    }
    return 'официальный';
  } catch {
    return 'официальный';
  }
}

function matchSlug(orgName) {
  const n = String(orgName);
  for (const row of SLUGS) {
    if (n.includes(row.org_name_match)) return row;
  }
  return null;
}

function loadRowsFromXlsx() {
  const py = `
import json, sys
from openpyxl import load_workbook
wb = load_workbook(${JSON.stringify(XLSX)}, read_only=True, data_only=True)
ws = wb['Таблица ссылок']
rows = []
for i, r in enumerate(ws.iter_rows(values_only=True)):
    if i == 0:
        continue
    if not r or not r[0]:
        continue
    rows.append([("" if c is None else str(c)).strip() for c in r])
wb.close()
json.dump(rows, sys.stdout, ensure_ascii=False)
`;
  const res = spawnSync('python3', ['-c', py], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  if (res.status !== 0) {
    console.error(res.stderr || res.stdout);
    throw new Error('Failed to read xlsx via python3/openpyxl');
  }
  return JSON.parse(res.stdout);
}

function buildUrlSections(row) {
  const blocks = [];
  for (const { col, title } of SECTIONS) {
    const urls = parseCellUrls(row[col]);
    if (!urls.length) continue;
    const lines = [
      `### ${title}`,
      '',
      '| URL | Тип |',
      '| --- | --- |',
      ...urls.map((u) => `| ${u} | ${urlTier(u)} |`),
      '',
    ];
    blocks.push(lines.join('\n'));
  }
  return blocks.join('\n');
}

function pickSourceUrl(row, slugRow) {
  const official = parseCellUrls(row[2])[0];
  const reports = parseCellUrls(row[3])[0];
  return official || reports || `https://example.invalid/${slugRow.org_slug}`;
}

function buildDisclosureMarkdown(row, slugRow) {
  const orgName = row[0];
  const orgType = row[1];
  const shortName = slugRow.short_name;
  const disclosureSlug = slugRow.disclosure_slug;
  const orgSlug = slugRow.org_slug;
  const sourceUrl = pickSourceUrl(row, slugRow);
  const notes = (row[13] || '').trim();
  const confidence = (row[14] || '').trim();
  const urlCheck = (row[15] || '').trim();
  const urlSections = buildUrlSections(row);
  const sidebar = truncateSidebarLabel(`${shortName}: раскрытие`);
  const title = `${orgName}: отчётность и раскрытие`;
  const desc = `Витрины отчётности и корпоративного раскрытия ${shortName}: официальный сайт, e-disclosure и смежные разделы; навигатор для аналитики сектора госучастия без подмены бюджетного контура.`.slice(
    0,
    320,
  );

  return `---
title: ${yq(title)}
sidebar_label: ${yq(sidebar)}
tags:
  - data-source
  - federal
  - programs
last_updated: ${LAST_VERIFIED}T00:00:00.000Z
slug: /data-sources/federal/${disclosureSlug}
source_url: ${yq(sourceUrl)}
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: ${LAST_VERIFIED}
rag_priority: low
description: ${yq(desc)}
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/${orgSlug}
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
related_pages:
  - /reporting/state-sector-overview
  - /data-sources/federal/state-owned-enterprises-disclosure
  - /data-sources/federal/e-disclosure-ru
  - /organizations/${orgSlug}
  - /legal/223-fz
  - /data-sources/federal/procurement
---

# ${orgName}: отчётность и раскрытие

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная организация с госучастием или специальным правовым статусом (${orgType}) |
| Тип доступа | Веб-витрины отчётности и раскрытия; файлы PDF/XLSX по ссылкам |
| Основные форматы | HTML, PDF, XLSX |
| Оператор | ${orgName} |
| Режим доступа | Как правило открытое чтение публичных материалов |
| Правовой тип (таблица) | ${orgType} |

Коротко: **навигатор по публичным витринам** ${shortName} для годовой и промежуточной отчётности, закупок и раскрытий; сопоставляйте с **[ЕИС](/data-sources/federal/procurement)** и **[e-disclosure](/data-sources/federal/e-disclosure-ru)**, не смешивая с **[казначейским](/information-systems/federal/giis-eb)** и **[бюджетными формами](/reporting/state-sector-overview)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (\`last_verified\`) | ${LAST_VERIFIED} (импорт из \`_dev/federal_gov_orgs_links_table.xlsx\`) |
| Полнота (\`data_completeness\`) | частичная — перечень URL из исследования; точечная вычитка ссылок — позже |
| Машиночитаемость (\`machine_readability\`) | смешанная (HTML/PDF; единого API нет) |
| Юридическая значимость (\`legal_significance\`) | первично материалы оператора и правила раскрытия эмитента |
| Задержка обновления (\`update_lag\`) | зависит от оператора витрины |
| Глубина архива (\`archive_depth\`) | зависит от эмитента и e-disclosure |
| Уверенность сбора (таблица) | ${confidence || '—'} |
| Проверка URL (таблица) | ${urlCheck || '—'} |

## Описание

Карточка собрана из таблицы ссылок на ресурсы отчётности и раскрытия (**${orgType}**). Ссылки с пометкой **вторичный** — аналитические агрегаторы и зеркала; для воспроизводимого анализа предпочитайте **официальные** витрины оператора.

Карточка организации: [${shortName}](/organizations/${orgSlug}).

## Оператор

**${orgName}** — канонический вход: ${sourceUrl}

## URL и точки доступа

| Тип | URL | Формат |
| --- | --- | --- |
| Официальный сайт | ${sourceUrl} | HTML |

${urlSections}
## Периодичность обновления

**Событийная** и **календарная** (годовая отчётность, раскрытия, закупки); точные сроки — в разделах отчётности на сайте оператора и на [e-disclosure.ru](/data-sources/federal/e-disclosure-ru).

## Ограничения и особенности

${notes ? `- ${notes.replace(/\n/g, '\n- ')}` : '- Карточка создана скриптом `import-federal-gov-orgs-from-xlsx.mjs`; сверяйте URL перед автоматизацией.'}
- Строки бюджетной отчётности и **ПФХД** учреждений **не** продолжают корпоративный баланс этой организации.
- Часть URL в исходной таблице могла быть недоступна при автоматической проверке (${urlCheck || 'см. лист «Техническая проверка URL»'}).

## Связанные страницы wiki

- [${shortName}](/organizations/${orgSlug}) — роль организации в контуре госучастия.
- [Отчётность сектора госучастия](/reporting/state-sector-overview) — граница корпоративного и бюджетного учёта.
- [Корпоративное раскрытие — навигатор](/data-sources/federal/state-owned-enterprises-disclosure).
- [e-disclosure.ru](/data-sources/federal/e-disclosure-ru) — агрегатор раскрытий эмитентов.
- [Сведения о закупках (ЕИС)](/data-sources/federal/procurement) — закупочный след.
- [223-ФЗ](/legal/223-fz) — закупки отдельных субъектов с госучастием.

## Не путать с

- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[формы Казначейства](/reporting/treasury-reports)** — **бюджетный** контур, другой периметр и методика.
`;
}

function buildOrgMarkdown(row, slugRow) {
  const orgName = row[0];
  const orgType = row[1];
  const shortName = slugRow.short_name;
  const orgSlug = slugRow.org_slug;
  const disclosureSlug = slugRow.disclosure_slug;
  const sourceUrl = pickSourceUrl(row, slugRow);
  const officialUrls = parseCellUrls(row[2]);
  const eDisclosure = parseCellUrls(row[3]).filter((u) => u.includes('e-disclosure.ru'));
  const sidebar = truncateSidebarLabel(shortName);
  const desc = `${orgName}: правовой статус (${orgType}), роль в корпоративном раскрытии и связь с открытыми финансовыми данными; витрины отчётности — в парной карточке источника.`.slice(
    0,
    320,
  );

  const vitrines = [
    officialUrls[0] || sourceUrl,
    ...eDisclosure.slice(0, 1),
  ].filter(Boolean);
  const uniqueVitrines = [...new Set(vitrines)];

  return `---
title: ${yq(orgName)}
sidebar_label: ${yq(sidebar)}
tags:
  - organizations
  - federal
  - programs
last_updated: ${LAST_VERIFIED}T00:00:00.000Z
slug: /organizations/${orgSlug}
content_type: organization
entity_type: organization
source_url: ${yq(officialUrls[0] || sourceUrl)}
org_kind: other
description: ${yq(desc)}
related_pages:
  - /data-sources/federal/${disclosureSlug}
  - /reporting/state-sector-overview
  - /data-sources/federal/state-owned-enterprises-disclosure
  - /data-sources/federal/e-disclosure-ru
  - /glossary/state-corporations
---

# ${orgName}

Коротко: **${shortName}** (${orgType}) — субъект **сектора госучастия** с **корпоративным** (не казённым) контуром отчётности; для витрин раскрытия, закупок и показателей деятельности используйте парную карточку **[источника](/data-sources/federal/${disclosureSlug})**, для бюджетного следа — **[ЕИС](/data-sources/federal/procurement)** и **[субсидии](/data-sources/federal/subsidy)**.

| Признак | Значение |
| :--- | :--- |
| Краткое имя | ${shortName} |
| Правовой тип (таблица) | ${orgType} |
| Официальный сайт | ${officialUrls[0] || sourceUrl} |
| Уровень | Федеральный |

## Роль в данных и учёте

Организация публикует **корпоративную** отчётность и раскрытия по правилам эмитента / специального статуса (**${orgType}**). Показатели **не** сводятся напрямую к строкам **[федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** или **[форм учреждений](/reporting/institution-financial-statements)**. Связь с бюджетом — через **субсидии**, **госпрограммы**, **дивиденды** и **закупки**; трассируйте по **[223-ФЗ](/legal/223-fz)** / **[44-ФЗ](/legal/44fz)** и открытым реестрам.

## Ключевые полномочия (в контексте финансов)

- Публикация **годовой и промежуточной отчётности**, раскрытий для инвесторов (где применимо).
- **Закупочная** активность как заказчик (см. раздел закупок в карточке источника).
- Участие в **государственных программах** и соглашениях — сверка с **[govtasks](/data-sources/federal/govtasks)** и **[субсидиями](/data-sources/federal/subsidy)**.

## Что формирует и что публикует

**Публикует в открытом доступе**

- Материалы **отчётности и раскрытия** на официальном сайте и на **[e-disclosure.ru](/data-sources/federal/e-disclosure-ru)** (если организация — эмитент / раскрывающее лицо).
- Данные о **закупках** в **[ЕИС](/data-sources/federal/procurement)** и на профильных площадках (см. карточку источника).

## Витрины и входы

${uniqueVitrines.map((u) => `- ${u}`).join('\n')}
- Полный перечень разделов: **[${shortName}: отчётность и раскрытие](/data-sources/federal/${disclosureSlug})**

## Информационные системы и реестры

- [e-disclosure.ru](/data-sources/federal/e-disclosure-ru) — агрегатор корпоративных раскрытий.
- [Сведения о закупках (ЕИС)](/data-sources/federal/procurement) — контрактный след заказчика.
- [ЕГРЮЛ](/information-systems/federal/egrul) — учредительные данные и структура юрлица.

## Связанные термины глоссария

- [Госкорпорации и публично-правовые компании](/glossary/state-corporations) — отличие от **ПАО** и **учреждений**.

## Связанные организации

- См. навигатор [корпоративного раскрытия](/data-sources/federal/state-owned-enterprises-disclosure) и каталог [госпредприятий](/data-sources/federal/) (подраздел enterprises).

## Связанные страницы wiki

- [${shortName}: отчётность и раскрытие](/data-sources/federal/${disclosureSlug}) — таблицы URL по категориям.
- [Отчётность сектора госучастия](/reporting/state-sector-overview).
`;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const orgsOnly = args.includes('--orgs-only');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const only = onlyArg ? onlyArg.split('=')[1] : null;

  if (!fs.existsSync(XLSX)) {
    console.error(`Missing ${XLSX}`);
    process.exit(1);
  }

  fs.mkdirSync(ORG_DIR, { recursive: true });
  ensureEnterpriseSubgroupCategories(ENT_ROOT);

  const rows = loadRowsFromXlsx();
  let written = 0;
  let skipped = 0;

  for (const row of rows) {
    const slugRow = matchSlug(row[0]);
    if (!slugRow) {
      console.warn(`No slug mapping for: ${row[0]}`);
      skipped++;
      continue;
    }
    if (only && slugRow.org_slug !== only && slugRow.disclosure_slug !== only) continue;

    const orgPath = path.join(ORG_DIR, `${slugRow.org_slug}.md`);
    const subgroup = classifyEnterpriseSubgroup(row[1]);
    const dsPath = enterpriseDisclosurePath(ROOT, subgroup, slugRow.disclosure_slug);
    const orgMd = buildOrgMarkdown(row, slugRow);
    const dsMd = buildDisclosureMarkdown(row, slugRow);

    const skipDisclosure =
      PRESERVE_DISCLOSURE_SLUGS.has(slugRow.disclosure_slug) && fs.existsSync(dsPath);

    if (dryRun) {
      console.log(
        `[dry-run] ${slugRow.org_slug}${orgsOnly ? '' : ` + ${slugRow.disclosure_slug}`}${skipDisclosure ? ' (disclosure preserved)' : ''}`,
      );
    } else {
      fs.writeFileSync(orgPath, orgMd, 'utf8');
      console.log(`Wrote ${path.relative(ROOT, orgPath)}`);
      if (!orgsOnly && !skipDisclosure) {
        fs.writeFileSync(dsPath, dsMd, 'utf8');
        console.log(`Wrote ${path.relative(ROOT, dsPath)}`);
      } else if (skipDisclosure) {
        console.log(`Skip (preserved) ${path.relative(ROOT, dsPath)}`);
      }
    }
    written++;
  }

  console.log(`Done: ${written} pairs${skipped ? `, ${skipped} skipped` : ''}${dryRun ? ' (dry-run)' : ''}`);
}

main();
