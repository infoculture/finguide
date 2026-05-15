---
title: 'Архангельск: открытый бюджет (администрация городского округа)'
sidebar_label: Открытый бюджет (г. Архангельск)
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/arkhangelsk-oblast-arhcity-open-budget
source_url: 'https://www.arhcity.ru/?page=1713/0'
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
machine_readability: html
description: >-
  Раздел сайта администрации городского округа «Город Архангельск»: материалы
  открытого бюджета и отчётности по муниципальному бюджету города.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-arkhangelsk-oblast-sources-overview
  - /data-sources/regional/arkhangelsk-oblast-minfin-dvinaland
  - /data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Архангельск: открытый бюджет (администрация городского округа)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальное** образование — городской округ **«Город Архангельск»** |
| Тип доступа | Официальный сайт **администрации** ГО |
| Основные форматы | HTML, при наличии вложений — PDF |
| Оператор | Администрация городского округа «Город Архангельск» |
| Режим доступа | Открытый |

Коротко: **муниципальная** витрина материалов **открытого бюджета** и отчётности по **городскому** бюджету. Для **областного** бюджета используйте **[Минфин области](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland)** и **[«Бюджет для граждан»](/data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты размещения на муниципальном сайте |
| Машиночитаемость (`machine_readability`) | HTML; без стандартизированного публичного API |
| Юридическая значимость (`legal_significance`) | официальный орган **МСУ** для размещаемых документов |
| Задержка обновления (`update_lag`) | привязана к циклу **муниципального** бюджета |
| Глубина архива (`archive_depth`) | зависит от CMS и политики архивации |
| Лицензия (`license_or_terms`) | условия сайта администрации |

## Описание

Узел портала **arhcity.ru** предназначен для **прозрачности городского бюджета**: проекты и отчёты, материалы для граждан. URL с параметром `page=` типичен для порталов предыдущих поколений — при **редизайне** путь может измениться; фиксируйте дату доступа.

## Оператор

Администрация городского округа «Город Архангельск» — канонический вход: https://www.arhcity.ru/?page=1713/0

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел открытого бюджета / отчётности | https://www.arhcity.ru/?page=1713/0 | HTML |

## Объекты данных и показатели

- Материалы по **доходам и расходам** бюджета **городского округа** (агрегированно, в форме публикаций на сайте).
- **Отчёты** об исполнении муниципального бюджета — в формате, который выкладывает администрация.
- Ключ связки: **ОКТМО** городского округа, **финансовый год** (уточняйте по таблицам на странице).

## Периодичность обновления

Обновляется вокруг утверждения **муниципального** бюджета и цикла отчётности об исполнении.

## Ограничения и особенности

- Не путать с **областным** контуром: см. перекрёстные ссылки ниже.

## Связанные страницы wiki

- [Министерство финансов Архангельской области](/data-sources/regional/arkhangelsk-oblast-minfin-dvinaland) — **областной** бюджетный контур.
- [«Бюджет для граждан» (областной)](/data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin) — упрощённые материалы по **субъекту** РФ.
- [Сводная страница субъекта](/data-sources/regional/subject-arkhangelsk-oblast-sources-overview) — все источники по области в wiki.

## Не путать с

- **[«Бюджет для граждан» на сайте Минфина области](/data-sources/regional/arkhangelsk-oblast-budget-for-citizens-minfin)** — **областной** бюджет, не городской.
