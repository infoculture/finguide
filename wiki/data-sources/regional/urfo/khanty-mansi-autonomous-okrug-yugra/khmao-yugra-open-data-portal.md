---
title: "ХМАО — Югра: портал открытых данных (data.admhmao.ru)"
sidebar_label: "Открытые данные Югры (data.admhmao.ru)"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-open-data-portal
source_url: "https://data.admhmao.ru/"
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
source_authority: regional
data_completeness: partial
machine_readability: Каталог наборов; фактические форматы зависят от набора (CSV/JSON/XLSX по карточкам)
description: >-
  Официальный портал открытых данных Ханты-Мансийского автономного округа — Югры: каталог наборов органов власти округа,
  включая наборы с бюджетной и финансовой тематикой.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-state-programs-portal
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# ХМАО — Югра: портал открытых данных

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружные** открытые данные (витрина каталога) |
| Тип доступа | Портал каталога и файловые выгрузки по наборам |
| Основные форматы | **HTML** каталога; у наборов — **CSV**, **JSON**, **XLSX** (по паспортам) |
| Оператор | **Органы государственной власти ХМАО — Югры** (портал на домене **admhmao.ru**) |
| Режим доступа | Открытый |

Коротко: **предпочтительная точка** для поиска **машиночитаемых** наборов округа; бюджетные агрегаты дополнительно сверяйте с [федеральной витриной «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** на уровне портала — зависит от загрузивших набор ведомств |
| Машиночитаемость (`machine_readability`) | **Смешанная**: каталог HTML + файлы по наборам |
| Юридическая значимость (`legal_significance`) | **Официальная** окружная публикация открытых данных |
| Задержка обновления (`update_lag`) | Задаётся метаданными каждого набора |
| Глубина архива (`archive_depth`) | Различается по наборам |
| Лицензия (`license_or_terms`) | Указывается в карточке набора на портале (при наличии) |

## Описание

Портал **data.admhmao.ru** агрегирует **наборы открытых данных** субъекта: паспорта, версии файлов, ответственные органы. Для финансового анализа выбирайте наборы с тегами и описаниями, явно относящимися к **бюджету**, **закупкам**, **субсидиям** и т.п.

## Оператор

**Портал открытых данных Ханты-Мансийского автономного округа — Югры** — https://data.admhmao.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Каталог наборов | https://data.admhmao.ru/ | HTML |

## Объекты данных и показатели

- **Строка каталога** = один **набор** с метаданными и ссылками на файлы.
- **Ключи связки** зависят от набора: **ОКТМО**, **КБК**, год, код программы и др. (см. паспорт набора).
- Для **сопоставимости с федеральным** контуром используйте [наборы budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets).

## Периодичность обновления

Для каждого набора задаётся в **метаданных** на портале; единого правила для всего каталога нет.

## Ограничения и особенности

- Качество и **полнота полей** различаются по ведомствам-владельцам наборов.
- Не все показатели окружного бюджета обязательно дублируются в открытых данных — часть остаётся в **PDF/HTML** на [сайте Депфина](/data-sources/regional/khmao-yugra-depfin).

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-opendata-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://data.admhmao.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — нормативные и отчётные материалы вне машинных наборов.
- [Портал госпрограмм](/data-sources/regional/khmao-yugra-state-programs-portal) — контекст целевых расходов.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральная витрина для сверки.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.
