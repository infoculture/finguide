---
title: 'Астраханская область: открытый бюджет (портал iFinMon, astrakhan.ifinmon.ru)'
sidebar_label: Открытый бюджет (iFinMon)
tags:
  - data-source
  - regional
  - budget
  - municipal
last_updated: 2026-05-15
slug: /data-sources/regional/astrakhan-oblast-open-budget-ifinmon
source_url: 'http://www.astrakhan.ifinmon.ru/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и интерактив на стороне портала; без гарантированного открытого API
description: >-
  Региональный портал «Открытый бюджет» на платформе iFinMon: наглядные отчёты,
  показатели исполнения консолидированного бюджета, доходы и расходы, а также
  материалы по муниципальным образованиям в объёме витрины.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-astrakhan-oblast-sources-overview
  - /data-sources/regional/astrakhan-oblast-minfin
  - /data-sources/regional/astrakhan-oblast-gov-portal
  - /glossary/budget
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Астраханская область: открытый бюджет (iFinMon)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Астраханская область: **наглядная** витрина по областному и **муниципальному** контуру (в объёме размещённых данных) |
| Тип доступа | Тематический портал «Открытый бюджет» |
| Основные форматы | HTML, интерактивные визуализации |
| Оператор | Оператор портала и владельцы данных — в составе регионального контура (см. импринт на сайте) |
| Режим доступа | Открытый просмотр |

Коротко: **гражданская витрина** показателей бюджета: дашборды, отчёты и разрезы по доходам/расходам. Для **первичных форм** отчётности и нормативных пакетов опирайтесь на [Минфин области](/data-sources/regional/astrakhan-oblast-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — отбор и агрегация для наглядности |
| Машиночитаемость (`machine_readability`) | HTML; не заменяет открытые машинные наборы |
| Юридическая значимость (`legal_significance`) | справочно-аналитическая витрина; юридически значимые тексты — у финоргана и на ОИППИ |
| Задержка обновления (`update_lag`) | зависит от обновления исходных показателей |
| Глубина архива (`archive_depth`) | по политике платформы и региональных администраторов |
| Лицензия (`license_or_terms`) | условия сайта — у оператора портала |

## Описание

Портал **astrakhan.ifinmon.ru** типичен для линейки **iFinMon**: визуализации исполнения, сводные отчёты и, при наличии, **муниципальный** слой. Базовые определения см. в [глоссарии «Бюджет»](/glossary/budget).

## Оператор

Портал открытого бюджета Астраханской области — http://www.astrakhan.ifinmon.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | http://www.astrakhan.ifinmon.ru/ | HTML |

## Объекты данных и показатели

- **Агрегированные** доходы и расходы, ключевые направления (в объёме витрины).
- **Муниципальные** срезы — если включены в конфигурацию портала.
- **Не гарантирует** полную детализацию по КБК/КОСГУ — для этого используйте отчётность и федеральные наборы.

## Периодичность обновления

Связана с **циклом бюджета** и обновлением исходных данных, подаваемых на портал.

## Ограничения и особенности

- Сессии портала могут использовать **cookies** и промежуточные редиректы — учитывайте при скриптовании.

## Примеры доступа

```bash
curl -sI --max-time 20 "http://www.astrakhan.ifinmon.ru/" | head -n 5
```

## Связанные страницы wiki

- [Министерство финансов Астраханской области](/data-sources/regional/astrakhan-oblast-minfin) — полный контур материалов финоргана.
- [Портал органов власти](/data-sources/regional/astrakhan-oblast-gov-portal) — общий официальный вход региона.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые федеральные выгрузки.
- [Сводная страница субъекта](/data-sources/regional/subject-astrakhan-oblast-sources-overview) — все источники по области.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.

## Не путать с

- **[Минфин Астраханской области](/data-sources/regional/astrakhan-oblast-minfin)** — первичные бюджетные документы и отчётность финоргана, а не только визуализация.
