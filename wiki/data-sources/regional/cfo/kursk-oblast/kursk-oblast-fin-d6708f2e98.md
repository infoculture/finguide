---
title: 'Курская область: Бюджет для граждан (Администрация города Курска)'
sidebar_label: Бюджет для граждан (Администрация города Курска)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/kursk-oblast-fin-d6708f2e98
source_url: >-
  https://kursk-r38.gosweb.gosuslugi.ru/ofitsialno/statistika/byudzhet-dlya-grazhdan
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Открытый бюджет / бюджет
  для граждан): Упрощенная информация о бюджете города Курска для граждан.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kursk-oblast-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Курская область: Бюджет для граждан (Администрация города Курска)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальный / региональный контур (см. колонку таблицы) |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Бюджет для граждан (Администрация города Курска) |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Упрощенная информация о бюджете города Курска для граждан.

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

**Категория (таблица):** Официальный сайт регионального проекта «Открытый бюджет», «Бюджет для граждан» или аналогичного бюджетного портала

**Статус исследования:** найдено

**Комментарий:** Раздел 'Бюджет для граждан' на сайте Администрации города Курска.

## Оператор

Бюджет для граждан (Администрация города Курска) — канонический вход: https://kursk-r38.gosweb.gosuslugi.ru/ofitsialno/statistika/byudzhet-dlya-grazhdan

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://kursk-r38.gosweb.gosuslugi.ru/ofitsialno/statistika/byudzhet-dlya-grazhdan | HTML |

## Объекты данных и показатели

- Упрощенная информация о бюджете города Курска для граждан.
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kursk-oblast-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
