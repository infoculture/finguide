---
title: 'Волгоградская область: ЕИС в сфере закупок (zakupki.gov.ru)'
sidebar_label: ЕИС (федеральный контур)
tags:
  - data-source
  - regional
  - procurement
  - federal
last_updated: 2026-05-15
slug: /data-sources/regional/volgograd-oblast-eis-zakupki
source_url: 'https://zakupki.gov.ru/epz/main/public/home.html'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
  - xml
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Единая информационная система в сфере закупок: федеральный контрактный
  реестр для заказчиков Волгоградской области и муниципалитетов на территории
  субъекта; фильтрация по региону заказчика и связка с XML-выгрузками.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-volgograd-oblast-sources-overview
  - /data-sources/regional/volgograd-city-procurement-volgzakaz
  - /information-systems/federal/zakupki
  - /data-sources/federal/zakupki-xml
  - /data-sources/regional/volgograd-oblast-finance-committee
---

# Волгоградская область: ЕИС в сфере закупок (zakupki.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная система; закупки заказчиков на территории Волгоградской области (фильтры по региону/заказчику) |
| Тип доступа | Публичный федеральный портал ЕИС |
| Основные форматы | HTML (витрина), XML (официальные выгрузки) |
| Оператор | Единая информационная система в сфере закупок (федеральный контур) |
| Режим доступа | Открытый |

Коротко: **юридически значимый** контрактный след по 44-ФЗ и 223-ФЗ для заказчиков на территории субъекта; муниципальная витрина **[volgzakaz.ru](/data-sources/regional/volgograd-city-procurement-volgzakaz)** не заменяет ЕИС. Для скриптов — **[XML-выгрузки](/data-sources/federal/zakupki-xml)** и карточка **[ИС zakupki](/information-systems/federal/zakupki)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | высокая для процедур и контрактов в ЕИС; охват зависит от корректности размещения заказчиками |
| Машиночитаемость (`machine_readability`) | смешанная: витрина HTML; массовые ряды — XML/API по федеральным карточкам |
| Юридическая значимость (`legal_significance`) | официальный федеральный реестр |
| Задержка обновления (`update_lag`) | обычно от часов до суток относительно события размещения |
| Глубина архива (`archive_depth`) | многолетний архив процедур в ЕИС |
| Лицензия (`license_or_terms`) | правила использования ЕИС и выгрузок |

## Описание

Карточка фиксирует **региональный контекст использования** федеральной ЕИС для аналитики закупок на территории **Волгоградской области**: областные и муниципальные заказчики, подведомственные учреждения, а также федеральные заказчики с привязкой к региону. Для отбора используйте фильтры по **региону заказчика**, ИНН/наименованию и реестровым номерам процедур.

## Оператор

Единая информационная система в сфере закупок — канонический вход: https://zakupki.gov.ru/epz/main/public/home.html

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Публичная витрина ЕИС | https://zakupki.gov.ru/epz/main/public/home.html | HTML |
| Машиночитаемые выгрузки (см. wiki) | — | XML (через федеральные карточки) |

## Объекты данных и показатели

- Извещения, протоколы, контракты, исполнение контрактов (по компетенции размещения в ЕИС).
- **Ключи связки**: реестровый номер закупки/контракта, ИНН заказчика и поставщика, КБК (в связанных сведениях), ОКТМО/регион заказчика.
- Связь с бюджетом: через лимиты и коды классификации в карточках контрактов и отчётности заказчиков.

## Периодичность обновления

Непрерывно по мере размещения документов участниками закупок.

## Связанные страницы wiki

- **[Сводная страница субъекта](/data-sources/regional/subject-volgograd-oblast-sources-overview)** — все источники по Волгоградской области в wiki.
- **[Муниципальные закупки Волгограда](/data-sources/regional/volgograd-city-procurement-volgzakaz)** — городская витрина (дополняет, не заменяет ЕИС).
- **[Комитет финансов области](/data-sources/regional/volgograd-oblast-finance-committee)** — бюджетное планирование и лимиты.
- **[zakupki.gov.ru (ИС)](/information-systems/federal/zakupki)** — описание информационной системы.
- **[XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml)** — машиночитаемый контур для скриптов.

## Не путать с

- **[volgzakaz.ru](/data-sources/regional/volgograd-city-procurement-volgzakaz)** — только **муниципальный** портал города Волгограда.
