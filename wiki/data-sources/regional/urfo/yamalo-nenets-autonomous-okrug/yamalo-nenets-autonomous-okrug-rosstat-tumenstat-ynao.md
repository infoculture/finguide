---
title: 'Ямало-Ненецкий автономный округ: Тюменьстат, раздел по ЯНАО (72.rosstat.gov.ru)'
sidebar_label: Тюменьстат (ЯНАО)
tags:
  - data-source
  - regional
  - statistics
last_updated: 2026-05-15
slug: /data-sources/regional/yamalo-nenets-autonomous-okrug-rosstat-tumenstat-ynao
source_url: 'https://72.rosstat.gov.ru/ofstat_ynao'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; машиночитаемые ряды — через ЕМИСС и федеральные витрины
description: >-
  Региональный раздел Тюменьстата по Ямало-Ненецкому АО: социально-экономические
  показатели, ВРП и демография на подведомственной территории.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview
  - /data-sources/regional/tyumen-oblast-rosstat-tumenstat
  - /data-sources/federal/rosstat-opendata
  - /data-sources/federal/rosstat-gosfin-consolidated-budget-rf
  - /organizations/rosstat
---

# Ямало-Ненецкий автономный округ: Тюменьстат, раздел по ЯНАО (72.rosstat.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ямало-Ненецкий АО** в зоне ответственности Тюменьстата (совместно с Тюменской областью и ХМАО — Югрой) |
| Тип доступа | Тематический раздел сайта территориального органа Росстата |
| Основные форматы | HTML |
| Оператор | Управление Росстата по Тюменской области, ХМАО — Югре и ЯНАО (Тюменьстат) |
| Режим доступа | Открытый просмотр |

Коротко: **региональный вход** к официальной статистике по ЯНАО: СЭП, ВРП, демография и смежные публикации. Общий контекст органа — в карточке [Тюменьстат (72.rosstat.gov.ru)](/data-sources/regional/tyumen-oblast-rosstat-tumenstat); для **машиночитаемых таблиц** — [ЕМИСС и открытые данные Росстата](/data-sources/federal/rosstat-opendata).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — пресс-релизы и публикации, не полный микроряд в HTML |
| Машиночитаемость (`machine_readability`) | HTML; выгрузки — через федеральные витрины |
| Юридическая значимость (`legal_significance`) | официальный сайт территориального органа Росстата |
| Задержка обновления (`update_lag`) | зависит от календаря публикации статистики |
| Глубина архива (`archive_depth`) | по политике раздела ofstat_ynao |
| Лицензия (`license_or_terms`) | условия rosstat.gov.ru |

## Описание

Раздел `/ofstat_ynao` посвящён **Ямало-Ненецкому автономному округу** в рамках единого управления Росстата на три субъекта. Для **бюджетных** показателей сопоставляйте с [Депфином](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin) и [федеральными рядами госфинансов](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf).

## Оператор

Управление Федеральной службы государственной статистики по Тюменской области, Ханты-Мансийскому автономному округу — Югре и Ямало-Ненецкому автономному округу — https://72.rosstat.gov.ru/ofstat_ynao

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел по ЯНАО | https://72.rosstat.gov.ru/ofstat_ynao | HTML |
| Сайт Тюменьстата (общий) | https://72.rosstat.gov.ru/ | HTML |

## Объекты данных и показатели

- **Социально-экономическое положение** ЯНАО (обзоры, пресс-релизы).
- **ВРП**, **демография** и отраслевые показатели — в объёме публикации раздела.
- **Ключи связки** с федеральными рядами — код субъекта **89**, ОКТМО/ОКАТО в публикациях Росстата.

## Периодичность обновления

По **календарю** официальной статистической отчётности (месяц, квартал, год — в зависимости от показателя).

## Ограничения и особенности

- Территориальный орган **обслуживает три субъекта**; не смешивайте показатели без явной привязки к ЯНАО.
- Для автоматизации предпочтительны **федеральные** API/выгрузки, а не парсинг HTML раздела.

## Связанные страницы wiki

- [Тюменьстат (общая карточка)](/data-sources/regional/tyumen-oblast-rosstat-tumenstat) — весь контур управления на 72.rosstat.gov.ru.
- [Росстат: открытые данные](/data-sources/federal/rosstat-opendata) — машиночитаемые наборы.
- [Росстат: госфинансы и консолидированный бюджет](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf) — макроагрегаты.
- [Росстат (организация)](/organizations/rosstat) — институциональный контекст.
- [Сводная страница субъекта](/data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview) — все источники по округу.
