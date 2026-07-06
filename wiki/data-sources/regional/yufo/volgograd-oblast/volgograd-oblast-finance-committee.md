---
title: 'Волгоградская область: Комитет финансов (volgafin.volgograd.ru)'
sidebar_label: Комитет финансов области
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/volgograd-oblast-finance-committee
source_url: 'https://volgafin.volgograd.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт Комитета финансов Волгоградской области: материалы по
  областному бюджету, отчётность, методические документы и нормативные акты
  финансового блока субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-volgograd-oblast-sources-overview
  - /data-sources/regional/volgograd-oblast-interactive-budget
  - /data-sources/regional/volgograd-oblast-pravo-publication-region34
  - /data-sources/regional/volgograd-oblast-duma
  - /data-sources/regional/volgograd-oblast-treasury-roskazna
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
aliases:
  - volgograd-oblast-fin-b560ec0c40
---

# Волгоградская область: Комитет финансов (volgafin.volgograd.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный финансовый орган Волгоградской области |
| Тип доступа | Официальный веб-портал |
| Основные форматы | HTML, PDF (вложения в разделах документов) |
| Оператор | Комитет финансов Волгоградской области |
| Режим доступа | Открытый |

Коротко: **главный региональный вход** к проекту и исполнению **областного** бюджета, отчётности и методике; наглядные срезы — на **[интерактивном бюджете](/data-sources/regional/volgograd-oblast-interactive-budget)**; юридически значимые тексты законов — в **[опубликовании НПА (region34)](/data-sources/regional/volgograd-oblast-pravo-publication-region34)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от глубины размещения отчётов и таблиц по годам |
| Машиночитаемость (`machine_readability`) | смешанная: преимущественно HTML/PDF; агрегированные открытые наборы — через федеральные витрины |
| Юридическая значимость (`legal_significance`) | официальный финансовый орган субъекта |
| Задержка обновления (`update_lag`) | выше в отчётные даты и вокруг бюджетной сессии |
| Глубина архива (`archive_depth`) | определяется разделами «Бюджет», «Документы», архивом публикаций на сайте |
| Лицензия (`license_or_terms`) | условия сайта субъекта |

## Описание

Сайт **volgafin.volgograd.ru** — отправная точка для **областного** бюджетного цикла: закон о бюджете, пояснительная записка, отчёты об исполнении и методические материалы публикуются по мере подготовки. Для **гражданской витрины** с интерактивными разрезами используйте отдельную карточку **[Интерактивный бюджет](/data-sources/regional/volgograd-oblast-interactive-budget)**.

## Оператор

Комитет финансов Волгоградской области — канонический вход: https://volgafin.volgograd.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://volgafin.volgograd.ru/ | HTML |

## Объекты данных и показатели

- **Проект и исполнение** областного бюджета (таблицы и пояснения — по разделам сайта).
- **Нормативные и методические** документы финансового блока.
- **Ключи связки**: финансовый год, коды бюджетной классификации (если приводятся в таблицах), ведомство-получатель средств.

## Периодичность обновления

Нерегулярно по разделам; пик при подготовке годового отчёта об исполнении бюджета и обновлении материалов «бюджета для граждан».

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -L "https://volgafin.volgograd.ru/"
```

## Связанные страницы wiki

- **[Сводная страница субъекта](/data-sources/regional/subject-volgograd-oblast-sources-overview)** — все источники по Волгоградской области в wiki.
- **[Интерактивный бюджет](/data-sources/regional/volgograd-oblast-interactive-budget)** — наглядные разрезы доходов и расходов.
- **[Опубликование НПА (region34)](/data-sources/regional/volgograd-oblast-pravo-publication-region34)** — официальные тексты законов о бюджете.
- **[Волгоградская областная Дума](/data-sources/regional/volgograd-oblast-duma)** — законодательный этап бюджетного цикла.
- **[УФК по Волгоградской области](/data-sources/regional/volgograd-oblast-treasury-roskazna)** — казначейское сопровождение на территории субъекта.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — федеральная отчётность и открытые наборы.
- **[Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемые ряды для сопоставления.

## Не путать с

- **[Департамент финансов администрации Волгограда](/data-sources/regional/volgograd-city-finance-department)** — **муниципальный** бюджет города Волгограда, а не областной.
