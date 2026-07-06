---
title: "Тверская область: опубликование НПА на Официальном портале правовой информации"
sidebar_label: "НПА на pravo.gov.ru (регион 69)"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/tver-oblast-pravo-gov-regional-acts
source_url: "https://publication.pravo.gov.ru/documents/block/region69"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
description: >-
  Федеральный Официальный интернет-портал правовой информации: блок
  опубликования нормативных правовых актов Тверской области (код региона 69) —
  юридически значимые тексты и реквизиты опубликования.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tver-oblast-sources-overview
  - /data-sources/regional/tver-oblast-minfin-regional-npa
  - /data-sources/regional/tver-oblast-legislative-assembly
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Тверская область: опубликование НПА на Официальном портале правовой информации

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Тверская область (все виды НПА, проходящих через установленное опубликование) |
| Тип доступа | Публичный федеральный портал (блок региональных актов) |
| Основные форматы | HTML-оглавление; тексты — PDF/HTML по карточке документа |
| Оператор | Официальный интернет-портал правовой информации (федеральный контур опубликования) |
| Режим доступа | Открытый |

Коротко: **канал официального опубликования** НПА Тверской области; для **финансового подмножества** удобен поиск на [сайте Минфина](/data-sources/regional/tver-oblast-minfin-regional-npa), но юридическую силу текста сверяйте с pravo.gov.ru.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | высокая для «что опубликовано официально»; отбор по теме «финансы» требует фильтрации |
| Машиночитаемость (`machine_readability`) | ограниченная для массовой автоматизации без отдельного API в карточке |
| Юридическая значимость (`legal_significance`) | официальное опубликование |
| Задержка обновления (`update_lag`) | минимальная относительно регистрации акта |
| Глубина архива (`archive_depth`) | длительная (зависит от ведения реестра на портале) |
| Лицензия (`license_or_terms`) | правила портала pravo.gov.ru |

## Описание

Раздел **region69** на publication.pravo.gov.ru содержит поток опубликованных актов Тверской области. Для **бюджетного цикла** здесь находятся законы о бюджете, изменения к ним и связанные постановления — с датой опубликования и стабильной ссылкой на текст.

## Оператор

Официальный интернет-портал правовой информации — канонический вход: https://publication.pravo.gov.ru/documents/block/region69

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Блок региона 69 | https://publication.pravo.gov.ru/documents/block/region69 | HTML, PDF |

## Объекты данных и показатели

- НПА: вид документа, номер, дата, орган, текст, история изменений (по возможностям портала).
- Связка с бюджетом: по заголовку, виду акта, приложениям; машинный парсинг усложнён объёмом и форматами PDF.

## Периодичность обновления

Непрерывно по мере регистрации новых документов.

## Ограничения и особенности

- Не все материалы ведомств дублируются как отдельные акты; часть может входить в приложения.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-tver-oblast-sources-overview).
- [Минфин: региональные НПА](/data-sources/regional/tver-oblast-minfin-regional-npa) — тематическая выборка финансового блока.
- [Законодательное Собрание](/data-sources/regional/tver-oblast-legislative-assembly) — контекст принятия законов.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data).
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets).
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).
