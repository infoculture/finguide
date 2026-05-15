---
title: 'Астраханская область: Дума Астраханской области (astroblduma.ru)'
sidebar_label: Дума Астраханской области
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/astrakhan-oblast-duma
source_url: 'https://www.astroblduma.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и PDF; структурированного публичного API зала законодательного органа обычно нет
description: >-
  Официальный сайт Думы Астраханской области: законопроекты, повестка, тексты
  принятых законов (в т.ч. о бюджете) и материалы парламентского контроля в
  объёме публикаций.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-astrakhan-oblast-sources-overview
  - /data-sources/regional/astrakhan-oblast-pravo-publication-region30
  - /data-sources/regional/astrakhan-oblast-minfin
  - /data-sources/regional/astrakhan-oblast-gov-portal
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Астраханская область: Дума Астраханской области

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Астраханская область: **законодательный** орган субъекта |
| Тип доступа | Официальный сайт парламента |
| Основные форматы | HTML, PDF |
| Оператор | Дума Астраханской области |
| Режим доступа | Открытый просмотр |

Коротко: **законодательная фаза** регионального бюджета: проекты законов о бюджете, пояснения, повестка заседаний и тексты принятых законов. Для **официально опубликованных** редакций НПА после вступления в силу сверяйте [блок региона 30 на ОИППИ](/data-sources/regional/astrakhan-oblast-pravo-publication-region30).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки стенограмм и приложений |
| Машиночитаемость (`machine_readability`) | HTML/PDF; для машинной обработки нужна разметка страниц |
| Юридическая значимость (`legal_significance`) | официальный орган законодательной власти; итоговая редакция после опубликования — на ОИППИ |
| Задержка обновления (`update_lag`) | зависит от календаря заседаний |
| Глубина архива (`archive_depth`) | по политике сайта Думы |
| Лицензия (`license_or_terms`) | условия сайта — у оператора |

## Описание

Сайт **astroblduma.ru** концентрирует **парламентский** контур: законопроекты, статусы рассмотрения, решения и справочная информация о депутатских корпусах и комитетах. Для **исполнительной** фазы бюджета и отчётности используйте [Минфин области](/data-sources/regional/astrakhan-oblast-minfin).

## Оператор

Дума Астраханской области — https://www.astroblduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Думы | https://www.astroblduma.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты** и сопроводительные материалы (в т.ч. бюджетный цикл).
- **Принятые законы** — как опубликовано на сайте парламента.
- **Парламентский контроль** — документы и новости в объёме разделов сайта.

## Периодичность обновления

По **графику заседаний** и регламенту раскрытия информации.

## Ограничения и особенности

- Техническая доступность страниц может ограничиваться политиками WAF — учитывайте при автоматизации.

## Связанные страницы wiki

- [Официальное опубликование актов (регион 30)](/data-sources/regional/astrakhan-oblast-pravo-publication-region30) — канонические тексты после опубликования.
- [Министерство финансов Астраханской области](/data-sources/regional/astrakhan-oblast-minfin) — материалы финоргана по бюджету.
- [Портал органов власти](/data-sources/regional/astrakhan-oblast-gov-portal) — исполнительная власть и общий контекст.
- [Сводная страница субъекта](/data-sources/regional/subject-astrakhan-oblast-sources-overview) — все источники по области.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые ряды для сверки.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.

## Не путать с

- **[ОИППИ, блок региона 30](/data-sources/regional/astrakhan-oblast-pravo-publication-region30)** — федеральный сервис официального опубликования; для юридической фиксации редакции после опубликования приоритетен он.
