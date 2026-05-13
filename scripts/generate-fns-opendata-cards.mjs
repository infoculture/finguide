#!/usr/bin/env node
/**
 * Генерирует карточки источников wiki/data-sources/federal/nalog/7707329152-*.md
 * из снимка страницы витрины (таблица наборов).
 *
 * Обновить снимок: скачать https://www.nalog.gov.ru/rn77/opendata/ в scripts/data/fns-opendata-page-snapshot.md
 * и перезапустить: node scripts/generate-fns-opendata-cards.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SNAPSHOT = path.join(ROOT, 'scripts/data/fns-opendata-page-snapshot.md');
const OUT_DIR = path.join(ROOT, 'wiki/data-sources/federal/nalog');

function parseRows(text) {
  const re =
    /\|\s*(\d+)\s*\|\s*\[([^\]]*)\]\(\/opendata\/(7707329152-[a-z0-9]+)\)\s*\|\s*([A-Za-z]+)\s*\|/g;
  const rows = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    rows.push({
      n: +m[1],
      title: m[2].replace(/\s+/g, ' ').trim(),
      id: m[3],
      format: m[4].toLowerCase(),
    });
  }
  return rows;
}

function yamlDoubleQuoted(s) {
  return (
    '"' +
    String(s)
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\r?\n/g, ' ') +
    '"'
  );
}

function sidebarLabel(title, max = 52) {
  if (title.length <= max) return title;
  return title.slice(0, max - 1) + '…';
}

function pickRelated({ id, title }) {
  const suf = id.replace('7707329152-', '');
  const base = ['/data-sources/federal/data-gov-ru', '/organizations/fns'];
  if (suf === 'purchase') {
    return [
      ...base,
      '/data-sources/federal/procurement',
      '/information-systems/federal/fnssite',
    ];
  }
  const egrulish =
    /массив|масс|нескольких юридических|учредител|руководител|дисквалифицирован|РАФП|офшорных|реестр дисквалифицированных|адрес.*нескольк|исполнительных органов которых входят/i.test(
      title,
    ) ||
    [
      'masaddress',
      'massleaders',
      'massfounders',
      'disqualifiedpersons',
      'registerdisqualified',
      'rafp',
    ].includes(suf);
  if (egrulish) {
    return [
      '/data-sources/federal/data-gov-ru',
      '/information-systems/federal/egrul',
      '/data-sources/federal/nalog-regstats',
      '/organizations/fns',
    ];
  }
  const taxForms =
    /\([Фф]орма|начислен|поступлен|налоговой базе|задолженност|специальных налоговых режимов|сведения об уплаченных|статьи 102|доходов и расходов по данным бух|среднесписочной|консолидированной группе|бухгалтерской \(финансовой\)|налоговых правонарушений|уплаченных организацией/i.test(
      title,
    ) ||
    /^(poved|nacm|nacp|nmpn|post|usn|eshn|1nds|paytax|debtam|revexp|sshr2019|snr|snrip|kgn|taxagent|decfl|profitorg|inbox|rolwork|zatea|zatean|arrearsoftea|uid|oenvd|statndpi|beer|usnr|eshnr|envdr)\b/.test(
      suf,
    );
  if (taxForms) {
    return [
      '/data-sources/federal/data-gov-ru',
      '/data-sources/federal/nalog-statistics',
      '/reporting/tax-and-customs-revenue-statistics',
      '/organizations/fns',
    ];
  }
  return [
    '/data-sources/federal/data-gov-ru',
    '/data-sources/federal/nalog-statistics',
    '/information-systems/federal/fnssite',
    '/organizations/fns',
  ];
}

function extraTags({ id, title }) {
  const suf = id.replace('7707329152-', '');
  const tags = new Set(['data-source', 'federal', 'tax']);
  if (suf === 'purchase') tags.add('procurement');
  if (
    /\([Фф]орма|начислен|поступлен|статистик|обращени|контрольной работе|задолженност|специальных налоговых режимов|сведения об уплаченных|статьи 102|доходов и расходов|среднесписочной|консолидированной группе|правонарушений/i.test(
      title,
    ) ||
    /^(poved|nacm|nacp|nmpn|post|rolwork|inbox|zatea|zatean|arrearsoftea|uid|1nom)/.test(suf)
  ) {
    tags.add('statistics');
  }
  if (
    /реестр|перечень|справочник|юридическ|индивидуальн|Единый реестр субъектов|РАФП|дисквалифицирован|масс|адрес/i.test(
      title,
    )
  ) {
    tags.add('organizations');
  }
  return [...tags];
}

function buildDescription(row) {
  const fmt = row.format.toUpperCase();
  const scope =
    row.n >= 74
      ? 'Набор в архивной секции витрины ФНС (обновление не ведётся). '
      : 'Открытый набор данных ФНС. ';
  const tail =
    'Паспорт набора и ссылки на файлы на nalog.gov.ru; удобно для машинной выгрузки и сопоставления с бюджетной и закупочной аналитикой при наличии ключей связки.';
  const head = `${scope}${fmt}: ${row.title}.`;
  const out = (head + ' ' + tail).slice(0, 480);
  return out;
}

function buildMarkdown(row) {
  const slug = `/data-sources/federal/${row.id}`;
  const legacy = row.n >= 74;
  const sourceUrl = `https://www.nalog.gov.ru/opendata/${row.id}`;
  const catalogUrl = 'https://www.nalog.gov.ru/rn77/opendata/';
  const related = pickRelated(row);
  const tags = extraTags(row);
  const formatsYaml = `  - ${row.format}`;
  const statusLine = legacy ? 'status: legacy\n' : '';

  const titleQ = yamlDoubleQuoted(row.title);
  const descQ = yamlDoubleQuoted(buildDescription(row));
  const labelQ = yamlDoubleQuoted(sidebarLabel(row.title));

  const relatedYaml = related.map((s) => `  - ${s}`).join('\n');

  return `---
title: ${titleQ}
sidebar_label: ${labelQ}
tags:
${tags.map((t) => `  - ${t}`).join('\n')}
last_updated: 2026-05-12T00:00:00.000Z
slug: ${slug}
content_type: data_source
entity_type: data-source
source_url: '${sourceUrl}'
data_source_kind: files
jurisdiction: federal
access: open
formats:
${formatsYaml}
${statusLine}related_information_system: /information-systems/federal/fnssite
description: ${descQ}
related_pages:
${relatedYaml}
---

# ${row.title}

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; один **паспорт открытых данных** ФНС с выгрузками в формате **${row.format.toUpperCase()}** |
| Тип доступа | Страница набора на сайте ФНС со ссылками на файлы; публичного стабильного API под конкретный набор не заявлен |
| Основные форматы | ${row.format.toUpperCase()} |
| Оператор | [ФНС России](/organizations/fns) |
| Режим доступа | Открытое скачивание по условиям лицензии на открытые данные на витрине ФНС |

Коротко: **${row.title}** — набор открытых данных ФНС; структура полей и версии файлов задаются **паспортом** на странице набора.

## Описание

Карточка относится к каталогу [открытых данных ФНС](${catalogUrl}) (идентификатор **${row.id}**). Состав показателей, ключи и периодичность обновления нужно сверять с **паспортом набора** и метаданными на странице ФНС. В объём карточки **не** входят внутренние сервисы администрирования и индивидуальные выписки из реестров, если они не совпадают с публикуемым CSV/XML/JSON.

## Оператор

[Федеральная налоговая служба](/organizations/fns) — витрина открытых данных: ${catalogUrl}

- Карточка ИС: [Сайт ФНС России — статистика и данные](/information-systems/federal/fnssite) — общий контур публикаций и типовые ограничения автоматизации.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Паспорт набора (скачивание файлов) | ${sourceUrl} | HTML-оболочка витрины; выгрузки **${row.format.toUpperCase()}** |
| Каталог всех наборов ФНС | ${catalogUrl} | HTML; CSV «Реестр наборов открытых данных ФНС России» |

## Объекты данных и показатели

- **Строка набора** и поля определяются **структурой** конкретной выгрузки (см. паспорт и пример файла на странице набора).
- **Связка** с бюджетными и закупочными рядами — через общие идентификаторы (например **ИНН**, **ОКВЭД**, территориальные коды), если они присутствуют в наборе; состав ключей нужно проверять по документации к файлу.
- **Пробелы:** прямой программный API витрины может отличаться от сценария «скачать файл»; URL вложенных архивов могут меняться при обновлении паспорта.

## Периодичность обновления

Обновление выгрузок — **по правилам конкретного паспорта** на странице ФНС. Общие ограничения портала и типичные риски автоматизации см. в карточке [Сайт ФНС России](/information-systems/federal/fnssite).${legacy ? ' Набор отнесён ФНС к разделу **без дальнейшего обновления** — использовать как архив снимков.' : ''}

## Ограничения и особенности

- Условия использования — **открытая лицензия** ФНС на открытые данные, текст на [странице витрины](${catalogUrl}) (в т.ч. требования к указанию источника и неискажению метаданных обновления).
- Не подменять микроданные открытой выгрузкой **агрегированной налоговой статистики** с других страниц ФНС — см. [Налоговая статистика ФНС](/data-sources/federal/nalog-statistics) и при необходимости [госрегистрация](/data-sources/federal/nalog-regstats).

## Связанные страницы wiki

${related
  .map((s) => {
    const linkTitles = {
      '/data-sources/federal/data-gov-ru': 'Портал data.gov.ru',
      '/organizations/fns': 'ФНС России (организация)',
      '/information-systems/federal/fnssite': 'Сайт ФНС (ИС)',
      '/data-sources/federal/nalog-statistics': 'Налоговая статистика ФНС',
      '/data-sources/federal/nalog-regstats': 'Статистика госрегистрации ФНС',
      '/information-systems/federal/egrul': 'ЕГРЮЛ / ЕГРИП',
      '/data-sources/federal/procurement': 'ЕИС (закупки)',
      '/reporting/tax-and-customs-revenue-statistics':
        'Отчётность: налоги и таможня (доходы)',
    };
    const labels = {
      '/data-sources/federal/data-gov-ru':
        'метаданные и зеркала наборов на федеральном портале открытых данных',
      '/organizations/fns': 'оператор витрины и нормативный контур',
      '/information-systems/federal/fnssite':
        'ограничения портала и смежные публичные разделы',
      '/data-sources/federal/nalog-statistics':
        'агрегированная налоговая статистика ФНС (другие формы и URL)',
      '/data-sources/federal/nalog-regstats':
        'своды по государственной регистрации ЮЛ и ИП (не паспорт этого набора)',
      '/information-systems/federal/egrul':
        'операционный контур реестра, если набор — производная или справочник к регистрации',
      '/data-sources/federal/procurement':
        'закупки и контракты при анализе пересечений с налоговыми публикациями',
      '/reporting/tax-and-customs-revenue-statistics':
        'отчётность и показатели доходов бюджета в контексте налоговых форм',
    };
    return `- [${linkTitles[s]}](${s}) — ${labels[s]}.`;
  })
  .join('\n')}

## Не путать с

- **[Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)** — прежде всего **агрегированные** таблицы отчётности по методике ФНС, не обязательно тот же срез и частота, что у машиночитаемого набора \`${row.id}\`.
`;
}

function main() {
  const text = fs.readFileSync(SNAPSHOT, 'utf8');
  const rows = parseRows(text);
  if (rows.length !== 95) {
    console.error(`Expected 95 rows, got ${rows.length}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const row of rows) {
    const file = path.join(OUT_DIR, `${row.id}.md`);
    fs.writeFileSync(file, buildMarkdown(row), 'utf8');
  }
  console.log(`Wrote ${rows.length} files to ${path.relative(ROOT, OUT_DIR)}`);
}

main();
