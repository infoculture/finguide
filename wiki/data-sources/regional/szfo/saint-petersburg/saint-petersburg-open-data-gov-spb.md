---
title: 'Санкт-Петербург: открытые данные (раздел на gov.spb.ru)'
sidebar_label: Открытые данные СПб
tags:
  - data-source
  - regional
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-open-data-gov-spb
source_url: >-
  https://www.gov.spb.ru/gov/otrasl/c_information/napravlenie-deyatelnosti-komiteta/otkrytye-dannye
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - csv
  - json
  - xlsx
  - html
status: current
last_verified: 2026-05-15
description: >-
  Региональная витрина открытых данных Санкт-Петербурга на портале Администрации:
  каталог наборов, паспорта, ссылки на файлы и обновления; включает финансовые и
  смежные тематики.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /information-systems/federal/data-gov-ru
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: открытые данные (раздел на gov.spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **муниципально-региональный** каталог открытых наборов |
| Тип доступа | Веб-каталог + файлы по ссылкам из карточек наборов |
| Основные форматы | **CSV**, **JSON**, **XLSX** (по наборам); оболочка **HTML** |
| Оператор | **Администрация Санкт-Петербурга** (витрина открытых данных) |
| Режим доступа | Открытый |

Коротко: **точка входа** для **машиночитаемых** наборов города, включая **финансы**, **закупки** (агрегировано), **транспорт** и др. Для **юридически значимых** бюджетных PDF и пояснений к закону о бюджете см. **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **переменная по наборам** — зависит от паспорта и поставщика |
| Машиночитаемость (`machine_readability`) | **высокая** там, где выданы CSV/JSON/XLSX с метаданными |
| Юридическая значимость (`legal_significance`) | официальная витрина открытых данных города |
| Задержка обновления (`update_lag`) | указывается в карточке набора (если заполнено) |
| Глубина архива (`archive_depth`) | зависит от набора |
| Лицензия (`license_or_terms`) | см. паспорт набора на витрине |

## Описание

Раздел на **gov.spb.ru** дублирует логику региональных OGD-порталов: **каталог**, **поиск**, **паспорта** наборов. Финансовые наборы полезно **сопоставлять** с материалами **[Комитета финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и федеральной витриной **[data.gov.ru](/information-systems/federal/data-gov-ru)** для дублей поставщиков.

## Оператор

**Администрация Санкт-Петербурга** — раздел «Открытые данные»:  
https://www.gov.spb.ru/gov/otrasl/c_information/napravlenie-deyatelnosti-komiteta/otkrytye-dannye

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Витрина открытых данных | https://www.gov.spb.ru/gov/otrasl/c_information/napravlenie-deyatelnosti-komiteta/otkrytye-dannye | HTML |

## Объекты данных и показатели

- **Паспорта наборов**: тематика, периодичность, формат, ответственный орган.
- **Файлы** наборов (часто CSV/JSON/XLSX) — структура **не унифицирована** между наборами.
- Связка с **бюджетом**: поиск по ключевым словам («бюджет», «расходы», «доходы», «адресная инвестиционная программа» и т.п.).

## Периодичность обновления

**По наборам** — см. поле периодичности в паспорте на витрине.

## Ограничения и особенности

- Длинные URL разделов **gov.spb.ru** исторически меняются — при ошибке 404 ищите «открытые данные» с **главной** портала.
- Часть наборов может **дублироваться** на `data.gov.ru` с иным паспортом — сверяйте **дату** и **поставщика**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.gov.spb.ru/gov/otrasl/c_information/napravlenie-deyatelnosti-komiteta/otkrytye-dannye"
```

## Связанные страницы wiki

- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — первичные бюджетные документы.
- [Федеральный портал открытых данных (как ИС)](/information-systems/federal/data-gov-ru) — агрегатор наборов разных уровней.
- [Открытые данные «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — федеральный бюджетный контур.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Открытый бюджет](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)** — прежде всего **объяснение** и визуализация; каталог OGD — про **файлы** и **паспорта**.
