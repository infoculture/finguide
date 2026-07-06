---
title: 'Республика Хакасия: Верховный Совет — открытые данные (vs19.ru)'
sidebar_label: ВС РХ — открытые данные
tags:
  - data-source
  - regional
  - open-data
last_updated: 2026-05-14
slug: /data-sources/regional/republic-of-khakassia-supreme-council-open-data-vs19
source_url: 'https://vs19.ru/citizens/otkrytye-dannye'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - csv
  - json
  - xlsx
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Портал открытых данных Верховного Совета Республики Хакасия на домене vs19.ru: каталог наборов
  и файлы, публикуемые законодательным органом.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-khakassia-sources-overview
  - /data-sources/regional/republic-of-khakassia-supreme-council-npa-bank
  - /data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Хакасия: Верховный Совет — открытые данные (vs19.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** законодательный орган |
| Тип доступа | **Каталог** открытых данных + файлы по наборам |
| Основные форматы | HTML, **CSV/JSON/XLSX** (по конкретному набору) |
| Оператор | Верховный Совет Республики Хакасия |
| Режим доступа | Открытый |

Коротко: **официальные** открытые **наборы** парламента на отдельном домене **vs19.ru**; **тексты законов** ищите в **[банке НПА на vskhakasia.ru](/data-sources/regional/republic-of-khakassia-supreme-council-npa-bank)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — перечень наборов **меняется** |
| Машиночитаемость (`machine_readability`) | **смешанная**: от HTML-каталога до файлов наборов |
| Юридическая значимость (`legal_significance`) | официальная публикация **органа** |
| Задержка обновления (`update_lag`) | зависит от **регламента** раскрытия данных парламентом |
| Глубина архива (`archive_depth`) | по **версиям** файлов в каждом наборе |
| Лицензия (`license_or_terms`) | см. паспорт/страницу набора на **vs19.ru** |

## Описание

Раздел **«Открытые данные»** на **vs19.ru** дублирует функцию **каталога**: для каждого набора уточняйте **формат**, **периодичность** и **ключи** в карточке набора на сайте.

## Оператор

Верховный Совет Республики Хакасия — https://vs19.ru/citizens/otkrytye-dannye

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Каталог открытых данных | https://vs19.ru/citizens/otkrytye-dannye | HTML + ссылки на файлы |

## Объекты данных и показатели

- **Именованные** наборы открытых данных парламента (состав **не фиксируется** в этой карточке).
- **Ключи связки**: идентификатор набора на портале, **дата** версии файла.
- **Пробелы**: не все **бюджетные** показатели дублируются здесь и на **budget.gov.ru**.

## Периодичность обновления

По **правилам** раскрытия и **обновления** конкретных наборов на **vs19.ru**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 \
  "https://vs19.ru/citizens/otkrytye-dannye" \
  || echo "ошибка сети или TLS"
```

## Связанные страницы wiki

- [ВС РХ — банк НПА](/data-sources/regional/republic-of-khakassia-supreme-council-npa-bank) — тексты актов.
- [ВС РХ — раздел «Финансы»](/data-sources/regional/republic-of-khakassia-supreme-council-finances-vskhakasia) — тематический вход на **vskhakasia.ru**.
- [Сводная по Хакасии](/data-sources/regional/subject-republic-of-khakassia-sources-overview) — все источники субъекта.

## Не путать с

- **[Банк НПА vskhakasia.ru](/data-sources/regional/republic-of-khakassia-supreme-council-npa-bank)** — другой **домен** и акцент на **нормотворчестве**, а не на **табличных** наборах **opendata**.
