---
title: 'Ямало-Ненецкий автономный округ: УФНС России (nalog.gov.ru/rn89)'
sidebar_label: УФНС по ЯНАО
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/yamalo-nenets-autonomous-okrug-ufns
source_url: 'https://www.nalog.gov.ru/rn89'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: HTML; федеральные сервисы ФНС — отдельные карточки wiki
description: >-
  Региональная страница ФНС России (код 89): новости территориального управления,
  сервисы и контакты для налогоплательщиков Ямало-Ненецкого автономного округа.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview
  - /data-sources/federal/pb-nalog-ru
  - /organizations/fns
  - /glossary/tax
  - /data-sources/regional/how-to-find-regional-data
---

# Ямало-Ненецкий автономный округ: УФНС России (nalog.gov.ru/rn89)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Территориальное управление ФНС** по Ямало-Ненецкому АО (региональный «вход» к федеральной системе) |
| Тип доступа | Веб-портал на домене ФНС |
| Основные форматы | HTML |
| Оператор | УФНС России по Ямало-Ненецкому автономному округу |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **официальный региональный контур** налогового администрирования: объявления, сервисы, навигация к федеральным личным кабинетам. Для **аналитики по организациям** — [«Прозрачный бизнес»](/data-sources/federal/pb-nalog-ru).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — сервисы и новости УФНС, не полный налоговый датасет |
| Машиночитаемость (`machine_readability`) | HTML; выгрузки — через федеральные источники |
| Юридическая значимость (`legal_significance`) | официальный сайт федерального органа (территориальное звено) |
| Задержка обновления (`update_lag`) | зависит от федеральной платформы |
| Глубина архива (`archive_depth`) | по политике раздела |
| Лицензия (`license_or_terms`) | правила nalog.gov.ru |

## Описание

Страница `rn89` агрегирует **локальный контекст** (контакты, новости, региональные материалы) вокруг **единой** экосистемы ФНС. Код региона **89** соответствует Ямало-Ненецкому автономному округу. См. [глоссарий: «Налог»](/glossary/tax).

## Оператор

Управление Федеральной налоговой службы по Ямало-Ненецкому автономному округу — https://www.nalog.gov.ru/rn89

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональная страница УФНС | https://www.nalog.gov.ru/rn89 | HTML |

## Объекты данных и показатели

- **Новости и разъяснения** УФНС, календарь отчётности (в объёме публикации).
- **Ссылки** на федеральные сервисы (личные кабинеты, запись на приём).
- **Не является** источником агрегированных поступлений в бюджет округа — для бюджета см. [Депфин](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin) и [ФЭА-портал](/data-sources/regional/yamalo-nenets-autonomous-okrug-fea-portal).

## Периодичность обновления

Новости и сервисные блоки обновляются **по мере необходимости**; федеральные справочники — по графику ФНС.

## Ограничения и особенности

- Автоматические запросы к nalog.gov.ru могут получать **403** (WAF) — учитывайте при скрейпинге.

## Связанные страницы wiki

- [ФНС России (организация)](/organizations/fns) — институциональный контекст.
- [«Прозрачный бизнес»](/data-sources/federal/pb-nalog-ru) — сводные сведения по юрлицам и ИП.
- [Департамент финансов ЯНАО](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin) — региональный бюджет.
- [Сводная страница субъекта](/data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview) — все источники по округу.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.
