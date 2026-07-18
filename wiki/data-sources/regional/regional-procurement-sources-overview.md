---
title: Региональные и муниципальные закупки — навигатор по источникам
sidebar_label: Региональные закупки (навигатор)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-07-16
slug: /data-sources/regional/regional-procurement-sources-overview
source_url: 'https://zakupki.gov.ru/epz/main/public/home.html'
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - html
  - xml
  - csv
status: current
last_verified: 2026-07-16
description: >-
  Как сочетать федеральный ЕИС с региональными и муниципальными порталами
  закупок, дублирование контрактов и типовые ошибки трассировки расходов до КБК.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /glossary/kbk
---

# Региональные и муниципальные закупки — навигатор по источникам

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Регионы** и **муниципалитеты**: где искать контракты и планы **ниже** или **рядом** с федеральным **[ЕИС](/information-systems/federal/zakupki)** |
| Тип доступа | **Федеральная** витрина закупок + **региональные** порталы заказчика, муниципальные сайты, иногда отдельные ЭТП |
| Основные форматы | **XML/HTML** (ЕИС), **CSV** на открытых данных регионов, **PDF** на сайтах заказчиков |
| Оператор | **ФАС/оператор ЕИС** (федеральный контур); региональные и муниципальные операторы — по субъекту |
| Режим доступа | Как правило открытое чтение; массовые выгрузки — по правилам ЕИС и региональных порталов |

Коротко: страница **не** дублирует **[инструкцию по ЕИС](/information-systems/federal/zakupki)**. Это **маршрут**: когда достаточно **одного** ЕИС, а когда нужен **сайт субъекта/МО** или **городской** портал закупок.

## Описание

### Федеральный якорь

- **[Единая информационная система в сфере закупок](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** — контракты и извещения по **44-ФЗ** и **223-ФЗ** в общероссийском контуре.
- **[Отчётность по закупкам и контрактам](/reporting/procurement-contract-reporting)** — как формы отчётности стыкуются с данными контрактов.

### Региональный и муниципальный слой

- Часть заказчиков публикует **дополнительные** материалы (отчёты, реестры муниципальных контрактов) на **сайте субъекта** или **МО** — их нужно искать по **[методике регионального поиска](./how-to-find-regional-data.md)**.
- **Крупные города** и **субъекты РФ** иногда имеют **отдельный** портал органа по закупкам (примеры в wiki: **[Департамент по конкурентной политике Москвы](/data-sources/regional/moscow-procurement-tender-mos)**, **[Комитет по госзаказу СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb)**, **[Госкомитет по закупкам Татарстана](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan)**, **[Департамент по регулированию контрактной системы Краснодарского края](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar)**, **[Департамент госзаказа Свердловской области](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural)**, **[РС(Я): zakupki.sakha.gov.ru](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov)**, **[Комитет по государственным закупкам РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag)**, **[Департамент контрактной системы Кузбасса (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko)**, **[Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao)**, **[Региональная ИС Калининградской области (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39)**).

### Типовые ошибки

- **Двойной учёт**: один контракт может фигурировать в **ЕИС** и в **локальной** выгрузке; сверяйте **идентификатор контракта** и дату.
- **Смешение уровней**: заказчик с **подведомственными** учреждениями может публиковаться **разными** ИНН в одной политике закупок.

## URL и точки доступа

| Тип | Страница wiki / URL | Зачем |
| --- | --- | --- |
| Федеральный контрактный реестр | [ЕИС](/information-systems/federal/zakupki), https://zakupki.gov.ru/epz/main/public/home.html | Общероссийский поиск и выгрузки |
| Нормативка | [44-ФЗ](/legal/44fz), [223-ФЗ](/legal/223-fz) | Рамки процедур |
| Пример городского портала (Москва) | [Закупки Москвы (tender.mos.ru)](/data-sources/regional/moscow-procurement-tender-mos) | Региональный вход для столицы |
| Пример городского портала (Санкт-Петербург) | [Комитет по госзаказу СПб (gz-spb.ru)](/data-sources/regional/saint-petersburg-procurement-gz-spb) | Региональный вход для СПб |
| Пример регионального портала (Татарстан) | [Госкомитет по закупкам РТ (goszakupki.tatarstan.ru)](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan) | Региональный вход для Республики Татарстан |
| Пример регионального портала (Краснодарский край) | [Департамент по регулированию контрактной системы (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar) | Краевой орган регулирования закупок |
| Пример регионального портала (Свердловская область) | [Департамент госзаказа (goszakaz.midural.ru)](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural) | Областной департамент и витрина torgi.egov66.ru |
| Пример региональной витрины (Республика Саха (Якутия)) | [ГКУ «Центр закупок» (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov) | Республиканский центр закупок на домене Правительства |
| Пример регионального контура (Республика Дагестан) | [Комитет по государственным закупкам (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag) | Комитет и ИС goszakaz.e-dag.ru |
| Пример регионального контура (Кемеровская область — Кузбасс) | [Департамент контрактной системы (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko) | Областной департамент контрактной системы |
| Пример регионального контура (ХМАО — Югра) | [Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao) | Региональная ИС на домене Правительства округа |
| Пример регионального контура (Калининградская область) | [Региональная ИС (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) | Централизованные закупки и интеграция с федеральным контуром |

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная** — перечень региональных URL в wiki намеренно короткий |
| Машиночитаемость | **Высокая** у массовых выгрузок ЕИС; **разная** у региональных порталов |
| Юридическая значимость | **Первично** ЕИС для контрактов по 44/223; региональные сайты — для **дополнений** и **местных** режимов |

## Периодичность обновления

ЕИС обновляется **по событиям** закупок; региональные порталы — по правилам оператора. Сверяйте **дату выгрузки** при панельных рядах.

## Примеры доступа

Проверка доступности корня ЕИС (ожидаемый код **200**):

```bash
curl -fsSL -A "finguide-zakupki-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zakupki.gov.ru/epz/main/public/home.html"
```

## Связанные страницы wiki

- [КБК](/glossary/kbk) — связка контракта с бюджетной классификацией при наличии полей в выгрузке.
- [Анализ закупок](/howto/analysis/procurement-analysis) — практический how-to.

## Частые вопросы

**В:** Достаточно ли только API ЕИС для «всех закупок региона»?

**О:** Часто **нет** для **полноты картины**: муниципальные и ведомственные порталы могут содержать **смежные** сведения (планы, отчёты), которых **нет** в выбранной вами выгрузке ЕИС.
