---
title: "ХМАО — Югра: портал государственных программ (gp-portal.admhmao.ru)"
sidebar_label: "Госпрограммы Югры (gp-portal)"
tags:
  - data-source
  - regional
  - programs
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-state-programs-portal
source_url: "https://gp-portal.admhmao.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; структурированные выгрузки — при наличии на портале или в открытых данных
description: >-
  Официальный портал государственных программ Ханты-Мансийского автономного округа — Югры: цели, показатели,
  объёмы финансирования и материалы по реализации окружных программ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-open-data-portal
  - /data-sources/regional/khmao-yugra-admhmao-legal-acts
  - /data-sources/federal/budget-gov-ru-datasets
---

# ХМАО — Югра: портал государственных программ

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружные** государственные программы |
| Тип доступа | Публичный тематический портал |
| Основные форматы | **HTML**; вложения **PDF** / **XLSX** по ссылкам |
| Оператор | **Органы исполнительной власти ХМАО — Югры** (портал госпрограмм) |
| Режим доступа | Открытый |

Коротко: **справочно-аналитический вход** в **цели, показатели и финансирование** госпрограмм округа; машиночитаемые производные ищите также в [открытых данных Югры](/data-sources/regional/khmao-yugra-open-data-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — фокус на публичной части программных материалов |
| Машиночитаемость (`machine_readability`) | Преимущественно **HTML**; выгрузки — по наличию на портале |
| Юридическая значимость (`legal_significance`) | **Официальная** окружная витрина программных документов |
| Задержка обновления (`update_lag`) | Привязана к циклу **планирования** и **отчётности** по программам |
| Глубина архива (`archive_depth`) | Зависит от политики хранения на портале |
| Лицензия (`license_or_terms`) | Условия сайта — у оператора |

## Описание

**gp-portal.admhmao.ru** предназначен для публикации сведений о **государственных программах** округа: структура программ, показатели, паспорта, отчёты о реализации (в объёме, который выкладывает оператор). Детализация по годам и источникам финансирования уточняется внутри актуальных разделов портала.

## Оператор

**Портал государственных программ Ханты-Мансийского автономного округа — Югры** — https://gp-portal.admhmao.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень портала госпрограмм | https://gp-portal.admhmao.ru/ | HTML |

## Объекты данных и показатели

- **Программа** как объект: цели, задачи, **целевые показатели**, ответственные исполнители.
- **Финансовые объёмы** в разрезе лет и источников (в публикуемых таблицах и документах).
- Связка с **НПА** — через [банк правовых актов](/data-sources/regional/khmao-yugra-admhmao-legal-acts) и [Депфин](/data-sources/regional/khmao-yugra-depfin).

## Периодичность обновления

Обновляется по мере **утверждения** изменений в программах и **отчётности** об исполнении.

## Ограничения и особенности

- Не каждая **госпрограмма** дублируется в виде открытого набора на data-портале — проверяйте [открытые данные](/data-sources/regional/khmao-yugra-open-data-portal) отдельно.

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-gp-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://gp-portal.admhmao.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — бюджетный контур и отчётность.
- [Открытые данные Югры](/data-sources/regional/khmao-yugra-open-data-portal) — возможные машиночитаемые производные.
- [Правовые акты admhmao.ru](/data-sources/regional/khmao-yugra-admhmao-legal-acts) — нормативная база программ.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые ряды для сопоставления.
