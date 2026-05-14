---
title: 'Республика Хакасия: УФНС России по Республике Хакасия (nalog.gov.ru)'
sidebar_label: УФНС — rn19
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-fts-ofd-nalog-rn19
source_url: 'https://www.nalog.gov.ru/rn19/apply_fts/'
data_source_kind: portal
jurisdiction: multilevel
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Региональная страница ФНС России для Республики Хакасия: контакты управления, переходы к
  сервисам nalog.ru и справочная информация по налоговому администрированию на территории субъекта.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-budget-gov-ru-regions
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: УФНС России по Республике Хакасия (nalog.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральная** служба; **территориальное** управление по **Республике Хакасия** |
| Тип доступа | Официальный **веб-раздел** на **nalog.gov.ru** |
| Основные форматы | HTML |
| Оператор | Управление Федеральной налоговой службы по Республике Хакасия |
| Режим доступа | Открытый (публичные разделы) |

Коротко: **региональный вход** на экосистему **ФНС**; **массовые открытые справочники** и **наборы** налоговой отчётности удобнее тянуть из **федеральных** карточек источников по **nalog.gov.ru** и **ЕМИСС**, а эту страницу использовать для **контекста** и **навигации**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — **не** полный каталог всех налоговых наборов |
| Машиночитаемость (`machine_readability`) | HTML; **API** зависит от конкретного **федерального** сервиса |
| Юридическая значимость (`legal_significance`) | официальный **федеральный** орган |
| Задержка обновления (`update_lag`) | зависит от **сервисов** ФНС |
| Глубина архива (`archive_depth`) | не применима как единый архив |
| Лицензия (`license_or_terms`) | условия **nalog.gov.ru** |

## Описание

Канонический URL ведёт в раздел **rn19** (код региона **19**). Для **сопоставления** с **бюджетом** используйте налоговые показатели как **внешний контекст** (доходная база, отрасль), а не как прямую замену **казначейских** форм.

## Оператор

Управление Федеральной налоговой службы по Республике Хакасия — https://www.nalog.gov.ru/rn19/apply_fts/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Региональная страница УФНС | https://www.nalog.gov.ru/rn19/apply_fts/ | HTML |

## Объекты данных и показатели

- **Контакты** инспекций, **новости**, ссылки на **электронные сервисы**.
- **Не** дублирует в одной карточке все **открытые наборы** ФНС по РФ.

## Периодичность обновления

По мере обновления **шаблонов** и **сервисов** на **nalog.gov.ru**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://www.nalog.gov.ru/rn19/apply_fts/" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [budget.gov.ru — регионы](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions) — бюджетные открытые данные для сопоставления.
- [Каталог наборов «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — бюджетный контур.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Открытые наборы ФНС (пример: адреса и реквизиты инспекций)](/data-sources/federal/7707329152-address)** — **машиночитаемые** CSV по конкретным реестрам; страница УФНС — прежде всего **навигация** и **контакты**, а не полный каталог наборов.
