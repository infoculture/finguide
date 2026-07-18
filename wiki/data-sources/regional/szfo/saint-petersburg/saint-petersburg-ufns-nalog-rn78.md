---
title: 'Санкт-Петербург: УФНС России (nalog.gov.ru, код региона 78)'
sidebar_label: УФНС по Санкт-Петербургу
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-07-16
slug: /data-sources/regional/saint-petersburg-ufns-nalog-rn78
source_url: 'https://www.nalog.gov.ru/rn78/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-07-16
description: >-
  Региональный раздел единого сайта ФНС России для Санкт-Петербурга: новости,
  сервисы налогоплательщику, региональные материалы и ссылки на федеральные
  витрины данных и статистику ФНС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /information-systems/federal/fnssite
  - /data-sources/federal/nalog-regstats
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: УФНС России (nalog.gov.ru, код региона 78)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **УФНС России по Санкт-Петербургу** (`rn78` на сайте nalog.gov.ru) |
| Тип доступа | Публичный веб-портал (часть единого сайта ФНС) |
| Основные форматы | **HTML**; федеральные открытые наборы — по ссылкам на nalog.gov.ru / сервисы |
| Оператор | **УФНС России по Санкт-Петербургу** |
| Режим доступа | Открытый; часть сервисов — после авторизации налогоплательщика |

Коротко: **официальный** региональный вход ФНС для **СПб**: новости, адреса, разъяснения. Для **массовых** открытых рядов по налогам используйте **[региональную статистику ФНС](/data-sources/federal/nalog-regstats)** и карточку **[сайта ФНС](/information-systems/federal/fnssite)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** на уровне УФНС — полнота машинных рядов на федеральных витринах |
| Машиночитаемость (`machine_readability`) | **смешанный**: HTML + ссылки на федеральные CSV/Excel |
| Юридическая значимость (`legal_significance`) | официальный оператор ФНС |
| Задержка обновления (`update_lag`) | зависит от типа материала |
| Глубина архива (`archive_depth`) | варьируется по разделам |
| Лицензия (`license_or_terms`) | см. условия nalog.gov.ru |

## Описание

Страница `rn78` повторяет общую структуру сайта ФНС с **региональным** контекстом. Для аналитики **сборов** и **базы НПД** ориентируйтесь на **федеральные** открытые данные; сайт УФНС — для **локальных** процедур и новостей.

## Оператор

**УФНС России по Санкт-Петербургу** — https://www.nalog.gov.ru/rn78/

Карточка ИС: [Сайт ФНС России](/information-systems/federal/fnssite).

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Региональный корень (`rn78`) | https://www.nalog.gov.ru/rn78/ | HTML |

## Объекты данных и показатели

- **Новости** и **разъяснения** УФНС по Санкт-Петербургу.
- **Переходы** к федеральным **сервисам** и **открытым данным**.
- **Не** консолидированный бюджет субъекта — см. **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Периодичность обновления

Новости — **нерегулярно**; федеральные наборы — по **графику** обновления на nalog.gov.ru.

## Ограничения и особенности

- Для **воспроизводимых** выгрузок фиксируйте **дату** скачивания и **версию** набора на федеральной витрине.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.nalog.gov.ru/rn78/"
```

## Связанные страницы wiki

- [Региональная статистика ФНС (наборы)](/data-sources/federal/nalog-regstats) — открытые ряды по регионам.
- [Сайт ФНС России](/information-systems/federal/fnssite) — федеральный контур ИС/портала.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджет города.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Петростат](/data-sources/regional/saint-petersburg-petrostat-rosstat-78)** — **государственная статистика** по методике Росстата; ФНС — **налоговая** отчётность и администрирование.
