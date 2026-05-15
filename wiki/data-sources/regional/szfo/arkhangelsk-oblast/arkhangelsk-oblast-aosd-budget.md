---
title: 'Архангельское областное Собрание депутатов: бюджетный раздел (aosd.ru)'
sidebar_label: АОСД — бюджет
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/arkhangelsk-oblast-aosd-budget
source_url: 'https://old.aosd.ru/?dir=budget&act=budget'
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
machine_readability: html
description: >-
  Парламентский сайт Архангельского областного Собрания депутатов: проекты и
  материалы по законам об областном бюджете и смежным вопросам (точка входа на
  момент проверки — поддомен old.aosd.ru).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-arkhangelsk-oblast-sources-overview
  - /data-sources/regional/arkhangelsk-oblast-pravo-publication-region29
  - /data-sources/regional/arkhangelsk-oblast-minfin-dvinaland
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Архангельское областное Собрание депутатов: бюджетный раздел (aosd.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательный** орган **Архангельской области** |
| Тип доступа | Официальный сайт **АОСД** |
| Основные форматы | HTML, PDF (повестки, тексты проектов законов) |
| Оператор | Архангельское областное Собрание депутатов |
| Режим доступа | Открытый |

Коротко: **парламентский** контур **областного** бюджета: проекты законов, материалы слушаний, сопутствующие документы. Для **официально опубликованных** редакций после выхода акта см. **[блок region29 на publication.pravo.gov.ru](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки и миграций сайта |
| Машиночитаемость (`machine_readability`) | HTML; без стабильного публичного API |
| Юридическая значимость (`legal_significance`) | официальный орган **законодательной** власти субъекта для размещаемых материалов |
| Задержка обновления (`update_lag`) | привязана к **сессиям** и этапам **бюджетного** процесса |
| Глубина архива (`archive_depth`) | зависит от CMS и политики архивации |
| Лицензия (`license_or_terms`) | условия сайта **АОСД** |

## Описание

Раздел с параметрами `dir=budget` на **old.aosd.ru** использовался как **прямой** вход к **бюджетной** повестке. При **смене** домена или CMS проверяйте актуальный адрес на **aosd.ru** и навигацию «Бюджет». Смысл карточки — связка аналитики **госфинансов** с **законодательным** этапом принятия **закона об областном бюджете**.

## Оператор

Архангельское областное Собрание депутатов — зафиксированный вход на дату проверки: https://old.aosd.ru/?dir=budget&act=budget

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Бюджетный раздел (legacy-поддомен) | https://old.aosd.ru/?dir=budget&act=budget | HTML |
| Корень сайта Собрания (проверяйте актуальность) | https://aosd.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** законов об **областном** бюджете и сопутствующие **материалы**.
- **Повестка** и **решения** (в форме публикаций на сайте).
- **Не** дублирует **юридическую** федеральную публикацию — см. **[region29](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29)**.

## Периодичность обновления

В период **бюджетного** цикла и между сессиями — по мере размещения документов.

## Ограничения и особенности

- Поддомен **old.** в URL сигнализирует о **миграции** контента; при расхождении с **основным** сайтом приоритет у **официально** указанного оператором адреса.

## Связанные страницы wiki

- [Официальное опубликование НПА (region29)](/data-sources/regional/arkhangelsk-oblast-pravo-publication-region29) — федеральная витрина **опубликованных** актов субъекта.
- [Министерство финансов Архангельской области](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland) — **исполнительный** контур подготовки бюджета.
- [Сводная страница субъекта](/data-sources/regional/subject-arkhangelsk-oblast-sources-overview) — все источники по области в wiki.

## Не путать с

- **[Минфин области](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland)** — **исполнительная** ветвь; **Собрание** — **законодательное** рассмотрение и принятие закона.
