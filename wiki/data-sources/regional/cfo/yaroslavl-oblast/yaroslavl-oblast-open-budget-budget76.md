---
title: 'Ярославская область: «Открытый бюджет» (budget76.ru)'
sidebar_label: 'Открытый бюджет (budget76.ru)'
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/yaroslavl-oblast-open-budget-budget76
source_url: 'https://budget76.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Региональная витрина «бюджета для граждан» и сопутствующей аналитики по
  доходам и расходам бюджета Ярославской области.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion
  - /data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion
  - /data-sources/regional/subject-yaroslavl-oblast-sources-overview
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Ярославская область: «Открытый бюджет» (budget76.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный контур Ярославской области (публичная бюджетная витрина) |
| Тип доступа | Специализированный веб-портал |
| Основные форматы | HTML, при наличии — табличные вложения |
| Оператор | Витрина «Открытый бюджет» (регион 76) |
| Режим доступа | Открытый |

Коротко: **популярная** точка входа к сводам и визуализациям бюджета для граждан и СМИ; для первичных отчётов и юридически значимых документов опирайтесь на [Минфин области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion) и [банк НПА](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion).

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от глубины связки с первичными отчётами |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; отдельные выгрузки уточняйте на витрине |
| Юридическая значимость (`legal_significance`) | публичная аналитическая витрина (не заменяет официальные отчёты) |
| Задержка обновления (`update_lag`) | зависит от цикла обновления витрины |
| Глубина архива (`archive_depth`) | определяется разделами портала |
| Лицензия (`license_or_terms`) | условия сайта `budget76.ru` |

## Описание

Портал ориентирован на **понятное** представление бюджета: доходы, расходы, разрезы по направлениям. Для сверки с федеральными рядами и классификаторами используйте [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

Витрина «Открытый бюджет» Ярославской области — канонический вход: https://budget76.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница витрины | https://budget76.ru/ | HTML |

## Объекты данных и показатели

- **Агрегированные показатели** бюджета области (доходы, расходы, визуализации).
- Возможные **разрезы** по программам и направлениям (по мере публикации на сайте).
- Связка: финансовый год; для машинной обработки приоритетно искать первичные файлы на сайте [Минфина](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion).

## Периодичность обновления

Привязана к циклу подготовки и исполнения бюджета и политике обновления витрины.

## Ограничения и особенности

- Витрина может сокращать или округлять детализацию ради читаемости.

## Связанные страницы wiki

- [Министерство финансов Ярославской области](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion) — официальные документы и отчётность.
- [Банк НПА области](/data-sources/regional/yaroslavl-oblast-official-legal-acts-npa-yarregion) — законы о бюджете.
- [Сводная страница субъекта](/data-sources/regional/subject-yaroslavl-oblast-sources-overview) — все источники по области.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральная сверка.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[Минфин на портале yarregion.ru](/data-sources/regional/yaroslavl-oblast-minfin-portal-yarregion)** — первичный официальный контур отчётности, а не только «гражданская» подача.
