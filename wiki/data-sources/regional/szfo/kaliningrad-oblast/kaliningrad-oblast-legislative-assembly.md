---
title: "Калининградская область: Законодательное Собрание"
sidebar_label: Законодательное Собрание (zaksob39.ru)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kaliningrad-oblast-legislative-assembly
source_url: "https://zaksob39.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
  - docx
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; тексты законопроектов и законов в PDF/DOCX по ссылкам
description: >-
  Официальный сайт Законодательного Собрания Калининградской области: законопроекты и тексты законов,
  в том числе о областном бюджете и смежной налогово-бюджетной повестке (по наполнению сайта).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/kaliningrad-oblast-minfin
  - /data-sources/regional/kaliningrad-oblast-gov39-npa
  - /data-sources/regional/kaliningrad-oblast-minfin-budget-process
  - /data-sources/regional/how-to-find-regional-data
---

# Калининградская область: Законодательное Собрание

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Калининградская область** — **законодательный** орган субъекта РФ |
| Тип доступа | Публичный **портал** **Законодательного Собрания** |
| Основные форматы | **HTML**; **PDF**/**DOCX** по ссылкам |
| Оператор | **Законодательное Собрание Калининградской области** |
| Режим доступа | Открытый |

Коротко: **официальный** **парламентский** **вход** для **законов** об **областном** **бюджете**, **изменениях** и **смежных** **актах**; **исполнительные** **НПА** ищите на **[gov39.ru](/data-sources/regional/kaliningrad-oblast-gov39-npa)**, **операционные** **материалы** цикла — на **[Минфине](/data-sources/regional/kaliningrad-oblast-minfin)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** **электронного** **архива** |
| Машиночитаемость (`machine_readability`) | **HTML**/**файлы** |
| Юридическая значимость (`legal_significance`) | **официальный** **законодательный** орган |
| Задержка обновления (`update_lag`) | от **дней** до **недель** после **пленарных** **решений** (по практике размещения) |
| Глубина архива (`archive_depth`) | зависит от **CMS** |
| Лицензия (`license_or_terms`) | см. условия сайта |

## Описание

**zaksob39.ru** — **основная** **публичная** **витрина** **статусов** **законопроектов**, **стенограмм**/**повесток** (если публикуются) и **текстов** **законов**. Для **«бюджетного»** **анализа** **сопоставляйте** **статьи** **закона** об **бюджете** с **формами** **исполнения** на **[Минфине](/data-sources/regional/kaliningrad-oblast-minfin)**.

## Оператор

**Законодательное Собрание Калининградской области** — канонический вход: https://zaksob39.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта ЗС | https://zaksob39.ru/ | HTML |

## Объекты данных и показатели

- **Законопроекты** и **принятые** **законы** (включая **закон** об **областном** **бюджете**).
- **Сопутствующая** **повестка** **комитетов** (по мере публикации).
- **Ключи** **связки** с **бюджетом**: **номер** **закона**, **год**, **статьи** **распределения** (как в **тексте**).

## Периодичность обновления

**Сессионный** **ритм** **ЗС**; **пик** в **период** **рассмотрения** **бюджета**.

## Ограничения и особенности

- **Юридически** значимую **редакцию** **закона** подтверждайте **официальным** **опубликованием** (включая **региональные** **официальные** **издания**, если применимо).
- **Внутренние** **URL** **законов** могут **меняться** при **обновлении** портала.

## Примеры доступа

```bash
curl -fsSL --connect-timeout 20 -A "finguide-zaksob39-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zaksob39.ru/"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kaliningrad-oblast-sources-overview).
- [Минфин области](/data-sources/regional/kaliningrad-oblast-minfin).
- [НПА на gov39.ru](/data-sources/regional/kaliningrad-oblast-gov39-npa).
- [Минфин: бюджетный процесс](/data-sources/regional/kaliningrad-oblast-minfin-budget-process).
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
