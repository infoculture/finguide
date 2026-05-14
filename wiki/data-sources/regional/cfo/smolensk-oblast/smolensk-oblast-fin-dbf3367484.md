---
title: 'Смоленская область: УФНС России по Смоленской области'
sidebar_label: УФНС России по Смоленской области
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/smolensk-oblast-fin-dbf3367484
source_url: 'https://www.nalog.gov.ru/rn67'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Управление ФНС России):
  Налоговые поступления, статистика
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Смоленская область: УФНС России по Смоленской области

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный контур субъекта РФ |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | УФНС России по Смоленской области |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Налоговые поступления, статистика

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

**Категория (таблица):** 6. УФНС

**Статус исследования:** найдено

**Комментарий:** Региональный раздел сайта ФНС

## Оператор

УФНС России по Смоленской области — канонический вход: https://www.nalog.gov.ru/rn67

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://www.nalog.gov.ru/rn67 | HTML |

## Объекты данных и показатели

- Налоговые поступления, статистика
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
