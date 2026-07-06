---
title: 'Республика Хакасия: Единый портал бюджетной системы (budget.gov.ru — регионы)'
sidebar_label: budget.gov.ru — регионы
tags:
  - data-source
  - regional
  - federal
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
source_url: 'https://budget.gov.ru/%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D1%8B'
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - html
  - csv
  - json
  - xml
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Единый портал бюджетной системы Российской Федерации: раздел с выбором субъекта для доступа к
  открытым бюджетным данным и отчётности с разрезом по Республике Хакасия.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: Единый портал бюджетной системы (budget.gov.ru — регионы)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральная** витрина с **региональным** разрезом (в т.ч. Республика Хакасия) |
| Тип доступа | Веб-интерфейс + **каталог** открытых наборов |
| Основные форматы | HTML, **CSV/JSON/XML** в наборах (зависит от комплекта) |
| Оператор | Минфин России / операторы ГИИС «Электронный бюджет» |
| Режим доступа | Открытый |

Коротко: **главный машиночитаемый** контур для сверки **республиканских** рядов с **федеральной** отчётностью; региональные PDF на **r-19.ru** дополняют, но **не заменяют** паспорта наборов здесь.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — набор **зависит** от выбранного комплекта и года |
| Машиночитаемость (`machine_readability`) | **высокая** для опубликованных открытых наборов |
| Юридическая значимость (`legal_significance`) | официальная **федеральная** витрина |
| Задержка обновления (`update_lag`) | регламенты **ГИИС ЭБ** и графики публикаций наборов |
| Глубина архива (`archive_depth`) | по **метаданным** конкретных наборов |
| Лицензия (`license_or_terms`) | условия **budget.gov.ru** / паспорт набора |

## Описание

Карточка фиксирует **точку входа** в раздел **«Регионы»** портала **budget.gov.ru**. Публичный путь в адресной строке — **кириллица** «регионы»; при копировании в скрипты используйте **percent-encoding** (как в `source_url`). После выбора **Республики Хакасия** доступны **паспорта** наборов и ссылки на **файлы**. Для **скриптов** удобнее сразу работать с **[каталогом наборов](/data-sources/federal/budget-gov-ru-datasets)** и фильтрацией по субъекту в метаданных.

## Оператор

Единый портал бюджетной системы Российской Федерации — https://budget.gov.ru/%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D1%8B

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Регионы» (кириллический путь; `/regions` отдаёт 404) | https://budget.gov.ru/%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D1%8B | HTML |
| Каталог наборов (федеральная карточка wiki) | см. [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) | JSON meta + файлы |

## Объекты данных и показатели

- **Исполнение** бюджета, **справочники**, **адресные** программы — в составе конкретных **наборов**.
- **Ключи связки**: **КБК**, **ОКТМО**, **ЕПБСУ**, идентификаторы из паспортов наборов.
- **Пробелы**: не каждый **муниципальный** показатель выгружен на федеральной витрине.

## Периодичность обновления

По **графику** обновлений наборов на **budget.gov.ru**; см. также **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://budget.gov.ru/%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D1%8B" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые наборы и meta.json.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — контур отчётности.
- [Минфин Хакасии (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — региональные PDF и справка.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Региональный портал r-19.ru](/data-sources/regional/republic-of-khakassia-government-citizen-budget-r19)** — **документы** и коммуникация; **budget.gov.ru** — **нормализованные** открытые ряды.
