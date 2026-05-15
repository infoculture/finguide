---
title: 'Краснодарский край: территориальный фонд ОМС (ТФОМС КК)'
sidebar_label: ТФОМС КК (kubanoms.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/krasnodar-krai-tfoms-kubanoms
source_url: 'https://kubanoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Официальный сайт ТФОМС Краснодарского края: финансово-хозяйственная деятельность фонда ОМС,
  отчётность и нормативные материалы по обязательному медицинскому страхованию на территории края.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/krasnodar-krai-minfin-krasnodar
  - /data-sources/regional/krasnodar-krai-rosstat-krasnodar
  - /data-sources/regional/how-to-find-regional-data
---

# Краснодарский край: территориальный фонд ОМС (ТФОМС КК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Краснодарский край** — **обязательное медицинское страхование** (вне **консолидированного** бюджета, но **смежно** с **расходами** на **здравоохранение**) |
| Тип доступа | Публичный **сайт** **ТФОМС** |
| Основные форматы | **HTML**; **PDF** отчётности |
| Оператор | **Территориальный фонд** обязательного медицинского страхования **Краснодарского края** (**ТФОМС КК**) |
| Режим доступа | Открытый |

Коротко: **официальные** материалы **фонда ОМС**: **отчёты**, **тарифы**, **документы**. Для **общего** **бюджетного** контура края — **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — фокус на **ОМС**, не **полный** **бюджет** субъекта |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **территориального** фонда |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | зависит от **раздела** «Документы»/«Отчёты» |
| Лицензия (`license_or_terms`) | по **сайту** фонда |

## Описание

ТФОМС публикует **информацию** для **страхователей** и **граждан** о **механизмах** ОМС и **финансовых** результатах. **Статистический** контекст — **[Краснодарстат](/data-sources/regional/krasnodar-krai-rosstat-krasnodar)**.

## Оператор

ТФОМС Краснодарского края — https://kubanoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://kubanoms.ru/ | HTML |

## Объекты данных и показатели

- **Отчёты** о **деятельности** фонда, **показатели** **ОМС** (в **публикуемой** части).
- **Тарифы** и **нормативные** акты фонда (по **разделам** сайта).

## Периодичность обновления

**По отчётным** периодам и **нормотворческим** событиям.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-kubanoms-check/1.0" \
  "https://kubanoms.ru/"
```

## Связанные страницы wiki

- [Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar) — **консолидированный** бюджет и **расходная** политика **края**.
- [Краснодарстат](/data-sources/regional/krasnodar-krai-rosstat-krasnodar) — **макро**- и **социально-экономическая** статистика **региона**.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) — **методика** поиска **смежных** витрин.

## Не путать с

- **[Минфин КК](/data-sources/regional/krasnodar-krai-minfin-krasnodar)** — **бюджет** субъекта; **ТФОМС** — **отдельный** **внебюджетный** контур **ОМС**.
