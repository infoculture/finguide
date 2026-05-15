---
title: 'Кабардино-Балкарская Республика: Парламент КБР — законы о бюджете и бюджете ТФОМС'
sidebar_label: Законы парламента (бюджет)
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-parliament-laws-budget
source_url: 'https://parlament-kbr.ru/index.php?Page=page_1220'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
source_authority: regional
data_completeness: partial
machine_readability: html
description: >-
  Страница Парламента Кабардино-Балкарской Республики с перечнем принятых
  законов: о республиканском бюджете и о бюджете территориального фонда ОМС.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /data-sources/regional/kabardino-balkar-republic-parliament
  - /data-sources/regional/kabardino-balkar-republic-minfin
  - /data-sources/regional/kabardino-balkar-republic-tfoms
  - /data-sources/regional/kabardino-balkar-republic-budget-for-citizens
  - /data-sources/regional/how-to-find-regional-data
---

# Кабардино-Балкарская Республика: Парламент КБР — законы о бюджете и бюджете ТФОМС

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканские** законы о **бюджете** и **бюджете ТФОМС** |
| Тип доступа | Статический **список/страница** на сайте парламента |
| Основные форматы | HTML и ссылки на файлы актов |
| Оператор | Парламент Кабардино-Балкарской Республики |
| Режим доступа | Открытый |

Коротко: **точка входа** к **текстам** законов о **республиканском бюджете** и **бюджете ТФОМС**; для **организационного** контура ТФОМС см. [сайт фонда](/data-sources/regional/kabardino-balkar-republic-tfoms).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — перечень зависит от актуализации страницы |
| Машиночитаемость (`machine_readability`) | HTML; **машинный** парсинг может ломаться при смене CMS |
| Юридическая значимость (`legal_significance`) | официальная публикация **законодательного** органа |
| Задержка обновления (`update_lag`) | после принятия закона парламентом |
| Глубина архива (`archive_depth`) | см. фактическую выкладку на странице |
| Лицензия (`license_or_terms`) | официальные тексты НПА |

## Описание

URL с параметром `Page=page_1220` ведёт к **подборке** законов по теме **бюджета**. При **переносе** структуры сайта ссылка может измениться — в этом случае используйте поиск по сайту [parlament-kbr.ru](/data-sources/regional/kabardino-balkar-republic-parliament).

## Оператор

Парламент Кабардино-Балкарской Республики — канонический вход: https://parlament-kbr.ru/index.php?Page=page_1220

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Перечень законов (бюджет / ТФОМС) | https://parlament-kbr.ru/index.php?Page=page_1220 | HTML |

## Объекты данных и показатели

- **Законы** о республиканском бюджете по **годам** (номер, дата, текст).
- **Законы** о бюджете **ТФОМС** (связка с [ТФОМС КБР](/data-sources/regional/kabardino-balkar-republic-tfoms)).
- **Приложения** к законам (таблицы **КБК**, лимиты) — в файлах, если выложены.

## Периодичность обновления

По мере принятия **новых** редакций законов о бюджете.

## Ограничения и особенности

- Глубокие **query-string** URL хуже переносятся между редакциями сайта; фиксируйте **дату** скачивания текста для воспроизводимости исследования.

## Связанные страницы wiki

- [Парламент КБР (главный портал)](/data-sources/regional/kabardino-balkar-republic-parliament) — общий контекст.
- [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin) — материалы исполнения и отчётности.
- [ТФОМС КБР](/data-sources/regional/kabardino-balkar-republic-tfoms) — программа ОМС и документы фонда.
- [«Бюджет для граждан»](/data-sources/regional/kabardino-balkar-republic-budget-for-citizens) — популярное изложение.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[Государственные программы (Минэкономразвития)](/data-sources/regional/kabardino-balkar-republic-minekonomrazvitie-state-programs)** — **паспорта** и отчёты программ; законы о бюджете — отдельный **нормативный** слой.
