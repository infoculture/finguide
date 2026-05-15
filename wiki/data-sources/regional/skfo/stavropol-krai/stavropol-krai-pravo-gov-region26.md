---
title: 'Ставропольский край: официальное опубликование НПА (регион 26, pravo.gov.ru)'
sidebar_label: Официальное опубликование НПА (регион 26)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-pravo-gov-region26
source_url: 'https://publication.pravo.gov.ru/documents/block/region26'
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
  Раздел официального интернет-портала правовой информации для опубликования правовых актов
  органов Ставропольского края (код региона 26); HTML/PDF в интерфейсе портала.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-legislative-assembly-duma-laws
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/how-to-find-regional-data
---

# Ставропольский край: официальное опубликование НПА (регион 26, pravo.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **официальное** **опубликование** **региональных** **НПА** |
| Тип доступа | Публичный **раздел** **федерального** **портала** **опубликования** |
| Основные форматы | **HTML**; **PDF** **текстов** **актов** |
| Оператор | **Федеральный** **информационный** **оператор** **опубликования** (**pravo.gov.ru**) |
| Режим доступа | Открытый |

Коротко: **канонический** **федеральный** **интерфейс** **для** **официального** **опубликования** **актов** **органов** **Ставропольского** **края** (**region26**). **Тексты** **законов** **на** **сайте** **Думы** — **[отдельная карточка](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** по **HTTP**, **HTTP 200**; **HTTPS** из **контура** **проверки** **может** **таймаутиться** — **проверяйте** **в** **браузере**) |
| Полнота (`data_completeness`) | **частичная** — **полнота** **зависит** от **ведения** **блока** **региона** |
| Машиночитаемость (`machine_readability`) | **HTML**/**PDF**; **API** **массовой** **выгрузки** **не** **задан** **в** **карточке** |
| Юридическая значимость (`legal_significance`) | **официальный** **канал** **опубликования** **в** **контуре** **законодательства** |
| Задержка обновления (`update_lag`) | **после** **подписания** и **передачи** **на** **опубликование** |
| Глубина архива (`archive_depth`) | **архив** **портала** |
| Лицензия (`license_or_terms`) | **режим** **использования** **текстов** **НПА** — **по** **закону** |

## Описание

Используйте **раздел** для **поиска** **постановлений** **правительства** **края**, **ведомственных** **актов** и **иных** **НПА**, **подлежащих** **официальному** **опубликованию**. **Бюджетные** **цифры** — в **бюджетной** **отчётности** **[Минфина](/data-sources/regional/stavropol-krai-minfin-mfsk)**.

## Оператор

Официальный интернет-портал правовой информации — https://publication.pravo.gov.ru/documents/block/region26

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок региональных актов (канонический HTTPS) | https://publication.pravo.gov.ru/documents/block/region26 | HTML |
| Тот же блок (HTTP; устойчивее для простого curl) | http://publication.pravo.gov.ru/documents/block/region26 | HTML |

## Объекты данных и показатели

- **НПА** с **реквизитами**, **статусом** и **файлами** **публикации**.
- **Связка** с **бюджетом** — **через** **ссылки** **на** **законы** **о** **бюджете** и **подзаконные** **акты**.

## Периодичность обновления

**По** **мере** **официального** **опубликования** **новых** **актов**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-pravo-region26-check/1.0" \
  "http://publication.pravo.gov.ru/documents/block/region26"
```

## Связанные страницы wiki

- [Дума СК — законы края](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws) — **сайт** **парламента** **с** **текстами** **законов**.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **бюджетная** **исполнительная** **линия**.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) — **методика**.

## Не путать с

- **[Дума СК](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws)** — **парламентский** **сайт**; **pravo.gov.ru** — **федеральная** **витрина** **опубликования** **с** **иным** **UX** и **полнотой** **индексации**.
