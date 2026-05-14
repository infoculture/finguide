---
title: 'Сахалинская область: портал «Открытый бюджет» (openbudget.sakhminfin.ru)'
sidebar_label: Открытый бюджет (Сахалинская обл.)
tags:
  - data-source
  - regional
  - budget
  - open_data
last_updated: 2026-05-14
slug: /data-sources/regional/sakhalin-oblast-open-budget
source_url: 'https://openbudget.sakhminfin.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Региональная витрина открытого бюджета: законы и исполнение, бюджет для граждан,
  муниципальный контур и материалы по инициативному бюджетированию.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-sakhalin-oblast-sources-overview
  - /data-sources/regional/sakhalin-oblast-minfin
  - /data-sources/regional/sakhalin-oblast-legislature-duma
  - /data-sources/regional/sakhalin-oblast-pravo-gov-region65
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Сахалинская область: портал «Открытый бюджет» (openbudget.sakhminfin.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** и **муниципальный** контур **в рамках** одной **витрины** |
| Тип доступа | **Публичный** веб-портал |
| Основные форматы | **HTML**; отдельные **вложения** могут быть **PDF/XLSX** |
| Оператор | **Министерство финансов Сахалинской области** (оператор витрины) |
| Режим доступа | Открытое чтение |

Коротко: **удобная** точка входа для **гражданской** и **аналитической** подачи **бюджетных** данных области; **юридически значимые** редакции **законов** сверяйте с **[ОИПП](/data-sources/regional/sakhalin-oblast-pravo-gov-region65)** и сайтом **[Минфина](/data-sources/regional/sakhalin-oblast-minfin)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | **Частичная**: охват **тем** и **лет** зависит от **наполнения** витрины |
| Машиночитаемость (`machine_readability`) | Преимущественно **HTML**; **машинные** каталоги **как на data.gov.ru** здесь **не** заявлены |
| Юридическая значимость (`legal_significance`) | **Официальная** витрина органа власти; **для споров о тексте** закона — см. **ОИПП** |
| Задержка обновления (`update_lag`) | Зависит от **событий** бюджетного цикла |
| Глубина архива (`archive_depth`) | Обычно **несколько** лет **публичной** истории — уточняйте по разделам |
| Лицензия (`license_or_terms`) | **Государственные** данные; **роботам** — не **перегружать** запросами |

## Описание

Портал **«Открытый бюджет»** дублирует и **структурирует** часть материалов с **основного** сайта **[Минфина](/data-sources/regional/sakhalin-oblast-minfin)**, добавляя **муниципальный** слой, **инициативное** бюджетирование и **открытые данные** в **читаемом** виде.

## Оператор

**Министерство финансов Сахалинской области** — канонический вход: https://openbudget.sakhminfin.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал «Открытый бюджет» | https://openbudget.sakhminfin.ru/ | HTML |

## Объекты данных и показатели

- **Бюджет для граждан**, **визуализации**, **справочники** по **территориям**.
- **Отчёты** об **исполнении**, **документы** по **инициативному** бюджетированию.
- **Ключи**: **год**, **ОКТМО** (если раскрыт), **раздел/целевая статья**.

## Периодичность обновления

**По мере** утверждения **поправок** к бюджету и **публикации** **отчётности** об исполнении.

## Ограничения и особенности

- При **автоматическом** опросе возможны ответы **403** у CDN/WAF — снижайте **частоту** запросов и **соблюдайте** правила сайта.
- **Не все** таблицы **выгружаются** как **CSV** — часть остаётся **только** в **HTML/PDF**.

## Связанные страницы wiki

- **[Сводная по Сахалинской области](/data-sources/regional/subject-sakhalin-oblast-sources-overview)**.
- **[Минфин Сахалинской области](/data-sources/regional/sakhalin-oblast-minfin)** — **канонический** сайт органа.
- **[Официальное опубликование НПА (region65)](/data-sources/regional/sakhalin-oblast-pravo-gov-region65)**.
- **[Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets)** — **методический** контекст.
- **[Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Не путать с

- **[Минфин области](/data-sources/regional/sakhalin-oblast-minfin)** — **полный** сайт органа, не **только** «открытый бюджет».
