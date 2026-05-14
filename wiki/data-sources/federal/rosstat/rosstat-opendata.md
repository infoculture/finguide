---
title: 'Официальная статистика Росстата: ЕМИСС и открытые данные'
sidebar_label: Росстат и ЕМИСС (ОД)
tags:
  - data-source
  - federal
  - statistics
  - open_data
last_updated: 2026-05-13T00:00:00.000Z
slug: /data-sources/federal/rosstat-opendata
source_url: 'https://fedstat.ru/'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - csv
  - xlsx
  - xls
  - xml
  - html
  - sdmx
status: current
related_information_system: /information-systems/federal/emiss
description: >-
  машиночитаемые выгрузки и таблицы официальной статистики с порталов ЕМИСС и
  Росстата — региональные и отраслевые ряды, социально-экономические агрегаты,
  финансовая статистика в терминах Росстата. Для госфинансов это контекст и
  сверка с бюджетом и налогами, а не касса по лицевым счетам.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/emiss
  - /organizations/rosstat
  - /data-sources/federal/rosstat-showdata-finder
  - /data-sources/federal/rosstat-finances-of-russia
  - /data-sources/federal/rosstat-national-accounts-of-russia
  - /data-sources/federal/rosstat-russia-in-figures
  - /data-sources/federal/rosstat-bi-portal
  - /data-sources/federal/rosstat-procurement-statistics-archive
  - /data-sources/federal/rosstat-gov-programs-implementation-statistics
  - /data-sources/federal/rosstat-gosfin-consolidated-budget-rf
  - /data-sources/federal/rosstat-gosfin-tax-payments-consolidated-budget
  - /data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution
  - /data-sources/federal/rosstat-gosfin-regional-social-support-expenditures
  - /data-sources/federal/cbr-statistics
  - /data-sources/federal/nalog-statistics
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/federal/data-gov-ru
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральный; официальная государственная статистика, макро- и региональные ряды, отраслевые и демографические показатели |
| Тип доступа | Смешанный: каталог показателей на **fedstat.ru**, разделы **открытых данных** на **fedstat.ru** и **rosstat.gov.ru**, тематические HTML-разделы |
| Основные форматы | CSV, XLS/XLSX, XML; часть наборов — SDMX; страницы каталога — HTML |
| Оператор | [Росстат](/organizations/rosstat) |
| Режим доступа | Открытый для публичных разделов; расширенные сервисы могут иметь отдельный регламент |

Коротко: **машиночитаемые выгрузки и таблицы официальной статистики** с порталов **ЕМИСС** и **Росстата** — региональные и отраслевые ряды, социально-экономические агрегаты, финансовая статистика в терминах Росстата. Для **госфинансов** это **контекст и сверка** с бюджетом и налогами, а не касса по лицевым счетам.

## Описание

Карточка описывает **публичный контур данных Росстата** через два основных входа: работа с **каталогом показателей** и выгрузками на **`fedstat.ru`** (логика **ЕМИСС**) и **каталог наборов открытых данных** на **`rosstat.gov.ru/opendata/`**. Отдельно Росстат публикует веб-приложение **Show Data** с поиском показателей на **`showdata.rosstat.gov.ru`** — см. **[отдельную карточку](/data-sources/federal/rosstat-showdata-finder)**. Публичные **дашборды в Contour BI** на **`bi.rosstat.gov.ru`** вынесены в **[карточку BI-портала](/data-sources/federal/rosstat-bi-portal)**. Наборы на витринах могут **пересекаться или дополнять** друг друга — конкретный файл ищите по **паспорту** и теме.

Отдельно на сайте Росстата опубликован тематический раздел **[Финансы](https://rosstat.gov.ru/statistics/finance)** (`/statistics/finance`): HTML-витрина с карточками на **файлы в `/storage/mediabank/`** (XLS, XLSX, PDF) и на соответствующие ветки **ЕМИСС** (раздел **1.32.x** на `fedstat.ru`). Там же — подразделы «Методология», публикации и архив; для госфинансов в первую очередь важны блоки **«Государственные финансы»**, **расходы консолидированных бюджетов субъектов и МО на социальную поддержку**, а также смежные **«Финансы организаций»**, **СОНКО** и **«Финансовый рынок»**. Ключевые mediabank-наборы блока «Государственные финансы» и соцподдержки вынесены в отдельные карточки: **[консолидированный бюджет РФ (XLSX)](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf)**, **[налоги в консолидированный бюджет (XLS)](/data-sources/federal/rosstat-gosfin-tax-payments-consolidated-budget)**, **[исполнение бюджетов ГВФ (XLS)](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution)**, **[расходы на соцподдержку по субъектам (XLSX)](/data-sources/federal/rosstat-gosfin-regional-social-support-expenditures)**.

Тематический раздел **[«Внешняя торговля»](https://rosstat.gov.ru/statistics/vneshnyaya_torgovlya)** (`/statistics/vneshnyaya_torgovlya`) вынесен в отдельную карточку: **[Росстат: статистика внешней торговли](/data-sources/federal/rosstat-external-trade)** — граница с **[таможенной статистикой ФТС](/data-sources/federal/fts-customs-statistics)** и типовые точки доступа описаны там.

Страница **[«Государство»](https://rosstat.gov.ru/folder/11191)** (`/folder/11191`) — **другая** HTML-витрина: древовидный каталог публикаций и методических материалов по теме «государство и управление». Для **госфинансов** там полезны, в частности: **краткие бюллетени** вроде «Исполнение бюджета…», «Налоговая статистика…» (файлы DOC и ссылки вида `/bgd/regl/...` или `/storage/mediabank/…` — состав и периодичность меняются); статистический сборник **[«Финансы России»](/data-sources/federal/rosstat-finances-of-russia)** (каталог `/folder/210/`, PDF/архивы/Excel по выпускам); **показатели реализации государственных и федеральных целевых программ (подпрограмм)** — **[отдельная карточка](/data-sources/federal/rosstat-gov-programs-implementation-statistics)** (архивы Excel по годам; текущий контур — **[programs.gov.ru](/data-sources/federal/fcp)**); **закупочная деятельность** (архивы и PDF в каталоге Росстата — не замена **[ЕИС](/data-sources/federal/procurement)**) — **[карточка архива](/data-sources/federal/rosstat-procurement-statistics-archive)**; **эффективность управления государственным имуществом**; методические материалы по **СОНКО** со **ссылкой на ветку ЕМИСС** «Финансы… — СОНКО». Это **пресс- и методический контур** сайта, а не единый каталог машиночитаемых наборов в духе `/opendata/`.

Сюда **не** входят: операционное **исполнение бюджета** и формы **[Казначейства](/data-sources/federal/roskazna-reports)**; **налоговая статистика ФНС** по формам НК РФ — **[отдельный источник](/data-sources/federal/nalog-statistics)**; внутренние кабинеты статистического наблюдения.

## Оператор

**Федеральная служба государственной статистики (Росстат)** — канонические входы: https://fedstat.ru/ и https://rosstat.gov.ru/

- Карточка ИС: **[ЕМИСС](/information-systems/federal/emiss)** — инфраструктура официальной статистики и публичная витрина `fedstat.ru`; границы контура и типовые сценарии совпадают с этой карточкой источника по смыслу «выгрузки и каталог».

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Show Data (finder) | https://showdata.rosstat.gov.ru/finder/ | HTML (SPA); поиск показателей и экспорт из UI — см. **[карточку](/data-sources/federal/rosstat-showdata-finder)** |
| BI-портал (Contour BI, дашборды) | https://bi.rosstat.gov.ru/biportal/contourbi.jsp?solution=Dashboard&allsol=1 | HTML + BI-клиент в браузере — см. **[карточку](/data-sources/federal/rosstat-bi-portal)** |
| Публичный портал ЕМИСС | https://fedstat.ru/ | HTML; подбор рядов и таблиц |
| Открытые данные (fedstat.ru) | https://fedstat.ru/opendata/ | XLS, CSV и др.; часть наборов — SDMX |
| Открытые данные (сайт Росстата) | https://rosstat.gov.ru/opendata/ | CSV, XLS и др. по паспортам наборов |
| Тематическая витрина «Государство» | https://rosstat.gov.ru/folder/11191 | HTML; бюллетени по бюджету и налогам, **[закупки (архив)](/data-sources/federal/rosstat-procurement-statistics-archive)**, **[госпрограммы (архив)](/data-sources/federal/rosstat-gov-programs-implementation-statistics)**, СОНКО, ГИМ и др. (см. описание) |
| Тематический раздел «Финансы» | https://rosstat.gov.ru/statistics/finance | HTML; ссылки на файлы в mediabank и на ЕМИСС |
| Тематический раздел «Внешняя торговля» | https://rosstat.gov.ru/statistics/vneshnyaya_torgovlya | HTML; см. **[отдельную карточку](/data-sources/federal/rosstat-external-trade)** |
| Консолидированный бюджет РФ (mediabank) | https://rosstat.gov.ru/storage/mediabank/gos_fin_byudget.xlsx | XLSX — см. **[карточку](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf)** |
| Налоги в консолидированный бюджет (mediabank, пример имени) | https://rosstat.gov.ru/storage/mediabank/gos_fin_nalog_2023.xls | XLS — см. **[карточку](/data-sources/federal/rosstat-gosfin-tax-payments-consolidated-budget)** |
| Исполнение бюджетов ГВФ (mediabank) | https://rosstat.gov.ru/storage/mediabank/gos_fin_fondy.xls | XLS — см. **[карточку](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution)** |
| Соцподдержка субъектов и МО (mediabank, пример) | https://rosstat.gov.ru/storage/mediabank/socpod_2021.xlsx | XLSX — см. **[карточку](/data-sources/federal/rosstat-gosfin-regional-social-support-expenditures)** |
| Классификаторы (в т.ч. ОКТМО) | https://rosstat.gov.ru/classification | HTML, RAR, DOC/DOCX и др. |
| Набор ОКТМО (пример паспорта) | https://rosstat.gov.ru/opendata/7708234640-oktmo | По паспорту набора |

## Объекты данных и показатели

- **Строка набора** — как правило **наблюдение временного ряда** или **таблица** с кодом территории, периодом, показателем и значением; единицы и методика — в паспорте или на странице показателя.
- **Типичные блоки** — ВРП и национальные счета, демография, рынок труда, цены, **региональные срезы** по субъектам РФ, отраслевая и финансовая статистика в классификации Росстата.
- **Страница `/folder/11191` («Государство»)** — **точечные** публикации и методички: срезы по **исполнению бюджета** и **налоговой статистике** (как правило краткие DOC/PDF за отдельные периоды), сборники **[«Финансы России»](/data-sources/federal/rosstat-finances-of-russia)** и **[«Россия в цифрах»](/data-sources/federal/rosstat-russia-in-figures)** (ветка `/folder/210/`), блоки по **госпрограммам** (**[архив Росстата](/data-sources/federal/rosstat-gov-programs-implementation-statistics)** и **[programs.gov.ru](/data-sources/federal/fcp)**), **закупкам** (**[архив Росстата](/data-sources/federal/rosstat-procurement-statistics-archive)** и **[ЕИС](/data-sources/federal/procurement)**) и **СОНКО** (часто с переходом в **ЕМИСС**). Удобно как **навигация и архив пресс-формата**; для регулярных рядов сначала смотрите **`/statistics/finance`**, **`fedstat.ru`** и **[каталог ОД](https://rosstat.gov.ru/opendata/)**.
- **Раздел `/statistics/finance`, блок «Государственные финансы»** — сводные таблицы по **консолидированному бюджету РФ**, **поступлениям налогов и обязательных платежей** (по методике статистического наблюдения), **исполнению бюджетов государственных внебюджетных фондов**; подробные разборы файлов mediabank — в карточках **[консолидированный бюджет РФ](/data-sources/federal/rosstat-gosfin-consolidated-budget-rf)**, **[налоги в консолидированный бюджет](/data-sources/federal/rosstat-gosfin-tax-payments-consolidated-budget)**, **[бюджеты ГВФ](/data-sources/federal/rosstat-gosfin-extrabudgetary-funds-execution)**. Это **агрегированная официальная статистика**, а не **пооперационное исполнение** по лицевым счетам и не дубль **[ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** или **[Казначейства](/data-sources/federal/roskazna-reports)** без явной сверки методик.
- **Социальная поддержка** — в том же разделе «Финансы» выкладываются файлы `socpod_<год>.*` по **расходам консолидированных бюджетов субъектов РФ и МО** на меры социальной поддержки — см. **[отдельную карточку](/data-sources/federal/rosstat-gosfin-regional-social-support-expenditures)**.
- **Связка с бюджетом** — через **код региона**, **ОКТМО** и согласованный **календарь периодов**; прямого поля «КБК» в статистике Росстата обычно **нет**.

**Пробелы:** методики и названия показателей **не совпадают** с бюджетной отчётностью; перед джойном с **[ГИИС](/data-sources/federal/budget-gov-ru-datasets)** проверяйте определение показателя и базу.

## Периодичность обновления

Задаётся **паспортом набора** и календарём публикаций Росстата; часть рядов обновляется ежемесячно, часть — ежеквартально или ежегодно. Общие предупреждения о смене интерфейса и URL — в разделе **«Ограничения и актуальность»** карточки **[ЕМИСС](/information-systems/federal/emiss)**.

## Ограничения и особенности

- **Лицензия и условия** — указываются в паспорте набора на `rosstat.gov.ru` или в сопроводительных материалах к файлу на `fedstat.ru`.
- **Стабильность URL** — глубокие ссылки на подразделы периодически меняются; для пайплайнов опирайтесь на **идентификатор набора** в каталоге ОД или на выгрузку из **[Hub of Data](/data-sources/civil/hubofdata)**, если набор проиндексирован там.
- **ЕМИСС не заменяет казначейство** — детальное исполнение бюджета по платежам — в **[отчётах Казначейства](/data-sources/federal/roskazna-reports)** и **[наборах «Электронного бюджета»](/data-sources/federal/budget-gov-ru-datasets)**.

## Примеры доступа

Скачать главную страницу каталога открытых данных на сайте Росстата (проверка доступности):

```bash
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/opendata/"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/statistics/finance"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/folder/11191"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/statistics/vneshnyaya_torgovlya"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/folder/210/document/13237"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/folder/210/document/13221"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/folder/210/document/12993"
curl -sSk -o /dev/null -w "%{http_code}\n" "https://rosstat.gov.ru/storage/mediabank/gos_fin_byudget.xlsx"
```

Для конкретного файла используйте URL из **актуального паспорта** набора на странице набора или **актуальную ссылку** с `/statistics/finance` (имена файлов на mediabank со временем меняются).

## Связанные страницы wiki

- **[Росстат: сборник «Финансы России»](/data-sources/federal/rosstat-finances-of-russia)** — PDF/архивы/Excel по выпускам серии; для госфинансов — отдельный контур от регулярных файлов `/statistics/finance`.
- **[Росстат: сборник «Национальные счета России»](/data-sources/federal/rosstat-national-accounts-of-russia)** — официальные таблицы **СНС** по выпускам (PDF/архивы/Excel); макро- и секторальный контекст для **[бюджетных рядов](/data-sources/federal/budget-gov-ru-datasets)** без замены казначейских регистров.
- **[Росстат: сборник «Россия в цифрах»](/data-sources/federal/rosstat-russia-in-figures)** — краткий годовой обзор по стране: много **DOCX/XLSX** по разделам; для пайплайнов нужен **парсинг** или ручная нормализация.
- **[Росстат: Show Data — finder](/data-sources/federal/rosstat-showdata-finder)** — поиск показателей на `showdata.rosstat.gov.ru`; смежный вход к тем же классам официальной статистики, ориентированный на интерактивный UI.
- **[Росстат: публичный BI-портал (Contour BI)](/data-sources/federal/rosstat-bi-portal)** — дашборды на `bi.rosstat.gov.ru`; рядом с Show Data по роли **визуальной** витрины без стабильного публичного API.
- **[ЕМИСС](/information-systems/federal/emiss)** — назначение системы, отличие `fedstat.ru` от `rosstat.gov.ru/opendata`, типовые вопросы.
- **[Росстат: статистика внешней торговли](/data-sources/federal/rosstat-external-trade)** — витрина `/statistics/vneshnyaya_torgovlya`; методика и точки доступа отдельно от **[ФТС](/data-sources/federal/fts-customs-statistics)**.
- **[Росстат: закупки (архив в каталоге «Государство»)](/data-sources/federal/rosstat-procurement-statistics-archive)** — ZIP/PDF/Excel из `/folder/11191`; не замена **[ЕИС](/data-sources/federal/procurement)**.
- **[Росстат: госпрограммы и ФЦП (архив в каталоге «Государство»)](/data-sources/federal/rosstat-gov-programs-implementation-statistics)** — годовые архивы с Excel; текущие паспорта — **[обзор по programs.gov.ru](/data-sources/federal/fcp)**.
- **[Наборы ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — машиночитаемые бюджетные ряды; ряд «Государственные финансы» на `rosstat.gov.ru` даёт **иную методику и агрегацию**, их нельзя смешивать без проверки определений.
- **[Отчёты и формы Федерального казначейства](/data-sources/federal/roskazna-reports)** — операционное исполнение бюджета; таблицы Росстата по консолидированному бюджету — **статистический свод**, не замена казначейских регистров.
- **[Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)** — администрирование налогов; типичная сверка с макро- и региональными рядами Росстата.
- **[Архив и открытые данные по госпрограммам (programs.gov.ru)](/data-sources/federal/fcp)** — актуальный реестр и выгрузки; страница «Государство» на rosstat.gov.ru лишь отсылает к порталу после отмены отдельных форм Росстата.
- **[Сведения о закупках и контрактах (ЕИС)](/data-sources/federal/procurement)** — операционные и массовые данные закупок; публикации Росстата по **44-ФЗ** на `/folder/11191` — **другой** формат (обзоры/методика), не замена ЕИС.
- **[Консолидированные бюджеты субъектов РФ](/data-sources/regional/consolidated-budgets)** — исполнение по формам Казначейства рядом с региональными показателями Росстата.
- **[Статистика Банка России](/data-sources/federal/cbr-statistics)** — денежная и банковская статистика; часто сопоставляют с макрорядами ЕМИСС.
- **[Hub of Data](/data-sources/civil/hubofdata)** — поиск зеркал и API каталога для наборов Росстата.

## Не путать с

- **[Налоговая статистика ФНС](/data-sources/federal/nalog-statistics)** — формы по правилам **НК РФ** и методикам ФНС; иной предмет учёта, чем официальная статистика Росстата.
- **[Реестр МО и ОКТМО (munbase)](/information-systems/federal/munbase)** — справочный контур территорий; **не** заменяет таблицы показателей ЕМИСС, но нужен для склейки с муниципальными бюджетами.

## Частые вопросы

**В:** С чего начать — с `fedstat.ru` или с `rosstat.gov.ru/opendata`?

**О:** Если нужен **каталог показателей** и типичные выгрузки в логике ЕМИСС — **`fedstat.ru`**; если известен **паспорт набора** на сайте ведомства — **`rosstat.gov.ru/opendata/`**. Подробнее — в **[карточке ЕМИСС](/information-systems/federal/emiss)**.

**В:** Где лежат таблицы раздела «Государственные финансы» (`gos_fin_*` и др.)?

**О:** На странице **[Финансы](https://rosstat.gov.ru/statistics/finance)** в соответствующей карточке — прямые ссылки на **`/storage/mediabank/`** и поясняющий PDF; параллельно даны входы в **ЕМИСС** (`fedstat.ru`). Для пайплайнов копируйте URL **с актуальной страницы**: состав файлов и имена меняются при обновлениях.

**В:** Чем страница **[«Государство»](https://rosstat.gov.ru/folder/11191)** полезна для госфинансов по сравнению с `/statistics/finance`?

**О:** Это **отдельная витрина** с древом тем (кадры госслужбы, программы, закупки по 44-ФЗ, СОНКО, ГИМ и т.д.). По **деньгам** там чаще встречаются **краткие бюллетени** и методические тексты, а не полный набор таблиц как в **«Финансы»** и **ЕМИСС**; для машиночитаемых рядов начинайте с **`/statistics/finance`**, **`fedstat.ru`** и **[открытых данных](https://rosstat.gov.ru/opendata/)**, а `/folder/11191` используйте для **контекста, архива и перекрёстных ссылок** (в т.ч. на **programs.gov.ru** и ветки **ЕМИСС**).

**В:** Чем **сборник «Финансы России»** отличается от файлов в разделе **«Финансы»** (`/statistics/finance`)?

**О:** **Сборник** — отдельная **серия изданий** с PDF, архивами и (при наличии) Excel по **выпускам**; см. **[отдельную карточку](/data-sources/federal/rosstat-finances-of-russia)**. Краткий обзорный сборник **[«Россия в цифрах»](/data-sources/federal/rosstat-russia-in-figures)** — **другая серия** в той же ветке каталога `/folder/210/`. Раздел **`/statistics/finance`** — **регулярная витрина** со ссылками на mediabank и ЕМИСС; наборы и форматы **не обязаны** совпадать с комплектом конкретного года сборника.

**В:** Можно ли восстановить исполнение бюджета муниципалитата только из Росстата?

**О:** Обычно **нет** как первичный источник: нужны **муниципальные и казначейские** контуры из раздела [источников данных](/data-sources/); Росстат даёт **официальную статистику**, а не операционную отчётность по лицевым счетам.
