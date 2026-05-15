---
title: 'Мурманская область: официальное опубликование НПА (ОИППИ, региональный срез)'
sidebar_label: НПА МО (pravo.gov.ru)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-pravo-gov-npa
source_url: 'https://pravo.gov.ru/mob/mob-reg/murmanskaya-oblast.php'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; массовые открытые выгрузки — не основной сценарий портала
description: >-
  Региональный срез Официального интернета-портала правовой информации: законы и иные НПА
  Мурманской области в контексте официального опубликования.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-regional-duma
  - /information-systems/federal/pravo-gov-ru
  - /data-sources/federal/budget-gov-ru-datasets
---

# Мурманская область: официальное опубликование НПА (ОИППИ)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** оператор (`pravo.gov.ru`) с **региональным** фильтром по Мурманской области |
| Тип доступа | Официальный интернет-портал правовой информации |
| Основные форматы | HTML |
| Оператор | Официальный интернет-портал правовой информации (`pravo.gov.ru`) |
| Режим доступа | Открытый |

Коротко: **канонический контур опубликования** для поиска и реквизитов **законов и иных НПА** Мурманской области. Для **табличного исполнения бюджета** и планов по КБК используйте [Минфин области](/data-sources/regional/murmansk-oblast-minfin) и [наборы ГИИС](/data-sources/federal/budget-gov-ru-datasets), а не только тексты актов.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная в смысле «аналитики исполнения» — портал про **нормы**, не про кассу |
| Машиночитаемость (`machine_readability`) | HTML; для машинной обработки текстов НПА обычно нужны отдельные парсеры/скачивание PDF |
| Юридическая значимость (`legal_significance`) | федеральный оператор официального опубликования |
| Задержка обновления (`update_lag`) | зависит от регистрации и опубликования актов |
| Глубина архива (`archive_depth`) | определяется полнотой включения региональных актов в ОИПППИ |
| Лицензия (`license_or_terms`) | см. правила портала `pravo.gov.ru` |

## Описание

Страница даёт **точку входа в корпус НПА** субъекта. Для **бюджетного цикла** типичная связка: проект и сопроводительные материалы на [сайте Думы](/data-sources/regional/murmansk-oblast-regional-duma) и [Минфина](/data-sources/regional/murmansk-oblast-minfin) → **принятый закон** и изменения — на `pravo.gov.ru`.

## Оператор

Официальный интернет-портал правовой информации — региональный список: https://pravo.gov.ru/mob/mob-reg/murmanskaya-oblast.php

Карточка ИС: [ОИПППИ / pravo.gov.ru](/information-systems/federal/pravo-gov-ru) — роль: **официальное опубликование** нормативных правовых актов в едином контуре.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный срез НПА | https://pravo.gov.ru/mob/mob-reg/murmanskaya-oblast.php | HTML |

## Объекты данных и показатели

- **Объекты:** тексты НПА, реквизиты регистрации, статусы редакций (по мере отображения на портале).
- **Ключи связки:** номер и дата акта, вид документа; для бюджета — связка с **финансовым годом** и таблицами приложений на сайтах [Минфина](/data-sources/regional/murmansk-oblast-minfin) / [Думы](/data-sources/regional/murmansk-oblast-regional-duma).
- **Пробелы:** нет **построчного исполнения бюджета** — это другие источники.

## Периодичность обновления

По мере **официального опубликования** новых и изменённых актов.

## Ограничения и особенности

- Региональный URL может меняться при обновлении мобильной/региональной навигации портала — проверяйте актуальность входа с главной `pravo.gov.ru`.
- Не путайте с внутренними «банками НПА» ведомств: для юридической силы ориентируйтесь на **ОИПППИ** и методику опубликования.

## Связанные страницы wiki

- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — приложения к бюджету и отчётность.
- [Мурманская областная Дума](/data-sources/regional/murmansk-oblast-regional-duma) — законодательные стадии и проекты.
- [ОИПППИ (карточка ИС)](/information-systems/federal/pravo-gov-ru) — границы системы и типовые ошибки смешения с витринами исполнения.
- [Наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые бюджетные ряды.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
