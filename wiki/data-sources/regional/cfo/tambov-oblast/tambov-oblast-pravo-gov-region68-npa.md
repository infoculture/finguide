---
title: 'Тамбовская область: опубликование НПА на ОИППИ (блок региона 68)'
sidebar_label: ОИППИ — НПА Тамбовской области (region68)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/tambov-oblast-pravo-gov-region68-npa
source_url: 'https://publication.pravo.gov.ru/documents/block/region68'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML/PDF; без публичного «сырого» API в карточке
description: >-
  Федеральный ОИППИ: блок официального опубликования нормативных правовых
  актов Тамбовской области (включая законы о бюджете) с юридически значимым
  моментом вступления в силу.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tambov-oblast-sources-overview
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/regional/tambov-oblast-regional-duma
  - /data-sources/regional/tambov-oblast-minfin-budget-for-citizens
---

# Тамбовская область: опубликование НПА на ОИППИ (блок региона 68)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональные** НПА, опубликованные на **федеральном** портале |
| Тип доступа | Веб-раздел Официального интернет-портала правовой информации |
| Основные форматы | HTML; тексты актов — PDF/HTML по карточкам документов |
| Оператор | Оператор ОИППИ (федеральный портал); акты — органы Тамбовской области |
| Режим доступа | Открытый |

Коротко: **канонический вход** для поиска **официально опубликованных** НПА Тамбовской области, включая **закон о бюджете**. Для хода рассмотрения законопроектов см. [сайт областной Думы](/data-sources/regional/tambov-oblast-regional-duma).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — перечень определяется фактом опубликования актов |
| Машиночитаемость (`machine_readability`) | преимущественно HTML/PDF карточек; массовая выгрузка требует отдельной автоматизации по правилам портала |
| Юридическая значимость (`legal_significance`) | официальное опубликование НПА |
| Задержка обновления (`update_lag`) | от момента подписания до публикации — регламент ОИППИ |
| Глубина архива (`archive_depth`) | архив опубликованных актов на портале |
| Лицензия (`license_or_terms`) | условия ОИППИ / правовые оговорки портала |

## Описание

Раздел `region68` агрегирует **опубликованные** правовые акты субъекта. Для аналитики бюджета ключевыми являются **законы о бюджете**, изменения к ним и связанные постановления. Системное описание портала — в карточке ИС **[ОИППИ (pravo.gov.ru)](/information-systems/federal/pravo-gov-ru)**.

## Оператор

Официальный интернет-портал правовой информации — канонический вход: https://publication.pravo.gov.ru/documents/block/region68

- Карточка ИС: **[ОИППИ (pravo.gov.ru)](/information-systems/federal/pravo-gov-ru)** — назначение портала, границы и смежные реестры.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок региональных НПА (Тамбовская область) | https://publication.pravo.gov.ru/documents/block/region68 | HTML |

## Объекты данных и показатели

- **Карточки НПА** с реквизитами, статусом и текстом (PDF/HTML).
- **Бюджетный контур**: законы о бюджете, изменения, сопутствующие акты.
- Ключи связки: **вид акта**, **номер**, **дата подписания/публикации**, **идентификаторы** в интерфейсе ОИППИ.

## Периодичность обновления

По мере **официального опубликования** новых и изменённых актов.

## Ограничения и особенности

- Автоматизированный парсинг должен учитывать **правила** портала и нагрузочные ограничения; для машинной обработки предпочтительны **официальные** каналы выгрузки, если они доступны под вашу задачу.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' 'https://publication.pravo.gov.ru/documents/block/region68'
```

## Связанные страницы wiki

- [ОИППИ (pravo.gov.ru) — информационная система](/information-systems/federal/pravo-gov-ru) — системное описание портала.
- [Тамбовская областная Дума](/data-sources/regional/tambov-oblast-regional-duma) — законопроектная стадия.
- [Минфин области: бюджет для граждан](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens) — исполнение и гражданское изложение бюджета.
- [Сводная страница субъекта](/data-sources/regional/subject-tambov-oblast-sources-overview) — остальные источники по области.

## Не путать с

- **[Сайт областной Думы](/data-sources/regional/tambov-oblast-regional-duma)** — проекты и политический контекст; **юридически значимая** редакция после подписания — на ОИППИ.
