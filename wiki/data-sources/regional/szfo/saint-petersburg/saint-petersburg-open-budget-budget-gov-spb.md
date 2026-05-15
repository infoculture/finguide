---
title: 'Санкт-Петербург: Открытый бюджет (budget.gov.spb.ru)'
sidebar_label: Открытый бюджет СПб
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-open-budget-budget-gov-spb
source_url: 'https://budget.gov.spb.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - json
status: current
last_verified: 2026-05-15
description: >-
  Специализированный портал «Открытый бюджет Санкт-Петербурга»: дружественная
  подача доходов и расходов, визуализации и справочная информация по бюджету
  города (на базе официальных данных).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/saint-petersburg-open-data-gov-spb
  - /data-sources/regional/saint-petersburg-tvoy-budget-participatory
  - /data-sources/federal/budget-gov-ru-datasets
---

# Санкт-Петербург: Открытый бюджет (budget.gov.spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **гражданско-ориентированная** подача **бюджетных** данных |
| Тип доступа | Публичный веб-портал |
| Основные форматы | **HTML**; иногда **JSON** под визуализации (зависит от реализации) |
| Оператор | **Администрация Санкт-Петербурга** (портал «Открытый бюджет») |
| Режим доступа | Открытый |

Коротко: **удобный** вход для **понимания** структуры бюджета города без чтения сухих PDF. Для **юридически значимых** цифр и **первичных** таблиц сверяйте **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и **[открытые данные](/data-sources/regional/saint-petersburg-open-data-gov-spb)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — агрегации могут отличаться от первичных таблиц комитета |
| Машиночитаемость (`machine_readability`) | **смешанный**: UI + возможные JSON под графики |
| Юридическая значимость (`legal_significance`) | официальный портал города (но **не** замена тексту закона о бюджете) |
| Задержка обновления (`update_lag`) | зависит от пайплайна обновления портала |
| Глубина архива (`archive_depth`) | ограничена функционалом портала |
| Лицензия (`license_or_terms`) | см. условия на сайте |

## Описание

Портал **budget.gov.spb.ru** ориентирован на **объяснение** и **навигацию** по бюджету: доходы, расходы, разрезы (по мере реализации интерфейса). Используйте его как **мост** к **[fincom.gov.spb.ru](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Оператор

**Открытый бюджет Санкт-Петербурга** — https://budget.gov.spb.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень портала | https://budget.gov.spb.ru/ | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели доходов/расходов по годам и разрезам (как реализовано на сайте).
- **Справочники** и **глоссарии** для граждан.
- **Не** источник первичной **бюджетной росписи** или **кассы**.

## Периодичность обновления

Привязана к **обновлению** базовых данных комитета финансов и циклу отчётности.

## Ограничения и особенности

- Визуализации могут **округлять** или **группировать** статьи — для аудита берите **исходные** файлы с сайта комитета.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://budget.gov.spb.ru/"
```

## Связанные страницы wiki

- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — первичные документы.
- [Открытые данные СПб](/data-sources/regional/saint-petersburg-open-data-gov-spb) — файловые наборы.
- [Проект «Твой бюджет»](/data-sources/regional/saint-petersburg-tvoy-budget-participatory) — участие граждан в бюджете.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** — канонические **таблицы** и **законодательные** приложения.
