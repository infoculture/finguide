#!/usr/bin/env node
/**
 * Импорт пар карточек федеральных госНКО из scripts/data/federal-gos-ngo-registry.json
 * (источник: _dev/ngo_federal_list_2020.xlsx)
 *
 *   npm run import:federal-gos-ngo
 *   npm run import:federal-gos-ngo -- --dry-run
 *   npm run import:federal-gos-ngo -- --only=nark
 *   npm run import:federal-gos-ngo -- --skip-existing
 *   npm run import:federal-gos-ngo -- --patch-state-sector-only
 */
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  buildDisclosureLegalTypeMap,
  enterpriseDisclosurePath,
  ensureEnterpriseSubgroupCategories,
  resolveEnterpriseSubgroup,
} from './lib/enterprise-subgroup.mjs';
import { buildOrgAboutMarkdown, loadOrgProfiles } from './lib/gosnko-org-about.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const REGISTRY = path.join(__dirname, 'data/federal-gos-ngo-registry.json');
const OFFICIAL_URLS = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/federal-gos-ngo-official-urls.json'), 'utf8'),
);
const EGRUL_WIKI = '[ЕГРЮЛ](/information-systems/federal/egrul)';
const ORG_DIR = path.join(ROOT, 'wiki/organizations/federal-gos-nko');
const ENT_ROOT = path.join(ROOT, 'wiki/data-sources/federal/enterprises');
const STATE_ORG_DIR = path.join(ROOT, 'wiki/organizations/state-sector');
const LAST_VERIFIED = '2020-11-26';
const LIFECYCLE_AUDIT_DATE = '2026-07-16';
const DATA_SLICE = '2017–2020 (исследование GovNGO, ноябрь 2020)';

const PRESERVE_STATE_SECTOR_DISCLOSURE = new Set([
  'avtodor-disclosure',
  'veb-rf-disclosure',
  'rosatom-disclosure',
]);

const MARKER_START = '<!-- federal-gos-ngo-2020:start -->';
const MARKER_END = '<!-- federal-gos-ngo-2020:end -->';

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

function fmtMoney(n) {
  if (n == null || n === '' || Number(n) === 0) return '0';
  const x = Number(n);
  if (Number.isNaN(x)) return String(n);
  return x.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
}

function subsidyTable(subsidyByYear, total) {
  const years = Object.keys(subsidyByYear || {})
    .map(Number)
    .sort((a, b) => a - b);
  if (!years.length && total == null) {
    return '| Год | Сумма субсидий (руб., данные исследования) |\n| --- | --- |\n| — | нет данных в срезе |\n';
  }
  const lines = [
    '| Год | Сумма субсидий (руб., данные исследования) |',
    '| --- | --- |',
    ...years.map((y) => `| ${y} | ${fmtMoney(subsidyByYear[String(y)])} |`),
  ];
  if (total != null && total !== '') {
    lines.push(`| **Итого** (лист «по субсидиям», где применимо) | **${fmtMoney(total)}** |`);
  }
  return `${lines.join('\n')}\n`;
}

function identificationTable(rec) {
  return `| Поле | Значение |
| --- | --- |
| ИНН | ${rec.inn} |
| Дата регистрации (срез) | ${rec.reg_date || '—'} |
| Лист «по ЕГРЮЛ» | ${rec.in_egrul_sheet ? 'да' : 'нет'} |
| Основание (ЕГРЮЛ) | ${rec.egrul_basis || '—'} |
| СО НКО (лист ЕГРЮЛ) | ${rec.so_nko || '—'} |
| госНКО (лист субсидий) | ${rec.gos_ngo_subsidy ? 'Да' : 'Нет'} |
| Отметка в ЕГРЮЛ (лист субсидий) | ${rec.egrul_mark_subsidy || '—'} |
| Учредитель / учредители (субсидии) | ${rec.founder ? String(rec.founder).replace(/\n/g, '; ') : '—'} |`;
}

function govNgoBlock(rec) {
  return `${MARKER_START}
## Федеральная госНКО (срез GovNGO 2020)

Данные идентификации и субсидий — из [\`ngo_federal_list_2020.xlsx\`](https://github.com/infoculture/finguide/blob/master/_dev/ngo_federal_list_2020.xlsx) (${DATA_SLICE}). Суммы **не** обновлялись автоматически на текущий год.

${identificationTable(rec)}

### Субсидии по данным исследования

${subsidyTable(rec.subsidy_by_year, rec.subsidy_total)}

См. также каталог [федеральных госНКО](/organizations/federal-gos-nko) и [государственные и подведомственные НКО](/glossary/gosudarstvennye-nko).
${MARKER_END}`;
}

function officialUrlsFor(rec) {
  return OFFICIAL_URLS[rec.org_slug] ?? null;
}

function buildUrlSectionBlock(rec) {
  const urls = officialUrlsFor(rec);
  if (!urls?.site) return '';
  const disclosure = (urls.disclosure ?? []).map((u) => `| ${u} | официальный |`).join('\n');
  const note = urls.note ? `\n> ${urls.note}\n` : '';
  return `
## URL и точки доступа

| Тип | URL | Формат |
| --- | --- | --- |
| Официальный сайт | ${urls.site} | HTML |

### Отчётность и раскрытие информации

| URL | Тип |
| --- | --- |
${disclosure}
${note}`;
}

function legalTypeLabel(rec) {
  const n = String(rec.name).toUpperCase();
  if (n.includes('ПУБЛИЧНО-ПРАВОВАЯ')) return 'публично-правовая компания / гос НКО';
  if (n.includes('ГОСУДАРСТВЕННАЯ КОМПАНИЯ') || n.includes('ГОСУДАРСТВЕННАЯ КОРПОРАЦИЯ'))
    return 'государственная компания / корпорация (классификация субсидий)';
  if (n.includes('ФОНД')) return 'фонд / гос НКО';
  return 'автономная некоммерческая организация / гос НКО';
}

function buildDisclosureMarkdown(rec) {
  const { short_name: shortName, org_slug: orgSlug, disclosure_slug: disclosureSlug, name: orgName } =
    rec;
  const orgType = legalTypeLabel(rec);
  const sidebar = truncateSidebarLabel(`${shortName}: данные`);
  const title = `${orgName}: открытые данные и субсидии`;
  const desc =
    `Навигатор по открытым данным ${shortName} (федеральная госНКО): идентификация по ИНН, срез субсидий 2017–2020, ссылки на реестры и витрины.`.slice(
      0,
      320,
    );
  const urls = officialUrlsFor(rec);
  const sourceUrl = urls?.site ?? null;
  const profiles = loadOrgProfiles();
  const aboutBlock = buildOrgAboutMarkdown(rec, profiles[rec.org_slug] ?? {}, urls);

  return `---
title: ${yq(title)}
sidebar_label: ${yq(sidebar)}
tags:
  - data-source
  - federal
  - programs
last_updated: ${LAST_VERIFIED}T00:00:00.000Z
slug: /data-sources/federal/${disclosureSlug}
${sourceUrl ? `source_url: ${yq(sourceUrl)}\n` : ''}data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
status: current
last_verified: ${LAST_VERIFIED}
rag_priority: low
description: ${yq(desc)}
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/federal-gos-nko/${orgSlug}
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
inn: "${rec.inn}"
related_pages:
  - /organizations/federal-gos-nko/${orgSlug}
  - /glossary/gosudarstvennye-nko
  - /data-sources/federal/subsidy
  - /data-sources/federal/procurement
  - /data-sources/civil/open-ngo
  - /howto/analysis/ngo-funding
---

# ${orgName}: открытые данные и субсидии

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная организация; [государственная и подведомственная НКО](/glossary/gosudarstvennye-nko) (срез 2020) |
| Тип доступа | Реестры и витрины по ИНН; агрегаты субсидий и закупок |
| Основные форматы | HTML, PDF (на сайтах операторов) |
| Оператор | ${orgName} |
| ИНН | ${rec.inn} |
| Правовой тип (таблица) | ${orgType} |

Коротко: **навигатор по открытым данным** ${shortName} — идентификация, **субсидии** (${DATA_SLICE}) и ссылки на **[соглашения о субсидиях](/data-sources/federal/subsidy)**, **[закупки](/data-sources/federal/procurement)** и **[OpenNGO](/data-sources/civil/open-ngo)**; не подменяет **[казначейский](/information-systems/federal/giis-eb)** и **[формы учреждений](/reporting/institution-financial-statements)** контур.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (\`last_verified\`) | ${LAST_VERIFIED} (импорт \`ngo_federal_list_2020.xlsx\`) |
| Полнота (\`data_completeness\`) | ${urls?.site ? 'частичная — идентификация и субсидии из исследования; официальный сайт и витрины — см. «URL и точки доступа»' : 'частичная — идентификация и субсидии из исследования; официальный сайт — уточнять вручную'} |
| Машиночитаемость (\`machine_readability\`) | через внешние реестры (ЕГРЮЛ, субсидии, ЕИС) |
| Юридическая значимость (\`legal_significance\`) | первично реестры и соглашения операторов данных |
| Задержка обновления (\`update_lag\`) | срез субсидий ${DATA_SLICE}; актуальные суммы — пересчёт |
| Глубина архива (\`archive_depth\`) | зависит от витрин оператора |

## Описание

Карточка собрана из перечня **федеральных госНКО** (объединение листов «по ЕГРЮЛ» и «по субсидиям» с пометкой госНКО). Публичные URL отчётности в таблицу **не** добавлялись без проверки — используйте раздел «Где искать данные».

Карточка организации: [${shortName}](/organizations/federal-gos-nko/${orgSlug}).

${aboutBlock}

${identificationTable(rec)}

### Субсидии по данным исследования (${DATA_SLICE})

${subsidyTable(rec.subsidy_by_year, rec.subsidy_total)}

## Оператор

**${orgName}** — ${urls?.site ? `канонический вход: ${urls.site}` : `идентификация по ИНН **${rec.inn}** — ${EGRUL_WIKI}`}.

${buildUrlSectionBlock(rec)}
## Где искать данные

${urls?.site ? `- Официальный сайт оператора — ${urls.site}\n` : ''}- [Соглашения и субсидии (федеральный контур)](/data-sources/federal/subsidy) — официальный след соглашений и отчётности получателей.
- [Сведения о закупках (ЕИС)](/data-sources/federal/procurement) — контракты заказчика по ИНН.
- [OpenNGO.ru](/data-sources/civil/open-ngo) — сводные разрезы по НКО и грантам (агрегатор).
- [ЕГРЮЛ](/information-systems/federal/egrul) — учредительные данные и отметка о госучастии.
- [e-disclosure.ru](/data-sources/federal/e-disclosure-ru) — если организация раскрывает отчётность как эмитент.
- [Анализ финансирования НКО](/howto/analysis/ngo-funding) — методика сшивки субсидий и ОКОПФ.

## Периодичность обновления

Срез в карточке — **${DATA_SLICE}**. Актуальные субсидии и закупки запрашивайте в первичных витринах выше.

## Ограничения и особенности

- Суммы субсидий отражают **исследовательский срез 2020**; для публикации выводов пересчитайте ряды.
- Классификация **госНКО** на листе субсидий может шире отметки в ЕГРЮЛ — см. таблицу идентификации.
- Карточка создана скриптом \`import-federal-gos-ngo-from-xlsx.mjs\`.

## Связанные страницы wiki

- [${shortName}](/organizations/federal-gos-nko/${orgSlug}) — роль организации.
- [Государственные и подведомственные НКО](/glossary/gosudarstvennye-nko) — определение категории.
- [Каталог федеральных госНКО](/organizations/federal-gos-nko) — полный перечень (61).
- [Финансирование НКО (how-to)](/howto/analysis/ngo-funding).

## Не путать с

- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — бюджетный контур госорганов и учреждений, иная методика.
- **Региональные НКО** — иной периметр учредителей и субсидий; см. [региональные источники](/data-sources/regional/).
`;
}

function buildOrgMarkdown(rec) {
  const { short_name: shortName, org_slug: orgSlug, disclosure_slug: disclosureSlug, name: orgName } =
    rec;
  const orgType = legalTypeLabel(rec);
  const sidebar = truncateSidebarLabel(shortName);
  const urls = officialUrlsFor(rec);
  const sourceUrl = urls?.site ?? null;
  const desc =
    `${orgName}: федеральная госНКО (срез 2020), учредитель и субсидии; открытые данные — в парной карточке источника.`.slice(
      0,
      320,
    );

  return `---
title: ${yq(orgName)}
sidebar_label: ${yq(sidebar)}
tags:
  - organizations
  - federal
  - programs
last_updated: ${LAST_VERIFIED}T00:00:00.000Z
slug: /organizations/federal-gos-nko/${orgSlug}
content_type: organization
entity_type: organization
as_of: ${LAST_VERIFIED}
lifecycle_status: unknown
status_as_of: ${LIFECYCLE_AUDIT_DATE}
${sourceUrl ? `source_url: ${yq(sourceUrl)}\n` : ''}org_kind: federal_gos_ngo
inn: "${rec.inn}"
description: ${yq(desc)}
related_pages:
  - /data-sources/federal/${disclosureSlug}
  - /glossary/gosudarstvennye-nko
  - /data-sources/federal/subsidy
  - /data-sources/federal/procurement
  - /data-sources/civil/open-ngo
  - /howto/analysis/ngo-funding
---

# ${orgName}

Коротко: **${shortName}** — [федеральная госНКО](/glossary/gosudarstvennye-nko) в срезе исследования **GovNGO 2020**; для идентификации, субсидий (${DATA_SLICE}) и ссылок на реестры используйте **[карточку источника](/data-sources/federal/${disclosureSlug})**.

| Признак | Значение |
| :--- | :--- |
| Краткое имя | ${shortName} |
| ИНН | ${rec.inn} |
| Правовой тип (таблица) | ${orgType} |
| Учредитель (субсидии, срез) | ${rec.founder ? String(rec.founder).replace(/\n/g, '; ') : '—'} |
| Уровень | Федеральный |

## Роль в данных и учёте

Организация относится к **некоммерческому** сектору с **государственным** или **ведомственным** контуром учреждения ([госНКО](/glossary/gosudarstvennye-nko)). Показатели **не** сводятся напрямую к строкам **[федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** как у министерства; связь с бюджетом — через **субсидии**, **госпрограммы** и **закупки** ([44-ФЗ](/legal/44fz), [223-ФЗ](/legal/223-fz)).

## Ключевые полномочия (в контексте финансов)

- Получение **субсидий** и целевых трансфертов (см. таблицу в карточке источника).
- **Закупочная** активность как заказчик — след в **[ЕИС](/data-sources/federal/procurement)**.
- Публикация отчётности на сайте оператора и в **[e-disclosure](/data-sources/federal/e-disclosure-ru)** (если применимо).

## Витрины и входы

- [${shortName}: открытые данные](/data-sources/federal/${disclosureSlug})
${urls?.site ? `- Официальный сайт — ${urls.site}` : `- ${EGRUL_WIKI} — поиск по ИНН ${rec.inn}`}

## Информационные системы и реестры

- [ЕГРЮЛ](/information-systems/federal/egrul) — учредительные данные.
- [Субсидии (федеральный контур)](/data-sources/federal/subsidy) — соглашения и отчётность.
- [OpenNGO.ru](/data-sources/civil/open-ngo) — агрегированные разрезы по НКО.

## Связанные термины глоссария

- [Государственные и подведомственные НКО](/glossary/gosudarstvennye-nko)
- [Субсидии](/glossary/subsidies)
- [КВР 630 и субсидии НКО](/glossary/kvr-630-nko-subsidies)

## Связанные страницы wiki

- [${shortName}: открытые данные](/data-sources/federal/${disclosureSlug})
- [Каталог федеральных госНКО](/organizations/federal-gos-nko)
- [Анализ финансирования НКО](/howto/analysis/ngo-funding)
`;
}

function patchMarkdownWithGovNgoBlock(content, block) {
  const re = new RegExp(
    `${MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
  );
  if (re.test(content)) {
    return content.replace(re, block.trim());
  }
  const anchor = '## Связанные страницы wiki';
  if (content.includes(anchor)) {
    return content.replace(anchor, `${block.trim()}\n\n${anchor}`);
  }
  return `${content.trim()}\n\n${block.trim()}\n`;
}

function patchFrontmatterInn(content, inn) {
  if (/^inn:/m.test(content)) {
    return content.replace(/^inn:.*$/m, `inn: "${inn}"`);
  }
  return content.replace(/^(related_pages:)/m, `inn: "${inn}"\n$1`);
}

function disclosurePathForRecord(rec, legalTypeMap) {
  const subgroup = resolveEnterpriseSubgroup(rec.disclosure_slug, legalTypeMap, [rec]);
  return enterpriseDisclosurePath(ROOT, subgroup, rec.disclosure_slug);
}

function patchStateSectorPair(rec, legalTypeMap, dryRun) {
  const slug = rec.existing_state_sector_slug;
  const orgPath = path.join(STATE_ORG_DIR, `${slug}.md`);
  const dsPath = disclosurePathForRecord(rec, legalTypeMap);
  const block = govNgoBlock(rec);

  for (const p of [orgPath, dsPath]) {
    if (!fs.existsSync(p)) {
      console.warn(`Missing for patch: ${p}`);
      continue;
    }
    let content = fs.readFileSync(p, 'utf8');
    content = patchFrontmatterInn(content, rec.inn);
    content = patchMarkdownWithGovNgoBlock(content, block);
    if (dryRun) {
      console.log(`[dry-run] patch ${path.relative(ROOT, p)}`);
    } else {
      fs.writeFileSync(p, content, 'utf8');
      console.log(`Patched ${path.relative(ROOT, p)}`);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const skipExisting = args.includes('--skip-existing');
  const patchOnly = args.includes('--patch-state-sector-only');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const only = onlyArg ? onlyArg.split('=')[1] : null;

  if (!fs.existsSync(REGISTRY)) {
    console.error(`Missing ${REGISTRY}; run: node scripts/build-federal-gos-ngo-registry.mjs`);
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
  const legalTypeMap = buildDisclosureLegalTypeMap(ROOT);
  fs.mkdirSync(ORG_DIR, { recursive: true });
  ensureEnterpriseSubgroupCategories(ENT_ROOT);

  let written = 0;
  let skipped = 0;
  let patched = 0;

  for (const rec of registry) {
    if (only && rec.org_slug !== only && rec.disclosure_slug !== only && rec.inn !== only)
      continue;

    if (rec.existing_state_sector_slug) {
      patchStateSectorPair(rec, legalTypeMap, dryRun);
      patched++;
      continue;
    }

    if (patchOnly) continue;

    const orgPath = path.join(ORG_DIR, `${rec.org_slug}.md`);
    const dsPath = disclosurePathForRecord(rec, legalTypeMap);

    if (skipExisting && fs.existsSync(orgPath) && fs.existsSync(dsPath)) {
      skipped++;
      continue;
    }

    const orgMd = buildOrgMarkdown(rec);
    const dsMd = buildDisclosureMarkdown(rec);

    if (dryRun) {
      console.log(`[dry-run] ${rec.org_slug} + ${rec.disclosure_slug}`);
    } else {
      fs.writeFileSync(orgPath, orgMd, 'utf8');
      fs.writeFileSync(dsPath, dsMd, 'utf8');
      console.log(`Wrote ${path.relative(ROOT, orgPath)} + ${rec.disclosure_slug}`);
    }
    written++;
  }

  console.log(
    `Done: ${written} new pairs, ${patched} state-sector patches, ${skipped} skipped${dryRun ? ' (dry-run)' : ''}`,
  );

  if (!dryRun && !only) {
    const idx = spawnSync('node', [path.join(__dirname, 'write-federal-gos-ngo-indexes.mjs')], {
      stdio: 'inherit',
      cwd: ROOT,
    });
    if (idx.status !== 0) process.exit(idx.status ?? 1);
  }
}

main();
