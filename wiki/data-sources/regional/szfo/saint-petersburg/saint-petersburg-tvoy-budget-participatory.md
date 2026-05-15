---
title: 'Санкт-Петербург: проект «Твой бюджет» (tvoybudget.spb.ru)'
sidebar_label: «Твой бюджет» СПб
tags:
  - data-source
  - regional
  - budget
  - municipal
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-tvoy-budget-participatory
source_url: 'https://tvoybudget.spb.ru/'
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Официальный портал участия жителей в бюджетном процессе Санкт-Петербурга:
  инициативное бюджетирование, проекты граждан, голосования и сопутствующая
  информация по участию в распределении части бюджетных средств.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-open-budget-budget-gov-spb
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/saint-petersburg-open-data-gov-spb
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: проект «Твой бюджет» (tvoybudget.spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **участие граждан** в бюджетном процессе (инициативное бюджетирование и смежные механики) |
| Тип доступа | Публичный портал проекта |
| Основные форматы | **HTML** |
| Оператор | **Проект «Твой бюджет»** (официальный городской портал) |
| Режим доступа | Открытый; отдельные этапы голосования могут требовать идентификации по правилам проекта |

Коротко: **вход** для **участия** жителей в распределении **ограниченной** части бюджетных ресурсов и отслеживания **статуса** проектов. **Агрегированные** показатели бюджета города — на **[Открытом бюджете](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)** и сайте **[Комитета финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — фокус на **проектах участия**, не на полном бюджете |
| Машиночитаемость (`machine_readability`) | **преимущественно HTML** |
| Юридическая значимость (`legal_significance`) | официальный портал городского проекта |
| Задержка обновления (`update_lag`) | привязана к **циклам** приёма заявок и голосований |
| Глубина архива (`archive_depth`) | зависит от сохранения прошлых сезонов на сайте |
| Лицензия (`license_or_terms`) | см. правила проекта на портале |

## Описание

Портал **tvoybudget.spb.ru** поддерживает **участие** граждан: подача идей, отбор, голосование (по **актуальным** правилам сезона). Для **аналитики полного бюджета** используйте **[fincom](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и **[открытые данные](/data-sources/regional/saint-petersburg-open-data-gov-spb)**.

## Оператор

**Проект «Твой бюджет» Санкт-Петербурга** — https://tvoybudget.spb.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень портала | https://tvoybudget.spb.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** участников и их **статусы** в конкурсе/голосовании.
- **Результаты** голосований и **отчёты** о реализации (по мере публикации).
- **Не** источник **полной** бюджетной классификации города.

## Периодичность обновления

**Сезонная** (кампании участия) + поддержка архива прошлых лет.

## Ограничения и особенности

- Логика участия и **кворумы** меняются от сезона к сезону — читайте **актуальные** правила на сайте.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://tvoybudget.spb.ru/"
```

## Связанные страницы wiki

- [Открытый бюджет СПб](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb) — агрегированная подача бюджета.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — официальные бюджетные документы.
- [Открытые данные СПб](/data-sources/regional/saint-petersburg-open-data-gov-spb) — машиночитаемые наборы.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Открытый бюджет](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)** — **объяснение** полного бюджета; «Твой бюджет» — **участие** в ограниченной части расходов.
