---
title: "ХМАО — Югра: Дума Ханты-Мансийского автономного округа (dumahmao.ru)"
sidebar_label: "Дума Югры (dumahmao.ru)"
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-duma-dumahmao
source_url: "https://www.dumahmao.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; стенограммы и законы часто в PDF
description: >-
  Официальный сайт Думы Ханты-Мансийского автономного округа — Югры: законы о бюджете, парламентские материалы,
  повестка и решения по финансовым вопросам.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-admhmao-legal-acts
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-accounts-chamber-sphmao
  - /data-sources/regional/consolidated-budgets
---

# ХМАО — Югра: Дума

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательная власть** субъекта РФ |
| Тип доступа | Публичный парламентский портал |
| Основные форматы | **HTML**; **PDF** законов и приложений |
| Оператор | **Дума Ханты-Мансийского автономного округа — Югры** |
| Режим доступа | Открытый |

Коротко: **первичный вход** к **законам** округа, включая **закон о бюджете** и поправки; акты **Правительства** — в [разделе правовых актов](/data-sources/regional/khmao-yugra-admhmao-legal-acts).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** на уровне витрины — зависит от размещения материалов заседаний |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; без единого открытого API |
| Юридическая значимость (`legal_significance`) | **Официальная** публикация парламентских актов |
| Задержка обновления (`update_lag`) | От часов до нескольких дней после заседаний |
| Глубина архива (`archive_depth`) | Зависит от политики архива на сайте |
| Лицензия (`license_or_terms`) | Условия официального сайта Думы |

## Описание

Сайт **dumahmao.ru** публикует **законы**, **постановления Думы**, материалы **заседаний** и **проекты** законов. Для бюджетного цикла наиболее важны разделы, связанные с **бюджетным** законодательством и **контрольными** процедурами парламента.

## Оператор

**Дума Ханты-Мансийского автономного округа — Югры** — https://www.dumahmao.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта Думы | https://www.dumahmao.ru/ | HTML |

## Объекты данных и показатели

- **Закон** как объект: статьи, приложения, сопутствующие пояснительные записки (если опубликованы).
- **Парламентские процедуры**: чтения, поправки, даты голосований.
- Связка с **исполнением бюджета** — через [Депфин](/data-sources/regional/khmao-yugra-depfin) и [консолидированные бюджеты](/data-sources/regional/consolidated-budgets).

## Периодичность обновления

**По сессиям** Думы и графику законопроектной работы.

## Ограничения и особенности

- Не путать с **актами Правительства** на [admhmao.ru](/data-sources/regional/khmao-yugra-admhmao-legal-acts).

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-duma-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.dumahmao.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Правовые акты admhmao.ru](/data-sources/regional/khmao-yugra-admhmao-legal-acts) — исполнительная ветвь.
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — материалы по исполнению бюджета.
- [Счётная палата](/data-sources/regional/khmao-yugra-accounts-chamber-sphmao) — внешний контроль.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets).
