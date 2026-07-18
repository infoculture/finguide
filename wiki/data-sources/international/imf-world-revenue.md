---
title: IMF World Revenue Longitudinal Database (WoRLD), 2026 update
sidebar_label: IMF WoRLD
description: >-
  Длинные годовые ряды налоговых и неналоговых доходов почти всех стран IMF по
  методологии GFSM; версия 2026 доведена до 2024 года.
tags: [data-source, international, statistics, revenue]
last_updated: 2026-07-16
slug: /data-sources/international/imf-world-revenue
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/imf
source_url: https://data.imf.org/Datasets/WORLD/WoRLD-2026-Update
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats: [csv, json, sdmx, html]
status: current
last_verified: 2026-07-16
jurisdiction_level: international
data_completeness: partial
machine_readability: portal export and SDMX API
legal_significance: official
update_lag: annual vintage
archive_depth: early 1980s to 2024 globally
license_or_terms: IMF Copyright and Usage terms
related_pages:
  - /data-sources/international/imf-gfs
  - /data-sources/international/imf-qgfs
  - /reference/international-gfs-cofog
  - /howto/analysis/international-fiscal-data
---

# IMF World Revenue Longitudinal Database (WoRLD), 2026 update

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | 195 стран, включая 191 государство — член IMF; годовые доходы с начала 1980-х, текущая версия до 2024 года |
| Тип доступа | Карточка версии, IMF Data Explorer, выгрузка и SDMX API |
| Основные форматы | Табличная выгрузка, CSV/JSON/SDMX в зависимости от канала, HTML |
| Оператор | [Международный валютный фонд](/organizations/imf) (IMF), Fiscal Affairs Department |
| Режим доступа | Публичная карточка и просмотр; API-инструменты нового портала могут требовать учётную запись |

Коротко: WoRLD подходит для длинных межстрановых рядов структуры доходов. **Россия входит в охват как член IMF с 1992 года**; верхняя граница версии — 2024 год, но не каждый российский показатель обязан иметь непрерывные наблюдения за 1992–2024 годы.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная: основные ряды имеют широкий охват, детализация налогов и неналоговых доходов содержит страновые пропуски |
| Машиночитаемость (`machine_readability`) | Выгрузка IMF Data Portal и SDMX API; схема зависит от актуальной версии набора |
| Юридическая значимость (`legal_significance`) | Официальная база IMF, построенная из surveillance data; не первичный реестр ФНС или Казначейства |
| Задержка обновления (`update_lag`) | Годовые версии; выпуск 2026 расширил временной охват до 2024 года |
| Глубина архива (`archive_depth`) | Глобально с начала 1980-х; для России возможный интервал начинается с членства в IMF в 1992 году, с пропусками по компонентам |
| Лицензия (`license_or_terms`) | Условия IMF Copyright and Usage и правила конкретной выгрузки |

## Описание

WoRLD объединяет общие доходы, налоговые и неналоговые компоненты, социальные взносы, гранты и доходы от природных ресурсов. Версия 2026 содержит 195 стран и доводит глобальный горизонт до 2024 года. Источник — данные надзора IMF, приведённые к классификации Government Finance Statistics Manual.

Для России интервал `1992–2024` — граница возможного странового охвата текущей версии, а не обещание полного прямоугольника. Перед расчётом долей выгрузите выбранные компоненты и составьте таблицу фактически непустых лет.

## Оператор

[Международный валютный фонд](https://www.imf.org/) — издатель набора и методической записки WoRLD.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Карточка версии 2026 | https://data.imf.org/Datasets/WORLD/WoRLD-2026-Update | HTML, переход к данным |
| Карточка набора WoRLD | https://data.imf.org/Datasets/WORLD | HTML, Data Explorer, download/API |
| Методическая записка версии 2026 | https://www.elibrary.imf.org/view/journals/005/2026/005/article-A001-en.xml | HTML/PDF |

## Объекты данных и показатели

- Наблюдение: страна, год, компонент доходов, уровень правительства и единица, обычно процент ВВП или доля доходов.
- Ключевые компоненты: общий и налоговый доход, налоги на доходы, товары и услуги, торговлю и имущество, социальные взносы, гранты и прочие/ресурсные неналоговые доходы.
- КБК доходов РФ нельзя присоединить к WoRLD по коду: сначала требуется содержательное агрегирование национальных строк к категории GFSM.

## Периодичность обновления

IMF заявляет ежегодное обновление. Анализ должен хранить название версии (`2026 update`) и дату выгрузки, поскольку пересматриваются прошлые наблюдения и ВВП-знаменатели.

## Ограничения и особенности

- Периметр может быть центральным или генеральным правительством в зависимости от значимости субнациональных доходов для country surveillance.
- Детальные компоненты существенно менее полны, чем общий и налоговый доход; проверяйте пропуски до построения структуры.
- Ряд в процентах ВВП чувствителен к пересмотрам национальных счетов и не совпадает с кассовой суммой доходов в рублях.

## Связанные страницы wiki

- [IMF Data / GFS](/data-sources/international/imf-gfs) — общий вход в семейство GFS и методологию GFSM.
- [IMF QGFS](/data-sources/international/imf-qgfs) — квартальные операции и балансы вместо длинного годового ряда доходов.
- [Россия, GFS и COFOG](/reference/international-gfs-cofog) — ограничения мостика между GFSM и российскими КБК.
- [How-to по международным фискальным данным](/howto/analysis/international-fiscal-data) — проверка фактических лет и единиц перед сравнением.

## Не путать с

- **Налоговой статистикой ФНС** — WoRLD нормализует международные агрегаты, а не раскрывает плательщиков или начисления по российским налогам.
- **Fiscal Monitor** — WoRLD хранит структуру доходов и исторические наблюдения; Fiscal Monitor ориентирован на восемь сводных фискальных индикаторов и прогноз.
