---
title: 'Ямало-Ненецкий автономный округ: официальное опубликование документов (yanao.ru)'
sidebar_label: НПА Правительства ЯНАО
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/yamalo-nenets-autonomous-okrug-government-npa
source_url: 'https://yanao.ru/dokumenty/ofitsialnoe-publikovanie/vse?type=enactment'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; тексты актов — часто PDF
description: >-
  Раздел официального опубликования на портале Правительства ЯНАО: законы,
  постановления и распоряжения исполнительной власти округа.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-depfin
  - /data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents
  - /glossary/budget
---

# Ямало-Ненецкий автономный округ: официальное опубликование документов (yanao.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Ямало-Ненецкий АО: **официальное опубликование** НПА Правительства и иных актов в объёме раздела |
| Тип доступа | Раздел портала органов власти yanao.ru |
| Основные форматы | HTML; вложения — PDF |
| Оператор | Портал органов власти Ямало-Ненецкого автономного округа |
| Режим доступа | Открытый просмотр |

Коротко: **официальный банк** постановлений, распоряжений и иных актов исполнительной власти (фильтр `type=enactment`). Для **законов о бюджете** и законопроектов — [Законодательное Собрание](/data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly); для **приказов Депфина** — [действующие документы департамента](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты загрузки и рубрикатора портала |
| Машиночитаемость (`machine_readability`) | HTML и файлы; без единого открытого API |
| Юридическая значимость (`legal_significance`) | официальное опубликование на портале власти субъекта |
| Задержка обновления (`update_lag`) | от подписания до публикации в разделе |
| Глубина архива (`archive_depth`) | по политике портала yanao.ru |
| Лицензия (`license_or_terms`) | условия портала — у оператора |

## Описание

Раздел «Официальное опубликование» агрегирует **нормативные и иные правовые акты** в порядке, установленном для официального размещения. Для бюджетной аналитики важны постановления Правительства о бюджетной процедуре, распределении субсидий и смежные акты. См. [глоссарий: «Бюджет»](/glossary/budget).

## Оператор

Портал органов власти Ямало-Ненецкого автономного округа — https://yanao.ru/dokumenty/ofitsialnoe-publikovanie/vse?type=enactment

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальное опубликование (акты) | https://yanao.ru/dokumenty/ofitsialnoe-publikovanie/vse?type=enactment | HTML |

## Объекты данных и показатели

- **Постановления и распоряжения** Правительства ЯНАО, иные акты в объёме фильтра.
- **Метаданные** акта: номер, дата, вид (зависит от карточки документа на портале).
- **Не дублирует** ведомственные приказы Депфина — см. [fin.yanao.ru/documents/active](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents).

## Периодичность обновления

**По мере** официального опубликования актов.

## Ограничения и особенности

- Автоматический доступ может блокироваться **WAF** (HTTP 403) — используйте браузер.
- Параметр `type=enactment` задаёт подмножество документов; для полного охвата проверяйте другие фильтры каталога yanao.ru.

## Связанные страницы wiki

- [Законодательное Собрание ЯНАО](/data-sources/regional/yamalo-nenets-autonomous-okrug-legislative-assembly) — законы и законопроекты.
- [Департамент финансов](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin) — бюджетные материалы финоргана.
- [Действующие документы Депфина](/data-sources/regional/yamalo-nenets-autonomous-okrug-depfin-active-documents) — ведомственные акты.
- [Сводная страница субъекта](/data-sources/regional/subject-yamalo-nenets-autonomous-okrug-sources-overview) — все источники по округу.
