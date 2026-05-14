---
title: Каталог аналитических сценариев
sidebar_label: Сценарии аналитики
description: >-
  Пять маршрутов от вопроса к данным: исполнение региона, госпрограммы, закупки
  учреждения, трансферты и сравнение регионов — со ссылками на wiki.
tags:
  - intro
  - analysis
  - roadmap
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
slug: /intro/analytics-scenarios-catalog
related_pages:
  - /intro/data-map
  - /howto/analysis/regional-budget-execution-case
  - /howto/analysis/regional-budget-analysis
  - /howto/analysis/gov-programs
  - /howto/analysis/procurement-analysis
  - /howto/analysis/interbudgetary-transfers
  - /reporting/reporting-overview
---

# Каталог аналитических сценариев

Страница фиксирует **явный каталог** маршрутов из редакционной спеки `reproducible-analytics`: для каждого сценария — **цепочка ссылок** без заглушек на корень разделов.

## 1. Оценка исполнения бюджета региона

**Вопрос:** как сопоставить региональные витрины, Казначейство, форму **0503317**, **ОКТМО** и **КБК**?

**Маршрут:** [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) → [консолидированные бюджеты](/data-sources/regional/consolidated-budgets) → [0503317](/reporting/0503317) → [кейс исполнения бюджета субъекта](/howto/analysis/regional-budget-execution-case) → [расшифровка КБК](/howto/analysis/kbc-decoding) → [анализ регионального бюджета](/howto/analysis/regional-budget-analysis) (вёрстка Excel и ноутбук).

## 2. Поиск расходов на государственную программу

**Маршрут:** [Госпрограммы в глоссарии](/glossary/gov-programs) → [отчётность по госпрограммам](/reporting/state-program-reporting) → [наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) → [how-to по госпрограммам](/howto/analysis/gov-programs).

## 3. Анализ закупок учреждения

**Маршрут:** [bus.gov.ru](/data-sources/federal/bus-opendata) → [ЕИС](/information-systems/federal/zakupki) → [ЕГРЮЛ](/information-systems/federal/egrul) → [КБК/КОСГУ](/budget-classification/overview) → [анализ закупок](/howto/analysis/procurement-analysis).

## 4. Проверка межбюджетных трансфертов

**Маршрут:** [Межбюджетные трансферты](/glossary/transfers) → [0503387](/reporting/0503387) → [реестр соглашений](/data-sources/federal/subsidy) → [how-to по трансфертам](/howto/analysis/interbudgetary-transfers).

## 5. Сравнение регионов

**Маршрут:** [ОКТМО](/glossary/oktmo) → [консолидированные бюджеты](/data-sources/regional/consolidated-budgets) → [матрица раскрытия](/data-sources/regional/regional-disclosure-matrix) → [сравнение рядов](/howto/analysis/time-series) (для методики нормализации).

## Связанные материалы

- [Обзор отчётности](/reporting/reporting-overview)
- [План наполнения](/intro/wiki-filling-plan)
- Мини-примеры кода в репозитории книги: [examples/analytics](https://github.com/infoculture/finguide/tree/main/examples/analytics) (см. README в каталоге).
