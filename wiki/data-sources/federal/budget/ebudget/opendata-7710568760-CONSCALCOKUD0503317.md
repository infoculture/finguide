---
title: "Консолидируемые расчеты по ОКУД 0503317"
sidebar_label: "Консолидируемые расчеты по ОКУД 0503317"
tags:
  - data-source
  - federal
  - budget
last_updated: 2026-05-12T00:00:00.000Z
last_verified: 2026-05-12
slug: '/data-sources/federal/opendata-7710568760-CONSCALCOKUD0503317'
source_url: "https://budget.gov.ru/epbs/opendata/7710568760-CONSCALCOKUD0503317/meta.json"
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - json
status: current
related_information_system: /information-systems/federal/giis-eb
description: "Консолидируемые расчеты по ОКУД 0503317 — именованный открытый набор каталога budget.gov.ru (7710568760-CONSCALCOKUD0503317); паспорт набора meta.json и файловые версии в контуре ГИИС «Электронный бюджет»."
content_type: data_source
entity_type: data-source
source_authority: federal
rag_priority: low
jurisdiction_level: federal
data_completeness: unknown
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/minfin
  - type: available_in
    target: /information-systems/federal/giis-eb
---

# Консолидируемые расчеты по ОКУД 0503317

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный каталог открытых данных **ГИИС «Электронный бюджет»**; конкретный охват субъектов и периодов — по паспорту набора |
| Тип доступа | Смешанный: HTML-карточка набора, паспорт **JSON** (`meta.json`), файловые выгрузки и REST там, где раскрыто оператором |
| Основные форматы | json (фактические версии файлов — в блоке `data` паспорта) |
| Оператор | **Минфин России** / **Федеральное казначейство** — см. карточку ИС |
| Режим доступа | Открытый для опубликованных материалов каталога |

Коротко: **Консолидируемые расчеты по ОКУД 0503317** — отдельная запись каталога `list.json` с постоянным идентификатором **`7710568760-CONSCALCOKUD0503317`**; для автоматизации начните с паспорта `meta.json` и сверьте поля с задачей анализа (план, факт, НСИ, отчётность и т.д.).

## Описание

Карточка фиксирует **канонические URL** набора в витрине открытых данных `budget.gov.ru`. Содержательное описание показателей, методики и лицензии содержится **только** в актуальном паспорте на портале и в сопутствующих НПА — здесь намеренно нет копии полей, чтобы не рассинхронизироваться с оператором.

## Оператор

Публикация ведётся в контуре **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**. Сводный обзор каталога и типовых ограничений — в **[наборах данных портала](/data-sources/federal/budget-gov-ru-datasets)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Карточка набора (витрина) | https://budget.gov.ru/epbs/faces/p/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/opendata?code=7710568760-CONSCALCOKUD0503317 | HTML |
| Паспорт набора | https://budget.gov.ru/epbs/opendata/7710568760-CONSCALCOKUD0503317/meta.json | JSON |
| Каталог всех наборов | https://budget.gov.ru/epbs/opendata/list.json | JSON |

## Объекты данных и показатели

Строка набора, ключи связки (**КБК**, **ОКТМО**, **ИНН**, коды бюджета и т.д.) и периодичность версий задаются **в паспорте** и в файлах конкретной публикации. Перед стыковкой с **[казначейскими отчётами](/data-sources/federal/roskazna-reports)** или **[открытыми данными Минфина](/data-sources/federal/minfin-opendata)** сверяйте определение показателя и тип (план / факт / справочник).

## Периодичность обновления

Указывается в паспорте набора (`meta.json`) и может меняться между версиями; общие замечания — в разделе ограничений **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Ограничения и особенности

- Запросы к `list.json` и `meta.json` без типичного **User-Agent** браузера иногда отвечают **403**; в скриптах задавайте заголовок `User-Agent` (см. **[обзорную карточку каталога](/data-sources/federal/budget-gov-ru-datasets)**).
- Поле `link` в элементе каталога может содержать префикс `null/` — собирайте URL паспорта от корня `https://budget.gov.ru/epbs/opendata/`.
- Публичная выгрузка **не обязана** повторять полный внутренний документооборот ИС.

## Примеры доступа

Сохранить паспорт набора и просмотреть ключевые поля:

```bash
curl -sS -A "Mozilla/5.0" "https://budget.gov.ru/epbs/opendata/7710568760-CONSCALCOKUD0503317/meta.json" | python3 -m json.tool | head -60
```

## Связанные страницы wiki

- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — обзор каталога, типовые объекты и ограничения.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — оператор, подсистемы, границы системы.
- **[Работа с API budget.gov.ru](/howto/access/budget-gov-api)** — программный доступ к каталогу и объектам там, где он документирован.
