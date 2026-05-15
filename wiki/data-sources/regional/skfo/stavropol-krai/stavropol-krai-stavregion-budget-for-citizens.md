---
title: 'Ставропольский край: портал СК — «Бюджет для граждан»'
sidebar_label: stavregion.ru — бюджет для граждан
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/stavropol-krai-stavregion-budget-for-citizens
source_url: 'https://stavregion.ru/open/realizuemye-proekty/byudzhet-dlya-grazhdan'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: html
description: >-
  Раздел официального портала органов власти Ставропольского края о бюджете для граждан и
  связанных проектах прозрачности; материалы в HTML на stavregion.ru.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-stavropol-krai-sources-overview
  - /data-sources/regional/stavropol-krai-open-budget-openbudsk
  - /data-sources/regional/stavropol-krai-minfin-mfsk
  - /data-sources/regional/stavropol-krai-legislative-assembly-duma-laws
---

# Ставропольский край: портал СК — «Бюджет для граждан»

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Ставропольский край** — **официальный** портал **ОГВ** |
| Тип доступа | Публичный **раздел** **stavregion.ru** |
| Основные форматы | **HTML** |
| Оператор | **Портал** органов государственной власти Ставропольского края |
| Режим доступа | Открытый |

Коротко: **официальная** витрина **«бюджет для граждан»** на **главном** портале **края**. Сопоставьте с **[открытым бюджетом](/data-sources/regional/stavropol-krai-open-budget-openbudsk)** и **[Минфином](/data-sources/regional/stavropol-krai-minfin-mfsk)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**GET** раздела, **HTTP 200**) |
| Полнота (`data_completeness`) | **частичная** — **гражданская** подача **без** полного **машинного** зеркала **бюджетных** регистров |
| Машиночитаемость (`machine_readability`) | **HTML** |
| Юридическая значимость (`legal_significance`) | **официальный** **региональный** портал |
| Задержка обновления (`update_lag`) | **разная** |
| Глубина архива (`archive_depth`) | зависит от **верстки** и **архива** новостей **раздела** |
| Лицензия (`license_or_terms`) | по **правилам** портала |

## Описание

Раздел входит в **блок** «Открытое правительство» / **реализуемые проекты**. **НПА** о **бюджете** — через **[Думу СК](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws)** и **[опубликование](/data-sources/regional/stavropol-krai-pravo-gov-region26)**.

## Оператор

Портал органов государственной власти Ставропольского края — https://stavregion.ru/open/realizuemye-proekty/byudzhet-dlya-grazhdan

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| «Бюджет для граждан» | https://stavregion.ru/open/realizuemye-proekty/byudzhet-dlya-grazhdan | HTML |

## Объекты данных и показатели

- **Пояснительные** материалы, **ссылки** на **документы**, **проекты** **прозрачности**.
- **Ключи** для **аналитики** (КБК, **ОКТМО**) — если **явно** приведены в **тексте** или **вложениях**.

## Периодичность обновления

**По мере** обновления **контента** **администрацией** портала.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-stavregion-budget-check/1.0" \
  "https://stavregion.ru/open/realizuemye-proekty/byudzhet-dlya-grazhdan"
```

## Связанные страницы wiki

- [Открытый бюджет (openbudsk.ru)](/data-sources/regional/stavropol-krai-open-budget-openbudsk) — **альтернативная** **гражданская** витрина.
- [Минфин СК](/data-sources/regional/stavropol-krai-minfin-mfsk) — **ведомственный** **финансовый** вход.
- [Дума СК — законы края](/data-sources/regional/stavropol-krai-legislative-assembly-duma-laws) — **законы** о **бюджете**.

## Не путать с

- **[Открытый бюджет](/data-sources/regional/stavropol-krai-open-budget-openbudsk)** — **отдельный** домен и, как правило, **другая** **подача** **тех же** тем.
