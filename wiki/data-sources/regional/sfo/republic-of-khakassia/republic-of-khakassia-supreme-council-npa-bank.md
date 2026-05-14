---
title: 'Республика Хакасия: Верховный Совет — банк нормативных правовых актов'
sidebar_label: ВС РХ — банк НПА
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-supreme-council-npa-bank
source_url: 'https://vskhakasia.ru/zakonotvorchestvo/normativnye-pravovye-akty'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Верховный Совет Республики Хакасия: раздел законотворчества с банком нормативных правовых актов,
  включая законы о бюджете и смежные акты.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia
  - /data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19
  - /data-sources/regional/republic-of-khakassia-minfin-portal-r19
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: Верховный Совет — банк нормативных правовых актов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** законодательный орган |
| Тип доступа | Официальный **веб-портал** парламента (**vskhakasia.ru**) |
| Основные форматы | HTML, **PDF** текстов актов |
| Оператор | Верховный Совет Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **канонический** веб-вход к **текстам** региональных НПА, включая **бюджетное** законодательство; для **аналитики исполнения** дополняйте **[budget.gov.ru](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — охват определяется **опубликованными** актами |
| Машиночитаемость (`machine_readability`) | HTML/PDF; **API** публичной выгрузки не заявлен |
| Юридическая значимость (`legal_significance`) | официальный **законодательный** портал |
| Задержка обновления (`update_lag`) | зависит от **регистрации** и **опубликования** актов |
| Глубина архива (`archive_depth`) | определяется банком НПА |
| Лицензия (`license_or_terms`) | статус **официального** опубликования — по правилам портала |

## Описание

Раздел **«Нормативные правовые акты»** на **vskhakasia.ru** предназначен для поиска и скачивания **текстов** законов и иных НПА. Для **обзорных** финансовых материалов и ссылок на проекты см. также **[раздел «Финансы»](/data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia)** на том же домене.

## Оператор

Верховный Совет Республики Хакасия — https://vskhakasia.ru/zakonotvorchestvo/normativnye-pravovye-akty

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Банк НПА | https://vskhakasia.ru/zakonotvorchestvo/normativnye-pravovye-akty | HTML / PDF |

## Объекты данных и показатели

- **Тексты** законов Республики Хакасия (в т.ч. о бюджете), **поправки**, **сопутствующие** акты.
- **Ключи связки**: **номер** закона, **дата**, **вид** акта; для бюджета — **год** бюджета.
- **Пробелы**: машинный **единый** датасет всех актов на карточке не фиксируется.

## Периодичность обновления

По мере **законодательного процесса** и обновления банка НПА.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://vskhakasia.ru/zakonotvorchestvo/normativnye-pravovye-akty" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [ВС РХ — раздел «Финансы»](/data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia) — тематический вход в бюджетные материалы.
- [ВС РХ — открытые данные (vs19.ru)](/data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19) — отдельный домен с наборами открытых данных.
- [Минфин (r-19.ru)](/data-sources/regional/republic-of-khakassia-minfin-portal-r19) — исполнительный контур бюджета.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Открытые данные vs19.ru](/data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19)** — другой **домен** и акцент на **наборах** данных, а не на полном текстовом банке НПА.
