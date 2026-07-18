---
title: >-
  Казначейство: размещение средств единого казначейского счета (отчёты о
  финансовых операциях)
sidebar_label: 'Казначейство: размещение средств ЕКС'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-finops-treasury-account-placements
source_url: >-
  https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta
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
  официальная витрина Казначейства по размещению средств ЕКС (репо, депозиты,
  счета, производные и др. — по оглавлению сайта); для агрегатов исполнения
  бюджета по КБК используйте отчёты раздела «Исполнение бюджетов».
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-treasury-account-fundraising
  - /data-sources/federal/roskazna-reports
  - /data-sources/federal/roskazna-federal-budget-execution
  - /data-sources/federal/otchety-ob-ispolnenii-byudzhetov
jurisdiction_level: federal
data_completeness: unknown
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный уровень**: публичные материалы по **размещению временно свободных средств единого казначейского счета** (ЕКС) по видам финансовых инструментов |
| Тип доступа | Тематические **HTML-страницы** раздела «Финансовые операции» с вложенным меню по инструментам; **файлы выгрузки по ссылкам** в таблицах на листовых страницах |
| Основные форматы | HTML; типично **DOCX** и **XML** в каталоге вложений `storage/operation-day-files/` (имена файлов меняются при обновлениях) |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: **официальная витрина Казначейства** по размещению средств **ЕКС** (репо, депозиты, счета, производные и др. — по оглавлению сайта); для **агрегатов исполнения бюджета по КБК** используйте **[отчёты раздела «Исполнение бюджетов»](/data-sources/federal/roskazna-reports)**.

## Описание

Карточка описывает ветку https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta внутри раздела **[«Финансовые операции»](https://roskazna.gov.ru/finansovye-operacii)**: перечень подразделов (например размещение на банковских депозитах, по договорам репо, займ ценных бумаг, сведения об объёме средств от размещения временно свободных средств ЕКС и т.п.) уточняйте по **актуальному левому меню** страницы.

**Не входит**: макроформы исполнения федерального бюджета по **[КБК](/glossary/kbk)** из **`/ispolnenie-byudzhetov/`**; внутренние регистры поручений и лицевые счета без публикации на сайте.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — канонический URL ветки: https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — публичная витрина оператора; раздел «Финансовые операции» логически соседствует с отчётностью об исполнении бюджетов.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Ветка «Размещение средств ЕКС» | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta | HTML; переходы к листовым страницам по инструментам |
| Родительский раздел | https://roskazna.gov.ru/finansovye-operacii | HTML |
| Пример листовой страницы (депозиты) | https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta-na-bankovskih-depozitah | HTML; таблица со ссылками на файлы |

## Объекты данных и показатели

- **Публикации по операциям размещения** — регламентированные выгрузки и сопроводительные документы по выбранному **виду инструмента** и дате (конкретные поля и единицы — в заголовках таблиц и в XML/DOCX).
- **Ключи связки** — прежде всего **дата операции / период**, **вид инструмента** (как на сайте); автоматической сквозной связи с **[формами исполнения бюджета](/data-sources/federal/roskazna-federal-budget-execution)** в одном файле **не гарантируется**.

**Пробелы**: состав подразделов и URL **меняются** при обновлении сайта; для роботов возможны ответы **403** без типичного браузерного `User-Agent`.

## Периодичность обновления

Зависит от **вида операции** и регламента раскрытия; новые строки и файлы появляются в **архивной таблице** на листовых страницах по мере публикации оператором. Общие ограничения витрины — в **[карточке портала](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Запросы без заголовка `User-Agent`, похожего на браузер, иногда завершаются **403** — учитывайте при скриптах (аналогично **[исполнению ФБ на портале](/data-sources/federal/roskazna-federal-budget-execution)**).
- Показатели раздела **не подменяют** **[казначейское исполнение бюджета](/glossary/treasury-execution)** в смысле отчётности по доходам и расходам бюджета по КБК.

## Примеры доступа

Подставьте актуальный относительный путь из атрибута `href` таблицы на выбранной листовой странице (имена в `/storage/operation-day-files/` обновляются).

```bash
path=$(curl -fsSL -A 'Mozilla/5.0' \
  'https://roskazna.gov.ru/finansovye-operacii/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta/razmeshchenie-sredstv-edinogo-kaznachejskogo-scheta-na-bankovskih-depozitah' \
  | sed -n 's/.*href="\(/storage\/operation-day-files\/[^"]*\)".*/\1/p' | head -1)
curl -fsSL -A 'Mozilla/5.0' -O "https://roskazna.gov.ru${path}"
```

## Связанные страницы wiki

- **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — контекст всего публичного контура `roskazna.gov.ru`.
- **[Отчёты Федерального казначейства (исполнение бюджетов)](/data-sources/federal/roskazna-reports)** — **[формы исполнения](/data-sources/federal/roskazna-federal-budget-execution)** и долговые материалы в **`/ispolnenie-byudzhetov/`**, а не операции размещения остатков ЕКС.
- **[Казначейство: размещение средств единого счёта федерального бюджета](/data-sources/federal/roskazna-finops-federal-budget-account-placements)** — параллельная ветка того же раздела «Финансовые операции» для **единого счёта федерального бюджета**.
- **[Витрины данных Казначейства (datamarts)](/data-sources/federal/roskazna-datamarts)** — смежные агрегированные витрины оператора для сверки показателей, где это предусмотрено методикой.

## Не путать с

- **[Отчёты Федерального казначейства (исполнение бюджетов)](/data-sources/federal/roskazna-reports)** — отчётность об **исполнении бюджета** (типовые формы вроде 0507011, 0503117), а не публикации по **размещению средств** на финансовом рынке из остатков ЕКС.
