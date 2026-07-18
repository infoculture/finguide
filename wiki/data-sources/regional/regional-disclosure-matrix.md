---
title: Пилотная матрица раскрытия бюджетных данных (10 субъектов РФ)
sidebar_label: Матрица раскрытия (пилот)
description: >-
  Сопоставимые признаки публичного раскрытия для десяти пилотных субъектов РФ:
  открытый бюджет, наборы, API, законы об исполнении и удобство поиска;
  ссылки на материалы wiki и задел под карточки органов.
tags:
  - regional
  - navigation
  - editorial
last_updated: 2026-07-16
content_type: reference
slug: /data-sources/regional/regional-disclosure-matrix
related_pages:
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/regional-portals
  - /data-sources/regional/moscow-mgfoms
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /data-sources/federal/minfin-subbud-execute
  - /reporting/0503317
  - /reporting/0503387
  - /howto/analysis/interbudgetary-transfers
  - /glossary/transfers
  - /legal/414fz-public-authority-regions
---

# Пилотная матрица раскрытия бюджетных данных (10 субъектов РФ)

Страница фиксирует **единую сетку признаков** для сравнения субъектов по публичному раскрытию (не «рейтинг качества жизни», а **наличие каналов** данных). Значения **«да / частично / нет»** — редакционный **снимок** на дату `last_updated`; перед юридически значимыми выводами сверяйте официальные сайты субъектов и [методику поиска](./how-to-find-regional-data.md).

Организационный владелец региональной публикации определяется в контексте [414-ФЗ о публичной власти в субъектах РФ](/legal/414fz-public-authority-regions), а состав бюджетных таблиц — также БК РФ и региональными актами. Наличие строки в матрице не является выводом о выполнении всех обязанностей раскрытия.

Канонический список субъектов — из редакционного плана `regional-municipal-pilot` (OpenSpec): Москва; Санкт-Петербург; Республика Татарстан; Краснодарский край; Свердловская область; Республика Саха (Якутия); Республика Дагестан; Кемеровская область — Кузбасс; Ханты-Мансийский автономный округ — Югра; Калининградская область.

## Легенда колонок

| Колонка | Смысл |
| --- | --- |
| Открытый бюджет | Публичная витрина «бюджет для гражданина» или эквивалент с ключевыми разделами |
| Открытые данные | Портал наборов CSV/JSON/XLSX или регулярные выгрузки |
| API | Стабильный программный интерфейс к наборам (**да** / **ad hoc** / **нет**) |
| Законы о бюджете | Архив текстов и таблиц по годам в открытом доступе |
| Исполнение | Отчёты об исполнении (часто 0503317/0503387 и региональные зеркала) |
| Поиск | Субъективная оценка **навигации** (1–3: 3 — быстрый вход к закону и исполнению с главной) |

## Матрица

| Субъект | Открытый бюджет | Открытые данные | API | Законы о бюджете | Исполнение | Поиск | Финансовый орган | Бюджетная ИС | Канонический источник |
| --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| Москва | частично | частично | ad hoc | да | да | 3 | [Депфин Москвы](/organizations/moscow-finance-department) | [Открытый бюджет Москвы](/information-systems/regional/moscow-open-budget) | [карточка витрины](/data-sources/regional/moscow-open-budget) |
| Санкт-Петербург | частично | частично | ad hoc | да | да | 3 | [Комитет финансов СПб](/organizations/saint-petersburg-finance-committee) | [Открытый бюджет СПб](/information-systems/regional/saint-petersburg-open-budget) | [карточка витрины](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb) |
| Республика Татарстан | частично | частично | нет | да | частично | 2 | [Минфин Татарстана](/organizations/tatarstan-minfin) | [Открытый бюджет Татарстана](/information-systems/regional/tatarstan-open-budget) | [карточка раздела](/data-sources/regional/republic-of-tatarstan-fin-0ee8f58762) |
| Краснодарский край | частично | частично | нет | да | частично | 2 | [Минфин края](/organizations/krasnodar-krai-minfin) | отдельная публичная бюджетная ИС не выделена | [сайт Минфина](/data-sources/regional/krasnodar-krai-minfin-krasnodar) |
| Свердловская область | частично | частично | нет | да | частично | 2 | [Минфин области](/organizations/sverdlovsk-oblast-minfin) | [Открытый бюджет](/information-systems/regional/sverdlovsk-open-budget) | [карточка витрины](/data-sources/regional/sverdlovsk-oblast-open-budget) |
| Республика Саха (Якутия) | частично | частично | нет | да | частично | 2 | [Минфин Якутии](/organizations/sakha-yakutia-minfin) | отдельная публичная бюджетная ИС не выделена | [сайт Минфина](/data-sources/regional/republic-of-sakha-yakutia-fin-cdea6ee8fa) |
| Республика Дагестан | частично | частично | нет | да | частично | 2 | [Минфин Дагестана](/organizations/dagestan-minfin) | [Открытый бюджет](/information-systems/regional/dagestan-open-budget) | [карточка витрины](/data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd) |
| Кемеровская область — Кузбасс | частично | частично | нет | да | частично | 2 | [Минфин Кузбасса](/organizations/kuzbass-minfin) | отдельная публичная бюджетная ИС не выделена | [сайт Минфина](/data-sources/regional/kemerovo-oblast-kuzbass-fin-4b4c5aa179) |
| ХМАО — Югра | частично | частично | нет | да | частично | 2 | [Депфин Югры](/organizations/khmao-yugra-finance-department) | [Открытый бюджет Югры](/information-systems/regional/yugra-open-budget) | [карточка раздела](/data-sources/regional/khmao-yugra-depfin-open-budget-citizens) |
| Калининградская область | частично | частично | нет | да | частично | 2 | [Минфин области](/organizations/kaliningrad-oblast-minfin) | отдельная публичная бюджетная ИС не выделена | [сайт Минфина](/data-sources/regional/kaliningrad-oblast-minfin) |

**Пояснение:** «частично» в колонках витрин и наборов отражает типичную ситуацию 2024–2026 гг. (есть разделы, но нет единого API и неполная машиночитаемость по всем разрезам). Уточняйте по субъекту перед автоматизацией.

## Тематические семейства пилота

В каждой ячейке используется одно из четырёх состояний OpenSpec: `есть проверенная карточка`, `публичный след найден, карточка запланирована`, `не найдено на дату проверки`, `неприменимо`. Состояние `есть проверенная карточка` всегда является ссылкой на конкретный источник, а не на сводку субъекта. Пустой результат поиска не превращается в утверждение об отсутствии данных за пределами даты проверки.

| Субъект | Долг | Программы | Закупки | Контроль | Открытые данные | Муниципальный уровень | Маршрут проверки |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Москва | [есть проверенная карточка](/data-sources/regional/moscow-findep) | [есть проверенная карточка](/data-sources/regional/moscow-open-budget-state-programs) | [есть проверенная карточка](/data-sources/regional/moscow-procurement-tender-mos) | [есть проверенная карточка](/data-sources/regional/moscow-accounts-chamber-ksp) | [есть проверенная карточка](/data-sources/regional/moscow-open-data-portal) | публичный след найден, карточка запланирована | [сводка](/data-sources/regional/subject-moscow-sources-overview) |
| Санкт-Петербург | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/saint-petersburg-state-programs-gov-spb) | [есть проверенная карточка](/data-sources/regional/saint-petersburg-procurement-gz-spb) | [есть проверенная карточка](/data-sources/regional/saint-petersburg-control-auditing-chamber-ksp) | [есть проверенная карточка](/data-sources/regional/saint-petersburg-open-data-gov-spb) | публичный след найден, карточка запланирована | [сводка](/data-sources/regional/subject-saint-petersburg-sources-overview) |
| Татарстан | публичный след найден, карточка запланирована | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan) | не найдено на 2026-07-16 | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/republic-of-tatarstan-fin-0ee8f58762) | [сводка](/data-sources/regional/subject-republic-of-tatarstan-sources-overview) |
| Краснодарский край | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/krasnodar-krai-state-programs-economy) | [есть проверенная карточка](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar) | не найдено на 2026-07-16 | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/krasnodar-krai-city-krasnodar-budget-for-citizens) | [сводка](/data-sources/regional/subject-krasnodar-krai-sources-overview) |
| Свердловская область | [есть проверенная карточка](/data-sources/regional/sverdlovsk-oblast-minfin) | [есть проверенная карточка](/data-sources/regional/sverdlovsk-oblast-open-budget) | [есть проверенная карточка](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural) | [есть проверенная карточка](/data-sources/regional/sverdlovsk-oblast-accounts-chamber) | публичный след найден, карточка запланирована | публичный след найден, карточка запланирована | [сводка](/data-sources/regional/subject-sverdlovsk-oblast-sources-overview) |
| Саха (Якутия) | [есть проверенная карточка](/data-sources/regional/republic-of-sakha-yakutia-fin-10fefd3b43) | [есть проверенная карточка](/data-sources/regional/republic-of-sakha-yakutia-fin-10fefd3b43) | [есть проверенная карточка](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov) | не найдено на 2026-07-16 | публичный след найден, карточка запланирована | публичный след найден, карточка запланирована | [сводка](/data-sources/regional/subject-republic-of-sakha-yakutia-sources-overview) |
| Дагестан | публичный след найден, карточка запланирована | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/dagestan-procurement-komzak-e-dag) | не найдено на 2026-07-16 | публичный след найден, карточка запланирована | не найдено на 2026-07-16 | [сводка](/data-sources/regional/subject-republic-of-dagestan-sources-overview) |
| Кузбасс | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/kemerovo-oblast-kuzbass-fin-34fd673e6b) | [есть проверенная карточка](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko) | [есть проверенная карточка](/data-sources/regional/kemerovo-oblast-kuzbass-fin-50d6bd0045) | публичный след найден, карточка запланирована | публичный след найден, карточка запланирована | [сводка](/data-sources/regional/subject-kemerovo-oblast-kuzbass-sources-overview) |
| ХМАО — Югра | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/khmao-yugra-state-programs-portal) | [есть проверенная карточка](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao) | [есть проверенная карточка](/data-sources/regional/khmao-yugra-accounts-chamber-sphmao) | [есть проверенная карточка](/data-sources/regional/khmao-yugra-open-data-portal) | [есть проверенная карточка](/data-sources/regional/khmao-yugra-khanty-mansi-district-electronic-budget) | [сводка](/data-sources/regional/subject-khmao-yugra-sources-overview) |
| Калининградская область | [есть проверенная карточка](/data-sources/regional/kaliningrad-oblast-minfin) | [есть проверенная карточка](/data-sources/regional/kaliningrad-oblast-minfin) | [есть проверенная карточка](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) | [есть проверенная карточка](/data-sources/regional/kaliningrad-oblast-control-accounting-chamber) | публичный след найден, карточка запланирована | [есть проверенная карточка](/data-sources/regional/kaliningrad-oblast-kaliningrad-city-budget) | [сводка](/data-sources/regional/subject-kaliningrad-oblast-sources-overview) |

Столбец муниципального уровня фиксирует наличие хотя бы одного проверенного примера, а не полноту муниципального каталога субъекта. Состояние `карточка запланирована` не является обещанием автоматически создавать карточки всех муниципалитетов.

## Связь с федеральным контекстом

- [Краткая информация Минфина по субъектам](/data-sources/federal/minfin-subbud-execute) — **не** замена региональной детализации.
- [Консолидированные бюджеты на портале Казначейства](./consolidated-budgets.md) — форма **0503317** как общий якорь.

## Межбюджетные трансферты и отчётность

- [Форма 0503387](/reporting/0503387) и [0503317](/reporting/0503317) — отчётный разрез трансфертов.
- [How-to: межбюджетные трансферты](/howto/analysis/interbudgetary-transfers) — маршрут анализа.
- [Межбюджетные трансферты](/glossary/transfers) — термины **гл. 16 БК РФ**.

## Крупные муниципалитеты

См. агрегированный обзор [крупных городов](./large-city-budgets.md) (тот же набор признаков, где применимо).
