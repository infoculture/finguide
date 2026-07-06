---
title: 'Республика Хакасия: открытые данные Балыксинского сельсовета (Аскизский район)'
sidebar_label: Балыкса — открытые данные
tags:
  - data-source
  - regional
  - municipal
  - open-data
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-balyksa-selsoviet-opendata
source_url: 'https://balyksa.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1'
data_source_kind: mixed
jurisdiction: municipal
access: open
formats:
  - html
  - csv
  - xlsx
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Официальный портал открытых данных Балыксинского сельсовета Аскизского района Республики Хакасия:
  перечень наборов и файлы, публикуемые органом местного самоуправления.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-accounts-chamber-ksp19
  - /data-sources/regional/republic-of-khakassia-kommunar-selsoviet-opendata
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: открытые данные Балыксинского сельсовета (Аскизский район)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальный** — сельское поселение **Балыкса** |
| Тип доступа | **Каталог** открытых данных ОМСУ |
| Основные форматы | HTML, **CSV/XLSX** по наборам |
| Оператор | Балыксинский сельсовет Аскизского района Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **пример** муниципальной витрины **opendata** в республике; состав наборов **локальный** (бюджет поселения, муниципальные услуги и т.д.).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от **политики** раскрытия ОМСУ |
| Машиночитаемость (`machine_readability`) | **смешанная** (каталог + файлы) |
| Юридическая значимость (`legal_significance`) | официальный сайт **ОМСУ** |
| Задержка обновления (`update_lag`) | определяется **муниципальным** регламентом |
| Глубина архива (`archive_depth`) | по версиям файлов в наборах |
| Лицензия (`license_or_terms`) | см. условия на **balyksa.ru** |

## Описание

URL содержит **параметры** CMS; при изменении движка сайта ссылка может **устареть**. В таком случае ищите раздел **«Открытые данные»** с **главной** сайта поселения.

## Оператор

Балыксинский сельсовет — https://balyksa.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал открытых данных | https://balyksa.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1 | HTML + файлы |

## Объекты данных и показатели

- **Муниципальные** наборы (уточняйте по каталогу на сайте).
- **Ключи связки**: **ОКТМО** поселения, **год**, идентификатор набора на портале ОМСУ.

## Периодичность обновления

По **регламенту** муниципального раскрытия данных.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://balyksa.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [КСП Республики Хакасия](/data-sources/regional/republic-of-khakassia-accounts-chamber-ksp19) — внешний контроль за муниципальными финансами.
- [Коммунаровский сельсовет — открытые данные](/data-sources/regional/republic-of-khakassia-kommunar-selsoviet-opendata) — аналогичная витрина в другом районе.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Региональные открытые данные парламента](/data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19)** — **другой уровень** власти и **другой** оператор.
