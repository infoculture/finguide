---
title: 'Республика Калмыкия: регистр муниципальных НПА (портал kalmregion.ru)'
sidebar_label: Регистр муниципальных НПА РК
tags:
  - data-source
  - regional
  - municipal
  - legal
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-kalmykia-municipal-npa-registry-kalmregion
source_url: >-
  https://www.kalmregion.ru/organy-vlasti/apparat-pravitelstva/registr-munitsipalnykh-normativnykh-pravovykh-aktov-rk/
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: >-
  HTML реестра на портале; машинного API в карточке не фиксируем. Канонический URL в практике сайта
  включает завершающий слэш — без него возможен ответ 404.
description: >-
  Реестр муниципальных нормативных правовых актов на официальном портале Республики Калмыкия:
  поиск и публикация МНПА, включая акты с бюджетным и финансовым содержанием на уровне ОМСУ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-kalmykia-sources-overview
  - /data-sources/regional/republic-of-kalmykia-government-kalmregion
  - /data-sources/regional/republic-of-kalmykia-minfin
  - /glossary/budget-levels
  - /data-sources/regional/how-to-find-regional-data
---

# Республика Калмыкия: регистр муниципальных НПА

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Муниципальные** НПА на территории **Республики Калмыкия** (реестр на **портале** субъекта) |
| Тип доступа | Публичный **веб-раздел** |
| Основные форматы | **HTML** |
| Оператор | **Аппарат Правительства** Республики Калмыкия (**раздел** портала) |
| Режим доступа | Открытый |

Коротко: **официальный** **региональный** **инструмент** прозрачности **муниципальных** актов. Для **уровней бюджета** и терминов **«местный» / «субъект»** см. [«Уровни бюджета»](/glossary/budget-levels). **Республиканский** бюджет и **кабинетные** акты — у [Минфина](/data-sources/regional/republic-of-kalmykia-minfin) и [Правительства](/data-sources/regional/republic-of-kalmykia-government-kalmregion).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** URL **с завершающим** `/`, **HTTP 200**; без `/` в тесте — **404**) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** **ведения** реестра оператором |
| Машиночитаемость (`machine_readability`) | **HTML**; **машинного** каталога **в карточке** не фиксируем |
| Юридическая значимость (`legal_significance`) | **официальное** **размещение** реестра на **портале** субъекта |
| Задержка обновления (`update_lag`) | **переменная** по мере **регистрации** МНПА |
| Глубина архива (`archive_depth`) | определяется **политикой** **ведения** реестра |
| Лицензия (`license_or_terms`) | **государственные** **опубликованные** тексты |

## Описание

Реестр помогает находить **муниципальные** решения с **бюджетным** содержанием (**местные** **полномочия**, **местные** **накопления**, **муниципальные** **программы**). В **аналитике** **открытых** **финансов** его имеет смысл **сшивать** с **[консолидированным контуром](/data-sources/regional/republic-of-kalmykia-minfin)** республики и с **[федеральными](/data-sources/federal/budget-gov-ru-datasets)** **рядами**, где учитываются **трансферты** и **вложенность** **бюджетов**.

## Оператор

Раздел официального портала Республики Калмыкия — https://www.kalmregion.ru/organy-vlasti/apparat-pravitelstva/registr-munitsipalnykh-normativnykh-pravovykh-aktov-rk/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Реестр МНПА (**канонический**, со `/` в конце) | https://www.kalmregion.ru/organy-vlasti/apparat-pravitelstva/registr-munitsipalnykh-normativnykh-pravovykh-aktov-rk/ | HTML |

## Объекты данных и показатели

- **Карточки** / **записи** **муниципальных** НПА (**метаданные** и **тексты** — по функционалу реестра).
- **Фильтры** по **типу** акта, **дате**, **органу** (уточняйте по интерфейсу).
- **Связка** с **ОКТМО** и **ведомственными** сайтами **МО** — **часто** вне этого реестра.

## Периодичность обновления

**По мере** **регистрации** и **изменения** **статусов** актов в реестре.

## Ограничения и особенности

- **Сохраняйте** **URL** **именно** с **завершающим** `/` — иначе возможен **404** на стороне портала.
- **Реестр** **не** гарантирует **полноту** по **всем** МНПА региона без **перекрёстной** сверки с сайтами **МО**.

## Примеры доступа

```bash
curl -fsSLk -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-muni-npa-rk-check/1.0" \
  "https://www.kalmregion.ru/organy-vlasti/apparat-pravitelstva/registr-munitsipalnykh-normativnykh-pravovykh-aktov-rk/"
```

## Связанные страницы wiki

- [Портал Правительства РК](/data-sources/regional/republic-of-kalmykia-government-kalmregion) — **родительский** **портал** и **кабинетные** акты.
- [Министерство финансов Республики Калмыкия](/data-sources/regional/republic-of-kalmykia-minfin) — **республиканский** **бюджетный** контур.
- [Уровни бюджета](/glossary/budget-levels) — как **местный уровень** соотносится с **консолидированным** субъектом.

## Не путать с

- **[Народный Хурал](/data-sources/regional/republic-of-kalmykia-hural-parliament)** — **законы** **субъекта**; **реестр** — преимущественно про **муниципальный уровень**.
