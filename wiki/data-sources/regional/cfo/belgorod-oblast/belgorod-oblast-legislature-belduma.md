---
title: 'Белгородская область: Белгородская областная Дума (belduma.ru)'
sidebar_label: 'Областная Дума'
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/belgorod-oblast-legislature-belduma
source_url: 'https://belduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт законодательного органа: повестка, проекты и принятые законы
  (включая бюджетный блок), депутатские материалы и новости.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/belgorod-oblast-official-legal-acts-zakonbelregion
  - /data-sources/regional/belgorod-oblast-minfin-beldepfin
  - /data-sources/regional/subject-belgorod-oblast-sources-overview
  - /information-systems/federal/sozd
  - /data-sources/regional/how-to-find-regional-data
---

# Белгородская область: Белгородская областная Дума (belduma.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Законодательная власть Белгородской области |
| Тип доступа | Официальный веб-портал парламента |
| Основные форматы | HTML, PDF |
| Оператор | Белгородская областная Дума |
| Режим доступа | Открытый |

Коротко: законодательная стадия **бюджетного процесса** (проекты, пояснительные записки, принятие) и смежные акты; для официальных текстов после опубликования ориентируйтесь на [правовой портал](/data-sources/regional/belgorod-oblast-official-legal-acts-zakonbelregion).

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — фокус на парламентском цикле, не на полной бюджетной отчётности |
| Машиночитаемость (`machine_readability`) | смешанный: HTML и вложения; стабильного открытого API может не быть |
| Юридическая значимость (`legal_significance`) | официальный сайт законодательного органа; итоговые тексты НПА — по правилам опубликования |
| Задержка обновления (`update_lag`) | сессионный цикл и заседания комитетов |
| Глубина архива (`archive_depth`) | зависит от разделов заседаний и документотеки |
| Лицензия (`license_or_terms`) | см. условия сайта |

## Описание

Сайт `belduma.ru` публикует повестку заседаний, статусы законопроектов и сопутствующие материалы, включая **бюджетный блок**. После принятия закона о бюджете для юридически значимой редакции используйте официальное опубликование на [zakonbelregion.ru](/data-sources/regional/belgorod-oblast-official-legal-acts-zakonbelregion).

## Оператор

Белгородская областная Дума — канонический вход: https://belduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Думы | https://belduma.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты и законы** области, в том числе о бюджете; пояснительные записки и приложения к проектам.
- Связка: номер законопроекта, стадия, дата заседания, ссылка на итоговый НПА в официальном опубликовании.
- Пробелы: парламентский сайт может не содержать актуальной редакции после официального опубликования — сверяйте дату.

## Периодичность обновления

По ходу пленарных и комитетских циклов; в бюджетный период — всплеск публикаций.

## Ограничения и особенности

- Для федерального законодательного трека см. [Систему обеспечения законодательной деятельности](/information-systems/federal/sozd) — иной уровень и иной состав документов.

## Связанные страницы wiki

- [Официальное опубликование НПА области](/data-sources/regional/belgorod-oblast-official-legal-acts-zakonbelregion) — канонические тексты актов.
- [Минфин области](/data-sources/regional/belgorod-oblast-minfin-beldepfin) — исполнение бюджета и отчётность.
- [Сводная страница субъекта](/data-sources/regional/subject-belgorod-oblast-sources-overview) — источники по области.
- [СОЗД (федеральная система)](/information-systems/federal/sozd) — контекст для сопоставления с федеральными законопроектами.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.

## Не путать с

- **[Правовой портал zakonbelregion.ru](/data-sources/regional/belgorod-oblast-official-legal-acts-zakonbelregion)** — юридически значимое опубликование текстов, если оно расходится с копией на сайте Думы.
