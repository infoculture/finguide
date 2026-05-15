---
title: 'Тамбовская область: город Тамбов — электронный бюджет и бюджет для граждан'
sidebar_label: Город Тамбов — электронный бюджет
tags:
  - data-source
  - regional
  - municipal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/tambov-oblast-tambov-city-electronic-budget
source_url: 'https://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet'
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
  Раздел сайта администрации городского округа «город Тамбов»: электронный
  бюджет и материалы «бюджета для граждан» по муниципальному бюджету.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-tambov-oblast-sources-overview
  - /data-sources/regional/tambov-oblast-minfin-budget-for-citizens
  - /data-sources/regional/tambov-oblast-portal-tambov-gov
  - /data-sources/regional/consolidated-budgets
---

# Тамбовская область: город Тамбов — электронный бюджет и бюджет для граждан

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальное** образование — городской округ «город Тамбов» |
| Тип доступа | Официальный сайт администрации; раздел комитета финансов |
| Основные форматы | HTML; вложения — PDF и др. |
| Оператор | Администрация городского округа «город Тамбов» (Комитет финансов) |
| Режим доступа | Открытый |

Коротко: **муниципальная** витрина электронного бюджета и материалов для граждан по бюджету города. Для **областного** бюджета используйте [Минфин области](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens) и [портал правительства](/data-sources/regional/tambov-oblast-portal-tambov-gov).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от наполнения раздела |
| Машиночитаемость (`machine_readability`) | HTML; структура URL может использовать транслитерацию пути |
| Юридическая значимость (`legal_significance`) | официальный орган МСУ |
| Задержка обновления (`update_lag`) | привязана к циклу муниципального бюджета |
| Глубина архива (`archive_depth`) | зависит от CMS города |
| Лицензия (`license_or_terms`) | условия сайта администрации |

## Описание

Раздел публикует материалы **прозрачности муниципального бюджета**: пояснения для граждан, отчёты об исполнении (в формах, которые выбирает администрация). Для **консолидации** с областным уровнем см. [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Администрация городского округа «город Тамбов» — канонический вход: https://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| «Электронный бюджет» (Комитет финансов) | https://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet | HTML |

## Объекты данных и показатели

- Агрегированные **доходы и расходы** бюджета городского округа (как публикует администрация).
- **Отчёты об исполнении** — в форматах, размещённых на странице.
- Ключ связки: **ОКТМО** городского округа, **финансовый год**.

## Периодичность обновления

Вокруг утверждения и исполнения муниципального бюджета.

## Ограничения и особенности

- Путь содержит транслитерацию (`ehlektronnyi-bjudzhet`); при редизайне сайта URL может измениться — фиксируйте дату доступа.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w '%{http_code}\n' 'https://city.tambov.gov.ru/departments/komitet-finansov/ehlektronnyi-bjudzhet'
```

## Связанные страницы wiki

- [Минфин области: бюджет для граждан](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens) — **областной** уровень.
- [Портал органов власти области](/data-sources/regional/tambov-oblast-portal-tambov-gov) — региональный контекст.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — как соотносить уровни.
- [Сводная страница субъекта](/data-sources/regional/subject-tambov-oblast-sources-overview) — прочие источники по области.

## Не путать с

- **[Минфин Тамбовской области](/data-sources/regional/tambov-oblast-minfin-budget-for-citizens)** — бюджет **субъекта РФ**, не муниципалитета.
