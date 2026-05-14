#!/usr/bin/env node
/**
 * One-shot bootstrap for regional hierarchy (OpenSpec regional-sources-hierarchy).
 * Writes _dev/regional-directory.yaml, federal district hubs, subject overview stubs,
 * moves source card files. Idempotent for YAML/hubs; re-run moves only if sources still in root.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const WIKI_REGIONAL = path.join(ROOT, 'wiki/data-sources/regional');

const DISTRICTS = [
  { slug: 'cfo', name_ru: 'Центральный федеральный округ', position: 1 },
  { slug: 'szfo', name_ru: 'Северо-Западный федеральный округ', position: 2 },
  { slug: 'yufo', name_ru: 'Южный федеральный округ', position: 3 },
  { slug: 'skfo', name_ru: 'Северо-Кавказский федеральный округ', position: 4 },
  { slug: 'pfo', name_ru: 'Приволжский федеральный округ', position: 5 },
  { slug: 'urfo', name_ru: 'Уральский федеральный округ', position: 6 },
  { slug: 'sfo', name_ru: 'Сибирский федеральный округ', position: 7 },
  { slug: 'dfo', name_ru: 'Дальневосточный федеральный округ', position: 8 },
];

const subjects = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts/data/regional-subjects.json'), 'utf8'),
);

/** Basename (no .md) -> subject_slug for existing source cards */
const SOURCE_CARD_MOVES = [
  ['dagestan-procurement-komzak-e-dag', 'republic-of-dagestan'],
  ['sverdlovsk-oblast-procurement-goszakaz-midural', 'sverdlovsk-oblast'],
  ['tatarstan-procurement-goszakupki-tatarstan', 'republic-of-tatarstan'],
  ['moscow-city-procurement-tender-mos', 'moscow'],
  ['kemerovo-kuzbass-procurement-ugzko', 'kemerovo-oblast-kuzbass'],
  ['khmao-yugra-procurement-zakupki-admhmao', 'khanty-mansi-autonomous-okrug-yugra'],
  ['kaliningrad-oblast-procurement-zakupki-gov39', 'kaliningrad-oblast'],
  ['saint-petersburg-procurement-gz-spb', 'saint-petersburg'],
  ['moscow-oblast-tfoms-mofoms', 'moscow-oblast'],
  ['krasnodar-krai-procurement-drcs-krasnodar', 'krasnodar-krai'],
  ['novosibirsk-city-open-budget-mayor', 'novosibirsk-oblast'],
  ['sakha-yakutia-procurement-zakupki-sakha-gov', 'republic-of-sakha-yakutia'],
  ['nizhny-novgorod-city-open-budget-budgetnn', 'nizhny-novgorod-oblast'],
  ['moscow-city-tfoms-mgfoms', 'moscow'],
];

const cardsBySubject = new Map();
for (const [base, sub] of SOURCE_CARD_MOVES) {
  if (!cardsBySubject.has(sub)) cardsBySubject.set(sub, []);
  cardsBySubject.get(sub).push(base);
}

function yqStr(s) {
  return JSON.stringify(s);
}

function writeRegionalDirectoryYaml() {
  let y = 'version: 1\n';
  y += 'description: >-\n';
  y +=
    '  Справочник субъектов РФ и федеральных округов для путей\n';
  y +=
    '  wiki/data-sources/regional/<fed_okrug_slug>/<subject_slug>/.\n';
  y +=
    '  Поле name_ru совпадает с колонкой «Субъект РФ» в _dev/rf_finance_sources_table_full.md\n';
  y += '  (включая «Кемеровская область — Кузбасс» и строки «город …»).\n';
  y += 'last_updated: "2026-05-14"\n';
  y += 'federal_districts:\n';
  for (const d of DISTRICTS) {
    y += `  - slug: ${d.slug}\n`;
    y += `    name_ru: ${yqStr(d.name_ru)}\n`;
    y += `    position: ${d.position}\n`;
  }
  y += 'subjects:\n';
  for (const s of subjects) {
    const ob = `subject-${s.subject_slug}-sources-overview`;
    y += `  - name_ru: ${yqStr(s.name_ru)}\n`;
    y += `    subject_slug: ${s.subject_slug}\n`;
    y += `    fed_okrug_slug: ${s.fed_okrug_slug}\n`;
    y += `    overview_basename: ${ob}\n`;
  }
  fs.writeFileSync(path.join(ROOT, '_dev/regional-directory.yaml'), y, 'utf8');
  console.log('Wrote _dev/regional-directory.yaml');
}

function subjectBySlug(slug) {
  return subjects.find((s) => s.subject_slug === slug);
}

function writeDistrictHubs() {
  for (const d of DISTRICTS) {
    const dir = path.join(WIKI_REGIONAL, d.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, '_category_.json'),
      JSON.stringify({ label: d.name_ru, position: d.position }, null, 2) + '\n',
      'utf8',
    );
    const subs = subjects.filter((s) => s.fed_okrug_slug === d.slug);
    const lines = subs
      .map((s) => {
        const ob = `subject-${s.subject_slug}-sources-overview`;
        return `- [${s.name_ru}](/data-sources/regional/${ob})`;
      })
      .join('\n');
    const overviewSlugs = subs.map(
      (s) => `  - /data-sources/regional/subject-${s.subject_slug}-sources-overview`,
    );
    const readme = `---
title: ${yqStr(d.name_ru + ': источники данных')}
sidebar_label: ${yqStr(d.name_ru.replace(' федеральный округ', ' ФО'))}
tags:
  - data-source
  - regional
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
slug: /data-sources/regional/${d.slug}
description: >-
  Оглавление субъектов ${d.name_ru}: сводные страницы с перечнем карточек источников данных
  и переход к методическим материалам корня раздела «Региональные источники».
related_pages:
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
${overviewSlugs.join('\n')}
---

# ${d.name_ru}

Ниже — субъекты этого округа. Каждая строка списка ведёт на **сводную страницу** субъекта; карточки источников публикуются по адресам \`/data-sources/regional/<slug>\`.

Общие материалы (методика, консолидированные бюджеты, матрица пилотного раскрытия): **[Региональные источники](/data-sources/regional/)**.

## Субъекты

${lines}
`;
    fs.writeFileSync(path.join(dir, 'README.md'), readme, 'utf8');
  }
  console.log('Wrote federal district README + _category_.json under wiki/data-sources/regional/<okrug>/');
}

function overviewFrontmatter(s, cardBasenames) {
  const ob = `subject-${s.subject_slug}-sources-overview`;
  const slug = `/data-sources/regional/${ob}`;
  const related = [
    '/data-sources/regional',
    '/data-sources/regional/how-to-find-regional-data',
    '/data-sources/regional/consolidated-budgets',
    ...cardBasenames.map((b) => `/data-sources/regional/${b}`),
  ];
  const relatedYaml = related.map((p) => `  - ${p}`).join('\n');
  return `---
title: ${yqStr(s.name_ru + ': источники данных (сводная страница)')}
sidebar_label: ${yqStr(s.name_ru)}
tags:
  - data-source
  - regional
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
description: >-
  Сводная навигация по карточкам источников данных wiki для ${s.name_ru}: прямые ссылки на
  опубликованные витрины и контекст поиска по региональному контуру.
slug: ${slug}
related_pages:
${relatedYaml}
---

# ${s.name_ru}: источники данных

Коротко: эта страница перечисляет **опубликованные** карточки источников данных по субъекту. Публичные URL карточек остаются вида \`/data-sources/regional/<slug>\` независимо от папки файла в репозитории.

## Карточки источников

${
  cardBasenames.length
    ? cardBasenames
        .map((b) => {
          const label = b.replace(/-/g, ' ');
          return `- [${label}](/data-sources/regional/${b}) — карточка источника.`;
        })
        .join('\n')
    : '_Пока нет опубликованных карточек источников для этого субъекта; материалы добавляются по мере наполнения корпуса._ См. также [как искать региональные данные](/data-sources/regional/how-to-find-regional-data) и [консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets).'
}

## Контекст

- [Региональные источники (оглавление раздела)](/data-sources/regional/)
- [${DISTRICTS.find((d) => d.slug === s.fed_okrug_slug).name_ru}](/data-sources/regional/${s.fed_okrug_slug})
`;
}

function writeSubjectOverviews() {
  for (const s of subjects) {
    const dir = path.join(WIKI_REGIONAL, s.fed_okrug_slug, s.subject_slug);
    fs.mkdirSync(dir, { recursive: true });
    const cards = cardsBySubject.get(s.subject_slug) || [];
    const ob = `subject-${s.subject_slug}-sources-overview.md`;
    fs.writeFileSync(path.join(dir, ob), overviewFrontmatter(s, cards), 'utf8');
  }
  console.log('Wrote subject overview pages (89).');
}

function moveSourceCards() {
  for (const [base, subjectSlug] of SOURCE_CARD_MOVES) {
    const from = path.join(WIKI_REGIONAL, `${base}.md`);
    const s = subjectBySlug(subjectSlug);
    if (!s) throw new Error(`Unknown subject ${subjectSlug}`);
    const toDir = path.join(WIKI_REGIONAL, s.fed_okrug_slug, s.subject_slug);
    const to = path.join(toDir, `${base}.md`);
    if (!fs.existsSync(from)) {
      if (fs.existsSync(to)) {
        console.log(`Skip move (already at target): ${base}.md`);
        continue;
      }
      throw new Error(`Missing source file: ${from}`);
    }
    fs.renameSync(from, to);
    console.log(`Moved ${base}.md -> ${path.relative(ROOT, to)}`);
  }
}

function main() {
  const cmd = process.argv[2] || 'all';
  if (cmd === 'yaml') {
    writeRegionalDirectoryYaml();
    return;
  }
  if (cmd === 'hubs') {
    writeRegionalDirectoryYaml();
    writeDistrictHubs();
    return;
  }
  if (cmd === 'overviews') {
    writeSubjectOverviews();
    return;
  }
  if (cmd === 'move') {
    moveSourceCards();
    return;
  }
  writeRegionalDirectoryYaml();
  writeDistrictHubs();
  writeSubjectOverviews();
  moveSourceCards();
  console.log('Done. Next: patch card related_pages for overview slugs, update AGENTS/README, run export:knowledge.');
}

main();
