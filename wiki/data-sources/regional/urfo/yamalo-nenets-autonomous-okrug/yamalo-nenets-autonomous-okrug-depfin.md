---
title: 'Ямало-Ненецкий автономный округ: Департамент финансов (fin.yanao.ru)'
sidebar_label: Депфин ЯНАО
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/yamalo-nenets-autonomous-okrug-depfin
source_url: 'https://fin.yanao.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и вложения (часто PDF); открытые API в карточке не зафиксированы
description: >-
  Официальный сайт Департамента финансов ЯНАО: материалы по бюджету округа,
  исполнение, государственный долг и нормативные акты финансового блока субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-fea-portal
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-budget-for-citizens-fa
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-government-npa
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly
  - /data-sources/federal/budget-gov-ru-datasets
  - /glossary/budget
---

# Ямало-Ненецкий автономный округ: Департамент финансов (fin.yanao.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Ямало-Ненецкий АО: **региональный финансовый орган** |
| Тип доступа | Официальный сайт департамента |
| Основные форматы | HTML; типичные вложения — PDF, иногда XLSX |
| Оператор | Департамент финансов Ямало-Ненецкого автономного округа |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **главный региональный вход** к материалам по бюджету округа: нормативка, исполнение, государственный долг и отчётность. Для **гражданской наглядности** и расширенной аналитики см. [портал «Финансово-экономический анализ»](/data-sources/regional/yamalo-nenets-autonomous-okrug-fea-portal) и раздел [«Бюджет для граждан»](/data-sources/regional/yamalo-nenets-autonomous-okrug-budget-for-citizens-fa).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — набор публикуемых файлов меняется по циклу бюджета |
| Машиночитаемость (`machine_readability`) | преимущественно HTML и файлы; без стабильного публичного API |
| Юридическая значимость (`legal_significance`) | официальный сайт финансового органа субъекта |
| Задержка обновления (`update_lag`) | зависит от регламентов сдачи отчётности и обновления разделов |
| Глубина архива (`archive_depth`) | определяется политикой хранения на сайте |
| Лицензия (`license_or_terms`) | условия использования материалов — на сайте оператора |

## Описание

Сайт покрывает **контур бюджета округа**: проекты и пояснительные материалы (в объёме размещения), исполнение, государственный долг и ведомственные нормативные акты. Отдельный раздел действующих документов департамента — в карточке [«Действующие документы Депфина»](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents). Для **актов Правительства и законов** параллельно используйте [официальное опубликование на yanao.ru](/data-sources/regional/yamalo-nenets-autonomous-okrug-government-npa) и сайт [Законодательного Собрания](/data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly).

## Оператор

Департамент финансов Ямало-Ненецкого автономного округа — https://fin.yanao.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://fin.yanao.ru/ | HTML |

## Объекты данных и показатели

- **Документы** по бюджету: законы и подзаконные акты (в объёме публикации на сайте департамента).
- **Исполнение бюджета** и сведения о **государственном долге** округа (в объёме размещения).
- **Связка** с федеральными рядами — через [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) и [глоссарий: «Бюджет»](/glossary/budget).

## Периодичность обновления

Пики обновлений — **подготовка** и **исполнение** бюджета, а также сроки отчётности по календарю финоргана.

## Ограничения и особенности

- При автоматических запросах сайт может отвечать **403** (WAF/антибот); для ручной работы используйте браузер.
- Часть материалов дублируется или дополняется на портале [fa.yanao.ru](/data-sources/regional/yamalo-nenets-autonomous-okrug-fea-portal).

## Связанные страницы wiki

- [Действующие документы Депфина](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents) — ведомственные НПА департамента.
- [Финансово-экономический анализ ЯНАО](/data-sources/regional/yamalo-nenets-autonomous-okrug-fea-portal) — расширенная бюджетная аналитика и «Бюджет для граждан».
- [Официальное опубликование документов Правительства](/data-sources/regional/yamalo-nenets-autonomous-okrug-government-npa) — постановления и распоряжения.
- [Законодательное Собрание ЯНАО](/data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly) — законодательный этап бюджетного процесса.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые федеральные выгрузки.
- [Сводная страница субъекта](/data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview) — все источники по округу.
