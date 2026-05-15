---
title: "Смоленская область: Министерство финансов Смоленской области"
sidebar_label: Минфин Смоленской области
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/smolensk-oblast-ministry-of-finance
source_url: "https://fin.smolensk.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML и файлы; открытые табличные выгрузки — по факту размещения на сайте
description: >-
  Официальный сайт министерства финансов Смоленской области: материалы по
  областному бюджету, нормативные акты финансового блока, отчёты об исполнении,
  методические документы и ссылки на смежные разделы (в т.ч. «Открытый бюджет»).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-smolensk-oblast-sources-overview
  - /data-sources/regional/smolensk-oblast-open-budget-minfin-section
  - /data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Смоленская область: Министерство финансов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Субъект РФ** — Смоленская область, финансовый блок правительства |
| Тип доступа | Официальный сайт Минфина области |
| Основные форматы | HTML; PDF и таблицы (XLSX и др.) по мере публикации |
| Оператор | Министерство финансов Смоленской области |
| Режим доступа | Открытый |

Коротко: **главная отправная точка** для областного бюджета: проекты и исполнение, отчётность, методические материалы. Раздел **«Открытый бюджет»** вынесен в отдельную [карточку](/data-sources/regional/smolensk-oblast-open-budget-minfin-section) из‑за иной структуры URL.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты разделов и формата публикаций по годам |
| Машиночитаемость (`machine_readability`) | смешанный: HTML + файлы; без гарантированного единого API |
| Юридическая значимость (`legal_significance`) | официальный финансовый орган субъекта РФ |
| Задержка обновления (`update_lag`) | привязана к бюджетному циклу и срокам отчётности |
| Глубина архива (`archive_depth`) | зависит от политики архивации на сайте |
| Лицензия (`license_or_terms`) | условия сайта оператора |

## Описание

Сайт объединяет **оперативные** и **архивные** материалы по бюджету области. Для сверки с **федеральными** агрегатами и справочниками используйте [наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) и [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Оператор

Министерство финансов Смоленской области — канонический вход: https://fin.smolensk.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Минфина | https://fin.smolensk.ru/ | HTML |
| Раздел «Открытый бюджет» | https://fin.smolensk.ru/ob | HTML |

## Объекты данных и показатели

- **Проект и исполнение** областного бюджета — в форматах, публикуемых Минфином (таблицы, пояснительные записки).
- **Нормативные акты** финансового блока (часто со ссылкой на областной реестр НПА).
- **Отчёты об исполнении** — по годам и стадиям цикла.
- Ключи связки: **финансовый год**, **КБК/коды классификации** (как выложено в файлах), **ОКТМО** области.

## Периодичность обновления

Пик обновлений — подготовка и исполнение бюджета; межгодовые правки и отчётность.

## Ограничения и особенности

- Для проверки доступа скриптами используйте типичный браузерный `User-Agent` (сайт отвечает **403** «голому» curl).

## Примеры доступа

```bash
curl -sI -A "Mozilla/5.0" --max-time 20 "https://fin.smolensk.ru/" | head -n 5
```

## Связанные страницы wiki

- [Открытый бюджет (раздел на сайте Минфина)](/data-sources/regional/smolensk-oblast-open-budget-minfin-section) — гражданская витрина областного бюджета.
- [НПА на портале администрации](/data-sources/regional/smolensk-oblast-npa-portal-rek-admin-smolensk) — смежный реестр актов.
- [Сводная страница субъекта](/data-sources/regional/subject-smolensk-oblast-sources-overview) — все источники по области.

## Не путать с

- **[Бюджет для граждан Смоленского МО](/data-sources/regional/smolensk-oblast-smolensk-municipal-district-budget-for-citizens)** — **муниципальный** уровень, не областной.
