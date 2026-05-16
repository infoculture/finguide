---
title: Федеральные госНКО — открытые данные
sidebar_label: ГосНКО (федеральные)
tags:
  - data-source
  - federal
  - programs
last_updated: 2020-11-26T00:00:00.000Z
slug: /data-sources/federal/programs-orgs/federal-gos-ngo-disclosure
content_type: reference
description: >-
  Навигатор по 61 федеральной госНКО (срез GovNGO 2020): идентификация по ИНН,
  субсидии 2017–2020 и ссылки на реестры; каталог карточек в organizations и enterprises.
related_pages:
  - /organizations/federal-gos-nko
  - /glossary/gosudarstvennye-nko
  - /data-sources/federal/subsidy
  - /howto/analysis/ngo-funding
  - /data-sources/federal/enterprises
---

# Федеральные госНКО — открытые данные

Коротко: **навигатор** по перечню **61** организаций из исследования **GovNGO** (ноябрь 2020). Карточки не дублируют [казначейский](/information-systems/federal/giis-eb) контур; фокус — **ИНН**, **субсидии** (40 с пометкой госНКО на листе субсидий), **[ЕИС](/data-sources/federal/procurement)** и **[OpenNGO](/data-sources/civil/open-ngo)**.

## Каталоги

| Раздел | Назначение |
| --- | --- |
| [Организации — федеральные госНКО](/organizations/federal-gos-nko) | Роль, учредитель, ИНН |
| [Enterprises — таблица госНКО](/data-sources/federal/enterprises#федеральные-госнко-govngo-2020) | Парные карточки «данные и субсидии» |
| [Глоссарий: гос. и подведомственные НКО](/glossary/gosudarstvennye-nko) | Определение категории |

## Методика и срез

- Источник: [`ngo_federal_list_2020.xlsx`](https://github.com/infoculture/finguide/blob/master/_dev/ngo_federal_list_2020.xlsx) — листы **по ЕГРЮЛ** (46) и **по субсидиям** (госНКО=Да, 40); объединение **61** ИНН.
- Суммы субсидий — **2017–2020**; для актуальных рядов пересчитывайте в [субсидиях](/data-sources/federal/subsidy) и по [how-to НКО](/howto/analysis/ngo-funding).

## Пересечение с госкомпаниями

**Автодор**, **ВЭБ.РФ** и **Росатом** входят в перечень госНКО по субсидиям, но основные карточки раскрытия — в [секторе госучастия](/organizations/state-sector); блоки GovNGO 2020 встроены в существующие страницы.
