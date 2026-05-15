---
title: 'Кабардино-Балкарская Республика: закупки Правительства (pravitelstvo.kbr.ru)'
sidebar_label: Закупки Правительства КБР
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-government-procurement
source_url: 'https://pravitelstvo.kbr.ru/goszakupki'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: html
description: >-
  Раздел о закупках для нужд Правительства Кабардино-Балкарской Республики на
  официальном портале Правительства: агрегация новостей, планов и ссылок;
  юридически значимый контрактный след остаётся в ЕИС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /information-systems/federal/zakupki
  - /data-sources/regional/kabardino-balkar-republic-minfin
  - /data-sources/federal/zakupki-xml
  - /data-sources/regional/how-to-find-regional-data
---

# Кабардино-Балкарская Республика: закупки Правительства (pravitelstvo.kbr.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** исполнительный орган (закупки **Правительства КБР**) |
| Тип доступа | Веб-раздел на портале **Правительства** |
| Основные форматы | HTML |
| Оператор | Правительство Кабардино-Балкарской Республики |
| Режим доступа | Открытый |

Коротко: **региональная витрина** сведений о **закупках** органов исполнительной власти республики; для **контрактов, извещений и реестровых номеров** используйте **[ЕИС](/information-systems/federal/zakupki)** и **[XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — зеркало/агрегатор регионального уровня |
| Машиночитаемость (`machine_readability`) | HTML; **XML/CSV** закупок — в **ЕИС** |
| Юридическая значимость (`legal_significance`) | официальный портал органа власти; **юридически значимая** копия извещений — в ЕИС |
| Задержка обновления (`update_lag`) | зависит от ведения раздела на сайте |
| Глубина архива (`archive_depth`) | определяется разделом |
| Лицензия (`license_or_terms`) | условия сайта Правительства КБР |

## Описание

Раздел **«Госзакупки»** на **pravitelstvo.kbr.ru** может содержать **новости**, **планы**, **отчёты** и **гиперссылки** на федеральную витрину. Для **сквозной аналитики** по поставщикам и контрактам стройте пайплайн от **ЕИС**, а региональный раздел используйте как **навигацию** и контекст **политики** закупок республики.

## Оператор

Правительство Кабардино-Балкарской Республики — канонический вход: https://pravitelstvo.kbr.ru/goszakupki

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Раздел о закупках Правительства КБР | https://pravitelstvo.kbr.ru/goszakupki | HTML |

## Объекты данных и показатели

- **Новости** и **анонсы** закупочной деятельности правительства.
- **Планы-графики** и отчётность (если размещены на странице).
- **Идентификаторы** контрактов и извещений — по ссылкам в **ЕИС**.

## Периодичность обновления

Нерегулярно; привязана к **закупочному** календарю и коммуникациям правительства.

## Ограничения и особенности

- Ранее в исследовательских таблицах отмечались **сбои доступа** к корню **pravitelstvo.kbr.ru** из-за защиты; проверяйте доступность **конкретного** URL перед автоматизацией.

## Связанные страницы wiki

- [ЕИС в сфере закупок](/information-systems/federal/zakupki) — юридически значимый реестр и поиск.
- [XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml) — машиночитаемый контур.
- [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin) — лимиты бюджета и связка с закупками за счёт средств бюджета.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — **единый** федеральный реестр; сайт Правительства **не** заменяет его для идентификаторов и полных выгрузок.
