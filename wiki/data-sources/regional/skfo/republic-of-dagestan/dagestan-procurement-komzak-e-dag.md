---
title: 'Республика Дагестан: Комитет по государственным закупкам (komzak.e-dag.ru)'
sidebar_label: Закупки Дагестана (komzak.e-dag.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/dagestan-procurement-komzak-e-dag
source_url: 'https://komzak.e-dag.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
description: >-
  Официальный портал Комитета по государственным закупкам Республики Дагестан
  на домене Правительства региона и смежная информационная система закупок
  (goszakaz.e-dag.ru); дополняют ЕИС, но не заменяют контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-dagestan-sources-overview
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-city-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
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

# Республика Дагестан: Комитет по государственным закупкам (komzak.e-dag.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Дагестан** — **республиканский** контур госзаказа: комитет и связанная **информационная система** закупок |
| Тип доступа | **Публичный портал** комитета на **e-dag.ru**; отдельный вход **goszakaz.e-dag.ru** для реестров и витрины закупок |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**) |
| Оператор | **Комитет по государственным закупкам Республики Дагестан** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный вход** к **республиканской** политике и методике госзаказа и к **региональной** ИС закупок; для **извещений и контрактов** по **44-ФЗ** и **223-ФЗ** в общероссийском реестре опирайтесь на **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам Республики Дагестан.

## Описание

Сайт **komzak.e-dag.ru** публикует **структуру**, **документы** и **новости** комитета. **Информационная система в сфере закупок** республики доступна по адресу **goszakaz.e-dag.ru** (реестры, аналитика и смежные разделы по правилам оператора). **Юридическую** полноту и **единые** массовые выгрузки федерального контура сопоставляйте с **ЕИС** по **реестровым номерам**, **ИНН заказчика** и дате.

## Оператор

**Комитет по государственным закупкам Республики Дагестан** — https://komzak.e-dag.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень портала комитета | https://komzak.e-dag.ru/ |
| Информационная система закупок республики | https://goszakaz.e-dag.ru/ |

Структура меню и поддомены **меняются** при обновлении порталов; закладку держите на **komzak.e-dag.ru** и переходите по актуальной ссылке на **goszakaz.e-dag.ru** с сайта комитета.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — региональный контур **дополняет** федеральный |
| Машиночитаемость | **Преимущественно HTML/PDF** на сайтах; **массовые** XML/выгрузки по 44/223 — через **ЕИС** |
| Юридическая значимость | **Официальные** ресурсы на домене **Правительства Республики Дагестан** |

## Объекты данных и показатели

- **Нормативные и методические материалы** комитета для заказчиков республики.
- **Реестры и аналитика** на **goszakaz.e-dag.ru** — для сопоставления с **ЕИС**.
- **Связка с федеральным контрактным следом** — через **[ЕИС](/information-systems/federal/zakupki)**.

## Периодичность обновления

По мере публикаций комитета и событий в региональной ИС; для федерального реестра — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры только региональными сайтами без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **Муниципальные** заказчики могут иметь **дополнительные** публикации; эта карточка описывает **республиканский** контур.

## Примеры доступа

```bash
curl -fsSL -A "finguide-komzak-dag-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://komzak.e-dag.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы](/data-sources/regional/moscow-city-procurement-tender-mos), [СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [Свердловская область](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [РС(Я)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [Кузбасс (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [Югра (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [Калининградская область (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; региональные порталы **не** заменяют его для полноты юридически значимых публикаций по 44/223.

## Частые вопросы

**В:** Где скачать все контракты заказчиков Дагестана одним архивом?

**О:** Используйте **выгрузки ЕИС** и фильтры по **ИНН/региону** заказчика; **goszakaz.e-dag.ru** и сайт комитета дают **контекст** и **региональный** срез, а не полный дубликат массовых данных ЕИС.
