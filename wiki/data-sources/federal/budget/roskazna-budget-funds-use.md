---
title: "Казначейство: использование выделяемых бюджетных средств (подраздел портала)"
sidebar_label: "Казначейство: использование средств"
tags: [data-source, federal, budget, reporting]
last_updated: 2026-05-11
slug: /data-sources/federal/roskazna-budget-funds-use
source_url: "https://roskazna.gov.ru/ispolnenie-byudzhetov/ispolzovanie-vydelyaemyh-byudzhetnyh-sredstv/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["html", "xls", "xlsx", "pdf"]
status: current
related_information_system: "/information-systems/federal/roskazna-portal"
---

# Казначейство: использование выделяемых бюджетных средств (подраздел портала)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Материалы по **использованию выделяемых бюджетных средств** в редакции раздела «Исполнение бюджетов» портала Казначейства |
| Тип доступа | Веб-страница с перечнем публикаций и вложениями |
| Основные форматы | HTML, XLS/XLSX, PDF |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **отдельный смысловой блок** отчётности/материалов про **использование выделенных бюджетных средств**; сопоставляйте с **[формами исполнения федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution)** и **[ГИИС](/data-sources/federal/budget-gov-ru-datasets)** по **заголовкам форм**, а не по предположению.

## Описание

Карточка описывает страницу https://roskazna.gov.ru/ispolnenie-byudzhetov/ispolzovanie-vydelyaemyh-byudzhetnyh-sredstv/ — пункт меню раздела **[«Исполнение бюджетов»](https://roskazna.gov.ru/ispolnenie-byudzhetov/)** с публикациями по теме **использования выделяемых бюджетных средств**. Конкретный перечень форм и нормативная привязка — в **текстах и файлах** на странице.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/ispolnenie-byudzhetov/ispolzovanie-vydelyaemyh-byudzhetnyh-sredstv/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Использование выделяемых бюджетных средств» | https://roskazna.gov.ru/ispolnenie-byudzhetov/ispolzovanie-vydelyaemyh-byudzhetnyh-sredstv/ | HTML; вложения |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |

## Объекты данных и показатели

- **Отчётные таблицы / пояснения** по использованию средств в логике размещённых документов; семантика показателей — из **файлов**.
- **Связка** с **[казначейским исполнением](/glossary/treasury-execution)** и **[КБК](/glossary/kbk)** — при явном наличии таких ключей в формах.

**Пробелы**: страница **не** является универсальным каталогом всех **субсидий** и **[госзакупок](/data-sources/federal/procurement)**.

## Периодичность обновления

По мере обновления страницы оператором. См. **[ограничения портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Не подменяет **[контрактный реестр](/data-sources/federal/procurement)** и **[открытые данные по субсидиям](/data-sources/federal/minfin-opendata)** без отдельной методики.

## Связанные страницы wiki

- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — карта всего раздела «Исполнение бюджетов» и смежные источники.
- **[Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — основной контур **форм исполнения** федерального бюджета.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемые срезы для согласования показателей «использования» с планом и исполнением там, где это уместно.

## Не путать с

- **[Сведения о закупках и контрактах (ЕИС)](/data-sources/federal/procurement)** — **закупочный** контур; суммы контрактов **не тождественны** строкам отчётности об использовании бюджетных средств без сверки методики.
