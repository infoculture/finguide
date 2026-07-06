---
title: 'Республика Хакасия: портал Правительства (r-19.ru) и «Бюджет для граждан»'
sidebar_label: Правительство r-19.ru
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-government-citizen-budget-r19
source_url: 'https://r-19.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Официальный портал Правительства Республики Хакасия: публикации для граждан, в том числе
  материалы «Бюджет для граждан» и смежные разделы об исполнении бюджета.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: портал Правительства (r-19.ru) и «Бюджет для граждан»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** исполнительный контур |
| Тип доступа | Официальный **портал** Правительства |
| Основные форматы | HTML, **PDF** вложения |
| Оператор | Правительство Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **коммуникационная** и **документальная** витрина исполнительной власти, включая **«Бюджет для граждан»**; для **скачиваемых открытых наборов** по строкам бюджета опирайтесь на **[budget.gov.ru](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — фокус на **объяснении** бюджета, не на полном API |
| Машиночитаемость (`machine_readability`) | HTML/PDF |
| Юридическая значимость (`legal_significance`) | официальный **региональный** портал |
| Задержка обновления (`update_lag`) | привязана к **бюджетному циклу** |
| Глубина архива (`archive_depth`) | зависит от разделов портала |
| Лицензия (`license_or_terms`) | условия **r-19.ru** |

## Описание

Корень **r-19.ru** — стартовая точка для **новостей**, **документов** и разделов, в т.ч. связанных с **бюджетом для граждан**. Узловой раздел **Минфина** вынесен в отдельную **[карточку](/data-sources/regional/republic-of-khakassia-minfin-portal-r19)**.

## Оператор

Правительство Республики Хакасия — https://r-19.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная портала | https://r-19.ru/ | HTML |

## Объекты данных и показатели

- **Пояснительные** записки, **брошюры**, **инфографика** для граждан.
- **Ссылки** на нормативные акты и **отчёты** об исполнении (часто PDF).
- **Ключи связки**: **год** бюджета; для машинного анализа — переход к **КБК/ОКТМО** через **федеральные** наборы.

## Периодичность обновления

По мере **подготовки** и **утверждения** бюджетной документации.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://r-19.ru/" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Минфин (раздел на r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — финансовый блок.
- [budget.gov.ru — регионы](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions) — открытые бюджетные данные.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[budget.gov.ru](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)** — **машиночитаемые** наборы; портал **r-19.ru** — прежде всего **человекочитаемые** материалы.
