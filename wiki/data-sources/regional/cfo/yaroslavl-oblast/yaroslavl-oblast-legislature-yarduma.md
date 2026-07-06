---
title: 'Ярославская область: Ярославская областная Дума (yarduma.ru)'
sidebar_label: 'Областная Дума'
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/yaroslavl-oblast-legislature-yarduma
source_url: 'https://www.yarduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт законодательного органа Ярославской области: повестка,
  проекты и принятые законы, в том числе о бюджете.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion
  - /data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion
  - /data-sources/regional/subject-yaroslavl-oblast-sources-overview
  - /information-systems/federal/sozd
  - /data-sources/regional/how-to-find-regional-data
---

# Ярославская область: Ярославская областная Дума (yarduma.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Законодательный орган Ярославской области |
| Тип доступа | Официальный веб-портал |
| Основные форматы | HTML, вложения (часто PDF) |
| Оператор | Ярославская областная Дума |
| Режим доступа | Открытый |

Коротко: вход к **законодательному** этапу бюджетного цикла (проекты законов о бюджете, повестка, решения). Для эталонных текстов НПА после регистрации используйте [банк НПА области](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — набор разделов и архив зависят от структуры сайта |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; стабильного публичного API нет |
| Юридическая значимость (`legal_significance`) | официальный орган законодательной власти субъекта |
| Задержка обновления (`update_lag`) | привязана к сессиям и календарю рассмотрения |
| Глубина архива (`archive_depth`) | определяется разделами документов и новостной лентой |
| Лицензия (`license_or_terms`) | условия использования материалов сайта |

## Описание

На `yarduma.ru` публикуются материалы заседаний, законопроекты и принятые законы. Для финансового аналитика важны **законы о бюджете** и сопутствующие акты; для исполнения и сводных показателей — [Минфин области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion).

## Оператор

Ярославская областная Дума — канонический вход: https://www.yarduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://www.yarduma.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты и законы** Ярославской области, в том числе о бюджете.
- **Повестка и решения** заседаний (контекст и даты).
- Связка: финансовый год, стадия документа; для машинной обработки фиксируйте URL и дату скачивания PDF.

## Периодичность обновления

Обновления концентрируются вокруг пленарных заседаний и сроков бюджетного процесса.

## Ограничения и особенности

- Итоговые тексты НПА для правовой квалификации сверяйте с [эталонным банком](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion), если на сайте Думы размещена рабочая версия.

## Связанные страницы wiki

- [Банк НПА Ярославской области](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion) — эталонные тексты зарегистрированных актов.
- [Министерство финансов Ярославской области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion) — исполнение бюджета и отчётность.
- [Сводная страница субъекта](/data-sources/regional/subject-yaroslavl-oblast-sources-overview) — все источники по области.
- [Система обеспечения законодательной деятельности (ГАС «Законодательство»)](/information-systems/federal/sozd) — федеральный контекст законопроектной работы.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[Банк НПА](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion)** — другой контур (реестр эталонных текстов), а не повестка и новости парламента.
