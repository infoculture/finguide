---
title: 'Тамбовская область: Тамбовская областная Дума (tambovoblduma.ru)'
sidebar_label: Тамбовская областная Дума
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/tambov-oblast-regional-duma
source_url: 'https://tambovoblduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF; без единого открытого API
description: >-
  Официальный сайт Тамбовской областной Думы: законодательная деятельность,
  материалы по рассмотрению областного бюджета, публичные слушания и ссылки на
  проекты законов (официальные тексты — на pravo.gov.ru).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tambov-oblast-sources-overview
  - /data-sources/regional/tambov-oblast-pravo-gov-region68-npa
  - /data-sources/regional/tambov-oblast-minfin-budget-for-citizens
  - /glossary/budget-powers
---

# Тамбовская область: Тамбовская областная Дума (tambovoblduma.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** парламент субъекта РФ |
| Тип доступа | Официальный сайт законодательного органа |
| Основные форматы | HTML; приложения к законам — PDF по ссылкам |
| Оператор | Тамбовская областная Дума |
| Режим доступа | Открытый |

Коротко: **законодательный контур** областного бюджета: повестка, проекты законов о бюджете, материалы публичных слушаний. Для **юридически значимой** редакции принятых актов используйте [официальное опубликование на ОИППИ](/data-sources/regional/tambov-oblast-pravo-gov-region68-npa).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения материалов заседаний |
| Машиночитаемость (`machine_readability`) | HTML; структурированных открытых наборов по проектам может не быть |
| Юридическая значимость (`legal_significance`) | официальный орган законодательной власти субъекта |
| Задержка обновления (`update_lag`) | привязана к календарю заседаний и чтений бюджета |
| Глубина архива (`archive_depth`) | зависит от архива законопроектов на сайте |
| Лицензия (`license_or_terms`) | условия сайта Думы |

## Описание

Сайт Думы отражает **стадии бюджетного процесса** на законодательной линии: проекты, поправки, решения, информация о слушаниях. См. также **[Бюджетные полномочия](/glossary/budget-powers)** для разграничения ролей Думы и правительства. Исполнительные материалы и «бюджет для граждан» чаще находятся на [сайте Минфина области](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens).

## Оператор

Тамбовская областная Дума — канонический вход: https://tambovoblduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт Думы | https://tambovoblduma.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты** о бюджете и смежные акты (как публикует парламент).
- **Повестка и протокольная информация** о рассмотрении.
- Ключи связки: **номер законопроекта**, **финансовый год**, ссылка на **официальное опубликование** текста закона.

## Периодичность обновления

Пик в период **бюджетного сезона** (осень–зима); вне сезона — по мере законодательной активности.

## Ограничения и особенности

- Текст закона для правоприменения сверяйте с **[ОИППИ](/data-sources/regional/tambov-oblast-pravo-gov-region68-npa)** после официального опубликования.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' 'https://tambovoblduma.ru/'
```

## Связанные страницы wiki

- [Официальное опубликование НПА (регион 68)](/data-sources/regional/tambov-oblast-pravo-gov-region68-npa) — канонические тексты актов.
- [Минфин области: бюджет для граждан](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens) — исполнительный бюджетный контур.
- [Портал органов власти области](/data-sources/regional/tambov-oblast-portal-tambov-gov) — смежная навигация.
- [Сводная страница субъекта](/data-sources/regional/subject-tambov-oblast-sources-overview) — остальные источники по области.

## Не путать с

- **[Официальное опубликование НПА](/data-sources/regional/tambov-oblast-pravo-gov-region68-npa)** — федеральный контур **опубликования**; сайт Думы — **законодательная** подготовка и сопровождение.
