---
title: "Город Москва: контрольно-счётная палата Москвы (ksp.mos.ru)"
sidebar_label: КСП Москвы (ksp.mos.ru)
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/moscow-accounts-chamber-ksp
source_url: "https://www.ksp.mos.ru/"
data_source_kind: portal
jurisdiction: municipal
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: HTML/PDF; машинных «единых выгрузок всех проверок» нет
description: >-
  Официальный сайт контрольно-счётной палаты города Москвы: заключения и материалы внешнего
  муниципального финансового контроля, аналитика эффективности использования бюджетных средств.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/moscow-findep-internal-control
  - /data-sources/regional/moscow-findep
  - /glossary/budget-process
  - /data-sources/regional/how-to-find-regional-data
---

# Город Москва: контрольно-счётная палата Москвы (ksp.mos.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Внешний муниципальный финансовый контроль** города Москвы |
| Тип доступа | Публичный портал **ksp.mos.ru** |
| Основные форматы | **HTML**, **PDF** (заключения, отчёты) |
| Оператор | **Контрольно-счётная палата Москвы** |
| Режим доступа | Открытая публикация материалов контроля |

Коротко: **официальный след аудита и контроля** по расходованию средств бюджета города. Для **первичных бюджетных цифр исполнения** опирайтесь на **[департамент финансов](/data-sources/regional/moscow-findep)**, **[«Открытый бюджет»](/data-sources/regional/moscow-open-budget)** и **[«Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | **Частичная** — публикуется отобранная **результативная** информация проверок |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; табличных API нет |
| Юридическая значимость (`legal_significance`) | **Официальный** орган ВМФК |
| Задержка (`update_lag`) | Зависит от цикла **проверок** и раскрытия |

## Описание

КСП публикует **заключения**, **представления** и **обзоры** по результатам контроля. Это **смежный**, но **не дублирующий** контур относительно **внутреннего финансового аудита** департамента финансов — см. **[mos.ru/findep/documents](/data-sources/regional/moscow-findep-internal-control)**.

## Оператор

**Контрольно-счётная палата Москвы** — https://www.ksp.mos.ru/

## URL и точки доступа

| Раздел | URL | Формат |
| --- | --- | --- |
| Корень сайта | https://www.ksp.mos.ru/ | HTML |

## Объекты данных и показатели

- **Заключения и отчёты** по проверкам (объекты, периоды, выводы — в тексте документов).
- **Тематические обзоры** эффективности использования бюджета.
- **Не является** реестром всех платежей; для платёжного факта — **казначейство** и бюджетная отчётность.

## Периодичность обновления

По мере **завершения проверок** и решений о раскрытии.

## Примеры доступа

```bash
curl -fsSL -A "finguide-ksp-moscow/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.ksp.mos.ru/"
```

## Связанные страницы wiki

- [Внутренний финансовый аудит (Депфин)](/data-sources/regional/moscow-findep-internal-control) — ведомственный контроль исполнительной власти города.
- [Департамент финансов](/data-sources/regional/moscow-findep) — бюджетный оператор.
- [Бюджетный процесс (глоссарий)](/glossary/budget-process) — где в цикле стоит внешний контроль.

## Не путать с

- **[Счётная палата Российской Федерации](/organizations/accounts-chamber)** — **федеральный** внешний контроль; КСП Москвы — **муниципальный** уровень города.
