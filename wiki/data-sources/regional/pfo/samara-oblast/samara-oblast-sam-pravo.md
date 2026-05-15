---
title: 'Самарская область: Банк нормативных правовых актов (sam-pravo.ru)'
sidebar_label: Банк НПА (sam-pravo.ru)
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/samara-oblast-sam-pravo
source_url: 'https://sam-pravo.ru/'
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
  Региональный банк нормативных правовых актов Самарской области: законы области,
  постановления и распоряжения органов власти, в том числе по бюджету и
  государственным расходам.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-samara-oblast-sources-overview
  - /data-sources/regional/samara-oblast-legislature-samgd
  - /data-sources/regional/samara-oblast-minfin
  - /data-sources/regional/samara-oblast-budget-for-citizens
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Самарская область: Банк нормативных правовых актов (sam-pravo.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** контур Самарской области (НПА субъекта и иные акты в банке) |
| Тип доступа | Публичный **веб-портал** банка НПА |
| Основные форматы | HTML, PDF (вложения к актам, если публикуются) |
| Оператор | Витрина **sam-pravo.ru** (см. правовые оговорки на сайте) |
| Режим доступа | Открытый просмотр |

Коротко: удобная **точка входа** к **текстам** региональных НПА, включая **бюджетное** законодательство; для **агрегированных финансовых рядов** используйте **[Минфин области](/data-sources/regional/samara-oblast-minfin)**, **[бюджет для граждан](/data-sources/regional/samara-oblast-budget-for-citizens)** и федеральные открытые наборы.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от полноты загрузки актов и вложений |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; **API** в карточке не фиксировался |
| Юридическая значимость (`legal_significance`) | официальные и смежные тексты НПА (проверяйте статус конкретного документа) |
| Задержка обновления (`update_lag`) | по мере официального опубликования |
| Глубина архива (`archive_depth`) | задаётся наполнением банка |
| Лицензия (`license_or_terms`) | условия **sam-pravo.ru** |

## Описание

**sam-pravo.ru** ориентирован на **поиск и чтение** нормативных актов. Для связки с **аналитикой исполнения бюджета** обычно нужен дополнительный контур: отчётность Минфина, казначейство, федеральные наборы **budget.gov.ru**.

## Оператор

Витрина банка НПА — канонический вход: https://sam-pravo.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница банка | https://sam-pravo.ru/ | HTML |

## Объекты данных и показатели

- **Тексты** законов Самарской области, постановлений и иных НПА (включая бюджетную сферу).
- **Метаданные** документа (вид акта, дата, номер) — по структуре сайта.
- **Не** заменяет **финансовую отчётность** и **CSV/JSON**-выгрузки.

## Периодичность обновления

По мере **опубликования** и **внесения изменений** в НПА.

## Ограничения и особенности

- Проверка доступности (2026-05-14): главная страница отвечает **HTTP 200** при запросе из скрипта; при массовой загрузке соблюдайте **robots.txt** и нагрузку на сервер.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://sam-pravo.ru/"
```

## Связанные страницы wiki

- [Самарская Губернская Дума](/data-sources/regional/samara-oblast-legislature-samgd) — законодательная инициатива и проекты законов о бюджете.
- [Министерство финансов Самарской области](/data-sources/regional/samara-oblast-minfin) — бюджетный цикл и отчётность.
- [Бюджет для граждан](/data-sources/regional/samara-oblast-budget-for-citizens) — агрегированные показатели для широкой аудитории.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые федеральные ряды для сверки.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-samara-oblast-sources-overview) — все карточки по Самарской области.

## Не путать с

- **[Сайт Губернской Думы](/data-sources/regional/samara-oblast-legislature-samgd)** — парламентский портал; **sam-pravo.ru** может дублировать часть материалов, но это **отдельная** витрина банка НПА.
