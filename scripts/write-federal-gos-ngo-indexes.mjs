#!/usr/bin/env node
/**
 * Обновляет README каталогов federal-gos-nko и enterprises (таблица госНКО).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const REGISTRY = path.join(__dirname, 'data/federal-gos-ngo-registry.json');
const ORG_README = path.join(ROOT, 'wiki/organizations/federal-gos-nko/README.md');
const ENT_README = path.join(ROOT, 'wiki/data-sources/federal/enterprises/README.md');
const NAV_PATH = path.join(
  ROOT,
  'wiki/data-sources/federal/programs-orgs/federal-gos-ngo-disclosure.md',
);

function tableRow(rec) {
  const orgLink = rec.existing_state_sector_slug
    ? `[/organizations/${rec.existing_state_sector_slug}](/organizations/${rec.existing_state_sector_slug})`
    : `[/organizations/federal-gos-nko/${rec.org_slug}](/organizations/federal-gos-nko/${rec.org_slug})`;
  const dsLink = `[/data-sources/federal/${rec.disclosure_slug}](/data-sources/federal/${rec.disclosure_slug})`;
  const flags = [
    rec.in_egrul_sheet ? 'ЕГРЮЛ' : '',
    rec.gos_ngo_subsidy ? 'госНКО' : '',
  ]
    .filter(Boolean)
    .join(', ') || '—';
  return `| ${rec.short_name} | ${rec.inn} | ${flags} | ${orgLink} | ${dsLink} |`;
}

function buildOrgReadme(registry) {
  const rows = registry.map(tableRow).join('\n');
  return `---
title: Федеральные госНКО — каталог
sidebar_label: Федеральные госНКО
tags:
  - organizations
  - federal
  - programs
  - index
last_updated: 2020-11-26T00:00:00.000Z
content_type: reference
description: >-
  Каталог 61 федеральной государственной и подведомственной НКО по срезу
  GovNGO 2020 (ngo_federal_list_2020.xlsx): пары организация + навигатор данных.
related_pages:
  - /glossary/gosudarstvennye-nko
  - /data-sources/federal/programs-orgs/federal-gos-ngo-disclosure
  - /howto/analysis/ngo-funding
  - /data-sources/federal/subsidy
---

# Федеральные госНКО — каталог

Коротко: **${registry.length}** организаций по объединению листов «по ЕГРЮЛ» и «по субсидиям» (госНКО=Да) из [\`ngo_federal_list_2020.xlsx\`](https://github.com/infoculture/finguide/blob/master/_dev/ngo_federal_list_2020.xlsx). Для каждой — карточка **организации** (этот раздел) и **источника** в [каталоге enterprises](/data-sources/federal/enterprises). Перегенерация: \`npm run import:federal-gos-ngo\`.

Три организации из перечня уже описаны в [госучастии](/organizations/state-sector) (**Автодор**, **ВЭБ.РФ**, **Росатом**) — в таблице ссылки ведут туда; блоки GovNGO 2020 добавлены в существующие карточки.

Навигатор: [федеральные госНКО — открытые данные](/data-sources/federal/programs-orgs/federal-gos-ngo-disclosure).

| Краткое имя | ИНН | Листы | Организация | Данные / раскрытие |
| --- | --- | --- | --- | --- |
${rows}

## Связанные разделы

- [Государственные и подведомственные НКО](/glossary/gosudarstvennye-nko)
- [Анализ финансирования НКО](/howto/analysis/ngo-funding)
- [Субсидии (федеральный контур)](/data-sources/federal/subsidy)
- [Госкомпании и раскрытие](/data-sources/federal/enterprises)
`;
}

function patchEnterprisesReadme(registry) {
  const markerStart = '<!-- federal-gos-ngo-catalog:start -->';
  const markerEnd = '<!-- federal-gos-ngo-catalog:end -->';
  let content = fs.readFileSync(ENT_README, 'utf8');
  const rows = registry.map(tableRow).join('\n');
  const block = `${markerStart}

## Федеральные госНКО (GovNGO 2020)

**${registry.length}** организаций; импорт: \`npm run import:federal-gos-ngo\`. Методика: [\_dev/ngo_federal_list_2020.md](https://github.com/infoculture/finguide/blob/master/_dev/ngo_federal_list_2020.md). Навигатор: [federal-gos-ngo-disclosure](/data-sources/federal/programs-orgs/federal-gos-ngo-disclosure).

| Краткое имя | ИНН | Листы | Организация | Карточка данных |
| --- | --- | --- | --- | --- |
${rows}

${markerEnd}`;

  const re = new RegExp(
    `${markerStart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${markerEnd.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
  );
  if (re.test(content)) {
    content = content.replace(re, block.trim());
  } else {
    content = `${content.trim()}\n\n${block.trim()}\n`;
  }
  fs.writeFileSync(ENT_README, content, 'utf8');
}

function buildNavigator(registry) {
  return `---
title: Федеральные госНКО — открытые данные
sidebar_label: ГосНКО (федеральные)
tags:
  - data-source
  - federal
  - programs
last_updated: 2020-11-26T00:00:00.000Z
slug: /data-sources/federal/programs-orgs/federal-gos-ngo-disclosure
content_type: reference
description: >-
  Навигатор по 61 федеральной госНКО (срез GovNGO 2020): идентификация по ИНН,
  субсидии 2017–2020 и ссылки на реестры; каталог карточек в organizations и enterprises.
related_pages:
  - /organizations/federal-gos-nko
  - /glossary/gosudarstvennye-nko
  - /data-sources/federal/subsidy
  - /howto/analysis/ngo-funding
  - /data-sources/federal/enterprises
---

# Федеральные госНКО — открытые данные

Коротко: **навигатор** по перечню **${registry.length}** организаций из исследования **GovNGO** (ноябрь 2020). Карточки не дублируют [казначейский](/information-systems/federal/giis-eb) контур; фокус — **ИНН**, **субсидии** (${registry.filter((r) => r.gos_ngo_subsidy).length} с пометкой госНКО на листе субсидий), **[ЕИС](/data-sources/federal/procurement)** и **[OpenNGO](/data-sources/civil/open-ngo)**.

## Каталоги

| Раздел | Назначение |
| --- | --- |
| [Организации — федеральные госНКО](/organizations/federal-gos-nko) | Роль, учредитель, ИНН |
| [Enterprises — таблица госНКО](/data-sources/federal/enterprises#федеральные-госнко-govngo-2020) | Парные карточки «данные и субсидии» |
| [Глоссарий: гос. и подведомственные НКО](/glossary/gosudarstvennye-nko) | Определение категории |

## Методика и срез

- Источник: [\`ngo_federal_list_2020.xlsx\`](https://github.com/infoculture/finguide/blob/master/_dev/ngo_federal_list_2020.xlsx) — листы **по ЕГРЮЛ** (46) и **по субсидиям** (госНКО=Да, 40); объединение **61** ИНН.
- Суммы субсидий — **2017–2020**; для актуальных рядов пересчитывайте в [субсидиях](/data-sources/federal/subsidy) и по [how-to НКО](/howto/analysis/ngo-funding).

## Пересечение с госкомпаниями

**Автодор**, **ВЭБ.РФ** и **Росатом** входят в перечень госНКО по субсидиям, но основные карточки раскрытия — в [секторе госучастия](/organizations/state-sector); блоки GovNGO 2020 встроены в существующие страницы.
`;
}

function main() {
  const registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
  fs.mkdirSync(path.dirname(ORG_README), { recursive: true });
  fs.writeFileSync(ORG_README, buildOrgReadme(registry), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, ORG_README)}`);
  patchEnterprisesReadme(registry);
  console.log(`Patched ${path.relative(ROOT, ENT_README)}`);
  fs.mkdirSync(path.dirname(NAV_PATH), { recursive: true });
  fs.writeFileSync(NAV_PATH, buildNavigator(registry), 'utf8');
  console.log(`Wrote ${path.relative(ROOT, NAV_PATH)}`);
}

main();
