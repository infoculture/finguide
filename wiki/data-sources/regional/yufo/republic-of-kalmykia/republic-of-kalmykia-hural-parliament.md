---
title: 'Республика Калмыкия: Народный Хурал (huralrk.ru)'
sidebar_label: Народный Хурал РК
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-kalmykia-hural-parliament
source_url: 'https://www.huralrk.ru/'
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
machine_readability: HTML и PDF законов и материалов; открытый API не заявлен
description: >-
  Официальный сайт Народного Хурала (парламента) Республики Калмыкия: законы о бюджете,
  законопроекты, постановления и правовая информация законодательного органа субъекта РФ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-kalmykia-sources-overview
  - /data-sources/regional/republic-of-kalmykia-minfin
  - /data-sources/regional/republic-of-kalmykia-government-kalmregion
  - /data-sources/regional/republic-of-kalmykia-budget-for-citizens-minfinrk
  - /glossary/budget-process
---

# Республика Калмыкия: Народный Хурал

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Калмыкия** — **законодательный** орган субъекта |
| Тип доступа | Публичный **официальный** сайт **парламента** |
| Основные форматы | **HTML**; **PDF** документов |
| Оператор | **Народный Хурал** Республики Калмыкия |
| Режим доступа | Открытый |

Коротко: **официальный** вход к **законам о бюджете**, **законопроектам** и **постановлениям** парламента республики. Для **исполнительных** материалов см. [Правительство РК](/data-sources/regional/republic-of-kalmykia-government-kalmregion) и [Минфин](/data-sources/regional/republic-of-kalmykia-minfin).

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** главной, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — зависит от **полноты** электронного **архива** НПА |
| Машиночитаемость (`machine_readability`) | **HTML/PDF** |
| Юридическая значимость (`legal_significance`) | **официальный** сайт **законодательного** органа |
| Задержка обновления (`update_lag`) | **низкая** для **зарегистрированных** текстов после **опубликования** |
| Глубина архива (`archive_depth`) | определяется **наличием** **старых** созывов и разделов на сайте |
| Лицензия (`license_or_terms`) | **официальные** тексты НПА; условия **копирования** — по законодательству |

## Описание

Сайт парламента — ключевой источник **нормативной** фиксации **параметров** **республиканского бюджета**: **закон** о бюджете, **акты** о внесении **изменений**, сопутствующие **решения**. **Пояснительная** работа для граждан на стороне **исполнительной власти** — в разделе [«Бюджет для граждан»](/data-sources/regional/republic-of-kalmykia-budget-for-citizens-minfinrk).

## Оператор

Народный Хурал Республики Калмыкия — https://www.huralrk.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://www.huralrk.ru/ | HTML |

## Объекты данных и показатели

- **Тексты** **законов** и **иных** НПА **парламента** (ключевой объект для **юридически** значимых **цифр** бюджета).
- **Проекты** законов и **ход** рассмотрения (**для** мониторинга **стадий** бюджетного цикла).
- **Связка** с **исполнением** — после **принятия** закона через [Минфин РК](/data-sources/regional/republic-of-kalmykia-minfin) и [федеральные витрины](/data-sources/federal/budget-gov-ru-datasets).

## Периодичность обновления

**Пиковая** активность — **осень**/**декабрь** вокруг **утверждения** бюджета и **ежегодные** корректировки.

## Ограничения и особенности

- **Структура** URL **документов** может **меняться** при **обновлении** CMS — закладывайте **поиск** по сайту **парламента**, а не только **жёсткие** ссылки.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-hural-rk-check/1.0" \
  "https://www.huralrk.ru/"
```

## Связанные страницы wiki

- [Правительство Республики Калмыкия](/data-sources/regional/republic-of-kalmykia-government-kalmregion) — **исполнительные** акты и **общий** портал.
- [Министерство финансов Республики Калмыкия](/data-sources/regional/republic-of-kalmykia-minfin) — **ведомственные** материалы после **принятия** бюджета.
- [Бюджетный процесс](/glossary/budget-process) — где стоит этап **законодательного** утверждения.

## Не путать с

- **[Портал Правительства](/data-sources/regional/republic-of-kalmykia-government-kalmregion)** — **постановления** и распоряжения **кабинета**; **Хурал** — **законы** и акты **парламента**.
