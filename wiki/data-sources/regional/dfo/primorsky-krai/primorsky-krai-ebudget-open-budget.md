---
title: 'Приморский край: «Открытый бюджет» (ebudget.primorsky.ru)'
sidebar_label: Открытый бюджет (ebudget)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/primorsky-krai-ebudget-open-budget
source_url: 'https://ebudget.primorsky.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; без гарантированного стабильного API в карточке
description: >-
  Региональный портал «Открытый бюджет» / бюджет для граждан: агрегированные
  материалы по бюджету Приморского края в упрощённой подаче.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-primorsky-krai-sources-overview
  - /data-sources/regional/primorsky-krai-minfin
  - /data-sources/regional/primorsky-krai-opendata-portal
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Приморский край: «Открытый бюджет» (ebudget.primorsky.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** бюджет Приморского края (материалы для граждан) |
| Тип доступа | Официальный тематический портал |
| Основные форматы | HTML (вложенные таблицы, PDF по ссылкам — по факту разделов) |
| Оператор | Исполнительная власть Приморского края (витрина бюджетной прозрачности) |
| Режим доступа | Открытый |

Коротко: отправная точка для **гражданского** изложения краевого бюджета. Для **сырых наборов** и API смотрите [портал открытых данных края](/data-sources/regional/primorsky-krai-opendata-portal); для **ведомственного** контура — [Минфин края](/data-sources/regional/primorsky-krai-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — набор разделов и глубина архива зависят от редакции портала |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; машиночитаемые выгрузки не зафиксированы в этой карточке |
| Юридическая значимость (`legal_significance`) | официальная региональная витрина |
| Задержка обновления (`update_lag`) | привязана к циклу бюджета и отчётности |
| Глубина архива (`archive_depth`) | зависит от политики публикации на портале |
| Лицензия (`license_or_terms`) | см. условия сайта оператора |

## Описание

Портал предназначен для **прозрачности краевого бюджета**: планы, исполнение, пояснительные материалы в доступной форме. Для сверки с **федеральной** витриной открытых бюджетных рядов используйте [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) и [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Канонический вход: https://ebudget.primorsky.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал «Открытый бюджет» | https://ebudget.primorsky.ru/ | HTML |

## Объекты данных и показатели

- Агрегированные **доходы и расходы** краевого бюджета (по размещённым разделам).
- **Отчёты об исполнении** и справочные материалы — в форме публикации на портале.
- Ключи связки: **финансовый год**, коды бюджетной классификации (если приведены в таблицах), **ОКТМО** для муниципальных срезов (если есть).

## Периодичность обновления

Обновляется вокруг этапов бюджетного цикла (проект, утверждение, отчётность об исполнении); точные сроки — на портале оператора.

## Ограничения и особенности

- Доступность хоста может периодически прерываться; перед автоматизацией проверяйте HTTP-статус и `robots.txt`.

## Связанные страницы wiki

- [Министерство финансов Приморского края](/data-sources/regional/primorsky-krai-minfin) — ведомственный сайт и нормативные материалы по бюджету.
- [Портал открытых данных Приморского края](/data-sources/regional/primorsky-krai-opendata-portal) — файловые наборы и метаданные.
- [Сводная страница субъекта](/data-sources/regional/subject-primorsky-krai-sources-overview) — все карточки источников по краю.

## Не путать с

- **[Портал открытых данных](/data-sources/regional/primorsky-krai-opendata-portal)** — отдельная витрина с каталогом наборов и файлами, а не только HTML-изложение.
