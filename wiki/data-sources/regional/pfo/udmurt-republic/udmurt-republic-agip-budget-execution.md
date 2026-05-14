---
title: 'Удмуртская Республика: Портал органов власти субъекта с бюджетными разделами'
sidebar_label: Портал органов власти субъекта с бюджетными…
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/udmurt-republic-fin-af37e9a472
source_url: >-
  https://udmurt.ru/administratsiya/informatsiya-o-finansovoy-deyatelnosti-agip-ur/ispolzovanie-byudzhetnykh-sredstv
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14T00:00:00.000Z
description: >-
  Автоимпорт из _dev/rf_finance_sources_table_full.md (Прочие источники по
  госфинансам): Информация об использовании бюджетных средств Администрацией
  Главы и Правительства УР
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-udmurt-republic-sources-overview
  - /data-sources/regional
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
rag_priority: low
---

# Удмуртская Республика: Портал органов власти субъекта с бюджетными разделами

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный контур субъекта РФ |
| Тип доступа | Публичный веб-раздел или портал (по таблице исследования) |
| Основные форматы | HTML (детализация — после ручной проверки витрины) |
| Оператор | Портал органов власти субъекта с бюджетными разделами |
| Режим доступа | Открытый (по состоянию на дату импорта; перед автоматизацией проверьте robots/ограничения) |

Коротко: Информация об использовании бюджетных средств Администрацией Главы и Правительства УР

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

**Категория (таблица):** Дополнительные официальные источники по госфинансам

**Статус исследования:** найдено

**Комментарий:** Раздел об использовании бюджетных средств на портале органов власти УР

## Оператор

Портал органов власти субъекта с бюджетными разделами — канонический вход: https://udmurt.ru/administratsiya/informatsiya-o-finansovoy-deyatelnosti-agip-ur/ispolzovanie-byudzhetnykh-sredstv

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб | https://udmurt.ru/administratsiya/informatsiya-o-finansovoy-deyatelnosti-agip-ur/ispolzovanie-byudzhetnykh-sredstv | HTML |

## Объекты данных и показатели

- Информация об использовании бюджетных средств Администрацией Главы и Правительства УР
- Уточните объекты строк (план/факт, ОКТМО, год) после ручной проверки витрины.

## Периодичность обновления

Не зафиксирована в исходной таблице; уточните по сайту оператора.

## Ограничения и особенности

- Карточка создана скриптом `import-regional-sources-from-table.mjs` из файла `_dev/rf_finance_sources_table_full.md` в репозитории; сверяйте URL и правовой статус материалов перед воспроизводимым анализом.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-udmurt-republic-sources-overview) — все источники по этому субъекту в wiki.
- [Региональные источники (оглавление)](/data-sources/regional/) — методика и смежные обзоры.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — федеральный контекст планирования и исполнения.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — сверка с федеральной витриной при необходимости.
