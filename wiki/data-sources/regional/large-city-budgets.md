---
title: Крупные города — бюджет и раскрытие (агрегированный обзор)
sidebar_label: Крупные города (обзор)
description: >-
  Единая сетка признаков раскрытия для городов-миллионников и крупных центров:
  ссылки на региональные методики, федеральные зеркала и задел под карточки
  источников по каждому городу.
tags:
  - regional
  - municipal
  - navigation
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
slug: /data-sources/regional/large-city-budgets
related_pages:
  - /data-sources/regional/municipal-budgets
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
  - /data-sources/federal/municipalnye-byudzhety
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/regional-portals
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/regional-disclosure-matrix
  - /reporting/municipal-budget-execution
  - /glossary/budget-levels
  - /glossary/oktmo
  - /data-sources/regional/novosibirsk-city-open-budget-mayor
  - /data-sources/regional/nizhny-novgorod-city-open-budget-budgetnn
---

# Крупные города — бюджет и раскрытие (агрегированный обзор)

Страница закрывает направление **large municipality coverage** из плана `regional-municipal-pilot`: **десять агрегированных записей** с **той же логикой колонок**, что и [матрица субъектов](./regional-disclosure-matrix.md), но на уровне **муниципального** бюджета. Это **не** карточки источников по каждому URL — их добавляют по мере стабильных витрин.

## Первичные входы в данных

- [Муниципальные бюджеты на едином портале `budget.gov.ru`](/data-sources/regional/municipal-budgets) — поиск по территории и каталог открытых наборов.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — `list.json`, паспорта наборов и ограничения по уровням бюджета.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — оператор портала и публичные разделы.
- [Муниципальные бюджеты (сайты муниципальных образований)](/data-sources/federal/municipalnye-byudzhety) — когда полнотекстовые решения и вложения остаются на сайтах МО.
- [Консолидированные бюджеты субъектов РФ](/data-sources/regional/consolidated-budgets) — контекст **субъекта** для городов-центров регионов.
- [Региональные порталы «Открытый бюджет»](/data-sources/regional/regional-portals) — региональные витрины, откуда часто ведут ссылки на МО.
- [Методика поиска региональных данных](./how-to-find-regional-data.md).

## Критерий «крупный»

Ориентир — города **от ~1 млн** жителей и **административные центры** федерального значения; точные границы для вашей задачи фиксируйте по ОКТМО и официальному делению Росстата.

## Таблица (агрегированные записи)

| Город (МО) | Субъект РФ | Открытый бюджет МО | Наборы/файлы | API | Закон о бюджете МО | Исполнение | Поиск | Примечание |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| Москва (столица) | Москва | частично | частично | нет | да | да | 3 | Город федерального значения: сверяйте контур с [уровнями бюджета](/glossary/budget-levels); свод по МО на портале — [муниципальные бюджеты](/data-sources/regional/municipal-budgets) |
| Санкт-Петербург | Санкт-Петербург | частично | частично | нет | да | да | 3 | Город федерального значения; бюджет МО на портале — [муниципальные бюджеты](/data-sources/regional/municipal-budgets) |
| Новосибирск | Новосибирская область | частично | частично | нет | да | частично | 2 | [Бюджет для граждан и opendata мэрии](/data-sources/regional/novosibirsk-city-open-budget-mayor); федеральный контур — [муниципальные бюджеты](/data-sources/regional/municipal-budgets); портал НСО — по [методике поиска](./how-to-find-regional-data.md) |
| Екатеринбург | Свердловская область | частично | частично | нет | да | частично | 2 | Бюджет МО — [муниципальные бюджеты](/data-sources/regional/municipal-budgets); смежный контур закупок субъекта — [Департамент госзаказа Свердловской области](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural) |
| Казань | Республика Татарстан | частично | частично | нет | да | частично | 2 | Бюджет МО — [муниципальные бюджеты](/data-sources/regional/municipal-budgets); закупки субъекта — [Госкомитет по закупкам РТ](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan) |
| Нижний Новгород | Нижегородская область | частично | частично | нет | да | частично | 2 | [Открытый бюджет города (budgetnn.ru)](/data-sources/regional/nizhny-novgorod-city-open-budget-budgetnn); федеральный контур — [муниципальные бюджеты](/data-sources/regional/municipal-budgets); не в пилоте субъектов — см. [методику поиска](./how-to-find-regional-data.md) |
| Челябинск | Челябинская область | частично | частично | нет | да | частично | 2 | [Муниципальные бюджеты](/data-sources/regional/municipal-budgets) + сайт МО |
| Омск | Омская область | частично | частично | нет | да | частично | 2 | [Муниципальные бюджеты](/data-sources/regional/municipal-budgets) + сайт МО |
| Самара | Самарская область | частично | частично | нет | да | частично | 2 | [Муниципальные бюджеты](/data-sources/regional/municipal-budgets) + сайт МО |
| Ростов-на-Дону | Ростовская область | частично | частично | нет | да | частично | 2 | [Муниципальные бюджеты](/data-sources/regional/municipal-budgets) + сайт МО |

Значения **«частично»** означают: витрина или набор есть, но покрытие **неполное** или без стабильного API; подтверждайте для конкретного года.

## Как пополнять корпус

1. Найдите официальный портал МО по [методике](./how-to-find-regional-data.md).
2. Создайте карточку в [`wiki/data-sources/regional/`](./) с полями по `AGENTS.md`.
3. Замените строку таблицы **ссылкой** на карточку и кратким пояснением.

## Связанные материалы

- [Муниципальные бюджеты](./municipal-budgets.md)
- [Новосибирск: бюджет для граждан и opendata мэрии](/data-sources/regional/novosibirsk-city-open-budget-mayor)
- [Нижний Новгород: открытый бюджет (budgetnn.ru)](/data-sources/regional/nizhny-novgorod-city-open-budget-budgetnn)
- [Отчётность об исполнении местных бюджетов](/reporting/municipal-budget-execution)
