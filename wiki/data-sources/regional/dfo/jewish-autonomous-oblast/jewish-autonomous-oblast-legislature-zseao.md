---
title: 'Еврейская автономная область: Законодательное Собрание (zseao.ru)'
sidebar_label: 'Законодательное Собрание ЕАО'
tags:
  - data-source
  - regional
  - budget
  - legal
last_updated: 2026-05-14
slug: /data-sources/regional/jewish-autonomous-oblast-legislature-zseao
source_url: 'https://zseao.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html_portal
description: >-
  Официальный сайт Законодательного Собрания ЕАО: законы об областном бюджете,
  проекты, комитеты (в т.ч. по бюджету) в HTML.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/jewish-autonomous-oblast-legal-acts-pravo-gov
  - /data-sources/regional/jewish-autonomous-oblast-minfin
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/subject-jewish-autonomous-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
---

# Еврейская автономная область: Законодательное Собрание (zseao.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Региональный **законодательный** орган ЕАО |
| Тип доступа | Публичный сайт парламента |
| Основные форматы | HTML; вложения (PDF и др.) по ссылкам |
| Оператор | Законодательное Собрание Еврейской автономной области |
| Режим доступа | Открытое чтение |

Коротко: **официальный** вход к **законам об областном бюджете**, проектам и материалам комитетов; опубликованные тексты НПА сверяйте с [ОИПП](/data-sources/regional/jewish-autonomous-oblast-legal-acts-pravo-gov).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | **Частичная**: набор документов зависит от размещения аппаратом ЗС |
| Машиночитаемость (`machine_readability`) | **HTML**; без отдельного публичного API в карточке |
| Юридическая значимость (`legal_significance`) | **Официальный** сайт законодательного органа |
| Задержка обновления (`update_lag`) | Сессионный цикл и график заседаний |
| Глубина архива (`archive_depth`) | Зависит от витрины разделов |
| Лицензия (`license_or_terms`) | Условия сайта ЗС |

## Описание

На сайте размещаются сведения о **депутатах**, **комитетах** (в обзорах отмечался комитет по бюджету и экономической политике), **проектах** и **принятых** законах. Для машинной обработки бюджетных таблиц обычно требуются дополнительные выгрузки из [Электронного бюджета](/data-sources/federal/budget-gov-ru-datasets).

## Оператор

**Законодательное Собрание Еврейской автономной области** — канонический вход: https://zseao.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница ЗС | https://zseao.ru/ | HTML |

## Объекты данных и показатели

- **Законы об областном бюджете**, поправки, сопутствующие пояснительные записки (если размещены).
- **Ключи связки**: номер закона, финансовый год, статьи расходов (по тексту закона).

## Периодичность обновления

**По сессии** и мере подготовки проектов; точный календарь на карточке не фиксировался.

## Примеры доступа

```bash
curl -fsSL -A "finguide-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zseao.ru/"
```

## Связанные страницы wiki

- [НПА на ОИПП (region79)](/data-sources/regional/jewish-autonomous-oblast-legal-acts-pravo-gov) — официальная публикация принятых актов.
- [Департамент финансов](/data-sources/regional/jewish-autonomous-oblast-minfin) — материалы исполнительной власти по бюджету.
- [Сводная страница субъекта](/data-sources/regional/subject-jewish-autonomous-oblast-sources-overview) — все источники по ЕАО.

## Не путать с

- **[ОИПП](/data-sources/regional/jewish-autonomous-oblast-legal-acts-pravo-gov)** — федеральный банк **опубликованных** текстов; сайт ЗС может опережать или дополнять его **проектной** документацией.
