---
title: 'Республика Крым: Государственный Совет — законотворчество по бюджету (crimea.gov.ru)'
sidebar_label: Госсовет — бюджетное законотворчество
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-crimea-state-council-budget-lawmaking
source_url: 'https://crimea.gov.ru/lawmaking-activity/budget'
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
machine_readability: HTML-лента событий и материалы заседаний; структура зависит от CMS парламента
description: >-
  Раздел официального портала Государственного Совета Республики Крым с хронологией рассмотрения
  законопроекта «О бюджете Республики Крым»: стадии процедуры, сопутствующие материалы и ссылки
  на публикации по бюджетному циклу парламента.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/republic-of-crimea-state-council-portal
  - /data-sources/regional/republic-of-crimea-minfin
  - /data-sources/regional/republic-of-crimea-open-budget-ifinmon
  - /data-sources/regional/subject-republic-of-crimea-sources-overview
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Крым: законотворчество по бюджету (Государственный Совет)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Республика Крым: **региональный парламент** (процедура **закона о бюджете**) |
| Тип доступа | Тематический раздел официального портала |
| Основные форматы | HTML; тексты и приложения — PDF |
| Оператор | Государственный Совет Республики Крым |
| Режим доступа | Открытый просмотр |

Коротко: **узкая витрина** для отслеживания **стадий** законодательной работы над республиканским бюджетом: полезно для хронологии и контекста до/после утверждения закона. Для **исполнения** и отчётности исполнительной ветви см. [Минфин](/data-sources/regional/republic-of-crimea-minfin); для **комплекта файлов** закона о бюджете — [«Открытый бюджет» ifinmon](/data-sources/regional/republic-of-crimea-open-budget-ifinmon).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты публикации стадий и вложений |
| Машиночитаемость (`machine_readability`) | HTML; без единого набора CSV по корню карточки |
| Юридическая значимость (`legal_significance`) | официальный сайт законодательного органа |
| Задержка обновления (`update_lag`) | привязана к календарю заседаний |
| Глубина архива (`archive_depth`) | по политике парламентского портала |
| Лицензия (`license_or_terms`) | условия сайта — у оператора |

## Описание

Раздел **lawmaking-activity/budget** предназначен для публикации хода рассмотрения **проекта закона о бюджете** Республики Крым: новости и материалы процедуры относительно очередного бюджетного цикла. Формулировки и набор полей на странице могут меняться при обновлении движка сайта — при исследовании фиксируйте **дату снимка** и при необходимости перепроверяйте **канонический текст** акта в разделах правовой информации парламента.

## Оператор

Государственный Совет Республики Крым — https://crimea.gov.ru/lawmaking-activity/budget

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел бюджетного законотворчества | https://crimea.gov.ru/lawmaking-activity/budget | HTML |

## Объекты данных и показатели

- **События процедуры**: первое/второе чтение, доработка, окончательное принятие (в объёме публикаций).
- **Ссылки на тексты** законопроекта и сопроводительные документы (по мере размещения).
- Связь с **финальным законом** о бюджете: идентификация по году и номеру акта после принятия.

## Периодичность обновления

В **бюджетные периоды** и на этапах рассмотрения законопроекта о бюджете; между циклами раздел может обновляться реже.

## Ограничения и особенности

- Это не замена **сводной финансовой отчётности**: для таблиц исполнения используйте [Минфин](/data-sources/regional/republic-of-crimea-minfin) и [федеральные наборы](/data-sources/federal/budget-gov-ru-datasets).
- Практика перехода на HTTPS: если старые `http://` ссылки перенаправляют некорректно, используйте канонический `https://crimea.gov.ru/`.

## Связанные страницы wiki

- [Портал Государственного Совета](/data-sources/regional/republic-of-crimea-state-council-portal) — общий законодательный контент.
- [Министерство финансов Республики Крым](/data-sources/regional/republic-of-crimea-minfin) — исполнение бюджета и нормативные материалы финоргана.
- [«Открытый бюджет» ifinmon](/data-sources/regional/republic-of-crimea-open-budget-ifinmon) — реестр документов по закону о бюджете.
- [Сводная страница субъекта](/data-sources/regional/subject-republic-of-crimea-sources-overview) — все источники по Республике Крым.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральными открытыми данными.

## Не путать с

- **[«Открытый бюджет» ifinmon](/data-sources/regional/republic-of-crimea-open-budget-ifinmon)** — отдельный бюджетно-гражданский портал с файлами, а не хронология парламента.
