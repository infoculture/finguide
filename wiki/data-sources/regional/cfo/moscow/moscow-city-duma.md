---
title: "Город Москва: Московская городская Дума (duma.mos.ru)"
sidebar_label: МГД (duma.mos.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-city-duma
source_url: "https://duma.mos.ru/ru"
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
machine_readability: HTML/PDF; структурированных открытых наборов по всем законам нет
description: >-
  Официальный сайт Московской городской Думы: законы города Москвы (включая о бюджете), проекты,
  повестка и материалы заседаний — законодательный контур субъекта РФ «город Москва».
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-legal-acts-mosopen
  - /data-sources/regional/moscow-open-budget
  - /data-sources/regional/moscow-findep
  - /glossary/budget
---

# Город Москва: Московская городская Дума (duma.mos.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательный орган** города Москва (субъект РФ) |
| Тип доступа | Публичный портал **duma.mos.ru** |
| Основные форматы | **HTML**, **PDF** (стенограммы, проекты — по разделам) |
| Оператор | **Московская городская Дума** |
| Режим доступа | Открытый доступ к публичным материалам |

Коротко: **источник законов города**, включая **закон о бюджете**. Для **актуальной юридической копии** опубликованного текста используйте перекрёстную проверку с **[mosopen.ru](/data-sources/regional/moscow-legal-acts-mosopen)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **По законодательным текстам** — основной вход; **по бюджетным таблицам** — дополняйте **[Открытым бюджетом](/data-sources/regional/moscow-open-budget)** |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **Официальный** орган законодательной власти |

## Описание

На сайте МГД публикуются **проекты** и **принятые** законы, повестка, депутатские материалы. Для **бюджетного анализа** ключевой — **закон о бюджете** на соответствующий финансовый год и изменяющие законы. Термин **«бюджет»** см. **[глоссарий](/glossary/budget)**.

## Оператор

**Московская городская Дума** — https://duma.mos.ru/ru

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Корень (RU) | https://duma.mos.ru/ru | HTML |

## Объекты данных и показатели

- **Законы города Москвы** с реквизитами и статусом.
- **Проекты законов** о бюджете и поправки.
- **Не дублирует** казначейское **исполнение** — для фактических рядов см. **ГИИС «Электронный бюджет»** и **[отчёты Казначейства](/data-sources/federal/roskazna-reports)**.

## Периодичность обновления

По **сессионному** графику и процедуре принятия законов.

## Примеры доступа

```bash
curl -fsSL -A "finguide-mgd/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://duma.mos.ru/ru"
```

## Связанные страницы wiki

- [Система правовых актов (mosopen.ru)](/data-sources/regional/moscow-legal-acts-mosopen) — публикация нормативных актов.
- [Открытый бюджет](/data-sources/regional/moscow-open-budget) — гражданское изложение параметров бюджета.
- [Департамент финансов](/data-sources/regional/moscow-findep) — исполнительный контур подготовки бюджета.

## Не путать с

- **[Государственная Дума Федерального Собрания РФ](https://www.duma.gov.ru/)** — **федеральный** парламент; МГД — **городской** законодательный орган **только** Москвы.
