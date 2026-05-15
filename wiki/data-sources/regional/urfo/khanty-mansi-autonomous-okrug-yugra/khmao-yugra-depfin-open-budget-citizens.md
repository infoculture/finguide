---
title: "ХМАО — Югра: открытый бюджет и «бюджет для граждан» (Депфин)"
sidebar_label: "Открытый бюджет Югры (Депфин)"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-depfin-open-budget-citizens
source_url: "https://depfin.admhmao.ru/activity/otkrytyy-byudzhet"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; инфографика и вложения; не полный дубль юридически значимых отчётов
description: >-
  Раздел сайта Департамента финансов Югры с материалами открытого бюджета и «бюджета для граждан»: наглядное объяснение
  доходов и расходов окружного бюджета, справочные материалы и ссылки на отчётность.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-open-data-portal
  - /data-sources/regional/khmao-yugra-admhmao-legal-acts
  - /data-sources/regional/consolidated-budgets
  - /data-sources/federal/budget-gov-ru-datasets
---

# ХМАО — Югра: открытый бюджет и «бюджет для граждан»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружной** бюджет в **доступной** форме для граждан и СМИ |
| Тип доступа | Публичный раздел сайта Депфина |
| Основные форматы | **HTML**, визуализации, **PDF** по ссылкам |
| Оператор | **Департамент финансов Ханты-Мансийского автономного округа — Югры** |
| Режим доступа | Открытый |

Коротко: **ориентир для объяснения** бюджета «простыми словами»; для **юридически значимых** текстов закона о бюджете и первичной отчётности используйте [банк правовых актов](/data-sources/regional/khmao-yugra-admhmao-legal-acts) и корень [Депфина](/data-sources/regional/khmao-yugra-depfin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — упор на наглядность, не на полный набор первичных форм |
| Машиночитаемость (`machine_readability`) | **HTML**; для машинной обработки см. [открытые данные Югры](/data-sources/regional/khmao-yugra-open-data-portal) |
| Юридическая значимость (`legal_significance`) | **Официальная** витрина-объяснение при сохранении ссылки на первоисточники |
| Задержка обновления (`update_lag`) | Обычно привязана к этапам бюджетного цикла |
| Глубина архива (`archive_depth`) | Зависит от политики хранения раздела на сайте |
| Лицензия (`license_or_terms`) | Условия сайта Депфина |

## Описание

URL ведёт в раздел **«Открытый бюджет»** на домене **depfin.admhmao.ru**. Типичное содержание таких разделов: **инфографика**, **словарь терминов**, **ответы на частые вопросы**, ссылки на **закон о бюджете** и отчёты. Точный состав блоков уточняйте на актуальной странице.

## Оператор

**Департамент финансов Ханты-Мансийского автономного округа — Югры** — https://depfin.admhmao.ru/activity/otkrytyy-byudzhet

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел «Открытый бюджет» | https://depfin.admhmao.ru/activity/otkrytyy-byudzhet | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели доходов и расходов, **разрезы** по направлениям (в терминах витрины).
- **Связка** с полным текстом **закона о бюджете** и **НПА** через [раздел правовых актов](/data-sources/regional/khmao-yugra-admhmao-legal-acts).
- Не заменяет **консолидированную** методику между уровнями бюджетной системы — см. [обзор консолидированных бюджетов](/data-sources/regional/consolidated-budgets).

## Периодичность обновления

Обновляется по мере **утверждения** и **исполнения** бюджета и политики раскрытия Депфина.

## Ограничения и особенности

- При редизайне сайта **путь** раздела может измениться; используйте навигацию с [главной Депфина](/data-sources/regional/khmao-yugra-depfin).

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-openbudget-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://depfin.admhmao.ru/activity/otkrytyy-byudzhet"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Сайт Депфина](/data-sources/regional/khmao-yugra-depfin) — корневой портал ведомства.
- [Портал открытых данных Югры](/data-sources/regional/khmao-yugra-open-data-portal) — машиночитаемые наборы.
- [Правовые акты admhmao.ru](/data-sources/regional/khmao-yugra-admhmao-legal-acts) — канонические тексты НПА.
- [Консолидированные бюджеты](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые ряды.
