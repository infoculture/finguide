---
title: 'Пензенская область: бюджет для граждан — город Пенза (penza-gorod.ru)'
sidebar_label: Бюджет для граждан (г. Пенза)
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/penza-oblast-penza-city-budget-citizens
source_url: 'https://penza-gorod.ru/line_of_activity/finance/budget-citizens/'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Раздел официального сайта Пензенской городской Думы: бюджет города Пензы для
  граждан, публикации по исполнению и справочные материалы муниципального
  уровня (ОКТМО города).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-penza-oblast-sources-overview
  - /data-sources/regional/penza-oblast-minfin
  - /data-sources/regional/penza-oblast-open-budget-portal
  - /data-sources/regional/penza-oblast-pravo-gov-ru-npa-block-58
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Пензенская область: бюджет для граждан — город Пенза (penza-gorod.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальный** уровень (город **Пенза**) |
| Тип доступа | Официальный раздел сайта **Пензенской городской Думы** |
| Основные форматы | HTML |
| Оператор | Органы местного самоуправления города Пензы (публичный сайт) |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **муниципальная** витрина **«бюджет для граждан»** для **столицы** региона; для **областного** бюджета см. **[Минфин](/data-sources/regional/penza-oblast-minfin)** и **[открытый бюджет области](/data-sources/regional/penza-oblast-open-budget-portal)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения материалов на сайте города |
| Машиночитаемость (`machine_readability`) | HTML; машинные выгрузки в карточке не фиксировались |
| Юридическая значимость (`legal_significance`) | официальный муниципальный сайт |
| Задержка обновления (`update_lag`) | зависит от цикла утверждения и отчётности города |
| Глубина архива (`archive_depth`) | определяется архивом раздела |
| Лицензия (`license_or_terms`) | условия сайта **penza-gorod.ru** |

## Описание

Раздел **«Бюджет для граждан»** предназначен для **понятного** представления **доходов и расходов** бюджета города, **итогов исполнения** и сопутствующих пояснений. Для **сквозной** аналитики по субъекту сочетайте с **областными** источниками.

## Оператор

Пензенская городская Дума (официальный сайт) — канонический вход: https://penza-gorod.ru/line_of_activity/finance/budget-citizens/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Бюджет для граждан» | https://penza-gorod.ru/line_of_activity/finance/budget-citizens/ | HTML |

## Объекты данных и показатели

- **Пояснения** к бюджету города и **итоги исполнения** (по мере публикации).
- **Муниципальные** показатели; **ключ** — **ОКТМО** города Пензы.
- **Пробелы**: без гарантии наличия **CSV/JSON** — ориентируйтесь на файлы внутри HTML-страниц.

## Периодичность обновления

Связана с **муниципальным** бюджетным циклом и решениями Совета города.

## Ограничения и особенности

- При **автоматической** загрузке без типичного **User-Agent** браузера отдельные хостинги возвращают **403**; для скриптов используйте корректный заголовок **User-Agent** и уважайте **robots.txt**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" \
  "https://penza-gorod.ru/line_of_activity/finance/budget-citizens/"
```

## Связанные страницы wiki

- [Министерство финансов Пензенской области](/data-sources/regional/penza-oblast-minfin) — областной бюджетный контур.
- [Открытый бюджет Пензенской области](/data-sources/regional/penza-oblast-open-budget-portal) — областная витрина «для граждан».
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-penza-oblast-sources-overview) — все источники по Пензенской области в wiki.

## Не путать с

- **[Открытый бюджет области](/data-sources/regional/penza-oblast-open-budget-portal)** — уровень **субъекта** РФ, не города.
