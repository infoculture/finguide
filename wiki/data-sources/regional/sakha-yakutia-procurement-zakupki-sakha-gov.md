---
title: 'Республика Саха (Якутия): ГКУ «Центр закупок» — региональная витрина (zakupki.sakha.gov.ru)'
sidebar_label: Закупки РС(Я) (zakupki.sakha.gov.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
source_url: 'https://zakupki.sakha.gov.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
description: >-
  Официальный поддомен закупок Правительства Республики Саха (Якутия): витрина
  ГКУ «Центр закупок РС(Я)» (веб-торги, реестры); дополняет ЕИС, но не заменяет
  контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-city-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
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

# Республика Саха (Якутия): ГКУ «Центр закупок» — региональная витрина (zakupki.sakha.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Саха (Якутия)** — **региональная** витрина и сервисы закупок на домене **sakha.gov.ru** |
| Тип доступа | **Публичный веб-портал** (интерфейс «веб-торги» и связанные разделы) |
| Основные форматы | **HTML**; табличные представления и отчёты по правилам портала |
| Оператор | **ГКУ РС(Я) «Центр закупок Республики Саха (Якутия)»** (по подписи на сайте) |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный вход** к **региональному** контуру публикаций и реестров закупок Якутии; для **извещений и контрактов** в общероссийском реестре по **44-ФЗ** и **223-ФЗ** используйте **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам республики.

## Описание

Сайт **zakupki.sakha.gov.ru** позиционируется как витрина **ГКУ РС(Я) «Центр закупок Республики Саха (Якутия)»** и содержит разделы для работы с **региональными** закупками (в т.ч. веб-интерфейс **webtorgi**). **Массовую** юридическую фиксацию процедур и **единые** XML-выгрузки федерального контура сопоставляйте с **ЕИС** по **реестровым номерам**, **ИНН заказчика** и дате.

## Оператор

**ГКУ РС(Я) «Центр закупок Республики Саха (Якутия)»** — https://zakupki.sakha.gov.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень витрины закупок | https://zakupki.sakha.gov.ru/ |

Структура путей (**webtorgi2016** и др.) может **меняться** при обновлении ПО; ориентируйтесь на **корень** домена **zakupki.sakha.gov.ru**.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — региональный **срез** и сервисы центра закупок |
| Машиночитаемость | **Преимущественно HTML** в интерфейсе; **массовые** машиночитаемые выгрузки по 44/223 — через **ЕИС** |
| Юридическая значимость | **Официальный** поддомен **Правительства Республики Саха (Якутия)** |

## Объекты данных и показатели

- **Реестры и карточки закупок** в региональном интерфейсе — для сопоставления с **ЕИС**.
- **Отчёты и справочные разделы** портала — по актуальному меню на сайте.
- **Связка с федеральным контрактным следом** — через **[ЕИС](/information-systems/federal/zakupki)**.

## Периодичность обновления

По мере размещения процедур и обновления портала; для федерального реестра — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры только региональным сайтом без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **Муниципальные** заказчики могут публиковаться **отдельно**; эта карточка — **республиканский** контур центра закупок.

## Примеры доступа

```bash
curl -fsSL -A "finguide-zakupki-sakha-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zakupki.sakha.gov.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы](/data-sources/regional/moscow-city-procurement-tender-mos), [СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [Свердловская область](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag), [Кузбасс (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [Югра (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [Калининградская область (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; региональный портал **не** заменяет его для полноты юридически значимых публикаций по 44/223.

## Частые вопросы

**В:** Достаточно ли только zakupki.sakha.gov.ru для аналитики всех закупок республики?

**О:** Для **полноты** и **единого** формата выгрузок опирайтесь на **ЕИС** и фильтры по заказчикам; региональный сайт даёт **контекст**, **локальные** режимы и **сервисы** центра закупок.
