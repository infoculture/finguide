---
title: 'Калининградская область: региональная ИС госзаказа (zakupki.gov39.ru)'
sidebar_label: Закупки Калининградской области (gov39.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
source_url: 'https://www.zakupki.gov39.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Официальная региональная информационная система закупок Калининградской
  области на домене gov39.ru (интеграция с федеральным контуром закупок);
  дополняет ЕИС, но не заменяет контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/kaliningrad-oblast-minfin
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /howto/analysis/procurement-analysis
---

# Калининградская область: региональная ИС госзаказа (zakupki.gov39.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Калининградская область** — **региональная** информационная система закупок на домене **gov39.ru**, ориентированная на **государственных и муниципальных** заказчиков субъекта |
| Тип доступа | **Публичный портал** региональной ИС (вход для заказчиков и поставщиков по описанию региона) |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**) |
| Оператор | **Конкурсное агентство Калининградской области** и смежные органы исполнительной власти субъекта (централизованная модель размещения закупок в регионе) |
| Режим доступа | Открытое чтение публичных разделов при доступности сети |

Коротко: **официальный региональный вход** к ИС закупок **39 региона**; для **массовых** извещений и контрактов в общероссийском реестре по **44-ФЗ** и **223-ФЗ** используйте **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам области.

## Описание

Домен **zakupki.gov39.ru** (канонический вход — **https://www.zakupki.gov39.ru/**) используется как **региональная** витрина и рабочая среда закупок Калининградской области; в нормативных и справочных материалах субъекта неоднократно указывается **интеграция** с **Общероссийским** официальным сайтом **zakupki.gov.ru**. **Юридически значимый** массив публикаций по контрактам сверяйте с **ЕИС** по **реестровым номерам**, **ИНН заказчика** и дате.

## Оператор

**Конкурсное агентство Калининградской области** (уполномоченный орган по **централизованной** модели закупок в регионе) — https://www.zakupki.gov39.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень региональной ИС (вариант с `www`) | https://www.zakupki.gov39.ru/ |
| Корень без `www` (может перенаправлять) | https://zakupki.gov39.ru/ |

Точная структура меню **зависит** от версии портала; закладывайте **корень** домена как устойчивую закладку.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — региональный контур и **централизованные** процедуры; федеральный реестр остаётся якорём для полноты |
| Машиночитаемость | **Преимущественно HTML**; **массовые** XML/выгрузки федерального уровня — через **ЕИС** |
| Юридическая значимость | **Официальный** домен **gov39.ru** как часть идентификации государственных ресурсов субъекта |

## Объекты данных и показатели

- **Региональные** извещения и сопутствующие материалы в рамках модели субъекта.
- **Связка с федеральным контуром** — через **[ЕИС](/information-systems/federal/zakupki)** по идентификаторам закупки и заказчика.
- **Справочная** информация о порядке работы заказчиков и поставщиков в региональной ИС (по разделам сайта).

## Периодичность обновления

По мере размещения процедур и обновлений региональной ИС; для записей в федеральном реестре — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры материалами портала без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **Сетевая доступность** домена **gov39.ru** из отдельных внешних сетей при проверке может давать **таймаут**; используйте браузер из доверенной среды или повторите запрос позже.
- **Муниципальные** заказчики могут публиковать **дополнительные** материалы на сайтах МО; эта карточка — **областной** ИС-контур.

## Примеры доступа

Проверка доступности корня (при таймауте — см. ограничения выше):

```bash
curl -fsSL --connect-timeout 20 -A "finguide-gov39-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.zakupki.gov39.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы](/data-sources/regional/moscow-procurement-tender-mos), [СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [Свердловская область](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [РС(Я)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [РД](/data-sources/regional/dagestan-procurement-komzak-e-dag), [Кузбасс](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [ХМАО — Югра](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; региональная ИС **не** заменяет его для полноты юридически значимых публикаций по 44/223.

## Частые вопросы

**В:** Почему `curl` из внешней сети не отвечает, хотя сайт «официальный»?

**О:** У **региональных** ИС иногда действуют **сетевые** или **инфраструктурные** ограничения; для **содержательной** работы используйте браузер из среды с доступом к **gov39.ru**, а для **массовой** аналитики контрактов опирайтесь на **ЕИС**.
