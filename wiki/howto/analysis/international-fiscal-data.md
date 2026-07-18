---
title: Международные фискальные витрины без искажения российских рядов
sidebar_label: Международные фискальные данные
tags:
  - howto
  - analysis
  - international
last_updated: 2026-07-16
content_type: howto
entity_type: howto
description: >-
  Порядок работы с IMF, OECD и Open Budget Survey Russia 2023: выбор набора,
  правила GFS/COFOG, проверка даты доказательной базы и сверка с российскими
  открытыми контурами.
related_pages:
  - /reference/international-gfs-cofog
  - /reference/international-standards
  - /data-sources/international/imf-gfs
  - /data-sources/international/oecd-fiscal-data
  - /data-sources/international/imf-qgfs
  - /data-sources/international/imf-world-revenue
  - /data-sources/international/imf-fiscal-monitor
  - /data-sources/international/oecd-fiscal-decentralisation
  - /data-sources/international/ibp-open-budget-survey
  - /data-sources/international/open-budget-survey-russia-2023
  - /data-sources/international/world-bank
  - /data-sources/federal/minfin-opendata
---

# Международные фискальные витрины без искажения российских рядов

## Зачем и для кого

Для **аналитиков**, которым нужны **межстрановые** ряды или методические **GFS/COFOG**, но нельзя «натянуть» их на российские **КБК** в сырых CSV регионального портала.

## Входные данные

- Обзор правил сравнения: [Россия, GFS, COFOG](/reference/international-gfs-cofog).
- Выбранный **вопрос**, а затем конкретный набор: квартальные операции — [QGFS](/data-sources/international/imf-qgfs), доходы — [WoRLD](/data-sources/international/imf-world-revenue), дефицит и долг с прогнозом — [Fiscal Monitor](/data-sources/international/imf-fiscal-monitor), децентрализация — [OECD Fiscal Decentralisation](/data-sources/international/oecd-fiscal-decentralisation), институты прозрачности — [Open Budget Survey Russia 2023](/data-sources/international/open-budget-survey-russia-2023). Open Budget Survey измеряет прозрачность, участие и надзор, а не денежный ряд; доказательная база российского раунда 2023 ограничена событиями и документами до 31 декабря 2022 года.
- Национальный якорь — [открытые данные Минфина](/data-sources/federal/minfin-opendata) и [отчётность](/reporting/) для РФ на тот же **смысл** показателя (не обязательно тот же год публикации).

## Инструменты

- Браузер и выгрузки CSV с сайтов международных организаций.
- **Python 3** / Excel для построения **отдельных** панелей; не объединяйте в один `JOIN` с российскими КБК без перекодировочной таблицы.

## Шаги

1. Прочитайте [обзор GFS/COFOG](/reference/international-gfs-cofog) и выберите набор по вопросу, а не по имени организации.
2. До загрузки найдите Россию в фильтре или файле. Запишите `last_verified`, первую и последнюю непустую дату; отсутствие страны тоже является результатом проверки.
3. Зафиксируйте уровень правительства, единицу, метод учёта, версию набора и границу наблюдение/оценка/прогноз.
4. Скачайте данные вместе с метаданными. Если открытый каталог не показывает границу ряда, не подставляйте общий диапазон набора вместо странового.
5. Параллельно соберите российский показатель из национального источника с той же экономической постановкой задачи.
6. Сопоставляйте только на агрегатах и с явной оговоркой в тексте исследования.

## Воспроизводимый пример

Проверка страны в официальной XLSX-таблице OECD (в актуальной Table 4 Россия отсутствует):

```bash
curl -fL -o table4.xlsx \
  "https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/fiscal-federalism-network/table4_gov_exp-gdp.xlsx"
unzip -p table4.xlsx xl/sharedStrings.xml | grep -iE "Russia|Russian" || \
  echo "Russia not found: do not build a Russian OECD series"
```

Проверяйте все листы табличным инструментом, если строки хранятся не в `sharedStrings.xml`; команда служит быстрой отрицательной проверкой, а не универсальным парсером XLSX.

## Проверка результата

- В тексте отчёта явно указаны **два** источника: международный и национальный.
- Нет утверждений вида «код COFOG 09 = КБК …» без ссылки на **методику перекодировки**.
- Единицы измерения и **валюта** согласованы (номинал vs ППС и т.д.).
- В журнале есть первая/последняя фактическая дата и отметка, является ли значение наблюдением, оценкой или прогнозом.

## Ограничения и типовые ошибки

- Международные ряды **пересчитывают** национальные данные; они **не** первичнее казначейских CSV по КБК для РФ.
- **Сопоставление регионов РФ** с субнациональными рядами других стран часто **несопоставимо** из-за разных административных уровней.
- Глобальная граница набора не доказывает, что российский ряд заполнен на всём этом интервале.

## Связанные страницы

- [Международные классификаторы](/reference/international-standards)
- [СГФ-2014 в классификации](/budget-classification/sgf-2014)
- [IMF QGFS](/data-sources/international/imf-qgfs)
- [IMF WoRLD](/data-sources/international/imf-world-revenue)
- [OECD Fiscal Decentralisation](/data-sources/international/oecd-fiscal-decentralisation)
