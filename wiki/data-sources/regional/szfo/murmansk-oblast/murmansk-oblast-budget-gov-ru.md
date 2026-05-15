---
title: 'Мурманская область: Единый портал бюджетной системы РФ (budget.gov.ru)'
sidebar_label: budget.gov.ru (разрез МО)
tags:
  - data-source
  - regional
  - federal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-budget-gov-ru
source_url: 'https://www.budget.gov.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
  - csv
  - json
  - xml
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: 'смешанный: веб-витрина + машиночитаемые наборы ГИИС через связанные карточки'
description: >-
  Федеральный единый портал бюджетной системы РФ как точка входа для публичных материалов и
  навигации к открытым данным ГИИС «Электронный бюджет»; для Мурманской области используется
  как федеральный контекст региональных показателей.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-b4u-budget-portal
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Мурманская область: Единый портал бюджетной системы РФ

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральная** витрина бюджетной системы с **региональными** срезами |
| Тип доступа | Портал `budget.gov.ru` + переходы к открытым данным ГИИС |
| Основные форматы | HTML; машиночитаемые форматы — в **[наборах ГИИС](/data-sources/federal/budget-gov-ru-datasets)** |
| Оператор | Минфин России / ГИИС «Электронный бюджет» (веб-витрина портала) |
| Режим доступа | Открытый |

Коротко: **федеральный ориентир** для публичных материалов о бюджетной системе и **мост** к машиночитаемым наборам. Для **первичного субъектового** контура планирования и исполнения по Мурманской области параллельно используйте [Минфин области](/data-sources/regional/murmansk-oblast-minfin) и [B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная на уровне «одного портала» — детальность вынесена в наборы |
| Машиночитаемость (`machine_readability`) | высокая **в связке** с [наборами ГИИС](/data-sources/federal/budget-gov-ru-datasets) |
| Юридическая значимость (`legal_significance`) | официальный федеральный контур публичной бюджетной информации |
| Задержка обновления (`update_lag`) | зависит от показателя и регламентов публикации ГИИС |
| Глубина архива (`archive_depth`) | зависит от раздела/набора |
| Лицензия (`license_or_terms`) | см. условия использования данных ГИИС в карточках наборов |

## Описание

Эта карточка фиксирует **роль** `budget.gov.ru` для аналитика, который работает по **Мурманской области**: через портал находятся **обзорные материалы** и переходы к **открытым данным**; для воспроизводимого ETL обычно удобнее сразу [каталог наборов](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

Единый портал бюджетной системы Российской Федерации — канонический вход: https://www.budget.gov.ru/

Карточка ИС: [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — учётно-информационный контур, к которому относятся публичные наборы.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://www.budget.gov.ru/ | HTML |

## Объекты данных и показатели

- **Объекты:** обзорные страницы, **навигация** к открытым данным, иногда **дашборды** (по мере наличия).
- **Ключи связки:** **код субъекта**, **финансовый год**, **КБК/территориальные коды** — внутри конкретных наборов ГИИС.
- **Пробелы:** не заменяет **муниципальные** первичные документы — см. [B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal).

## Периодичность обновления

Согласована с **циклом бюджетной отчётности** и обновлениями наборов ГИИС.

## Ограничения и особенности

- Сравнение с [Минфином](/data-sources/regional/murmansk-oblast-minfin) требует явной **методики** (консолидированный vs областной бюджет и т.д.) — см. [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Связанные страницы wiki

- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — региональный первичный контур.
- [Портал B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal) — гражданская региональная витрина.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые выгрузки.
- [ГИИС «Электронный бюджет» (ИС)](/information-systems/federal/giis-eb) — границы системы.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
