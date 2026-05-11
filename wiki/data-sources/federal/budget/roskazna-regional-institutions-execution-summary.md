---
title: "Казначейство: сводная информация по бюджетным и автономным учреждениям субъектов РФ (местных бюджетов)"
sidebar_label: "Казначейство: свод по учр. субъектов"
tags: [data-source, federal, budget, reporting, regional]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-regional-institutions-execution-summary
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-byudzhetnym-i-avtonomnym-uchrezhdeniyam-subuektov-rf-mestnyh-byudzhetov/"
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: сводная информация по бюджетным и автономным учреждениям субъектов РФ (местных бюджетов)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Бюджетные и автономные учреждения** в разрезе **субъектов РФ** и **местных бюджетов** — сводные материалы на федеральном портале Казначейства |
| Тип доступа | Веб-страница с перечнем публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **федеральная витрина свода** по **региональным и местным** учреждениям; для **федеральных** учреждений — **[отдельный подраздел](/data-sources/federal/roskazna-federal-institutions-execution-summary)**; для **микроданных учреждений** — **[bus.gov.ru](/data-sources/federal/bus-opendata)**.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-byudzhetnym-i-avtonomnym-uchrezhdeniyam-subuektov-rf-mestnyh-byudzhetov/ (в URL на сайте оператора встречается написание **`subuektov`**). В заголовке страницы — **«…субъектов РФ (местных бюджетов)»**; состав файлов сверяйте с **актуальным оглавлением**.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — см. `source_url` в шапке карточки (канонический URL сегмента пути как на портале).

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Сводная информация по… субъектов РФ (местных бюджетов)» | https://roskazna.gov.ru/ispolnenie-byudzhetov/svodnaya-informaciya-po-byudzhetnym-i-avtonomnym-uchrezhdeniyam-subuektov-rf-mestnyh-byudzhetov/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Сводные показатели** по учреждениям **субъектов** и/или **местных** бюджетов — в публикуемых файлах; детализация задаётся **формой**.
- **Связка** с **[консолидированными бюджетами субъектов](/data-sources/federal/roskazna-consolidated-subjects-execution)** — разный уровень: **макро бюджета субъекта** vs **свод по учреждениям**.

**Пробелы**: не ожидайте полного покрытия всех ОМСУ; часть публикаций остаётся на **региональных** сайтах.

## Периодичность обновления

По мере размещения материалов на странице. Общие ограничения витрины — **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Путаница с **[федеральным сводом учреждений](/data-sources/federal/roskazna-federal-institutions-execution-summary)** — разные URL и заголовки меню.
- Скриптовый доступ — с браузероподобными заголовками (**иначе 403**).

## Связанные страницы wiki

- **[Казначейство: сводная информация по федеральным бюджетным и автономным учреждениям](/data-sources/federal/roskazna-federal-institutions-execution-summary)** — **параллельный** свод для **федеральных** учреждений.
- **[Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** — открытые данные и отчётность **по учреждениям** на портале ГМУ.
- **[Консолидированные бюджеты субъектов (региональная витрина)](/data-sources/regional/consolidated-budgets)** — навигация по **субъектным** первичным публикациям.

## Не путать с

- **[Казначейство: консолидированные бюджеты субъектов РФ…](/data-sources/federal/roskazna-consolidated-subjects-execution)** — **макро** консолидированного бюджета субъекта, а не обязательно тот же состав полей, что в **своде по учреждениям**.
