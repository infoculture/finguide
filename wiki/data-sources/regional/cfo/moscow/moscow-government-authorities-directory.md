---
title: "Город Москва: портал органов власти — перечень департаментов и комитетов (mos.ru)"
sidebar_label: Органы власти Москвы (mos.ru)
tags:
  - data-source
  - regional
  - navigation
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-government-authorities-directory
source_url: "https://www.mos.ru/authority/list"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; не каталог открытых данных
description: >-
  Официальный справочник структурных подразделений Правительства Москвы на портале mos.ru:
  ссылки на департаменты и комитеты, в том числе с бюджетно-финансовыми и закупочными витринами.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-findep
  - /data-sources/regional/moscow-open-budget
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/moscow-open-data-portal
---

# Город Москва: портал органов власти — перечень департаментов и комитетов (mos.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Навигация** по **органам исполнительной власти** города Москвы |
| Тип доступа | Справочная страница **mos.ru** |
| Основные форматы | **HTML** |
| Оператор | **Правительство Москвы** |
| Режим доступа | Открытый доступ |

Коротко: **оглавление** к сайтам департаментов (финансы, закупки, отраслевые данные). **Первичные финансовые** витрины см. в отдельных карточках: **[депфин](/data-sources/regional/moscow-findep)**, **[открытый бюджет](/data-sources/regional/moscow-open-budget)**, **[закупки](/data-sources/regional/moscow-procurement-tender-mos)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Навигационная** — не гарантирует полноту всех подвитрин |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **Официальный** портал правительства |

## Описание

Страница **«Органы власти»** помогает найти **нужный департамент** при построении маршрута по данным: например, **здравоохранение**, **транспорт**, **экономическая политика** — у каждого свои разделы и наборы на **data.mos.ru**.

## Оператор

**Правительство Москвы** — https://www.mos.ru/authority/list

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Перечень органов | https://www.mos.ru/authority/list | HTML |

## Объекты данных и показатели

- **Ссылки** на официальные сайты и разделы **mos.ru**.
- **Не содержит** самих открытых наборов — для них **[data.mos.ru](/data-sources/regional/moscow-open-data-portal)**.

## Периодичность обновления

При **реорганизации** структуры правительства и обновлении справочника.

## Примеры доступа

```bash
curl -fsSL -A "finguide-mos-authority/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.mos.ru/authority/list"
```

## Связанные страницы wiki

- [Департамент финансов](/data-sources/regional/moscow-findep) — ключевой финансовый департамент.
- [Открытые данные](/data-sources/regional/moscow-open-data-portal) — межведомственные наборы.
- [Сводная по источникам Москвы](/data-sources/regional/subject-moscow-sources-overview) — полный список карточек wiki.

## Не путать с

- **[Каталог федеральных органов](https://www.gosuslugi.ru/)** — **федеральный** уровень; страница **mos.ru** — только **органы города Москва**.
