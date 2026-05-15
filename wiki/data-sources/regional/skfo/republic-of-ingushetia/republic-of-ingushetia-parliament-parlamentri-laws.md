---
title: 'Республика Ингушетия: Народное Собрание — раздел законов (parlamentri.ru)'
sidebar_label: Народное Собрание (законы)
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws
source_url: >-
  https://parlamentri.ru/category/verkhnee-menyu/zakonodatelnaya-deyatelnost/zakony
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
  Официальный сайт Народного Собрания Республики Ингушетия: раздел законодательной деятельности с
  законами республики, включая законы о бюджете (HTML и вложения по ссылкам).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-ingushetia-sources-overview
  - /data-sources/regional/republic-of-ingushetia-pravo-publication-region06
  - /data-sources/regional/republic-of-ingushetia-minfin-mfri
  - /data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Ингушетия: Народное Собрание — раздел законов (parlamentri.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Ингушетия** — **законодательный** орган: **публичные** тексты и материалы по **законам** республики |
| Тип доступа | Публичный **веб**-раздел парламента |
| Основные форматы | **HTML**; **PDF** и другие вложения по ссылкам в лентах |
| Оператор | **Народное Собрание Республики Ингушетия** |
| Режим доступа | Открытый просмотр |

Коротко: **точка входа** к **законам** республики, в том числе **о бюджете**. Для **официальной** федеральной публикации нормативных актов субъекта см. **[раздел region06 на publication.pravo.gov.ru](/data-sources/regional/republic-of-ingushetia-pravo-publication-region06)**; для **гражданских** пояснений к бюджету — **[«Открытый бюджет» Минфина](/data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для раздела законов) |
| Полнота (`data_completeness`) | **частичная** — полнота **корпуса** законов и **синхронизация** с федеральной публикацией требует выборочной сверки |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML**; **единого** открытого API нет |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **законодательного** органа субъекта |
| Задержка обновления (`update_lag`) | зависит от **регистрации** и **опубликования** законов |
| Глубина архива (`archive_depth`) | определяется **архивом** раздела на сайте парламента |
| Лицензия (`license_or_terms`) | условия **parlamentri.ru** |

## Описание

Раздел **«Законы»** на **parlamentri.ru** предназначен для публикации **нормативных** текстов и сопутствующих материалов **Народного Собрания**. Для **сквозного** поиска по официальной федеральной витрине НПА регионов используйте карточку **[publication.pravo.gov.ru, block region06](/data-sources/regional/republic-of-ingushetia-pravo-publication-region06)**.

## Оператор

Народное Собрание Республики Ингушетия — см. таблицу URL ниже.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Законы» | https://parlamentri.ru/category/verkhnee-menyu/zakonodatelnaya-deyatelnost/zakony | HTML / PDF (по ссылкам) |

## Объекты данных и показатели

- **Законы** Республики Ингушетия, включая **законы о бюджете** (как отдельные записи в ленте).
- **Ключи связки**: номер и **дата** закона, **год** бюджета; для аналитики исполнения — далее **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** и **[федеральные наборы](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

По мере **законодательного** процесса и **размещения** материалов на сайте парламента.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-parlamentri-check/1.0" \
  "https://parlamentri.ru/category/verkhnee-menyu/zakonodatelnaya-deyatelnost/zakony"
```

## Связанные страницы wiki

- [Публикация НПА (region06)](/data-sources/regional/republic-of-ingushetia-pravo-publication-region06) — **федеральная** витрина официального опубликования.
- [Минфин Ингушетии](/data-sources/regional/republic-of-ingushetia-minfin-mfri) — **исполнительный** контур бюджета.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — контекст методики.

## Не путать с

- **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** — **проекты** и **отчёты** исполнительной власти, а не **полный** корпус законов парламента.
