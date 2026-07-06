---
title: 'Ставропольский край: контрольно-счётная палата'
sidebar_label: КСП Ставропольского края
tags:
  - data-source
  - regional
  - control
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-ksp-control-chamber
source_url: 'https://kspstav.ru/'
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
  Официальный сайт Контрольно-счётной палаты Ставропольского края: материалы внешнего
  муниципального финансового контроля, отчёты о проверках и аналитические публикации.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-minfin-internal-financial-control
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/how-to-find-regional-data
---

# Ставропольский край: контрольно-счётная палата

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **внешний** **муниципальный** **финансовый** **контроль** |
| Тип доступа | Публичный **сайт** **КСП** |
| Основные форматы | **HTML**; **PDF** **докладов** |
| Оператор | **Контрольно-счётная** **палата** Ставропольского края |
| Режим доступа | Открытый |

Коротко: **официальные** **материалы** **КСП** о **результатах** **контроля** **использования** **бюджетных** **средств**. **ВГК** **исполнительной** **власти** — отдельно: **[Минфин СК, ВГК](/data-sources/regional/stavropol-krai-minfin-internal-financial-control)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** **https://kspstav.ru/**, **HTTP 200**; старые **URL** с **www** **редиректят**) |
| Полнота (`data_completeness`) | **частичная** — **публикуется** **выборочно** **по** **итогам** **контрольных** **мероприятий** |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** **орган** **контроля** |
| Задержка обновления (`update_lag`) | **после** **завершения** **проверок** |
| Глубина архива (`archive_depth`) | **зависит** от **архива** **на** **сайте** |
| Лицензия (`license_or_terms`) | по **сайту** |

## Описание

На сайте **КСП** размещаются **доклады**, **заключения**, **информация** **о** **проверках**. **Для** **первичных** **бюджетных** **цифр** используйте **[Минфин](/data-sources/regional/stavropol-krai-minfin-mfsk)**.

## Оператор

Контрольно-счётная палата Ставропольского края — https://kspstav.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://kspstav.ru/ | HTML |

## Объекты данных и показатели

- **Итоги** **проверок**, **нарушения**, **рекомендации** (**качественные** и **количественные** **в** **рамках** **отчёта**).
- **Не** **первичный** **регистр** **казначейских** **операций**.

## Периодичность обновления

**По** **мере** **публикации** **новых** **материалов**.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-kspstav-check/1.0" \
  "https://kspstav.ru/"
```

## Связанные страницы wiki

- [Внутренний финансовый контроль (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-internal-financial-control) — **ВГК** **органов** **исполнительной** **власти** **края**.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **бюджетные** **первичные** **публикации**.
- [Региональные источники: как искать данные](/data-sources/regional/how-to-find-regional-data) — **методика**.

## Не путать с

- **[ВГК (Минфин СК)](/data-sources/regional/stavropol-krai-minfin-internal-financial-control)** — **внутренний** **государственный** **финансовый** **контроль**; **КСП** — **внешний** **муниципальный** **контур** **по** **закону**.
