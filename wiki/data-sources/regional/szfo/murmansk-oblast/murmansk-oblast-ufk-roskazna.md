---
title: 'Мурманская область: УФК по Мурманской области (Росказна)'
sidebar_label: УФК Мурманской области
tags:
  - data-source
  - regional
  - treasury
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-ufk-roskazna
source_url: 'https://murmansk.roskazna.gov.ru/'
data_source_kind: portal
jurisdiction: federal
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML/PDF; массовые формы исполнения — см. федеральные наборы Росказны
description: >-
  Сайт УФК по Мурманской области: новости территориального управления, разделы об исполнении
  бюджетов и отчётности на территории субъекта, ссылки на федеральные сервисы Росказны.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-open-data-data-gov-ru
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-reports
---

# Мурманская область: УФК по Мурманской области (Росказна)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** орган на территории **Мурманской области** |
| Тип доступа | Официальный сайт территориального органа Федерального казначейства |
| Основные форматы | HTML, **PDF** |
| Оператор | УФК по Мурманской области (структура Росказны) |
| Режим доступа | Открытый |

Коротко: **региональный вход** к материалам казначейства (новости УФК, разделы про **исполнение бюджетов** на территории). Для **табличной отчётности** и форм исполнения ориентируйтесь на [отчёты Росказны](/data-sources/federal/roskazna-reports) и [портал Казначейства](/information-systems/federal/roskazna-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — региональный сайт чаще «надстройка» над федеральными витринами |
| Машиночитаемость (`machine_readability`) | смешанная; для **машинных** сценариев используйте федеральные наборы |
| Юридическая значимость (`legal_significance`) | официальный федеральный оператор |
| Задержка обновления (`update_lag`) | зависит от вида отчётности |
| Глубина архива (`archive_depth`) | см. федеральные архивы форм |
| Лицензия (`license_or_terms`) | см. условия `roskazna.gov.ru` |

## Описание

Сайт УФК дублирует часть **федеральных** сервисов с **локальным** контекстом (контакты, региональные новости, разъяснения). Для **субъектного бюджета** связка обычно такая: [Минфин](/data-sources/regional/murmansk-oblast-minfin) (план/отчётность) ↔ **казначейское исполнение** (федеральный контур) ↔ при необходимости [открытые данные](/data-sources/regional/murmansk-oblast-open-data-data-gov-ru).

## Оператор

УФК по Мурманской области — канонический вход: https://murmansk.roskazna.gov.ru/

Карточка ИС: [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — базовый федеральный контур отчётности и сервисов.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Сайт УФК | https://murmansk.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Объекты:** новости и **региональные** материалы УФК, ссылки на **формы исполнения** бюджетов, разъяснения.
- **Ключи связки:** **финансовый год**, коды бюджетной классификации в **формах казначейства**, идентификаторы получателей средств (в пределах опубликованного).
- **Пробелы:** не заменяет **полный** федеральный каталог открытых данных Росказны.

## Периодичность обновления

Согласована с **бюджетной отчётностью** и новостным циклом ведомства.

## Ограничения и особенности

- Для **скачивания форм** и **машинной обработки** предпочтительны стабильные федеральные точки: [отчёты Росказны](/data-sources/federal/roskazna-reports).
- Субъектовый **план** бюджета остаётся на стороне [Минфина](/data-sources/regional/murmansk-oblast-minfin).

## Связанные страницы wiki

- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — региональный бюджетный контур.
- [Открытые данные на data.gov.ru (карточка организации)](/data-sources/regional/murmansk-oblast-open-data-data-gov-ru) — иногда включает наборы УФК.
- [Портал Федерального казначейства (ИС)](/information-systems/federal/roskazna-portal) — федеральные границы и сервисы.
- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — формализованные формы исполнения.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
