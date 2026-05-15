---
title: 'Ставропольский край: УФНС России (nalog.gov.ru, код 26)'
sidebar_label: УФНС по СК (nalog.gov.ru/rn26)
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-ufns-nalog-rn26
source_url: 'https://www.nalog.gov.ru/rn26/'
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
  Региональный раздел сайта ФНС России для Ставропольского края (код 26): новости, сервисы и
  справочная информация для налогоплательщиков; не путать с региональным бюджетным контуром.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Ставропольский край: УФНС России (nalog.gov.ru, код 26)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** **орган** (**ФНС**) — **региональный** **подраздел** **по** **СК** |
| Тип доступа | Публичный **раздел** **nalog.gov.ru** |
| Основные форматы | **HTML** |
| Оператор | **УФНС** России **по** Ставропольскому краю |
| Режим доступа | Открытый |

Коротко: **официальный** **налоговый** **вход** **для** **региона** (**rn26**). **Бюджет** **субъекта** — **[Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** **URL** **со** **слешем** **в** **конце**, **HTTP 200**; **без** **слеша** **возможен** **403**) |
| Полнота (`data_completeness`) | **частичная** — **фокус** на **налогах**, **не** **полный** **бюджет** **края** |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **федеральный** **сайт** |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | **архив** **новостей** **УФНС** |
| Лицензия (`license_or_terms`) | **условия** **сайта** **ФНС** |

## Описание

Раздел **содержит** **локальные** **новости**, **контакты**, **ссылки** **на** **сервисы** **ФНС**. **Агрегированные** **бюджетные** **ряды** **субъекта** **ищите** на **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Оператор

УФНС России по Ставропольскому краю — https://www.nalog.gov.ru/rn26/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный раздел (**важен** завершающий `/`) | https://www.nalog.gov.ru/rn26/ | HTML |

## Объекты данных и показатели

- **Новости** **УФНС**, **инструкции**, **сервисы** **для** **налогоплательщиков**.
- **Не** **источник** **консолидированного** **бюджета** **СК**.

## Периодичность обновления

**По** **мере** **обновлений** **ФНС**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-nalog-rn26-check/1.0" \
  "https://www.nalog.gov.ru/rn26/"
```

## Связанные страницы wiki

- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **региональный** **бюджетный** **контур**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральные** **бюджетные** **машиночитаемые** **ряды**.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) — **методика**.

## Не путать с

- **[Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk)** — **региональный** **бюджет**; **УФНС** — **федеральный** **налоговый** **контур** **на** **территории** **края**.
