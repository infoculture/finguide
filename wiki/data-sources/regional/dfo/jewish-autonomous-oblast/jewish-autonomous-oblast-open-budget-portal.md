---
title: 'Еврейская автономная область: открытый бюджет (портал органов власти)'
sidebar_label: 'Открытый бюджет ЕАО'
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/jewish-autonomous-oblast-open-budget-portal
source_url: >-
  https://www.eao.ru/vlast--1/deyatelnost/otkrytye-dannye/otkrytyy-byudzhet
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html_portal
description: >-
  Раздел «Открытый бюджет» на официальном портале органов государственной власти
  ЕАО: бюджет для граждан и сопутствующие HTML-материалы при наличии на витрине.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/jewish-autonomous-oblast-minfin
  - /data-sources/regional/jewish-autonomous-oblast-legislature-zseao
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/subject-jewish-autonomous-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Еврейская автономная область: открытый бюджет (портал органов власти)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональная **гражданско-бюджетная** витрина ЕАО |
| Тип доступа | Публичный раздел портала ОГВ |
| Основные форматы | HTML; вложения по ссылкам |
| Оператор | Официальный портал органов государственной власти Еврейской автономной области |
| Режим доступа | Открытое чтение (при доступности хостинга) |

Коротко: раздел **«Открытый бюджет»** для **объяснения** бюджета гражданам; для **машиночитаемых** рядов планирования и исполнения опирайтесь на [Электронный бюджет](/data-sources/federal/budget-gov-ru-datasets) и материалы [депфина](/data-sources/regional/jewish-autonomous-oblast-minfin).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | **Частичная**: наполнение зависит от редакции раздела |
| Машиночитаемость (`machine_readability`) | **HTML**; без гарантированного набора CSV/JSON на карточке |
| Юридическая значимость (`legal_significance`) | **Официальный** региональный портал |
| Задержка обновления (`update_lag`) | Привязана к циклу подготовки материалов к бюджету |
| Глубина архива (`archive_depth`) | Зависит от витрины |
| Лицензия (`license_or_terms`) | Условия портала |

## Описание

URL указывает на вложенный раздел портала **`www.eao.ru`** в блоке открытых данных. В прошлых обзорах отмечались **проблемы доступа** с отдельных сетей; перед массовым скрейпингом проверяйте доступность и `robots.txt`.

## Оператор

**Официальный портал органов государственной власти Еврейской автономной области** — канонический вход: https://www.eao.ru/vlast--1/deyatelnost/otkrytye-dannye/otkrytyy-byudzhet

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Открытый бюджет» | https://www.eao.ru/vlast--1/deyatelnost/otkrytye-dannye/otkrytyy-byudzhet | HTML |

## Объекты данных и показатели

- **Пояснительные** материалы, графики и таблицы «бюджет для граждан» (по факту размещения).
- **Не** заменяет юридический текст закона о бюджете: см. [ЗС](/data-sources/regional/jewish-autonomous-oblast-legislature-zseao) и [ОИПП](/data-sources/regional/jewish-autonomous-oblast-legal-acts-pravo-gov).

## Периодичность обновления

**По событиям** бюджетного цикла и решений администрации портала.

## Связанные страницы wiki

- [Департамент финансов](/data-sources/regional/jewish-autonomous-oblast-minfin) — нормативка и операционные материалы финоргана.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые ряды.
- [Сводная страница субъекта](/data-sources/regional/subject-jewish-autonomous-oblast-sources-overview) — все источники по ЕАО.

## Не путать с

- **[Электронный бюджет](/data-sources/federal/budget-gov-ru-datasets)** — федеральная витрина **наборов**; открытый бюджет на `eao.ru` — прежде всего **коммуникационный** слой.
