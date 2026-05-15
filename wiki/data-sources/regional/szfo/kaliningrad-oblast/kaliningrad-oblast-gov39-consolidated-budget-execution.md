---
title: "Калининградская область: исполнение консолидированного бюджета (gov39.ru)"
sidebar_label: Исполнение консолидированного бюджета
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution
source_url: "https://gov39.ru/working/ekonomy/situation/ispolnenie-konsolidirovannogo-byudzheta"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; агрегаты и вложения без единого API
description: >-
  Раздел официального портала Правительства Калининградской области с материалами
  по исполнению консолидированного бюджета области (агрегированные показатели и пояснения на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/kaliningrad-oblast-minfin
  - /data-sources/regional/kaliningrad-oblast-minfin-budget-process
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Калининградская область: исполнение консолидированного бюджета (gov39.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Калининградская область** — **консолидированный** бюджет субъекта (публичное изложение на портале Правительства) |
| Тип доступа | Публичный **веб-раздел** портала **gov39.ru** |
| Основные форматы | **HTML**; **PDF** по ссылкам |
| Оператор | **Правительство Калининградской области** (портал) |
| Режим доступа | Открытый |

Коротко: **официальная** «витрина» **агрегатов** **исполнения** **консолидации** на **gov39.ru**; для **табличной** детализации **областного** бюджета и **файлов** Минфина см. **[Минфин](/data-sources/regional/kaliningrad-oblast-minfin)** и **[бюджетный процесс](/data-sources/regional/kaliningrad-oblast-minfin-budget-process)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — зависит от глубины раскрытия на портале |
| Машиночитаемость (`machine_readability`) | **HTML**/**PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** портал субъекта (информационное изложение; первичные **НПА** — в **[банке актов](/data-sources/regional/kaliningrad-oblast-gov39-npa)** и **официальных** изданиях) |
| Задержка обновления (`update_lag`) | зависит от **цикла** отчётности |
| Глубина архива (`archive_depth`) | определяется поддержкой раздела |
| Лицензия (`license_or_terms`) | см. условия портала |

## Описание

Раздел **«Исполнение консолидированного бюджета»** предназначен для **общего** понимания **поступлений** и **направлений** **консолидации** (как **публикует** Правительство). Для **методики** консолидации и **сопоставления** с другими субъектами см. **[обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets)**.

## Оператор

**Правительство Калининградской области** (официальный портал) — канонический вход: https://gov39.ru/working/ekonomy/situation/ispolnenie-konsolidirovannogo-byudzheta

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Исполнение консолидированного бюджета | https://gov39.ru/working/ekonomy/situation/ispolnenie-konsolidirovannogo-byudzheta | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели **исполнения** **консолидированного** бюджета (как выложено на странице).
- **Пояснительные** материалы и **ссылки** на **отчёты** (если есть).
- **Не** гарантирует **полноту** **строк** **КБК**/**ОКТМО** — для **детализации** ищите **первичные** формы на **Минфине** и в **отчётности**.

## Периодичность обновления

Обычно **привязана** к **отчётным** периодам (месяц, квартал, год); уточняйте даты на странице.

## Ограничения и особенности

- **Длинные** URL **gov39.ru** чувствительны к **реорганизации** меню — при **404** ищите раздел через **поиск** по порталу.
- **Муниципальный** уровень **Калининграда** — отдельно **[бюджет ГО](/data-sources/regional/kaliningrad-oblast-kaliningrad-city-budget)**.

## Примеры доступа

```bash
curl -fsSL --connect-timeout 20 -A "finguide-gov39-cons-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://gov39.ru/working/ekonomy/situation/ispolnenie-konsolidirovannogo-byudzheta"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kaliningrad-oblast-sources-overview).
- [Минфин области](/data-sources/regional/kaliningrad-oblast-minfin).
- [Минфин: бюджетный процесс](/data-sources/regional/kaliningrad-oblast-minfin-budget-process).
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets).
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).
