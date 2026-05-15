---
title: 'Краснодарский край: УФНС России (nalog.gov.ru, код 23)'
sidebar_label: УФНС по КК (nalog.gov.ru/rn23)
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-ufns-nalog-rn23
source_url: 'https://www.nalog.gov.ru/rn23/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Региональный раздел сайта ФНС России для Краснодарского края (код 23): новости, сервисы и
  справочная информация для налогоплательщиков; не путать с региональным бюджетным контуром.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Краснодарский край: УФНС России (nalog.gov.ru, код 23)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** **орган** (**ФНС**) — **региональный** **подраздел** **по** **КК** |
| Тип доступа | Публичный **раздел** **nalog.gov.ru** |
| Основные форматы | **HTML** |
| Оператор | **УФНС** России **по** Краснодарскому краю |
| Режим доступа | Открытый |

Коротко: **официальный** **налоговый** **вход** **для** **региона** (**rn23**). **Бюджет** **субъекта** — **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** **URL** **со** **слешем** **в** **конце**, **HTTP 200**; **без** **слеша** **возможен** **404**) |
| Полнота (`data_completeness`) | **частичная** — **фокус** на **налогах**, **не** **полный** **бюджет** **края** |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **федеральный** **сайт** |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | **архив** **новостей** **УФНС** |
| Лицензия (`license_or_terms`) | **условия** **сайта** **ФНС** |

## Описание

Раздел **содержит** **локальные** **новости**, **контакты**, **ссылки** **на** **сервисы** **ФНС**. **Агрегированные** **бюджетные** **ряды** **субъекта** **ищите** на **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Оператор

УФНС России по Краснодарскому краю — https://www.nalog.gov.ru/rn23/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный раздел (**важен** завершающий `/`) | https://www.nalog.gov.ru/rn23/ | HTML |

## Объекты данных и показатели

- **Новости** **УФНС**, **инструкции**, **сервисы** **для** **налогоплательщиков**.
- **Не** **источник** **консолидированного** **бюджета** **КК**.

## Периодичность обновления

**По** **мере** **обновлений** **ФНС**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-ufns23-check/1.0" \
  "https://www.nalog.gov.ru/rn23/"
```

## Связанные страницы wiki

- [Минфин Краснодарского края](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **региональный** **бюджетный** контур.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральные** **машиночитаемые** ряды.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) — **методика** **поиска**.

## Не путать с

- **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** — **бюджет** **субъекта**; **УФНС** — **налоговый** **контур** **федерального** **органа**.
