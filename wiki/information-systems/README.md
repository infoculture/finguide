---
title: Информационные системы
sidebar_label: Информационные системы
description: >-
  Государственные и гражданские ИС: витрины данных, границы контура и связь с
  каталогом источников.
tags:
  - information-systems
  - index
last_updated: 2026-05-12T00:00:00.000Z
content_type: reference
related_pages:
  - /information-systems/federal
  - /information-systems/regional
  - /information-systems/civil
  - /data-sources
  - /intro/data-map
  - /howto/access
  - /information-systems/federal/giis-eb
  - /information-systems/federal/zakupki
  - /information-systems/federal/roskazna-portal
---

# Информационные системы

Карточки описывают **операторов и витрины**: что публикуется в системе, какие у неё границы по сравнению с «сырыми» наборами в [каталоге источников](/data-sources/) и какие смежные реестры читать вместе с ней.

## Для кого раздел

- Аналитики, которым нужно понять **где заканчивается** функционал портала и что выгружается в open data / API.
- Авторы wiki: при новой карточке ориентируйтесь на файл шаблона `wiki/information-systems/information-system-card-template.md` в репозитории ([GitHub](https://github.com/infoculture/opengovfinancesbook/blob/master/wiki/information-systems/information-system-card-template.md)) и на правила в `AGENTS.md`. У шаблона стоит `draft: true`: он **не** публикуется в production-сборке и **не** попадает в JSONL-экспорт.

## Подразделы

- [Федеральные системы](./federal/README.md) — порталы и ведомственные ИС федеральных органов власти.
- [Региональные системы](./regional/README.md) — региональные и муниципальные ИС в сфере открытого бюджета.
- [Гражданские системы](./civil/README.md) — независимые проекты, агрегаторы и исследовательские сервисы.

## Ключевые системы (федеральный контур)

| Вопрос | Карточка |
| --- | --- |
| Планирование и исполнение бюджета, связка с budget.gov.ru | [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) |
| Публикации Минфина и бюджетная политика | [Сайт Минфина России](/information-systems/federal/minfinsite) |
| Касса, отчёты об исполнении, портальные разделы | [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) |
| Закупки 44-ФЗ / 223-ФЗ | [ЕИС Закупки](/information-systems/federal/zakupki) |
| Федеральный каталог наборов | [data.gov.ru](/information-systems/federal/data-gov-ru) |

## Типовые вопросы

**Чем ИС отличается от «источника данных» в wiki?** ИС — среда оператора (интерфейсы, реестры, иногда API); источник данных — карточка про **конкретные выгрузки и форматы**, часто с перекрёстной ссылкой на ИС.

**С чего начать сценарий без названия системы?** [Карта данных](/intro/data-map) → карточка источника → поле «связанная ИС» или раздел этой группы.

## Шаблон описания ИС

- Оператор и краткое описание.
- Подсистемы и разделы.
- Точки доступа: веб-портал, API, FTP-выгрузки.
- Связанные системы и Q&A.
