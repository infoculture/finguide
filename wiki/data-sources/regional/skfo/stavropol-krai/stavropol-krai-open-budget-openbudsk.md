---
title: 'Ставропольский край: открытый бюджет (OpenBudget СК)'
sidebar_label: Открытый бюджет (openbudsk.ru)
tags:
  - data-source
  - regional
  - budget
  - open-data
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-open-budget-openbudsk
source_url: 'https://openbudsk.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Региональный портал «Открытый бюджет» Ставропольского края: визуализации и пояснения по
  бюджету для граждан; машиночитаемые выгрузки зависят от разделов и обновлений оператора.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/stavropol-krai-stavregion-budget-for-citizens
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
---

# Ставропольский край: открытый бюджет (OpenBudget СК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **региональный** портал **«бюджет для граждан»** и смежные материалы |
| Тип доступа | Публичный **веб-портал** |
| Основные форматы | **HTML**; отдельные **файлы** (если публикуются) — по разделам |
| Оператор | Проект **открытого бюджета** края (сайт **openbudsk.ru**) |
| Режим доступа | Открытый |

Коротко: **точка входа** для **понятного** представления **краевого бюджета** и **исполнения**. Для **сводных машиночитаемых рядов** по консолидированному бюджету субъекта ориентируйтесь на **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** и **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной страницы, **HTTP 200**, TLS с проверкой сертификата) |
| Полнота (`data_completeness`) | **частичная** — охват **зависит** от разделов портала и **не заменяет** официальные **НПА** и **федеральные** витрины |
| Машиночитаемость (`machine_readability`) | **смешанный** — прежде всего **HTML**; при наличии **файлов** формат уточняется в карточке раздела |
| Юридическая значимость (`legal_significance`) | **официальный** региональный **информационный** ресурс в контуре **прозрачности бюджета** (не замена **бухгалтерского** и **нормативного** учёта) |
| Задержка обновления (`update_lag`) | **разная** по разделам |
| Глубина архива (`archive_depth`) | зависит от **версирования** на портале |
| Лицензия (`license_or_terms`) | условия **переиспользования** — по сайту оператора |

## Описание

Портал ориентирован на **граждан** и **СМИ**: **графики**, **пояснения**, **проекты**. Для **сопоставления** с **законом о бюджете** и **постановлениями** используйте **[Думу СК](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws)** и **[Официальное опубликование НПА](/data-sources/regional/stavropol-krai-pravo-gov-region26)**.

## Оператор

Открытый бюджет Ставропольского края — https://openbudsk.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница портала | https://openbudsk.ru/ | HTML |

## Объекты данных и показатели

- **Агрегированные** показатели **доходов/расходов/источников дефицита** (по мере размещения на портале).
- **Связка** с **ОКТМО**, **КБК**, **ведомствами** — только если явно приведена в **конкретном** разделе или **файле**.

## Периодичность обновления

Задаётся **оператором** портала; при **смене** бюджетного **цикла** обычно обновляются **итоговые** и **пояснительные** блоки.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-openbudsk-check/1.0" \
  "https://openbudsk.ru/"
```

## Связанные страницы wiki

- [Минфин Ставропольского края (сайт)](/data-sources/regional/stavropol-krai-minfin-mfsk) — **официальные** материалы **финансового** блока правительства.
- [Портал СК: «Бюджет для граждан»](/data-sources/regional/stavropol-krai-stavregion-budget-for-citizens) — **параллельная** витрина на **stavregion.ru**.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — **федеральные** машиночитаемые ряды для сверки.

## Не путать с

- **[Портал СК: «Бюджет для граждан»](/data-sources/regional/stavropol-krai-stavregion-budget-for-citizens)** — **другой** URL и **другая** структура разделов на **официальном** портале **органов власти** края.
