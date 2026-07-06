---
title: 'Ставропольский край: Дума — законы и постановления'
sidebar_label: Дума СК (законы края)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-legislative-assembly-duma-laws
source_url: >-
  https://dumask.ru/law/zakony-stavropolskogo-kraya-postanovleniya-dumy/zakony-stavropolskogo-kraya.html
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
  Официальный сайт Думы Ставропольского края: раздел законов края и постановлений Думы, включая
  бюджетное законодательство; публикации в HTML и типичных вложениях (PDF и др.).
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-pravo-gov-region26
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/stavropol-krai-stavregion-budget-for-citizens
---

# Ставропольский край: Дума — законы и постановления

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **законодательный** орган |
| Тип доступа | Публичный **сайт** **Думы** |
| Основные форматы | **HTML**; **PDF** **текстов** **актов** |
| Оператор | **Дума** Ставропольского края |
| Режим доступа | Открытый |

Коротко: **официальный** вход к **законам** края и **постановлениям** **Думы**, включая **бюджетный** **цикл**. Для **федерального** **опубликования** см. **[Официальное опубликование НПА](/data-sources/regional/stavropol-krai-pravo-gov-region26)**.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** раздела на **dumask.ru**, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — **зависит** от **полноты** выкладки **актуальных** редакций |
| Машиночитаемость (`machine_readability`) | **HTML/PDF**; **единого** **API** **нет** |
| Юридическая значимость (`legal_significance`) | **официальный** **законодательный** **источник** **текстов** (с **учётом** **режима** **опубликования**) |
| Задержка обновления (`update_lag`) | **после** **пленарных** заседаний |
| Глубина архива (`archive_depth`) | **законодательный** **архив** на сайте |
| Лицензия (`license_or_terms`) | **государственные** **тексты** — **режим** **использования** по **закону** |

## Описание

Раздел содержит **перечни** и **тексты** **законов** **СК**. **Сопоставление** с **бюджетными** **цифрами** — через **[Минфин](/data-sources/regional/stavropol-krai-minfin-mfsk)** и **федеральные** витрины.

## Оператор

Дума Ставропольского края — https://dumask.ru/law/zakony-stavropolskogo-kraya-postanovleniya-dumy/zakony-stavropolskogo-kraya.html

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Законы Ставропольского края | https://dumask.ru/law/zakony-stavropolskogo-kraya-postanovleniya-dumy/zakony-stavropolskogo-kraya.html | HTML / PDF |

## Объекты данных и показатели

- **Законы** о **бюджете**, **бюджетные** **корректировки**, **постановления** **Думы**.
- **Метаданные** **даты** принятия и **номера** — в **карточках** **актов**.

## Периодичность обновления

**После** **законодательных** событий и **опубликования** на сайте.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-dumask-laws-check/1.0" \
  "https://dumask.ru/law/zakony-stavropolskogo-kraya-postanovleniya-dumy/zakony-stavropolskogo-kraya.html"
```

## Связанные страницы wiki

- [Официальное опубликование НПА (регион 26)](/data-sources/regional/stavropol-krai-pravo-gov-region26) — **федеральная** витрина **опубликования** **региональных** **НПА**.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **материалы** **исполнительной** власти по **бюджету**.
- [Портал СК — бюджет для граждан](/data-sources/regional/stavropol-krai-stavregion-budget-for-citizens) — **гражданская** **подача** **бюджетной** темы.

## Не путать с

- **[Официальное опубликование НПА](/data-sources/regional/stavropol-krai-pravo-gov-region26)** — **иной** **канал** **официального** **распространения** **текстов**; при **расхождениях** ориентируйтесь на **процессуальные** **требования** **к моменту** вступления в силу.
