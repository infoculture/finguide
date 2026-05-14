---
title: 'Ханты-Мансийский АО — Югра: портал «Закупки Югры» (zakupki.admhmao.ru)'
sidebar_label: Закупки Югры (zakupki.admhmao.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
source_url: 'https://zakupki.admhmao.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
description: >-
  Официальный портал региональной информационной системы в сфере закупок
  Ханты-Мансийского автономного округа — Югры («Закупки Югры» на домене
  Правительства округа); дополняет ЕИС, но не заменяет контрактный реестр
  44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khanty-mansi-autonomous-okrug-yugra-sources-overview
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-city-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /howto/analysis/procurement-analysis
---

# Ханты-Мансийский АО — Югра: портал «Закупки Югры» (zakupki.admhmao.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ханты-Мансийский автономный округ — Югра** — **региональная** информационная система и публичная витрина закупок на домене **admhmao.ru** |
| Тип доступа | **Публичный портал** региональной ИС и сопутствующие разделы (аналитика, витрины, документы) |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**) |
| Оператор | **Департамент государственного заказа Ханты-Мансийского автономного округа — Югры** (по смыслу портала «Закупки Югры» и разделу «О системе» на сайте) |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный региональный вход** к **ГИС госзаказа** округа, аналитике и витринам; для **извещений и контрактов** в общероссийском реестре по **44-ФЗ** и **223-ФЗ** используйте **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам субъекта.

## Описание

Сайт **zakupki.admhmao.ru** (заголовок витрины — **«Закупки Югры»**) публикует разделы о **работе в системе**, **документах**, **аналитике** и **витринах закупок малого объёма**; на странице «О системе» описана **региональная информационная система** в сфере закупок. **Массовый контрактный след** в федеральном контуре сопоставляйте с **ЕИС** по **реестровым номерам**, **ИНН заказчика** и дате.

## Оператор

**Департамент государственного заказа Ханты-Мансийского автономного округа — Югры** — https://zakupki.admhmao.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень портала «Закупки Югры» | https://zakupki.admhmao.ru/ |
| О системе (описание региональной ИС) | https://zakupki.admhmao.ru/rabota-na-sajte/o-sisteme |

Структура меню **меняется** при обновлении сайта; ориентируйтесь на **корень** домена и актуальную навигацию.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — акцент на **региональном** контуре, аналитике и сопровождении заказчиков округа |
| Машиночитаемость | **Преимущественно HTML/PDF**; **массовые** выгрузки контрактов — через **ЕИС** |
| Юридическая значимость | **Официальный** портал на домене органов власти округа |

## Объекты данных и показатели

- **Нормативные и методические материалы**, схемы работы в региональной ИС.
- **Аналитические разделы** (планирование, карты закупок, реестры и т.п. — по актуальному меню сайта).
- **Связка с контрактами** — через **[ЕИС](/information-systems/federal/zakupki)**.

## Периодичность обновления

По мере публикаций департамента и обновлений региональной ИС; для контрактов в федеральном реестре — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры материалами портала без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **Муниципальные** заказчики могут иметь **дополнительные** публикации; эта карточка — **окружной** контур.

## Примеры доступа

Проверка доступности корня:

```bash
curl -fsSL -A "finguide-zakupki-admhmao-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zakupki.admhmao.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы](/data-sources/regional/moscow-city-procurement-tender-mos), [СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [Свердловская область](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [РС(Я)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [РД](/data-sources/regional/dagestan-procurement-komzak-e-dag), [Кузбасс](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [Калининградская область](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; портал округа **не** заменяет его для полноты юридически значимых публикаций по 44/223.

## Частые вопросы

**В:** Где скачать все контракты заказчиков Югры одним архивом?

**О:** Используйте **выгрузки ЕИС** и фильтры по **ИНН/региону** заказчика; портал **Закупки Югры** даёт **региональный** контекст и ИС, а не полный дубликат массовых данных ЕИС.
