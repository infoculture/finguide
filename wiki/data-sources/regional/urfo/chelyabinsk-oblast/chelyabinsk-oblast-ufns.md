---
title: 'Челябинская область: УФНС (nalog.gov.ru/rn74)'
sidebar_label: УФНС по Челябинской области
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/chelyabinsk-oblast-ufns
source_url: 'https://www.nalog.gov.ru/rn74/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - xml
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: смешанная; массовые ряды — через федеральные разделы ФНС
content_type: data_source
entity_type: data-source
description: >-
  Региональный раздел сайта ФНС России для Челябинской области (код региона
  74): новости УФНС и ссылки на налоговую статистику.
related_pages:
  - /data-sources/regional/subject-chelyabinsk-oblast-sources-overview
  - /data-sources/regional/chelyabinsk-oblast-minfin
  - /data-sources/federal/nalog-statistics
  - /information-systems/federal/analytic-nalog
  - /data-sources/regional/consolidated-budgets
---

# Челябинская область: УФНС (nalog.gov.ru/rn74)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональное представительство ФНС; часть материалов — общероссийские с фильтром по субъекту |
| Тип доступа | Веб-портал ФНС (`rn74`) |
| Основные форматы | HTML; статистика — XLSX, XML по разделам |
| Оператор | УФНС России по Челябинской области (единый домен nalog.gov.ru) |
| Режим доступа | Открытый |

Коротко: **точка входа** к территориальным материалам УФНС и **налоговой статистике** с привязкой к **коду субъекта 74**. Для массовых рядов см. [налоговую статистику ФНС](/data-sources/federal/nalog-statistics).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | Частичная — зависит от раздела |
| Машиночитаемость (`machine_readability`) | Смешанная; для выгрузок — федеральные каталоги ФНС |
| Юридическая значимость (`legal_significance`) | Официальный федеральный оператор |
| Задержка обновления (`update_lag`) | По календарю раскрытия ФНС |
| Глубина архива (`archive_depth`) | По политике nalog.gov.ru |
| Лицензия (`license_or_terms`) | Условия ФНС на сайте ведомства |

## Описание

URL **https://www.nalog.gov.ru/rn74/** — стандартный **региональный корень** на портале ФНС. Используйте для сопоставления **налоговых поступлений** с бюджетным исполнением ([Минфин](/data-sources/regional/chelyabinsk-oblast-minfin), [консолидированные бюджеты](/data-sources/regional/consolidated-budgets)).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональный раздел (rn74) | https://www.nalog.gov.ru/rn74/ | HTML |

## Объекты данных и показатели

- Новости и разъяснения УФНС по Челябинской области.
- Ссылки на формы **налоговой статистики** и отчётность.
- Ключи связки: код региона 74, год, вид налога (в федеральных таблицах).

## Периодичность обновления

По календарю публикаций ФНС и региональных материалов УФНС.

## Связанные страницы wiki

- [Министерство финансов](/data-sources/regional/chelyabinsk-oblast-minfin)
- [Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)
- [Аналитический портал ФНС](/information-systems/federal/analytic-nalog)
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets)
