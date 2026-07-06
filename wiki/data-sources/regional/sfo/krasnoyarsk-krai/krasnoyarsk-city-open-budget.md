---
title: 'Красноярский край: Открытый бюджет города Красноярска'
sidebar_label: Открытый бюджет города Красноярска
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/krasnoyarsk-krai-fin-7f50e8b851
source_url: 'http://budget.admkrsk.ru/Pages/default.aspx'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Муниципальные финансы):
  Муниципальные финансовые данные, бюджет города
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnoyarsk-krai-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Красноярский край: Открытый бюджет города Красноярска

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальный / региональный контур (см. колонку таблицы) |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Открытый бюджет города Красноярска |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Муниципальные финансовые данные, бюджет города

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (массовый импорт; точечная проверка URL — позже) |
| Полнота (`data_completeness`) | неизвестна — карточка свёрнута из широкого обзора |
| Машиночитаемость (`machine_readability`) | HTML; машиночитаемые выгрузки не зафиксированы в таблице |
| Юридическая значимость (`legal_significance`) | официальный или смежный региональный вход (см. комментарий таблицы) |
| Задержка обновления (`update_lag`) | неизвестна |
| Глубина архива (`archive_depth`) | неизвестна |
| Лицензия (`license_or_terms`) | не указаны в таблице |

## Описание

**Категория (таблица):** Дополнительные официальные источники по госфинансам: муниципальные бюджетные витрины

**Статус исследования:** найдено

## Оператор

Открытый бюджет города Красноярска — канонический вход: http://budget.admkrsk.ru/Pages/default.aspx

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | http://budget.admkrsk.ru/Pages/default.aspx | HTML |

## Объекты данных и показатели

- Муниципальные финансовые данные, бюджет города
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-krasnoyarsk-krai-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
