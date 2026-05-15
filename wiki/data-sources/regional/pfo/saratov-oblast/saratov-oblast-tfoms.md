---
title: 'Саратовская область: ТФОМС (sartfoms.ru)'
sidebar_label: ТФОМС Саратовской области
tags:
  - data-source
  - regional
  - budget
  - extrabudgetary
last_updated: 2026-05-14
slug: /data-sources/regional/saratov-oblast-tfoms
source_url: 'https://www.sartfoms.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
  - pdf
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: html
description: >-
  Официальный сайт территориального фонда ОМС: сведения о деятельности фонда,
  в том числе разделы с бюджетом и финансовой отчётностью ТФОМС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saratov-oblast-sources-overview
  - /data-sources/regional/saratov-oblast-minfin
  - /data-sources/regional/saratov-oblast-npa-pravo-region64
  - /data-sources/regional/saratov-oblast-oblduma-srd
  - /glossary/extrabudgetary-funds
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/how-to-find-regional-data
---

# Саратовская область: ТФОМС (sartfoms.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Региональный** **внебюджетный** фонд в сфере **ОМС** |
| Тип доступа | Официальный **организационный** и **информационный** портал |
| Основные форматы | HTML; отчётность — **PDF** и таблицы по ссылкам |
| Оператор | Территориальный фонд обязательного медицинского страхования Саратовской области |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **бюджет** и **отчётность** ТФОМС в **разрезе** субъекта; для **консолидации** с бюджетом области см. **[консолидированные бюджеты](/data-sources/regional/consolidated-budgets)** и **[внебюджетные фонды](/glossary/extrabudgetary-funds)**.

## Качество и верификация

Заполняйте по определениям на странице **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | частичная — зависит от раскрытия по годам в разделах сайта |
| Машиночитаемость (`machine_readability`) | HTML/PDF; **единого** открытого API в карточке не фиксировалось |
| Юридическая значимость (`legal_significance`) | официальный сайт **ТФОМС** |
| Задержка обновления (`update_lag`) | привязана к **отчётности** фонда |
| Глубина архива (`archive_depth`) | определяется разделами **архива** на сайте |
| Лицензия (`license_or_terms`) | правила сайта **sartfoms.ru** |

## Описание

На сайте традиционно выделяют блоки с **бюджетом** фонда и **финансовой** отчётностью (например, разделы вроде **«О фонде» / бюджет** — уточняйте актуальную структуру меню). Для **сопоставления** с **консолидированным** бюджетом субъекта используйте методику **[поиска региональных данных](/data-sources/regional/how-to-find-regional-data)**.

## Оператор

Территориальный фонд обязательного медицинского страхования Саратовской области — канонический вход: https://www.sartfoms.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница | https://www.sartfoms.ru/ | HTML |
| Пример раздела с бюджетной информацией (структура сайта) | https://www.sartfoms.ru/about/ZSO_budjet/zobudjet.htm | HTML |

## Объекты данных и показатели

- **Бюджет** ТФОМС по **годам** (план и отчёт — по размещению на сайте).
- **Отчётность** и **пояснительные** материалы.
- **Не** дублирует **единый** федеральный контур **ОМС** целиком — только **региональную** витрину.

## Периодичность обновления

По мере утверждения **бюджета** фонда и публикации **годовой** отчётности.

## Ограничения и особенности

- Часть ссылок может вести на **устаревшие** пути; при 404 ищите материал через **поиск** по сайту или архив.

## Примеры доступа

```bash
curl -fsSL -o /dev/null -w "%{http_code}\n" --max-time 25 "https://www.sartfoms.ru/"
```

## Связанные страницы wiki

- [Опубликование НПА (region64)](/data-sources/regional/saratov-oblast-npa-pravo-region64) — нормативная база, влияющая на финансирование ОМС.
- [Саратовская областная Дума](/data-sources/regional/saratov-oblast-oblduma-srd) — законы в сфере здравоохранения и страхования — по компетенции.
- [Министерство финансов Саратовской области](/data-sources/regional/saratov-oblast-minfin) — консолидация с **бюджетом** субъекта.
- [Внебюджетные фонды](/glossary/extrabudgetary-funds) — определение и границы учёта.
- [Консолидированные бюджеты субъектов](/data-sources/regional/consolidated-budgets) — методический контекст.
- [Как искать региональные данные](/data-sources/regional/how-to-find-regional-data) — методика.
- [Сводная страница субъекта](/data-sources/regional/subject-saratov-oblast-sources-overview) — все источники по Саратовской области.

## Не путать с

- **Федеральный фонд ОМС** и **единый** регламент **страхования** — это **другой** уровень; здесь только **территориальный** фонд **64** региона.
