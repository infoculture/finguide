---
title: 'Республика Хакасия: открытые данные Коммунаровского сельсовета (Ширинский район)'
sidebar_label: Коммунар — открытые данные
tags:
  - data-source
  - regional
  - municipal
  - open-data
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-kommunar-selsoviet-opendata
source_url: 'https://www.admkommunar.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1'
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
  Официальный портал открытых данных Коммунаровского сельсовета Ширинского района Республики Хакасия:
  перечень наборов и файлы, публикуемые органом местного самоуправления.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-accounts-chamber-ksp19
  - /data-sources/regional/republic-of-khakassia-balyksa-selsoviet-opendata
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: открытые данные Коммунаровского сельсовета (Ширинский район)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальный** — сельское поселение **Коммунар** |
| Тип доступа | **Каталог** открытых данных ОМСУ |
| Основные форматы | HTML, **CSV/XLSX** по наборам |
| Оператор | Коммунаровский сельсовет Ширинского района Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **пример** муниципальной витрины **opendata**; для **агрегированного** бюджета района и республики используйте **региональные** и **федеральные** источники.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная |
| Машиночитаемость (`machine_readability`) | **смешанная** |
| Юридическая значимость (`legal_significance`) | официальный сайт **ОМСУ** |
| Задержка обновления (`update_lag`) | муниципальный регламент |
| Глубина архива (`archive_depth`) | по версиям файлов |
| Лицензия (`license_or_terms`) | см. **admkommunar.ru** |

## Описание

Структура URL аналогична **[Балыксе](/data-sources/regional/republic-of-khakassia-balyksa-selsoviet-opendata)** (типовая CMS ОМСУ). При **404** проверьте раздел «Открытые данные» с главной **admkommunar.ru**.

## Оператор

Коммунаровский сельсовет — https://www.admkommunar.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Портал открытых данных | https://www.admkommunar.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1 | HTML + файлы |

## Объекты данных и показатели

- **Муниципальные** наборы поселения (см. каталог на сайте).
- **Ключи связки**: **ОКТМО**, **год**.

## Периодичность обновления

По регламенту ОМСУ.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://www.admkommunar.ru/opendata.php?copylenco=omsu&copy=opendata&id_omsu=1" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [Балыксинский сельсовет — открытые данные](/data-sources/regional/republic-of-khakassia-balyksa-selsoviet-opendata) — сопоставимая витрина.
- [КСП Республики Хакасия](/data-sources/regional/republic-of-khakassia-accounts-chamber-ksp19) — контроль за муниципальными финансами.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Региональный бюджет](/data-sources/regional/republic-of-khakassia-budget-gov-ru-regions)** — другой **уровень** агрегации.
