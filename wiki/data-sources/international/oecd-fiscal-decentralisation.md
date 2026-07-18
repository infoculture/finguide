---
title: OECD Fiscal Decentralisation Database
sidebar_label: OECD decentralisation
description: >-
  Таблицы OECD по доходам, расходам, трансфертам, долгу, автономии и COFOG на
  разных уровнях управления; Россия в текущих таблицах стран-членов отсутствует.
tags: [data-source, international, statistics, budget]
last_updated: 2026-07-16
slug: /data-sources/international/oecd-fiscal-decentralisation
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/oecd
source_url: https://www.oecd.org/en/data/datasets/oecd-fiscal-decentralisation-database.html
data_source_kind: files
jurisdiction: multilevel
access: open
formats: [xlsx, pdf, html]
status: current
last_verified: 2026-07-16
jurisdiction_level: international
data_completeness: partial
machine_readability: XLSX tables
legal_significance: official
update_lag: table-dependent annual or survey vintage
archive_depth: 1965 to 2024 depending on table
license_or_terms: OECD terms and conditions
related_pages:
  - /data-sources/international/oecd-fiscal-data
  - /data-sources/international/imf-qgfs
  - /reference/international-gfs-cofog
  - /howto/analysis/international-fiscal-data
---

# OECD Fiscal Decentralisation Database

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | OECD member countries; центральный/федеральный уровень с соцстрахованием, штат/регион и местный уровень |
| Тип доступа | Страница набора и отдельные XLSX/PDF по таблицам |
| Основные форматы | XLSX, PDF, HTML |
| Оператор | [OECD](/organizations/oecd), Fiscal Federalism Network |
| Режим доступа | Открытые файловые публикации |

Коротко: база полезна для методики децентрализации — долей доходов и расходов, трансфертов, долга, налоговой автономии и COFOG по уровням власти. **России нет в проверенных актуальных таблицах OECD**, поэтому источник нельзя использовать как готовый российский ряд; он остаётся эталоном структуры сравнения.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная: таблицы имеют разные страны и годы; Россия отсутствует в проверенных XLSX Table 4 и Table 22 |
| Машиночитаемость (`machine_readability`) | Прямые XLSX-файлы, отдельные методические PDF |
| Юридическая значимость (`legal_significance`) | Официальная публикация OECD, не официальный источник бюджетов субъектов РФ |
| Задержка обновления (`update_lag`) | Зависит от таблицы: ежегодные статистические ряды и отдельные годы обследований автономии |
| Глубина архива (`archive_depth`) | От 1965 года для налоговых рядов; до 2024 года в части актуальных таблиц; COFOG — 1995–2022 |
| Лицензия (`license_or_terms`) | Условия повторного использования OECD для данных и публикаций |

## Описание

База объединяет не один прямоугольный датасет, а набор таблиц: налоговая и расходная автономия, консолидированные доходы и расходы, межбюджетные трансферты, баланс, обязательства и расходы по функциям COFOG. В 2026 году описание страницы всё ещё говорит об OECD member countries; проверка файлов консолидированных расходов и COFOG не обнаружила строк `Russia`/`Russian Federation`.

Отсутствие России нужно проверять повторно при смене версии. Пока оно означает, что российские региональные показатели строятся из национальных источников, а таблицы OECD задают метод сравнения с другими странами.

## Оператор

[OECD Fiscal Federalism Network](https://www.oecd.org/en/topics/sub-issues/fiscal-federalism.html) — методология и файловые таблицы.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Страница набора | https://www.oecd.org/en/data/datasets/oecd-fiscal-decentralisation-database.html | HTML |
| Консолидированные расходы, Table 4 | https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/fiscal-federalism-network/table4_gov_exp-gdp.xlsx | XLSX |
| COFOG, метод `Spent by`, Table 22 | https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/fiscal-federalism-network/table22-consolidated-cofog-expenditure-spent-by-approach.xlsx | XLSX |

## Объекты данных и показатели

- Наблюдение в статистических таблицах: страна, уровень правительства, год и доля в ВВП либо в агрегате генерального правительства.
- Таблицы трансфертов различают расходы передающего и доходы получающего уровня; часть значений неконсолидирована по определению.
- Таблицы COFOG дают десять функций и методы `Spent by`/`Funded by`; ни один из них не равен российскому разделу КБК построчно.

## Периодичность обновления

Периодичность зависит от таблицы. Статистические доли доходов и расходов доведены до 2024 года, COFOG — до 2022 года, отдельные обследования автономии публикуются выбранными годами.

## Ограничения и особенности

- Россия отсутствует в текущем проверенном файловом охвате; не подставляйте вместо неё значение агрегата OECD.
- Социальные фонды в этой базе относятся к центральному уровню, что отличается от некоторых российских аналитических группировок.
- Разные таблицы имеют разные горизонты, консолидацию и набор стран; объединяйте их только после сверки методических примечаний.

## Примеры доступа

Проверенная загрузка одной из официальных таблиц:

```bash
curl -fL -o table4_gov_exp-gdp.xlsx \
  "https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/fiscal-federalism-network/table4_gov_exp-gdp.xlsx"
```

На дату `last_verified` команда возвращает XLSX. Наличие страны проверяйте по всем листам, а не по названию файла.

## Связанные страницы wiki

- [Общий каталог OECD](/data-sources/international/oecd-fiscal-data) — другие фискальные и макроэкономические продукты OECD.
- [IMF QGFS](/data-sources/international/imf-qgfs) — квартальная GFS-статистика с российским участием, но иной моделью данных.
- [Россия, GFS и COFOG](/reference/international-gfs-cofog) — почему COFOG и российские КБК нельзя соединять напрямую.
- [How-to по международным фискальным данным](/howto/analysis/international-fiscal-data) — сценарий явной проверки страны до загрузки панели.

## Не путать с

- **OECD Data Explorer в целом** — эта карточка относится к конкретному семейству таблиц фискальной децентрализации.
- **Базой бюджетов субъектов РФ** — российские региональные строки в текущем наборе отсутствуют.
