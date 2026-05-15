---
title: 'Мурманская область: открытые данные на data.gov.ru (карточка организации)'
sidebar_label: Открытые данные (data.gov.ru, МО)
tags:
  - data-source
  - regional
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-open-data-data-gov-ru
source_url: 'https://data.gov.ru/organizations/594e3ef1-a0c1-424c-9807-8233d5b063a2'
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - csv
  - json
  - xlsx
  - xml
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: смешанный каталог data.gov.ru (наборы в разных форматах по поставщикам)
description: >-
  Страница организации на федеральном портале открытых данных: каталог наборов, опубликованных
  от имени участников контура Мурманской области (в т.ч. УФК и иных поставщиков при наличии).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-ufk-roskazna
  - /data-sources/regional/murmansk-oblast-minfin
  - /information-systems/federal/data-gov-ru
  - /data-sources/federal/budget-gov-ru-datasets
---

# Мурманская область: открытые данные на data.gov.ru

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** каталог (`data.gov.ru`) с **привязкой** к поставщикам данных по Мурманской области |
| Тип доступа | Каталог наборов открытых данных + ссылки на файлы/API по наборам |
| Основные форматы | **CSV**, **JSON**, **XLSX**, **XML**, HTML (зависит от конкретного набора) |
| Оператор | Портал открытых данных РФ (`data.gov.ru`) |
| Режим доступа | Открытый |

Коротко: **единая точка поиска** по зарегистрированным наборам, где в качестве поставщика фигурируют органы и организации, связанные с **Мурманской областью** (включая **УФК**). Для **бюджетных рядов ГИИС** параллельно используйте [наборы `budget.gov.ru`](/data-sources/federal/budget-gov-ru-datasets).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — каталог отражает только **опубликованное** поставщиками |
| Машиночитаемость (`machine_readability`) | высокая **на уровне наборов**, но неоднородная между наборами |
| Юридическая значимость (`legal_significance`) | федеральная витрина метаданных; первичность — у поставщика набора |
| Задержка обновления (`update_lag`) | зависит от **версии набора** и графика обновлений поставщика |
| Глубина архива (`archive_depth`) | зависит от политики версионирования конкретного набора |
| Лицензия (`license_or_terms`) | см. метаданные каждого набора на `data.gov.ru` |

## Описание

Карточка организации на `data.gov.ru` — это **не бюджетный реестр**, а **каталог** ссылок. Для УФК часто полезно сопоставлять наборы с [сайтом УФК](/data-sources/regional/murmansk-oblast-ufk-roskazna) и [отчётами Росказны](/data-sources/federal/roskazna-reports).

## Оператор

Федеральный портал открытых данных — страница организации (UUID в URL): https://data.gov.ru/organizations/594e3ef1-a0c1-424c-9807-8233d5b063a2

Карточка ИС: [data.gov.ru](/information-systems/federal/data-gov-ru) — роль: **федеральный каталог** открытых наборов и метаданных.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог наборов организации | https://data.gov.ru/organizations/594e3ef1-a0c1-424c-9807-8233d5b063a2 | HTML + ссылки на форматы наборов |

## Объекты данных и показатели

- **Объекты:** перечень **наборов открытых данных** (метаданные, ссылки на файлы, периодичность в карточке набора).
- **Ключи связки:** **идентификатор набора**, версия, **поставщик**, тематические теги.
- **Пробелы:** отсутствие набора в каталоге **не доказывает** отсутствие данных на сайте оператора.

## Периодичность обновления

На уровне портала — **непрерывно** (появление новых версий наборов); для конкретного набора смотрите его карточку.

## Ограничения и особенности

- UUID в URL может быть **нестабилен для человеческой памяти** — используйте эту wiki-карточку как стабильный вход.
- Сверяйте **методики** с [ГИИС](/data-sources/federal/budget-gov-ru-datasets) при анализе бюджетных показателей.

## Связанные страницы wiki

- [УФК по Мурманской области](/data-sources/regional/murmansk-oblast-ufk-roskazna) — региональный оператор, часто выступающий поставщиком наборов.
- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — субъектовый бюджетный контур.
- [data.gov.ru (карточка ИС)](/information-systems/federal/data-gov-ru) — границы системы и типовые ошибки трактовки.
- [Наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — федеральные бюджетные открытые данные.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
