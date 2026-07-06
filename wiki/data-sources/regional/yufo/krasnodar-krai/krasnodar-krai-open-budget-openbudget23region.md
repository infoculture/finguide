---
title: 'Краснодарский край: открытый бюджет (openbudget23region.ru)'
sidebar_label: Открытый бюджет (openbudget23region.ru)
tags:
  - data-source
  - regional
  - budget
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-open-budget-openbudget23region
source_url: 'https://openbudget23region.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Региональный портал «Открытый бюджет» Краснодарского края: визуализации и пояснения по
  краевому и муниципальным бюджетам, исполнению и государственным программам.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens
  - /data-sources/regional/krasnodar-krai-state-programs-economy
  - /data-sources/federal/budget-gov-ru-datasets
---

# Краснодарский край: открытый бюджет (openbudget23region.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** и **муниципальные** образования — **региональный** портал **«бюджет для граждан»** |
| Тип доступа | Публичный **веб-портал** |
| Основные форматы | **HTML**; отдельные **файлы** — по разделам |
| Оператор | Проект **открытого бюджета** края (**openbudget23region.ru**) |
| Режим доступа | Открытый |

Коротко: **точка входа** для **понятного** представления **краевого** и **муниципальных** бюджетов, **исполнения** и **госпрограмм**. Для **сводных машиночитаемых** рядов — **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — охват **зависит** от разделов портала и **не заменяет** официальные **НПА** |
| Машиночитаемость (`machine_readability`) | **смешанный** — прежде всего **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** региональный **информационный** ресурс **прозрачности бюджета** |
| Задержка обновления (`update_lag`) | **разная** по разделам |
| Глубина архива (`archive_depth`) | зависит от **версирования** на портале |
| Лицензия (`license_or_terms`) | условия **переиспользования** — по сайту оператора |

## Описание

Портал ориентирован на **граждан** и **СМИ**: **графики**, **пояснения**, **разрезы** по **муниципалитетам**. Для **закона о бюджете** — **[Законодательное Собрание](/data-sources/regional/krasnodar-krai-legislative-assembly-budget-laws)**; для **бюджета г. Краснодара** отдельно — **[витрина администрации](/data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens)**.

## Оператор

Открытый бюджет Краснодарского края — https://openbudget23region.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://openbudget23region.ru/ | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели **доходов/расходов** края и **МО** (по мере размещения).
- **Государственные программы** в **гражданской** подаче (сверка с **[разделом Минэкономики](/data-sources/regional/krasnodar-krai-state-programs-economy)**).
- **Связка** с **ОКТМО**, **КБК** — только если явно приведена в **конкретном** разделе.

## Периодичность обновления

Задаётся **оператором** портала; при **смене** бюджетного **цикла** обычно обновляются **итоговые** блоки.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-openbudget23-check/1.0" \
  "https://openbudget23region.ru/"
```

## Связанные страницы wiki

- [Минфин Краснодарского края](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **официальные** материалы **финансового** блока.
- [Бюджет для граждан (г. Краснодар)](/data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens) — **муниципальная** витрина **столицы** края.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральные** машиночитаемые ряды.

## Не путать с

- **[Бюджет для граждан (г. Краснодар)](/data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens)** — **муниципальный** контур **одного** города; **openbudget23region.ru** охватывает **край** и **МО**.
