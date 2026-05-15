---
title: 'Москва: Департамент города Москвы по конкурентной политике (закупки и торги)'
sidebar_label: Закупки Москвы (tender.mos.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-procurement-tender-mos
source_url: 'https://tender.mos.ru/'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Официальный портал Департамента города Москвы по конкурентной политике:
  заказчики, обучение, торги города Москвы; дополняет федеральный ЕИС, но не
  заменяет контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /howto/analysis/procurement-analysis
---

# Москва: Департамент города Москвы по конкурентной политике (закупки и торги)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Город Москва** — муниципальные и городские закупки, методические материалы и навигация для заказчиков столицы |
| Тип доступа | **Публичный портал** `tender.mos.ru` (разделы заказчикам, торгам, обучению) |
| Основные форматы | **HTML**; ссылки на смежные системы и документы |
| Оператор | **Департамент города Москвы по конкурентной политике** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный вход** для **закупочной политики и торгов Москвы**; для **юридически значимых** извещений и контрактов по **44-ФЗ/223-ФЗ** по-прежнему опирайтесь на **[ЕИС](/information-systems/federal/zakupki)** и выгрузки **[закупок](/data-sources/federal/procurement)**.

## Описание

Портал **tender.mos.ru** агрегирует **информационную** и **методическую** поддержку заказчиков столицы, навигацию по торгам и обучению. **Контрактный след** массовых процедур восстанавливайте через **[ЕИС](/information-systems/federal/zakupki)** с фильтром по заказчикам Москвы (ИНН/ОКПО/наименование) и через **[отчётность по закупкам](/reporting/procurement-contract-reporting)**.

Смежный коммерческий портал **zakupki.mos.ru** (поставщики) при анализе **сверяйте** с официальными первичными документами в ЕИС — условия и полнота могут отличаться.

## Оператор

**Департамент города Москвы по конкурентной политике** — https://tender.mos.ru/

## URL и точки доступа

| Раздел | URL |
| --- | --- |
| Корень | https://tender.mos.ru/ |
| Заказчики | https://tender.mos.ru/customers/ |

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — акцент на столичной политике и обучении |
| Машиночитаемость | **Преимущественно HTML**; массовые таблицы контрактов — через **ЕИС** |
| Юридическая значимость | **Официальный** орган города Москвы |

## Объекты данных и показатели

- **Списки и карточки заказчиков** — для сопоставления с **[ЕИС](/information-systems/federal/zakupki)**.
- **Методические материалы и календарь событий** — для интерпретации **местных** особенностей закупок столицы.

## Периодичность обновления

По мере обновления департаментом; для контрактов — дата публикации в **ЕИС**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-tender-mos-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://tender.mos.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Санкт-Петербурга (gz-spb.ru)](/data-sources/regional/saint-petersburg-procurement-gz-spb), [закупки Татарстана (goszakupki.tatarstan.ru)](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [закупки Краснодарского края (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [закупки Свердловской области (goszakaz.midural.ru)](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [закупки РС(Я) (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [закупки РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag), [закупки Кузбасса (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [закупки Калининградской области (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины закупочной политики.
- [Анализ закупок](/howto/analysis/procurement-analysis).

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — **федеральный** контрактный реестр и извещения; портал департамента **не** заменяет юридическую фиксацию процедуры в ЕИС.

## Частые вопросы

**В:** Почему контракт есть в ЕИС, но не отражён на tender.mos.ru?

**О:** Портал департамента — **информационный** слой; **каноническая** публикация извещений и контрактов по 44-ФЗ/223-ФЗ для массовой аналитики — **ЕИС**.
