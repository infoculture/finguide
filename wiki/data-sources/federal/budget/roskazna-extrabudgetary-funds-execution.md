---
title: "Казначейство: бюджеты государственных внебюджетных фондов (подраздел портала)"
sidebar_label: "Казначейство: бюджеты ГВФ"
tags: [data-source, federal, budget, reporting]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-extrabudgetary-funds-execution
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/byudzhety-gosudarstvennyh-vnebyudzhetnyh-fondov/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: бюджеты государственных внебюджетных фондов (подраздел портала)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **[Государственные внебюджетные фонды](/glossary/extrabudgetary-funds)** — отчётные материалы по **их бюджетам** на портале Казначейства |
| Тип доступа | Веб-страница с перечнем публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **отдельный подраздел** «Исполнение бюджетов» про **бюджеты ГВФ**; не смешивать с **[консолидированным бюджетом РФ и ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** и с **[макро-исполнением только ГВФ на сайте Минфина](/data-sources/federal/minfin-outbud-execute)** без сверки методики.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/byudzhety-gosudarstvennyh-vnebyudzhetnyh-fondov/ — публикации по **исполнению бюджетов государственных внебюджетных фондов** в ведении казначейского оператора. Состав форм и файлов — по **актуальному списку** на странице.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/ispolnenie-byudzhetov/byudzhety-gosudarstvennyh-vnebyudzhetnyh-fondov/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Бюджеты государственных внебюджетных фондов» | https://roskazna.gov.ru/ispolnenie-byudzhetov/byudzhety-gosudarstvennyh-vnebyudzhetnyh-fondov/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Сводные строки** исполнения бюджетов **[ГВФ](/glossary/extrabudgetary-funds)** в разрезе публикуемых форм; ключи — коды и показатели из **шапок файлов**.
- **Связка** с **[outbud/execute Минфина](/data-sources/federal/minfin-outbud-execute)** — на уровне **сопоставимых агрегатов** после чтения методики.

**Пробелы**: страница **не заменяет** **[консолидированный бюджет РФ + ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** и **не** описывает **[территориальные ГВФ](/data-sources/federal/roskazna-consolidated-subjects-execution)** в части субъектов — это соседние пункты меню.

## Периодичность обновления

В логике бюджетной отчётности — **ежемесячно** и **ежегодно**; детали по конкретным формам — на странице. См. **[ограничения портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Нестабильные URL вложений; фиксируйте дату файла.
- Для машинной обработки дополняйте **[opendata](/data-sources/federal/roskazna-reports)** и **[datamarts](/data-sources/federal/roskazna-datamarts)**.

## Связанные страницы wiki

- **[Минфин: краткая информация об исполнении бюджетов ГВФ](/data-sources/federal/minfin-outbud-execute)** — макро-**XLSX** Минфина по **только ГВФ**.
- **[Казначейство: консолидированный бюджет РФ и бюджеты ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** — **консолидированный** контур РФ **с** ГВФ, отличный по заголовку от страницы **только про бюджеты ГВФ**.
- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — обзор раздела «Исполнение бюджетов».

## Не путать с

- **[Казначейство: консолидированный бюджет РФ и бюджеты ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** — **сводный** контур РФ **и** ГВФ, а не «только бюджеты ГВФ».
