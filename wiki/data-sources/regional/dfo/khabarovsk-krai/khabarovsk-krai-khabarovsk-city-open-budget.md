---
title: 'Хабаровский край: открытый бюджет города Хабаровска'
sidebar_label: Открытый бюджет г. Хабаровск
tags:
  - data-source
  - regional
  - municipal
last_updated: 2026-05-15
slug: /data-sources/regional/khabarovsk-krai-khabarovsk-city-open-budget
source_url: 'https://budget.khv27.ru/'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Муниципальный портал открытого бюджета города Хабаровска: проект и утверждённый
  бюджет города, исполнение и сопутствующие публикации для граждан и
  исследователей.
content_type: data_source
entity_type: data-source
data_completeness: partial
machine_readability: html_portal
related_pages:
  - /data-sources/regional/subject-khabarovsk-krai-sources-overview
  - /data-sources/regional/khabarovsk-krai-minfin
  - /data-sources/regional/khabarovsk-krai-budget-for-citizens-minfin
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Хабаровский край: открытый бюджет города Хабаровска

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальный** бюджет города Хабаровска (внутри Хабаровского края) |
| Тип доступа | Специализированный портал открытого бюджета |
| Основные форматы | HTML; возможны вложения и визуализации |
| Оператор | Органы местного самоуправления города Хабаровска (портал budget.khv27.ru) |
| Режим доступа | Открытый |

Коротко: **муниципальный** контур открытости бюджета; не смешивать с [краевым бюджетом](/data-sources/regional/khabarovsk-krai-minfin) и [«Бюджетом для граждан»](/data-sources/regional/khabarovsk-krai-budget-for-citizens-minfin) субъекта.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки годов и показателей на портале |
| Машиночитаемость (`machine_readability`) | HTML; наличие CSV/API — по факту на сайте |
| Юридическая значимость (`legal_significance`) | официальная муниципальная витрина (сверка с решением о бюджете ОМСУ) |
| Задержка обновления (`update_lag`) | привязана к муниципальному бюджетному циклу |
| Глубина архива (`archive_depth`) | см. разделы архивов на портале |
| Лицензия (`license_or_terms`) | см. условия сайта ОМСУ |

## Описание

Портал **budget.khv27.ru** ориентирован на **прозрачность бюджета города Хабаровска**: проект и утверждённый бюджет, ключевые показатели исполнения, материалы для граждан. Для сопоставления с **краевым** уровнем используйте [Минфин края](/data-sources/regional/khabarovsk-krai-minfin); для методики уровней бюджетной системы — [консолидированные бюджеты](/data-sources/regional/consolidated-budgets).

## Оператор

Город Хабаровск (открытый бюджет) — канонический вход: https://budget.khv27.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал открытого бюджета | https://budget.khv27.ru/ | HTML |

## Объекты данных и показатели

- **Проект и утверждённый** бюджет города, **исполнение** по доступным разрезам.
- Пояснения и визуализации для граждан (агрегаты; детализация — по разделам сайта).

## Периодичность обновления

В фазах утверждения бюджета ОМСУ и отчётности об исполнении; уточняйте на портале.

## Ограничения и особенности

- Домен и структура портала могут меняться при техпереездах; при недоступности проверьте официальный сайт администрации города.
- ОКТМО и уровень власти должны явно соответствовать **муниципалитету**, а не краю.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-khabarovsk-krai-sources-overview) — все источники по Хабаровскому краю в wiki.
- [Минфин Хабаровского края](/data-sources/regional/khabarovsk-krai-minfin) — краевой бюджет и отчётность субъекта.
- [«Бюджет для граждан» (край)](/data-sources/regional/khabarovsk-krai-budget-for-citizens-minfin) — краевой «гражданский» контур.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — как читать вложенность уровней.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые данные для методической сверки.

## Не путать с

- **[Минфин Хабаровского края](/data-sources/regional/khabarovsk-krai-minfin)** — бюджет **субъекта РФ**; показатели и классификаторы не суммируются с городским бюджетом без консолидационной методики.
