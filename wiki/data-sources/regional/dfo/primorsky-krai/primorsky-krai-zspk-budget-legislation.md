---
title: 'Приморский край: Законодательное Собрание — материалы по бюджету'
sidebar_label: ЗС ПК — бюджетные материалы
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/primorsky-krai-zspk-budget-legislation
source_url: 'https://www.zspk.gov.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: >-
  HTML сайта ЗС; проекты законов и брошюры — PDF; машиночитаемых единых API
  в карточке не фиксируется
description: >-
  Официальный сайт Законодательного Собрания Приморского края: проекты и тексты
  законов о бюджете, раздаточные материалы (в т.ч. PDF-брошюры по бюджету).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-primorsky-krai-sources-overview
  - /data-sources/regional/primorsky-krai-pravo-gov-regional-npa
  - /data-sources/regional/primorsky-krai-minfin
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# Приморский край: Законодательное Собрание — материалы по бюджету

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** законодательный орган Приморского края |
| Тип доступа | Официальный сайт + документы по ссылкам |
| Основные форматы | HTML, **PDF** |
| Оператор | Законодательное Собрание Приморского края |
| Режим доступа | Открытый |

Коротко: **законодательная** фаза бюджетного цикла: проекты и пояснения к закону о бюджете. Для **официально опубликованных** текстов НПА после регистрации используйте [pravo.gov.ru](/data-sources/regional/primorsky-krai-pravo-gov-regional-npa); для **исполнения** — [Минфин](/data-sources/regional/primorsky-krai-minfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — набор материалов зависит от сессии и года |
| Машиночитаемость (`machine_readability`) | PDF/HTML; для массовой выгрузки не нормализовано |
| Юридическая значимость (`legal_significance`) | официальный законодательный орган (проекты и материалы заседаний) |
| Задержка обновления (`update_lag`) | привязана к календарю ЗС |
| Глубина архива (`archive_depth`) | архив разделов по годам — по структуре сайта |
| Лицензия (`license_or_terms`) | см. условия сайта ЗС |

## Описание

На сайте публикуются **повестка**, **проекты законов**, **пояснительные записки** и **гражданские** материалы (например брошюры по бюджету). Пример прямой ссылки на PDF (актуальность года проверяйте на сайте): `https://www.zspk.gov.ru/aktualnoe/budget-2025/Broshyura.pdf` — типичный формат раздаточных материалов.

## Оператор

Канонический вход: https://www.zspk.gov.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Сайт Законодательного Собрания | https://www.zspk.gov.ru/ | HTML |
| Пример: брошюра по бюджету (2025) | https://www.zspk.gov.ru/aktualnoe/budget-2025/Broshyura.pdf | PDF |

## Объекты данных и показатели

- **Проекты** и **принятые** законы о бюджете (в статусе размещения на сайте).
- **Пояснительные** материалы к бюджетным решениям.
- Ключи: **финансовый год**, номер закона после принятия, связка с [официальной публикацией](/data-sources/regional/primorsky-krai-pravo-gov-regional-npa).

## Периодичность обновления

В период **бюджетной сессии** и рассмотрения поправок; вне сессии — точечные обновления архива.

## Ограничения и особенности

- PDF с годом в пути (`budget-2025`) устаревает при смене финансового года; ориентируйтесь на актуальные ссылки в разделе «Актуальное» / «Бюджет».

## Связанные страницы wiki

- [НПА на pravo.gov.ru](/data-sources/regional/primorsky-krai-pravo-gov-regional-npa) — официальные тексты после опубликования.
- [Министерство финансов Приморского края](/data-sources/regional/primorsky-krai-minfin) — исполнительная подготовка бюджета.
- [Сводная страница субъекта](/data-sources/regional/subject-primorsky-krai-sources-overview) — все источники по краю.

## Не путать с

- **[«Открытый бюджет»](/data-sources/regional/primorsky-krai-ebudget-open-budget)** — исполнительная **гражданская** витрина; ЗС — **законодательный** этап.
