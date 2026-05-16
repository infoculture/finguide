---
title: "Публичное акционерное общество \"Аэрофлот\": отчётность и раскрытие"
sidebar_label: "Аэрофлот: раскрытие"
tags:
  - data-source
  - federal
  - programs
last_updated: 2026-05-16
slug: /data-sources/federal/aeroflot-disclosure
source_url: "https://www.aeroflot.ru/"
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-16
inn: "7712040126"
description: "ПАО «Аэрофлот»: корпоративное раскрытие флагманского авиаперевозчика с госучастием — IR-портал, отчётность МСФО/РСБУ, закупки и ESG; навигатор по официальным витринам для аналитики сектора госучастия."
content_type: data_source
entity_type: data-source
related_pages:
  - /reporting/state-sector-overview
  - /data-sources/federal/state-owned-enterprises-disclosure
  - /data-sources/federal/e-disclosure-ru
  - /organizations/aeroflot
  - /legal/223-fz
  - /data-sources/federal/procurement
---

# Публичное акционерное общество "Аэрофлот": отчётность и раскрытие

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральное **ПАО**; флагманский авиаперевозчик с **контролем государства**; листинг на **[MOEX](https://www.moex.com/)** |
| Тип доступа | Веб-витрины отчётности и раскрытия; файлы PDF/XLSX по ссылкам |
| Основные форматы | HTML, PDF, XLSX |
| Оператор | Публичное акционерное общество "Аэрофлот" |
| Режим доступа | Как правило открытое чтение публичных материалов |
| Правовой тип (таблица) | крупнейшая госкомпания / публичное АО |

Коротко: **навигатор по публичным витринам** Аэрофлот для годовой и промежуточной отчётности, закупок и раскрытий; сопоставляйте с **[ЕИС](/data-sources/federal/procurement)** и **[e-disclosure](/data-sources/federal/e-disclosure-ru)**, не смешивая с **[казначейским](/information-systems/federal/giis-eb)** и **[бюджетными формами](/reporting/state-sector-overview)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (импорт из `_dev/federal_gov_orgs_links_table.xlsx`) |
| Полнота (`data_completeness`) | частичная — перечень URL из исследования; точечная вычитка ссылок — позже |
| Машиночитаемость (`machine_readability`) | смешанная (HTML/PDF; единого API нет) |
| Юридическая значимость (`legal_significance`) | первично материалы оператора и правила раскрытия эмитента |
| Задержка обновления (`update_lag`) | зависит от оператора витрины |
| Глубина архива (`archive_depth`) | зависит от эмитента и e-disclosure |
| Уверенность сбора (таблица) | 0.95 |
| Проверка URL (таблица) | 22/29 |

## Описание

Карточка — **навигатор по публичным витринам** ПАО «Аэрофлот» для задач аналитики **сектора госучастия**: где искать **годовую и промежуточную отчётность**, операционные показатели (трафик, загрузка), материалы для **акционеров и облигаций**, **закупки** и **ESG**. Первичный контур — **ir.aeroflot.ru** и **[e-disclosure.ru](/data-sources/federal/e-disclosure-ru)**; строки **федерального бюджета** и **ПФХД** учреждений сюда **не** относятся.

Ссылки с пометкой **вторичный** (Rusprofile, Wikipedia и т.п.) — вспомогательные; для воспроизводимого анализа используйте **официальные** разделы ниже.

Правовой статус и роль в данных: [Аэрофлот](/organizations/aeroflot).

## Об организации

| Признак | Значение |
| :--- | :--- |
| Полное наименование | Публичное акционерное общество «Аэрофлот» |
| Правовая форма | **ПАО**; эмитент ценных бумаг |
| Отрасль | Гражданская авиация: регулярные и чартерные **пассажирские** и **грузовые** перевозки, наземное обслуживание, **аэрофлотский ритейл** |
| Госучастие | **Контроль государства** в уставном капитале (пакет акций в собственности РФ / уполномоченных органов; точная доля — в годовом отчёте и раскрытиях на **ir.aeroflot.ru**) |
| Группа | Холдинг **«Аэрофлот»**: материнская компания и **дочерние авиакомпании** (в т.ч. региональные перевозчики группы); консолидированная отчётность отражает **группу**, а не один аэропорт |
| Биржевые инструменты | Акции и облигации на **MOEX**; раскрытия по правилам эмитента и ЦБ |
| ИНН (материнское ПАО) | 7712040126 — для связки с **[ЕГРЮЛ](/information-systems/federal/egrul)** и **[ЕИС](/data-sources/federal/procurement)** |
| Регуляторы (контекст данных) | **[ЦБ РФ](/organizations/cbr)** (рынок ценных бумаг), **[Росавиация](https://favt.gov.ru/)** (отраслевое регулирование), **[ФАС](/organizations/fas)** (тарифы и конкуренция на смежных рынках) |

**Аэрофлот** — крупнейший по пассажиропотоку авиаперевозчик России; хабовая модель (база — **Шереметьево**). Для открытой финансовой аналитики компания важна как **корпоративный** эмитент с **дивидендной** и **закупочной** нагрузкой на бюджет: связь с государством — через **участие в капитале**, **субсидии/госпрограммы** (сверка с **[субсидиями](/data-sources/federal/subsidy)**), **налоги** и **контракты** по **[223-ФЗ](/legal/223-fz)** в **[ЕИС](/data-sources/federal/procurement)**. Операционные ряды (рейсы, пассажиро-километры, загрузка) публикуются на **IR-портале**, а не в бюджетных витринах.

## Оператор

**Публичное акционерное общество "Аэрофлот"** — канонический вход: https://www.aeroflot.ru/

## URL и точки доступа

| Тип | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://www.aeroflot.ru/ | HTML |

### Отчётность и раскрытие информации

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/reporting/financial-results/ | официальный |
| https://ir.aeroflot.ru/ru/disclosure-of-information/ad-hoc-releases/ | официальный |
| https://ir.aeroflot.ru/ru/disclosure-of-information/quarterly-reports/ | официальный |

### Основные показатели деятельности

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/company-overview/traffic-and-financial-highlights/ | официальный |
| https://ir.aeroflot.ru/ru/novosti/article/58458/ | официальный |
| https://ir.aeroflot.ru/ru/novosti/article/58450/ | официальный |

### Финансы и хозяйственная деятельность

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/reporting/financial-results/ | официальный |
| https://ir.aeroflot.ru/ru/reporting/financial-results/ifrs/ | официальный |
| https://ir.aeroflot.ru/ru/reporting/financial-results/ras/ | официальный |

### Инвесторам / акционерам / долговые инструменты

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/shareholders-and-investors/ | официальный |
| https://ir.aeroflot.ru/ru/news-and-events/investor-news/ | официальный |
| https://ir.aeroflot.ru/ru/securities/shares/ | официальный |

### Закупки

| URL | Тип |
| --- | --- |
| https://www.aeroflot.ru/ru-ru/about/retail_center | официальный |
| https://www.aeroflot.ru/ru-ru/about/retail_center/retail_info/notifications | официальный |
| https://www.aeroflot.ru/ru-ru/about/retail_center/documentation | официальный |

### Корпоративное управление / органы управления

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/corporate-governance/ | официальный |
| https://ir.aeroflot.ru/ru/corporate-governance/company-documents/ | официальный |
| https://ir.aeroflot.ru/fileadmin/user_upload/files/rus/common_info/vnutr_dokumenty/kodeks_korporativnogo_upravleniia.pdf | официальный |

### Устойчивое развитие / ESG / нефинансовая отчётность

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/%D1%83%D1%81%D1%82%D0%BE%D0%B9%D1%87%D0%B8%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8e/ | официальный |
| https://ir.aeroflot.ru/ru/%D1%83%D1%81%D1%82%D0%BE%D0%B9%D1%87%D0%B8%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8e/%D0%BE%D1%82%D1%87%D0%B5%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C/ | официальный |
| https://ir.aeroflot.ru/fileadmin/user_upload/files/rus/reports/socreport/AEROFLOT_CSR_22_RUS.pdf | официальный |

### Госреестры и открытые данные

| URL | Тип |
| --- | --- |
| https://www.rusprofile.ru/id/196783 | официальный |
| https://ir.aeroflot.ru/ru/retail-investors/registrar/ | официальный |

### Профильные регуляторы и госорганы

| URL | Тип |
| --- | --- |
| https://www.rusprofile.ru/id/196783 | официальный |
| https://ru.wikipedia.org/wiki/%D0%90%D1%8D%D1%80%D0%BE%D1%84%D0%BB%D0%BE%D1%82_(%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B0%D0%B2%D0%B8%D0%B0%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F) | официальный |

### Нормативная база / правовой статус

| URL | Тип |
| --- | --- |
| https://ir.aeroflot.ru/ru/corporate-governance/company-documents/ | официальный |
| https://ir.aeroflot.ru/fileadmin/user_upload/files/rus/common_info/vnutr_dokumenty/ustav_pao_aeroflot_2017.pdf | официальный |
| https://www.consultant.ru/document/cons_doc_LAW_5142/b23786a5f489c53fbbf3cbe5586f973a7ab876c0/ | официальный / агрегатор |

## Объекты данных и показатели

- **Консолидированная отчётность (МСФО / РСБУ)** — выручка, EBITDA, долг, сегменты группы; файлы в разделах *Financial results* / *IFRS* / *RAS* на **ir.aeroflot.ru**.
- **Операционные KPI** — пассажиропоток, загрузка кресел (ASK/RPK), грузопоток; раздел *Traffic and financial highlights*.
- **Раскрытия эмитента** — существенные факты, квартальные отчёты, insider-материалы — дубли на **[e-disclosure](/data-sources/federal/e-disclosure-ru)**.
- **Закупки** — извещения и документация **ритейл-центра** и дочерних заказчиков; полный след — по **ИНН** в **[ЕИС](/data-sources/federal/procurement)**.
- **ESG / устойчивое развитие** — отдельный подраздел IR и PDF-отчёты (не путать с **[госзаданием](/data-sources/federal/govtasks)** учреждений).

## Периодичность обновления

**Событийная** и **календарная** (годовая отчётность, раскрытия, закупки); точные сроки — в разделах отчётности на сайте оператора и на [e-disclosure.ru](/data-sources/federal/e-disclosure-ru).

## Ограничения и особенности

- Все ссылки найдены на официальном сайте ПАО "Аэрофлот" или в авторитетных источниках. Некоторые категории содержат несколько ссылок для полноты информации. Раздел инвесторам/акционерам присутствует.
- Строки бюджетной отчётности и **ПФХД** учреждений **не** продолжают корпоративный баланс этой организации.
- Часть URL в исходной таблице могла быть недоступна при автоматической проверке (22/29).

## Связанные страницы wiki

- [Аэрофлот](/organizations/aeroflot) — роль организации в контуре госучастия.
- [Отчётность сектора госучастия](/reporting/state-sector-overview) — граница корпоративного и бюджетного учёта.
- [Корпоративное раскрытие — навигатор](/data-sources/federal/state-owned-enterprises-disclosure).
- [e-disclosure.ru](/data-sources/federal/e-disclosure-ru) — агрегатор раскрытий эмитентов.
- [Сведения о закупках (ЕИС)](/data-sources/federal/procurement) — закупочный след.
- [223-ФЗ](/legal/223-fz) — закупки отдельных субъектов с госучастием.

## Не путать с

- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[формы Казначейства](/reporting/treasury-reports)** — **бюджетный** контур, другой периметр и методика.
