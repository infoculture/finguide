---
title: "ХМАО — Югра: ТФОМС (ofoms.ru)"
sidebar_label: "ТФОМС Югры (ofoms.ru)"
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/khmao-yugra-tfoms-ofoms
source_url: "https://www.ofoms.ru/"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML; отчёты и реестры часто через формы и PDF
description: >-
  Официальный сайт Территориального фонда обязательного медицинского страхования Ханты-Мансийского автономного округа — Югры:
  финансово-хозяйственная деятельность фонда, отчётность и сведения для застрахованных лиц.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/khmao-yugra-depfin
  - /data-sources/regional/khmao-yugra-open-data-portal
  - /data-sources/regional/khmao-yugra-state-programs-portal
  - /data-sources/federal/budget-gov-ru-datasets
---

# ХМАО — Югра: ТФОМС

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Окружной** внебюджетный фонд ОМС |
| Тип доступа | Публичный портал фонда |
| Основные форматы | **HTML**; **PDF** отчётов по ссылкам |
| Оператор | **ТФОМС Ханты-Мансийского автономного округа — Югры** |
| Режим доступа | Открытый |

Коротко: **официальный вход** к **публичной отчётности** ТФОМС и справочным сервисам; **окружной бюджет** — на [Депфине](/data-sources/regional/khmao-yugra-depfin), **открытые наборы** — на [data.admhmao.ru](/data-sources/regional/khmao-yugra-open-data-portal).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — фокус на раскрытии для граждан и контрольных органов |
| Машиночитаемость (`machine_readability`) | **HTML**; машинных массовых выгрузок без отдельной витрины не заявлено |
| Юридическая значимость (`legal_significance`) | **Официальный** сайт ТФОМС субъекта |
| Задержка обновления (`update_lag`) | Зависит от отчётности фонда и регуляторных сроков |
| Глубина архива (`archive_depth`) | По политике публикаций на сайте |
| Лицензия (`license_or_terms`) | Условия сайта ТФОМС |

## Описание

Сайт **ofoms.ru** (заголовок страницы — **«ТФОМС ХМАО — Югры»**) публикует сведения о **полисах**, **страховых представителях**, **медицинских организациях** и **отчётности** фонда. Для анализа **трансфертов на ОМС** в окружном бюджете используйте материалы [Депфина](/data-sources/regional/khmao-yugra-depfin) и [госпрограмм](/data-sources/regional/khmao-yugra-state-programs-portal).

## Оператор

**Территориальный фонд обязательного медицинского страхования Ханты-Мансийского автономного округа — Югры** — https://www.ofoms.ru/

## URL и точки доступа

| Назначение | URL | Формат |
| --- | --- | --- |
| Корень сайта ТФОМС | https://www.ofoms.ru/ | HTML |

## Объекты данных и показатели

- **Отчёты** о финансово-хозяйственной деятельности (в публикуемых формах).
- **Реестры** и справочники (часть может требовать поиска по разделам сайта).
- **Связка с бюджетом** — через показатели **субвенций/трансфертов** в бюджетной отчётности округа.

## Периодичность обновления

**Регулярная** для новостей и части отчётности; **по событиям** для разовых публикаций.

## Ограничения и особенности

- Домен **ofoms.ru** используется **официально** ТФОМС Югры (проверено по метаданным сайта, 2026-05-15).

## Примеры доступа

```bash
curl -fsSL -A "finguide-khmao-tfoms-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.ofoms.ru/"
```

## Связанные страницы wiki

- [Сводная по Югре](/data-sources/regional/subject-khmao-yugra-sources-overview).
- [Депфин Югры](/data-sources/regional/khmao-yugra-depfin) — окружной бюджет и отчётность.
- [Открытые данные Югры](/data-sources/regional/khmao-yugra-open-data-portal) — возможные наборы с окружной тематикой.
- [Портал госпрограмм](/data-sources/regional/khmao-yugra-state-programs-portal) — программы с медицинским компонентом.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые ряды для сверки.
