---
title: 'Ставропольский край: открытые данные ГИСОГД (gisogd.stavregion.ru)'
sidebar_label: Открытые данные ГИСОГД СК
tags:
  - data-source
  - regional
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-gisogd-open-data
source_url: 'https://gisogd.stavregion.ru/apps'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
  - csv
  - json
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Портал открытых данных региональной градостроительной ГИС (ГИСОГД) Ставропольского края: каталог
  наборов и приложения; преимущественно градостроительный контур, не специализированный бюджетный регистр.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-stavregion-budget-for-citizens
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/federal/budget-gov-ru-datasets
---

# Ставропольский край: открытые данные ГИСОГД (gisogd.stavregion.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **ГИСОГД** и **связанные** **открытые** данные |
| Тип доступа | **Каталог** наборов и **веб-приложения** |
| Основные форматы | **HTML**; у **наборов** — **CSV**/**JSON**/… **по паспортам** |
| Оператор | **Оператор** **региональной** **ГИСОГД** (витрина на **gisogd.stavregion.ru**) |
| Режим доступа | Открытый |

Коротко: **официальный** **региональный** **каталог** **открытых** данных **ГИСОГД**. Для **бюджетных** **рядов** субъекта используйте **[Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk)** и **[budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)** — здесь **может** **не быть** **полного** **бюджетного** **контура**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** `/apps`, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — **фокус** на **градостроительстве** и **смежных** **реестрах** |
| Машиночитаемость (`machine_readability`) | **смешанный** — **зависит** от **набора** |
| Юридическая значимость (`legal_significance`) | **официальная** **региональная** витрина |
| Задержка обновления (`update_lag`) | **по наборам** |
| Глубина архива (`archive_depth`) | **по паспортам** наборов |
| Лицензия (`license_or_terms`) | **в паспортах** наборов |

## Описание

Каталог **может** содержать **наборы**, **полезные** для **муниципальной** и **инфраструктурной** аналитики (**ОКТМО**, **объекты**). **Прямой** **замены** **федеральным** **бюджетным** **витринам** **нет**.

## Оператор

ГИСОГД Ставропольского края (витрина открытых данных) — https://gisogd.stavregion.ru/apps

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Приложения / каталог | https://gisogd.stavregion.ru/apps | HTML |

## Объекты данных и показатели

- **Именованные** наборы **ГИСОГД** с **паспортами**.
- **Бюджет** — **только** если **явно** присутствует **как** **отдельный** набор.

## Периодичность обновления

**Индивидуально** по **каждому** набору.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-gisogd-stav-check/1.0" \
  "https://gisogd.stavregion.ru/apps"
```

## Связанные страницы wiki

- [Портал СК — бюджет для граждан](/data-sources/regional/stavropol-krai-stavregion-budget-for-citizens) — **другой** **раздел** **того же** **портала** **stavregion.ru**.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **бюджетный** **контур** **края**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральная** **машиночитаемая** **сверка**.

## Не путать с

- **[Открытый бюджет](/data-sources/regional/stavropol-krai-open-budget-openbudsk)** — **специализированная** **бюджетная** **витрина**, **не** **ГИСОГД**.
