---
title: 'Республика Дагестан: Министерство финансов (minfinrd.ru)'
sidebar_label: Минфин РД (minfinrd.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-dagestan-minfin-minfinrd
source_url: 'https://minfinrd.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - xlsx
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный сайт Министерства финансов Республики Дагестан: бюджет, отчётность об исполнении,
  нормативные материалы ведомства и ссылки на связанные витрины («Открытый бюджет», бюджет для граждан).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-dagestan-sources-overview
  - /data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd
  - /data-sources/regional/republic-of-dagestan-budget-for-citizens-minfinrd
  - /data-sources/regional/republic-of-dagestan-treasury-roskazna-dagestan
  - /data-sources/regional/republic-of-dagestan-legal-portal-pravo-e-dag
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
---

# Республика Дагестан: Министерство финансов (minfinrd.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Дагестан** — **главный** финансовый орган **субъекта** |
| Тип доступа | Публичный **сайт** министерства и **вложенные** витрины |
| Основные форматы | **HTML**; **PDF**/**XLSX** в **документах** и **отчётах** (по разделам) |
| Оператор | **Министерство финансов Республики Дагестан** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **центральная** региональная точка для **материалов** по **бюджету**, **исполнению** и **нормативке** финансового блока. Связанные витрины вынесены в отдельные карточки: **[«Открытый бюджет»](/data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd)**, **[бюджет для граждан](/data-sources/regional/republic-of-dagestan-budget-for-citizens-minfinrd)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для **minfinrd.ru** при контрольном запросе) |
| Полнота (`data_completeness`) | **частичная** — набор **файлов** и **горизонт** лет зависит от **политики** раскрытия |
| Машиночитаемость (`machine_readability`) | **смешанный** — **HTML** + **файлы**; **единого** стабильного API **нет** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **регионального** финансового органа |
| Задержка обновления (`update_lag`) | зависит от **цикла** утверждения **отчётов** и **событий** бюджетного процесса |
| Глубина архива (`archive_depth`) | зависит от **раздела** «Документы»/«Отчётность» |
| Лицензия (`license_or_terms`) | условия **использования** публикаций — по **правилам** сайта и **типу** документа |

## Описание

На **minfinrd.ru** обычно доступны **новости**, **структура** ведомства, **нормативные** документы министерства и **разделы**, связанные с **бюджетом** субъекта. **Интерактивные** и **упрощённые** материалы частично вынесены на **[портал «Открытый бюджет»](/data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd)** и страницу **[«Бюджет для граждан»](/data-sources/regional/republic-of-dagestan-budget-for-citizens-minfinrd)**.

## Оператор

**Министерство финансов Республики Дагестан** — https://minfinrd.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта Минфина РД | https://minfinrd.ru/ | HTML |
| Бюджет для граждан (раздел) | https://minfinrd.ru/activity/section-264 | HTML |

## Объекты данных и показатели

- **Проекты** и **материалы** к **закону** о бюджете (по мере размещения).
- **Отчёты** об **исполнении** бюджета и **сопутствующие** таблицы (**PDF**/**XLSX**).
- **Ключи связки** — **финансовый год**, **раздел/целевая статья** (в терминах публикаций субъекта), **ссылки** на **НПА** в **[региональном банке](/data-sources/regional/republic-of-dagestan-legal-portal-pravo-e-dag)**.

## Периодичность обновления

По **бюджетному** циклу и **событиям** (утверждение, уточнения, квартальные/годовые отчёты); уточняйте **дату** на **конкретном** файле.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-minfinrd-check/1.0" \
  "https://minfinrd.ru/"
```

## Связанные страницы wiki

- **[Портал «Открытый бюджет» (portal.minfinrd.ru)](/data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd)** — **отдельная** витрина **детализации** бюджета.
- **[УФК по Республике Дагестан](/data-sources/regional/republic-of-dagestan-treasury-roskazna-dagestan)** — **казначейское** сопровождение **исполнения**.
- **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** — **федеральный** учётный контур, с которым **согласуют** показатели **при наличии** выгрузок.

## Не путать с

- **[Портал «Открытый бюджет»](/data-sources/regional/republic-of-dagestan-open-budget-portal-minfinrd)** — **другая** точка входа; **карточки** разделены, чтобы **не** смешивать **роли** витрин.
