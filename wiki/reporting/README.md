---
title: Отчётность и формы
sidebar_label: Отчётность
description: >-
  Карточки форм бюджетной отчётности и смежных раскрытий: назначение, нормативка
  и связь с источниками данных.
tags:
  - reporting
  - index
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
related_pages:
  - /reporting/reporting-overview
  - /reporting/public-debt-reporting
  - /data-sources/regional/subnational-debt-overview
  - /data-sources/regional/regional-extrabudgetary-health-overview
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /intro/data-map
  - /data-sources/federal/minfin-opendata
  - /data-sources/federal/roskazna-reports
  - /budget-classification/overview
  - /howto/analysis/kbc-decoding
  - /reporting/0503117
  - /reporting/treasury-reports
  - /legal/budget-classification-orders
---

# Отчётность и формы

**Точка входа «как устроена отчётность»:** [Обзор бюджетной отчётности](/reporting/reporting-overview) — исполнение федерального и регионального бюджетов, диаграмма связей форм и таблица «задача → форма → источник → how-to».

Стандартные и смежные виды бюджетной отчётности и раскрытия данных по государственным финансам. Карточки помогают понять **назначение формы**, нормативную рамку и **где искать машиночитаемые следы** того же содержания в открытых наборах и на порталах операторов.

## Для кого раздел

- Аналитики, которым нужно сопоставить **регламентированную форму** с выгрузками и дашбордами.
- Авторы wiki: при новой карточке копируйте шаблон **[Шаблон карточки отчётности](/reporting/reporting-card-template)** и правила в `AGENTS.md` (шаблон не попадает в JSONL-экспорт, но доступен на сайте как страница для редакторов).

## Связь «форма → данные»

| Тип задачи | С чего начать |
| --- | --- |
| Исполнение федерального бюджета по КБК | [Форма 0503117](./0503117.md), [0507011](./0507011.md), [отчёты Казначейства](./treasury-reports.md), [открытые данные Минфина](/data-sources/federal/minfin-opendata) |
| Консолидированный бюджет субъекта | [0503317](./0503317.md), [0503387](./0503387.md), [региональные источники](/data-sources/regional/), how-to [кейс исполнения](/howto/analysis/regional-budget-execution-case) |
| Чтение кодов в таблицах | [Обзор бюджетной классификации](/budget-classification/overview), how-to [Расшифровка КБК](/howto/analysis/kbc-decoding), [приказы по классификации](/legal/budget-classification-orders) |
| Сценарный вход без номера формы | [Карта данных](/intro/data-map) |

## Типовые вопросы

**Чем отличается PDF на сайте от набора на data.gov.ru?** Карточка формы описывает границы; для стыковки используйте период, разрез (федеральный / региональный) и поля в метаданных набора.

**Где месячный срез против годового?** См. пары форм **0507011** и **0503117** в карточках и перекрёстные ссылки внутри них.

## Формы об исполнении бюджетов

- [Форма 0503117](./0503117.md) — годовой отчёт об исполнении федерального бюджета
- [Форма 0503317](./0503317.md) — отчёт об исполнении консолидированного бюджета субъекта
- [Форма 0507011](./0507011.md) — месячный отчёт об исполнении федерального бюджета
- [Форма 0503387](./0503387.md) — справочная таблица к 0503317

## Отчётность учреждений и получателей средств

- [План ФХД](./pfhd.md) — для бюджетных и автономных учреждений
- [Бюджетная смета](./budget-estimates.md) — для казённых учреждений
- [Бухгалтерская (финансовая) отчётность учреждений](./institution-financial-statements.md) — баланс и отчёт о финансовых результатах (БУ и АУ)
- [Отчётность получателей субсидий и грантов](./subsidy-recipient-reporting.md)
- [Отчётность об исполнении государственного задания](./state-assignment-reporting.md)

## Программы, ведомственная сводка и внебюджетные фонды

- [Отчётность по государственным программам РФ](./state-program-reporting.md)
- [Сводная отчётность главных распорядителей (ГРБС)](./grbs-consolidated-reporting.md)
- [Отчётность государственных внебюджетных фондов](./extrabudgetary-funds-reporting.md)
- Региональное звено ОМС (ТФОМС) и территориальные внебюджетные фонды — [навигатор](/data-sources/regional/regional-extrabudgetary-health-overview)

## Долг, резервы и ликвидность

Субнациональный контур (долг субъектов и МО) и связь с открытыми витринами — в **[навигаторе по субнациональному долгу](/data-sources/regional/subnational-debt-overview)**.

- [Отчётность по государственному и муниципальному долгу](./public-debt-reporting.md)
- [Отчётность по ФНБ, резервным фондам и управлению ликвидностью](./fiscal-reserves-reporting.md)

## Исполнение местных бюджетов

- [Отчётность об исполнении местных бюджетов](./municipal-budget-execution.md)

## Смежные виды раскрытия (не формы Казначейства по КБК)

- [Налоговая и таможенная статистика как зеркало доходов](./tax-and-customs-revenue-statistics.md)
- [Закупки и контракты как трассировка расходов](./procurement-contract-reporting.md)
- [Региональные закупки: навигатор](/data-sources/regional/regional-procurement-sources-overview)
- [Закупки Москвы (tender.mos.ru)](/data-sources/regional/moscow-procurement-tender-mos)
- [Закупки Санкт-Петербурга (gz-spb.ru)](/data-sources/regional/saint-petersburg-procurement-gz-spb)
- [Закупки Татарстана (goszakupki.tatarstan.ru)](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan)
- [Закупки Краснодарского края (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar)
- [Закупки Свердловской области (goszakaz.midural.ru)](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural)
- [Закупки РС(Я) (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov)
- [Закупки РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag)
- [Закупки Кузбасса (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko)
- [Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao)
- [Закупки Калининградской области (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39)
- [Официальная статистика сектора госуправления и международная отчётность (СГФ)](./government-sector-statistics.md)

## Прочее

- [Отчёты Казначейства об исполнении бюджетов (обзор)](./treasury-reports.md) — семейство форм и входы в данные на roskazna.gov.ru
