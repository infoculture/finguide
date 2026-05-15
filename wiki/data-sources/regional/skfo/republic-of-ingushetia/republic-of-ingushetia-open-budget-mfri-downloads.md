---
title: 'Республика Ингушетия: «Открытый бюджет» — раздел загрузок на mfri.ru'
sidebar_label: Открытый бюджет (Минфин)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/republic-of-ingushetia-open-budget-mfri-downloads
source_url: >-
  https://mfri.ru/download-category/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82
data_source_kind: files
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-15
data_completeness: partial
machine_readability: mixed
description: >-
  Каталог файлов на сайте Минфина Республики Ингушетия в категории «Открытый бюджет»: материалы
  для граждан, отчёты об исполнении бюджета, проект закона о бюджете — преимущественно PDF и
  сопутствующие страницы каталога WordPress.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-republic-of-ingushetia-sources-overview
  - /data-sources/regional/republic-of-ingushetia-minfin-mfri
  - /data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws
  - /data-sources/regional/republic-of-ingushetia-pravo-publication-region06
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/regional/consolidated-budgets
---

# Республика Ингушетия: «Открытый бюджет» — раздел загрузок на mfri.ru

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республика Ингушетия** — **упрощённые** и **файловые** материалы по республиканскому бюджету |
| Тип доступа | **Каталог** загрузок на сайте **Минфина** |
| Основные форматы | **HTML** (листинг); **PDF** и др. по прямым ссылкам |
| Оператор | **Министерство финансов Республики Ингушетия** |
| Режим доступа | Открытый просмотр и скачивание |

Коротко: **точка входа** к **файлам** «открытого бюджета» и гражданской отчётности. **Официальные** полные тексты законов о бюджете ищите у **[Народного Собрания](/data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws)** и в **[федеральной публикации НПА](/data-sources/regional/republic-of-ingushetia-pravo-publication-region06)**; для **машинных** рядов — **[наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 (**HTTP 200** для URL категории загрузок) |
| Полнота (`data_completeness`) | **частичная** — набор файлов **зависит** от политики публикации Минфина |
| Машиночитаемость (`machine_readability`) | **смешанный** — **PDF**/документы; для **скриптов** устойчивее **федеральные** открытые наборы |
| Юридическая значимость (`legal_significance`) | **официальные** публикации **Минфина** (не путать с **юридически** полным текстом закона, если он только как PDF-вложение) |
| Задержка обновления (`update_lag`) | привязана к **циклу** принятия и **исполнения** бюджета |
| Глубина архива (`archive_depth`) | определяется **архивом** категории на сайте |
| Лицензия (`license_or_terms`) | условия **mfri.ru** |

## Описание

Категория **«Открытый бюджет»** на **mfri.ru** объединяет **гражданские** брошюры, **отчёты** об исполнении и **проектные** материалы по бюджету. Навигация по **остальным** разделам ведомства — с **[корня сайта Минфина](/data-sources/regional/republic-of-ingushetia-minfin-mfri)**.

## Оператор

Министерство финансов Республики Ингушетия — см. таблицу URL ниже.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Категория «Открытый бюджет» | https://mfri.ru/download-category/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82 | HTML / PDF (по ссылкам) |

## Объекты данных и показатели

- **Файлы** с **агрегированными** показателями и пояснениями (год и структура — по содержанию каждого файла).
- **Не** заменяют **первичную** кассовую отчётность; для казначейского контура см. **[УФК](/data-sources/regional/republic-of-ingushetia-treasury-roskazna-ingushetia)**.

## Периодичность обновления

**Ежегодно** и при **корректировках** бюджета — по мере размещения файлов в категории.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 -A "finguide-open-budget-ing-check/1.0" \
  "https://mfri.ru/download-category/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B1%D1%8E%D0%B4%D0%B6%D0%B5%D1%82"
```

## Связанные страницы wiki

- [Минфин Ингушетии](/data-sources/regional/republic-of-ingushetia-minfin-mfri) — корневой сайт ведомства.
- [Народное Собрание — законы](/data-sources/regional/republic-of-ingushetia-parliament-parlamentri-laws) — **законодательные** тексты.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.

## Не путать с

- **[Федеральные наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — **машиночитаемые** ряды, а не **гражданские** PDF с сайта субъекта.
