---
title: >-
  Казначейство: размещение средств единого счёта федерального бюджета (отчёты о
  финансовых операциях)
sidebar_label: 'Казначейство: размещение средств ЕСФБ'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-finops-federal-budget-account-placements
source_url: >-
  https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - docx
  - xml
status: current
related_information_system: /information-systems/federal/roskazna-portal
description: >-
  витрина финансовых операций по счёту федерального бюджета (депозиты, репо,
  производные, бюджетные кредиты субъектам и муниципалитетам, операции с
  иностранной валютой — по актуальному оглавлению); для сводных форм исполнения
  ФБ по КБК см. казначейское исполнение федерального бюджета.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-operating-day
  - /data-sources/federal/roskazna-federal-budget-execution
  - /data-sources/federal/roskazna-reports
  - /data-sources/federal/otchety-ob-ispolnenii-byudzhetov
  - /glossary/treasury-execution
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный бюджет**: публичные материалы по **размещению средств единого счёта федерального бюджета** по видам операций (инструменты и отдельные направления — по меню сайта) |
| Тип доступа | Тематические **HTML-страницы** с вложенным меню; **файлы** в таблицах на листовых страницах |
| Основные форматы | HTML; типично **DOCX** и **XML** под путём `storage/operation-day-files/` |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: витрина **финансовых операций** по счёту федерального бюджета (депозиты, репо, производные, **бюджетные кредиты** субъектам и муниципалитетам, **операции с иностранной валютой** — по актуальному оглавлению); для **сводных форм исполнения ФБ по КБК** см. **[казначейское исполнение федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution)**.

## Описание

Карточка закрепляет ветку https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta раздела **[«Финансовые операции»](https://roskazna.gov.ru/finansovye-operacii)**. Состав пунктов меню (включая строки про бюджетные кредиты и покупку/продажу валюты) сверяйте с сайтом: при реорганизации раздела меняются и **URL**.

**Не входит**: замена **[месячных и годовых форм исполнения](/data-sources/federal/roskazna-federal-budget-execution)**; микроданные **[контрактов](/data-sources/federal/procurement)** и **[закупок](/information-systems/federal/zakupki)** без отдельной методики.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Ветка «Размещение средств единого счёта ФБ» | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta | HTML |
| Родительский раздел | https://roskazna.gov.ru/finansovye-operacii | HTML |
| Пример листовой страницы (депозиты) | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta-na-bankovskih-depozitah | HTML; файлы по ссылкам |

## Объекты данных и показатели

- **Публикации по операциям размещения** средств единого счёта федерального бюджета — выгрузки и документы по выбранному подразделу; семантика полей в **XML/DOCX** и заголовках таблиц на странице.
- **Ключи связки** — дата/период, тип операции по классификации сайта; прямого построчного соответствия строкам **[0503117](/reporting/0503117)** и аналогам **не гарантируется**.

**Пробелы**: возможны **403** для скриптов без браузерного `User-Agent`; часть подразделов может временно не содержать файлов.

## Периодичность обновления

По мере публикации оператором в **архивных таблицах** листовых страниц; точный регламент каждого подтипа — в сопроводительных материалах на странице и в нормативной базе по соответствующим операциям.

## Ограничения и особенности

- Для сопоставления с **[макро-исполнением федерального бюджета на сайте Минфина](/data-sources/federal/minfin-fedbud-execute)** или **[ГИИС](/data-sources/federal/budget-gov-ru-datasets)** нужна явная **методическая связь** показателей.
- Часть операций (например **бюджетные кредиты**) относится к **фискальной политике** и учёту долга; не смешивайте с **[государственным и муниципальным долгом](/glossary/state-municipal-debt)** в открытых формах без сверки определений.

## Примеры доступа

```bash
path=$(curl -fsSL -A 'Mozilla/5.0' \
  'https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta/razmeshchenie-sredstv-edinogo-scheta-federalnogo-byudzheta-na-bankovskih-depozitah' \
  | sed -n 's/.*href="\(/storage\/operation-day-files\/[^"]*\)".*/\1/p' | head -1)
curl -fsSL -A 'Mozilla/5.0' -O "https://roskazna.gov.ru${path}"
```

## Связанные страницы wiki

- **[Казначейство: исполнение федерального бюджета (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — формы исполнения **ФБ** в **`/ispolnenie-byudzhetov/`**.
- **[Казначейство: размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)** — соседняя ветка **ЕКС** в том же меню «Финансовые операции».
- **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — точки входа и ограничения витрины.
- **[Минфин: краткая информация об исполнении федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** — макро-XLSX для сопоставления агрегатов, где это уместно.

## Не путать с

- **[Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)** — иной счёт (**единый казначейский счёт** против **единого счёта федерального бюджета**); состав операций и URL различаются.
