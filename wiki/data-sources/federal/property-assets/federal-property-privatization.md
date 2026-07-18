---
title: "Навигатор по приватизации федерального имущества"
sidebar_label: "Приватизация имущества"
tags: [data-source, federal, state_property]
last_updated: 2026-07-16
description: "Маршрут по планам приватизации, карточкам объектов и официальным извещениям о продаже федерального имущества."
slug: /data-sources/federal/federal-property-privatization
content_type: data_source
entity_type: data-source
source_url: "https://fiol.rosim.gov.ru/mk/laws"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "pdf"]
status: current
last_verified: 2026-07-16
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
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
  - /data-sources/federal/federal-property-marketplace
  - /data-sources/federal/torgi-gov-ru
---

# Навигатор по приватизации федерального имущества

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный прогнозный план и конкретные процедуры |
| Тип доступа | Веб-страницы, документы и карточки торгов |
| Основные форматы | HTML, PDF |
| Оператор | Росимущество; процедуры публикуются в ГИС «Торги» |
| Режим доступа | Открытый |

Коротко: навигатор связывает три разных объекта — включение в план приватизации, карточку имущества и фактическую процедуру продажи. Наличие объекта в одном слое не означает завершённую сделку.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки | 2026-07-16 |
| Полнота | Частичная: документы распределены между порталами |
| Машиночитаемость | Смешанная; основной маршрут через HTML/PDF |
| Юридическая значимость | Официальные источники |
| Задержка обновления | По событию и циклу планирования |
| Глубина архива | Зависит от раздела и процедуры |
| Лицензия | Не указана единым условием |

## Описание

Порядок сервиса прямо указывает, что перечни утверждаются актами Правительства или Минфина в предусмотренных случаях, а сведения о торгах размещаются на Маркетплейсе и в ГИС «Торги». Для исследования сохраняйте реквизиты акта, идентификатор объекта и номер процедуры.

## Оператор

[Росимущество](/organizations/rosim); публичный объектный слой — [«Федеральное имущество онлайн»](/information-systems/federal/federal-property-online).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Порядок приватизации | https://fiol.rosim.gov.ru/mk/laws | HTML |
| Поиск имущества | https://fiol.rosim.gov.ru/mk/ | HTML |
| Официальные торги | https://torgi.gov.ru/ | HTML, документы |

## Объекты данных и показатели

- акт и позиция прогнозного плана приватизации;
- объект имущества или пакет акций;
- извещение, начальная и итоговая цена, сроки, протоколы.

## Периодичность обновления

План меняется актами, карточки и торги — по событиям процедуры.

## Ограничения и особенности

- один объект может иметь несколько процедур;
- отменённые и несостоявшиеся торги нельзя считать продажей;
- плановая стоимость не равна доходу бюджета.

## Связанные страницы wiki

- [Маркетплейс имущества](/data-sources/federal/federal-property-marketplace) — объектный поиск.
- [ГИС «Торги»](/data-sources/federal/torgi-gov-ru) — документы процедуры.
- [Доходы от имущества](/data-sources/federal/federal-property-revenue) — бюджетная сверка результата.
