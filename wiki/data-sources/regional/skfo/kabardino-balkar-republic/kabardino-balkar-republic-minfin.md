---
title: 'Кабардино-Балкарская Республика: Министерство финансов (minfin.kbr.ru)'
sidebar_label: Минфин Кабардино-Балкарии
tags:
  - data-source
  - regional
  - budget
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-minfin
source_url: 'https://minfin.kbr.ru/'
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
  Официальный сайт Министерства финансов Кабардино-Балкарской Республики:
  материалы по республиканскому бюджету, исполнению, методические документы и
  разделы для граждан; машиночитаемые ряды — через федеральные витрины при
  необходимости.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /data-sources/regional/kabardino-balkar-republic-budget-for-citizens
  - /data-sources/regional/kabardino-balkar-republic-parliament
  - /data-sources/regional/kabardino-balkar-republic-treasury-roskazna
  - /data-sources/federal/budget-gov-ru-datasets
  - /information-systems/federal/giis-eb
  - /data-sources/regional/how-to-find-regional-data
---

# Кабардино-Балкарская Республика: Министерство финансов (minfin.kbr.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Республиканский** финансовый орган субъекта РФ |
| Тип доступа | Официальный **веб-портал** Минфина КБР |
| Основные форматы | HTML (документы и вложения — по разделам) |
| Оператор | Министерство финансов Кабардино-Балкарской Республики |
| Режим доступа | Открытый просмотр публичных разделов |

Коротко: **главный региональный вход** в материалы по **республиканскому бюджету** и смежной **нормативке**; для **«Бюджета для граждан»** и отдельных разделов см. также [специализированную карточку](/data-sources/regional/kabardino-balkar-republic-budget-for-citizens).

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — портал не заменяет федеральные открытые наборы и формы отчётности |
| Машиночитаемость (`machine_readability`) | преимущественно HTML; стабильные **API** в карточке не зафиксированы |
| Юридическая значимость (`legal_significance`) | официальный орган субъекта |
| Задержка обновления (`update_lag`) | зависит от календаря бюджетного процесса и публикаций ведомства |
| Глубина архива (`archive_depth`) | определяется структурой сайта и хранением вложений |
| Лицензия (`license_or_terms`) | условия пользования сайта органа власти (сверяйте на витрине) |

## Описание

Сайт **minfin.kbr.ru** концентрирует **проекты и законы** о республиканском бюджете, **отчётность** об исполнении (в форматах, которые публикует ведомство), **методические** материалы и ссылки на смежные разделы. Для **казначейского** сопровождения используйте [УФК Росказны](/data-sources/regional/kabardino-balkar-republic-treasury-roskazna); для **федеральных** машиночитаемых наборов — [каталог budget.gov.ru](/data-sources/federal/budget-gov-ru-datasets) и [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb).

## Оператор

Министерство финансов Кабардино-Балкарской Республики — канонический вход: https://minfin.kbr.ru/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная страница Минфина КБР | https://minfin.kbr.ru/ | HTML |

## Объекты данных и показатели

- **Законодательные** акты и **проекты** по республиканскому бюджету (в связке с [Парламентом](/data-sources/regional/kabardino-balkar-republic-parliament)).
- **Отчёты** об исполнении бюджета (типично PDF/DOC/HTML по годам).
- **Методические** указания и разъяснения для учреждений бюджетной сферы.
- **Не** единый источник **контрактного** следа закупок — см. [закупки Правительства](/data-sources/regional/kabardino-balkar-republic-government-procurement) и **ЕИС**.

## Периодичность обновления

Пик обновлений — **стадии** бюджетного цикла (проект, поправки, исполнение); вне цикла публикации **нерегулярны**.

## Ограничения и особенности

- При **массовых** автоматических запросах возможны ограничения со стороны веб-защиты; соблюдайте разумные интервалы и политику сайта.

## Примеры доступа

```bash
curl -fsS -o /dev/null -w "%{http_code}\n" --max-time 25 -A "Mozilla/5.0" "https://minfin.kbr.ru/"
```

## Связанные страницы wiki

- [«Бюджет для граждан» (Минфин КБР)](/data-sources/regional/kabardino-balkar-republic-budget-for-citizens) — целевой раздел для гражданского контура.
- [Парламент КБР](/data-sources/regional/kabardino-balkar-republic-parliament) — принятые законы и проекты.
- [УФК по Кабардино-Балкарской Республике](/data-sources/regional/kabardino-balkar-republic-treasury-roskazna) — казначейское сопровождение.
- [Наборы «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — федеральные открытые данные для сверки.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[ТФОМС КБР](/data-sources/regional/kabardino-balkar-republic-tfoms)** — отдельный контур **ОМС** и территориальной программы; пересекается с бюджетом ТФОМС через **законы**, а не через сайт Минфина как единственную витрину.
