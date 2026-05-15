---
title: "Смоленская область: официальный сайт Смоленской областной Думы"
sidebar_label: Смоленская областная Дума (сайт)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/smolensk-oblast-regional-duma-website
source_url: "https://www.smoloblduma.ru/"
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
machine_readability: HTML/PDF законопроектов; без единого API
description: >-
  Официальный сайт законодательного органа Смоленской области: проекты и тексты
  законов о бюджете, повестка, депутатские материалы и архив документов.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk
  - /data-sources/regional/smolensk-oblast-ministry-of-finance
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Смоленская область: Смоленская областная Дума

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Законодательный орган** Смоленской области |
| Тип доступа | Официальный сайт областной Думы |
| Основные форматы | HTML; PDF и вложения по мере публикации |
| Оператор | Смоленская областная Дума |
| Режим доступа | Открытый |

Коротко: **официальный** источник проектов и принятых законов Смоленской области, включая **областной закон о бюджете** и сопутствующие акты. Для **банка НПА исполнительной власти** см. [портал нормативных актов](/data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — полнота архива зависит от внутренней политики публикаций |
| Машиночитаемость (`machine_readability`) | HTML и файлы; структура разделов может меняться |
| Юридическая значимость (`legal_significance`) | официальный законодательный орган субъекта РФ |
| Задержка обновления (`update_lag`) | минимальная для текстов законов после пленарных заседаний |
| Глубина архива (`archive_depth`) | зависит от раздела «Документы» / «Законодательство» на сайте |
| Лицензия (`license_or_terms`) | официальные тексты НПА; условия копирования — по правилам сайта |

## Описание

Сайт Думы используют для **трассировки бюджетного цикла на законодательной стадии**: чтения, поправки, итоговые тексты областного бюджетного закона. Исполнительные **постановления и приказы** обычно публикуются в смежных витринах — см. карточку [НПА на портале администрации](/data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk).

## Оператор

Смоленская областная Дума — канонический вход: https://www.smoloblduma.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Официальный сайт | https://www.smoloblduma.ru/ | HTML |

## Объекты данных и показатели

- **Проекты и принятые законы** Смоленской области, в том числе о бюджете и о внесении изменений в бюджет.
- **Повестка** и материалы к заседаниям (как выложены на сайте).
- Ключи связки: **номер закона**, **финансовый год**, редакции для сопоставления с отчётностью [Минфина области](/data-sources/regional/smolensk-oblast-ministry-of-finance).

## Периодичность обновления

По ходу заседаний и сессий; пики активности — бюджетная осень и весна.

## Ограничения и особенности

- Поиск по сайту может отличаться от индексации на портале правительства; при систематическом сборе закрепляйте прямые URL редакций.

## Примеры доступа

```bash
curl -sI -A "Mozilla/5.0" --max-time 20 "https://www.smoloblduma.ru/" | head -n 5
```

## Связанные страницы wiki

- [Нормативно-правовые документы (портал администрации)](/data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk) — смежный контур НПА исполнительной власти.
- [Министерство финансов Смоленской области](/data-sources/regional/smolensk-oblast-ministry-of-finance) — проекты бюджета и отчётность исполнительной ветви.
- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по области.

## Не путать с

- **[НПА на портале администрации](/data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk)** — акцент на актах правительства области, а не на законодательных текстах Думы.
