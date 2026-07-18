---
title: "Федеральные пакеты акций: публичный навигатор"
sidebar_label: "Федеральные пакеты акций"
tags: [data-source, federal, state_property]
last_updated: 2026-07-16
description: "Публичные точки поиска федеральных пакетов акций, выставленных или планируемых к продаже, и границы такого перечня."
slug: /data-sources/federal/federal-shareholdings
content_type: data_source
entity_type: data-source
source_url: "https://fiol.rosim.gov.ru/mk/"
data_source_kind: ui_only
jurisdiction: federal
access: open
formats: ["html"]
status: current
last_verified: 2026-07-16
jurisdiction_level: federal
data_completeness: partial
machine_readability: html-ui
legal_significance: official
update_lag: event-driven
archive_depth: unknown
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/rosim
  - type: available_in
    target: /information-systems/federal/federal-property-online
related_pages:
  - /data-sources/federal/federal-property-privatization
  - /data-sources/federal/state-owned-enterprises-disclosure
---

# Федеральные пакеты акций: публичный навигатор

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральные пакеты, показанные в публичном сервисе |
| Тип доступа | Фильтр категории «Акции» в Маркетплейсе |
| Основные форматы | HTML/JavaScript |
| Оператор | Росимущество |
| Режим доступа | Открытый просмотр |

Коротко: источник помогает найти пакеты акций, выставленные или планируемые к реализации. Он не является полным актуальным реестром всех обществ с государственным участием.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки | 2026-07-16 |
| Полнота | Частичная: периметр продажи, а не весь портфель |
| Машиночитаемость | UI без подтверждённой массовой выгрузки |
| Юридическая значимость | Официальная витрина |
| Задержка обновления | По событию |
| Глубина архива | Не подтверждена |
| Лицензия | Не указана явно |

## Описание

Фильтр акций раскрывает эмитента, местоположение, вид реализации, сроки, начальную цену и долю уставного капитала в объёме карточки. Для анализа контроля над группой дополнительно нужны структура владения и отчётность эмитента.

## Оператор

[Росимущество](/organizations/rosim); карточка системы — [ФГИАС ЕУСГИ](/information-systems/federal/federal-property-online).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Маркетплейс, категория «Акции» | https://fiol.rosim.gov.ru/mk/ | HTML/JavaScript |
| ГИС «Торги» | https://torgi.gov.ru/ | HTML, документы |

## Объекты данных и показатели

- эмитент и пакет акций;
- доля уставного капитала, начальная цена и статус процедуры;
- идентификатор торгов и итоговые документы при наличии.

## Периодичность обновления

По включению пакета в публичный контур и ходу процедуры.

## Ограничения и особенности

- отсутствие карточки не доказывает отсутствие государственного участия;
- пакет на продажу не равен уже проданному пакету;
- доля прямого владения не описывает периметр группы.

## Связанные страницы wiki

- [Навигатор приватизации](/data-sources/federal/federal-property-privatization) — контекст плана и процедуры.
- [Корпоративное раскрытие и госкомпании](/data-sources/federal/state-owned-enterprises-disclosure) — отчётность действующих компаний.
- [ГИС «Торги»](/data-sources/federal/torgi-gov-ru) — протоколы продажи.
