---
title: "Казначейство: сводная информация по федеральным бюджетным и автономным учреждениям"
sidebar_label: "Казначейство: свод по ФБУ/ФГУ"
tags: [data-source, federal, budget, reporting]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-federal-institutions-execution-summary
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-federalnym-byudzhetnym-i-avtonomnym-uchrezhdeniyam/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: сводная информация по федеральным бюджетным и автономным учреждениям

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральные бюджетные и автономные учреждения** — сводные материалы исполнения/отчётности в подразделе «Исполнение бюджетов» |
| Тип доступа | Веб-страница с перечнем публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **свод по учреждениям федерального уровня** на портале Казначейства; для **микро-открытых данных учреждений** (ФХД, планы закупок и т.д.) используйте **[bus.gov.ru](/data-sources/federal/bus-opendata)** — иной контур и гранулярность.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-federalnym-byudzhetnym-i-avtonomnym-uchrezhdeniyam/ — **сводная информация** по **федеральным бюджетным и автономным учреждениям** в разделе **[«Исполнение бюджетов»](https://roskazna.gov.ru/ispolnenie-byudzhetov/)**. Это **макро-свод оператора** казначейского учёта, а не полная замена **[портала ГМУ](/information-systems/federal/bus-gov)**.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-federalnym-byudzhetnym-i-avtonomnym-uchrezhdeniyam/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Сводная информация по федеральным… учреждениям» | https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-federalnym-byudzhetnym-i-avtonomnym-uchrezhdeniyam/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Сводные таблицы** по учреждениям **федерального** уровня в логике публикуемых форм; детализация — по **заголовкам файлов**.
- **Ключи связки** — коды учреждений и показатели, если они явно присутствуют в файлах; иначе агрегаты **без** построчной идентификации.

**Пробелы**: не ожидайте полного дублирования **[открытых наборов bus.gov.ru](/data-sources/federal/bus-opendata)**.

## Периодичность обновления

По мере размещения файлов на странице; типично **регулярные** обновления внутри бюджетного цикла. См. **[ограничения портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Свод **не заменяет** учётно-отчётные регистры **[bus.gov.ru](/data-sources/federal/bus-opendata)** по каждому учреждению.
- Автозагрузка — с учётом **403** для «голого» curl.

## Связанные страницы wiki

- **[Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** — **учрежденческие** открытые данные и отчётность на портале ГМУ.
- **[Казначейство: сводная информация по бюджетным и автономным учреждениям субъектов РФ (местных бюджетов)](/data-sources/federal/roskazna-regional-institutions-execution-summary)** — **аналогичный** свод для **субъектов и местных бюджетов** в соседнем пункте меню.
- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — обзор раздела «Исполнение бюджетов».

## Не путать с

- **[Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** — **по-учрежденческий** контур открытых данных, а не только казначейский свод на `roskazna.gov.ru`.
