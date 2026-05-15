---
title: "Ханты-Мансийский район: электронный бюджет (hmrn.ru)"
sidebar_label: "Электронный бюджет Ханты-Мансийского района"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-khanty-mansi-district-electronic-budget
source_url: "https://hmrn.ru/about/budget/elektronnyy-byudzhet.php"
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: municipal
data_completeness: partial
machine_readability: HTML; выгрузки — по политике муниципального сайта
description: >-
  Раздел «Электронный бюджет» на официальном сайте Ханты-Мансийского района (Ханты-Мансийский автономный округ — Югра):
  публичные материалы о муниципальном бюджете района и отчётности.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-open-data-portal
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Ханты-Мансийский район: электронный бюджет

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальный** бюджет **Ханты-Мансийского района** (в составе ХМАО — Югры) |
| Тип доступа | Публичный раздел официального сайта МО |
| Основные форматы | **HTML**; вложения **PDF** по ссылкам |
| Оператор | **Органы местного самоуправления** Ханты-Мансийского района |
| Режим доступа | Открытый |

Коротко: **пример муниципальной** бюджетной витрины **внутри** Югры; **окружной** бюджет — на [Депфине](/data-sources/regional/khmao-yugra-depfin), методика межуровневой сверки — в [консолидированных бюджетах](/data-sources/regional/consolidated-budgets).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — зависит от наполнения муниципального раздела |
| Машиночитаемость (`machine_readability`) | **HTML**; машиночитаемые наборы — при наличии на [окружном data-портале](/data-sources/regional/khmao-yugra-open-data-portal) |
| Юридическая значимость (`legal_significance`) | **Официальная** муниципальная публикация |
| Задержка обновления (`update_lag`) | Привязана к **муниципальному** бюджетному циклу |
| Глубина архива (`archive_depth`) | По политике МО |
| Лицензия (`license_or_terms`) | Условия сайта МО |

## Описание

**hmrn.ru** — сайт **Ханты-Мансийского района**. Раздел **«Электронный бюджет»** предназначен для раскрытия сведений о **местном бюджете** в понятной форме. Конкретный набор показателей и отчётов уточняйте на актуальной странице.

## Оператор

**Ханты-Мансийский район** — https://hmrn.ru/about/budget/elektronnyy-byudzhet.php

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Электронный бюджет района | https://hmrn.ru/about/budget/elektronnyy-byudzhet.php | HTML |

## Объекты данных и показатели

- **План и исполнение** местного бюджета (в публикуемых разрезах).
- **ОКТМО** и коды муниципального образования — как ключи связки с другими витринами.
- **Не покрывает** окружной и федеральный уровни.

## Периодичность обновления

По **муниципальному** бюджетному циклу и правилам раскрытия МО.

## Ограничения и особенности

- URL подраздела может измениться при **обновлении** сайта МО — проверяйте навигацию с корня **hmrn.ru**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-hmrn-eb-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://hmrn.ru/about/budget/elektronnyy-byudzhet.php"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — окружной бюджет.
- [Открытые данные Югры](/data-sources/regional/khmao-yugra-open-data-portal) — возможные муниципальные наборы.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets).
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
