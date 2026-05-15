---
title: 'Волгоградская область: Интерактивный бюджет для граждан (34.interactive-budget.ru)'
sidebar_label: Интерактивный бюджет
tags:
  - data-source
  - regional
  - budget
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/volgograd-oblast-interactive-budget
source_url: 'https://34.interactive-budget.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Региональный портал «Интерактивный бюджет для граждан»: наглядные разрезы
  доходов и расходов областного бюджета; дополняет сайт Комитета финансов и
  федеральные витрины бюджетной отчётности.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-volgograd-oblast-sources-overview
  - /data-sources/regional/volgograd-oblast-finance-committee
  - /data-sources/regional/volgograd-oblast-pravo-publication-region34
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
aliases:
  - volgograd-oblast-fin-4c4e7fb1dd
---

# Волгоградская область: Интерактивный бюджет для граждан (34.interactive-budget.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Областной бюджет Волгоградской области (гражданско-аналитическая витрина) |
| Тип доступа | Публичный веб-портал |
| Основные форматы | HTML |
| Оператор | Исполнительные органы Волгоградской области (проект «Интерактивный бюджет») |
| Режим доступа | Открытый |

Коротко: **главная гражданская витрина** по структуре и исполнению областного бюджета в наглядном виде; для юридически значимых текстов НПА и «узких» форм отчётности сверяйтесь с **[Комитетом финансов](/data-sources/regional/volgograd-oblast-finance-committee)** и **[опубликованием актов](/data-sources/regional/volgograd-oblast-pravo-publication-region34)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — охват и детализация зависят от наполнения портала по годам |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; для воспроизводимых рядов — сверка с Комитетом финансов и федеральными наборами |
| Юридическая значимость (`legal_significance`) | официальная региональная витрина (не заменяет текст закона о бюджете) |
| Задержка обновления (`update_lag`) | зависит от цикла публикаций областного финансового блока |
| Глубина архива (`archive_depth`) | смотреть разделы архива/прошлых лет на портале |
| Лицензия (`license_or_terms`) | условия использования материалов — на портале субъекта |

## Описание

Портал **34.interactive-budget.ru** объединяет **интерактивные представления** бюджета: доходы и расходы, распределение по направлениям и иные аналитические срезы в пользовательском интерфейсе. Удобен для объяснительной аналитики и обзорных сравнений.

## Оператор

Проект «Интерактивный бюджет для граждан Волгоградской области» — канонический вход: https://34.interactive-budget.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://34.interactive-budget.ru/ | HTML |

## Объекты данных и показатели

- Агрегированные показатели бюджета и аналитические разрезы (конкретный перечень рубрик — на сайте).
- Ключи связки: коды бюджетной классификации, программы, год — по мере раскрытия на портале.

## Периодичность обновления

Привязана к бюджетному циклу и решениям оператора о публикации обновлений на портале.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -L "https://34.interactive-budget.ru/"
```

## Связанные страницы wiki

- **[Сводная страница субъекта](/data-sources/regional/subject-volgograd-oblast-sources-overview)** — все источники по Волгоградской области в wiki.
- **[Комитет финансов](/data-sources/regional/volgograd-oblast-finance-committee)** — проекты бюджета и отчётность субъекта.
- **[Опубликование НПА (region34)](/data-sources/regional/volgograd-oblast-pravo-publication-region34)** — законы о бюджете после принятия.
- **[Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемая сверка с федеральным контуром.
- **[Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets)** — методический контекст.

## Не путать с

- **[Комитет финансов](/data-sources/regional/volgograd-oblast-finance-committee)** — «узкий» официальный контур документов и отчётных форм; интерактивный портал — **наглядность**.
