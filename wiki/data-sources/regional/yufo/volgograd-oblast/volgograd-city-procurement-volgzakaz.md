---
title: 'Волгоград: муниципальные закупки (volgzakaz.ru)'
sidebar_label: Закупки г. Волгограда
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/volgograd-city-procurement-volgzakaz
source_url: 'http://www.volgzakaz.ru/'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Официальный портал муниципальных закупок города Волгограда: планы-графики,
  извещения и материалы по закупкам в объёме размещения на региональной
  муниципальной витрине; юридически значимый федеральный контрактный след —
  в ЕИС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-volgograd-oblast-sources-overview
  - /data-sources/regional/volgograd-city-finance-department
  - /data-sources/regional/volgograd-oblast-eis-zakupki
  - /information-systems/federal/zakupki
  - /data-sources/federal/zakupki-xml
aliases:
  - volgograd-oblast-fin-cf577d8334
---

# Волгоград: муниципальные закупки (volgzakaz.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Закупки для нужд города Волгограда (муниципальная витрина) |
| Тип доступа | Публичный веб-портал |
| Основные форматы | HTML |
| Оператор | Администрация города Волгограда (оператор портала муниципальных закупок) |
| Режим доступа | Открытый |

Коротко: **муниципальный интерфейс** к материалам закупок города Волгограда; для **единой юридически значимой** копии извещений, протоколов и контрактов по 44-ФЗ/223-ФЗ используйте **[ЕИС](/data-sources/regional/volgograd-oblast-eis-zakupki)** и XML-выгрузки.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная относительно ЕИС — муниципальный портал может не дублировать весь федеральный контур |
| Машиночитаемость (`machine_readability`) | HTML; для массовых XML-рядов — ЕИС |
| Юридическая значимость (`legal_significance`) | официальная муниципальная витрина (с уточнением статуса отдельных документов относительно ЕИС) |
| Задержка обновления (`update_lag`) | зависит от интеграции с ЕИС и ручного размещения |
| Глубина архива (`archive_depth`) | определяется политикой хранения на портале |
| Лицензия (`license_or_terms`) | условия портала города |

## Описание

Портал **volgzakaz.ru** предназначен для публикации материалов по **муниципальным закупкам** Волгограда: планы-графики, извещения, разъяснения — в рамках компетенции городского заказчика. Для воспроизводимого анализа контрактов на всей территории РФ опирайтесь на **федеральный ЕИС**.

## Оператор

Портал муниципальных закупок города Волгограда — канонический вход: http://www.volgzakaz.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | http://www.volgzakaz.ru/ | HTML |

## Объекты данных и показатели

- Муниципальные планы-графики и отчётность (если размещены на портале).
- Извещения и сведения о процедурах (в объёме публикации на витрине).
- Идентификаторы закупок и контрактов для связки с ЕИС (при наличии на страницах).

## Периодичность обновления

По мере размещения закупочных процедур и обновления планов-графиков.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -L "http://www.volgzakaz.ru/"
```

## Связанные страницы wiki

- **[Сводная страница субъекта](/data-sources/regional/subject-volgograd-oblast-sources-overview)** — все источники по Волгоградской области в wiki.
- **[Департамент финансов города](/data-sources/regional/volgograd-city-finance-department)** — муниципальный бюджет.
- **[ЕИС в контексте области](/data-sources/regional/volgograd-oblast-eis-zakupki)** — федеральный контрактный реестр.
- **[zakupki.gov.ru (ИС)](/information-systems/federal/zakupki)** — карточка информационной системы.
- **[XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml)** — машиночитаемый контур.

## Не путать с

- **[ЕИС](/data-sources/regional/volgograd-oblast-eis-zakupki)** — федеральная система; volgzakaz.ru — **муниципальная** витрина города.
