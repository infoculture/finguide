---
title: 'Республика Калмыкия: территориальный фонд ОМС (kalmfoms.ru)'
sidebar_label: ТФОМС Республики Калмыкия
tags:
  - data-source
  - regional
  - budget
  - social
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-kalmykia-tfoms-kalmfoms
source_url: 'https://kalmfoms.ru/'
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
machine_readability: HTML и PDF на сайте фонда; открытый API в карточке не фиксируем
description: >-
  Официальный сайт ТФОМС Республики Калмыкия: бюджет фонда обязательного медицинского страхования,
  тарифная политика, соглашения и материалы по финансированию медицинской помощи на территории
  республики.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-kalmykia-sources-overview
  - /data-sources/regional/republic-of-kalmykia-minfin
  - /data-sources/regional/republic-of-kalmykia-government-kalmregion
  - /glossary/extrabudgetary-funds
  - /data-sources/federal/budget-gov-ru-datasets
---

# Республика Калмыкия: ТФОМС

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Калмыкия** — **внебюджетный** фонд (ОМС) |
| Тип доступа | Публичный **официальный** сайт |
| Основные форматы | **HTML**; **PDF** |
| Оператор | **Территориальный фонд ОМС** Республики Калмыкия |
| Режим доступа | Открытый |

Коротко: **официальный** источник по **бюджету ТФОМС**, **тарифам** и **соглашениям** в контексте **ОМС** республики. Базовые определения **внебюджетных фондов** — в [глоссарии](/glossary/extrabudgetary-funds).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — публичный сайт **не** исчерпывает внутренний учёт фонда |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **оператора** **ТФОМС** |
| Задержка обновления (`update_lag`) | **разная** по разделам (**тарифы**, **соглашения**, новости) |
| Глубина архива (`archive_depth`) | зависит от **архива** документов на сайте |
| Лицензия (`license_or_terms`) | по правилам сайта оператора |

## Описание

ТФОМС публикует материалы, связанные с **финансированием** программы **ОМС** на территории республики: **бюджет** фонда, **нормативная** и **организационная** информация, **тарифные** решения в **публичной** части. **Консолидированные** ряды по субъекту в **федеральных** открытых наборах сопоставляйте с [«Электронным бюджетом»](/data-sources/federal/budget-gov-ru-datasets); **общий** контекст органов власти — на [портале Правительства](/data-sources/regional/republic-of-kalmykia-government-kalmregion).

## Оператор

ТФОМС Республики Калмыкия — https://kalmfoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://kalmfoms.ru/ | HTML |

## Объекты данных и показатели

- **Документы** по **бюджету** ТФОМС и **тарифной** политике (в публикуемой части).
- **Информация** о **субъектах** системы **ОМС** региона (**страховые** и **медицинские** организации) — по структуре сайта.
- **Связь** с **консолидированным** контуром **республики** — через [Минфин РК](/data-sources/regional/republic-of-kalmykia-minfin) и [федеральные витрины](/data-sources/federal/budget-gov-ru-datasets).

## Периодичность обновления

**По событиям** годового **цикла** ОМС, **пересмотра** тарифов и **заключения** соглашений.

## Ограничения и особенности

- **Машинный** доступ чаще строится через **выгрузку** PDF и таблиц с сайта, а не через **единый** общедоступный API.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-kalmfoms-check/1.0" \
  "https://kalmfoms.ru/"
```

## Связанные страницы wiki

- [Министерство финансов Республики Калмыкия](/data-sources/regional/republic-of-kalmykia-minfin) — **консолидированный** бюджетный контекст субъекта.
- [Портал Правительства РК](/data-sources/regional/republic-of-kalmykia-government-kalmregion) — перекрёстные **НПА** и **региональные** решения.
- [Внебюджетные фонды](/glossary/extrabudgetary-funds) — где **ТФОМС** в системе **бюджетных** и **страховых** контуров.

## Не путать с

- **[Минфин РК](/data-sources/regional/republic-of-kalmykia-minfin)** — **республиканский** бюджет; **ТФОМС** ведёт **отдельный** **бюджет** **ОМС** с иной **правовой** рамкой.
