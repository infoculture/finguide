---
title: "Калининградская область: нормативные правовые акты (gov39.ru)"
sidebar_label: НПА на портале gov39.ru
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kaliningrad-oblast-gov39-npa
source_url: "https://gov39.ru/working/npa"
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
machine_readability: HTML; тексты актов часто в PDF/DOCX
description: >-
  Раздел официального портала Правительства Калининградской области с нормативными
  правовыми актами и правовой информацией субъекта (поиск и карточки документов на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/kaliningrad-oblast-legislative-assembly
  - /data-sources/regional/kaliningrad-oblast-minfin
  - /data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution
  - /data-sources/regional/how-to-find-regional-data
---

# Калининградская область: нормативные правовые акты (gov39.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Калининградская область** — **исполнительная** власть (портал **Правительства**) |
| Тип доступа | Публичный **банк** **НПА**/**правовых** материалов на **gov39.ru** |
| Основные форматы | **HTML**; **PDF**/**DOCX** и др. вложения |
| Оператор | **Правительство Калининградской области** (портал) |
| Режим доступа | Открытый |

Коротко: **официальный** **поиск** и **карточки** **актов** **Правительства** и **смежных** органов на **gov39.ru**; **законы** **Законодательного Собрания** (включая **закон** об **областном** **бюджете**) сверяйте с **[сайтом парламента](/data-sources/regional/kaliningrad-oblast-legislative-assembly)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** **загрузки** и **индексации** на портале |
| Машиночитаемость (`machine_readability`) | **HTML** + **файлы**; **API** **не** стандартизирован |
| Юридическая значимость (`legal_significance`) | **официальный** **информационный** ресурс; для **юридически** значимой **редакции** подтверждайте **официальное** **опубликование** |
| Задержка обновления (`update_lag`) | от **часов** до **дней** после подписания (по практике размещения) |
| Глубина архива (`archive_depth`) | зависит от **политики** **архива** портала |
| Лицензия (`license_or_terms`) | см. условия **gov39.ru** |

## Описание

Раздел **`/working/npa`** — типичная **точка входа** к **актам** **органов** **исполнительной** власти субъекта. Для **бюджетного** цикла **часто** требуется **параллельная** работа с **[Минфином](/data-sources/regional/kaliningrad-oblast-minfin)** (внутренние **ведомственные** **Порядки**, **формы**) и **[ЗС](/data-sources/regional/kaliningrad-oblast-legislative-assembly)** ( **законы** ).

## Оператор

**Правительство Калининградской области** — канонический вход: https://gov39.ru/working/npa

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Правовые акты | https://gov39.ru/working/npa | HTML |

## Объекты данных и показатели

- **Постановления**, **распоряжения** и иные **акты** **Правительства** (как **выложены**).
- **Метаданные** **даты**, **номера**, **видов** акта — по **карточкам** в **CMS**.
- **Связь** с **бюджетом** — через **номера** **актов** о **бюджете** и **ключевые** слова (**«об областном бюджете»**).

## Периодичность обновления

**Непрерывно** по мере **размещения** новых **актов**.

## Ограничения и особенности

- **Поиск** по порталу может **отличаться** от **официальных** **баз** **НПА**; при **споре** о **тексте** используйте **каналы** **официального** **опубликования**, закреплённые **нормой**.
- **Длинные** URL могут **меняться** при **обновлении** CMS.

## Примеры доступа

```bash
curl -fsSL --connect-timeout 20 -A "finguide-gov39-npa-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://gov39.ru/working/npa"
```

## Связанные страницы wiki

- [Сводная страница субъекта](/data-sources/regional/subject-kaliningrad-oblast-sources-overview).
- [Законодательное Собрание](/data-sources/regional/kaliningrad-oblast-legislative-assembly).
- [Минфин области](/data-sources/regional/kaliningrad-oblast-minfin).
- [Исполнение консолидированного бюджета](/data-sources/regional/kaliningrad-oblast-gov39-consolidated-budget-execution).
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
