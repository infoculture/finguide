---
title: "Доходы от использования и реализации федерального имущества"
sidebar_label: "Доходы от имущества"
tags: [data-source, federal, revenue, state_property]
last_updated: 2026-07-16
description: "Навигатор сверки аренды, продажи, дивидендов и иных имущественных событий с доходами бюджетной отчётности."
slug: /data-sources/federal/federal-property-revenue
content_type: data_source
entity_type: data-source
source_url: "https://budget.gov.ru/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "json", "xlsx"]
status: current
last_verified: 2026-07-16
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: reporting-cycle
archive_depth: varies-by-publication
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/minfin
  - type: derived_from
    target: /data-sources/federal/federal-property-marketplace
related_pages:
  - /data-sources/federal/federal-property-marketplace
  - /data-sources/federal/roskazna-federal-budget-execution
---

# Доходы от использования и реализации федерального имущества

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный бюджет; имущественные неналоговые доходы |
| Тип доступа | Бюджетные наборы и отчётные таблицы плюс объектные витрины |
| Основные форматы | JSON, XLSX, HTML |
| Оператор | Минфин, Казначейство; первичные события — Росимущество |
| Режим доступа | Открытый |

Коротко: это маршрут, а не новый первичный реестр. Он показывает, как сверять аренду, продажу активов и дивиденды с фактически отражёнными доходами бюджета.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки | 2026-07-16 |
| Полнота | Частичная: детализация зависит от КБК и публикации |
| Машиночитаемость | Смешанная |
| Юридическая значимость | Официальная бюджетная отчётность |
| Задержка обновления | По циклу исполнения и отчётности |
| Глубина архива | Различается между наборами и отчётами |
| Лицензия | Не указана единым условием |

## Описание

Объектное событие связывают с доходами по виду операции и КБК: аренда, продажа имущества, реализация пакета акций и дивиденды не взаимозаменяемы. Итог по бюджету берётся из казначейской или утверждённой отчётности, а не из суммы начальных цен лотов.

## Оператор

Бюджетные публикации: [Минфин](/organizations/minfin) и [Федеральное казначейство](/organizations/federal-treasury); объектный слой: [Росимущество](/organizations/rosim).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Единый портал бюджетной системы | https://budget.gov.ru/ | HTML, JSON |
| Исполнение федерального бюджета | https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet/ | XLSX, PDF |

## Объекты данных и показатели

- доход бюджета по КБК и периоду;
- администратор доходов;
- тип имущественной операции и идентификатор лота, если доступен для ручной связки.

## Периодичность обновления

Оперативные и отчётные данные выходят по собственному календарю; годовой итог сверяют после закрытия периода.

## Ограничения и особенности

- начальная и итоговая цена торгов не равны кассовому поступлению в том же периоде;
- один КБК может требовать дополнительной ведомственной детализации;
- дивиденды анализируют по эмитенту и дате решения, а не как продажу имущества.

## Связанные страницы wiki

- [Маркетплейс имущества](/data-sources/federal/federal-property-marketplace) — первичный объектный контекст.
- [Федеральный бюджет: исполнение](/data-sources/federal/roskazna-federal-budget-execution) — официальный отчётный факт.
- [Наборы ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые бюджетные разрезы.
