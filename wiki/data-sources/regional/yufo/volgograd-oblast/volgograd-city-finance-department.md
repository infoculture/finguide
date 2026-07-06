---
title: 'Волгоград: Департамент финансов администрации города (volgadmin.ru)'
sidebar_label: Финансы г. Волгограда
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/volgograd-city-finance-department
source_url: 'https://www.volgadmin.ru/d/branches/fin/about'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный раздел Департамента финансов администрации города Волгограда:
  материалы по муниципальному бюджету, финансовой деятельности и нормативные
  документы городского финансового блока.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-volgograd-oblast-sources-overview
  - /data-sources/regional/volgograd-oblast-finance-committee
  - /data-sources/regional/volgograd-city-procurement-volgzakaz
  - /data-sources/regional/consolidated-budgets
aliases:
  - volgograd-oblast-fin-1a59a69174
---

# Волгоград: Департамент финансов администрации города (volgadmin.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальный бюджет города Волгограда (городской округ) |
| Тип доступа | Официальный веб-раздел администрации города |
| Основные форматы | HTML, PDF (по размещаемым документам) |
| Оператор | Департамент финансов администрации города Волгограда |
| Режим доступа | Открытый |

Коротко: **муниципальный** вход к бюджету и финансовой деятельности **города Волгограда**; областной бюджет — на **[Комитете финансов](/data-sources/regional/volgograd-oblast-finance-committee)** и связанных областных витринах.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от глубины размещения отчётов и таблиц по годам |
| Машиночитаемость (`machine_readability`) | преимущественно HTML/PDF |
| Юридическая значимость (`legal_significance`) | официальный муниципальный орган |
| Задержка обновления (`update_lag`) | выше в отчётные даты и вокруг бюджетной сессии горсовета |
| Глубина архива (`archive_depth`) | определяется структурой разделов на volgadmin.ru |
| Лицензия (`license_or_terms`) | условия сайта администрации города |

## Описание

Раздел Департамента финансов на **volgadmin.ru** публикует сведения о **муниципальном бюджете** города Волгограда: планирование, исполнение, отчётность и нормативные материалы в объёме, предусмотренном муниципальным законодательством. Для сопоставления с областным уровнем используйте карточки областного контура и учитывайте **ОКТМО** при агрегации.

## Оператор

Департамент финансов администрации города Волгограда — канонический вход: https://www.volgadmin.ru/d/branches/fin/about

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| О департаменте / вход в раздел | https://www.volgadmin.ru/d/branches/fin/about | HTML |

## Объекты данных и показатели

- Проект и исполнение **муниципального** бюджета города Волгограда.
- Нормативные и методические документы финансового блока города.
- **Ключи связки**: финансовый год, ОКТМО муниципального образования, коды бюджетной классификации (если приводятся в таблицах).

## Периодичность обновления

Нерегулярно по разделам; пик при подготовке годового отчёта об исполнении бюджета.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -L "https://www.volgadmin.ru/d/branches/fin/about"
```

## Связанные страницы wiki

- **[Сводная страница субъекта](/data-sources/regional/subject-volgograd-oblast-sources-overview)** — все источники по Волгоградской области в wiki (включая муниципальные витрины крупнейшего города).
- **[Комитет финансов области](/data-sources/regional/volgograd-oblast-finance-committee)** — областной бюджет.
- **[Муниципальные закупки Волгограда](/data-sources/regional/volgograd-city-procurement-volgzakaz)** — закупочный контур города.
- **[Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets)** — методический контекст многоуровневых бюджетов.

## Не путать с

- **[Комитет финансов Волгоградской области](/data-sources/regional/volgograd-oblast-finance-committee)** — **областной**, а не городской бюджет.
