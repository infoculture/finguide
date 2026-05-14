---
title: 'Костромская область: Бюджет для граждан (на сайте Департамента финансов)'
sidebar_label: Бюджет для граждан (на сайте Департамента финансов)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/kostroma-oblast-fin-91ac504cb2
source_url: 'https://depfin.kostroma.gov.ru/byudzhet/byudzhet-dlya-grazhdan'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Открытый бюджет / бюджет
  для граждан): Информация о региональном бюджете в доступной форме
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kostroma-oblast-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Костромская область: Бюджет для граждан (на сайте Департамента финансов)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный контур субъекта РФ |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Бюджет для граждан (на сайте Департамента финансов) |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Информация о региональном бюджете в доступной форме

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

**Комментарий:** nan

## Оператор

Бюджет для граждан (на сайте Департамента финансов) — канонический вход: https://depfin.kostroma.gov.ru/byudzhet/byudzhet-dlya-grazhdan

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://depfin.kostroma.gov.ru/byudzhet/byudzhet-dlya-grazhdan | HTML |

## Объекты данных и показатели

- Информация о региональном бюджете в доступной форме
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kostroma-oblast-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
