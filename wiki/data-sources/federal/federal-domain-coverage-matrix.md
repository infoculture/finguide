---
title: "Матрица приоритетных федеральных доменов данных"
sidebar_label: "Матрица федеральных доменов"
tags: [data-source, federal, navigation]
last_updated: 2026-07-16
description: "Проверенная карта доменов, владельцев, систем, публичных источников и ограничений без смешения ИС и наборов."
slug: /data-sources/federal/federal-domain-coverage-matrix
content_type: reference
last_verified: 2026-07-16
related_pages:
  - /organizations/rosim
  - /information-systems/federal/gis-gmp
  - /data-sources/federal/sfr-open-data-catalog
---

# Матрица приоритетных федеральных доменов данных

Матрица фиксирует результат инвентаризации на **2026-07-16**. Строка различает организацию-владельца, информационную систему и конкретный публичный источник; совпадение оператора не означает совпадение данных.

| Домен | Организация | ИС | Публичный источник | Основное ограничение |
| --- | --- | --- | --- | --- |
| Федеральное имущество | [Росимущество](/organizations/rosim) | [ФГИАС ЕУСГИ / ФИО](/information-systems/federal/federal-property-online) | [Маркетплейс](/data-sources/federal/federal-property-marketplace) | UI не является полным реестром или стабильным API |
| Приватизация | [Росимущество](/organizations/rosim) | ФГИАС ЕУСГИ + [ГИС «Торги»](/information-systems/federal/torgi-gov-ru) | [Навигатор приватизации](/data-sources/federal/federal-property-privatization) | план, карточка объекта и итог торгов — разные документы |
| Платежи | [Федеральное казначейство](/organizations/federal-treasury) | [ГИС ГМП](/information-systems/federal/gis-gmp) | [Публичные производные](/data-sources/federal/gis-gmp-public-derivatives) | нет открытого персонального транзакционного дампа |
| Социальное страхование | [СФР](/organizations/sfr) | сайт и каталог фонда | [Каталог открытых данных СФР](/data-sources/federal/sfr-open-data-catalog) | версии файлов и архивы меняются по наборам |
| Медицинское страхование | [ФФОМС](/organizations/ffoms) | сайт фонда + бюджетные ИС | [Публикации ФФОМС](/data-sources/federal/ffoms-publications) | стабильная массовая построчная выгрузка не подтверждена |
| Долг и гарантии | [Минфин](/organizations/minfin) | [ГИИС ЭБ](/information-systems/federal/giis-eb) | [Навигатор долга и рисков](/data-sources/federal/debt-guarantees-fiscal-risks) | паспорта наборов требуют проверки периода и уровня бюджета |
| Публичные инвестиции | [Минстрой](/organizations/minstroy) и ГРБС | [ГИИС ЭБ](/information-systems/federal/giis-eb) | [ФАИП и инвестиции](/data-sources/federal/public-investment-faip) | перечень объектов не равен кассовому исполнению |
| Финансовый контроль | [Счётная палата](/organizations/accounts-chamber) и контрольные органы | ГИИС ЭБ, ЕГСФК | [Результаты контроля](/data-sources/federal/financial-control-results) | внутренний и внешний контроль имеют разные периметры |
| Закупки | [Федеральное казначейство](/organizations/federal-treasury) | [ЕИС](/information-systems/federal/zakupki) | [Навигатор реестров ЕИС](/data-sources/federal/eis-registry-routes) | правовой режим и тип документа выбираются раздельно |

## Проверка дублей

Новые страницы являются либо карточками ранее отсутствующих сущностей, либо тематическими навигаторами к уже существующим паспортам. Они не дублируют массовые карточки `opendata-*`: канонический паспорт набора остаётся один, навигатор объясняет выбор и сопоставление.
