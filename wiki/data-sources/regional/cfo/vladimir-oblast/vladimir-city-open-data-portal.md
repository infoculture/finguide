---
title: "Город Владимир: портал открытых данных"
sidebar_label: Открытые данные (Владимир)
tags:
  - data-source
  - regional
  - municipal
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/vladimir-city-open-data-portal
source_url: "https://www.vladimir-city.ru/opendata"
data_source_kind: mixed
jurisdiction: municipal
access: open
formats:
  - html
  - csv
  - json
status: current
last_verified: 2026-05-15
source_authority: municipal
data_completeness: partial
machine_readability: CSV/JSON для отдельных наборов; карточки наборов — HTML
description: >-
  Портал открытых данных администрации Владимира: каталог наборов ОМСУ,
  метаданные и файлы выгрузок (форматы зависят от набора).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-vladimir-oblast-sources-overview
  - /data-sources/regional/vladimir-city-budget-for-citizens
  - /data-sources/regional/vladimir-oblast-minfin
  - /data-sources/regional/how-to-find-regional-data
---

# Город Владимир: портал открытых данных

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальные** наборы города Владимира |
| Тип доступа | Портал открытых данных ОМСУ |
| Основные форматы | HTML, CSV, JSON (по наборам) |
| Оператор | Администрация города Владимира |
| Режим доступа | Открытый |

Коротко: **машиночитаемые** наборы и справочники, которые публикует администрация города (в объёме, заданном муниципальной политикой открытых данных). Бюджетные **пояснения для граждан** — в [смежном разделе](/data-sources/regional/vladimir-city-budget-for-citizens); **областной** контур — у [Минфина](/data-sources/regional/vladimir-oblast-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — перечень наборов ограничен решениями о публикации |
| Машиночитаемость (`machine_readability`) | смешанный: отдельные наборы в CSV/JSON |
| Юридическая значимость (`legal_significance`) | официальный орган МСУ |
| Задержка обновления (`update_lag`) | зависит от владельца набора |
| Глубина архива (`archive_depth`) | зависит от версионирования на портале |
| Лицензия (`license_or_terms`) | см. условия портала и карточек наборов |

## Описание

Портал предназначен для публикации **открытых данных** муниципалитета: паспорта наборов, периодичность обновления и файлы. Финансовые ряды могут **пересекаться** с бюджетной отчётностью, но не заменяют юридически значимые PDF отчётов.

## Оператор

Администрация города Владимира — канонический вход: https://www.vladimir-city.ru/opendata

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог наборов | https://www.vladimir-city.ru/opendata | HTML |

## Объекты данных и показатели

- **Наборы** муниципальных сведений (структура по карточкам на портале).
- Возможные темы: транспорт, социалька, **бюджет** (если вынесены отдельными наборами).

## Периодичность обновления

Задаётся в **метаданных каждого набора** на портале.

## Ограничения и особенности

- Качество метаданных и единиц измерения проверяйте **по каждому** набору.

## Связанные страницы wiki

- [«Бюджет для граждан» (г. Владимир)](/data-sources/regional/vladimir-city-budget-for-citizens) — гражданская бюджетная витрина.
- [Министерство финансов области](/data-sources/regional/vladimir-oblast-minfin) — областной финансовый контур.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.
