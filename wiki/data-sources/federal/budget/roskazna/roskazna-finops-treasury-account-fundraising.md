---
title: >-
  Казначейство: привлечение средств на единый казначейский счёт (отчёты о
  финансовых операциях)
sidebar_label: 'Казначейство: привлечение средств на ЕКС'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-finops-treasury-account-fundraising
source_url: >-
  https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
status: current
related_information_system: /information-systems/federal/roskazna-portal
description: >-
  витрина привлечения ликвидности на ЕКС (на дату описания карточки на сайте — в
  т.ч. операции по договорам репо на организованных торгах в подменю); для
  размещения временно свободных средств ЕКС см. отдельную карточку.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-finops-treasury-account-placements
  - /data-sources/federal/roskazna-finops-operating-day
  - /data-sources/federal/roskazna-reports
  - /glossary/treasury-execution
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный уровень**: публичный раздел о **привлечении средств на единый казначейский счёт** (ЕКС) — состав подтипов по **[меню «Финансовые операции»](https://roskazna.gov.ru/finansovye-operacii)** |
| Тип доступа | HTML-страницы с вложенной навигацией; при появлении выгрузок — **файлы по ссылкам** в таблицах на листовых страницах |
| Основные форматы | HTML; при публикации вложений — типично **DOCX** и **XML** (как в соседних ветках раздела) |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: витрина **привлечения** ликвидности на **ЕКС** (на дату описания карточки на сайте — в т.ч. операции по **договорам репо на организованных торгах** в подменю); для **размещения** временно свободных средств ЕКС см. **[отдельную карточку](/data-sources/federal/roskazna-finops-treasury-account-placements)**.

## Описание

Карточка закрепляет ветку https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet . Листовые URL и перечень инструментов **не фиксируются навечно** в wiki: при обновлении портала сверяйте левое меню и таблицы на странице.

**Не входит**: учёт **государственного долга** как совокупности инструментов Минфина в **[долговых книгах](/data-sources/federal/roskazna-reports)** без методического моста; **данные ЦБ** по рынку REPO как независимый первичный источник по операциям Казначейства.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — см. канонический URL выше.

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Ветка «Привлечение средств на ЕКС» | https://roskazna.gov.ru/finansovye-operacii/privlechenie-sredstv-na-edinyj-kaznachejskij-schet | HTML |
| Родительский раздел | https://roskazna.gov.ru/finansovye-operacii | HTML |

## Объекты данных и показатели

- **Публикации по операциям привлечения** на ЕКС — появляются в виде таблиц и вложений на листовых страницах, если оператор их размещает.
- **Ключи связки** — дата/период, тип сделки по классификации сайта; сквозная связка с **[формами исполнения бюджета](/data-sources/federal/roskazna-reports)** в одной выгрузке **не гарантируется**.

**Пробелы**: страница или подраздел может временно **не содержать** архива файлов; возможны **403** без браузерного `User-Agent`.

## Периодичность обновления

Определяется фактом появления новых строк в таблицах и файлов на листовых страницах; при отсутствии публикаций период не выводится из URL карточки.

## Ограничения и особенности

- **Привлечение** и **размещение** — разные экономические направления; не объединяйте показатели без чтения заголовков форм на сайте.
- Для рыночного контекста (ставки, объёмы торгов) обычно нужны **параллельные ряды** (например **[статистика Банка России](/data-sources/federal/cbr-statistics)**), не подменяющие регламентированные публикации Казначейства.

## Связанные страницы wiki

- **[Казначейство: размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)** — обратная сторона управления остатками на **ЕКС** (размещение временно свободных средств).
- **[Отчёты Федерального казначейства](/data-sources/federal/roskazna-reports)** — **[исполнение бюджетов](/data-sources/federal/roskazna-federal-budget-execution)** и долговые материалы, смежные по оператору.
- **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — ограничения витрины и навигация по порталу.
- **[Статистика Банка России](/data-sources/federal/cbr-statistics)** — рыночный фон для интерпретации операций на финансовом рынке (не замена казначейских файлов).

## Не путать с

- **[Размещение средств ЕКС](/data-sources/federal/roskazna-finops-treasury-account-placements)** — про **инвестирование** временно свободных остатков, а не привлечение средств на счёт.
