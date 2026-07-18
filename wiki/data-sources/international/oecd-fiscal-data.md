---
title: OECD Data — fiscal and economic indicators
sidebar_label: OECD Data
description: >-
  Витрины OECD по экономике и публичным финансам: удобны для межстрановых сравнений,
  но не дублируют российские административные регистры и КБК.
tags:
  - data-source
  - international
  - statistics
  - macro
last_updated: 2026-07-16
slug: /data-sources/international/oecd-fiscal-data
source_url: https://data.oecd.org/
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - csv
  - json
  - html
status: current
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/oecd
related_pages:
  - /data-sources/international
  - /data-sources/international/imf-gfs
  - /data-sources/international/world-bank
  - /data-sources/international/oecd-fiscal-decentralisation
  - /reference/international-gfs-cofog
  - /organizations/minfin
jurisdiction_level: international
last_verified: 2026-07-16
data_completeness: partial
machine_readability: HTML, XLSX and dataset-dependent API
legal_significance: official
update_lag: dataset-dependent
archive_depth: dataset-dependent
license_or_terms: OECD terms and conditions
---

# OECD Data — fiscal and economic indicators

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Международные витрины OECD по странам-участницам и темам; набор показателей по **Российской Федерации** зависит от статуса участия и открытости конкретного продукта на дату обращения |
| Тип доступа | Веб-каталог **data.oecd.org** с фильтрами; часть наборов с выгрузкой таблиц и API (см. документацию OECD) |
| Основные форматы | HTML, CSV, JSON в зависимости от виджета или API |
| Оператор | [Организация экономического сотрудничества и развития](/organizations/oecd) (OECD) |
| Режим доступа | Публичные разделы каталога; расширенные данные и API могут требовать **регистрации** или подписки по правилам OECD |

Коротко: каталог **OECD Data** с фильтрами по странам и темам; используйте его для сравнений методики и порядков величин, а не как юридически значимый источник исполнения федерального бюджета РФ. Для национальных агрегатов сверяйтесь с [Минфином России](/organizations/minfin) и [федеральными наборами](/data-sources/federal/minfin-opendata).

Для субнациональных доходов, расходов, трансфертов и COFOG переходите к конкретной [OECD Fiscal Decentralisation Database](/data-sources/international/oecd-fiscal-decentralisation). В её текущих проверенных XLSX Россия отсутствует, поэтому общий каталог OECD нельзя использовать как доказательство наличия российского ряда.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная: набор стран, лет и показателей определяется конкретным продуктом |
| Машиночитаемость (`machine_readability`) | HTML, XLSX и API в зависимости от набора |
| Юридическая значимость (`legal_significance`) | Официальная публикация OECD, не первичный российский источник |
| Задержка обновления (`update_lag`) | Зависит от продукта и таблицы |
| Глубина архива (`archive_depth`) | Зависит от продукта и версии |
| Лицензия (`license_or_terms`) | OECD Terms and Conditions |

## Описание

Карточка описывает **обзорный каталог** показателей OECD: темы публичных финансов, налогообложения, национальных счетов и смежных блоков. Структура «показатель — страна — период» унифицирована в рамках методик OECD и может **расходиться** с российскими административными классификаторами и формами отчётности.

## Оператор

[ОECD](https://www.oecd.org/) — каталог данных: https://data.oecd.org/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог OECD Data | https://data.oecd.org/ | HTML; выгрузки по выбору |
| OECD.stat (хранилище рядов; программный доступ SDMX-REST) | https://stats.oecd.org/ | HTML, SDMX, CSV по выбору |

## Объекты данных и показатели

- **Строка набора** — как правило **значение показателя** для страны (или группы) и периода с метаданными OECD; идентификаторы показателей и версии методик смотрите на странице индикатора.
- **Связка с РФ** — на уровне **макроагрегатов и определений OECD**, не строк исполнения по КБК; для последних используйте [открытые данные Минфина](/data-sources/federal/minfin-opendata).
- **Пробелы:** обновления **нерегулярны** по странам; часть рядов с пересмотрами; сравнение стран с разным статусом методологической отчётности требует осторожности.

## Периодичность обновления

У каждого показателя своя **дата релиза** и пересмотры; в интерфейсе OECD обычно видны метаданные выпуска. Для планирования аналитики госфинансов РФ ориентируйтесь на национальный календарь публикаций.

## Ограничения и особенности

- **Условия использования** — см. разделы Terms / Data policy на **oecd.org** для выбранного продукта.
- **Не заменяет российские регистры** по закупкам, субсидиям и казначейскому исполнению.

## Связанные страницы wiki

- [OECD Fiscal Decentralisation Database](/data-sources/international/oecd-fiscal-decentralisation) — конкретные XLSX-таблицы по уровням управления и COFOG; Россия в актуальном охвате не подтверждена.
- [IMF GFS](/data-sources/international/imf-gfs) — альтернативный международный контур GFS.
- [Всемирный банк — данные по России](/data-sources/international/world-bank) — смежные ряды в методике WB.
- [Минфин России](/organizations/minfin) — национальный контур бюджетной политики и публикаций.
- [Международные классификаторы](/reference/international-standards) — контекст методик.

## Не путать с

- **[Eurostat](https://ec.europa.eu/eurostat)** и другими региональными витринами — иная география охвата и методическая база, хотя темы пересекаются с OECD.
