---
title: 'Приморский край: портал открытых данных (opendata.primorsky.ru)'
sidebar_label: Открытые данные (opendata)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/primorsky-krai-opendata-portal
source_url: 'https://opendata.primorsky.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - csv
  - json
  - xlsx
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: >-
  Каталог наборов; типичные выгрузки CSV/JSON/XLSX — по паспортам конкретных
  датасетов на портале
description: >-
  Официальный региональный портал открытых данных: каталог наборов, метаданные,
  файловые выгрузки (в т.ч. геоданные при наличии соответствующих наборов).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-primorsky-krai-sources-overview
  - /data-sources/regional/primorsky-krai-minfin
  - /data-sources/regional/primorsky-krai-ebudget-open-budget
  - /data-sources/regional/primorsky-krai-opendata-datacatalogs-ru
  - /data-sources/federal/budget-gov-ru-datasets
---

# Приморский край: портал открытых данных (opendata.primorsky.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** каталог открытых данных |
| Тип доступа | Портал каталога + файлы по наборам |
| Основные форматы | HTML, **CSV**, **JSON**, **XLSX** (по наборам) |
| Оператор | Правительство Приморского края / уполномоченный оператор портала ОД |
| Режим доступа | Открытый |

Коротко: основная **машиночитаемая** витрина края для поиска наборов по тематикам (включая финансы и геопространственные при наличии). Для **гражданского** изложения бюджета — [ebudget](/data-sources/regional/primorsky-krai-ebudget-open-budget).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — перечень наборов и полнота полей различаются по тематикам |
| Машиночитаемость (`machine_readability`) | высокая для отдельных наборов (файлы + метаданные); требуется выбор конкретного датасета |
| Юридическая значимость (`legal_significance`) | официальная региональная публикация в контуре открытых данных |
| Задержка обновления (`update_lag`) | зависит от владельца набора (указать по паспорту) |
| Глубина архива (`archive_depth`) | по версиям файлов в карточках наборов |
| Лицензия (`license_or_terms`) | см. условия портала и лицензии конкретного набора |

## Описание

Портал публикует **паспорта наборов**, ссылки на файлы, рубрики. Для связки с **федеральным** бюджетным контуром используйте [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) и методику [консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Канонический вход: https://opendata.primorsky.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог открытых данных | https://opendata.primorsky.ru/ | HTML |
| Наборы (по ссылкам из каталога) | см. карточки наборов на портале | CSV, JSON, XLSX, … |

## Объекты данных и показатели

- **Именованные наборы** с метаданными (периодичность, ответственный, форматы).
- Тематики: транспорт, экология, **финансы**, геоданные — в зависимости от наполнения каталога.
- Ключи связки: коды **ОКТМО**, **год**, идентификаторы объектов — по полям конкретного набора.

## Периодичность обновления

Задаётся **в паспорте каждого набора** на портале; общий регламент для всех тем в этой карточке не фиксируется.

## Ограничения и особенности

- Качество метаданных и стабильность схем различаются по ведомствам-владельцам наборов.

## Связанные страницы wiki

- [Министерство финансов Приморского края](/data-sources/regional/primorsky-krai-minfin) — контекст бюджетного цикла и документов.
- [Запись в DataCatalogs.ru](/data-sources/regional/primorsky-krai-opendata-datacatalogs-ru) — внешняя навигация к этому порталу.
- [Сводная страница субъекта](/data-sources/regional/subject-primorsky-krai-sources-overview) — все источники по краю.

## Не путать с

- **[Запись в Dateno.io](/data-sources/regional/primorsky-krai-opendata-dateno-registry)** — сторонний реестр, не оператор первичных файлов.
