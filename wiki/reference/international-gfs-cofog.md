---
title: Россия, GFS, COFOG и осторожные сравнения
sidebar_label: GFS, COFOG и сравнения
description: >-
  Что можно сопоставлять с международными рядами на высокой агрегации, что нельзя
  смешивать с КБК и отчётностью РФ, и какие оговорки нужны при IMF/OECD/WB.
tags:
  - reference
  - international
last_updated: 2026-07-16
content_type: reference
slug: /reference/international-gfs-cofog
related_pages:
  - /reference/international-standards
  - /budget-classification/sgf-2014
  - /data-sources/international/imf-gfs
  - /data-sources/international/oecd-fiscal-data
  - /data-sources/international/imf-qgfs
  - /data-sources/international/imf-world-revenue
  - /data-sources/international/imf-fiscal-monitor
  - /data-sources/international/oecd-fiscal-decentralisation
  - /data-sources/international/open-budget-survey-russia-2023
  - /data-sources/international/world-bank
  - /data-sources/international/un-data
  - /glossary/kbk
---

# Россия, GFS, COFOG и осторожные сравнения

Материал дополняет раздел международной сопоставимости в редакционных спецификациях репозитория (`international-fiscal-comparability`). Он **дополняет** [международные классификаторы](./international-standards.md) прикладным фокусом: **как не сломать** российские ряды при сравнении с **GFSM**, **COFOG** и **СНА**.

## Что можно сравнивать на высоком уровне

- **Агрегаты «генеральное правительство»** в методике **GFSM** (доходы, расходы, операционный баланс, долг) — как **рамку**, если издатель явно пересчитал национальные данные в GFS.
- **Функциональные доли** в духе **COFOG** — как **межстрановую** разметку «здравоохранение / образование», но **не** как построчное соответствие российскому [КВР](/glossary/kvr) или разделу расходного [КБК](/glossary/kbk).
- **Макропоказатели СНА** (ВВП, институциональные сектора) — для **контекста**, не для сверки с кассой по КБК.

## Что нельзя напрямую сопоставлять

- **20-значный КБК** российского бюджета с кодами **COFOG** или строками **GFS** «один к одному» без **официальной** перекодировочной таблицы на конкретный год.
- **КОСГУ** и **казённый учёт** — с корпоративной отчётностью и **GFS**-рядами по сектору **нефинансовых корпораций**.
- **Кассовое исполнение** [Казначейства](/data-sources/federal/roskazna-reports) — с **начислением** в корпоративной отчётности без календаря событий.

## Оговорки при использовании международных рядов

- Уточняйте **версию GFSM** (часто **2014**) и **год** применения методики у издателя ([МВФ](/data-sources/international/imf-gfs), [ОЭСР](/data-sources/international/oecd-fiscal-data), [Всемирный банк](/data-sources/international/world-bank)).
- Российские **официальные** публичные ряды по КБК остаются в контуре [Минфина](/data-sources/federal/minfin-opendata) и [отчётности](/reporting/); международные таблицы — **второй слой** для сравнения **после** согласования методики.

## Таблица «российский блок → международный аналог»

| Российский блок в данных | Международный аналог | Оговорка |
| --- | --- | --- |
| Расходный **КБК** (функциональная часть + [КВР](/glossary/kvr)) | **COFOG** (функции правительства) | Нет универсального построчного мэппинга; только агрегаты и спец. таблицы |
| Исполнение бюджетов по **КБК** (казначейские формы) | **GFS** (операции ген. правительства) | GFS строит издатель; сдвиги по кассе/начислению и консолидации |
| [СГФ-2014 / GFSM](/budget-classification/sgf-2014) в учёте | **GFSM 2014** | Мост методологий, не замена операционных кодов в CSV |
| Бюджетные учреждения и **КОСГУ** | **SNA** (институциональные единицы) | Разные классификаторы и периметры |
| Федеральный **закон о бюджете** (агрегаты) | **WB / IMF fiscal tables** | Сверяйте год, валюту, метод «ген. правительство» vs «центральное» |

## Связанные источники данных (международные)

- [IMF GFS](/data-sources/international/imf-gfs) — методология и ряды GFS.
- [IMF QGFS](/data-sources/international/imf-qgfs) — квартальные операции и балансы по уровням правительства.
- [IMF WoRLD](/data-sources/international/imf-world-revenue) — годовая структура налоговых и неналоговых доходов.
- [IMF Fiscal Monitor](/data-sources/international/imf-fiscal-monitor) — восемь агрегатов с оценками и прогнозами; не подменяет GFS.
- [OECD fiscal](/data-sources/international/oecd-fiscal-data) — межстрановые панели.
- [OECD Fiscal Decentralisation](/data-sources/international/oecd-fiscal-decentralisation) — уровни управления и COFOG; российские наблюдения в текущих таблицах отсутствуют.
- [Open Budget Survey Russia 2023](/data-sources/international/open-budget-survey-russia-2023) — оценка институтов прозрачности, а не денежный ряд GFS.
- [World Bank](/data-sources/international/world-bank) — макро и фискальные индикаторы.
- [UN Data](/data-sources/international/un-data) — глобальные справочники и ссылки на методологию.

## См. также

- [How-to: международные фискальные витрины](/howto/analysis/international-fiscal-data) — безопасный порядок работы с выгрузками.
- [Обзор бюджетной классификации](/budget-classification/overview) — национальный контур кодов.
