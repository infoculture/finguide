---
title: Автоматизация
sidebar_label: Автоматизация
tags:
  - howto
  - automation
last_updated: 2026-05-12T00:00:00.000Z
content_type: reference
description: >-
  Python, pandas, DuckDB: запросы к API, разбор XML закупок, join по КБК,
  пайплайны обновления и контроль качества данных.
related_pages:
  - /howto
  - /howto/automation/python-budget-api
  - /howto/access/budget-gov-api
  - /howto/automation/pandas-kbc
  - /data-sources/federal/budget-gov-ru-datasets
  - /intro/rag-guide
  - /intro/data-map
---

# How-to: автоматизация и интеграция

Рецепты автоматизации обработки данных и построения пайплайнов. Для **первичной выгрузки** без кода начните с [доступа к данным](/howto/access/); метаданные для индексации — в [RAG-гайде](/intro/rag-guide).

## Для кого

- Разработчикам дата-пайплайнов и аналитикам, готовым перейти от ручных шагов к скриптам.

## Быстрые входы

| Задача | Инструкция |
| --- | --- |
| HTTP-клиент к budget.gov.ru | [Python: budget.gov.ru API](./python-budget-api.md) (см. также [ручной разбор API](/howto/access/budget-gov-api)) |
| Пакетный разбор XML ЕИС | [Python: парсинг ЕИС Закупки](./python-zakupki.md) |
| Join таблиц по КБК | [Pandas: КБК и join](./pandas-kbc.md) |
| Аналитика в одном файле/SQL | [DuckDB: бюджетная аналитика](./duckdb-budgets.md) |
| Регламент обновления | [Пайплайн обновления](./data-update-pipeline.md) |
| Проверки и аномалии | [Контроль качества данных](./data-quality.md) |

## Типовые вопросы

**Нужен ли отдельный сервер?** Рецепты рассчитаны на локальный запуск; продакшен-инфраструктура на стороне читателя.
