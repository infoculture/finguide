#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();

function entries(dir, pattern) {
  return fs
    .readdirSync(dir)
    .filter((name) => pattern.test(name))
    .map((name) => {
      const {data} = matter(fs.readFileSync(path.join(dir, name), 'utf8'));
      return {slug: data.slug, title: data.title, name};
    })
    .filter((item) => typeof item.slug === 'string' && typeof item.title === 'string')
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function groupedList(items, keyOf) {
  const groups = new Map();
  for (const item of items) {
    const key = keyOf(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([key, rows]) =>
        `## ${key}\n\n${rows.map((row) => `- [${row.title}](${row.slug}) — \`${row.name.replace(/\.md$/u, '')}\`.`).join('\n')}`,
    )
    .join('\n\n');
}

const ebudgetDir = path.join(ROOT, 'wiki', 'data-sources', 'federal', 'budget', 'ebudget');
const fnsDir = path.join(ROOT, 'wiki', 'data-sources', 'federal', 'nalog');
const ebudget = entries(ebudgetDir, /^opendata-.*\.md$/u);
const fns = entries(fnsDir, /^7707329152-.*\.md$/u);

const ebudgetPage = `---
title: Индекс наборов открытых данных ГИИС «Электронный бюджет»
sidebar_label: Индекс наборов ГИИС ЭБ
description: Полный навигационный индекс карточек паспортов открытых данных budget.gov.ru по двум семействам идентификаторов.
tags: [data-source, federal, budget, index]
last_updated: 2026-07-16
slug: /data-sources/federal/budget-gov-opendata-index
content_type: reference
related_pages:
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Индекс наборов открытых данных ГИИС «Электронный бюджет»

Это полный читательский маршрут к **${ebudget.length}** карточкам, созданным из каталога паспортов \`budget.gov.ru\`. Наличие карточки означает наличие записи в снимке каталога, но не гарантирует одинаковую полноту и стабильность каждого endpoint: перед анализом проверяйте паспорт и \`last_verified\`.

Основной обзор и методика доступа: [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

${groupedList(ebudget, (item) => item.name.split('-')[1] === '7710168360' ? 'Наборы 7710168360-*' : 'Наборы 7710568760-*')}
`;

const fnsPage = `---
title: Индекс паспортов открытых данных ФНС России
sidebar_label: Индекс открытых данных ФНС
description: Полный навигационный индекс карточек паспортов открытых данных ФНС семейства 7707329152-*.
tags: [data-source, federal, tax, index]
last_updated: 2026-07-16
slug: /data-sources/federal/fns-opendata-index
content_type: reference
related_pages:
  - /organizations/fns
  - /information-systems/federal/fnssite
  - /data-sources/federal/nalog-statistics
---

# Индекс паспортов открытых данных ФНС России

Страница перечисляет **${fns.length}** карточек из зафиксированного снимка витрины ФНС. Карточки имеют низкий RAG-приоритет до индивидуальной редакционной проверки; периодичность, структура и актуальный файл определяются паспортом конкретного набора.

${groupedList(fns, (item) => item.name.slice(11, 12).toUpperCase())}
`;

fs.writeFileSync(path.join(ebudgetDir, 'budget-gov-opendata-index.md'), ebudgetPage, 'utf8');
fs.writeFileSync(path.join(fnsDir, 'fns-opendata-index.md'), fnsPage, 'utf8');
console.log(`write-import-family-hubs: ГИИС ЭБ ${ebudget.length}, ФНС ${fns.length}`);
