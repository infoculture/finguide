---
title: "Информационный сервис «Открытый бюджет Свердловской области»"
sidebar_label: "Открытый бюджет Свердловской области"
tags: [information-system, regional, budget]
last_updated: 2026-07-16
description: "Интерактивный сервис smart.mfural.ru с бюджетными показателями Свердловской области."
content_type: reference
entity_type: information-system
source_url: "http://smart.mfural.ru/ebudget"
system_kind: public_portal
access: open
primary_topics: ["budget", "execution"]
operator_type: regional_body
relationships:
  - type: operated_by
    target: /organizations/sverdlovsk-oblast-minfin
---

# Информационный сервис «Открытый бюджет Свердловской области»

| Признак | Значение |
| :--- | :--- |
| Краткое имя | `smart.mfural.ru/ebudget` |
| Оператор | [Минфин Свердловской области](/organizations/sverdlovsk-oblast-minfin) |
| Официальный URL | http://smart.mfural.ru/ebudget |
| Режим доступа | Открытый веб-интерфейс |

## Назначение и границы

Сервис представляет региональный бюджет и исполнение в интерактивной форме. Официальные документы бюджетного процесса остаются на сайте финансового органа.

## Пользователи и типовые задачи

- обзор доходов и расходов;
- сравнение периодов;
- навигация по бюджетным показателям.

## Подсистемы и разделы

- бюджетные показатели;
- исполнение;
- визуализации для граждан.

## Точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Веб-сервис | http://smart.mfural.ru/ebudget | HTML/JavaScript |

## Данные: объекты и связь с источниками

- [Открытый бюджет области](/data-sources/regional/sverdlovsk-oblast-open-budget) — карточка источника и ограничения.
- [Минфин области](/data-sources/regional/sverdlovsk-oblast-minfin) — документы и долг.
- [Сводная страница области](/data-sources/regional/subject-sverdlovsk-oblast-sources-overview) — программы, закупки, контроль и муниципальный уровень.

## Связанные информационные системы

- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — федеральный контур, не заменяющий региональную витрину.

## Ограничения и актуальность

Сервис при проверке отвечал по HTTP; HTTPS-соединение сбрасывалось. Стабильность программного доступа не предполагается из одного факта наличия интерактивного интерфейса; сверяйте цифры с документами.
