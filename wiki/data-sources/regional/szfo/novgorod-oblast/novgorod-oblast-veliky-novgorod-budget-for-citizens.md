---
title: >-
  Великий Новгород: «Открытый бюджет для граждан» (сайт администрации)
sidebar_label: Бюджет для граждан (Великий Новгород)
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/novgorod-oblast-veliky-novgorod-budget-for-citizens
source_url: 'https://www.adm.nov.ru/view.xhtml?nid=207'
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
machine_readability: HTML; без стандартизированного API
description: >-
  Раздел сайта администрации Великого Новгорода: материалы «открытого бюджета»
  и бюджета для граждан по муниципальному бюджету города (исполнение,
  пояснения).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-novgorod-oblast-sources-overview
  - /data-sources/regional/novgorod-oblast-budget-for-citizens-minfin
  - /data-sources/regional/novgorod-oblast-minfin
  - /data-sources/regional/consolidated-budgets
---

# Великий Новгород: «Открытый бюджет для граждан»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Муниципальное образование — город **Великий Новгород** |
| Тип доступа | Официальный сайт органов местного самоуправления |
| Основные форматы | HTML, PDF (если выложены документы) |
| Оператор | Администрация Великого Новгорода |
| Режим доступа | Открытый |

Коротко: **муниципальная** витрина открытого бюджета и материалов для граждан по бюджету города. Для **областного** бюджета используйте [Минфин области](/data-sources/regional/novgorod-oblast-minfin) и [«Бюджет для граждан» на сайте Минфина](/data-sources/regional/novgorod-oblast-budget-for-citizens-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения на муниципальном сайте |
| Машиночитаемость (`machine_readability`) | HTML; структура страниц может меняться |
| Юридическая значимость (`legal_significance`) | официальный орган МСУ |
| Задержка обновления (`update_lag`) | привязана к циклу муниципального бюджета |
| Глубина архива (`archive_depth`) | зависит от CMS и политики архивации |
| Лицензия (`license_or_terms`) | см. условия сайта администрации |

## Описание

Страница (узел портала) предназначена для **прозрачности муниципального бюджета**: отчёты об исполнении в гражданском изложении, пояснительные материалы. Для анализа **консолидации** с областным уровнем см. [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Администрация Великого Новгорода — канонический вход: https://www.adm.nov.ru/view.xhtml?nid=207

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел «Открытый бюджет для граждан» | https://www.adm.nov.ru/view.xhtml?nid=207 | HTML |

## Объекты данных и показатели

- Материалы по **доходам и расходам** бюджета Великого Новгорода (агрегированно).
- **Отчёты об исполнении** муниципального бюджета — в форме, публикуемой на сайте.
- Ключ связки: **ОКТМО** города, финансовый год (уточняйте по таблицам на странице).

## Периодичность обновления

Обновляется вокруг утверждения муниципального бюджета и отчётности об исполнении.

## Ограничения и особенности

- URL с параметром `nid` типичен для старых Java EE/XHTML порталов — при редизайне адрес может измениться; фиксируйте дату доступа.

## Связанные страницы wiki

- [«Бюджет для граждан» (областной, Минфин)](/data-sources/regional/novgorod-oblast-budget-for-citizens-minfin) — соседний уровень (субъект РФ).
- [Министерство финансов Новгородской области](/data-sources/regional/novgorod-oblast-minfin) — областной бюджетный контур.
- [Сводная страница субъекта](/data-sources/regional/subject-novgorod-oblast-sources-overview) — все источники по области.

## Не путать с

- **[«Бюджет для граждан» на сайте Минфина области](/data-sources/regional/novgorod-oblast-budget-for-citizens-minfin)** — **областной** бюджет, не городской.
