---
title: 'Республика Коми: Электронный бюджет (Открытые данные)'
sidebar_label: Электронный бюджет (Открытые данные)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/republic-of-komi-fin-0d89be7624
source_url: >-
  https://www.budget.gov.ru/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Прочие источники по
  госфинансам): Данные по бюджету субъекта
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-komi-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Республика Коми: Электронный бюджет (Открытые данные)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный контур субъекта РФ |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Электронный бюджет (Открытые данные) |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Данные по бюджету субъекта

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

**Категория (таблица):** 9. Доп. источники

**Статус исследования:** найдено

**Комментарий:** Раздел открытых данных на федеральном портале

## Оператор

Электронный бюджет (Открытые данные) — канонический вход: https://www.budget.gov.ru/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://www.budget.gov.ru/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5 | HTML |

## Объекты данных и показатели

- Данные по бюджету субъекта
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-republic-of-komi-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
