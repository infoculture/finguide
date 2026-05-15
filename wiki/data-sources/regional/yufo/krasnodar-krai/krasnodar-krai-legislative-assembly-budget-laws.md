---
title: 'Краснодарский край: Законодательное Собрание — законы о бюджете'
sidebar_label: ЗакСобрание КК (законы о бюджете)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-legislative-assembly-budget-laws
source_url: >-
  https://lp.kubzsk.ru/Users/LegislativeProcess/Index/16805b63-1f8b-4bbc-b238-427cdafc3516
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
  Раздел «Законодательный процесс» на сайте Законодательного Собрания Краснодарского края:
  проекты и принятые законы о бюджете края, в том числе в HTML и типичных вложениях (PDF).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/regional/krasnodar-krai-open-budget-openbudget23region
  - /data-sources/federal/budget-gov-ru-datasets
---

# Краснодарский край: Законодательное Собрание — законы о бюджете

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** — **законодательный** орган, **бюджетное** законодательство |
| Тип доступа | Публичный **раздел** сайта **Законодательного Собрания** |
| Основные форматы | **HTML**; **PDF** текстов актов (по ссылкам) |
| Оператор | **Законодательное Собрание** Краснодарского края |
| Режим доступа | Открытый |

Коротко: **официальный** вход к **законам о бюджете** края и **сопутствующим** актам в разделе **«Законодательный процесс»**. Для **исполнительных** материалов и **отчётности** — **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** и **[открытый бюджет](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** раздела, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** выкладки **актуальных** редакций на сайте |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; **единого** публичного **API** нет |
| Юридическая значимость (`legal_significance`) | **официальный** **законодательный** источник **текстов** актов |
| Задержка обновления (`update_lag`) | **после** пленарных заседаний и **опубликования** |
| Глубина архива (`archive_depth`) | **законодательный** архив в разделе **«Законодательный процесс»** |
| Лицензия (`license_or_terms`) | **государственные** тексты — режим использования по **закону** |

## Описание

Раздел **lp.kubzsk.ru** публикует **ход** рассмотрения и **тексты** законопроектов, включая **законы о бюджете** и **изменения** к ним. **Сопоставление** с **цифрами** исполнения — через **[Минфин](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** и **[федеральные наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Оператор

Законодательное Собрание Краснодарского края — https://lp.kubzsk.ru/Users/LegislativeProcess/Index/16805b63-1f8b-4bbc-b238-427cdafc3516

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Законодательный процесс (вход к законам о бюджете) | https://lp.kubzsk.ru/Users/LegislativeProcess/Index/16805b63-1f8b-4bbc-b238-427cdafc3516 | HTML / PDF |

## Объекты данных и показатели

- **Законы** о **бюджете** края, **корректировки**, **сопутствующие** постановления.
- **Метаданные**: **номер**, **дата** принятия, **стадия** рассмотрения — в **карточках** актов на сайте.

## Периодичность обновления

**После** законодательных событий и **размещения** материалов на сайте Собрания.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-kubzsk-laws-check/1.0" \
  "https://lp.kubzsk.ru/Users/LegislativeProcess/Index/16805b63-1f8b-4bbc-b238-427cdafc3516"
```

## Связанные страницы wiki

- [Минфин Краснодарского края](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **материалы** исполнительной власти по **бюджету**.
- [Открытый бюджет КК (openbudget23region.ru)](/data-sources/regional/krasnodar-krai-open-budget-openbudget23region) — **гражданская** витрина **бюджета** и **исполнения**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** **федеральные** ряды для **сверки**.

## Не путать с

- **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** — **исполнительный** контур; Собрание — **нормативная** фиксация **бюджетного** цикла.
