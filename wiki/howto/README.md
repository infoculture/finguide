---
title: How-to
sidebar_label: How-to
description: >-
  Практические инструкции: доступ к API и выгрузкам, анализ показателей и
  автоматизация обработки открытых данных.
tags:
  - howto
  - index
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
related_pages:
  - /intro/data-map
  - /intro/howto-reproducibility-audit
  - /data-sources
  - /reporting
  - /reference/tags-taxonomy
  - /howto/access
  - /howto/analysis
  - /howto/automation
  - /howto/access/budget-gov-api
  - /howto/access/clearspending
  - /howto/analysis/kbc-decoding
---

# How-to: инструкции по работе с данными

Инструкции стыкуются с [картой данных](/intro/data-map): от вопроса — к источнику, от источника — к коду и проверке результата. Сводная таблица воспроизводимости опубликованных how-to — [аудит how-to](/intro/howto-reproducibility-audit).

## Для кого раздел

- Аналитики, которым нужен **воспроизводимый** путь: запрос, выгрузка, сверка с метаданными витрины.
- Разработчики пайплайнов (API, FTP, пакетные файлы) и авторы карточек wiki, проверяющие инструкцию на актуальность.

## Подкатегории

- [Доступ к данным](./access/README.md) — как получить данные из конкретного источника.
- [Анализ данных](./analysis/README.md) — типовые аналитические задачи.
- [Автоматизация и интеграция](./automation/README.md) — Python, pandas, DuckDB, пайплайны.

## Ключевые маршруты

| Задача | Куда |
| --- | --- |
| Скачать и разобрать срезы budget.gov.ru | [API budget.gov.ru](/howto/access/budget-gov-api) |
| Контракты и субсидии Clearspending (JSON API) | [REST API Clearspending](/howto/access/clearspending) |
| Разобрать 20-значный КБК в таблице | [Расшифровка КБК](/howto/analysis/kbc-decoding) |
| Отчёты Казначейства на портале | [Доступ к отчётам Росказначейства](/howto/access/roskazna-reports) |
| Региональный бюджет | [Анализ регионального бюджета](/howto/analysis/regional-budget-analysis) |

## Типовые вопросы

**С чего начать, если источник неизвестен?** Откройте [карту данных](/intro/data-map), затем карточку в [каталоге источников](/data-sources/).

**Где теги и типы страниц для фильтра в RAG?** [Таксономия тегов](/reference/tags-taxonomy) и поля `content_type` / `entity_type` в экспорте (см. [RAG-гайд](/intro/rag-guide)).

**Форма из отчётности — как найти сырые данные?** В карточке формы в разделе «Где встречается в данных»; стартовый обзор входов — [отчёты Казначейства](/reporting/treasury-reports).

## Формат каждой инструкции

- Зачем (постановка задачи).
- Шаги (1, 2, 3 …).
- Пример кода.
- Подводные камни.
- Связанные источники и системы.
