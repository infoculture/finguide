---
title: >-
  Казначейство: иллюстрированное издание об исполнении федерального бюджета и
  бюджетов бюджетной системы РФ
sidebar_label: 'Казначейство: II-издание исполнения'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-illustrated-budget-publication
source_url: >-
  https://roskazna.gov.ru/ispolnenie-byudzhetov/illyustrirovannoe-informacionnoe-izdanie-ispolnenie-federalnogo-byudzheta-i-byudzhetov-byudzhetnoy-sistemy-rf/
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - pdf
status: current
related_information_system: /information-systems/federal/roskazna-portal
description: >-
  официальное иллюстрированное издание Казначейства — точка входа для обзорного
  понимания исполнения бюджетной системы; для табличных форм по КБК и машинных
  выгрузок используйте соседние подразделы того же раздела и ГИИС «Электронный
  бюджет».
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-reports
  - /data-sources/federal/roskazna-federal-budget-execution
  - /data-sources/federal/budget-gov-ru-datasets
  - /budget-system/structure
  - /intro/russian-budget-overview
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный портал: **иллюстрированное информационное издание** по исполнению **федерального бюджета** и **бюджетов бюджетной системы РФ** (обзорно-аналитический материал оператора) |
| Тип доступа | Веб-страница раздела «Исполнение бюджетов» с вложениями и ссылками на выпуски |
| Основные форматы | HTML, PDF (по конкретным публикациям на странице) |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый (публичные материалы без регистрации) |

Коротко: **официальное иллюстрированное издание** Казначейства — точка входа для **обзорного** понимания исполнения бюджетной системы; для **табличных форм по КБК** и машинных выгрузок используйте **[соседние подразделы того же раздела](/data-sources/federal/roskazna-reports)** и **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Описание

Карточка описывает **отдельную тематическую страницу** портала внутри раздела **[«Исполнение бюджетов»](https://roskazna.gov.ru/ispolnenie-byudzhetov/)**: публикации в формате **информационного издания** (текст, графика, PDF и др. по мере размещения оператором). Это **не** замена регламентированным **формам исполнения** и **не** единый CSV-набор: состав выпусков и вложений меняется по годам и редакциям страницы.

Сюда **не** входят: внутренние кабинеты участников БП, **[открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** как учёт учреждений, **[ЕИС](/data-sources/federal/procurement)** по закупкам.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — канонический URL витрины: https://roskazna.gov.ru/ispolnenie-byudzhetov/illyustrirovannoe-informacionnoe-izdanie-ispolnenie-federalnogo-byudzheta-i-byudzhetov-byudzhetnoy-sistemy-rf/

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — официальная витрина оператора; навигация к изданию дублируется в общем меню раздела «Исполнение бюджетов».

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Страница иллюстрированного издания | https://roskazna.gov.ru/ispolnenie-byudzhetov/illyustrirovannoe-informacionnoe-izdanie-ispolnenie-federalnogo-byudzheta-i-byudzhetov-byudzhetnoy-sistemy-rf/ | HTML; вложения по ссылкам (часто **PDF**) |
| Родительский раздел «Исполнение бюджетов» | https://roskazna.gov.ru/ispolnenie-byudzhetov/ | HTML (оглавление смежных видов отчётности) |

Прямые URL вложений **могут меняться** при обновлении сайта; для автоматизации фиксируйте **дату скачивания** и ссылку из карточки документа на странице.

## Объекты данных и показатели

- **Выпуск / издание** — связка «год / тема / файл» в логике публикаций на странице; точный перечень полей задаётся **конкретным PDF** или HTML-блоком.
- **Смысловая связка** с макропоказателями исполнения — для сопоставления с **[формами федерального бюджета](/data-sources/federal/roskazna-federal-budget-execution)** и **[консолидированными срезами](/data-sources/federal/roskazna-consolidated-rf-and-ebf-execution)** по **согласованной методике**, а не построчно «по умолчанию».

**Пробелы**: издание **не гарантирует** машиночитаемую таблицу по **[КБК](/glossary/kbk)**; для этого — **[отчёты Казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** и **[наборы ГИИС](/data-sources/federal/budget-gov-ru-datasets)**.

## Периодичность обновления

Зависит от **выхода очередных выпусков** издания и обновления страницы оператором (не единый календарь как у ежемесячных форм). Актуальность вложений проверяйте по датам на странице; общие ограничения витрины — в разделе **«Ограничения и актуальность»** карточки **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## Ограничения и особенности

- Автоматические HTTP-клиенты к сайту иногда получают **403** без типичного браузерного `User-Agent`; при скриптах имитируйте заголовки браузера и соблюдайте нагрузку на портал.
- Иллюстративный текст **не заменяет** юридически значимую расшифровку показателей в **[формах отчётности](/data-sources/federal/roskazna-federal-budget-execution)**.

## Связанные страницы wiki

- **[Отчёты Федерального казначейства (обзор раздела)](/data-sources/federal/roskazna-reports)** — навигация по всему контуру «Исполнение бюджетов» и смежным форматам (XLS/XLSX, opendata).
- **[Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — регламентированные материалы по исполнению **федерального бюджета** в том же разделе сайта.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемые срезы для сверки с обзорными цифрами издания там, где методика соизмерима.
- **[Минфин: краткая информация об исполнении федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** — макро-**XLSX** Минфина как дополнительная точка сравнения по федеральному контуру.

## Не путать с

- **[Казначейство: федеральный бюджет (подраздел портала)](/data-sources/federal/roskazna-federal-budget-execution)** — **формы и файлы** исполнения, а не «журнальный» обзор издания.
