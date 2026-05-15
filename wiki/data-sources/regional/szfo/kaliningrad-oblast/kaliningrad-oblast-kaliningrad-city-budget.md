---
title: "Калининград: раздел «Бюджет» (сайт администрации ГО)"
sidebar_label: Бюджет города Калининграда
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kaliningrad-oblast-kaliningrad-city-budget
source_url: "https://www.klgd.ru/activity/budget"
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: municipal
data_completeness: partial
machine_readability: HTML; вложения PDF по ссылкам; без стандартизированного API
description: >-
  Официальный раздел сайта администрации городского округа «Город Калининград»:
  муниципальный бюджет, правовые акты и материалы по финансовому менеджменту.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/kaliningrad-oblast-minfin
  - /data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Калининград: раздел «Бюджет» (сайт администрации ГО)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальное образование** — **ГО «Город Калининград»** (в составе Калининградской области) |
| Тип доступа | Публичный **раздел** официального сайта администрации |
| Основные форматы | **HTML**; **PDF** и др. вложения |
| Оператор | **Администрация городского округа «Город Калининград»** |
| Режим доступа | Открытое чтение публичных материалов |

Коротко: **муниципальная** витрина **бюджета** **Калининграда** на **klgd.ru**; для **областного** бюджета и **консолидации** используйте **[Минфин области](/data-sources/regional/kaliningrad-oblast-minfin)** и **[материалы Правительства](/data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — зависит от полноты выкладки по годам и типам форм |
| Машиночитаемость (`machine_readability`) | **HTML**/**PDF**; структура страниц может меняться |
| Юридическая значимость (`legal_significance`) | **официальный** орган **МСУ** |
| Задержка обновления (`update_lag`) | привязана к **муниципальному** бюджетному циклу |
| Глубина архива (`archive_depth`) | зависит от CMS и политики архивации |
| Лицензия (`license_or_terms`) | см. условия сайта администрации |

## Описание

Раздел **«Бюджет»** на **klgd.ru** предназначен для **прозрачности** **муниципального** бюджета: **правовые** акты, **отчёты**, **мониторинг** качества финансового менеджмента (по мере публикации). Для **сопоставления** с **областным** уровнем см. **[обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets)**.

## Оператор

**Администрация городского округа «Город Калининград»** — канонический вход: https://www.klgd.ru/activity/budget

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел «Бюджет» | https://www.klgd.ru/activity/budget | HTML |

## Объекты данных и показатели

- **Доходы и расходы** бюджета ГО (в **агрегатах**, как выложено).
- **Правовые** акты по бюджету МО.
- **Отчёты** об исполнении и материалы **мониторинга** (если поддерживаются разделом).

## Периодичность обновления

По **этапам** муниципального бюджетного процесса и **отчётности**; уточняйте на страницах конкретных документов.

## Ограничения и особенности

- **URL** глубоких страниц CMS может меняться — при **ошибке 404** ищите **«Бюджет»** через меню **klgd.ru**.
- **ОКТМО** и **коды** муниципалитета сверяйте со **справочниками** при **склейке** с федеральными наборами.

## Примеры доступа

```bash
curl -fsSL --connect-timeout 20 -A "finguide-klgd-budget-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.klgd.ru/activity/budget"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kaliningrad-oblast-sources-overview).
- [Минфин Калининградской области](/data-sources/regional/kaliningrad-oblast-minfin) — областной бюджетный контур.
- [Исполнение консолидированного бюджета области](/data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution).
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets).
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
