---
title: 'Республика Ингушетия: Минэкономразвития — государственные программы (mineconomri.ru)'
sidebar_label: Минэконом (госпрограммы)
tags:
  - data-source
  - regional
  - programs
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-ingushetia-mineconom-state-programs
source_url: 'https://mineconomri.ru/activity/gosudarstvennye-programmy.php'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Сайт Министерства экономического развития Республики Ингушетия: раздел о государственных
  программах республики — паспорта, отчёты и сопутствующие документы с показателями финансирования
  (по мере размещения на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-ingushetia-sources-overview
  - /data-sources/regional/republic-of-ingushetia-minfin-mfri
  - /data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Ингушетия: Минэкономразвития — государственные программы (mineconomri.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Ингушетия** — **государственные программы** республики и их **публичные** материалы |
| Тип доступа | Публичный **веб**-раздел министерства |
| Основные форматы | **HTML**; **PDF** и др. по ссылкам |
| Оператор | **Министерство экономического развития Республики Ингушетия** |
| Режим доступа | Открытый просмотр |

Коротко: **ведомственная** витрина **региональных** госпрограмм: **документы** и **показатели** по мере публикации. Для **консолидированного** бюджетного цикла см. **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** и **[«Открытый бюджет»](/data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для страницы госпрограмм) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** выкладки **паспортов** и **отчётов** |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML**/файлы; **единого** API нет |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **регионального** органа исполнительной власти |
| Задержка обновления (`update_lag`) | зависит от **цикла** отчётности по программам |
| Глубина архива (`archive_depth`) | определяется **архивом** раздела |
| Лицензия (`license_or_terms`) | условия **mineconomri.ru** |

## Описание

Раздел **«Государственные программы»** предназначен для публикации **паспортов**, **отчётов** о реализации и **сопутствующих** материалов. **Финансовые** объёмы внутри программ **согласуйте** с **бюджетной** документацией **[Минфина](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** и **федеральными** открытыми рядами.

## Оператор

Министерство экономического развития Республики Ингушетия — https://mineconomri.ru/activity/gosudarstvennye-programmy.php

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Государственные программы | https://mineconomri.ru/activity/gosudarstvennye-programmy.php | HTML / PDF (по ссылкам) |

## Объекты данных и показатели

- **Паспорта** и **отчёты** по **государственным** программам республики.
- **Показатели** финансирования — по таблицам внутри документов; для **сквозной** бюджетной аналитики используйте **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

По мере **утверждения** изменений программ и **отчётных** кампаний.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-mineconom-ing-check/1.0" \
  "https://mineconomri.ru/activity/gosudarstvennye-programmy.php"
```

## Связанные страницы wiki

- [Минфин Ингушетии](/data-sources/regional/republic-of-ingushetia-minfin-mfri) — **бюджет** и **открытые** материалы.
- [Официальный портал республики](/data-sources/regional/republic-of-ingushetia-official-portal-ingushetia-ru) — **агрегирующая** витрина власти.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.

## Не путать с

- **[Минфин](/data-sources/regional/republic-of-ingushetia-minfin-mfri)** — **консолидированный** бюджет и **казначейская** отчётность; **Минэконом** — **программный** контур **развития**.
