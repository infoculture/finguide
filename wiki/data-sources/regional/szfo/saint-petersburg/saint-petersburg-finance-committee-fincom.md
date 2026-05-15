---
title: 'Санкт-Петербург: Комитет финансов (fincom.gov.spb.ru)'
sidebar_label: Комитет финансов СПб
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-finance-committee-fincom
source_url: 'https://fincom.gov.spb.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
description: >-
  Официальный сайт Комитета финансов Санкт-Петербурга: бюджет города, отчёты об
  исполнении, бюджетный процесс, нормативные материалы и вложения к документам.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-legislative-assembly-budget
  - /data-sources/regional/saint-petersburg-pravo-publication-region78
  - /data-sources/regional/saint-petersburg-open-budget-budget-gov-spb
  - /data-sources/federal/budget-gov-ru-datasets
---

# Санкт-Петербург: Комитет финансов (fincom.gov.spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** — **главный** исполнительный вход в **материалы бюджета** города |
| Тип доступа | Публичный сайт комитета Администрации |
| Основные форматы | **HTML**; вложения **PDF**, иногда **XLSX** |
| Оператор | **Комитет финансов Санкт-Петербурга** |
| Режим доступа | Открытый |

Коротко: **первичная** витрина для **проекта**, **утверждённого** и **отчётного** бюджета города на стороне **исполнительной власти**. Для **официально опубликованных** законов после выхода см. **[region78](/data-sources/regional/saint-petersburg-pravo-publication-region78)**; для **гражданской** подачи — **[Открытый бюджет](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)**.

## Качество и верификация

Ориентиры: [«Измерения качества источника данных»](/reference/data-quality-dimensions).

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **высокая** для публичного контура **бюджетной политики** города; машинные выгрузки — частично дублируются на **[открытых данных города](/data-sources/regional/saint-petersburg-open-data-gov-spb)** |
| Машиночитаемость (`machine_readability`) | **смешанный**: HTML-навигация + файлы по ссылкам |
| Юридическая значимость (`legal_significance`) | официальный орган Администрации |
| Задержка обновления (`update_lag`) | пик вокруг **утверждения** и **отчётности** |
| Глубина архива (`archive_depth`) | зависит от архивации разделов на `gov.spb.ru` / `fincom.gov.spb.ru` |
| Лицензия (`license_or_terms`) | см. правила сайта Администрации |

## Описание

Сайт комитета концентрирует **бюджетные** материалы: **основной** и **внесения**, **отчёты об исполнении**, методические письма. Связка с **казначейским исполнением** — через **[УФК Росказначейства](/data-sources/regional/saint-petersburg-roskazna-piter)** и федеральные отчёты.

## Оператор

**Комитет финансов Санкт-Петербурга** — https://fincom.gov.spb.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта комитета | https://fincom.gov.spb.ru/ | HTML |

Структура подразделов может меняться — используйте **корень** домена при закладках.

## Объекты данных и показатели

- **Бюджетные** законопроекты и материалы к ним (до передачи в парламент — параллельно с **[ЗакСобранием](/data-sources/regional/saint-petersburg-legislative-assembly-budget)**).
- **Отчёты об исполнении** бюджета (год, квартал — по фактической публикации).
- Ключи классификации: **КБК**, **разделы/главы** — см. [/glossary/kbk](/glossary/kbk).

## Периодичность обновления

**Сезонная** (бюджетный цикл) + **оперативные** новости комитета.

## Ограничения и особенности

- Не все таблицы доступны как **стабильные** прямые URL — фиксируйте **дату скачивания** и **имя файла**.
- Для **единых** федеральных паспортов открытых наборов по бюджету сверяйте **[budget.gov.ru/datasets](/data-sources/federal/budget-gov-ru-datasets)**.

## Примеры доступа

```bash
curl -fsSL -A "finguide-source-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://fincom.gov.spb.ru/"
```

## Связанные страницы wiki

- [Законодательное Собрание — бюджет](/data-sources/regional/saint-petersburg-legislative-assembly-budget) — парламентская стадия.
- [Официальное опубликование НПА (region78)](/data-sources/regional/saint-petersburg-pravo-publication-region78) — тексты принятых актов.
- [Открытый бюджет СПб](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb) — гражданско-ориентированная подача.
- [Открытые данные города](/data-sources/regional/saint-petersburg-open-data-gov-spb) — каталог наборов.

## Не путать с

- **[Открытый бюджет](/data-sources/regional/saint-petersburg-open-budget-budget-gov-spb)** — иная подача и набор визуализаций; юридически значимые **тексты** и **таблицы** сверяйте с сайтом комитета и **region78**.
