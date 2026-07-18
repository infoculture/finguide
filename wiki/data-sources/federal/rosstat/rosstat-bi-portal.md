---
title: 'Росстат: публичный BI-портал (Contour BI, bi.rosstat.gov.ru)'
sidebar_label: 'Росстат: BI-портал (Contour BI)'
tags:
  - data-source
  - federal
  - statistics
  - open_data
last_updated: 2026-05-13T00:00:00.000Z
slug: /data-sources/federal/rosstat-bi-portal
source_url: 'https://bi.rosstat.gov.ru/biportal/contourbi.jsp?solution=Dashboard&allsol=1'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - xlsx
status: current
related_information_system: /information-systems/federal/emiss
description: >-
  веб-витрина Росстата на поддомене bi: интерактивные дашборды официальной
  статистики в продукте Contour BI. Для госфинансов — обзорные панели и
  визуализации в том же контуре данных, что ЕМИСС и открытые данные, без
  стабильного публичного API и без замены бюджетных наборов ГИИС.
content_type: data_source
entity_type: data-source
source_authority: federal
rag_priority: medium
last_verified: 2026-05-13
related_pages:
  - /information-systems/federal/emiss
  - /organizations/rosstat
  - /data-sources/federal/rosstat-opendata
  - /data-sources/federal/rosstat-showdata-finder
  - /data-sources/federal/budget-gov-ru-datasets
jurisdiction_level: federal
data_completeness: unknown
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; **официальная статистика** Росстата — те же предметные области, что у **ЕМИСС** и каталогов на **rosstat.gov.ru**, через отдельный **BI-клиент** в браузере |
| Тип доступа | Смешанный: **JSP-оболочка** `biportal` и решения **Contour BI** в UI; при наличии в конкретном дашборде — выгрузка таблиц через меню продукта (часто **XLSX**) |
| Основные форматы | HTML (оболочка портала и виджеты); экспорт из интерфейса — по возможностям выбранного дашборда (**XLSX** и др.) |
| Оператор | [Росстат](/organizations/rosstat) |
| Режим доступа | Открытый доступ к публичной части; для работы приложения используются **сессионные cookie** |

Коротко: **публичный BI-портал Росстата** на **`bi.rosstat.gov.ru`** — интерактивные **дашборды** официальной статистики в среде **Contour BI**. Для **госфинансов** это **наглядный вход** к агрегатам и тематическим срезам, **не** замена **[машиночитаемых наборов ОД](/data-sources/federal/rosstat-opendata)** и **[казначейских/бюджетных ГИИС](/data-sources/federal/budget-gov-ru-datasets)** без сверки методик.

## Описание

Карточка описывает точку входа **`contourbi.jsp`** с параметрами **`solution=Dashboard`** и **`allsol=1`**: публичная страница запускает клиент **Contour BI** с доступом к **каталогу решений (дашбордов)** Росстата. По смыслу это **ещё одна витрина** того же класса **официальной статистики**, что **[fedstat.ru](/data-sources/federal/rosstat-opendata)**, **[Show Data](/data-sources/federal/rosstat-showdata-finder)** и **[каталог открытых данных](https://rosstat.gov.ru/opendata/)**, но с упором на **готовые панели** и **визуализацию** в браузере.

Сюда **не** входят: **документированный API** для регулярного опроса без UI; **стабильные прямые URL файлов** как в **`/storage/mediabank/`**; операционные данные **исполнения бюджета** по лицевым счетам.

## Оператор

**Федеральная служба государственной статистики (Росстат)** — https://rosstat.gov.ru/

- Карточка ИС: **[ЕМИСС](/information-systems/federal/emiss)** — инфраструктура официальной статистики; BI-портал — **публичная интерактивная витрина** в том же контуре предметных данных, с отдельным клиентом.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Запуск каталога дашбордов (Dashboard, все решения) | https://bi.rosstat.gov.ru/biportal/contourbi.jsp?solution=Dashboard&allsol=1 | HTML + Contour BI в браузере |
| Корень BI-поддомена | https://bi.rosstat.gov.ru/ | HTML; может вести к обзорным страницам или перенаправлениям |

## Объекты данных и показатели

- **Единица представления** — как правило **виджет дашборда** или **таблица в BI-отчёте** с показателями официальной статистики, фильтрами по территории и периоду (конкретный набор полей задаётся внутри выбранного решения).
- **Связка с бюджетом** — через **код субъекта**, **период** и **наименование показателя** по методике Росстата; прямого поля **КБК** в типовых дашбордах обычно **нет**.
- **Пробелы для автоматизации:** зависимость от **сессии**, **JavaScript** и внутренних идентификаторов решений Contour BI; для пайплайнов надёжнее **паспорта наборов ОД** и прямые файловые URL из **[карточки ЕМИСС и ОД](/data-sources/federal/rosstat-opendata)**.

## Периодичность обновления

Совпадает с **версиями продуктов** и **календарём публикаций** соответствующих блоков официальной статистики; для конкретного дашборда смотрите **подписи и метаданные** внутри витрины или **[ЕМИСС](/information-systems/federal/emiss)** (актуальность рядов и публикаций).

## Ограничения и особенности

- **Условия использования** — как у прочих публичных витрин Росстата; при выгрузке сверяйте сопроводительный текст с **[открытыми данными](https://rosstat.gov.ru/opendata/)**, если показатель там дублируется.
- **Автоматизация:** портал ориентирован на **пользователя в браузере**; стабильного публичного **REST/SDMX** под этот вход в карточке не фиксируется.
- **Методика:** показатели **не тождественны** строкам **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** и **[налоговой статистики ФНС](/data-sources/federal/nalog-statistics)** без явной сверки определений.

## Примеры доступа

Проверка доступности точки входа (HTTP-код страницы запуска дашбордов):

```bash
curl -sSk -o /dev/null -w "%{http_code}\n" \
  'https://bi.rosstat.gov.ru/biportal/contourbi.jsp?solution=Dashboard&allsol=1'
```

## Связанные страницы wiki

- **[Официальная статистика Росстата: ЕМИСС и открытые данные](/data-sources/federal/rosstat-opendata)** — каталог **`fedstat.ru`**, **ОД на rosstat.gov.ru** и тематические HTML-разделы; BI-портал — **параллельный** интерактивный вход.
- **[Росстат: Show Data — finder](/data-sources/federal/rosstat-showdata-finder)** — поиск показателей на `showdata.rosstat.gov.ru`; рядом с BI-порталом по роли **человеко-ориентированной** витрины.
- **[ЕМИСС](/information-systems/federal/emiss)** — назначение системы и границы контура официальной статистики.
- **[Наборы ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — план и исполнение по КБК; не смешивать с дашбордами Росстата без проверки методик.

## Не путать с

- **`fedstat.ru` и каталог показателей ЕМИСС** — другой интерфейс, другие URL; для **регулярных выгрузок** и **паспортов наборов** ориентир — **[общая карточка Росстата](/data-sources/federal/rosstat-opendata)**.
