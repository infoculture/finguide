---
title: 'Самарская область: Народный бюджет Самарской области (на портале samregion.ru)'
sidebar_label: Народный бюджет Самарской области (на портале samreg
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/samara-oblast-fin-1712e6ed9e
source_url: 'https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Прочие источники по
  госфинансам): Информация о проектах, финансируемых в рамках программы
  "Народный бюджет".
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-samara-oblast-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Самарская область: Народный бюджет Самарской области (на портале samregion.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальный / региональный контур (см. колонку таблицы) |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Народный бюджет Самарской области (на портале samregion.ru) |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Информация о проектах, финансируемых в рамках программы "Народный бюджет".

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

**Категория (таблица):** Дополнительные официальные источники по госфинансам:

**Статус исследования:** найдено

**Комментарий:** nan

## Оператор

Народный бюджет Самарской области (на портале samregion.ru) — канонический вход: https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti | HTML |

## Объекты данных и показатели

- Информация о проектах, финансируемых в рамках программы "Народный бюджет".
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-samara-oblast-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
