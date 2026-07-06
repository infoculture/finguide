---
title: 'Ставропольский край: государственные программы (Минфин СК)'
sidebar_label: Минфин СК — госпрограммы
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-minfin-state-programmes
source_url: >-
  https://www.mfsk.ru/working/gos-programma/gosudarstvennaya-programma-2024-2030-gody
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Раздел сайта Министерства финансов Ставропольского края о государственных программах края:
  документы, паспорта и материалы по финансовому обеспечению (в основном HTML/PDF на сайте).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/stavropol-krai-minfin-internal-financial-control
  - /data-sources/federal/budget-gov-ru-datasets
---

# Ставропольский край: государственные программы (Минфин СК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **государственные программы** и их **финансовое обеспечение** |
| Тип доступа | Публичный **раздел** сайта **Минфина** края |
| Основные форматы | **HTML**; **PDF** для **документов** программ |
| Оператор | **Министерство финансов** Ставропольского края |
| Режим доступа | Открытый |

Коротко: **официальные** материалы по **государственным программам** края: **паспорта**, **показатели**, **обоснования** расходов. Для **единой** машиночитаемой **картины** планирования субъекта дополнительно используйте **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (для **подраздела** зафиксирован **HTTP 403** при **автоматическом** GET из контура проверки — типично для **WAF**; в **браузере** раздел открывается) |
| Полнота (`data_completeness`) | **частичная** — набор **документов** меняется по **циклам** планирования |
| Машиночитаемость (`machine_readability`) | преимущественно **HTML/PDF** без **единого** публичного **API** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **регионального** финансового органа |
| Задержка обновления (`update_lag`) | **привязана** к **утверждению** программ и **корректировкам** |
| Глубина архива (`archive_depth`) | зависит от **политики** хранения **предыдущих** редакций на сайте |
| Лицензия (`license_or_terms`) | **условия** использования материалов — по сайту оператора |

## Описание

Раздел относится к **блоку** «Работа министерства» на **mfsk.ru**. Для **контрольных** планов и **ВГК** см. **[внутренний финансовый контроль](/data-sources/regional/stavropol-krai-minfin-internal-financial-control)**.

## Оператор

Министерство финансов Ставропольского края — канонический вход: https://www.mfsk.ru/working/gos-programma/gosudarstvennaya-programma-2024-2030-gody

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Государственные программы (пример текущего цикла) | https://www.mfsk.ru/working/gos-programma/gosudarstvennaya-programma-2024-2030-gody | HTML / PDF |

## Объекты данных и показатели

- **Паспорта** государственных программ, **целевые** показатели, **объёмы** финансирования (как правило в **таблицах** и **PDF**).
- **Связка** с **консолидированным бюджетом** — через **официальные** бюджетные **законы** и **федеральные** витрины.

## Периодичность обновления

**По событиям** утверждения и **корректировок** программ и **бюджета** края.

## Примеры доступа

```bash
# Подраздел может отвечать 403 автоматизированным клиентам; проверяйте в браузере.
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-mfsk-gosprog-check/1.0" \
  "https://www.mfsk.ru/working/gos-programma/gosudarstvennaya-programma-2024-2030-gody"
```

## Связанные страницы wiki

- [Минфин СК (главная)](/data-sources/regional/stavropol-krai-minfin-mfsk) — **общий** вход к **бюджетным** разделам.
- [Внутренний финансовый контроль (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-internal-financial-control) — **планы** контрольных мероприятий **ВГК**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **сверка** с **федеральными** рядами.
