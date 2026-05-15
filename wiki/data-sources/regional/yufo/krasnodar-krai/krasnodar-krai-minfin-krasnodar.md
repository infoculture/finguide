---
title: 'Краснодарский край: Министерство финансов (minfin.krasnodar.ru)'
sidebar_label: Минфин КК (minfin.krasnodar.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-minfin-krasnodar
source_url: 'https://minfin.krasnodar.ru/'
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
  Официальный сайт Министерства финансов Краснодарского края: бюджетная политика, отчётность,
  разделы по финансовому управлению; преимущественно HTML и файлы на сайте.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-legislative-assembly-budget-laws
  - /data-sources/regional/krasnodar-krai-open-budget-openbudget23region
  - /data-sources/regional/krasnodar-krai-state-programs-economy
  - /data-sources/federal/budget-gov-ru-datasets
---

# Краснодарский край: Министерство финансов (minfin.krasnodar.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** — **региональный** финансовый орган |
| Тип доступа | Публичный **официальный** сайт |
| Основные форматы | **HTML**; **PDF** и др. **вложения** |
| Оператор | **Министерство финансов** Краснодарского края |
| Режим доступа | Открытый |

Коротко: **главный** региональный **вход** к **материалам** по **бюджету**, **отчётности** и **управлению** финансами края. Для **гражданских** визуализаций см. **[открытый бюджет](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — публичная часть **не** эквивалентна **внутренним** системам учёта |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; **API** публично **не заявлен** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **органа исполнительной власти** |
| Задержка обновления (`update_lag`) | **разная** по разделам |
| Глубина архива (`archive_depth`) | зависит от **архива** новостей и **документов** |
| Лицензия (`license_or_terms`) | по **правилам** сайта |

## Описание

Сайт агрегирует **новости**, **нормативные** ссылки и **специализированные** подразделы **Минфина**. **Государственные программы** как **отдельный** контур размещены на **[сайте Минэкономики](/data-sources/regional/krasnodar-krai-state-programs-economy)**; **законы о бюджете** — в **[Законодательном Собрании](/data-sources/regional/krasnodar-krai-legislative-assembly-budget-laws)**.

## Оператор

Министерство финансов Краснодарского края — https://minfin.krasnodar.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://minfin.krasnodar.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** и **исполнение** бюджета (в **публикуемой** части).
- **Отчёты** и **аналитические** материалы **Минфина** края.
- **Связка** с **КБК** и **федеральными** рядами — через **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

**Нерегулярно** по **событиям** и **отчётным** датам бюджетного цикла.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-minfin-kk-check/1.0" \
  "https://minfin.krasnodar.ru/"
```

## Связанные страницы wiki

- [Законы о бюджете (ЗакСобрание КК)](/data-sources/regional/krasnodar-krai-legislative-assembly-budget-laws) — **нормативная** база **бюджетного** цикла.
- [Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region) — **гражданская** витрина **бюджета** и **муниципалитетов**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральная** машиночитаемая **сверка**.

## Не путать с

- **[Открытый бюджет КК](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)** — **отдельный** портал **прозрачности**; **Минфин** — **ведомственный** **официальный** сайт.
