---
title: 'Министерство финансов Архангельской области (портал правительства «ДвинаЛенд»)'
sidebar_label: Минфин Архангельской области
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/arkhangelsk-oblast-minfin-dvinaland
source_url: 'https://dvinaland.ru/gov/iogv/minfin'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный раздел Министерства финансов Архангельской области на портале
  dvinaland.ru: бюджет, отчётность, ссылки на «Бюджет для граждан» и смежные
  материалы регионального финансового контура.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-arkhangelsk-oblast-sources-overview
  - /data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin
  - /data-sources/regional/arkhangelsk-oblast-pravo-publication-region29
  - /data-sources/regional/arkhangelsk-oblast-roskazna-arhangelsk
  - /data-sources/federal/budget-gov-ru-datasets
---

# Министерство финансов Архангельской области (портал правительства «ДвинаЛенд»)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** финансовый орган **Архангельской области** |
| Тип доступа | Официальный раздел на **dvinaland.ru** |
| Основные форматы | HTML, PDF, при наличии — **XLSX** вложения |
| Оператор | Министерство финансов Архангельской области |
| Режим доступа | Открытый |

Коротко: **главный** региональный вход к материалам **областного** бюджета: нормативные акты (ссылками), отчётность, переход к **«Бюджету для граждан»**. Для **опубликованных** текстов законов см. **[publication.pravo.gov.ru, region29](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки разделов министерства |
| Машиночитаемость (`machine_readability`) | смешанный: HTML + файлы; без гарантированного единого API |
| Юридическая значимость (`legal_significance`) | официальный **региональный** орган |
| Задержка обновления (`update_lag`) | привязана к **бюджетному** циклу и отчётности |
| Глубина архива (`archive_depth`) | зависит от структуры портала и архивации документов |
| Лицензия (`license_or_terms`) | условия портала **dvinaland.ru** |

## Описание

Раздел **/gov/iogv/minfin** консолидирует ссылки на **бюджет**, **отчёты**, **«Электронный бюджет»** (как внешний сервис) и **гражданские** материалы. Для **исполнения** и **форм казначейства** см. **[УФК Росказны](/data-sources/regional/arkhangelsk-oblast-roskazna-arhangelsk)**; для **муниципального** уровня города — **[открытый бюджет Архангельска](/data-sources/regional/arkhangelsk-oblast-arhcity-open-budget)**.

## Оператор

Министерство финансов Архангельской области — канонический вход: https://dvinaland.ru/gov/iogv/minfin

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Минфина на портале | https://dvinaland.ru/gov/iogv/minfin | HTML |

## Объекты данных и показатели

- **Проекты и материалы** по **областному** бюджету (в форме, публикуемой министерством).
- **Отчётность** об исполнении — таблицы и PDF по годам (уточняйте по структуре сайта).
- Ключ связки: **финансовый год**, **КБК** (если приводятся в таблицах).

## Периодичность обновления

Обновляется по **бюджетному** циклу (проект, первое чтение, поправки, исполнение) и по мере выхода **отчётных** форм.

## Ограничения и особенности

- Часть **машинных** рядов воспроизводится через **федеральные** витрины — см. **[наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)**.

## Связанные страницы wiki

- [«Бюджет для граждан» (областной)](/data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin) — упрощённый срез того же контура.
- [Официальное опубликование НПА (region29)](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29) — юридически значимые **тексты** актов.
- [Сводная страница субъекта](/data-sources/regional/subject-arkhangelsk-oblast-sources-overview) — все источники по области в wiki.

## Не путать с

- **[УФК Росказны](/data-sources/regional/arkhangelsk-oblast-roskazna-arhangelsk)** — **федеральный** оператор **казначейского** исполнения; Минфин области — **владелец политики** регионального бюджета и части отчётности.
