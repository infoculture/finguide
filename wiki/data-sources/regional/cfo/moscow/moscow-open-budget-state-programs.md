---
title: "Город Москва: государственные программы на портале «Открытый бюджет»"
sidebar_label: Госпрограммы (budget.mos.ru)
tags:
  - data-source
  - regional
  - budget
  - programs
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-open-budget-state-programs
source_url: "https://budget.mos.ru/budget/gp/passports"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; машинные выгрузки — через смежные федеральные и городские наборы при наличии
description: >-
  Раздел государственных программ города Москвы на портале «Открытый бюджет города Москвы»:
  паспорта программ, целевые показатели и материалы по реализации в гражданском интерфейсе.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-open-budget
  - /data-sources/regional/moscow-findep
  - /data-sources/federal/budget-gov-ru-datasets
  - /glossary/gov-programs
---

# Город Москва: государственные программы на портале «Открытый бюджет»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Город Москва**: **государственные программы** и их публичное раскрытие |
| Тип доступа | Тематический раздел портала **budget.mos.ru** |
| Основные форматы | **HTML** (карточки программ, паспорта, показатели — по реализации раздела) |
| Оператор | **Правительство Москвы** (портал «Открытый бюджет») |
| Режим доступа | Открытое чтение |

Коротко: **специализированный вход** к **паспортам и показателям** городских государственных программ. Для **сводных бюджетных цифр** и **КБК** используйте также **[корень «Открытого бюджета»](/data-sources/regional/moscow-open-budget)** и **[«Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — отбор показателей для гражданской витрины; юридически значимые тексты НПА сверяйте с **[mosopen.ru](/data-sources/regional/moscow-legal-acts-mosopen)** |
| Машиночитаемость (`machine_readability`) | Преимущественно **HTML** |
| Юридическая значимость (`legal_significance`) | **Официальная** витрина правительства |
| Задержка обновления (`update_lag`) | Зависит от цикла **планирования и отчётности** по программам |
| Лицензия (`license_or_terms`) | Условия портала **budget.mos.ru** |

## Описание

Раздел **«Государственные программы»** связывает **цели и показатели** программ с бюджетным контекстом города. Для терминологии см. **[государственные программы (глоссарий)](/glossary/gov-programs)** и **БК РФ** в части программ субъекта.

## Оператор

**Правительство Москвы** — раздел: https://budget.mos.ru/budget/gp/passports

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Паспорта и программы | https://budget.mos.ru/budget/gp/passports | HTML |
| Корень открытого бюджета | https://budget.mos.ru/ | HTML |

## Объекты данных и показатели

- **Государственные программы города Москвы** — наименование, паспорт, целевые показатели (в объёме публикации).
- **Связь с бюджетом** — через агрегаты и ссылки раздела; детальные **КБК/КОСГУ** — в отчётности и **ГИИС «Электронный бюджет»**.

## Периодичность обновления

Обновляется по **бюджетному** и **программному** циклу города; ориентируйтесь на даты на страницах конкретных программ.

## Примеры доступа

```bash
curl -fsSL -A "finguide-budget-mos-gp/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://budget.mos.ru/budget/gp/passports"
```

## Связанные страницы wiki

- [Государственные программы РФ (глоссарий)](/glossary/gov-programs) — терминология и связь с бюджетным циклом.
- [Открытый бюджет Москвы (корень портала)](/data-sources/regional/moscow-open-budget) — общий контур бюджета для граждан.
- [Департамент финансов](/data-sources/regional/moscow-findep) — финансовый орган и нормативные материалы.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые плановые и исполнительные ряды.
- [Правовые акты Москвы (mosopen.ru)](/data-sources/regional/moscow-legal-acts-mosopen) — канонические тексты актов.

## Не путать с

- **[Федеральные государственные программы](/data-sources/federal/budget-gov-ru-datasets)** в выгрузках **федерального** бюджета — **другой** уровень власти и классификации.
