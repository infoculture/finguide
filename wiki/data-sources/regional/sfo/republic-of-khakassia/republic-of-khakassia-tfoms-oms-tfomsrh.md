---
title: 'Республика Хакасия: ТФОМС (tfomsrh.ru)'
sidebar_label: ТФОМС Хакасии
tags:
  - data-source
  - regional
  - social
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-tfoms-oms-tfomsrh
source_url: 'https://tfomsrh.ru/'
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
  Территориальный фонд обязательного медицинского страхования Республики Хакасия: нормативные
  материалы по ОМС, отчётность фонда и публичные разделы с финансовой информацией.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: ТФОМС (tfomsrh.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** внебюджетный фонд **ОМС** |
| Тип доступа | Официальный **сайт** ТФОМС |
| Основные форматы | HTML, **PDF** отчётности |
| Оператор | Территориальный фонд ОМС Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **официальный** источник по **ОМС** на территории республики, включая **финансовую** отчётность фонда; для **консолидированного** регионального бюджета сверяйтесь с **Минфином** и **budget.gov.ru**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — охват определяется раскрытием **ТФОМС** |
| Машиночитаемость (`machine_readability`) | HTML/PDF |
| Юридическая значимость (`legal_significance`) | официальный **региональный** фонд |
| Задержка обновления (`update_lag`) | регламенты отчётности фонда |
| Глубина архива (`archive_depth`) | зависит от разделов сайта |
| Лицензия (`license_or_terms`) | условия **tfomsrh.ru** |

## Описание

Исходная таблица указывала **http://tfomsrh.ru/**; канонический вход для карточки — **HTTPS**-версия **https://tfomsrh.ru/** (при недоступности проверьте редирект с HTTP).

## Оператор

Территориальный фонд обязательного медицинского страхования Республики Хакасия — https://tfomsrh.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://tfomsrh.ru/ | HTML |

## Объекты данных и показатели

- **Отчёты** о финансовых результатах деятельности фонда (годовые и периодические — по факту публикации).
- **Тарифы**, **программы** ОМС, **нормативные** документы.
- **Ключи связки**: **год**, показатели **ОМС**; для связки с **консолидированным бюджетом** — через **Минфин** и **федеральные** наборы.

## Периодичность обновления

По мере **утверждения** программ и **публикации** отчётности на сайте.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://tfomsrh.ru/" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Минфин (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — республиканский бюджетный контур.
- [budget.gov.ru — регионы](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions) — открытые бюджетные данные.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **Федеральные витрины и единые реестры ОМС** (федеральный уровень) — эта карточка про **региональный** сайт **ТФОМС Республики Хакасия**; для сопоставления с **консолидированным бюджетом** используйте **[budget.gov.ru](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)** и **[каталог наборов](/data-sources/federal/budget-gov-ru-datasets)**.
