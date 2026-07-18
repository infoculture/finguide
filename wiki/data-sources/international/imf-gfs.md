---
title: IMF Data — Government Finance Statistics (GFS)
sidebar_label: IMF GFS
description: >-
  Международная статистика финансов сектора государственного управления (GFSM):
  сопоставимость с российскими рядами ограничена методикой и классификациями.
tags:
  - data-source
  - international
  - statistics
  - macro
last_updated: 2026-07-16
slug: /data-sources/international/imf-gfs
source_url: https://data.imf.org/
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - csv
  - json
  - html
status: current
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/imf
related_pages:
  - /data-sources/international
  - /data-sources/international/oecd-fiscal-data
  - /data-sources/international/imf-qgfs
  - /data-sources/international/imf-world-revenue
  - /data-sources/international/imf-fiscal-monitor
  - /reference/international-gfs-cofog
  - /budget-classification/sgf-2014
  - /data-sources/federal/minfin-opendata
jurisdiction_level: international
last_verified: 2026-07-16
data_completeness: partial
machine_readability: portal export and SDMX API
legal_significance: official
update_lag: dataset-dependent
archive_depth: dataset-dependent
license_or_terms: IMF Copyright and Usage terms
---

# IMF Data — Government Finance Statistics (GFS)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Международная витрина МВФ; страновые и агрегированные ряды по методике **GFS** и смежным блокам макроданных |
| Тип доступа | Веб-клиент на **data.imf.org**, выгрузки и API для части продуктов (зависит от выбранного датасета) |
| Основные форматы | JSON, CSV, SDMX для ряда продуктов; HTML для интерфейса выборки |
| Оператор | [Международный валютный фонд](/organizations/imf) (IMF) |
| Режим доступа | Открытый доступ к публичным рядам; массовые выгрузки — с учётом [правил IMF](https://data.imf.org/) и стабильности идентификаторов серий |

Коротко: витрина **IMF Data** для показателей по правительственному сектору и смежным блокам; перед смешением с [российскими открытыми наборами](/data-sources/federal/minfin-opendata) проверяйте определения, версию **GFSM** и календарный охват. Связь российских КБК с международными агрегатами см. в wiki: [СГФ-2014](/budget-classification/sgf-2014).

Выберите конкретный набор до выгрузки:

- [QGFS](/data-sources/international/imf-qgfs) — квартальные операции и балансы; российская граница кварталов требует проверки в выборке.
- [WoRLD](/data-sources/international/imf-world-revenue) — годовая структура налоговых и неналоговых доходов, версия 2026 до 2024 года.
- [Fiscal Monitor](/data-sources/international/imf-fiscal-monitor) — восемь годовых индикаторов, оценки и прогнозы IMF staff.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная и зависит от выбранного набора, страны, показателя и периода |
| Машиночитаемость (`machine_readability`) | Выгрузки портала и SDMX API; контракт задаётся конкретным набором |
| Юридическая значимость (`legal_significance`) | Официальная публикация IMF, не первичная российская отчётность |
| Задержка обновления (`update_lag`) | Зависит от набора и передачи данных страной |
| Глубина архива (`archive_depth`) | Зависит от набора: от квартальных серий до длинных годовых панелей |
| Лицензия (`license_or_terms`) | IMF Copyright and Usage и условия выбранного продукта |

## Описание

Карточка фиксирует **каноническую точку входа** `data.imf.org` для аналитиков, которым нужны **сопоставимые между странами** ряды по госфинансам в терминах МВФ. В объём не входят внутренние рабочие материалы миссий, условия программ и закрытые соглашения с странами; публичная витрина отражает **опубликованные** серии и метаданные IMF.

## Оператор

[Международный валютный фонд](https://www.imf.org/) — портал данных: https://data.imf.org/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал IMF Data (выбор датасета и фильтров) | https://data.imf.org/ | HTML, далее по продукту |
| Обзор направлений данных на сайте МВФ | https://www.imf.org/en/Data | HTML |

## Объекты данных и показатели

- **Строка набора** в публичных продуктах IMF — обычно **наблюдение по стране/группе, показателю и периоду** сопровождается кодами в системе IMF; точный контракт смотрите в описании выбранного датасета.
- **Связка с РФ** — не через операционные коды закупок: для моста к национальной классификации используйте методические материалы и страницу [СГФ-2014](/budget-classification/sgf-2014), а для исполнения бюджета — [Минфин](/data-sources/federal/minfin-opendata) и [казначейские витрины](/data-sources/federal/roskazna-reports).
- **Пробелы:** пересмотры методики **GFSM 2001 / 2014**, разрывы в рядах, различие между **кассовым и начисленным** измерением в разных странах.

## Периодичность обновления

Публикации привязаны к **календарю IMF** и к передаче данных странами; для каждой серии в интерфейсе обычно доступны дата обновления и примечания. Не используйте витрину как единственный источник для **оперативного** контроля исполнения федерального бюджета РФ.

## Ограничения и особенности

- **Сопоставимость с национальной отчётностью** ограничена: агрегаты IMF не дублируют таблицы **федерального бюджета** по КБК.
- **Условия использования** — см. разделы Legal / Terms на **imf.org** и условия конкретного продукта на дату выгрузки.

## Связанные страницы wiki

- [IMF QGFS](/data-sources/international/imf-qgfs) — конкретный квартальный набор GFS.
- [IMF WoRLD](/data-sources/international/imf-world-revenue) — конкретный набор по структуре доходов.
- [IMF Fiscal Monitor](/data-sources/international/imf-fiscal-monitor) — конкретный набор оценок и прогнозов.
- [OECD Data](/data-sources/international/oecd-fiscal-data) — другой межстрановой каталог макро- и фискальных индикаторов.
- [Всемирный банк — данные по России](/data-sources/international/world-bank) — смежные макропоказатели в методике WB.
- [Международные классификаторы](/reference/international-standards) — контекст методик и сопоставлений.
- [Открытые данные Росстата](/data-sources/federal/rosstat-opendata) — национальные официальные ряды для сверки.

## Не путать с

- **Сайтом Минфина РФ и ГИИС «Электронный бюджет»** — национальный учётный контур; IMF Data не заменяет [открытые наборы Минфина](/data-sources/federal/minfin-opendata) при задачах по КБК и отчётным формам.
