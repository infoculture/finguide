---
title: "Казначейство: статистика государственных финансов РФ (подраздел портала)"
sidebar_label: "Казначейство: стат. госфинансов"
tags: [data-source, federal, budget, reporting, statistics]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-state-finances-statistics
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/statistika-gosudarstvennyh-finansov-rf/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: статистика государственных финансов РФ (подраздел портала)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Статистика государственных финансов РФ** — материалы Казначейства в подразделе «Исполнение бюджетов» (сводно-статистический контур на портале оператора) |
| Тип доступа | Веб-страница с перечнем публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **официальные материалы Казначейства** в блоке **«Статистика государственных финансов РФ»**; для **статистического наблюдения Росстата** и **макро-сводов Минфина** используйте **[ЕМИСС/Росстат](/data-sources/federal/rosstat-opendata)** и **[смежные витрины Минфина](/data-sources/federal/minfin-conbud-execute)** — это **другие операторы и методики**.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/statistika-gosudarstvennyh-finansov-rf/ — пункт меню раздела **[«Исполнение бюджетов»](https://roskazna.gov.ru/ispolnenie-byudzhetov/)** со **статистическими** публикациями по **государственным финансам** в редакции сайта Казначейства. Состав таблиц и периодичность — по **фактическому списку** на странице.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/ispolnenie-byudzhetov/statistika-gosudarstvennyh-finansov-rf/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Статистика государственных финансов РФ» | https://roskazna.gov.ru/ispolnenie-byudzhetov/statistika-gosudarstvennyh-finansov-rf/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Сводные ряды** по показателям, которые оператор группирует под ярлыком **государственных финансов**; точное определение — в **файлах и пояснениях** на странице.
- **Связка** с **[формами исполнения федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution)** — только после явной сверки **названия показателя и базы**.

**Пробелы**: это **не** гарантированный дубль **[Росстата](/data-sources/federal/rosstat-opendata)** по классификации статистического наблюдения.

## Периодичность обновления

Определяется **публикациями на странице**; при автоматизации ориентируйтесь на даты файлов. Общие ограничения сайта — **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Не смешивайте с **[официальной статистикой Росстата](/data-sources/federal/rosstat-opendata)** без методического моста.
- Возможны **403** у скриптов без браузерного `User-Agent`.

## Связанные страницы wiki

- **[Официальная статистика Росстата (ЕМИСС, открытые данные)](/data-sources/federal/rosstat-opendata)** — **иной оператор** и иная рамка **статистического наблюдения** по госфинансам.
- **[Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — смежные **формы исполнения** федерального бюджета в том же разделе сайта.
- **[Витрины данных Казначейства (datamarts)](/data-sources/federal/roskazna-datamarts)** — агрегированные исторические витрины оператора для сверки с таблицами статистического блока.

## Не путать с

- **[Официальная статистика Росстата (ЕМИСС, открытые данные)](/data-sources/federal/rosstat-opendata)** — федеральный орган **статистики**, а не казначейская отчётность на `roskazna.gov.ru`.
