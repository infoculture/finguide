---
title: 'Санкт-Петербург: государственные программы города (gov.spb.ru)'
sidebar_label: Госпрограммы СПб
tags:
  - data-source
  - regional
  - programs
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-state-programs-gov-spb
source_url: >-
  https://www.gov.spb.ru/gov/otrasl/c_culture/gosudarstvennye-programmy-sankt-peterburga
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Раздел Правительства Санкт-Петербурга о государственных программах города:
  паспорта, целевые показатели, отчётность о реализации и связь с бюджетным
  финансированием (по мере публикации на портале).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /information-systems/federal/programs-gov
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Санкт-Петербург: государственные программы города (gov.spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **государственные программы** субъекта (город федерального значения) |
| Тип доступа | Публичный раздел на **gov.spb.ru** |
| Основные форматы | **HTML**; вложения **PDF** |
| Оператор | **Правительство Санкт-Петербурга** (публичный портал Администрации) |
| Режим доступа | Открытый |

Коротко: **официальная** витрина **региональных** госпрограмм города: структура, паспорта, отчёты о реализации. Для **федерального** реестра программ РФ см. **[programs.gov.ru](/information-systems/federal/programs-gov)**; для **денег в бюджете** — **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — зависит от глубины выкладки отчётов по программам |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; без единого API |
| Юридическая значимость (`legal_significance`) | официальный портал Правительства |
| Задержка обновления (`update_lag`) | привязана к отчётным кампаниям |
| Глубина архива (`archive_depth`) | зависит от архивации раздела |
| Лицензия (`license_or_terms`) | см. правила портала |

## Описание

Раздел консолидирует **материалы** по **государственным программам** Санкт-Петербурга: цели, показатели, ответственные органы (по структуре сайта). **Финансовые** лимиты программ сверяйте с **бюджетом** и **открытыми данными** города.

## Оператор

**Правительство Санкт-Петербурга** — раздел «Государственные программы»:  
https://www.gov.spb.ru/gov/otrasl/c_culture/gosudarstvennye-programmy-sankt-peterburga

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Госпрограммы СПб | https://www.gov.spb.ru/gov/otrasl/c_culture/gosudarstvennye-programmy-sankt-peterburga | HTML |

## Объекты данных и показатели

- **Паспорта** программ и **целевые показатели** (где опубликованы).
- **Отчёты** о реализации (год/этап — по факту на сайте).
- Связка с **бюджетом**: через документы **[Комитета финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** и **[открытые данные](/data-sources/regional/saint-petersburg-open-data-gov-spb)**.

## Периодичность обновления

**Отчётная** (год, полугодие — по практике размещения) + **событийные** обновления.

## Ограничения и особенности

- URL вложен в глубокую иерархию **gov.spb.ru** — при редизайне проверяйте актуальность.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.gov.spb.ru/gov/otrasl/c_culture/gosudarstvennye-programmy-sankt-peterburga"
```

## Связанные страницы wiki

- [Госпрограммы РФ (programs.gov.ru)](/information-systems/federal/programs-gov) — федеральный реестр и смежная логика.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджетные лимиты и отчётность.
- [Открытые данные «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — федеральные наборы для сверки методик.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Федеральный programs.gov.ru](/information-systems/federal/programs-gov)** — другой уровень власти и иная модель паспортов.
