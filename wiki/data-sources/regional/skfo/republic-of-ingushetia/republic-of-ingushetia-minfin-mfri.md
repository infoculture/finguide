---
title: 'Республика Ингушетия: Министерство финансов (mfri.ru)'
sidebar_label: Минфин Ингушетии
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-ingushetia-minfin-mfri
source_url: 'https://mfri.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт Министерства финансов Республики Ингушетия: бюджетная политика, разделы с
  документами, ссылки на «открытый бюджет» и материалы по исполнению республиканского бюджета.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-ingushetia-sources-overview
  - /data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads
  - /data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws
  - /data-sources/regional/republic-of-ingushetia-pravo-publication-region06
  - /data-sources/regional/republic-of-ingushetia-treasury-roskazna-ingushetia
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Ингушетия: Министерство финансов (mfri.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Ингушетия** — **главный** региональный **финансовый** орган исполнительной власти |
| Тип доступа | Публичный **корпоративный** сайт ведомства и **каталог** файлов по разделам |
| Основные форматы | **HTML**; **PDF** и другие вложения по ссылкам |
| Оператор | **Министерство финансов Республики Ингушетия** |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **центральная** точка входа к **республиканской** бюджетной политике и **публичным** материалам Минфина. Упрощённые материалы «открытого бюджета» и загрузки — в **[отдельной карточке раздела загрузок](/data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads)**; **официальные** тексты законов о бюджете — у **[Народного Собрания](/data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws)** и в **[федеральной публикации НПА](/data-sources/regional/republic-of-ingushetia-pravo-publication-region06)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для `https://mfri.ru/`) |
| Полнота (`data_completeness`) | **частичная** — сайт **не** исчерпывает **весь** федеральный план/факт и **внебюджетные** контуры |
| Машиночитаемость (`machine_readability`) | **смешанный** — преимущественно **веб** и **файлы**; стабильного **единого** open data API на корне нет |
| Юридическая значимость (`legal_significance`) | **официальный** орган исполнительной власти субъекта |
| Задержка обновления (`update_lag`) | зависит от **отчётных** кампаний и **публикаций** ведомства |
| Глубина архива (`archive_depth`) | определяется **архивом** новостей и вложенными **документами** |
| Лицензия (`license_or_terms`) | условия **mfri.ru** (проверяйте на сайте) |

## Описание

На **mfri.ru** публикуются **новости**, **нормативные** и **отчётные** материалы Минфина, разделы, связанные с **бюджетом** и **государственными** программами (частично пересекается с сайтом **[Минэкономразвития](/data-sources/regional/republic-of-ingushetia-mineconom-state-programs)**). Для **машинных** рядов планов и отчётности субъекта удобнее опираться на **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Оператор

Министерство финансов Республики Ингушетия — https://mfri.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корень сайта Минфина | https://mfri.ru/ | HTML |
| Каталог «Открытый бюджет» (точка входа из обзора) | https://mfri.ru/download-category/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82 | HTML / PDF (по ссылкам) |

## Объекты данных и показатели

- **Материалы** по бюджетной политике и **отчётности** в рамках опубликованного на сайте.
- **Ключи связки** (по содержанию документов): **год**, **КБК**, **источник** финансирования; сверка с **федеральной** витриной — см. **[бюджетные наборы](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

**Нерегулярно** по событиям и **отчётным** циклам; уточняйте в актуальных разделах сайта.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-minfin-ingushetia-check/1.0" \
  "https://mfri.ru/"
```

## Связанные страницы wiki

- [«Открытый бюджет» (загрузки Минфина)](/data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads) — **брошюры** и файлы по гражданской отчётности.
- [УФК по Республике Ингушетия](/data-sources/regional/republic-of-ingushetia-treasury-roskazna-ingushetia) — **казначейский** контур исполнения.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст сравнения субъектов.

## Не путать с

- **[Официальный портал республики](/data-sources/regional/republic-of-ingushetia-official-portal-ingushetia-ru)** — **общий** сайт органов власти, а не специализированный **финансовый** раздел Минфина.
