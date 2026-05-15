---
title: 'Мурманская область: государственные программы (Минэкономразвития)'
sidebar_label: Госпрограммы (Минэконом МО)
tags:
  - data-source
  - regional
  - programs
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-minec-state-programs
source_url: 'https://minec.gov-murman.ru/activities/strategicheskoe-planirovanie/targ_programs'
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
machine_readability: HTML и вложенные PDF; без единого открытого API
description: >-
  Раздел сайта Министерства экономического развития Мурманской области: перечень
  государственных программ региона, нормативные документы и материалы по реализации.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-b4u-budget-portal
  - /data-sources/regional/murmansk-oblast-budget-gov-ru
  - /data-sources/federal/budget-gov-ru-datasets
---

# Мурманская область: государственные программы (Минэкономразвития)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Субъект РФ — **Мурманская область** (государственные программы) |
| Тип доступа | Официальный сайт регионального органа исполнительной власти |
| Основные форматы | HTML, прилагаемые **PDF** |
| Оператор | Министерство экономического развития Мурманской области |
| Режим доступа | Открытый |

Коротко: точка входа для **паспортов и сопроводительных материалов** по государственным программам области. Для **бюджетных цифр план/факт** по КБК и консолидации с федеральным контуром сочетайте с [Минфином области](/data-sources/regional/murmansk-oblast-minfin), [«Бюджетом для всех»](/data-sources/regional/murmansk-oblast-b4u-budget-portal) и [федеральным порталом бюджетной системы](/data-sources/regional/murmansk-oblast-budget-gov-ru).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — состав разделов и глубина архива зависят от редакционной политики ведомства |
| Машиночитаемость (`machine_readability`) | преимущественно HTML/PDF без стабильного машинного каталога на уровне страницы |
| Юридическая значимость (`legal_significance`) | официальный орган субъекта РФ |
| Задержка обновления (`update_lag`) | привязана к циклу планирования и отчётности по программам |
| Глубина архива (`archive_depth`) | зависит от сохранения старых версий на сайте |
| Лицензия (`license_or_terms`) | см. условия сайта `gov-murman.ru` |

## Описание

Раздел посвящён **стратегическому планированию** и **государственным (региональным) программам**: перечни, нормативная база раздела, публикации о ходе реализации. Для связки с **бюджетным конвейером** (закон об областном бюджете, исполнение) используйте [сайт Минфина](/data-sources/regional/murmansk-oblast-minfin) и [областную Думу](/data-sources/regional/murmansk-oblast-regional-duma).

## Оператор

Министерство экономического развития Мурманской области — канонический вход: https://minec.gov-murman.ru/activities/strategicheskoe-planirovanie/targ_programs

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Целевые программы» | https://minec.gov-murman.ru/activities/strategicheskoe-planirovanie/targ_programs | HTML |

## Объекты данных и показатели

- **Объекты:** государственные (региональные) программы, паспорта/описания, отчётные материалы по мере размещения.
- **Ключи связки:** наименование программы, код/шифр при наличии в документах, **финансовый год**, перекрёстные ссылки на НПА (см. [Официальное опубликование НПА по области](/data-sources/regional/murmansk-oblast-pravo-gov-npa)).
- **Пробелы:** не все показатели исполнения дублируются в открытых табличных выгрузках; для агрегированных бюджетных рядов ориентируйтесь на [открытые данные ГИИС](/data-sources/federal/budget-gov-ru-datasets) там, где методика сопоставима.

## Периодичность обновления

Обновляется по мере утверждения изменений в программах и публикации отчётности; точный регламент — на стороне оператора.

## Ограничения и особенности

- Региональные сайты на домене `gov-murman.ru` иногда отвечают **403** автоматизированным клиентам; для сбора данных используйте браузер и уважайте `robots.txt`.
- Структура URL может меняться при редизайне — фиксируйте дату скачивания материалов.

## Связанные страницы wiki

- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — областной бюджет, отчётность и финансовые витрины.
- [«Бюджет для всех» / B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal) — гражданское изложение и муниципальный разрез.
- [Единый портал бюджетной системы РФ](/data-sources/regional/murmansk-oblast-budget-gov-ru) — федеральный контекст и сопоставимые публичные срезы.
- [Наборы данных «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые выгрузки для сверки агрегатов.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все карточки источников по Мурманской области.
