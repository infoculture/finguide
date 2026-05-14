---
title: 'Тамбовская область: Администрация города Тамбова (Комитет финансов)'
sidebar_label: Администрация города Тамбова (Комитет финансов)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/tambov-oblast-fin-52af077ba5
source_url: 'http://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Муниципальные финансы):
  Бюджет городского округа города Тамбова, Бюджет для граждан
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tambov-oblast-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Тамбовская область: Администрация города Тамбова (Комитет финансов)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальный / региональный контур (см. колонку таблицы) |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Администрация города Тамбова (Комитет финансов) |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Бюджет городского округа города Тамбова, Бюджет для граждан

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

**Комментарий:** Раздел с муниципальными финансовыми данными и "Бюджетом для граждан" города Тамбова.

## Оператор

Администрация города Тамбова (Комитет финансов) — канонический вход: http://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | http://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet | HTML |

## Объекты данных и показатели

- Бюджет городского округа города Тамбова, Бюджет для граждан
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-tambov-oblast-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
