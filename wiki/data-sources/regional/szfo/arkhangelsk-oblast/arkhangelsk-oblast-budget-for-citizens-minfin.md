---
title: 'Архангельская область: «Бюджет для граждан» (Минфин, портал «ДвинаЛенд»)'
sidebar_label: Бюджет для граждан (область)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin
source_url: 'https://dvinaland.ru/gov/iogv/minfin/citizenry'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: html
description: >-
  Региональный раздел «Бюджет для граждан» на сайте Минфина Архангельской
  области: упрощённые пояснения и отчёты об исполнении областного бюджета.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-arkhangelsk-oblast-sources-overview
  - /data-sources/regional/arkhangelsk-oblast-minfin-dvinaland
  - /data-sources/regional/arkhangelsk-oblast-arhcity-open-budget
  - /data-sources/regional/arkhangelsk-oblast-pravo-publication-region29
  - /data-sources/federal/budget-gov-ru-datasets
---

# Архангельская область: «Бюджет для граждан» (Минфин, портал «ДвинаЛенд»)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Областной** бюджет Архангельской области |
| Тип доступа | Официальный раздел **Минфина** на портале правительства |
| Основные форматы | HTML, PDF (если выложены документы) |
| Оператор | Министерство финансов Архангельской области |
| Режим доступа | Открытый |

Коротко: **гражданская** витрина по **областному** бюджету: агрегированные объяснения и отчёты об исполнении. Для **муниципального** бюджета Архангельска см. **[открытый бюджет администрации](/data-sources/regional/arkhangelsk-oblast-arhcity-open-budget)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения витрины «для граждан» |
| Машиночитаемость (`machine_readability`) | HTML; без отдельного стабильного API в карточке |
| Юридическая значимость (`legal_significance`) | официальный **региональный** орган исполнительной власти |
| Задержка обновления (`update_lag`) | привязана к циклу **областного** бюджета |
| Глубина архива (`archive_depth`) | зависит от политики архивации на портале |
| Лицензия (`license_or_terms`) | условия портала **dvinaland.ru** |

## Описание

Раздел **citizenry** на ветке **Минфина** публикует **упрощённые** материалы по доходам и расходам **областного** бюджета и **отчётности**. Для **юридически значимых** текстов законов о бюджете после опубликования см. **[блок region29](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29)** и **[материалы Собрания](/data-sources/regional/arkhangelsk-oblast-aosd-budget)**.

## Оператор

Министерство финансов Архангельской области — канонический вход: https://dvinaland.ru/gov/iogv/minfin/citizenry

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| «Бюджет для граждан» | https://dvinaland.ru/gov/iogv/minfin/citizenry | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели **областного** бюджета в гражданском изложении.
- **Отчёты об исполнении** — в форме, публикуемой Минфином.
- Ключ связки: **финансовый год**, коды **КБК/разделы** — по таблицам на странице (если приводятся).

## Периодичность обновления

Вокруг утверждения **закона об областном бюджете** и отчётности об **исполнении**.

## Ограничения и особенности

- Для **сквозной** машинной аналитики по строкам бюджета обычно используют **[наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)** в сочетании с региональными выгрузками.

## Связанные страницы wiki

- [Министерство финансов Архангельской области (главный раздел)](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland) — полный контур министерства на портале.
- [Официальное опубликование НПА (region29)](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29) — тексты **опубликованных** законов и актов.
- [Сводная страница субъекта](/data-sources/regional/subject-arkhangelsk-oblast-sources-overview) — все источники по области в wiki.

## Не путать с

- **[Открытый бюджет города Архангельска](/data-sources/regional/arkhangelsk-oblast-arhcity-open-budget)** — **муниципальный** уровень.
