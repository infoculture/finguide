---
title: "Казначейство: исполнение консолидированного бюджета РФ и бюджетов государственных внебюджетных фондов"
sidebar_label: "Казначейство: конс. РФ и ГВФ"
tags: [data-source, federal, budget, reporting]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-consolidated-rf-and-ebf-execution
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/konsolidirovannyj-byudzhet-rf-i-byudzhetov-gosudarstvennyh-vnebyudzhetnyh-fondov/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: исполнение консолидированного бюджета РФ и бюджетов государственных внебюджетных фондов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Консолидированный бюджет Российской Федерации** вместе с **[бюджетами ГВФ](/glossary/extrabudgetary-funds)** — отчётные материалы в подразделе «Исполнение бюджетов» |
| Тип доступа | Веб-страница со списком публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **официальные материалы Казначейства** по исполнению **сводного федерального контура** «РФ + **[ГВФ](/glossary/extrabudgetary-funds)**»; для сравнения с **макро-таблицами Минфина** см. **[conbud/execute](/data-sources/federal/minfin-conbud-execute)**, для **только федерального бюджета** — **[федеральный подраздел](/data-sources/federal/roskazna-federal-budget-execution)**.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/konsolidirovannyj-byudzhet-rf-i-byudzhetov-gosudarstvennyh-vnebyudzhetnyh-fondov/: перечень форм и файлов по **консолидированному бюджету РФ** с учётом **[государственных внебюджетных фондов](/glossary/extrabudgetary-funds)**. Граница охвата принципиально **шире**, чем у **[исполнения только федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution)**, и **отличается** от страницы **[только бюджетов ГВФ](/data-sources/federal/roskazna-extrabudgetary-funds-execution)**.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/ispolnenie-byudzhetov/konsolidirovannyj-byudzhet-rf-i-byudzhetov-gosudarstvennyh-vnebyudzhetnyh-fondov/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Консолидированный бюджет РФ и бюджеты ГВФ» | https://roskazna.gov.ru/ispolnenie-byudzhetov/konsolidirovannyj-byudzhet-rf-i-byudzhetov-gosudarstvennyh-vnebyudzhetnyh-fondov/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Сводные показатели** консолидированного исполнения в разрезе публикуемых форм; семантика — по **шапкам файлов** и методическим пояснениям на странице.
- **Связка** с макро-таблицами **[Минфина (conbud/execute)](/data-sources/federal/minfin-conbud-execute)** — только после проверки **одинакового определения консолидации и года**.

**Пробелы**: не смешивайте автоматически с **[федеральным бюджетом](/data-sources/federal/roskazna-federal-budget-execution)** и с **[региональными консолидированными бюджетами субъектов](/data-sources/federal/roskazna-consolidated-subjects-execution)**.

## Периодичность обновления

**Ежемесячно** и **ежегодно** в логике отчётности раздела; детали — в актуальном списке на странице. См. также **«Ограничения и актуальность»** в **[карточке портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- URL вложений **нестабильны**; фиксируйте дату публикации и имя файла.
- Сверка с **[ГИИС](/data-sources/federal/budget-gov-ru-datasets)** — по **согласованным показателям**, не «по умолчанию» построчно.

## Связанные страницы wiki

- **[Минфин: краткая информация об исполнении консолидированного бюджета РФ и ГВФ](/data-sources/federal/minfin-conbud-execute)** — макро-**XLSX** того же смыслового охвата на сайте Минфина.
- **[Казначейство: бюджеты государственных внебюджетных фондов](/data-sources/federal/roskazna-extrabudgetary-funds-execution)** — **узкий** подраздел про **ГВФ** без акцента на полном консолидированном контуре РФ.
- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — общий контекст раздела «Исполнение бюджетов» и opendata.

## Не путать с

- **[Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — **федеральный бюджет** без консолидации с **ГВФ** в заголовке этого подраздела.
