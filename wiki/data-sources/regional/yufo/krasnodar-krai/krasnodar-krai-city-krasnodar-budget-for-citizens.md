---
title: 'Краснодарский край: бюджет для граждан (г. Краснодар)'
sidebar_label: Бюджет г. Краснодара (krd.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens
source_url: >-
  https://krd.ru/administratsiya/administratsii-krasnodara/departament-finansov/byudzhet-dlya-grazhdan
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
  Раздел «Бюджет для граждан» на сайте администрации г. Краснодара: муниципальный бюджет
  столицы края в понятной подаче; не заменяет краевой открытый бюджет.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-open-budget-openbudget23region
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/regional/municipal-budgets
---

# Краснодарский край: бюджет для граждан (г. Краснодар)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Городской округ** **г. Краснодар** — **муниципальный** бюджет **столицы** края |
| Тип доступа | Публичный **раздел** сайта **администрации** |
| Основные форматы | **HTML** |
| Оператор | **Департамент финансов** администрации **г. Краснодара** |
| Режим доступа | Открытый |

Коротко: **муниципальная** витрина **бюджета** **г. Краснодара**. Для **краевого** и **сводного** по **МО** контура — **[открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** раздела, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — охват **одного** **муниципального** образования |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **муниципальный** информационный ресурс |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | зависит от **архива** раздела на **krd.ru** |
| Лицензия (`license_or_terms`) | по **сайту** администрации |

## Описание

Раздел **Департамента финансов** публикует **материалы** **бюджета для граждан** **города Краснодара**. **Другие** **МО** края — на **[openbudget23region.ru](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)** или **сайтах** соответствующих **администраций**.

## Оператор

Департамент финансов администрации г. Краснодара — https://krd.ru/administratsiya/administratsii-krasnodara/departament-finansov/byudzhet-dlya-grazhdan

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Бюджет для граждан (г. Краснодар) | https://krd.ru/administratsiya/administratsii-krasnodara/departament-finansov/byudzhet-dlya-grazhdan | HTML |

## Объекты данных и показатели

- **Доходы** и **расходы** **муниципального** бюджета **г. Краснодара** (в **публикуемой** части).
- **Связка** с **ОКТМО** города — при **наличии** в **материалах** раздела.

## Периодичность обновления

**По мере** обновлений **администрации** и **бюджетного** цикла **МО**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-krd-budget-check/1.0" \
  "https://krd.ru/administratsiya/administratsii-krasnodara/departament-finansov/byudzhet-dlya-grazhdan"
```

## Связанные страницы wiki

- [Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region) — **краевой** и **муниципальные** разрезы **в целом** по субъекту.
- [Минфин Краснодарского края](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **региональный** бюджетный контур.
- [Муниципальные бюджеты (обзор)](/data-sources/regional/municipal-budgets) — **методика** работы с **МО**.

## Не путать с

- **[Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)** — **краевой** портал; **krd.ru** — **только** **муниципалитет** **столицы**.
