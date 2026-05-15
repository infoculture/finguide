---
title: 'Санкт-Петербург: Управление Федерального казначейства (piter.roskazna.gov.ru)'
sidebar_label: УФК по СПб (Росказначейство)
tags:
  - data-source
  - regional
  - treasury
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-roskazna-piter
source_url: 'https://piter.roskazna.gov.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
description: >-
  Региональный сайт Управления Федерального казначейства по Санкт-Петербургу:
  новости, документы, открытые данные и отчётность казначейского контура по
  городу федерального значения.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-reports
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/federal/budget-gov-ru-datasets
---

# Санкт-Петербург: Управление Федерального казначейства (piter.roskazna.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **территориальное** управление **Федерального казначейства** (федеральный орган, региональная витрина) |
| Тип доступа | Публичный сайт УФК |
| Основные форматы | **HTML**; **PDF**; ссылки на федеральные каталоги открытых данных |
| Оператор | **Управление Федерального казначейства по г. Санкт-Петербургу** |
| Режим доступа | Открытый |

Коротко: **официальный** региональный вход Росказначейства для **СПб**: новости, нормативные материалы, переходы к **отчётности** и **открытым данным** оператора. Массовые формы исполнения бюджета чаще агрегируют через **[отчёты Федерального казначейства](/data-sources/federal/roskazna-reports)** и **[наборы «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** на уровне сайта УФК — полнота рядов зависит от федеральных выгрузок |
| Машиночитаемость (`machine_readability`) | **смешанный**: HTML + федеральные CSV/Excel в связанных витринах |
| Юридическая значимость (`legal_significance`) | официальный оператор казначейского контура |
| Задержка обновления (`update_lag`) | зависит от вида отчёта и регламента публикации |
| Глубина архива (`archive_depth`) | см. федеральные отчёты и архив на портале казначейства |
| Лицензия (`license_or_terms`) | см. условия `roskazna.gov.ru` |

## Описание

Сайт УФК дублирует типовую структуру **региональных** управлений Росказначейства: **контакты**, **новости**, **документы** и ссылки на **федеральные** сервисы. Для **бюджета субъекта** как политики и планов используйте **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)**.

## Оператор

**Управление Федерального казначейства по г. Санкт-Петербургу** — https://piter.roskazna.gov.ru/

Карточка ИС: [Портал Федерального казначейства](/information-systems/federal/roskazna-portal) — федеральная витрина оператора.

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта УФК | https://piter.roskazna.gov.ru/ | HTML |

## Объекты данных и показатели

- **Новости** и **разъяснения** территориального управления.
- **Ссылки** на федеральные **открытые данные** и **формы отчётности** казначейства.
- **Не** полный дубликат ГИИС «Электронный бюджет» — для паспортов наборов по бюджету см. **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

Новости — **нерегулярно**; отчётность — по **календарю** БК и казначейства.

## Ограничения и особенности

- Региональный сайт может **отставать** от полного набора федеральных выгрузок — для воспроизводимых рядов приоритизируйте **[roskazna-reports](/data-sources/federal/roskazna-reports)**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://piter.roskazna.gov.ru/"
```

## Связанные страницы wiki

- [Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — формализованная отчётность об исполнении бюджета.
- [Открытые данные «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets) — федеральные наборы по бюджетному циклу.
- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — региональный бюджетный контур.
- [Сводная по источникам СПб](/data-sources/regional/subject-saint-petersburg-sources-overview).

## Не путать с

- **[Комитет финансов](/data-sources/regional/saint-petersburg-finance-committee-fincom)** — региональный **план** и **политика** бюджета; УФК — **казначейское исполнение** в федеральной вертикали.
