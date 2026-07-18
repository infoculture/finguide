---
title: "Город Москва: департамент финансов (mos.ru/findep)"
sidebar_label: Депфин Москвы (findep)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-findep
source_url: "https://www.mos.ru/findep"
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF; первичные машинные ряды — в ГИИС «Электронный бюджет» и data.mos.ru
description: >-
  Официальный раздел департамента финансов города Москвы на портале mos.ru: бюджетная политика,
  нормативные материалы, долг и смежные разделы исполнительной власти города.
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/moscow-finance-department
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-open-budget
  - /data-sources/regional/moscow-open-data-portal
  - /data-sources/regional/moscow-findep-internal-control
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Город Москва: департамент финансов (mos.ru/findep)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Главный финансовый орган** города Москвы |
| Тип доступа | Раздел на **mos.ru** |
| Основные форматы | **HTML**, **PDF** |
| Оператор | **Департамент финансов города Москвы** |
| Режим доступа | Открытый доступ к публичным материалам |

Коротко: **исполнительный** вход к **нормативке**, **методике** и **новостям** финансового блока. Для **сводных наглядных** показателей — **[«Открытый бюджет»](/data-sources/regional/moscow-open-budget)**; для **машинных наборов** — **[data.mos.ru](/data-sources/regional/moscow-open-data-portal)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** для «всех цифр» — витрина **органа**, не все таблицы дублируются в HTML |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** + ссылки на внешние системы |
| Юридическая значимость (`legal_significance`) | **Официальный** департамент правительства Москвы |

## Описание

Раздел **findep** связывает **бюджетную политику**, **управление долгом** и **межбюджетные** темы с публичными материалами. **Внутренний аудит** вынесен в отдельную карточку: **[ведомственный контроль](/data-sources/regional/moscow-findep-internal-control)**.

## Оператор

**Департамент финансов города Москвы** — https://www.mos.ru/findep

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Департамент | https://www.mos.ru/findep | HTML |
| Документы (в т.ч. внутренний контроль) | https://www.mos.ru/findep/documents | HTML |

## Объекты данных и показатели

- **Нормативные и методические** документы департамента.
- **Пресс-релизы** и **разъяснения** по бюджетной политике.
- **Не заменяет** контрактный реестр и налоговую отчётность — см. **[закупки](/data-sources/regional/moscow-procurement-tender-mos)** и **[УФНС](/data-sources/regional/moscow-ufns-rn77)**.

## Периодичность обновления

По мере **обновления** разделов департаментом.

## Примеры доступа

```bash
curl -fsSL -A "finguide-findep-moscow/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.mos.ru/findep"
```

## Связанные страницы wiki

- [Открытый бюджет](/data-sources/regional/moscow-open-budget) — гражданская витрина показателей.
- [Открытые данные data.mos.ru](/data-sources/regional/moscow-open-data-portal) — машиночитаемые наборы.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — план-факт по классификациям.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — роль системы в контуре бюджетных данных.

## Не путать с

- **[Минфин России](/organizations/minfin)** — **федеральный** орган; депфин Москвы — **городской** уровень.
