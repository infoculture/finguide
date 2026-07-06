---
title: >-
  Хабаровский край: «Бюджет для граждан» (Министерство финансов Хабаровского
  края)
sidebar_label: «Бюджет для граждан» (Минфин края)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khabarovsk-krai-budget-for-citizens-minfin
source_url: 'https://minfin.khabkrai.ru/portal/Show/Category/124?ItemId=526'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Раздел портала Минфина Хабаровского края с брошюрами и материалами «Бюджет
  для граждан»: доступное изложение доходов, расходов и ключевых направлений
  краевого бюджета.
content_type: data_source
entity_type: data-source
data_completeness: partial
machine_readability: html_pdf
related_pages:
  - /data-sources/regional/subject-khabarovsk-krai-sources-overview
  - /data-sources/regional/khabarovsk-krai-minfin
  - /data-sources/regional/khabarovsk-krai-khabarovsk-city-open-budget
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Хабаровский край: «Бюджет для граждан» (Министерство финансов Хабаровского края)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Краевой бюджет (объяснение для граждан) |
| Тип доступа | Публичный раздел портала Минфина |
| Основные форматы | HTML; типично PDF-брошюры по годам |
| Оператор | Министерство финансов Хабаровского края |
| Режим доступа | Открытый |

Коротко: **упрощённое** представление краевого бюджета рядом с полным комплектом материалов на [сайте Минфина](/data-sources/regional/khabarovsk-krai-minfin); для муниципального уровня города см. [открытый бюджет Хабаровска](/data-sources/regional/khabarovsk-krai-khabarovsk-city-open-budget).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — агрегированные показатели; не заменяет юридически значимый текст закона о бюджете |
| Машиночитаемость (`machine_readability`) | HTML и PDF; не API |
| Юридическая значимость (`legal_significance`) | официальное разъяснение органом власти; первичный юридический текст — в НПА |
| Задержка обновления (`update_lag`) | обычно привязана к циклу принятия бюджета |
| Глубина архива (`archive_depth`) | зависит от ведения раздела на портале |
| Лицензия (`license_or_terms`) | не выделена; материалы для свободного ознакомления |

## Описание

Раздел **«Бюджет для граждан»** предназначен для понятного изложения параметров краевого бюджета без погружения в полный комплект приложений. Для аналитики открытых данных используйте как **витрину для коммуникации**, а для построения рядов — первичные таблицы и наборы с [Минфина](/data-sources/regional/khabarovsk-krai-minfin) и федеральные открытые данные [«Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

Министерство финансов Хабаровского края — канонический вход: https://minfin.khabkrai.ru/portal/Show/Category/124?ItemId=526

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел портала | https://minfin.khabkrai.ru/portal/Show/Category/124?ItemId=526 | HTML |

## Объекты данных и показатели

- Брошюры и обзоры **доходов и расходов** краевого бюджета в доступной форме.
- Ссылки на актуальный **финансовый год** и пояснительные записки (по мере размещения).

## Периодичность обновления

Обновляется при подготовке проекта и утверждённого бюджета, а также при выпуске годовых пояснений.

## Ограничения и особенности

- Параметры `Category` и `ItemId` в URL относятся к CMS портала и могут измениться при миграции; при ошибке откройте [главную Минфина](/data-sources/regional/khabarovsk-krai-minfin) и найдите раздел через меню.

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-khabarovsk-krai-sources-overview) — все источники по Хабаровскому краю в wiki.
- [Минфин Хабаровского края](/data-sources/regional/khabarovsk-krai-minfin) — полный комплект бюджетных материалов.
- [Открытый бюджет города Хабаровска](/data-sources/regional/khabarovsk-krai-khabarovsk-city-open-budget) — муниципальный уровень внутри края.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст сопоставления уровней.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые федеральные ряды для сверки.

## Не путать с

- **[Открытый бюджет Хабаровска](/data-sources/regional/khabarovsk-krai-khabarovsk-city-open-budget)** — муниципальный контур; показатели и классификации не смешивать с краевым бюджетом без явной связки по ОКТМО и уровню власти.
