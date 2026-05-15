---
title: "Смоленская область: «Открытый бюджет» (раздел сайта Минфина области)"
sidebar_label: Открытый бюджет (Минфин Смоленской обл.)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/smolensk-oblast-open-budget-minfin-section
source_url: "https://fin.smolensk.ru/ob"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и вложения; без гарантированного API
description: >-
  Раздел официального сайта Минфина Смоленской области: материалы открытого
  бюджета и бюджета для граждан по областному бюджету (пояснения, отчёты,
  визуализации и файлы по мере размещения).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional/smolensk-oblast-ministry-of-finance
  - /data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Смоленская область: «Открытый бюджет» на сайте Минфина

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Областной** бюджет Смоленской области |
| Тип доступа | Подраздел сайта Минфина области |
| Основные форматы | HTML; PDF и таблицы по мере публикации |
| Оператор | Министерство финансов Смоленской области |
| Режим доступа | Открытый |

Коротко: **гражданская витрина** областного бюджета на домене Минфина. Полный контур нормативов и «служебных» материалов см. на [главной странице Минфина](/data-sources/regional/smolensk-oblast-ministry-of-finance). **Муниципальный** бюджет Смоленского МО — [отдельная карточка](/data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от наполнения раздела по годам |
| Машиночитаемость (`machine_readability`) | HTML и файлы; структура страниц может меняться |
| Юридическая значимость (`legal_significance`) | официальный финансовый орган субъекта РФ |
| Задержка обновления (`update_lag`) | привязана к циклу бюджета и отчётности |
| Глубина архива (`archive_depth`) | зависит от политики хранения на сайте |
| Лицензия (`license_or_terms`) | условия сайта оператора |

## Описание

Раздел `/ob` предназначен для **прозрачности областного бюджета** в доступной форме: агрегированные показатели, пояснения, отчёты об исполнении. Для **машинных сверок** с федеральными агрегатами используйте [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

Министерство финансов Смоленской области — канонический вход: https://fin.smolensk.ru/ob

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| «Открытый бюджет» | https://fin.smolensk.ru/ob | HTML |

## Объекты данных и показатели

- **Бюджет для граждан** и сопутствующие пояснения по доходам и расходам области.
- **Отчёты об исполнении** областного бюджета — в форме публикаций Минфина.
- Ключи: **финансовый год**, **КБК/агрегаты** в таблицах, **ОКТМО** области при сопоставлении с другими источниками.

## Периодичность обновления

Обновляется вокруг утверждения бюджета, внесения изменений и отчётности об исполнении.

## Ограничения и особенности

- Сайт может отвечать **403** на запросы без браузерного `User-Agent`.

## Примеры доступа

```bash
curl -sI -A "Mozilla/5.0" --max-time 20 "https://fin.smolensk.ru/ob" | head -n 5
```

## Связанные страницы wiki

- [Министерство финансов Смоленской области](/data-sources/regional/smolensk-oblast-ministry-of-finance) — корневой сайт и прочие разделы.
- [Бюджет для граждан (Смоленский МО)](/data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens) — муниципальный уровень.
- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по области.

## Не путать с

- **[Муниципальный бюджет для граждан](/data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens)** — это бюджет **Смоленского муниципального округа**, не областной.
