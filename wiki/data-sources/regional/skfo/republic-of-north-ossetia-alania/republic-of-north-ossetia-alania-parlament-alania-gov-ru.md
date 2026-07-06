---
title: 'Республика Северная Осетия — Алания: Парламент (parlament.alania.gov.ru)'
sidebar_label: Парламент РСО-Алания
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-north-ossetia-alania-parlament-alania-gov-ru
source_url: 'https://parlament.alania.gov.ru/'
data_source_kind: portal
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
  Официальный сайт Парламента Республики Северная Осетия — Алания: законопроекты (в том числе
  о бюджете), повестка, решения и материалы законодательного процесса.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-north-ossetia-alania-sources-overview
  - /data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-budget-for-citizens-minfin-alania
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Северная Осетия — Алания: Парламент (parlament.alania.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Северная Осетия — Алания** — **законодательный** орган власти субъекта |
| Тип доступа | Публичный **сайт** парламента |
| Основные форматы | **HTML**; **PDF** законопроектов и **решений** по ссылкам |
| Оператор | **Парламент Республики Северная Осетия — Алания** |
| Режим доступа | Открытый просмотр |

Коротко: **официальный** вход к **законопроектам** (включая **закон о бюджете**), **повестке** и **материалам** сессий. Для **опубликованных** текстов **НПА** после **подписания** удобно перекрёстно проверять **[раздел «Документы» портала](/data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (**HTTP 200** для корня сайта) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** выкладки **материалов** по заседаниям |
| Машиночитаемость (`machine_readability`) | **смешанный** — **HTML**/PDF; **стабильного** публичного **API** нет |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **законодательного** органа |
| Задержка обновления (`update_lag`) | привязана к **сессиям** и **процедуре** принятия законов |
| Глубина архива (`archive_depth`) | определяется **архивом** законопроектов и **документов** |
| Лицензия (`license_or_terms`) | правила **parlament.alania.gov.ru** |

## Описание

Сайт парламента — ключевой источник для **отслеживания** **стадий** рассмотрения **бюджетного** законопроекта, **поправок** и **сопутствующих** актов. **Исполнительная** ветвь публикует **сопутствующие** **материалы** на **[сайте Минфина](/data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru)**; **итоговые** **официальные** тексты ищите также в **[банке документов](/data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru)**.

## Оператор

Парламент Республики Северная Осетия — Алания — https://parlament.alania.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Корень сайта парламента | https://parlament.alania.gov.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты** и **решения** (включая **бюджет**).
- **Повестка** и **материалы** к заседаниям (по мере публикации).
- **Ключи связки**: **номер** законопроекта, **год**, **стадия** — для сопоставления с **порталом документов** и **федеральными** рядами после **принятия** бюджета.

## Периодичность обновления

**По календарю** заседаний и **законодательной** кампании.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-parlament-alania-check/1.0" \
  "https://parlament.alania.gov.ru/"
```

## Связанные страницы wiki

- [Портал республики: документы](/data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru) — **опубликованные** **НПА**.
- [«Бюджет для граждан»](/data-sources/regional/republic-of-north-ossetia-alania-budget-for-citizens-minfin-alania) — **упрощённое** изложение после принятия бюджета.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **машиночитаемые** федеральные ряды.

## Не путать с

- **[Минфин](/data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru)** — **исполнительная** власть и **ведомственные** материалы; **Парламент** — **законодательный** процесс.
