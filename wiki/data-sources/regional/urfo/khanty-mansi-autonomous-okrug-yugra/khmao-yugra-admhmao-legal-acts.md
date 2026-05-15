---
title: "ХМАО — Югра: правовые акты на Едином портале органов власти (admhmao.ru)"
sidebar_label: "НПА Югры (admhmao.ru)"
tags:
  - data-source
  - regional
  - legal
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-admhmao-legal-acts
source_url: "https://admhmao.ru/documents/pravovye-akty"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; тексты актов часто в PDF; машинного API реестра нет
description: >-
  Раздел «Правовые акты» на официальном портале органов власти Ханты-Мансийского автономного округа — Югры: поиск
  и публикация нормативных правовых актов округа, включая бюджетное законодательство.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-duma-dumahmao
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-accounts-chamber-sphmao
  - /data-sources/regional/how-to-find-regional-data
---

# ХМАО — Югра: правовые акты на admhmao.ru

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружные** НПА, опубликованные на официальном портале |
| Тип доступа | Публичный раздел реестра/поиска правовых актов |
| Основные форматы | **HTML**; тексты актов — **PDF** / **DOCX** по ссылкам |
| Оператор | **Администрация Ханты-Мансийского автономного округа — Югры** (единый портал) |
| Режим доступа | Открытый |

Коротко: **канонический вход** к **официальным текстам** актов органов **исполнительной** власти округа; законы, принятые **Думой**, ищите также на [сайте парламента](/data-sources/regional/khmao-yugra-duma-dumahmao).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — зависит от полноты загрузки в реестр и классификации |
| Машиночитаемость (`machine_readability`) | **HTML + PDF**; без открытого единого API для массовой выгрузки |
| Юридическая значимость (`legal_significance`) | **Официальная публикация** для актов, подлежащих размещению на ОГВ |
| Задержка обновления (`update_lag`) | От минут до дней после подписания — по внутренним регламентам |
| Глубина архива (`archive_depth`) | Зависит от политики ведения реестра |
| Лицензия (`license_or_terms`) | Правила официального портала |

## Описание

Раздел **«Правовые акты»** на **admhmao.ru** используется для поиска **постановлений**, **распоряжений** и иных актов Правительства и администрации округа. Для **законов о бюджете** и парламентских актов сверяйте публикации на [сайте Думы](/data-sources/regional/khmao-yugra-duma-dumahmao).

## Оператор

**Единый официальный сайт государственных органов ХМАО — Югры** — https://admhmao.ru/documents/pravovye-akty

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Раздел правовых актов | https://admhmao.ru/documents/pravovye-akty | HTML |

## Объекты данных и показатели

- **НПА** как юридический объект: вид акта, номер, дата, приложения.
- **Бюджетный контур**: закон и поправки к закону о бюджете, постановления о бюджетных ассигнованиях (по факту публикации).
- Для **контроля исполнения** см. материалы [Счётной палаты](/data-sources/regional/khmao-yugra-accounts-chamber-sphmao).

## Периодичность обновления

**По событиям** принятия и изменения актов.

## Ограничения и особенности

- Для юридически значимой фиксации **сверяйте реквизиты** акта (номер, дата) с PDF, опубликованным на портале.
- **Муниципальные** НПА публикуются на сайтах **МО**, не на этом разделе.

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-npa-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://admhmao.ru/documents/pravovye-akty"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Дума ХМАО — Югры](/data-sources/regional/khmao-yugra-duma-dumahmao) — законодательные акты.
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — бюджетные материалы и отчётность.
- [Счётная палата](/data-sources/regional/khmao-yugra-accounts-chamber-sphmao) — внешний контроль.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data).
