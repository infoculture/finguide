---
title: >-
  Смоленский муниципальный округ: раздел «Бюджет для граждан» (официальный сайт
  МО)
sidebar_label: Бюджет для граждан (Смоленский МО)
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens
source_url: "https://smol-ray.smolensk.ru/ray/byudj-grazhdan"
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: municipal
data_completeness: partial
machine_readability: HTML/PDF по мере размещения; без стандартизированного API
description: >-
  Официальный раздел сайта Смоленского муниципального округа: материалы бюджета
  для граждан и открытого бюджета по муниципальному бюджету округа (пояснения,
  отчёты, документы).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional/smolensk-oblast-open-budget-minfin-section
  - /data-sources/regional/smolensk-oblast-ministry-of-finance
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Смоленский муниципальный округ: «Бюджет для граждан»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальное образование** — Смоленский муниципальный округ |
| Тип доступа | Официальный сайт МО |
| Основные форматы | HTML; PDF, если документы выложены файлами |
| Оператор | Администрация Смоленского муниципального округа |
| Режим доступа | Открытый |

Коротко: **муниципальная** витрина для граждан по бюджету округа. Для **областного** бюджета используйте [раздел «Открытый бюджет» на сайте Минфина](/data-sources/regional/smolensk-oblast-open-budget-minfin-section) и [сайт Минфина области](/data-sources/regional/smolensk-oblast-ministry-of-finance).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения на муниципальном сайте |
| Машиночитаемость (`machine_readability`) | HTML; структура страниц может меняться при обновлении CMS |
| Юридическая значимость (`legal_significance`) | официальный орган МСУ |
| Задержка обновления (`update_lag`) | привязана к циклу муниципального бюджета и срокам отчётности |
| Глубина архива (`archive_depth`) | зависит от политики архивации на сайте МО |
| Лицензия (`license_or_terms`) | условия использования материалов — по сайту оператора |

## Описание

Раздел предназначен для **прозрачности муниципального бюджета**: пояснения к доходам и расходам, отчёты об исполнении в доступной форме. Для анализа **консолидации** с областным уровнем см. [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Администрация Смоленского муниципального округа — канонический вход: https://smol-ray.smolensk.ru/ray/byudj-grazhdan

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Бюджет для граждан» | https://smol-ray.smolensk.ru/ray/byudj-grazhdan | HTML |

## Объекты данных и показатели

- Агрегированные показатели **доходов и расходов** бюджета Смоленского муниципального округа (в форме публикаций на сайте).
- **Отчёты об исполнении** муниципального бюджета — как выложены оператором.
- Ключи связки: **ОКТМО** муниципального округа, **финансовый год** (уточняйте по таблицам на странице).

## Периодичность обновления

Обновляется вокруг утверждения местного бюджета и публикации отчётности об исполнении.

## Ограничения и особенности

- Некоторые пути на муниципальных порталах отдают **403** автоматическим клиентам без браузерного `User-Agent`; для проверки используйте браузер или запрос с типичным заголовком.
- При смене CMS путь `/ray/...` может измениться — фиксируйте дату доступа при цитировании.

## Примеры доступа

```bash
curl -sI -A "Mozilla/5.0" --max-time 20 "https://smol-ray.smolensk.ru/ray/byudj-grazhdan" | head -n 5
```

## Связанные страницы wiki

- [Открытый бюджет Смоленской области (Минфин)](/data-sources/regional/smolensk-oblast-open-budget-minfin-section) — **областной** уровень.
- [Министерство финансов Смоленской области](/data-sources/regional/smolensk-oblast-ministry-of-finance) — нормативы и отчёты субъекта РФ.
- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по области.

## Не путать с

- **[Открытый бюджет на сайте Минфина области](/data-sources/regional/smolensk-oblast-open-budget-minfin-section)** — это **областной** бюджет, не муниципальный.
