---
title: "Город Москва: портал «Открытый бюджет города Москвы» (budget.mos.ru)"
sidebar_label: Открытый бюджет (budget.mos.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-open-budget
source_url: "https://budget.mos.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; агрегаты и визуализации; первичные КБК-таблицы — через отчётность и ГИИС «Электронный бюджет»
description: >-
  Официальная гражданская витрина бюджета города Москвы: основные параметры, структура доходов и расходов,
  материалы по планированию и исполнению, навигация к госпрограммам и смежным разделам.
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/moscow-finance-department
  - type: available_in
    target: /information-systems/regional/moscow-open-budget
related_pages:
  - /information-systems/regional/moscow-open-budget
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-open-budget-state-programs
  - /data-sources/regional/moscow-findep
  - /data-sources/regional/moscow-open-data-portal
  - /data-sources/federal/budget-gov-ru-datasets
  - /reporting/0503317
  - /glossary/budget
---

# Город Москва: портал «Открытый бюджет города Москвы» (budget.mos.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Город Москва** — **«бюджет для граждан»** и наглядное раскрытие |
| Тип доступа | Публичный портал **budget.mos.ru** |
| Основные форматы | **HTML**, визуализации и таблицы в браузере |
| Оператор | **Правительство Москвы** |
| Режим доступа | Открытый просмотр |

Коротко: **первый ориентир** для **понимания** городского бюджета без чтения сухих форм. Для **сопоставимых с другими субъектами** машинных рядов и **КБК** используйте **[наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)** и **[0503317](/reporting/0503317)** по консолидированному бюджету.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** относительно первичной бюджетной отчётности — **упрощение** для граждан |
| Машиночитаемость (`machine_readability`) | Преимущественно **HTML**; выгрузки «одним CSV всего бюджета» не гарантируются |
| Юридическая значимость (`legal_significance`) | **Официальная** витрина правительства |
| Задержка обновления (`update_lag`) | Привязана к **этапам бюджетного цикла** города |
| Лицензия (`license_or_terms`) | Условия сайта **budget.mos.ru** |

## Описание

Портал объединяет **объяснения**, **графики** и **ссылки** на нормативные акты. Термины бюджетного процесса см. **[Бюджет (глоссарий)](/glossary/budget)**. Раздел **государственных программ** вынесен отдельной карточкой: **[госпрограммы на budget.mos.ru](/data-sources/regional/moscow-open-budget-state-programs)**.

## Оператор

**Правительство Москвы** — https://budget.mos.ru/

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Корень портала | https://budget.mos.ru/ | HTML |
| Государственные программы | https://budget.mos.ru/budget/gp/passports | HTML |

## Объекты данных и показатели

- **Агрегированные** доходы и расходы, ключевые направления, инфографика.
- **Ссылки** на закон о бюджете и иные акты (канонические тексты НПА при необходимости сверяйте с **[mosopen.ru](/data-sources/regional/moscow-legal-acts-mosopen)**).
- **Не заменяет** детальные открытые наборы **data.mos.ru** и **budget.gov.ru** по выбранным срезам.

## Периодичность обновления

По ходу **утверждения**, **уточнения** и **отчёта об исполнении** бюджета города; смотрите даты на страницах показателей.

## Примеры доступа

```bash
curl -fsSL -A "finguide-budget-mos/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://budget.mos.ru/"
```

## Связанные страницы wiki

- [Госпрограммы на том же портале](/data-sources/regional/moscow-open-budget-state-programs) — паспорта и показатели программ.
- [Департамент финансов](/data-sources/regional/moscow-findep) — финорган и нормативный блок.
- [Открытые данные data.mos.ru](/data-sources/regional/moscow-open-data-portal) — машиночитаемые наборы по темам города.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — контекст **0503317** и федеральной отчётности.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — план-факт в разрезе классификаций.

## Не путать с

- **[Региональные бюджеты на data.budget.gov.ru](/data-sources/federal/regionalnye-byudzhety)** — **федеральная** выкладка; портал Москвы может **опережать или отличаться** в деталях представления.
