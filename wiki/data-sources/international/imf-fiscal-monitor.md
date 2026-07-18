---
title: IMF Fiscal Monitor Database, April 2026
sidebar_label: IMF Fiscal Monitor
description: >-
  Восемь годовых фискальных индикаторов IMF с историей и прогнозом для России и
  других стран; текущая версия охватывает 1990–2031 годы.
tags: [data-source, international, statistics, macro]
last_updated: 2026-07-16
slug: /data-sources/international/imf-fiscal-monitor
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/imf
source_url: https://www.imf.org/external/datamapper/datasets/FM
data_source_kind: api
jurisdiction: multilevel
access: open
formats: [json, html]
status: current
last_verified: 2026-07-16
jurisdiction_level: international
data_completeness: partial
machine_readability: DataMapper JSON API and HTML
legal_significance: official
update_lag: semiannual vintage
archive_depth: 1990 to 2031 including projections
license_or_terms: IMF Copyright and Usage terms
related_pages:
  - /data-sources/international/imf-gfs
  - /data-sources/international/imf-qgfs
  - /data-sources/international/imf-world-revenue
  - /reference/international-gfs-cofog
  - /howto/analysis/international-fiscal-data
---

# IMF Fiscal Monitor Database, April 2026

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | 237 стран и территорий; восемь годовых индикаторов за 1990–2031 годы, включая прогноз |
| Тип доступа | IMF DataMapper и документированный JSON API |
| Основные форматы | JSON, HTML |
| Оператор | [Международный валютный фонд](/organizations/imf) (IMF) |
| Режим доступа | Открытый просмотр и API; CDN может отвечать 403 отдельным автоматическим клиентам |

Коротко: Fiscal Monitor даёт компактную панель дефицита, первичного и скорректированного баланса, доходов, расходов и долга. **Россия присутствует**: профиль RUS показывает набор Fiscal Monitor за 1990–2031 годы; будущие годы — прогнозы, а исторические значения могут включать оценки IMF staff.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная: восемь сводных индикаторов, возможны пустые ячейки и оценки вместо официальных наблюдений |
| Машиночитаемость (`machine_readability`) | Публичный DataMapper JSON API; CDN может ограничивать неинтерактивные запросы |
| Юридическая значимость (`legal_significance`) | Официальная аналитическая база IMF, не российская первичная отчётность |
| Задержка обновления (`update_lag`) | Версионная публикация вместе с Fiscal Monitor; текущая карточка — April 2026 |
| Глубина архива (`archive_depth`) | 1990–2031 в текущей версии, где конечные годы являются прогнозом |
| Лицензия (`license_or_terms`) | Условия IMF Copyright and Usage |

## Описание

Набор содержит чистое кредитование/заимствование, первичный баланс, циклически скорректированные балансы, доходы, расходы, валовой и чистый долг. Для большинства стран используется периметр генерального правительства и GFSM 2014, но IMF прямо предупреждает о страновых исключениях, статистических разрывах, сшивке рядов и оценках сотрудников.

Версия April 2026 опирается на WEO April 2026, если не указано иное. Поэтому одно значение нельзя автоматически объявлять опубликованной Россией кассовой отчётностью.

## Оператор

[Международный валютный фонд](https://www.imf.org/) — издатель Fiscal Monitor и DataMapper.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Карточка набора | https://www.imf.org/external/datamapper/datasets/FM | HTML |
| Профиль России | https://www.imf.org/external/datamapper/profile/RUS | HTML |
| Документация DataMapper API | https://www.imf.org/external/datamapper/api/ | HTML, JSON endpoints |

## Объекты данных и показатели

- Наблюдение: страна, год и один из восьми фискальных индикаторов.
- Основные единицы — проценты ВВП; для циклически скорректированных показателей используется потенциальный ВВП.
- Метка года не различает наблюдение, оценку и прогноз сама по себе: границу нужно читать в примечаниях версии.

## Периодичность обновления

Набор обновляется версиями Fiscal Monitor. При воспроизводимом анализе сохраняйте месяц и год версии, потому что IMF пересматривает историю и прогнозы.

## Ограничения и особенности

- Диапазон 1990–2031 не означает наличие каждого из восьми российских показателей за каждый год.
- IMF staff может заполнять пробелы оценками и сглаживать структурные разрывы; значения могут отличаться от GFS и национальной отчётности.
- Автоматический запрос к API может получить 403 от CDN. Поэтому карточка не содержит команды, которая не прошла проверку из редакционной среды.

## Связанные страницы wiki

- [IMF QGFS](/data-sources/international/imf-qgfs) — квартальные переданные данные, а не годовые оценки и прогнозы.
- [IMF WoRLD](/data-sources/international/imf-world-revenue) — детальная структура доходов в длинном годовом ряду.
- [Россия, GFS и COFOG](/reference/international-gfs-cofog) — различия периметра и методики.
- [How-to по международным фискальным данным](/howto/analysis/international-fiscal-data) — выбор набора и фиксация винтажа.

## Не путать с

- **Отчётом Fiscal Monitor в PDF** — база содержит страновые ряды, а доклад объясняет глобальный сюжет и методологию выпуска.
- **GFS Yearbook/QGFS** — Fiscal Monitor может включать оценки, прогнозы и сшитые ряды IMF staff.
