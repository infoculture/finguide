---
title: "Публичные инвестиции и ФАИП: наборы и контроль исполнения"
sidebar_label: "Публичные инвестиции и ФАИП"
tags: [data-source, federal, programs]
last_updated: 2026-07-16
description: "Маршрут от перечней объектов ФАИП к бюджетным обязательствам, кассовому исполнению и контрактам."
slug: /data-sources/federal/public-investment-faip
content_type: data_source
entity_type: data-source
source_url: "https://budget.gov.ru/epbs/opendata/7710568760-FAIP0506604/meta.json"
data_source_kind: mixed
jurisdiction: federal
access: open
formats: ["json", "csv", "pdf"]
status: current
last_verified: 2026-07-16
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: reporting-cycle
archive_depth: dataset-specific
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/minfin
  - type: available_in
    target: /information-systems/federal/giis-eb
related_pages:
  - /organizations/minstroy
  - /data-sources/federal/opendata-7710568760-FAIP0506604
  - /data-sources/federal/perechen-obektov-kapitalnogo-stroitelstva
---

# Публичные инвестиции и ФАИП: наборы и контроль исполнения

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральные объекты и бюджетные инвестиции |
| Тип доступа | Наборы ГИИС ЭБ, перечни и документы |
| Основные форматы | JSON, CSV, PDF |
| Оператор | Минфин и ответственные ГРБС |
| Режим доступа | Открытый |

Коротко: источник связывает плановый перечень объектов с бюджетными обязательствами и исполнением. Наличие объекта в ФАИП не доказывает заключение контракта или полный кассовый расход.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки | 2026-07-16 |
| Полнота | Частичная: этапы проекта распределены между источниками |
| Машиночитаемость | Смешанная |
| Юридическая значимость | Официальные публикации |
| Задержка обновления | По бюджетному и отчётному циклу |
| Глубина архива | По версиям набора и документам |
| Лицензия | Не указана единым условием |

## Описание

Базовая связка: перечень объекта → набор об исполнении обязательств ФАИП → контракт ЕИС → кассовый факт. Идентификаторы и наименования могут меняться, поэтому сохраняйте код объекта, ГРБС, регион и год.

## Оператор

[Минфин России](/organizations/minfin); отраслевой контекст — [Минстрой России](/organizations/minstroy); система — [ГИИС ЭБ](/information-systems/federal/giis-eb).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Исполнение обязательств ФАИП, ф. 0506604 | https://budget.gov.ru/epbs/opendata/7710568760-FAIP0506604/meta.json | JSON |
| Единый портал | https://budget.gov.ru/ | HTML, JSON |

## Объекты данных и показатели

- объект капитального строительства и код проекта;
- ГРБС, заказчик, регион и сроки;
- бюджетные обязательства, финансирование и исполнение;
- контракт и этап исполнения в ЕИС.

## Периодичность обновления

По изменениям программы и отчётному циклу исполнения.

## Ограничения и особенности

- названия объектов недостаточны для надёжной склейки;
- стоимость проекта, лимиты, контракт и касса — разные показатели;
- реорганизация заказчика требует контроля идентификаторов.

## Примеры доступа

```bash
curl -L --fail --silent --show-error \
  https://budget.gov.ru/epbs/opendata/7710568760-FAIP0506604/meta.json
```

## Связанные страницы wiki

- [Набор ФАИП 0506604](/data-sources/federal/opendata-7710568760-FAIP0506604) — паспорт и версии.
- [Перечень объектов капитального строительства](/data-sources/federal/perechen-obektov-kapitalnogo-stroitelstva) — документный плановый слой.
- [Сведения о закупках и контрактах](/data-sources/federal/procurement) — контрактный след.
- [Бюджетные инвестиции](/glossary/budget-investments) — смысл инструмента финансирования.
