---
title: 'Алтайский край: Министерство финансов (minfin.alregn.ru)'
sidebar_label: Минфин Алтайского края
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/altai-krai-minfin
source_url: 'https://minfin.alregn.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт Министерства финансов Алтайского края: материалы по краевому
  бюджету, отчёты об исполнении, методические документы и нормативные акты
  финансового блока субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-altai-krai-sources-overview
  - /data-sources/regional/altai-krai-minfin-opendata
  - /data-sources/regional/altai-krai-treasury-roskazna-altay
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Алтайский край: Министерство финансов (minfin.alregn.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Финансовый орган Алтайского края |
| Тип доступа | Официальный веб-портал |
| Основные форматы | HTML, PDF (вложения в разделах документов) |
| Оператор | Министерство финансов Алтайского края |
| Режим доступа | Открытый |

Коротко: главный **региональный** вход к **проекту и исполнению** краевого бюджета, **ведомственным** отчётам и **методике**; машиночитаемые выгрузки по каталогу — в **[открытых данных Минфина](/data-sources/regional/altai-krai-minfin-opendata)**; сверка с федеральным контуром — **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[наборы budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от глубины размещения отчётов и таблиц по годам |
| Машиночитаемость (`machine_readability`) | смешанная: преимущественно HTML/PDF; структурированные наборы — в подразделе **«Открытые данные»** |
| Юридическая значимость (`legal_significance`) | официальный финансовый орган субъекта |
| Задержка обновления (`update_lag`) | выше в отчётные даты и вокруг бюджетной сессии |
| Глубина архива (`archive_depth`) | определяется разделами «Бюджет», «Документы», архивом публикаций |
| Лицензия (`license_or_terms`) | условия сайта субъекта |

## Описание

Сайт **minfin.alregn.ru** — отправная точка для **краевого** бюджетного цикла: закон о бюджете, пояснительная записка, отчёты об исполнении и методические материалы публикуются по мере подготовки. Для **каталога открытых наборов** того же оператора используйте отдельную карточку **[Открытые данные Минфина](/data-sources/regional/altai-krai-minfin-opendata)**.

## Оператор

Министерство финансов Алтайского края — канонический вход: https://minfin.alregn.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://minfin.alregn.ru/ | HTML |
| Открытые данные (подраздел) | https://minfin.alregn.ru/opendata | HTML (каталог; файлы по ссылкам из карточки **Открытые данные**) |

## Объекты данных и показатели

- **Проект и исполнение** краевого бюджета (таблицы и пояснения — по разделам сайта).
- **Нормативные и методические** документы финансового блока.
- **Ключи связки**: финансовый год, коды бюджетной классификации (если приводятся в таблицах), ведомство-получатель средств.

## Периодичность обновления

Нерегулярно по разделам; пик при подготовке годового отчёта об исполнении бюджета и обновлении «Бюджета для граждан».

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://minfin.alregn.ru/"
```

## Связанные страницы wiki

- **[Открытые данные Минфина Алтайского края](/data-sources/regional/altai-krai-minfin-opendata)** — каталог наборов и файловые выгрузки.
- **[УФК по Алтайскому краю](/data-sources/regional/altai-krai-treasury-roskazna-altay)** — казначейское сопровождение на территории субъекта.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — федеральная отчётность и открытые наборы.
- **[Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемые ряды для сопоставления.
- **[Сводная страница субъекта](/data-sources/regional/subject-altai-krai-sources-overview)** — все источники по Алтайскому краю в wiki.

## Не путать с

- **[Открытые данные Минфина](/data-sources/regional/altai-krai-minfin-opendata)** — акцент на **каталоге наборов** и файлах; эта карточка — **общий** портал ведомства.
