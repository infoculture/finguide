---
title: "ХМАО — Югра: Департамент финансов (depfin.admhmao.ru)"
sidebar_label: "Депфин Югры (depfin.admhmao.ru)"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-depfin
source_url: "https://depfin.admhmao.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; машиночитаемые наборы — через портал открытых данных и федеральные витрины
description: >-
  Официальный сайт Департамента финансов Ханты-Мансийского автономного округа — Югры: бюджетная политика,
  материалы по планированию и исполнению окружного бюджета, ссылки на смежные разделы и отчётность.
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/khmao-yugra-finance-department
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin-open-budget-citizens
  - /data-sources/regional/khmao-yugra-open-data-portal
  - /data-sources/regional/khmao-yugra-state-programs-portal
  - /data-sources/regional/khmao-yugra-admhmao-legal-acts
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# ХМАО — Югра: Департамент финансов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружной** бюджет и бюджетная политика Ханты-Мансийского автономного округа — Югры |
| Тип доступа | Публичный портал органов исполнительной власти округа |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**, **XLSX**) |
| Оператор | **Департамент финансов Ханты-Мансийского автономного округа — Югры** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **главный окружной вход** к материалам по **бюджету**, **отчётности** и **бюджетной политике**; для машиночитаемых рядов сверяйтесь с [порталом открытых данных Югры](/data-sources/regional/khmao-yugra-open-data-portal) и [наборами «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** относительно полного контура бюджетной системы — акцент на публичных разделах департамента |
| Машиночитаемость (`machine_readability`) | Преимущественно **HTML/PDF**; стабильные **API** на этом сайте не заявлены |
| Юридическая значимость (`legal_significance`) | **Официальный** региональный оператор бюджетной информации округа |
| Задержка обновления (`update_lag`) | Зависит от графика **бюджетного цикла** и раскрытия отчётности |
| Глубина архива (`archive_depth`) | Задаётся политикой публикаций на сайте; разделы могут переноситься при редизайне |
| Лицензия (`license_or_terms`) | Условия использования материалов сайта — у оператора |

## Описание

Сайт **depfin.admhmao.ru** публикует структуру разделов департамента: **деятельность**, **документы**, **контакты** и тематические блоки (включая **открытый бюджет** — см. отдельную [карточку раздела](/data-sources/regional/khmao-yugra-depfin-open-budget-citizens)). Конкретный перечень форм и отчётов меняется по мере обновления нормативки и сайта.

## Оператор

**Департамент финансов Ханты-Мансийского автономного округа — Югры** — https://depfin.admhmao.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень портала Депфина | https://depfin.admhmao.ru/ | HTML |

## Объекты данных и показатели

- **Материалы бюджетного цикла** округа: закон о бюджете, исполнение, отчётность (в доступных на сайте формах).
- **Ключи связки**: финансовый год, коды бюджетной классификации (в документах), наименование программы или ведомства.
- **Не дублирует** полностью [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — для сопоставимых федеральных наборов см. [каталог наборов](/data-sources/federal/budget-gov-ru-datasets).

## Периодичность обновления

Привязана к **этапам бюджетного процесса** (проект, утверждение, отчёты об исполнении) и внутреннему графику публикаций департамента.

## Ограничения и особенности

- Структура меню и **прямые URL** подразделов могут меняться при обновлении сайта; ориентируйтесь на корень домена и навигацию.
- Для **муниципального** уровня внутри округа часто есть **отдельные** сайты МО (пример: [электронный бюджет Ханты-Мансийского района](/data-sources/regional/khmao-yugra-khanty-mansi-district-electronic-budget)).

## Примеры доступа

Проверка доступности главной страницы:

```bash
curl -fsSL -A "finguide-khmao-depfin-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://depfin.admhmao.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview) — все карточки источников субъекта.
- [Открытый бюджет на сайте Депфина](/data-sources/regional/khmao-yugra-depfin-open-budget-citizens) — гражданская подача планов и исполнения.
- [Портал открытых данных Югры](/data-sources/regional/khmao-yugra-open-data-portal) — выгрузки и наборы, в т.ч. финансовой тематики.
- [Портал госпрограмм Югры](/data-sources/regional/khmao-yugra-state-programs-portal) — связка программ и финансирования.
- [Правовые акты на admhmao.ru](/data-sources/regional/khmao-yugra-admhmao-legal-acts) — официальная публикация НПА.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые данные для сверки.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — контур учёта и отчётности бюджетной системы РФ.
