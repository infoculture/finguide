---
title: 'Мурманская область: Контрольно-счётная палата'
sidebar_label: КСП Мурманской области
tags:
  - data-source
  - regional
  - control
  - oversight
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-ksp
source_url: 'https://kspmo.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF; без единого API проверок
description: >-
  Официальный сайт Контрольно-счётной палаты Мурманской области: внешний муниципальный финансовый
  контроль, годовые доклады, результаты контрольных мероприятий по мере публикации.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-gosfincontrol
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-b4u-budget-portal
  - /data-sources/regional/consolidated-budgets
---

# Мурманская область: Контрольно-счётная палата

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Субъект РФ — **Мурманская область** (**внешний** муниципальный финансовый контроль) |
| Тип доступа | Официальный сайт КСП |
| Основные форматы | HTML, **PDF** |
| Оператор | Контрольно-счётная палата Мурманской области |
| Режим доступа | Открытый |

Коротко: **внешний контроль** за использованием бюджетных средств и соблюдением бюджетного законодательства на уровне **муниципальных образований** (в пределах компетенции КСП). Для **внутреннего** контроля исполнительной ветви используйте [КГиФК](/data-sources/regional/murmansk-oblast-gosfincontrol).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — публичные материалы зависят от итогов проверок и редакционной политики |
| Машиночитаемость (`machine_readability`) | преимущественно отчёты и PDF |
| Юридическая значимость (`legal_significance`) | официальный орган внешнего МФК субъекта |
| Задержка обновления (`update_lag`) | нерегулярно, по завершению контрольных мероприятий |
| Глубина архива (`archive_depth`) | см. разделы годовых докладов и архива материалов |
| Лицензия (`license_or_terms`) | см. условия сайта КСП |

## Описание

КСП публикует **годовые доклады**, **информацию о проверках** (в открытой части), **аналитические материалы** по устойчивости муниципальных финансов (если размещены). Это **сигнальный** слой рисков для аналитика, который нужно сопоставлять с [бюджетной отчётностью](/data-sources/regional/murmansk-oblast-minfin).

## Оператор

Контрольно-счётная палата Мурманской области — канонический вход: https://kspmo.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница КСП | https://kspmo.ru/ | HTML |

## Объекты данных и показатели

- **Объекты:** заключения по проверкам (публичная часть), **годовой доклад**, методические материалы.
- **Ключи связки:** **ОКТМО** муниципалитета, **финансовый год**, предмет проверки.
- **Пробелы:** не содержит **первичных** бюджетных таблиц — см. [B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal) и [Минфин](/data-sources/regional/murmansk-oblast-minfin).

## Периодичность обновления

Связана с **календарём проверок** и **годовой отчётностью** палаты.

## Ограничения и особенности

- Детализация **может быть сокращена** в открытой части по сравнению с рабочими материалами проверки.
- Не путайте с [КГиФК](/data-sources/regional/murmansk-oblast-gosfincontrol): разные **роли** в системе контроля.

## Связанные страницы wiki

- [Комитет государственного и финансового контроля](/data-sources/regional/murmansk-oblast-gosfincontrol) — внутренний финансовый контроль.
- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — бюджет и отчётность субъекта.
- [Портал B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal) — муниципальная прозрачность.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets) — уровни бюджетной системы.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
