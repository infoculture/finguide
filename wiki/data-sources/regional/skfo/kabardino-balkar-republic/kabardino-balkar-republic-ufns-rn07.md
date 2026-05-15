---
title: 'Кабардино-Балкарская Республика: УФНС России (nalog.gov.ru, код 07)'
sidebar_label: УФНС по Кабардино-Балкарии
tags:
  - data-source
  - regional
  - tax
last_updated: 2026-05-15
slug: /data-sources/regional/kabardino-balkar-republic-ufns-rn07
source_url: 'https://www.nalog.gov.ru/rn07/'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - csv
status: current
last_verified: 2026-05-15
source_authority: federal
data_completeness: partial
machine_readability: >-
  HTML-витрина УФНС; федеральные открытые наборы ФНС — через nalog.gov.ru и ППД
description: >-
  Региональная страница ФНС России для Кабардино-Балкарской Республики (код
  региона 07): новости инспекций, региональные сервисы и ссылки на федеральные
  справочники и открытые данные налоговой системы.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-kabardino-balkar-republic-sources-overview
  - /data-sources/federal/nalog-regstats
  - /information-systems/federal/vpd-nalog
  - /data-sources/regional/kabardino-balkar-republic-minfin
  - /data-sources/regional/kabardino-balkar-republic-rosstat-skfo-26
---

# Кабардино-Балкарская Республика: УФНС России (nalog.gov.ru, код 07)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный** налоговый орган в регионе (код региона **07**) |
| Тип доступа | Веб-витрина `nalog.gov.ru/rn07` + федеральные сервисы по ссылкам |
| Основные форматы | HTML; **CSV** в федеральных наборах открытых данных |
| Оператор | Управление Федеральной налоговой службы по Кабардино-Балкарской Республике |
| Режим доступа | Открытый (для публичных разделов) |

Коротко: **региональная** точка входа в сервисы и новости УФНС; для **машиночитаемых** справочников и статистики ФНС используйте [региональную статистику ФНС](/data-sources/federal/nalog-regstats) и [ППД ФНС](/information-systems/federal/vpd-nalog). Ранее в таблицах встречался несуществующий путь `rn07/apply_fts` (**404**); канонический вход — **`/rn07/`**.

## Качество и верификация

Опорные определения: **[«Измерения качества источника данных»](/reference/data-quality-dimensions)**.

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота (`data_completeness`) | частичная — региональная страница не дублирует все федеральные наборы |
| Машиночитаемость (`machine_readability`) | смешанный: HTML + переход к федеральным API/наборам |
| Юридическая значимость (`legal_significance`) | официальный федеральный орган |
| Задержка обновления (`update_lag`) | зависит от типа сведений (новости vs открытые справочники) |
| Глубина архива (`archive_depth`) | новости и архивы на поддомене УФНС |
| Лицензия (`license_or_terms`) | см. условия `nalog.gov.ru` |

## Описание

Страница `rn07` агрегирует **контакты** инспекций, **новости**, переходы к **электронным сервисам** и **открытым данным** ФНС. Для **сопоставления** с **бюджетом** субъекта используйте [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin); для **официальной статистики** — [ТОФ Росстата по СКФО](/data-sources/regional/kabardino-balkar-republic-rosstat-skfo-26).

## Оператор

Канонический вход: https://www.nalog.gov.ru/rn07/

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Страница УФНС по Кабардино-Балкарской Республике | https://www.nalog.gov.ru/rn07/ | HTML |

## Объекты данных и показатели

- **Административные** сведения (режим работы, подразделения, контакты).
- Ссылки на **федеральные** открытые наборы (адреса инспекций, реестры и т.д. — по актуальному меню).
- Для налоговых **платежей в бюджет** — связка с бюджетной классификацией через федеральные справочники и отчётность.

## Периодичность обновления

Новости — нерегулярно; справочники открытых данных — по графику обновления наборов на `nalog.gov.ru`.

## Ограничения и особенности

- Кабинеты **налогоплательщика** и внутренние сервисы не входят в описание этой карточки.

## Связанные страницы wiki

- [Региональная статистика ФНС](/data-sources/federal/nalog-regstats) — федеральные ряды с региональным срезом.
- [ППД ФНС (карточка ИС)](/information-systems/federal/vpd-nalog) — платформа поставки данных.
- [Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin) — республиканский бюджет.
- [Сводная страница субъекта](/data-sources/regional/subject-kabardino-balkar-republic-sources-overview) — все источники по КБР в wiki.

## Не путать с

- **[Минфин КБР](/data-sources/regional/kabardino-balkar-republic-minfin)** — республиканский бюджет; УФНС не является оператором республиканской бюджетной отчётности.
