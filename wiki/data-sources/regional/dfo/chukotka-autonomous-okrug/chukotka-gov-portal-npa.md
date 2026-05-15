---
title: "Чукотский автономный округ: НПА на портале госорганов"
sidebar_label: НПА (портал ЧАО)
tags:
  - data-source
  - regional
  - legal
last_updated: "2026-05-15"
slug: /data-sources/regional/chukotka-gov-portal-npa
source_url: "https://www.xn--80atapud1a.xn--p1ai/documents"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: "2026-05-15"
source_authority: regional
data_completeness: partial
machine_readability: HTML; без единого машинного каталога
description: >-
  Раздел нормативно-правовых актов на официальном портале государственных органов Чукотского АО:
  акты правительства и иных исполнительных органов при их размещении.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-chukotka-autonomous-okrug-sources-overview
  - /data-sources/regional/chukotka-duma
  - /data-sources/regional/chukotka-pravo-gov-regional-acts
  - /data-sources/regional/chukotka-depfin
---

# Чукотский автономный округ: НПА на портале госорганов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Исполнительные** НПА и документы правительства Чукотского АО |
| Тип доступа | Официальный портал госорганов |
| Основные форматы | HTML, PDF (тексты актов при публикации) |
| Оператор | Портал государственных органов Чукотского автономного округа |
| Режим доступа | Открытый |

Коротко: **региональная** точка входа в банк НПА **исполнительной** власти. Для **законодательных** актов Думы — [сайт Думы](/data-sources/regional/chukotka-duma); для **федеральной** агрегации по субъекту — [pravo.gov.ru](/data-sources/regional/chukotka-pravo-gov-regional-acts).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зависит от полноты внутренней базы портала |
| Машиночитаемость (`machine_readability`) | HTML; структура поиска может отличаться от федеральных витрин |
| Юридическая значимость (`legal_significance`) | официальная публикация на портале субъекта (уточняйте реквизиты конкретного акта) |
| Задержка обновления (`update_lag`) | привязана к процедуре подписания и размещения |
| Глубина архива (`archive_depth`) | зависит от политики ведения раздела |
| Лицензия (`license_or_terms`) | см. условия портала |

## Описание

Раздел `/documents` на домене правительства ЧАО используется для навигации по **нормативным** материалам исполнительной ветви. Для бюджетного цикла акты пересекаются с материалами [Депфина](/data-sources/regional/chukotka-depfin) и [Думы](/data-sources/regional/chukotka-duma).

## Оператор

Портал государственных органов Чукотского автономного округа — канонический вход: https://www.xn--80atapud1a.xn--p1ai/documents

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Нормативно-правовые акты | https://www.xn--80atapud1a.xn--p1ai/documents | HTML |

## Объекты данных и показатели

- **Постановления и распоряжения** правительства и иных органов при их публикации.
- Ключи: **номер**, дата, вид акта, приложения (PDF/DOC).

## Периодичность обновления

По мере **принятия** и размещения новых актов.

## Ограничения и особенности

- Дублирование с федеральной выборкой pravo.gov.ru возможно **не полное**; при юридически значимых спорах сверяйте официальный источник публикации конкретного акта.

## Связанные страницы wiki

- [Правовые акты (pravo.gov.ru, ЧАО)](/data-sources/regional/chukotka-pravo-gov-regional-acts) — федеральная витрина с фильтром по региону.
- [Дума Чукотского АО](/data-sources/regional/chukotka-duma) — законодательные акты.
- [Сводная страница субъекта](/data-sources/regional/subject-chukotka-autonomous-okrug-sources-overview) — все источники по Чукотскому АО.

## Не путать с

- **[Правовые акты на pravo.gov.ru](/data-sources/regional/chukotka-pravo-gov-regional-acts)** — федеральный интерфейс с иной логикой обновления и полноты.
