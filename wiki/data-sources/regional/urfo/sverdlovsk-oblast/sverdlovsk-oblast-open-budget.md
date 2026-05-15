---
title: 'Свердловская область: «Открытый бюджет» (smart.mfural.ru)'
sidebar_label: Открытый бюджет
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/sverdlovsk-oblast-open-budget
source_url: 'https://smart.mfural.ru/ebudget'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; наглядные материалы без гарантированных открытых наборов в карточке
description: >-
  Специализированный портал «Открытый бюджет» / «Бюджет для граждан» Свердловской области:
  наглядные материалы по областному бюджету, исполнению и приоритетам для граждан и СМИ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-sverdlovsk-oblast-sources-overview
  - /data-sources/regional/sverdlovsk-oblast-minfin
  - /data-sources/regional/sverdlovsk-oblast-npa-portal-pravo-gov66
  - /data-sources/regional/sverdlovsk-oblast-legislative-assembly
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
  - /glossary/budget
---

# Свердловская область: «Открытый бюджет» (smart.mfural.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Свердловская область: **гражданская наглядность** по областному бюджету |
| Тип доступа | Специализированный бюджетный портал |
| Основные форматы | HTML |
| Оператор | Министерство финансов Свердловской области (контур «Открытый бюджет») |
| Режим доступа | Открытый просмотр |

Коротко: **упрощённое объяснение** бюджета для граждан и СМИ. Для **полного контура** нормативных актов, проектов законов и ведомственных материалов используйте [Минфин](/data-sources/regional/sverdlovsk-oblast-minfin), [правовой портал](/data-sources/regional/sverdlovsk-oblast-npa-portal-pravo-gov66) и сайт [Законодательного Собрания](/data-sources/regional/sverdlovsk-oblast-legislative-assembly).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — отбор и агрегация для наглядности |
| Машиночитаемость (`machine_readability`) | HTML; не заменяет открытые машинные наборы |
| Юридическая значимость (`legal_significance`) | официальная витрина финансового органа субъекта |
| Задержка обновления (`update_lag`) | зависит от цикла бюджета и обновления портала |
| Глубина архива (`archive_depth`) | по политике раздела |
| Лицензия (`license_or_terms`) | условия сайта — у оператора |

## Описание

Портал предназначен для **ознакомления** с целями, задачами и приоритетами областного бюджета без специальной подготовки. Термины планирования и исполнения см. в [глоссарии: «Бюджет»](/glossary/budget). Канонический вход в импортной таблице был `http://smart.mfural.ru/ebudget`; при проверке используйте **HTTPS**, если площадка его поддерживает.

## Оператор

Министерство финансов Свердловской области — раздел «Открытый бюджет»: https://smart.mfural.ru/ebudget

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| «Открытый бюджет» | https://smart.mfural.ru/ebudget | HTML |

## Объекты данных и показатели

- **Агрегированные** пояснения по доходам и расходам, приоритетам и программам (в объёме раздела).
- **Ссылки** на законы и подзаконные акты по бюджету (часто с уходом на [pravo.gov66.ru](/data-sources/regional/sverdlovsk-oblast-npa-portal-pravo-gov66) или PDF на `minfin.midural.ru`).
- **Не гарантирует** полную детализацию по КБК/КОСГУ — для машиночитаемых федеральных рядов см. [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Периодичность обновления

Связана с **циклом бюджета** и решениями оператора по актуализации портала (обычно вокруг подготовки и исполнения бюджета).

## Ограничения и особенности

- Наглядность может **упрощать** структуру по сравнению с первичными бюджетными формами и полным текстом закона о бюджете.

## Связанные страницы wiki

- [Министерство финансов Свердловской области](/data-sources/regional/sverdlovsk-oblast-minfin) — ведомственные материалы и контур финоргана.
- [Портал правовых актов (pravo.gov66.ru)](/data-sources/regional/sverdlovsk-oblast-npa-portal-pravo-gov66) — канонические тексты НПА, включая бюджетный блок.
- [Законодательное Собрание](/data-sources/regional/sverdlovsk-oblast-legislative-assembly) — проекты и принятые законы, в том числе о бюджете.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые ряды для сверки.
- [Сводная страница субъекта](/data-sources/regional/subject-sverdlovsk-oblast-sources-overview) — все источники по области.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика поиска.

## Не путать с

- **[Министерство финансов](/data-sources/regional/sverdlovsk-oblast-minfin)** — рабочий сайт финоргана с НПА и разделами отчётности, а не только гражданская витрина.
