---
title: 'Мурманская область: Мурманская областная Дума'
sidebar_label: Мурманская областная Дума
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/murmansk-oblast-regional-duma
source_url: 'https://duma-murman.ru/'
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
machine_readability: HTML и PDF законопроектов; без гарантированного API
description: >-
  Официальный сайт Мурманской областной Думы: законопроекты (включая закон об областном бюджете),
  повестка, материалы публичных обсуждений и архив заседаний по мере публикации.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-murmansk-oblast-sources-overview
  - /data-sources/regional/murmansk-oblast-minfin
  - /data-sources/regional/murmansk-oblast-pravo-gov-npa
  - /data-sources/regional/murmansk-oblast-b4u-budget-portal
  - /data-sources/regional/consolidated-budgets
---

# Мурманская область: Мурманская областная Дума

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Субъект РФ — **Мурманская область** (законодательный орган) |
| Тип доступа | Официальный сайт представительного органа |
| Основные форматы | HTML, **PDF** |
| Оператор | Мурманская областная Дума |
| Режим доступа | Открытый |

Коротко: **законодательный этап** регионального бюджета — проекты законов, повестка, материалы слушаний. Для **официально опубликованных** текстов законов используйте [ОИППИ, региональный срез](/data-sources/regional/murmansk-oblast-pravo-gov-npa); для **финансовых приложений** — [Минфин](/data-sources/regional/murmansk-oblast-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты выкладки приложений к законопроектам |
| Машиночитаемость (`machine_readability`) | документо-ориентированный контент |
| Юридическая значимость (`legal_significance`) | официальный законодательный орган |
| Задержка обновления (`update_lag`) | привязана к сессиям и графику заседаний |
| Глубина архива (`archive_depth`) | смотрите разделы архива законотворчества |
| Лицензия (`license_or_terms`) | см. условия сайта Думы |

## Описание

На сайте публикуются **законопроекты** (в т.ч. о бюджете), **ход рассмотрения**, **стенограммы/протоколы** (если ведутся), приглашения к **общественным обсуждениям**. После принятия закона ориентируйтесь на [официальное опубликование](/data-sources/regional/murmansk-oblast-pravo-gov-npa) для реквизитов вступления в силу.

## Оператор

Мурманская областная Дума — канонический вход: https://duma-murman.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://duma-murman.ru/ | HTML |

## Объекты данных и показатели

- **Объекты:** законопроекты, сопроводительные пояснительные записки, **таблицы** к бюджету (если размещены), календарь заседаний.
- **Ключи связки:** **финансовый год**, стадия рассмотрения, номер законопроекта.
- **Пробелы:** **исполнение бюджета** публикуется прежде всего на [Минфине](/data-sources/regional/murmansk-oblast-minfin) и [B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal).

## Периодичность обновления

Пик активности — **бюджетная сессия** и пленарные заседания; вне сессии — точечные обновления.

## Ограничения и особенности

- Сайт законодателя **не заменяет** казначейский факт и ГИИС по **кассе** и **платежам**.
- Сверяйте **итоговые суммы** утверждённого закона с публикациями [Минфина](/data-sources/regional/murmansk-oblast-minfin).

## Связанные страницы wiki

- [Министерство финансов Мурманской области](/data-sources/regional/murmansk-oblast-minfin) — исполнение и отчётность по бюджету.
- [Официальное опубликование НПА](/data-sources/regional/murmansk-oblast-pravo-gov-npa) — тексты принятых законов.
- [Портал B4U](/data-sources/regional/murmansk-oblast-b4u-budget-portal) — гражданское изложение бюджета.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets) — методический контекст уровней.
- [Сводная страница субъекта](/data-sources/regional/subject-murmansk-oblast-sources-overview) — все источники по области.
