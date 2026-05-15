---
title: 'Челябинская область: Министерство финансов (minfin.gov74.ru)'
sidebar_label: Минфин Челябинской области
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/chelyabinsk-oblast-minfin
source_url: 'https://minfin.gov74.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF; машиночитаемые таблицы появляются не во всех разделах
content_type: data_source
entity_type: data-source
description: >-
  Официальный сайт Министерства финансов Челябинской области: материалы по
  областному бюджету, исполнению, отчётность и документы финансового блока
  субъекта.
related_pages:
  - /data-sources/regional/subject-chelyabinsk-oblast-sources-overview
  - /data-sources/regional/chelyabinsk-oblast-open-budget
  - /data-sources/regional/chelyabinsk-oblast-gov-npa-pravmin
  - /data-sources/regional/chelyabinsk-oblast-legislative-assembly
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Челябинская область: Министерство финансов (minfin.gov74.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный финансовый орган субъекта РФ |
| Тип доступа | Официальный веб-портал |
| Основные форматы | HTML, PDF |
| Оператор | Министерство финансов Челябинской области |
| Режим доступа | Открытый |

Коротко: базовый источник по **областному бюджету** и **исполнению**. Для гражданской витрины используйте [«Бюджет для граждан»](/data-sources/regional/chelyabinsk-oblast-open-budget); для принятых законов о бюджете — [Законодательное Собрание](/data-sources/regional/chelyabinsk-oblast-legislative-assembly) и [банк НПА Правительства](/data-sources/regional/chelyabinsk-oblast-gov-npa-pravmin).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | Частичная: полнота зависит от раздела и года |
| Машиночитаемость (`machine_readability`) | HTML/PDF; стабильных CSV/XLSX по всем разделам нет |
| Юридическая значимость (`legal_significance`) | Официальный региональный финансовый орган |
| Задержка обновления (`update_lag`) | Привязана к бюджетному циклу и отчётным датам |
| Глубина архива (`archive_depth`) | Разная по разделам «Бюджет» и «Документы» |
| Лицензия (`license_or_terms`) | По условиям сайта субъекта |

## Описание

Сайт **minfin.gov74.ru** — отправная точка для **проекта и исполнения** областного бюджета, пояснительных материалов и отчётности Минфина. Раздел **«Бюджет для граждан»** вынесен в отдельную карточку, потому что ориентирован на агрегированную визуализацию, а не на первичные таблицы.

## Оператор

Министерство финансов Челябинской области — https://minfin.gov74.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная | https://minfin.gov74.ru/ | HTML |
| Бюджет для граждан | https://minfin.gov74.ru/minfin/activities/budget/budget-citizens.htm | HTML |

## Объекты данных и показатели

- Закон об областном бюджете и материалы к нему (в связке с парламентом и банком НПА).
- Отчёты об исполнении, сводные таблицы и методические документы.
- Ключи связки: финансовый год, разделы/статьи бюджетной классификации (если приведены), ОКТМО.

## Периодичность обновления

По календарю бюджетного процесса: пик при подготовке закона о бюджете и годового отчёта об исполнении.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -L "https://minfin.gov74.ru/"
```

## Связанные страницы wiki

- [Бюджет для граждан](/data-sources/regional/chelyabinsk-oblast-open-budget)
- [Банк НПА Правительства (pravmin.gov74.ru)](/data-sources/regional/chelyabinsk-oblast-gov-npa-pravmin)
- [Законодательное Собрание](/data-sources/regional/chelyabinsk-oblast-legislative-assembly)
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)
- [Наборы budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets)

## Не путать с

- **[Бюджет для граждан](/data-sources/regional/chelyabinsk-oblast-open-budget)** — гражданская витрина; эта карточка — **общий** портал Минфина с первичными материалами.
