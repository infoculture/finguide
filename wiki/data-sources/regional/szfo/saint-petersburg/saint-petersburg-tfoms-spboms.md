---
title: 'Санкт-Петербург: территориальный фонд ОМС (spboms.ru)'
sidebar_label: ТФОМС Санкт-Петербурга
tags:
  - data-source
  - regional
  - social
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-tfoms-spboms
source_url: 'https://spboms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Официальный сайт ТФОМС Санкт-Петербурга: тарифы, программы медицинской
  помощи, отчётность и разъяснения по обязательному медицинскому страхованию на
  территории города.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Санкт-Петербург: территориальный фонд ОМС (spboms.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — региональный контур **обязательного медицинского страхования** (ТФОМС) |
| Тип доступа | Публичный корпоративный сайт фонда |
| Основные форматы | **HTML**; вложения **PDF** (отчёты, методические материалы) |
| Оператор | **Территориальный фонд обязательного медицинского страхования Санкт-Петербурга** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный** вход к материалам ТФОМС по **ОМС** города: программы, тарифы, отчётность. Для **консолидированного бюджета** и **казначейского исполнения** субъекта используйте **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и федеральные открытые наборы.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** относительно полного контура финансов субъекта — узкий предмет (ОМС) |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML/PDF**; стабильных открытых API витрины нет |
| Юридическая значимость (`legal_significance`) | официальный оператор ТФОМС |
| Задержка обновления (`update_lag`) | зависит от раздела (отчёты — по регламенту фонда) |
| Глубина архива (`archive_depth`) | варьируется по разделам |
| Лицензия (`license_or_terms`) | см. условия на сайте оператора |

## Описание

Сайт публикует сведения о **деятельности фонда**, **программах ОМС**, **тарифах** и **отчётности**. Это **не** замена бюджетной отчётности Минфина или казначейства: показатели ОМС связывайте с **[бюджетом города](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и нормативной базой отдельно.

## Оператор

**Территориальный фонд обязательного медицинского страхования Санкт-Петербурга** — https://spboms.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта | https://spboms.ru/ | HTML |

## Объекты данных и показатели

- **Программы/statements** по ОМС, методические материалы, планы закупок услуг (где публикуются).
- **Отчёты** фонда в разрезе годов (часто PDF).
- Связка с **бюджетом субъекта** — через документы **[Законодательного Собрания](/data-sources/regional/saint-petersburg-legislative-assembly-budget)** и **[Комитета финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**, а не напрямую из HTML-страниц ТФОМС.

## Периодичность обновления

По мере публикаций фонда и нормативного календаря отчётности ОМС.

## Ограничения и особенности

- Структура меню на `spboms.ru` может меняться при редизайне — закладывайте **канонический корень** домена.
- Массовые машиночитаемые ряды по сборам и расходам бюджета субъекта ищите в **[открытых данных «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)** с фильтром по субъекту, а не только на сайте ТФОМС.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://spboms.ru/"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-saint-petersburg-sources-overview) — все карточки источников по Санкт-Петербургу.
- [Комитет финансов СПб (fincom.gov.spb.ru)](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджет и отчётность города.
- [Открытые данные «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — федеральная витрина наборов по бюджетному циклу.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика навигации по региональному контуру.

## Не путать с

- **[Портал открытых данных города](/data-sources/regional/saint-petersburg-open-data-gov-spb)** — смешанные тематические наборы; ТФОМС — отдельный оператор ОМС.
