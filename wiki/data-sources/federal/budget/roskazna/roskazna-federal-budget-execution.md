---
title: >-
  Казначейство: отчётность и материалы по исполнению федерального бюджета
  (подраздел портала)
sidebar_label: 'Казначейство: исполнение ФБ'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-federal-budget-execution
source_url: 'https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet/'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - xls
  - xlsx
  - pdf
status: current
related_information_system: /information-systems/federal/roskazna-portal
description: >-
  канонический вход Казначейства к формам и файлам исполнения федерального
  бюджета (кассовый факт в регламентированной отчётности); для макро-сводов
  Минфина и машинных наборов ГИИС используйте связанные карточки ниже.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-reports
  - /data-sources/federal/otchety-ob-ispolnenii-byudzhetov
  - /data-sources/federal/minfin-fedbud-execute
  - /data-sources/federal/budget-gov-ru-datasets
  - /glossary/treasury-execution
jurisdiction_level: federal
data_completeness: unknown
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
--- (подраздел портала)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный бюджет**: регламентированные публикации об исполнении и сопутствующие файлы в подразделе портала Казначейства |
| Тип доступа | Веб-страница со списком отчётных материалов и **вложениями по ссылкам** |
| Основные форматы | HTML, XLS/XLSX, PDF (по конкретной форме и году) |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **канонический вход Казначейства** к **формам и файлам исполнения федерального бюджета** (кассовый факт в регламентированной отчётности); для **макро-сводов** Минфина и **машинных наборов ГИИС** используйте связанные карточки ниже.

## Описание

Карточка описывает **тематическую страницу** https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet/ внутри раздела **[«Исполнение бюджетов»](https://roskazna.gov.ru/ispolnenie-byudzhetov/)**: перечень отчётных форм и документов по **исполнению федерального бюджета** с типичными форматами **XLS/XLSX/PDF**. Состав форм (в т.ч. **0507011**, **0503117**, **0503317** и аналоги) и периодичность сверяйте с **актуальным оглавлением** страницы на дату выгрузки.

Сюда **не** входят: **консолидированный бюджет РФ** с **[ГВФ](/glossary/extrabudgetary-funds)** (отдельный **[подраздел](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)**), **бюджеты только ГВФ** (**[отдельная страница](/data-sources/federal/roskazna-extrabudgetary-funds-execution)**), внутренние реестры платежей.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — канонический URL: https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — публичная витрина оператора казначейского сопровождения.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Подраздел «Федеральный бюджет» | https://roskazna.gov.ru/ispolnenie-byudzhetov/federalnyj-byudzhet/ | HTML; вложения по ссылкам |
| Родительский раздел | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML |
| Каталог открытых данных Казначейства | https://roskazna.gov.ru/opendata/ | HTML; CSV/JSON и др. по наборам |

## Объекты данных и показатели

- **Строка сводной формы исполнения** — агрегаты по **[КБК](/glossary/kbk)** (и связанным разрезам по методике формы): доходы, расходы, источники финансирования дефицита — в зависимости от формы и периода.
- **Месячный / годовой срез** — в логике публикуемых на странице форм; заголовки файла — первичный источник семантики.
- **Ключи связки** — **КБК**, **финансовый год**, уровень «**федеральный бюджет**»; детализация до отдельного платёжного документа в открытых формах **не гарантирована**.

**Пробелы**: структура ссылок на сайте **меняется**; для автоматизации комбинируйте страницу с **[каталогом opendata](/data-sources/federal/roskazna-reports)** и **[datamarts](/data-sources/federal/roskazna-datamarts)**.

## Периодичность обновления

По смыслу подраздела — **ежемесячно** (оперативные формы) и **ежегодно** (годовая отчётность); точные сроки конкретной формы — в оглавлении страницы и методических материалах оператора. Общие ограничения витрины — в **[карточке портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Показатели **не подменяют** построчно **[наборы ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** без сверки **периода и методики**.
- Запросы без браузерного `User-Agent` иногда завершаются **403** — учитывайте при скриптах.

## Связанные страницы wiki

- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — обзор всего раздела «Исполнение бюджетов», opendata и типовые формы.
- **[Минфин: краткая информация об исполнении федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** — **макро-XLSX** Минфина для сопоставления с казначейскими формами.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — плановые и исполнительные срезы `budget.gov.ru` для согласования с казначейским фактом.
- **[Казначейство: консолидированный бюджет РФ и бюджеты ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** — смежный подраздел того же меню (другой охват, не путать с «только ФБ»).

## Не путать с

- **[Казначейство: консолидированный бюджет РФ и бюджеты ГВФ](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** — **консолидированный** контур РФ **и** **[ГВФ](/glossary/extrabudgetary-funds)**, а не изолированно федеральный бюджет.
