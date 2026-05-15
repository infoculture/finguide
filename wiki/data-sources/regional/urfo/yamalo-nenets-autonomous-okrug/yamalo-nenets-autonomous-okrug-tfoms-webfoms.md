---
title: 'Ямало-Ненецкий автономный округ: ТФОМС (webfoms.ru)'
sidebar_label: ТФОМС ЯНАО
tags:
  - data-source
  - regional
  - social
last_updated: 2026-05-15
slug: /data-sources/regional/yamalo-nenets-autonomous-okrug-tfoms-webfoms
source_url: 'https://webfoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; отчёты и регламенты часто в PDF
description: >-
  Официальный сайт ТФОМС Ямало-Ненецкого автономного округа: программа ОМС,
  тарифы, раскрытие информации и отчётность фонда.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-depfin
  - /data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Ямало-Ненецкий автономный округ: ТФОМС (webfoms.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Обязательное медицинское страхование на территории **Ямало-Ненецкого АО** |
| Тип доступа | Официальный сайт ТФОМС |
| Основные форматы | HTML; нормативные акты и отчёты — часто PDF |
| Оператор | Территориальный фонд обязательного медицинского страхования Ямало-Ненецкого автономного округа |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **официальный контур ОМС** округа: программа государственных гарантий, тарифы, реестры и отчётность фонда. **Региональный бюджет** — на [Депфине](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin); макроагрегаты по внебюджетным фондам — [Росстат](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (главная страница webfoms.ru отвечает HTTP 200) |
| Полнота (`data_completeness`) | частичная — фокус на регламенте ОМС и раскрытии, не на полном финансовом датасете бюджета |
| Машиночитаемость (`machine_readability`) | HTML/PDF; открытые API не заявлены |
| Юридическая значимость (`legal_significance`) | официальный сайт территориального фонда ОМС |
| Задержка обновления (`update_lag`) | зависит от цикла программы ОМС и отчётности |
| Глубина архива (`archive_depth`) | по политике размещения документов |
| Лицензия (`license_or_terms`) | условия сайта ТФОМС |

## Описание

ТФОМС публикует материалы по **страховой составляющей** здравоохранения: нормативные акты, тарифы, реестры медорганизаций и отчёты о финансово-хозяйственной деятельности в части раскрытия. Домен **webfoms.ru** указан в региональной таблице источников как канонический для ЯНАО (код субъекта 89).

## Оператор

Территориальный фонд обязательного медицинского страхования Ямало-Ненецкого автономного округа — https://webfoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт ТФОМС | https://webfoms.ru/ | HTML |

## Объекты данных и показатели

- **Программа ОМС**, приказы и методические материалы ТФОМС.
- **Тарифы**, реестры медорганизаций (в объёме публикации).
- **Бюджет ТФОМС** и финансовые показатели ОМС — в разделах раскрытия.
- **Не смешивать** с окружным бюджетом без явной классификации источника.

## Периодичность обновления

Связана с **утверждением** программы ОМС, **пересмотром тарифов** и **отчётными** датами фонда.

## Ограничения и особенности

- При смене домена оператором обновите `source_url` в карточке.
- Не путать с федеральным порталом ФОМС — это **региональный** фонд ЯНАО.

## Связанные страницы wiki

- [Департамент финансов ЯНАО](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin) — бюджетный контур округа.
- [Росстат: госфинансы и внебюджетные фонды](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution) — макроагрегаты для сверки.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Сводная страница субъекта](/data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview) — все источники по округу.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.
