---
title: 'Республика Северная Осетия — Алания: открытые данные на портале республики'
sidebar_label: Открытые данные (alania.gov.ru)
tags:
  - data-source
  - regional
  - budget
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-north-ossetia-alania-open-data-alania-gov-ru
source_url: 'https://alania.gov.ru/opendata'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - csv
  - json
  - xlsx
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Региональный каталог открытых данных на официальном портале РСО-Алания: перечень наборов,
  паспорта и ссылки на файлы; наполнение и форматы зависят от ведомств-владельцев наборов.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-north-ossetia-alania-sources-overview
  - /data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru
  - /data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Северная Осетия — Алания: открытые данные на портале республики

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Северная Осетия — Алания** — **региональный** каталог **открытых данных** |
| Тип доступа | Публичный **каталог** с **файлами** по наборам |
| Основные форматы | **HTML** каталога; у **наборов** — **CSV**, **JSON**, **XLSX** и др. (по паспортам) |
| Оператор | **Официальный портал** органов государственной власти **РСО-Алания** |
| Режим доступа | Открытый |

Коротко: **точка входа** к **региональным** открытым наборам на **alania.gov.ru**. Для **федерального** бюджетного контура используйте **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**; для **НПА** — **[раздел «Документы»](/data-sources/regional/republic-of-north-ossetia-alania-npa-documents-alania-gov-ru)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 (**HTTP 200** для **/opendata**) |
| Полнота (`data_completeness`) | **частичная** — перечень **наборов** меняется; **бюджет** может быть представлен **неполно** относительно **федеральных** витрин |
| Машиночитаемость (`machine_readability`) | **смешанный** — зависит от **конкретного** набора (**CSV**/**JSON**/…) |
| Юридическая значимость (`legal_significance`) | **официальный** региональный **каталог** |
| Задержка обновления (`update_lag`) | **разная** по наборам — смотрите **паспорт** набора |
| Глубина архива (`archive_depth`) | зависит от **политики** версий файлов |
| Лицензия (`license_or_terms`) | указывается в **паспорте** набора на портале |

## Описание

Каталог **открытых данных** агрегирует **наборы** разных **ведомств** республики. Для **финансовой** аналитики полезны наборы, связанные с **бюджетом**, **закупками**, **субсидиями** и **муниципалитетом** — при наличии в каталоге. **Сверка** с **федеральными** рядами по **плану/факту** бюджета субъекта обычно требует **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Оператор

Официальный портал Республики Северная Осетия — Алания — https://alania.gov.ru/opendata

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог открытых данных | https://alania.gov.ru/opendata | HTML |

## Объекты данных и показатели

- **Именованные** наборы с **паспортами** (описание полей, периодичность, ответственный).
- **Пересечение** с **документами** и **отчётами** на сайтах **Минфина** и **федеральных** операторов — проверяйте **источник** первичной публикации.

## Периодичность обновления

**Индивидуально** по каждому **набору** (см. паспорт на портале).

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-alania-opendata-check/1.0" \
  "https://alania.gov.ru/opendata"
```

## Связанные страницы wiki

- [Минфин РСО-Алания](/data-sources/regional/republic-of-north-ossetia-alania-minfin-alania-gov-ru) — **контекст** бюджетной политики и **файлы** ведомства.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральные** машиночитаемые ряды.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.

## Не путать с

- **[УФНС: региональный раздел nalog.gov.ru](/data-sources/regional/republic-of-north-ossetia-alania-ufns-nalog-gov-ru-region-15)** — **федеральный** налоговый сайт, а не **региональный** каталог **opendata**.
