---
title: 'Краснодарский край: государственные программы (Минэкономики КК)'
sidebar_label: Госпрограммы КК (economy.krasnodar.ru)
tags:
  - data-source
  - regional
  - programs
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-state-programs-economy
source_url: 'https://economy.krasnodar.ru/activity/gosprogrammy-kk'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Раздел сайта Министерства экономики Краснодарского края о государственных программах: документы,
  паспорта и материалы по финансовому обеспечению (в основном HTML/PDF на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/regional/krasnodar-krai-open-budget-openbudget23region
  - /data-sources/federal/budget-gov-ru-datasets
---

# Краснодарский край: государственные программы (Минэкономики КК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** — **государственные программы** и их **финансовое обеспечение** |
| Тип доступа | Публичный **раздел** сайта **Минэкономики** края |
| Основные форматы | **HTML**; **PDF** для **документов** программ |
| Оператор | **Министерство экономики** (развития) **Краснодарского края** |
| Режим доступа | Открытый |

Коротко: **официальные** материалы по **государственным программам** края: **паспорта**, **показатели**, **обоснования** расходов. Для **консолидированного** бюджета — **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** и **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** раздела, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — набор **документов** меняется по **циклам** планирования |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML/PDF** без **единого** публичного **API** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **регионального** органа **исполнительной власти** |
| Задержка обновления (`update_lag`) | **привязана** к **утверждению** программ и **корректировкам** |
| Глубина архива (`archive_depth`) | зависит от **политики** хранения **предыдущих** редакций на сайте |
| Лицензия (`license_or_terms`) | **условия** использования — по сайту оператора |

## Описание

Раздел **economy.krasnodar.ru/activity/gosprogrammy-kk** публикует **перечни** и **документы** **госпрограмм**. **Гражданская** подача программ также может встречаться на **[открытом бюджете](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)** — сверяйте **даты** и **редакции**.

## Оператор

Министерство экономики Краснодарского края — https://economy.krasnodar.ru/activity/gosprogrammy-kk

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Государственные программы КК | https://economy.krasnodar.ru/activity/gosprogrammy-kk | HTML / PDF |

## Объекты данных и показатели

- **Паспорта** государственных программ, **целевые** показатели, **объёмы** финансирования.
- **Связка** с **консолидированным бюджетом** — через **бюджетные** **законы** и **федеральные** витрины.

## Периодичность обновления

**При** утверждении и **корректировке** программ; **ежегодно** в рамках **бюджетного** цикла.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-gosprog-kk-check/1.0" \
  "https://economy.krasnodar.ru/activity/gosprogrammy-kk"
```

## Связанные страницы wiki

- [Минфин Краснодарского края](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **бюджетное** планирование и **отчётность** края.
- [Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region) — **визуализации** программ в **гражданской** подаче.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** ряды для **сверки**.

## Не путать с

- **[Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)** — **агрегированная** **гражданская** витрина; **Минэкономики** — **ведомственный** **официальный** раздел **документов**.
