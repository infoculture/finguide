---
title: 'Ставропольский край: внутренний государственный финансовый контроль (Минфин СК)'
sidebar_label: Минфин СК — ВГК
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-minfin-internal-financial-control
source_url: 'https://www.mfsk.ru/working/vnutrenniy-gos.kontrol'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Раздел сайта Министерства финансов Ставропольского края о внутреннем государственном
  финансовом контроле: планы и материалы по контрольным мероприятиям в публикуемой части.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-ksp-control-chamber
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/stavropol-krai-minfin-state-programmes
---

# Ставропольский край: внутренний государственный финансовый контроль (Минфин СК)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **ВГК** **органов** **исполнительной** **власти** |
| Тип доступа | Публичный **раздел** **сайта** **Минфина** |
| Основные форматы | **HTML**; **PDF** **планов** |
| Оператор | **Министерство финансов** Ставропольского края |
| Режим доступа | Открытый |

Коротко: **публичная** **часть** **материалов** **по** **ВГК**: **планы** **мероприятий**, **информационные** **сообщения**. **Внешний** **контроль** **КСП** — **[отдельная карточка](/data-sources/regional/stavropol-krai-ksp-control-chamber)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 403** на **автоматический** **GET** — **антибот**/**WAF**; **проверка** **в** **браузере**) |
| Полнота (`data_completeness`) | **частичная** — **публикуется** **то**, **что** **подлежит** **раскрытию** **по** **нормам** |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** **ведомственный** **источник** |
| Задержка обновления (`update_lag`) | **по** **плану** **контрольных** **мероприятий** |
| Глубина архива (`archive_depth`) | **зависит** от **архива** **раздела** |
| Лицензия (`license_or_terms`) | по **сайту** |

## Описание

Раздел **связан** с **организацией** **ВГК** **в** **крае**. **Госпрограммы** — **[соседний** **раздел](/data-sources/regional/stavropol-krai-minfin-state-programmes)**.

## Оператор

Министерство финансов Ставропольского края — https://www.mfsk.ru/working/vnutrenniy-gos.kontrol

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Внутренний государственный финансовый контроль | https://www.mfsk.ru/working/vnutrenniy-gos.kontrol | HTML / PDF |

## Объекты данных и показатели

- **Планы** **контрольных** **мероприятий**, **отчётность** **в** **публикуемой** **части**.
- **Не** **заменяет** **служебные** **реестры** **контрольных** **процедур**.

## Периодичность обновления

**По** **утверждённым** **планам** и **фактам** **публикаций**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-mfsk-vgk-check/1.0" \
  "https://www.mfsk.ru/working/vnutrenniy-gos.kontrol"
```

## Связанные страницы wiki

- [КСП Ставропольского края](/data-sources/regional/stavropol-krai-ksp-control-chamber) — **внешний** **муниципальный** **финансовый** **контроль**.
- [Минфин СК (главная)](/data-sources/regional/stavropol-krai-minfin-mfsk) — **общий** **вход** **ведомства**.
- [Государственные программы (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-state-programmes) — **связка** **контроля** с **расходными** **обязательствами** **программ**.

## Не путать с

- **[КСП](/data-sources/regional/stavropol-krai-ksp-control-chamber)** — **иной** **орган** и **иная** **правовая** **модель** **контроля**.
