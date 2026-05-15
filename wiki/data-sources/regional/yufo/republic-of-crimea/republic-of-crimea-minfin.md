---
title: 'Республика Крым: Министерство финансов Республики Крым (minfin.rk.gov.ru)'
sidebar_label: Минфин Республики Крым
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-crimea-minfin
source_url: 'https://minfin.rk.gov.ru/'
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
machine_readability: преимущественно HTML и вложения (PDF/DOC/XLSX по разделам); единого открытого API карточка не фиксирует
description: >-
  Официальный сайт Министерства финансов Республики Крым: материалы по республиканскому бюджету,
  исполнению, методике и разделам нормативной базы финоргана; точка входа к смежным подразделам
  портала (в т.ч. банк НПА и публикации по муниципальным финансам).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-crimea-sources-overview
  - /data-sources/regional/republic-of-crimea-minfin-normative-acts
  - /data-sources/regional/republic-of-crimea-minfin-municipal-budget-revenues
  - /data-sources/regional/republic-of-crimea-state-council-budget-lawmaking
  - /data-sources/regional/republic-of-crimea-open-budget-ifinmon
  - /data-sources/regional/republic-of-crimea-ufk-roskazna
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Крым: Министерство финансов Республики Крым

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Республика Крым: **региональный** бюджетный контур (финансовый орган субъекта) |
| Тип доступа | Официальный сайт Минфина |
| Основные форматы | HTML; вложения по разделам (часто PDF, DOC, XLSX) |
| Оператор | Министерство финансов Республики Крым |
| Режим доступа | Открытый просмотр |

Коротко: **главная витрина** финоргана субъекта: бюджет, исполнение, разъяснения и сопутствующие публикации. Для **узкого банка НПА** ведомства см. отдельную карточку [Нормативные документы Минфина](/data-sources/regional/republic-of-crimea-minfin-normative-acts); законодательная фаза республиканского бюджета — у [Государственного Совета (раздел законотворчества по бюджету)](/data-sources/regional/republic-of-crimea-state-council-budget-lawmaking).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки по годам и типам форм |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; массовые открытые CSV/JSON на главной витрине не заявлены |
| Юридическая значимость (`legal_significance`) | официальный региональный оператор бюджетных и финансовых материалов ведомства |
| Задержка обновления (`update_lag`) | привязана к бюджетному циклу и срокам отчётности |
| Глубина архива (`archive_depth`) | определяется политикой публикаций на сайте |
| Лицензия (`license_or_terms`) | условия использования сайта — у оператора |

## Описание

Сайт **minfin.rk.gov.ru** — типичная структура регионального Минфина: разделы о **бюджете республики**, исполнении, межбюджетных отношениях, нормативных актах и методических материалах. Часть материалов дублируется или дополняется федеральными витринами (см. [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)) и специализированными подсистемами (например [«Открытый бюджет» на ifinmon](/data-sources/regional/republic-of-crimea-open-budget-ifinmon)).

## Оператор

Министерство финансов Республики Крым — https://minfin.rk.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Минфина | https://minfin.rk.gov.ru/ | HTML |

## Объекты данных и показатели

- **Бюджетные** материалы: пояснительные записки, проекты и пояснения к закону о бюджете (в объёме публикаций на сайте).
- **Исполнение** и отчётность финоргана (таблицы, своды — по мере выкладки).
- **Муниципальный контур** (агрегаты по МО): см. также [статью о доходах местных бюджетов](/data-sources/regional/republic-of-crimea-minfin-municipal-budget-revenues).
- Ключи связки с другими рядами: **КБК, ОКТМО, код субъекта** — по содержанию конкретных таблиц и форм.

## Периодичность обновления

Связана с **циклом составления и исполнения** республиканского бюджета и графиком отчётности; отдельные разделы обновляются по мере принятия актов и событий.

## Ограничения и особенности

- Детальные машиночитаемые срезы по исполнению могут находиться в федеральном контуре ГИИС «Электронный бюджет» — см. [федеральные наборы](/data-sources/federal/budget-gov-ru-datasets).
- Для задач «канонический текст закона о бюджете» ориентируйтесь на законодательную витрину и архив законотворческой процедуры — [Госсовет, бюджетное законотворчество](/data-sources/regional/republic-of-crimea-state-council-budget-lawmaking).

## Связанные страницы wiki

- [Нормативные документы Минфина (раздел структуры)](/data-sources/regional/republic-of-crimea-minfin-normative-acts) — сводный вход к НПА ведомства на портале Минфина.
- [Государственный Совет: бюджетное законотворчество](/data-sources/regional/republic-of-crimea-state-council-budget-lawmaking) — хронология проекта закона о бюджете.
- [«Открытый бюджет» (ifinmon)](/data-sources/regional/republic-of-crimea-open-budget-ifinmon) — реестр документов закона о бюджете (DOC/XLSX/PDF).
- [УФК по Республике Крым](/data-sources/regional/republic-of-crimea-ufk-roskazna) — казначейское сопровождение и смежные публикации.
- [Сводная страница субъекта](/data-sources/regional/subject-republic-of-crimea-sources-overview) — все карточки источников по Республике Крым.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные машиночитаемые выгрузки для сверки.

## Не путать с

- **[Портал Государственного Совета](/data-sources/regional/republic-of-crimea-state-council-portal)** — официальный портал парламента (законы, НПА парламента); Минфин — исполнительная витрина финоргана.
