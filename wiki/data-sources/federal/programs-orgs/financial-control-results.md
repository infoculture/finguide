---
title: "Результаты государственного финансового контроля"
sidebar_label: "Результаты финконтроля"
tags: [data-source, federal, control]
last_updated: 2026-07-16
description: "Навигатор по наборам бюджетных нарушений, результатам внутреннего и внешнего финансового контроля и материалам аудита."
slug: /data-sources/federal/financial-control-results
content_type: data_source
entity_type: data-source
source_url: "https://budget.gov.ru/epbs/opendata/7710568760-BUDGETVIOLATIONS/meta.json"
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats: ["json", "csv", "pdf"]
status: current
last_verified: 2026-07-16
jurisdiction_level: multilevel
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: reporting-cycle
archive_depth: dataset-specific
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/minfin
  - type: related_to
    target: /organizations/accounts-chamber
related_pages:
  - /data-sources/federal/opendata-7710568760-BUDGETVIOLATIONS
  - /data-sources/federal/opendata-7710568760-RESEXTFINCONTROL
  - /data-sources/federal/accounts-chamber-opendata
---

# Результаты государственного финансового контроля

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный, региональный и муниципальный в составе наборов |
| Тип доступа | Наборы ГИИС ЭБ и материалы контрольных органов |
| Основные форматы | JSON, CSV, PDF |
| Оператор | Минфин; внешние материалы — Счётная палата и КСО |
| Режим доступа | Открытый |

Коротко: навигатор разделяет бюджетные нарушения, результаты внутреннего контроля, внешний аудит и последующие меры. Количество нарушений нельзя напрямую превращать в сумму ущерба или возврата.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки | 2026-07-16 |
| Полнота | Частичная: периметры органов различаются |
| Машиночитаемость | Наборы плюс документы |
| Юридическая значимость | Официальные публикации |
| Задержка обновления | По контрольному и отчётному циклу |
| Глубина архива | По версиям и архивам органов |
| Лицензия | Не указана единым условием |

## Описание

Сопоставление строится по органу контроля, объекту, периоду, виду нарушения и принятой мере. Материал аудита может содержать более глубокую методику, чем агрегированный набор.

## Оператор

[Минфин России](/organizations/minfin) для каталога ГИИС ЭБ; [Счётная палата](/organizations/accounts-chamber) для федерального внешнего аудита.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Бюджетные нарушения | https://budget.gov.ru/epbs/opendata/7710568760-BUDGETVIOLATIONS/meta.json | JSON |
| Результаты внешнего контроля | https://budget.gov.ru/epbs/opendata/7710568760-RESEXTFINCONTROL/meta.json | JSON |

## Объекты данных и показатели

- контрольное мероприятие и объект контроля;
- вид нарушения, сумма и период в опубликованном составе;
- представление, предписание или иная мера;
- устранение и возврат средств, если раскрыты отдельно.

## Периодичность обновления

По завершению мероприятий и циклу агрегированной отчётности.

## Ограничения и особенности

- выявленная сумма, ущерб и возмещённая сумма не взаимозаменяемы;
- внутренний и внешний контроль имеют разные полномочия;
- одинаковое наименование нарушения не гарантирует одинаковую методику.

## Примеры доступа

```bash
curl -L --fail --silent --show-error \
  https://budget.gov.ru/epbs/opendata/7710568760-BUDGETVIOLATIONS/meta.json
```

## Связанные страницы wiki

- [Бюджетные нарушения](/data-sources/federal/opendata-7710568760-BUDGETVIOLATIONS) — паспорт набора.
- [Результаты внешнего финансового контроля](/data-sources/federal/opendata-7710568760-RESEXTFINCONTROL) — отдельный контрольный периметр.
- [Открытые данные Счётной палаты](/data-sources/federal/accounts-chamber-opendata) — материалы внешнего аудита.
