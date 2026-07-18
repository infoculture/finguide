---
title: "ХМАО — Югра: ЕИС (zakupki.gov.ru) — точка входа по субъекту"
sidebar_label: "ЕИС: вход для Югры"
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-07-16
slug: /data-sources/regional/khmao-yugra-eis-zakupki-gov-ru-regional-entry
source_url: "https://zakupki.gov.ru/epz/organization/view/info.html?organizationCode=01872000017"
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-07-16
source_authority: federal
data_completeness: partial
machine_readability: HTML витрина; массовые XML/JSON выгрузки — по правилам ЕИС и отдельным карточкам
description: >-
  Федеральная Единая информационная система в сфере закупок (zakupki.gov.ru): зафиксированная в wiki точка входа
  с параметром organizationCode для работы по контрактному следу в контексте Ханты-Мансийского АО — Югры. Параметр
  следует перепроверять при смене структуры заказчиков; массовый анализ делайте через поиск и выгрузки ЕИС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /legal/44fz
---

# ХМАО — Югра: ЕИС (zakupki.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральная** ЕИС; карточка описывает **удобный вход** для задач по Югре |
| Тип доступа | Публичная витрина **ЕИС** |
| Основные форматы | **HTML**; выгрузки контрактов — **XML** по правилам ЕИС |
| Оператор | **ЕИС** (оператор федерального контура закупок) |
| Режим доступа | Открытый для публичных реестров |

Коротко: **юридически значимый** контрактный след по **44-ФЗ** и **223-ФЗ** — в **[ЕИС](/information-systems/federal/zakupki)**; **региональный контекст** и ИС округа — на [«Закупки Югры»](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Полная** для реестров ЕИС в целом; **точка входа** в URL — вспомогательная и может устареть |
| Машиночитаемость (`machine_readability`) | **Смешанная**: HTML + **официальные** XML-выгрузки ЕИС |
| Юридическая значимость (`legal_significance`) | **Официальный** федеральный реестр |
| Задержка обновления (`update_lag`) | Определяется **ЕИС** |
| Глубина архива (`archive_depth`) | Задаётся **ЕИС** |
| Лицензия (`license_or_terms`) | Правила zakupki.gov.ru |

## Описание

Карточка фиксирует **одну** из возможных **стартовых ссылок** ЕИС с параметром `organizationCode`. Используйте её как **ориентир**; для устойчивых пайплайнов предпочтительны **поисковые фильтры** по региону и **ИНН заказчика**, а также **[федеральная карточка закупок](/data-sources/federal/procurement)**.

## Оператор

**Единая информационная система в сфере закупок** — базовый домен https://zakupki.gov.ru/epz/main/public/home.html

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Пример страницы с `organizationCode` | https://zakupki.gov.ru/epz/organization/view/info.html?organizationCode=01872000017 | HTML |

## Объекты данных и показатели

- **Контракты**, **извещения**, **протоколы** — объекты **ЕИС** (см. [ИС](/information-systems/federal/zakupki)).
- **Ключи связки**: реестровый номер контракта, **ИНН** заказчика, **КБК** в платежах (вне ЕИС).
- **Региональная** аналитика без дублирования ЕИС — [Закупки Югры](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao).

## Периодичность обновления

Как у **ЕИС** — непрерывно для активных процедур.

## Ограничения и особенности

- `organizationCode` в примере **может измениться** или относиться к конкретной организации; всегда **верифицируйте** по актуальному поиску в ЕИС.

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-eis-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zakupki.gov.ru/epz/main/public/home.html"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao).
- [ЕИС](/information-systems/federal/zakupki) — федеральная информационная система.
- [Сведения о закупках (федеральная карточка)](/data-sources/federal/procurement).
- [44-ФЗ](/legal/44fz) — базовый закон для контрактной системы.
