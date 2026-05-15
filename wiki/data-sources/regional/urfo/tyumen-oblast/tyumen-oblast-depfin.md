---
title: 'Тюменская область: Департамент финансов Тюменской области'
sidebar_label: Депфин Тюменской области
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/tyumen-oblast-depfin
source_url: 'https://depfin.admtyumen.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и вложения (часто PDF, XLSX); открытые API в карточке не зафиксированы
description: >-
  Официальный сайт Департамента финансов Тюменской области: нормативные акты по бюджету,
  материалы по планированию и исполнению областного бюджета, отчётность и справочные разделы
  для организаций бюджетной сферы.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tyumen-oblast-sources-overview
  - /data-sources/regional/tyumen-oblast-budget-for-citizens-admtyumen
  - /data-sources/regional/tyumen-oblast-npa-portal-tyumen-pravo
  - /data-sources/regional/tyumen-oblast-regional-duma
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
  - /glossary/budget
---

# Тюменская область: Департамент финансов Тюменской области

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Тюменская область: **региональный финансовый орган** |
| Тип доступа | Официальный сайт департамента |
| Основные форматы | HTML; типичные вложения — PDF, иногда XLSX |
| Оператор | Департамент финансов Тюменской области |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **главный региональный вход** к материалам по областному бюджету: нормативка, отчётность, разъяснения и сопутствующие публикации. Для **гражданской наглядности** см. также [«Бюджет для граждан»](/data-sources/regional/tyumen-oblast-budget-for-citizens-admtyumen).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — набор публикуемых файлов и форм меняется по циклу бюджета |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; без стабильного публичного API в описании |
| Юридическая значимость (`legal_significance`) | официальный сайт финансового органа субъекта |
| Задержка обновления (`update_lag`) | зависит от регламентов сдачи отчётности и обновления разделов |
| Глубина архива (`archive_depth`) | определяется политикой хранения на сайте |
| Лицензия (`license_or_terms`) | условия использования материалов — на сайте оператора |

## Описание

Сайт покрывает **контур областного бюджета**: проекты и пояснительные записки (в объёме размещения), исполнение, межбюджетные отношения и методические материалы для учреждений. Для **полного банка текстов НПА** с удобным поиском часто удобнее [информационно-правовой портал](/data-sources/regional/tyumen-oblast-npa-portal-tyumen-pravo).

## Оператор

Департамент финансов Тюменской области — https://depfin.admtyumen.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://depfin.admtyumen.ru/ | HTML |

## Объекты данных и показатели

- **Документы** по бюджету: законы, постановления, ведомственные акты (в объёме публикации).
- **Отчётность и формы** для бюджетных учреждений (часть материалов может быть в закрытых кабинетах — в эту карточку не включается).
- **Связка** с федеральными рядами по классификации и исполнению — через [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) и терминологию [«Бюджет»](/glossary/budget).

## Периодичность обновления

Пики обновлений — **подготовка** и **исполнение** бюджета, а также сроки отчётности по календарю финоргана.

## Ограничения и особенности

- Часть функционала может вести на **единый портал** `admtyumen.ru` или требовать **регистрации** для служебных сервисов (в карточку не входит).

## Связанные страницы wiki

- [«Бюджет для граждан» (портал Правительства)](/data-sources/regional/tyumen-oblast-budget-for-citizens-admtyumen) — упрощённое представление для граждан.
- [Портал правовых актов (tyumen-pravo.ru)](/data-sources/regional/tyumen-oblast-npa-portal-tyumen-pravo) — поиск и тексты НПА.
- [Тюменская областная Дума](/data-sources/regional/tyumen-oblast-regional-duma) — законодательный этап бюджетного процесса.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые федеральные выгрузки.
- [Сводная страница субъекта](/data-sources/regional/subject-tyumen-oblast-sources-overview) — все источники по области.
