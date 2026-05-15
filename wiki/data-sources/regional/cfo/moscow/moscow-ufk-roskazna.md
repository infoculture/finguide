---
title: "Город Москва: Управление Федерального казначейства (moscow.roskazna.gov.ru)"
sidebar_label: УФК Москвы (Росказна)
tags:
  - data-source
  - regional
  - treasury
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-ufk-roskazna
source_url: "https://moscow.roskazna.gov.ru/"
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; массовые открытые ряды исполнения — в отчётах и ГИИС «Электронный бюджет»
description: >-
  Официальный сайт УФК по г. Москве: новости территориального управления, сервисы и ссылки на
  федеральные витрины Казначейства; точка входа к казначейскому сопровождению на территории города.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /organizations/federal-treasury
  - /data-sources/federal/roskazna-reports
  - /information-systems/federal/giis-eb
  - /data-sources/regional/moscow-findep
---

# Город Москва: Управление Федерального казначейства (moscow.roskazna.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Территориальное управление Федерального казначейства** по **г. Москва** |
| Тип доступа | Публичный сайт **moscow.roskazna.gov.ru** |
| Основные форматы | **HTML** |
| Оператор | **УФК по г. Москве** |
| Режим доступа | Открытые разделы; сервисы клиентов — по правилам Росказны |

Коротко: **региональный вход** к **новостям и сервисам** УФК. Для **машиночитаемого исполнения бюджетов** используйте **[отчёты и открытые материалы Росказны](/data-sources/federal/roskazna-reports)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — сайт УФК **не** дублирует все федеральные открытые наборы |
| Машиночитаемость (`machine_readability`) | **HTML**; выгрузки — через **федеральные** каналы |
| Юридическая значимость (`legal_significance`) | **Официальный** орган Росказны |

## Описание

Сайт УФК ориентирован на **клиентов** казначейского обслуживания и **региональные** новости. Для **аналитики открытых финансовых данных** по платежам и лицевым счетам опирайтесь на **федеральные** отчёты и **бюджетную отчётность**, а сайт УФК используйте как **навигацию** и контекст **локальных** сервисов.

## Оператор

**Управление Федерального казначейства по г. Москве** — https://moscow.roskazna.gov.ru/

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Корень | https://moscow.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **организационная** информация УФК.
- **Ссылки** на федеральные **формы** и **сервисы** Росказны.
- **Не является** полным CSV-архивом исполнения бюджета Москвы.

## Периодичность обновления

По мере обновления **федерального** шаблона сайта и **новостной** ленты УФК.

## Примеры доступа

```bash
curl -fsSL -A "finguide-ufk-moscow/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://moscow.roskazna.gov.ru/"
```

## Связанные страницы wiki

- [Федеральное казначейство](/organizations/federal-treasury) — полномочия и федеральные витрины.
- [Отчёты и открытые материалы Росказны](/data-sources/federal/roskazna-reports) — исполнение и своды.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — планирование и открытые наборы.
- [Департамент финансов Москвы](/data-sources/regional/moscow-findep) — бюджетный контур города.

## Не путать с

- **[УФК по Московской области](/data-sources/regional/moscow-oblast-ufk-roskazna)** — **другое** территориальное управление Росказны и **другой** субъект РФ.
