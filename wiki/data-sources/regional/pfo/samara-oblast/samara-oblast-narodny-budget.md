---
title: 'Самарская область: Народный бюджет (портал samregion.ru)'
sidebar_label: Народный бюджет (samregion.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-14
slug: /data-sources/regional/samara-oblast-narodny-budget
source_url: 'https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Официальный раздел портала Правительства Самарской области об участии
  граждан в распределении части бюджетных средств (программа «Народный бюджет»):
  проекты, этапы отбора и публичные материалы.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-samara-oblast-sources-overview
  - /data-sources/regional/samara-oblast-minfin
  - /data-sources/regional/samara-oblast-budget-for-citizens
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/federal/budget-gov-ru-datasets
---

# Самарская область: Народный бюджет (портал samregion.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** контур участия граждан в **части** расходов бюджета |
| Тип доступа | Публичный **веб-раздел** на **samregion.ru** |
| Основные форматы | HTML |
| Оператор | Портал **Правительства Самарской области** |
| Режим доступа | Открытый просмотр |

Коротко: **коммуникационный** и **процедурный** контур **«Народного бюджета»**; для **сводных бюджетных показателей** и **отчётности об исполнении** см. **[Минфин](/data-sources/regional/samara-oblast-minfin)** и **[бюджет для граждан](/data-sources/regional/samara-oblast-budget-for-citizens)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — фокус на **участии** и **проектах**, не на полном плане-факте бюджета |
| Машиночитаемость (`machine_readability`) | HTML |
| Юридическая значимость (`legal_significance`) | официальный региональный портал |
| Задержка обновления (`update_lag`) | по циклу программы и публикациям |
| Глубина архива (`archive_depth`) | по сохранённым материалам сезонов/лет |
| Лицензия (`license_or_terms`) | правила **samregion.ru** |

## Описание

Раздел описывает **механизм** народного бюджета и **каталог/ленту** проектов в понятной для граждан форме. Для **машинной** аналитики по **КБК/ОКТМО** обычно нужны **бюджетные** витрины Минфина и федеральные наборы.

## Оператор

Правительство Самарской области (портал **samregion.ru**) — канонический вход: https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Народный бюджет | https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti | HTML |
| Портал области | https://www.samregion.ru/ | HTML |

## Объекты данных и показатели

- **Проекты** и **статусы** в рамках программы (как публикует оператор).
- **Новости** и **документы** конкурсов/голосований (если размещены).
- **Не** полный **план-факт** консолидированного бюджета области.

## Периодичность обновления

По **сезону** программы и **событиям** отбора проектов.

## Ограничения и особенности

- Некоторые клиенты при проверке могли получать **403** на отдельные URL **samregion.ru**; при автоматизации проверяйте доступ из **браузера** и **политику** сайта.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" \
  "https://www.samregion.ru/open_government/narodnyj-byudzhet-samarskoj-oblasti" \
  || echo "при ошибке проверьте в браузере"
```

## Связанные страницы wiki

- [Министерство финансов Самарской области](/data-sources/regional/samara-oblast-minfin) — бюджетный процесс и отчётность.
- [Бюджет для граждан](/data-sources/regional/samara-oblast-budget-for-citizens) — агрегированные бюджетные показатели.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический федеральный контекст.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-samara-oblast-sources-overview) — все карточки по Самарской области.
