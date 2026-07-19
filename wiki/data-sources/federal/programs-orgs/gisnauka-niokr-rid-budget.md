---
title: 'ГИС «Наука»: открытые данные НИОКТР, РИД и связь с бюджетным финансированием'
sidebar_label: 'ГИС «Наука» (НИОКТР, РИД, бюджет)'
tags:
  - data-source
  - federal
  - budget
  - programs
last_updated: 2026-07-19T00:00:00.000Z
last_verified: 2026-07-19
slug: /data-sources/federal/gisnauka-niokr-rid-budget
source_url: 'https://gisnauka.ru/'
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - json
status: current
related_information_system: /information-systems/federal/gisnauka
description: >-
  источник для сопоставления записей о научных работах и РИД с бюджетным
  контуром: проверенные выгрузки дают ОГРН организаций, а для НИОКТР и
  результатов НИР — КБК, суммы и годы этапов; ИНН получают через реестр
  участников бюджетного процесса перед сверкой с реестром соглашений.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/gisnauka
  - /howto/access/gisnauka
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/federal/subsidy
  - /data-sources/federal/orgsinfo
  - /information-systems/federal/giis-eb
  - /data-sources/federal/gasu-programs
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
| Уровень и охват | Федеральный контур **Минобрнауки России**: сведения о **НИОКТР**, **РИД** и отчётности организаций; точки публикации — интерфейс **ГИС «Наука»** (поиск, выгрузки, API) |
| Тип доступа | Смешанный: веб-интерфейсы и реестры на **gisnauka.ru**; **HTTP GET** к **`/api/egisu/open-data`** (параметры `year`, `month`, `card_type`); **[глобальный поиск](https://gisnauka.ru/global-search)** и **`/api/egisu/base/search`**; выгрузки через **«Сформировать выгрузку»** |
| Основные форматы | HTML (портал); **JSON** во всех 12 проверенных ответах `open-data` за 2024 год. CSV/XLSX/XML для этого endpoint не наблюдались |
| Оператор | Министерство науки и высшего образования Российской Федерации |
| Режим доступа | Просмотр и загрузка открытых наборов — как правило **без регистрации**; персональные кабинеты и часть реестров — **по ЕСИА** и регламентам ведомства |

Коротко: источник для **сопоставления** записей о **научных работах и РИД** с **бюджетным контуром**. В проверенных выгрузках `open-data` есть ОГРН организаций, а для НИОКТР и результатов НИР — КБК, суммы и годы этапов; для бюджетной склейки сначала получите ИНН через **[реестр участников бюджетного процесса](/data-sources/federal/orgsinfo)**, затем сверяйте **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)** и **[реестр соглашений](/data-sources/federal/subsidy)**.

## Описание

Карточка описывает **публичный слой данных**, относящийся к **ГИС «Наука»** (`https://gisnauka.ru/`): учёт **НИОКТР**, регистрация и отчётность по **РИД**, сведения об организациях и проектах. Для **машинных выгрузок** по типам карточек и периоду используйте **`https://gisnauka.ru/api/egisu/open-data`** с параметрами **`year`**, **`month`** (включая **`all_months`** за полный год для **завершённых** календарных лет) и **`card_type`** — см. **[how-to по доступу](/howto/access/gisnauka)**. Дополнительно доступны **[глобальный поиск](https://gisnauka.ru/global-search)** с вызовом **`https://gisnauka.ru/api/egisu/base/search`** (JSON, без опубликованной спецификации) и сценарий **«Сформировать выгрузку»** по **году** и **типу данных** в интерфейсе. Связка с **бюджетом** в машиночитаемом виде чаще всего достигается **комбинацией** этих источников с **[открытыми данными единого портала бюджетной системы](/data-sources/federal/budget-gov-ru-datasets)** и при необходимости **[единой площадкой мер финподдержки](/data-sources/federal/promote-budget-gov-ru)** для контекста отборов — а не одним универсальным файлом «всё в одном».

Сюда **не** входят: **полный** служебный учёт без выгрузки наружу; **казначейские** платежи (их берут в **[отчётах Казначейства](/data-sources/federal/roskazna-reports)** и связанных наборах); **госпрограммы** как единый реестр — см. **[programs.gov.ru](/information-systems/federal/programs-gov)**.

## Оператор

**Министерство науки и высшего образования Российской Федерации** — https://minobrnauki.gov.ru/

- Карточка ИС: **[ГИС «Наука» (gisnauka.ru)](/information-systems/federal/gisnauka)** — назначение контура, поддомены и границы с бюджетными системами.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| ГИС «Наука» (корень) | https://gisnauka.ru/ | HTML |
| Глобальный поиск (загрузка списков через внутренний API) | https://gisnauka.ru/global-search | HTML; JSON в XHR к `/api/egisu/base/search` |
| API открытых выгрузок (`year`, `month`, `card_type`; годовой срез — `month=all_months`, только за **завершённые** годы; помесячно — после окончания месяца) | https://gisnauka.ru/api/egisu/open-data | `application/json`, корень `cards[]` во всех 12 проверенных ответах за 2024 год |
| Внутренний API поиска (параметры — из DevTools, спецификация не публикуется) | https://gisnauka.ru/api/egisu/base/search | JSON |
| Выгрузка дампа по году и типу данных | ссылка **«Сформировать выгрузку»** в интерфейсе `gisnauka.ru` | JSON наблюдался для `nioktr`; форматы иных сценариев отдельно не проверялись |

## Объекты данных и показатели

- **`/api/egisu/open-data`** в проверенном срезе возвращает объект JSON `{"cards": [...]}`. Каждая верхнеуровневая карточка имеет `registration_number`; количество элементов `cards[]` за апрель 2024 составило 127–1 417 для РИД-связанных типов и 995–1 185 для НИОКТР/результатов НИР.
- Для НИОКТР (`nioktr`) и результатов НИР (`ikrbs`) в карточках действительно есть вложенные `budgets[]` и `stages[].budgets[]`: тип бюджета, сумма строкой и КБК. Полный проверенный перечень путей, типов и реальных значений приведён ниже.
- В проверенных файлах **нет поля `inn`** и нет поля, явно обозначенного номером соглашения о субсидии. Есть ОГРН организаций; у `nioktr` также есть `contract_number`, но его семантика не подтверждена как соглашение о субсидии. Поэтому сначала сопоставляйте ОГРН с **[реестром участников бюджетного процесса](/data-sources/federal/orgsinfo)**, а затем используйте ИНН, КБК и год с **[реестром соглашений](/data-sources/federal/subsidy)** и **[наборами ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)**.

## Проверенный машинный контракт `open-data`

Ниже — наблюдаемый контракт **только** ответов `open-data` для 2024 года. Он заменяет общие предположения о CSV/XLSX/XML для этого эндпоинта: во всех 12 реально сохранённых телах получен JSON с верхним объектом `{"cards": [...]}`. Полные схемы таблиц построены по каждому файлу `2024-04`; годовые тела проверены как валидный JSON, подсчитаны по верхнеуровневому `cards[].registration_number`, а набор верхнеуровневых ключей первой карточки совпал с месячным срезом. Это не является обещанием неизменности схемы оператором.

### 0. Метаданные снимка

- Снимок тел: **2026-07-19 04:24:47–04:27:26 UTC** (07:24:47–07:27:26 MSK); повторная проверка HTTP-заголовков — в тот же день.
- Клиент: Python 3.13.7, `requests` 2.34.2; `User-Agent`: `Mozilla/5.0 (compatible; finguide-recon/1.0)`.
- Интерфейс на снимке называл себя «Домен Наука и Инновации»; номер версии фронтенда оператор не публикует — **не установлен**.
- Все ответы: HTTP `200`, `Content-Type: application/json`, `Transfer-Encoding: chunked`; `Content-Length` отсутствует. Первые 512 байт каждого файла начинаются с `{` (hex-префикс в таблице), UTF-8 BOM не наблюдался.
- В этом окружении `curl` не прошёл проверку цепочки TLS (`curl: (60)`); файл был получен клиентом с актуальным хранилищем доверенных сертификатов. Это не основание отключать проверку TLS в ETL.

#### Файлы и контрольные суммы

| Тип | Период | Имя из `Content-Disposition` | Размер | Первые 16 байт (hex) | SHA-256 |
| --- | --- | --- | ---: | --- | --- |
| `ikspo` | `2024-04` | `ikspo_2024_04.json` | 724,917 B (707.9 KiB) | `7b0a20202020226361726473223a205b` | `14f099ca24045737e681451c6feb587693c3e3a650ac1f481c952fffaa4b5d2b` |
| `ikspo` | `2024-all_months` | `ikspo_2024_all_months.json` | 10,088,601 B (9.6 MiB) | `7b0a20202020226361726473223a205b` | `d85bbf7d0d3702913270674d76029ceb8f3d588b79b2785a72881b1e8733f159` |
| `iksi` | `2024-04` | `iksi_2024_04.json` | 195,815 B (191.2 KiB) | `7b0a20202020226361726473223a205b` | `be795745a7c388854d6102fa710e7eec027a8d5728f3e13703032e30736372e3` |
| `iksi` | `2024-all_months` | `iksi_2024_all_months.json` | 2,643,815 B (2.5 MiB) | `7b0a20202020226361726473223a205b` | `66c8c842dbeacac1d726646f6a10b021f2aeaa1333064407a0fee19bef387028` |
| `rid` | `2024-04` | `rid_2024_04.json` | 12,437,839 B (11.9 MiB) | `7b0a20202020226361726473223a205b` | `99faf62f9fcc544a09ecf60f4e4e69c4922766fe91138b278d9407dc328f7a3a` |
| `rid` | `2024-all_months` | `rid_2024_all_months.json` | 184,218,781 B (175.7 MiB) | `7b0a20202020226361726473223a205b` | `93525415a5064b8f3711133c873d31ef3175a9f5a6377766cab433feba90d4d2` |
| `dissertation` | `2024-04` | `dissertation_2024_04.json` | 7,792,983 B (7.4 MiB) | `7b0a20202020226361726473223a205b` | `545a81202befff5938f815d69a0331aa4a4decd9c8e8b0c3b219b92c70bfe7b8` |
| `dissertation` | `2024-all_months` | `dissertation_2024_all_months.json` | 96,420,896 B (92.0 MiB) | `7b0a20202020226361726473223a205b` | `75e31fbece10ea216ae4cca3eecddcbecfbfe4d5e038ff13355bff848f1093a5` |
| `nioktr` | `2024-04` | `nioktr_2024_04.json` | 19,256,908 B (18.4 MiB) | `7b0a20202020226361726473223a205b` | `4248403f20b6e375cebed13306777c42c0f6fb00f59968201c24b0e1da3bcaa2` |
| `nioktr` | `2024-all_months` | `nioktr_2024_all_months.json` | 301,865,160 B (287.9 MiB) | `7b226361726473223a5b7b0a20202020` | `98227e8cec7d1cac53148d7d79b22fbe5c37129efe55f427460198c03d66da09` |
| `ikrbs` | `2024-04` | `ikrbs_2024_04.json` | 32,250,986 B (30.8 MiB) | `7b0a20202020226361726473223a205b` | `b8507627c80a32e30926adb4e435fb6645d9a88b115029f2e1d3315b3c6360a0` |
| `ikrbs` | `2024-all_months` | `ikrbs_2024_all_months.json` | 898,051,248 B (856.4 MiB) | `7b226361726473223a5b7b0a20202020` | `05461ffc0f9baaf7cedabd67dd3391859c68bd36f95d7a6f5cbaf36b30a54000` |

### 1. Сводная матрица `card_type`

| `card_type` | Содержание | Формат тела / корень | Месяц 2024-04 | Год 2024 | Статус |
| --- | --- | --- | ---: | ---: | --- |
| `ikspo` | Состояния правовой охраны результатов интеллектуальной деятельности | `application/json`; `cards[]` | 773 строк, 707.9 KiB | 9,910 строк, 9.6 MiB | HTTP 200; сохранён |
| `iksi` | Сведения об использовании РИД | `application/json`; `cards[]` | 127 строк, 191.2 KiB | 1,672 строк, 2.5 MiB | HTTP 200; сохранён |
| `rid` | Сведения о результате интеллектуальной деятельности | `application/json`; `cards[]` | 1,417 строк, 11.9 MiB | 20,211 строк, 175.7 MiB | HTTP 200; сохранён |
| `dissertation` | Сведения о защищённых диссертациях на соискание учёных степеней | `application/json`; `cards[]` | 730 строк, 7.4 MiB | 8,985 строк, 92.0 MiB | HTTP 200; сохранён |
| `nioktr` | Сведения о начинаемых научно-исследовательских работах | `application/json`; `cards[]` | 1,185 строк, 18.4 MiB | 15,740 строк, 287.9 MiB | HTTP 200; сохранён |
| `ikrbs` | Сведения о результатах научно-исследовательских работ | `application/json`; `cards[]` | 995 строк, 30.8 MiB | 21,090 строк, 856.4 MiB | HTTP 200; сохранён |

Под «строкой» понимается элемент верхнего массива `cards`. Это не число денежных строк: массивы `budgets`, `stages`, `executors` и другие вложены в карточку.

### 2. Контракты по `card_type`

Обозначение `[]` в имени поля — элемент массива. `nullable` означает, что в **полном** месячном файле встретился literal `null`; `unknown (all null)` означает, что иной JSON-тип в этом снимке установить нельзя. Примеры взяты из тех же файлов; ФИО, контакты и подобные персональные значения заменены на `[обезличено]`.

#### `ikspo` — Состояния правовой охраны результатов интеллектуальной деятельности

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "824041700022-8", "created_date": "2024-04-17"}`.

```yaml
- card_type: ikspo
  ru_name: "Состояния правовой охраны результатов интеллектуальной деятельности"
  content_type: "application/json"
  file_name_pattern: "ikspo_YYYY_MM.json | ikspo_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 773, "2024-all_months": 9910}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Thu, 07 May 2026 00:08:11 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Thu, 07 May 2026 00:10:39 GMT"}
  fields:
    - {"name": "copyright_protections", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].changed_rid_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Устройство воздушно-решетной очистки зернового вороха зерноуборочного комбайна", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].contract_number", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "только кандидат на документный матч; не доказанный номер соглашения о субсидии", "example": "2791730", "comment": "формат произвольный; может быть `-` или номер лицензионного/иного договора"}
    - {"name": "copyright_protections[].date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2023-03-13", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].estimated_time", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "240.000000000000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].protection_way", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Осуществлена государственная регистрация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].registration_authority", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "copyright_protections[].rid_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Изобретение", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].territory", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "copyright_protections[].territory[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-17", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "824041700022-8", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rid", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "624032700151-5", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "work_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
  join_with_budget:
    - {field: null, target: null, confidence: "no direct budget key observed"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `copyright_protections` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].changed_rid_name` | string; nullable | `Устройство воздушно-решетной очистки зернового вороха зерноуборочного комбайна` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].contract_number` | string; nullable | `2791730` | формат произвольный; может быть `-` или номер лицензионного/иного договора | только кандидат на документный матч; не доказанный номер соглашения о субсидии |
| `copyright_protections[].date` | date (string) | `2023-03-13` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].estimated_time` | string; nullable | `240.000000000000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].protection_way` | string | `Осуществлена государственная регистрация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].registration_authority` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].rid_type` | string | `Изобретение` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].territory` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `copyright_protections[].territory[]` | string | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `created_date` | date (string) | `2024-04-17` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `824041700022-8` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rid` | string | `624032700151-5` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rank` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |


#### `iksi` — Сведения об использовании РИД

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "724042300003-9", "created_date": "2024-04-23"}`.

```yaml
- card_type: iksi
  ru_name: "Сведения об использовании РИД"
  content_type: "application/json"
  file_name_pattern: "iksi_YYYY_MM.json | iksi_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 127, "2024-all_months": 1672}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Wed, 06 May 2026 23:41:00 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Wed, 06 May 2026 23:38:44 GMT"}
  fields:
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-23", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].contract_number", "type": "string", "nullable": false, "enum": null, "join_key": "только кандидат на документный матч; не доказанный номер соглашения о субсидии", "example": "15-Б/2024", "comment": "формат произвольный; может быть `-` или номер лицензионного/иного договора"}
    - {"name": "iksi_external_using[].contract_type", "type": "string; nullable", "nullable": true, "enum": ["Простая (неисключительная) лицензия", "Отчуждение исключительного права", "Исключительная лицензия"], "join_key": null, "example": "Простая (неисключительная) лицензия", "comment": "наблюдавшиеся значения: `Простая (неисключительная) лицензия`, `Отчуждение исключительного права`, `Исключительная лицензия`"}
    - {"name": "iksi_external_using[].date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-02-12", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].estimated_time", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "12.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ  УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ НИЖЕГОРОДСКОЙ ОБЛАСТИ  \"ГОРОДСКАЯ  БОЛЬНИЦА № 28   МОСКОВСКОГО  РАЙОНА Г.НИЖНЕГО НОВГОРОДА\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.ogrn", "type": "string", "nullable": false, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1025202836251", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "iksi_external_using[].organization_state.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Государственные бюджетные учреждения субъектов Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].organization_state.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "iksi_external_using[].organization_state.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "iksi_external_using[].organization_state.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "iksi_external_using[].organization_state.territory", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].registration_number", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].special_conditions", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].territory", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_external_using[].territory[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_own_using", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_own_using[].date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2023-11-28", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_own_using[].estimated_time", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "999.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_own_using[].requisites", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "АКТ О ВНЕДРЕНИИ РЕЗУЛЬТАТОВ ИНТЕЛЛЕКТУАЛЬНОЙ ДЕЯТЕЛЬНОСТИ НА ПРЕДПРИЯТИИ Номер: 3, дата: 29.11.2023", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "iksi_own_using[].using_description", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Используется с «29» ноября 2023 г. для автоматического распознавания дефектов программно-аппаратным комплексом с системой машинного зрения на основе глубоких свёрточных нейросетей и методов цифровой голографии. Программа для ЭВМ позволяет п…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "724042300003-9", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rid", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "623120400073-8", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "work_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.degree", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.patronymic", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rank", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.scopus_author_id", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.wos_research_id", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
  join_with_budget:
    - {"field": "iksi_external_using[].organization_state.ogrn", "target": "/data-sources/federal/orgsinfo", "confidence": "high for organization identity; indirect for budget"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `created_date` | date (string) | `2024-04-23` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].contract_number` | string | `15-Б/2024` | формат произвольный; может быть `-` или номер лицензионного/иного договора | только кандидат на документный матч; не доказанный номер соглашения о субсидии |
| `iksi_external_using[].contract_type` | string; nullable | `Простая (неисключительная) лицензия` | наблюдавшиеся значения: `Простая (неисключительная) лицензия`, `Отчуждение исключительного права`, `Исключительная лицензия` | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].date` | date (string) | `2024-02-12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].estimated_time` | string | `12.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.name` | string; nullable | `ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ  УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ НИЖЕГОРОДСКОЙ ОБЛАСТИ  "ГОРОДСКАЯ  БОЛЬНИЦА № 28   МОСКОВСКОГО  Р…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.ogrn` | string | `1025202836251` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `iksi_external_using[].organization_state.okogu` | string; nullable | `Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.okopf` | string; nullable | `Государственные бюджетные учреждения субъектов Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.short_name` | string; nullable | `` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].organization_state.territory` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].registration_number` | string; nullable | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].special_conditions` | string; nullable | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].territory` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_external_using[].territory[]` | string | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_own_using` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_own_using[].date` | date (string) | `2023-11-28` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_own_using[].estimated_time` | string | `999.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_own_using[].requisites` | string; nullable | `АКТ О ВНЕДРЕНИИ РЕЗУЛЬТАТОВ ИНТЕЛЛЕКТУАЛЬНОЙ ДЕЯТЕЛЬНОСТИ НА ПРЕДПРИЯТИИ Номер: 3, дата: 29.11.2023` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `iksi_own_using[].using_description` | string; nullable | `Используется с «29» ноября 2023 г. для автоматического распознавания дефектов программно-аппаратным комплексом с систем…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `724042300003-9` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rid` | string | `623120400073-8` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.degree` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.patronymic` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rank` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.scopus_author_id` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.wos_research_id` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |


#### `rid` — Сведения о результате интеллектуальной деятельности

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "624040100183-7", "created_date": "2024-04-01"}`.

```yaml
- card_type: rid
  ru_name: "Сведения о результате интеллектуальной деятельности"
  content_type: "application/json"
  file_name_pattern: "rid_YYYY_MM.json | rid_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 1417, "2024-all_months": 20211}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Wed, 06 May 2026 22:42:21 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Thu, 07 May 2026 00:05:46 GMT"}
  fields:
    - {"name": "abstract", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "База данных создана в рамках гос. задания по прикладным научным исследованиям № 123051500130-9: «Новые технологии диагностики и медикаментозного, регенеративного и инвазивного лечения болезней системы кровообращения» (2023-2025 гг.). База п…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].description", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "authors[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].position", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "authors[].rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-01", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1187746579690", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "customer.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Министерство науки и высшего образования Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Федеральные государственные казенные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"ФОНД СОДЕЙСТВИЯ РАЗВИТИЮ МАЛЫХ ФОРМ ПРЕДПРИЯТИЙ В НАУЧНО-ТЕХНИЧЕСКОЙ СФЕРЕ\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФОНД СОДЕЙСТВИЯ ИННОВАЦИЯМ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "МИНОБРНАУКИ РОССИИ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "development_priorities", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "development_priorities[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Возможность эффективного ответа российского общества на большие вызовы с учетом взаимодействия человека и природы, человека и технологий, социальных институтов на современном этапе глобального развития, в том числе применяя методы гуманитар…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "end_to_end_initiative_technologies", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "end_to_end_initiative_technologies[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Технологии управления свойствами биологических объектов", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ НАУЧНОЕ УЧРЕЖДЕНИЕ \"ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОССИЙСКОЙ АКАДЕМИИ НАУК\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1027000861568", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "executors[].okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Министерство науки и высшего образования Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Федеральные государственные бюджетные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ТОМСКИЙ НИМЦ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executors[].supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executors[].supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executors[].supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executors[].territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "expected", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Исполнитель", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "genetic_resources", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "international_patent_classifiers", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "international_patent_classifiers[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "A61C", "comment": "код расшифровывается в строке тем же объектом `international_patent_classifiers[].name`"}
    - {"name": "international_patent_classifiers[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Стоматология; устройства или методы для гигиены полости рта или ухода за зубами ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "регистрация данных", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "База данных пациентов с хронической сердечной недостаточностью с сохраненной фракцией выброса левого желудочка и дефицитом железа", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "national_technology_initiative_markets", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "national_technology_initiative_markets[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Хелснет", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "nioktr", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "123051500130-9", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "number_of_prototypes", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "03.03.PT", "comment": "код расшифровывается в строке тем же объектом `oecds[].name`"}
    - {"name": "oecds[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "MEDICAL INFORMATICS", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "3.2.4", "comment": "код расшифровывается в строке тем же объектом `oesrs[].name`"}
    - {"name": "oesrs[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Сердечно-сосудистая система", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd.code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "86.10.15.000", "comment": "код расшифровывается в строке тем же объектом `okpd.name`"}
    - {"name": "okpd.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Услуги больниц прочие, оказываемые врачами", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "624040100183-7", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rid_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "База данных", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "76.01.73", "comment": "код расшифровывается в строке тем же объектом `rubrics[].name`"}
    - {"name": "rubrics[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Медицинская статистика", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "three_d_models", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "udk", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "61:311", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "used_rids", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "used_rids[].registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "622041500152-8", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "using_ways", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "В кардиологии", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "work_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.position", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
  join_with_budget:
    - {"field": "customer.ogrn / executors[].ogrn", "target": "/data-sources/federal/orgsinfo", "confidence": "high for organization identity; indirect for budget"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `abstract` | string | `База данных создана в рамках гос. задания по прикладным научным исследованиям № 123051500130-9: «Новые технологии диагн…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].description` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].position` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].rank` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `created_date` | date (string) | `2024-04-01` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer` | object; nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.name` | string; nullable | `МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.ogrn` | string; nullable | `1187746579690` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `customer.okogu` | string; nullable | `Министерство науки и высшего образования Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.okopf` | string; nullable | `Федеральные государственные казенные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_name` | string; nullable | `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ "ФОНД СОДЕЙСТВИЯ РАЗВИТИЮ МАЛЫХ ФОРМ ПРЕДПРИЯТИЙ В НАУЧНО-ТЕХНИЧЕСКОЙ …` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_short_name` | string; nullable | `ФОНД СОДЕЙСТВИЯ ИННОВАЦИЯМ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.short_name` | string; nullable | `МИНОБРНАУКИ РОССИИ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.territory` | string; nullable | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `development_priorities` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `development_priorities[]` | string | `Возможность эффективного ответа российского общества на большие вызовы с учетом взаимодействия человека и природы, чело…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `end_to_end_initiative_technologies` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `end_to_end_initiative_technologies[]` | string | `Технологии управления свойствами биологических объектов` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].name` | string; nullable | `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ НАУЧНОЕ УЧРЕЖДЕНИЕ "ТОМСКИЙ НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ МЕДИЦИНСКИЙ ЦЕНТР РОСС…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].ogrn` | string; nullable | `1027000861568` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `executors[].okogu` | string; nullable | `Министерство науки и высшего образования Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].okopf` | string; nullable | `Федеральные государственные бюджетные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].short_name` | string; nullable | `ТОМСКИЙ НИМЦ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executors[].territory` | string; nullable | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `expected` | string | `Исполнитель` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `genetic_resources` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `international_patent_classifiers` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `international_patent_classifiers[].code` | string | `A61C` | `international_patent_classifiers[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `international_patent_classifiers[].name` | string | `Стоматология; устройства или методы для гигиены полости рта или ухода за зубами` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list[]` | string | `регистрация данных` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `name` | string | `База данных пациентов с хронической сердечной недостаточностью с сохраненной фракцией выброса левого желудочка и дефици…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `national_technology_initiative_markets` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `national_technology_initiative_markets[]` | string | `Хелснет` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `nioktr` | string; nullable | `123051500130-9` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `number_of_prototypes` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].code` | string | `03.03.PT` | `oecds[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].name` | string | `MEDICAL INFORMATICS` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].code` | string | `3.2.4` | `oesrs[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].name` | string | `Сердечно-сосудистая система` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd` | object; nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.code` | string | `86.10.15.000` | `okpd.name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.name` | string | `Услуги больниц прочие, оказываемые врачами` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `624040100183-7` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rid_type` | string | `База данных` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].code` | string | `76.01.73` | `rubrics[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].name` | string | `Медицинская статистика` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `three_d_models` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `udk` | string | `61:311` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `used_rids` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `used_rids[].registration_number` | string | `622041500152-8` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `using_ways` | string | `В кардиологии` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.position` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rank` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |


#### `dissertation` — Сведения о защищённых диссертациях на соискание учёных степеней

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "424041200020-3", "created_date": "2024-04-12", "protection_date": "2024-02-19"}`.

```yaml
- card_type: dissertation
  ru_name: "Сведения о защищённых диссертациях на соискание учёных степеней"
  content_type: "application/json"
  file_name_pattern: "dissertation_YYYY_MM.json | dissertation_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 730, "2024-all_months": 8985}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Mon, 01 Jun 2026 08:51:22 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Wed, 06 May 2026 22:03:51 GMT"}
  fields:
    - {"name": "abstract", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Установлены параметры смеси, характеризующие миграционную способность мелких частиц различной плотности в диапазоне крупности от 1,0 до 0,001 мм, подверженных действию воздушного потока, определяемые состоянием равновесия частицы на наклонн…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "access_to_cyber", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "access_to_neb", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "applications_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 3, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "author_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "[обезличено]", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "author_organization.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.original_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.original_short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_organization.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "author_territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "bibliography", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "173-187", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "books_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "chairman_dissertation_council", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "chairman_dissertation_council.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.position", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "chairman_dissertation_council.wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "council", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "council.code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "35.2.030.03", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "council.council_knowledge_area", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "council.council_type", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ВАК", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "council.liquidation_date", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "council.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "council.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "council.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-12", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "degree_pursued", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Кандидат технических наук", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "dissertation_report_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Рукопись", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "dissertation_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Кандидатская", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "dissertationbooks", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "dissertationbooks[].number", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "dissertationbooks[].pages_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 190, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "миграция частиц", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Исследование способов и устройств производства однородных смесей лечебных комбикормов", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "01.06.QU", "comment": "код расшифровывается в строке тем же объектом `oecds[].name`"}
    - {"name": "oecds[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "MICROBIOLOGY", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "2.3.1", "comment": "код расшифровывается в строке тем же объектом `oesrs[].name`"}
    - {"name": "oesrs[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Механическая инженерия", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "opponents", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "opponents[].fio", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "opponents[].responsible_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "opponents[].scientific_degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "opponents[].speciality_code", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "pages_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 190, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "pictures_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 45, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-02-19", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ \"РОССИЙСКИЙ ГОСУДАРСТВЕННЫЙ АГРАРНЫЙ УНИВЕРСИТЕТ - МСХА ИМЕНИ К.А. ТИМИРЯЗЕВА\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.ogrn", "type": "string", "nullable": false, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1037739630697", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "protection_organization.okogu", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Министерство сельского хозяйства Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.okopf", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Федеральные государственные бюджетные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.short_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "protection_organization.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "protection_organization.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "protection_organization.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "protection_organization.territory", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "424041200020-3", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "30.15.35", "comment": "код расшифровывается в строке тем же объектом `rubrics[].name`"}
    - {"name": "rubrics[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Теория механизмов и машин", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "sources_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 107, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "speciality_codes", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "speciality_codes[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "4.3.1.", "comment": "код расшифровывается в строке тем же объектом `speciality_codes[].name`"}
    - {"name": "speciality_codes[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Технологии, машины и оборудование для агропромышленного комплекса", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "supervisors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "supervisors[].fio", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "supervisors[].responsible_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "supervisors[].scientific_degree", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "supervisors[].speciality_code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "tables_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 32, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "transmission_to_external_antiplagiat", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "transmission_to_third_party_users", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "udk", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "531.8 621.01", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
  join_with_budget:
    - {"field": "author_organization.ogrn / protection_organization.ogrn", "target": "/data-sources/federal/orgsinfo", "confidence": "high for organization identity; indirect for budget"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `abstract` | string | `Установлены параметры смеси, характеризующие миграционную способность мелких частиц различной плотности в диапазоне кру…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `access_to_cyber` | bool; nullable | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `access_to_neb` | bool; nullable | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `applications_count` | integer | `3` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `author_name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization` | object | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.ogrn` | string; nullable | `[обезличено]` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `author_organization.okogu` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.okopf` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.organization_type` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.original_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.original_short_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.short_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_organization.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `author_territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `bibliography` | string | `173-187` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `books_count` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council` | object; nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.degree` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.name` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.orcid` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.position` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.rank` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.rinc_id` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.territory` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.url` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `chairman_dissertation_council.wos_research_id` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council.code` | string | `35.2.030.03` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council.council_knowledge_area` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council.council_type` | string; nullable | `ВАК` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council.liquidation_date` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `council.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `council.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `council.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `created_date` | date (string) | `2024-04-12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `degree_pursued` | string | `Кандидат технических наук` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `dissertation_report_type` | string | `Рукопись` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `dissertation_type` | string | `Кандидатская` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `dissertationbooks` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `dissertationbooks[].number` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `dissertationbooks[].pages_count` | integer | `190` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list[]` | string | `миграция частиц` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `name` | string | `Исследование способов и устройств производства однородных смесей лечебных комбикормов` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].code` | string | `01.06.QU` | `oecds[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].name` | string | `MICROBIOLOGY` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].code` | string | `2.3.1` | `oesrs[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].name` | string | `Механическая инженерия` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `opponents` | array | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `opponents[].fio` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `opponents[].responsible_type` | string | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `opponents[].scientific_degree` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `opponents[].speciality_code` | string; nullable | `[обезличено]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `pages_count` | integer | `190` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `pictures_count` | integer | `45` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_date` | date (string) | `2024-02-19` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.name` | string | `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ "РОССИЙСКИЙ ГОСУДАРСТВЕННЫЙ АГРАРН…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.ogrn` | string | `1037739630697` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `protection_organization.okogu` | string | `Министерство сельского хозяйства Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.okopf` | string | `Федеральные государственные бюджетные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.short_name` | string | `` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `protection_organization.territory` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `424041200020-3` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].code` | string | `30.15.35` | `rubrics[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].name` | string | `Теория механизмов и машин` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `sources_count` | integer | `107` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `speciality_codes` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `speciality_codes[].code` | string | `4.3.1.` | `speciality_codes[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `speciality_codes[].name` | string | `Технологии, машины и оборудование для агропромышленного комплекса` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `supervisors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `supervisors[].fio` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `supervisors[].responsible_type` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `supervisors[].scientific_degree` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `supervisors[].speciality_code` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `tables_count` | integer | `32` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `transmission_to_external_antiplagiat` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `transmission_to_third_party_users` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `udk` | string | `531.8 621.01` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |


#### `nioktr` — Сведения о начинаемых научно-исследовательских работах

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "124040100065-1", "created_date": "2024-03-12", "contract_number": "056-00006-24-01"}`.

```yaml
- card_type: nioktr
  ru_name: "Сведения о начинаемых научно-исследовательских работах"
  content_type: "application/json"
  file_name_pattern: "nioktr_YYYY_MM.json | nioktr_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 1185, "2024-all_months": 15740}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Mon, 13 Jul 2026 15:54:48 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Mon, 13 Jul 2026 16:15:59 GMT"}
  fields:
    - {"name": "annotation", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Коронавирусная инфекция 2019 (COVID-19) - потенциально тяжелое острое респираторное заболевание, которое было впервые зарегистрировано в Ухане (Китай) в конце 2019 года [1]. Возбудителем заболевания является коронавирус SARS-CoV-2, относящи…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "budgets", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "budgets[].budget_type", "type": "string", "nullable": false, "enum": ["Средства федерального бюджета", "Собственные средства организаций", "Средства хозяйствующих субъектов", "Средства фондов поддержки научной и (или) научно-технической деятельности", "Средства бюджетов субъектов Российской Федерации", "Средства местных бюджетов"], "join_key": null, "example": "Средства федерального бюджета", "comment": "наблюдавшиеся значения: `Средства федерального бюджета`, `Собственные средства организаций`, `Средства хозяйствующих субъектов`, `Средства фондов поддержки научной и (или) научно-технич…`, `Средства бюджетов субъектов Российской Федерации`, `Средства местных бюджетов`"}
    - {"name": "budgets[].funds", "type": "string", "nullable": false, "enum": null, "join_key": "сумма для сверки после идентификации организации/КБК; не ключ", "example": "46985.800", "comment": "денежное значение в JSON-строке; парсить `Decimal`, не `float`"}
    - {"name": "budgets[].kbk", "type": "string", "nullable": false, "enum": null, "join_key": "КБК после нормализации; сопоставлять вместе с годом и видом показателя", "example": "056 0908 47 4 15 92062 611 12", "comment": "строка; в значениях бывают пробелы, нули и латинская `S`"}
    - {"name": "budgets[].year", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": "год для композитного ключа с КБК", "example": null, "comment": "в 2024-04 поле присутствует, но во всех наблюдениях `null`"}
    - {"name": "coexecutors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].category", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "научная организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].description", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "- экспертиза программы для ЭВМ «SADCO» (версия 10.1) в рамках переоформления аттестационного паспорта рег. № 436 от 17.04.2018, обусловленного внесением в него изменений и (или) дополнительных сведений в части проведения расчетов с использо…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФЕДЕРАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ \"НАУЧНО-ТЕХНИЧЕСКИЙ ЦЕНТР ПО ЯДЕРНОЙ И РАДИАЦИОННОЙ БЕЗОПАСНОСТИ\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1027739079499", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "coexecutors[].organization.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Федеральная служба по экологическому, технологическому и атомному надзору", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Федеральные государственные бюджетные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФБУ \"НТЦ ЯРБ\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "coexecutors[].organization.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "coexecutors[].organization.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "coexecutors[].organization.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "coexecutors[].organization.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "contract_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-03-12", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "contract_number", "type": "string", "nullable": false, "enum": null, "join_key": "только кандидат на документный матч; не доказанный номер соглашения о субсидии", "example": "056-00006-24-01", "comment": "формат произвольный; может быть `-` или номер лицензионного/иного договора"}
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-03-12", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "critical_technologies", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "critical_technologies[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Биомедицинские и ветеринарные технологии", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "critical_technologies_529", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1127746460896", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "customer.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Министерство здравоохранения Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Федеральные государственные казенные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Solancis – Sociedade Exportadora de Pedras S.A", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Solancis – Sociedade Exportadora de Pedras S.A", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "МИНЗДРАВ РОССИИ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ПОРТУГАЛИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "end_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-12-31", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Федеральное государственное бюджетное учреждение \"Национальный исследовательский центр эпидемиологии и микробиологии имени почетного академика Н.Ф.Гамалеи\" Министерства здравоохранения Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.ogrn", "type": "string", "nullable": false, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1027739443555", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "executor.okogu", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Министерство здравоохранения Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.okopf", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Федеральные государственные бюджетные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФГБУ \"НИЦЭМ им. Н.Ф.Гамалеи\" Минздрава России", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.territory", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "federal_program", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Обеспечение ядерной и радиационной безопасности на 2016 - 2020 годы и на период до 2035 года", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "federal_scientific_technical_program", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Нет", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "full_innovation_cycle_scientific_technical_program", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Нет", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "grnti_oecd_description", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "identify_executor_method", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Закупка у единственного поставщика", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "international_scientific_collaboration", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Соглашение №1 о консорциуме по реализации программы развития Центра компетенций НТИ по доверенным технологиям от 15.10.2021г.", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "interstate_target_program", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "is_ai_area", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "is_ai_usage", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "дети 6-11 лет", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai.commentary", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai.created_date", "type": "date-time (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-01T14:45:10.649507+03:00", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai.status", "type": "string", "nullable": false, "enum": ["Подтверждена"], "join_key": null, "example": "Подтверждена", "comment": "наблюдавшиеся значения: `Подтверждена`"}
    - {"name": "name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Двойное слепое плацебо-контролируемое исследование с периодом открытого подбора дозы по оценке безопасности, переносимости и иммуногенности лекарственного препарата \"Гам-КОВИД-Вак М, комбинированная векторная вакцина для профилактики корона…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "national_federal_project", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Развитие человеческого капитала в интересах регионов, отраслей и сектора исследований и разработок", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "national_technology_initiatives", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "national_technology_initiatives[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Центр компетенций НТИ “Технологии доверенного взаимодействия”", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "nioktr_bases", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Государственное задание", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "nioktr_types", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "nioktr_types[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Разработка новых материалов, научно-методических материалов, продуктов, процессов, программ, устройств, типов, элементов, услуг, систем, методов, методик, рекомендаций, предложений, прогнозов", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "03.01.TU", "comment": "код расшифровывается в строке тем же объектом `oecds[].name`"}
    - {"name": "oecds[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "PHARMACOLOGY & PHARMACY", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "3.1.3", "comment": "код расшифровывается в строке тем же объектом `oesrs[].name`"}
    - {"name": "oesrs[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Иммунология", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd.code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "72.11.11.000", "comment": "код расшифровывается в строке тем же объектом `okpd.name`"}
    - {"name": "okpd.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Услуги, связанные с научными исследованиями и экспериментальными разработками в области биотехнологии в области здоровья", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "personal_data_agreement", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "priority_directions", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "priority_directions[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Науки о жизни", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "priority_directions_529", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "ptni", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "1023102600012-2", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "124040100065-1", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "reports_number", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "76.03.55", "comment": "код расшифровывается в строке тем же объектом `rubrics[].name`"}
    - {"name": "rubrics[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Медицинская иммунология", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_centers", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_centers[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "НЦМУ «Передовые цифровые технологии»", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_educational_centers", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_educational_centers[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Западно-Сибирский межрегиональный научно-образовательный центр мирового уровня", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_groundwork", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ФГБУ «НИЦЭМ им. Н.Ф.Гамалеи» Минздрава России имеет многолетний успешный опыт разработки препаратов для профилактики и терапии инфекционных заболеваний. В ФГБУ «НИЦЭМ им.Н.Ф.Гамалеи» Минздрава России разработана технологическая платформа ре…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_technology_priorities", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_technology_priorities[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "в) переход к персонализированной медицине, высокотехнологичному здравоохранению и технологиям здоровьесбережения, в том числе за счет рационального применения лекарственных препаратов (прежде всего антибактериальных);", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "scientific_theme_code", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "PGLD-2024-0076", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].budgets", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].budgets[].budget_type", "type": "string", "nullable": false, "enum": ["Средства федерального бюджета", "Собственные средства организаций", "Средства хозяйствующих субъектов", "Средства фондов поддержки научной и (или) научно-технической деятельности", "Средства бюджетов субъектов Российской Федерации", "Средства местных бюджетов"], "join_key": null, "example": "Средства федерального бюджета", "comment": "наблюдавшиеся значения: `Средства федерального бюджета`, `Собственные средства организаций`, `Средства хозяйствующих субъектов`, `Средства фондов поддержки научной и (или) научно-технич…`, `Средства бюджетов субъектов Российской Федерации`, `Средства местных бюджетов`"}
    - {"name": "stages[].budgets[].funds", "type": "string", "nullable": false, "enum": null, "join_key": "сумма для сверки после идентификации организации/КБК; не ключ", "example": "46985.800", "comment": "денежное значение в JSON-строке; парсить `Decimal`, не `float`"}
    - {"name": "stages[].budgets[].kbk", "type": "string", "nullable": false, "enum": null, "join_key": "КБК после нормализации; сопоставлять вместе с годом и видом показателя", "example": "056 0908 47 4 15 92062 611 12", "comment": "строка; в значениях бывают пробелы, нули и латинская `S`"}
    - {"name": "stages[].budgets[].year", "type": "integer; nullable", "nullable": true, "enum": null, "join_key": "год для композитного ключа с КБК", "example": 2024, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].end_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-12-31", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "1 этап", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].start_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-01-01", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].characteristic", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Сформулированы технологическая концепция и/или применение возможных концепций для перспективных объектов", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].document", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Материалы в отчете о научно-исследовательских работах (далее – НИР)", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Второй УГТ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].result", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].result.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Проведен патентный поиск и разработаны основные технические решения по созданию пакета цифровых сервисов для автоматической проверки правильности проектных решений по цифровым системам защиты и автоматики электрических сетей 6-220 кВ с прим…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].result.organization", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].result.result_description", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Проведен обзор существующих решений в области автоматизации проверки правильности проектных решений.", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].result_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Концепция нового вещества, материала, продукта, устройства и другие", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].technology_readiness_levels[].stage", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "выбраны и описаны критические элементы технологии, необходимые для конечного применения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "start_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-01-01", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "state_program", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Развитие здравоохранения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "udk", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "616:612.017.1", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "work_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
  join_with_budget:
    - {"field": "executor.ogrn", "target": "/data-sources/federal/orgsinfo", "confidence": "high after OGRN→INN crosswalk"}
    - {"field": "stages[].budgets[].kbk + stages[].budgets[].year", "target": "/data-sources/federal/budget-gov-ru-datasets", "confidence": "medium"}
    - {"field": "contract_number", "target": "/data-sources/federal/subsidy", "confidence": "low; semantics not proven as subsidy agreement"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `annotation` | string | `Коронавирусная инфекция 2019 (COVID-19) - потенциально тяжелое острое респираторное заболевание, которое было впервые з…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `budgets` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `budgets[].budget_type` | string | `Средства федерального бюджета` | наблюдавшиеся значения: `Средства федерального бюджета`, `Собственные средства организаций`, `Средства хозяйствующих субъектов`, `Средства фондов поддержки научной и (или) научно-технич…`, `Средства бюджетов субъектов Российской Федерации`, `Средства местных бюджетов` | нет прямого бюджетного ключа в проверенной выборке |
| `budgets[].funds` | string | `46985.800` | денежное значение в JSON-строке; парсить `Decimal`, не `float` | сумма для сверки после идентификации организации/КБК; не ключ |
| `budgets[].kbk` | string | `056 0908 47 4 15 92062 611 12` | строка; в значениях бывают пробелы, нули и латинская `S` | КБК после нормализации; сопоставлять вместе с годом и видом показателя |
| `budgets[].year` | unknown (all `null` in sample); nullable | `null` | в 2024-04 поле присутствует, но во всех наблюдениях `null` | год для композитного ключа с КБК |
| `coexecutors` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].category` | string; nullable | `научная организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].description` | string | `- экспертиза программы для ЭВМ «SADCO» (версия 10.1) в рамках переоформления аттестационного паспорта рег. № 436 от 17.…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.name` | string; nullable | `ФЕДЕРАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ "НАУЧНО-ТЕХНИЧЕСКИЙ ЦЕНТР ПО ЯДЕРНОЙ И РАДИАЦИОННОЙ БЕЗОПАСНОСТИ"` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.ogrn` | string; nullable | `1027739079499` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `coexecutors[].organization.okogu` | string; nullable | `Федеральная служба по экологическому, технологическому и атомному надзору` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.okopf` | string; nullable | `Федеральные государственные бюджетные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.short_name` | string; nullable | `ФБУ "НТЦ ЯРБ"` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `coexecutors[].organization.territory` | string; nullable | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `contract_date` | date (string) | `2024-03-12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `contract_number` | string | `056-00006-24-01` | формат произвольный; может быть `-` или номер лицензионного/иного договора | только кандидат на документный матч; не доказанный номер соглашения о субсидии |
| `created_date` | date (string) | `2024-03-12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `critical_technologies` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `critical_technologies[]` | string | `Биомедицинские и ветеринарные технологии` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `critical_technologies_529` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.name` | string; nullable | `МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.ogrn` | string; nullable | `1127746460896` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `customer.okogu` | string; nullable | `Министерство здравоохранения Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.okopf` | string; nullable | `Федеральные государственные казенные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_name` | string; nullable | `Solancis – Sociedade Exportadora de Pedras S.A` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_short_name` | string; nullable | `Solancis – Sociedade Exportadora de Pedras S.A` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.short_name` | string; nullable | `МИНЗДРАВ РОССИИ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.territory` | string; nullable | `ПОРТУГАЛИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `end_date` | date (string) | `2024-12-31` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.name` | string | `Федеральное государственное бюджетное учреждение "Национальный исследовательский центр эпидемиологии и микробиологии им…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.ogrn` | string | `1027739443555` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `executor.okogu` | string | `Министерство здравоохранения Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.okopf` | string | `Федеральные государственные бюджетные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.short_name` | string; nullable | `ФГБУ "НИЦЭМ им. Н.Ф.Гамалеи" Минздрава России` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.territory` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `federal_program` | string; nullable | `Обеспечение ядерной и радиационной безопасности на 2016 - 2020 годы и на период до 2035 года` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `federal_scientific_technical_program` | string; nullable | `Нет` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `full_innovation_cycle_scientific_technical_program` | string; nullable | `Нет` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `grnti_oecd_description` | string; nullable | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `identify_executor_method` | string; nullable | `Закупка у единственного поставщика` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `international_scientific_collaboration` | string; nullable | `Соглашение №1 о консорциуме по реализации программы развития Центра компетенций НТИ по доверенным технологиям от 15.10.…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `interstate_target_program` | string; nullable | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `is_ai_area` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `is_ai_usage` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list[]` | string | `дети 6-11 лет` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.commentary` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.created_date` | date-time (string) | `2024-04-01T14:45:10.649507+03:00` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.status` | string | `Подтверждена` | наблюдавшиеся значения: `Подтверждена` | нет прямого бюджетного ключа в проверенной выборке |
| `name` | string | `Двойное слепое плацебо-контролируемое исследование с периодом открытого подбора дозы по оценке безопасности, переносимо…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `national_federal_project` | string; nullable | `Развитие человеческого капитала в интересах регионов, отраслей и сектора исследований и разработок` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `national_technology_initiatives` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `national_technology_initiatives[]` | string | `Центр компетенций НТИ “Технологии доверенного взаимодействия”` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `nioktr_bases` | string | `Государственное задание` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `nioktr_types` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `nioktr_types[]` | string | `Разработка новых материалов, научно-методических материалов, продуктов, процессов, программ, устройств, типов, элементо…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].code` | string | `03.01.TU` | `oecds[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].name` | string | `PHARMACOLOGY & PHARMACY` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].code` | string | `3.1.3` | `oesrs[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].name` | string | `Иммунология` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd` | object; nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.code` | string | `72.11.11.000` | `okpd.name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.name` | string | `Услуги, связанные с научными исследованиями и экспериментальными разработками в области биотехнологии в области здоровья` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `personal_data_agreement` | bool; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `priority_directions` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `priority_directions[]` | string | `Науки о жизни` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `priority_directions_529` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `ptni` | string; nullable | `1023102600012-2` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `124040100065-1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `reports_number` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].code` | string | `76.03.55` | `rubrics[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].name` | string | `Медицинская иммунология` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_centers` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_centers[]` | string | `НЦМУ «Передовые цифровые технологии»` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_educational_centers` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_educational_centers[]` | string | `Западно-Сибирский межрегиональный научно-образовательный центр мирового уровня` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_groundwork` | string; nullable | `ФГБУ «НИЦЭМ им. Н.Ф.Гамалеи» Минздрава России имеет многолетний успешный опыт разработки препаратов для профилактики и …` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_technology_priorities` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_technology_priorities[]` | string | `в) переход к персонализированной медицине, высокотехнологичному здравоохранению и технологиям здоровьесбережения, в том…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `scientific_theme_code` | string; nullable | `PGLD-2024-0076` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets[].budget_type` | string | `Средства федерального бюджета` | наблюдавшиеся значения: `Средства федерального бюджета`, `Собственные средства организаций`, `Средства хозяйствующих субъектов`, `Средства фондов поддержки научной и (или) научно-технич…`, `Средства бюджетов субъектов Российской Федерации`, `Средства местных бюджетов` | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets[].funds` | string | `46985.800` | денежное значение в JSON-строке; парсить `Decimal`, не `float` | сумма для сверки после идентификации организации/КБК; не ключ |
| `stages[].budgets[].kbk` | string | `056 0908 47 4 15 92062 611 12` | строка; в значениях бывают пробелы, нули и латинская `S` | КБК после нормализации; сопоставлять вместе с годом и видом показателя |
| `stages[].budgets[].year` | integer; nullable | `2024` | наблюдённый путь JSON; обязательность не объявлена оператором | год для композитного ключа с КБК |
| `stages[].end_date` | date (string) | `2024-12-31` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].name` | string | `1 этап` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].start_date` | date (string) | `2024-01-01` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].characteristic` | string | `Сформулированы технологическая концепция и/или применение возможных концепций для перспективных объектов` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].document` | string | `Материалы в отчете о научно-исследовательских работах (далее – НИР)` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].name` | string | `Второй УГТ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].result` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].result.name` | string | `Проведен патентный поиск и разработаны основные технические решения по созданию пакета цифровых сервисов для автоматиче…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].result.organization` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].result.result_description` | string | `Проведен обзор существующих решений в области автоматизации проверки правильности проектных решений.` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].result_type` | string | `Концепция нового вещества, материала, продукта, устройства и другие` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].technology_readiness_levels[].stage` | string | `выбраны и описаны критические элементы технологии, необходимые для конечного применения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `start_date` | date (string) | `2024-01-01` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `state_program` | string; nullable | `Развитие здравоохранения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `udk` | string | `616:612.017.1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rank` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |


#### `ikrbs` — Сведения о результатах научно-исследовательских работ

Безопасный фрагмент реально наблюдённой первой карточки: `{"registration_number": "224040900015-7", "created_date": "2024-03-12", "approve_date": "2024-02-15", "stage_start_date": "2023-02-16", "stage_end_date": "2024-02-15"}`.

```yaml
- card_type: ikrbs
  ru_name: "Сведения о результатах научно-исследовательских работ"
  content_type: "application/json"
  file_name_pattern: "ikrbs_YYYY_MM.json | ikrbs_YYYY_all_months.json"
  encoding: "utf-8 (BOM не наблюдался)"
  delimiter: null
  json_root: "cards (array)"
  row_count_est: {"2024-04": 995, "2024-all_months": 21090}
  http_2024_04: {status: 200, transfer_encoding: "chunked", last_modified: "Fri, 10 Jul 2026 20:33:36 GMT"}
  http_2024_all_months: {status: 200, transfer_encoding: "chunked", last_modified: "Mon, 13 Jul 2026 08:42:34 GMT"}
  fields:
    - {"name": "abstract", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Цель исследования: оценить эффективность применения неинвазивного пренатального тестирования (НИПТ) в качестве массового скрининга на основе данных молекулярно-генетических исследований и исходов беременностей, а также оценить информированн…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "access_to_cyber", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "access_to_neb", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "applications_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 0, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "approve_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-02-15", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].degree", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].description", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "authors[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].position", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "authors[].rank", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "authors[].wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "bibliography", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "81", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "books_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "budgets", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "budgets[].budget_type", "type": "string", "nullable": false, "enum": ["Средства бюджетов субъектов Российской Федерации", "Средства фондов поддержки научной и (или) научно-технической деятельности", "Собственные средства организаций", "Средства федерального бюджета", "Средства хозяйствующих субъектов", "Средства местных бюджетов"], "join_key": null, "example": "Средства бюджетов субъектов Российской Федерации", "comment": "наблюдавшиеся значения: `Средства бюджетов субъектов Российской Федерации`, `Средства фондов поддержки научной и (или) научно-технич…`, `Собственные средства организаций`, `Средства федерального бюджета`, `Средства хозяйствующих субъектов`, `Средства местных бюджетов`"}
    - {"name": "budgets[].funds", "type": "string", "nullable": false, "enum": null, "join_key": "сумма для сверки после идентификации организации/КБК; не ключ", "example": "95100.000", "comment": "денежное значение в JSON-строке; парсить `Decimal`, не `float`"}
    - {"name": "budgets[].kbk", "type": "string", "nullable": false, "enum": null, "join_key": "КБК после нормализации; сопоставлять вместе с годом и видом показателя", "example": "82404111430461580630", "comment": "строка; в значениях бывают пробелы, нули и латинская `S`"}
    - {"name": "created_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-03-12", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "critical_technologies_529", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ДЕПАРТАМЕНТ ВНЕШНИХ СВЯЗЕЙ ЯМАЛО-НЕНЕЦКОГО АВТОНОМНОГО ОКРУГА", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.ogrn", "type": "string; nullable", "nullable": true, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1058900021256", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "customer.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Органы исполнительной власти субъектов Российской Федерации, осуществляющие другие функции", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.okopf", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Государственные казенные учреждения субъектов Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.short_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "ДЕПАРТАМЕНТ ВНЕШНИХ СВЯЗЕЙ ЯНАО", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "customer.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "customer.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "РОССИЯ", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "НЕКОММЕРЧЕСКОЕ ПАРТНЕРСТВО \"РОССИЙСКИЙ ЦЕНТР ОСВОЕНИЯ АРКТИКИ\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.ogrn", "type": "string", "nullable": false, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1148900000314", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "executor.okogu", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.okopf", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Некоммерческие партнерства", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.short_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "НП \"ЦЕНТР ОСВОЕНИЯ АРКТИКИ\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "executor.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "executor.territory", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "expected_results", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "По результатам научного исследования сделаны следующие выводы:\n1. Проведено 3170 НИПТ, сформировано и выдано 3170 заключений \n3124 беременным женщинам, состоящим на учете по беременности в медицинских организациях ЯНАО, из них:  \n93 образца…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "experimental_developments", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "experimental_developments[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Технология оценки дозы рентгеновского излучения, поглощенной белковым кристаллом во время рентгеноструктурного эксперимента", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "experimental_developments[].scientific_technical_result", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Протоколы испытаний", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "experimental_developments[].success_level", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "70%", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "grnti_oecd_description", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Результаты НИР возможно использовать для повышения качества оказания медицинской помощи по профилю «акушерство и гинекология» за счет внедрения в систему оказания медицинской помощи современных молекулярно-генетических исследований – неинва…", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "has_commercial_secret", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "ikrbsbooks", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "ikrbsbooks[].number", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "ikrbsbooks[].pages_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 93, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "is_ai_area", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "is_ai_usage", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "keyword_list[]", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "предтестовое анкетирование", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai.commentary", "type": "string; nullable", "nullable": true, "enum": ["Загружено из РАН", "Прошу доработать."], "join_key": null, "example": "Загружено из РАН", "comment": "наблюдавшиеся значения: `Загружено из РАН`, `Прошу доработать.`"}
    - {"name": "last_status_ai.created_date", "type": "date-time (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-04-09T11:08:36.857006+03:00", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "last_status_ai.status", "type": "string", "nullable": false, "enum": ["Подтверждена", "Черновик", "Отправлено в ГРБС (Работа завершена)", "Согласовано ВИНИТИ", "Отправлено в ГРБС (Положительное заключение)", "Возвращено в НОО"], "join_key": null, "example": "Подтверждена", "comment": "наблюдавшиеся значения: `Подтверждена`, `Черновик`, `Отправлено в ГРБС (Работа завершена)`, `Согласовано ВИНИТИ`, `Отправлено в ГРБС (Положительное заключение)`, `Возвращено в НОО`"}
    - {"name": "license_conditions", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "license_expiration", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "2024-03-31", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "\"Оценка эффективности неинвазивного пренатального тестирования в Ямало-Ненецком автономном округе в качестве массового скрининга на основе данных тестирования, анкетирования беременных женщин и исходов беременностей\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "nioktr", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "123030900093-8", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oecds[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "01.06.KM", "comment": "код расшифровывается в строке тем же объектом `oecds[].name`"}
    - {"name": "oecds[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "GENETICS & HEREDITY", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "oesrs[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "3.1.2", "comment": "код расшифровывается в строке тем же объектом `oesrs[].name`"}
    - {"name": "oesrs[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Генетика человека", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "okpd.code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "86.90.15.000", "comment": "код расшифровывается в строке тем же объектом `okpd.name`"}
    - {"name": "okpd.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Услуги медицинских лабораторий", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "organization_supervisor", "type": "object; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.degree", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.orcid", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rank", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.rinc_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.scopus_author_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.territory", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.url", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "organization_supervisor.wos_research_id", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "pages_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 93, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "pictures_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 8, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "prepared_analytics_materials[].description", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Влияние способа возбуждения плазменной антенны на спектральные характеристики излучаемого сигнала", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ НАУКИ ФЕДЕРАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР \"ИНСТИТУТ ОБЩЕЙ ФИЗИКИ ИМ. А.М. ПРОХОРОВА РОССИЙСКОЙ АКАДЕМИИ НАУК\"", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.ogrn", "type": "string", "nullable": false, "enum": null, "join_key": "ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр", "example": "1027700378595", "comment": "ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует"}
    - {"name": "prepared_analytics_materials[].organization.okogu", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "Министерство науки и высшего образования Российской Федерации", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.okopf", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Федеральные государственные бюджетные учреждения", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.organization_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Организация", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.original_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.original_short_name", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.short_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].organization.supervisor_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "prepared_analytics_materials[].organization.supervisor_patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "prepared_analytics_materials[].organization.supervisor_surname", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "prepared_analytics_materials[].organization.territory", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "prepared_analytics_materials[].year", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "2023-04-05", "comment": "название вводит в заблуждение: в выборке фактически строки дат `YYYY-MM-DD`"}
    - {"name": "preprints", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "preprints[].edition_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "материалы конференции (съезда, симпозиума)", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].identificator", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].identificator_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "-", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Лишайники архипелага Земля Франца-Иосифа: история изучения и современное состояние лихенобиоты, особенности экологии и распространения отдельных видов", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].preparation_status", "type": "string", "nullable": false, "enum": ["Направлен в журнал", "Готовится", "Размещён в репозитории"], "join_key": null, "example": "Направлен в журнал", "comment": "наблюдавшиеся значения: `Направлен в журнал`, `Готовится`, `Размещён в репозитории`"}
    - {"name": "preprints[].repository_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Земля Франца-Иосифа: 150 лет исследований. Сборник трудов юбилейной конференции", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "preprints[].url", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "https://www.rus-arc.ru/magazine/konferentsiya-k-150-letiyu-otkrytiya-zemli-frantsa-iosifa/", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "priority_directions_529", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publication_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 0, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "publications[].authors[].affiliation", "type": "unknown (all `null` in sample); nullable", "nullable": true, "enum": null, "join_key": null, "example": null, "comment": "значения в документации обезличены"}
    - {"name": "publications[].authors[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "publications[].authors[].patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "publications[].authors[].surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "publications[].bibliographic_link", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Осмоловский М.Г. \"Magnetite core and ZnO shell – What is in between and how does it affect on nanoparticles properties?\" // Applied Surface Science, Volume 641, 158530", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].edition_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Applied Surface Science", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].edition_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "статья", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].identificators", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].identificators[].identificator", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "10.1016/j.apsusc.2023.158530", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].identificators[].identificator_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "DOI", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].megascience_object_name", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].publication_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2023-03-19", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "publications[].publication_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Magnetite core and ZnO shell – What is in between and how does it affect on nanoparticles properties?", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "ran_conclusion_date", "type": "date (string); nullable", "nullable": true, "enum": null, "join_key": null, "example": "2022-06-03", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "registration_number", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "224040900015-7", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "report_license_type", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "безвозмездной лицензии", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "report_type", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Заключительный", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "results", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "rubrics[].code", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "34.15.23", "comment": "код расшифровывается в строке тем же объектом `rubrics[].name`"}
    - {"name": "rubrics[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Молекулярная генетика", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stage_end_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2024-02-15", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stage_number", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 1, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stage_start_date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2023-02-16", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].budgets", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "—", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "stages[].budgets[].budget_type", "type": "string", "nullable": false, "enum": ["Средства бюджетов субъектов Российской Федерации", "Средства фондов поддержки научной и (или) научно-технической деятельности", "Собственные средства организаций", "Средства федерального бюджета", "Средства хозяйствующих субъектов"], "join_key": null, "example": "Средства бюджетов субъектов Российской Федерации", "comment": "наблюдавшиеся значения: `Средства бюджетов субъектов Российской Федерации`, `Средства фондов поддержки научной и (или) научно-технич…`, `Собственные средства организаций`, `Средства федерального бюджета`, `Средства хозяйствующих субъектов`"}
    - {"name": "stages[].budgets[].funds", "type": "string", "nullable": false, "enum": null, "join_key": "сумма для сверки после идентификации организации/КБК; не ключ", "example": "0.000", "comment": "денежное значение в JSON-строке; парсить `Decimal`, не `float`"}
    - {"name": "stages[].budgets[].kbk", "type": "string", "nullable": false, "enum": null, "join_key": "КБК после нормализации; сопоставлять вместе с годом и видом показателя", "example": "82404111430461580630", "comment": "строка; в значениях бывают пробелы, нули и латинская `S`"}
    - {"name": "stages[].year", "type": "integer", "nullable": false, "enum": null, "join_key": "год для композитного ключа с КБК", "example": 2024, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "tables_count", "type": "integer", "nullable": false, "enum": null, "join_key": null, "example": 12, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": [], "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].authors", "type": "array", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "thematic_reports[].authors[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "thematic_reports[].authors[].patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "thematic_reports[].authors[].surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "thematic_reports[].conference_name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "XIII Конференция молодых учёных по общей и неорганической химии", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].conference_status", "type": "string", "nullable": false, "enum": ["Всероссийская", "Международная", "Региональная", "Локальная"], "join_key": null, "example": "Всероссийская", "comment": "наблюдавшиеся значения: `Всероссийская`, `Международная`, `Региональная`, `Локальная`"}
    - {"name": "thematic_reports[].date", "type": "date (string)", "nullable": false, "enum": null, "join_key": null, "example": "2023-04-07", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Влияние оболочки на основе оксида цинка на магнитные свойства и МРТ-сигнал стабилизированных наночастиц магнетита состава Fe3O4@ZnO", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].place", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Российская Федерация, г. Москва", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].reporter", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "Осмоловский М.Г., Желтова Виктория Витальевна", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "thematic_reports[].thematic_report_status", "type": "string", "nullable": false, "enum": ["Секционный", "Стендовый", "Пленарный"], "join_key": null, "example": "Секционный", "comment": "наблюдавшиеся значения: `Секционный`, `Стендовый`, `Пленарный`"}
    - {"name": "thematic_reports[].url", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "http://www.igic.ras.ru/docs/council_young_scientists/programma_xiii_konf_smu_2023.pdf", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "transmission_to_external_antiplagiat", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "transmission_to_third_party_users", "type": "bool; nullable", "nullable": true, "enum": null, "join_key": null, "example": false, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "udk", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "577.21", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "with_report", "type": "bool", "nullable": false, "enum": null, "join_key": null, "example": true, "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "work_supervisor", "type": "object", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.degree", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.name", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.orcid", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.patronymic", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.position", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rank", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.rinc_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.scopus_author_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.surname", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.territory", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.url", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "work_supervisor.wos_research_id", "type": "string; nullable", "nullable": true, "enum": null, "join_key": null, "example": "[обезличено]", "comment": "значения в документации обезличены"}
    - {"name": "workers_accessories", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "0.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "workers_others", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "1.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "workers_researches", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "10.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "workers_teachings", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "0.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "workers_technitians", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "0.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
    - {"name": "workers_total", "type": "string", "nullable": false, "enum": null, "join_key": null, "example": "11.000", "comment": "наблюдённый путь JSON; обязательность не объявлена оператором"}
  join_with_budget:
    - {"field": "executor.ogrn", "target": "/data-sources/federal/orgsinfo", "confidence": "high after OGRN→INN crosswalk"}
    - {"field": "stages[].budgets[].kbk + stages[].year", "target": "/data-sources/federal/budget-gov-ru-datasets", "confidence": "medium"}
```

| Поле | Тип | Пример значения | Расшифровка / словарь | Ключ для join? |
| --- | --- | --- | --- | --- |
| `abstract` | string | `Цель исследования: оценить эффективность применения неинвазивного пренатального тестирования (НИПТ) в качестве массовог…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `access_to_cyber` | bool; nullable | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `access_to_neb` | bool; nullable | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `applications_count` | integer | `0` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `approve_date` | date (string) | `2024-02-15` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].degree` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].description` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].position` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].rank` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `authors[].wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `bibliography` | string | `81` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `books_count` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `budgets` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `budgets[].budget_type` | string | `Средства бюджетов субъектов Российской Федерации` | наблюдавшиеся значения: `Средства бюджетов субъектов Российской Федерации`, `Средства фондов поддержки научной и (или) научно-технич…`, `Собственные средства организаций`, `Средства федерального бюджета`, `Средства хозяйствующих субъектов`, `Средства местных бюджетов` | нет прямого бюджетного ключа в проверенной выборке |
| `budgets[].funds` | string | `95100.000` | денежное значение в JSON-строке; парсить `Decimal`, не `float` | сумма для сверки после идентификации организации/КБК; не ключ |
| `budgets[].kbk` | string | `82404111430461580630` | строка; в значениях бывают пробелы, нули и латинская `S` | КБК после нормализации; сопоставлять вместе с годом и видом показателя |
| `created_date` | date (string) | `2024-03-12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `critical_technologies_529` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.name` | string; nullable | `ДЕПАРТАМЕНТ ВНЕШНИХ СВЯЗЕЙ ЯМАЛО-НЕНЕЦКОГО АВТОНОМНОГО ОКРУГА` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.ogrn` | string; nullable | `1058900021256` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `customer.okogu` | string; nullable | `Органы исполнительной власти субъектов Российской Федерации, осуществляющие другие функции` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.okopf` | string; nullable | `Государственные казенные учреждения субъектов Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.short_name` | string; nullable | `ДЕПАРТАМЕНТ ВНЕШНИХ СВЯЗЕЙ ЯНАО` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `customer.territory` | string; nullable | `РОССИЯ` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.name` | string | `НЕКОММЕРЧЕСКОЕ ПАРТНЕРСТВО "РОССИЙСКИЙ ЦЕНТР ОСВОЕНИЯ АРКТИКИ"` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.ogrn` | string | `1148900000314` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `executor.okogu` | string | `Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.okopf` | string | `Некоммерческие партнерства` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.short_name` | string | `НП "ЦЕНТР ОСВОЕНИЯ АРКТИКИ"` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `executor.territory` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `expected_results` | string | `По результатам научного исследования сделаны следующие выводы: 1. Проведено 3170 НИПТ, сформировано и выдано 3170 заклю…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `experimental_developments` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `experimental_developments[].name` | string | `Технология оценки дозы рентгеновского излучения, поглощенной белковым кристаллом во время рентгеноструктурного эксперим…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `experimental_developments[].scientific_technical_result` | string | `Протоколы испытаний` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `experimental_developments[].success_level` | string | `70%` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `grnti_oecd_description` | string; nullable | `Результаты НИР возможно использовать для повышения качества оказания медицинской помощи по профилю «акушерство и гинеко…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `has_commercial_secret` | bool | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `ikrbsbooks` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `ikrbsbooks[].number` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `ikrbsbooks[].pages_count` | integer | `93` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `is_ai_area` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `is_ai_usage` | bool | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `keyword_list[]` | string | `предтестовое анкетирование` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.commentary` | string; nullable | `Загружено из РАН` | наблюдавшиеся значения: `Загружено из РАН`, `Прошу доработать.` | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.created_date` | date-time (string) | `2024-04-09T11:08:36.857006+03:00` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `last_status_ai.status` | string | `Подтверждена` | наблюдавшиеся значения: `Подтверждена`, `Черновик`, `Отправлено в ГРБС (Работа завершена)`, `Согласовано ВИНИТИ`, `Отправлено в ГРБС (Положительное заключение)`, `Возвращено в НОО` | нет прямого бюджетного ключа в проверенной выборке |
| `license_conditions` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `license_expiration` | string; nullable | `2024-03-31` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `name` | string | `"Оценка эффективности неинвазивного пренатального тестирования в Ямало-Ненецком автономном округе в качестве массового …` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `nioktr` | string | `123030900093-8` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].code` | string | `01.06.KM` | `oecds[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oecds[].name` | string | `GENETICS & HEREDITY` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].code` | string | `3.1.2` | `oesrs[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `oesrs[].name` | string | `Генетика человека` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd` | object; nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.code` | string | `86.90.15.000` | `okpd.name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `okpd.name` | string | `Услуги медицинских лабораторий` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor` | object; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.degree` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.orcid` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rank` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.rinc_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.scopus_author_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.territory` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.url` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `organization_supervisor.wos_research_id` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `pages_count` | integer | `93` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `pictures_count` | integer | `8` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].description` | string | `Влияние способа возбуждения плазменной антенны на спектральные характеристики излучаемого сигнала` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization` | object | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.name` | string | `ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ НАУКИ ФЕДЕРАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР "ИНСТИТУТ ОБЩЕЙ ФИЗИКИ ИМ. А…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.ogrn` | string | `1027700378595` | ОГРН отдан строкой; поле `inn` в проверенном месячном файле отсутствует | ОГРН → реестр участников/ЕГРЮЛ → ИНН; затем бюджетный реестр |
| `prepared_analytics_materials[].organization.okogu` | string; nullable | `Министерство науки и высшего образования Российской Федерации` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.okopf` | string | `Федеральные государственные бюджетные учреждения` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.organization_type` | string | `Организация` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.original_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.original_short_name` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.short_name` | string | `` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.supervisor_name` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.supervisor_patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.supervisor_surname` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].organization.territory` | unknown (all `null` in sample); nullable | `null` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `prepared_analytics_materials[].year` | string | `2023-04-05` | название вводит в заблуждение: в выборке фактически строки дат `YYYY-MM-DD` | нет прямого бюджетного ключа в проверенной выборке |
| `preprints` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].edition_type` | string | `материалы конференции (съезда, симпозиума)` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].identificator` | string | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].identificator_name` | string | `-` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].name` | string | `Лишайники архипелага Земля Франца-Иосифа: история изучения и современное состояние лихенобиоты, особенности экологии и …` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].preparation_status` | string | `Направлен в журнал` | наблюдавшиеся значения: `Направлен в журнал`, `Готовится`, `Размещён в репозитории` | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].repository_name` | string | `Земля Франца-Иосифа: 150 лет исследований. Сборник трудов юбилейной конференции` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `preprints[].url` | string | `https://www.rus-arc.ru/magazine/konferentsiya-k-150-letiyu-otkrytiya-zemli-frantsa-iosifa/` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `priority_directions_529` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publication_count` | integer | `0` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].authors[].affiliation` | unknown (all `null` in sample); nullable | `null` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].authors[].name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].authors[].patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].authors[].surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].bibliographic_link` | string | `Осмоловский М.Г. "Magnetite core and ZnO shell – What is in between and how does it affect on nanoparticles properties?…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].edition_name` | string | `Applied Surface Science` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].edition_type` | string | `статья` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].identificators` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].identificators[].identificator` | string | `10.1016/j.apsusc.2023.158530` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].identificators[].identificator_type` | string | `DOI` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].megascience_object_name` | string; nullable | `` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].publication_date` | date (string) | `2023-03-19` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `publications[].publication_name` | string | `Magnetite core and ZnO shell – What is in between and how does it affect on nanoparticles properties?` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `ran_conclusion_date` | date (string); nullable | `2022-06-03` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `registration_number` | string | `224040900015-7` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `report_license_type` | string; nullable | `безвозмездной лицензии` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `report_type` | string | `Заключительный` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `results` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].code` | string | `34.15.23` | `rubrics[].name` в том же объекте | нет прямого бюджетного ключа в проверенной выборке |
| `rubrics[].name` | string | `Молекулярная генетика` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stage_end_date` | date (string) | `2024-02-15` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stage_number` | integer | `1` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stage_start_date` | date (string) | `2023-02-16` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets` | array | `—` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets[].budget_type` | string | `Средства бюджетов субъектов Российской Федерации` | наблюдавшиеся значения: `Средства бюджетов субъектов Российской Федерации`, `Средства фондов поддержки научной и (или) научно-технич…`, `Собственные средства организаций`, `Средства федерального бюджета`, `Средства хозяйствующих субъектов` | нет прямого бюджетного ключа в проверенной выборке |
| `stages[].budgets[].funds` | string | `0.000` | денежное значение в JSON-строке; парсить `Decimal`, не `float` | сумма для сверки после идентификации организации/КБК; не ключ |
| `stages[].budgets[].kbk` | string | `82404111430461580630` | строка; в значениях бывают пробелы, нули и латинская `S` | КБК после нормализации; сопоставлять вместе с годом и видом показателя |
| `stages[].year` | integer | `2024` | наблюдённый путь JSON; обязательность не объявлена оператором | год для композитного ключа с КБК |
| `tables_count` | integer | `12` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports` | array | `[]` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].authors` | array | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].authors[].name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].authors[].patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].authors[].surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].conference_name` | string | `XIII Конференция молодых учёных по общей и неорганической химии` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].conference_status` | string | `Всероссийская` | наблюдавшиеся значения: `Всероссийская`, `Международная`, `Региональная`, `Локальная` | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].date` | date (string) | `2023-04-07` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].name` | string | `Влияние оболочки на основе оксида цинка на магнитные свойства и МРТ-сигнал стабилизированных наночастиц магнетита соста…` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].place` | string | `Российская Федерация, г. Москва` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].reporter` | string | `Осмоловский М.Г., Желтова Виктория Витальевна` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].thematic_report_status` | string | `Секционный` | наблюдавшиеся значения: `Секционный`, `Стендовый`, `Пленарный` | нет прямого бюджетного ключа в проверенной выборке |
| `thematic_reports[].url` | string | `http://www.igic.ras.ru/docs/council_young_scientists/programma_xiii_konf_smu_2023.pdf` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `transmission_to_external_antiplagiat` | bool; nullable | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `transmission_to_third_party_users` | bool; nullable | `false` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `udk` | string | `577.21` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `with_report` | bool | `true` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor` | object | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.degree` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.name` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.orcid` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.patronymic` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.position` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rank` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.rinc_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.scopus_author_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.surname` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.territory` | string | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.url` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `work_supervisor.wos_research_id` | string; nullable | `[обезличено]` | значения в документации обезличены | нет прямого бюджетного ключа в проверенной выборке |
| `workers_accessories` | string | `0.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `workers_others` | string | `1.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `workers_researches` | string | `10.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `workers_teachings` | string | `0.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `workers_technitians` | string | `0.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |
| `workers_total` | string | `11.000` | наблюдённый путь JSON; обязательность не объявлена оператором | нет прямого бюджетного ключа в проверенной выборке |


### 3. Сниппеты парсинга

В ответах снимка встречается только JSON; CSV, XML и XLSX для `open-data` не наблюдались, поэтому непроверенные сниппеты для них здесь намеренно не приводятся.

```python
# Python 3.11+; только стандартная библиотека.
from pathlib import Path
import json

def load_open_data(path: str | Path) -> list[dict]:
    # utf-8-sig безопасно прочитает и обычный UTF-8, и возможный BOM.
    payload = json.loads(Path(path).read_text(encoding="utf-8-sig"))
    if not isinstance(payload, dict) or not isinstance(payload.get("cards"), list):
        raise ValueError("Expected JSON object with cards[]")
    return payload["cards"]

cards = load_open_data("nioktr_2024_04.json")
print(len(cards), cards[0]["registration_number"])
```

```python
# Optional dependency: pandas. Identifiers stay strings; nested arrays stay lists.
import pandas as pd

flat = pd.json_normalize(cards, sep=".")
for field in ("registration_number", "contract_number", "executor.ogrn", "customer.ogrn"):
    if field in flat:
        flat[field] = flat[field].astype("string").str.strip().replace("", pd.NA)
# Do not use pd.to_numeric for OGRN, KБК or contract_number.
```

Для множественных значений не склеивайте элементы в одну ячейку: нормализуйте каждый вложенный массив в отдельную таблицу с `registration_number` родительской карточки.

### 4. Пример join с бюджетом

В файлах `2024-04` **нет** поля `inn` и нет поля, названного номером соглашения о субсидии. Поэтому первый шаг — получить ИНН по ОГРН через [реестр участников бюджетного процесса](/data-sources/federal/orgsinfo); второй — соединять нормализованные строки НИОКТР с выгрузкой [реестра соглашений](/data-sources/federal/subsidy) или наборами [ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets). Ниже `agreements_normalized.csv` — **стейджинг**, в котором реальные заголовки текущей выгрузки уже приведены к четырём явно указанным псевдонимам; сырые заголовки здесь не выдумываются, так как паспорт версии набора их не фиксирует.

```python
from decimal import Decimal
import pandas as pd

def norm_id(value):
    if value is None or pd.isna(value):
        return pd.NA
    value = str(value).strip()
    return value if value else pd.NA

def norm_kbk(value):
    value = norm_id(value)
    return value if pd.isna(value) else "".join(str(value).split()).upper()

# cards = load_open_data("nioktr_2024_04.json")
science_rows = []
for card in cards:
    for stage in card.get("stages") or []:
        for budget in stage.get("budgets") or []:
            science_rows.append({
                "registration_number": card.get("registration_number"),
                "contract_number": card.get("contract_number"),
                "executor_ogrn": (card.get("executor") or {}).get("ogrn"),
                "budget_year": stage.get("year") or budget.get("year"),
                "kbk": budget.get("kbk"),
                "funds": budget.get("funds"),
            })
science = pd.DataFrame(science_rows)
science["executor_ogrn"] = science["executor_ogrn"].map(norm_id).astype("string")
science["kbk"] = science["kbk"].map(norm_kbk).astype("string")
science["budget_year"] = pd.to_numeric(science["budget_year"], errors="coerce").astype("Int64")
science["funds_decimal"] = science["funds"].map(lambda x: Decimal(str(x)) if pd.notna(x) and str(x).strip() else None)

# ОГРН→ИНН — обязательный bridge, а не numeric cast.
participants = pd.read_csv("participants_ogrn_inn.csv", dtype={"ogrn": "string", "inn": "string"})
participants["ogrn"] = participants["ogrn"].map(norm_id).astype("string")
science = science.merge(participants[["ogrn", "inn"]], how="left", left_on="executor_ogrn", right_on="ogrn", validate="m:1")

# Нормализованная выгрузка 7710568760-REGISTAGREEMENT:
# recipient_inn, recipient_ogrn, kbk, agreement_year, agreement_number.
agreements = pd.read_csv(
    "agreements_normalized.csv",
    dtype={"recipient_inn": "string", "recipient_ogrn": "string", "kbk": "string", "agreement_number": "string"},
)
for column in ("recipient_inn", "recipient_ogrn", "agreement_number"):
    agreements[column] = agreements[column].map(norm_id).astype("string")
agreements["kbk"] = agreements["kbk"].map(norm_kbk).astype("string")
agreements["agreement_year"] = pd.to_numeric(agreements["agreement_year"], errors="coerce").astype("Int64")

matched = science.merge(
    agreements, how="left",
    left_on=["inn", "kbk", "budget_year"],
    right_on=["recipient_inn", "kbk", "agreement_year"],
    suffixes=("_science", "_agreement"),
)
# A match means a candidate budget relationship, not proof that funds == payment.
```

Семантика результата: строка `matched` связывает научную карточку с **кандидатной** строкой бюджетного соглашения по получателю, КБК и году. Проверяйте номер и дату документа, вид соглашения и сумму отдельно; `funds` в ГИС «Наука» не доказанно равен сумме соглашения или кассовому платежу.

### 5. Ловушки и нулевые/спорные поля

- Идентификаторы и коды — строки: `registration_number`, ОГРН, КБК и `contract_number`. У КБК наблюдаются разделители-пробелы, последовательности нулей и латинская `S`; нормализуйте только для технического ключа, исходное значение храните отдельно.
- `nioktr.budgets[].funds`, `nioktr.stages[].budgets[].funds`, `ikrbs.budgets[].funds` и `ikrbs.stages[].budgets[].funds` — **строки с десятичной точкой**, а не JSON-числа. Используйте `Decimal`.
- `nioktr.budgets[].year` в полном месячном файле состоит только из `null`; рабочий год чаще есть в `stages[].budgets[].year`. У `ikrbs.prepared_analytics_materials[].year` наблюдались даты, хотя имя поля говорит о годе.
- `contract_number` — не синоним номера соглашения о субсидии: среди наблюдений есть `-` и номера лицензионных/иных договоров. Используйте лишь как дополнительную проверку после организации, КБК и периода.
- Разделы с массивами (`budgets`, `stages`, `executors`, классификаторы, публикации и т.п.) нельзя превращать в одну CSV-ячейку без отдельной дочерней таблицы.
- Все ответы пришли без `Content-Length`, потоково (`Transfer-Encoding: chunked`); планируйте загрузку по потоку и хешируйте во время записи. Годовой `ikrbs` занял 898,051,248 байт.
- Для первого элемента каждого `cards[]` месячного и годового файлов набор верхнеуровневых ключей совпал; это **не доказывает** отсутствия различий в редких вложенных полях или дубликатов между периодами.
- `Last-Modified` файлов 2024 года лежит в мае–июле 2026 года: оператор может пересобирать исторические тела. URL не является неизменяемой версией — сохраняйте SHA-256.

### 6. Что не удалось проверить

- Публичный API и страница не отдают номер версии интерфейса или формальную спецификацию полей/обязательности; это требует подтверждения оператором.
- Полный годовой union всех редких вложенных путей не сопоставлялся с месячным union: подтверждены валидность JSON, число карточек и совпадение верхнеуровневых ключей первой записи, но не обещается отсутствие редких различий.
- В файлах нет опубликованного отдельного справочника кодов статусов РИД/видов работ. Когда код и подпись лежат в одном объекте, это отражено в таблицах как пара `code` → `name`; для остальных кодов внешнюю расшифровку нельзя приписывать без отдельного набора.
- Не получена и не зафиксирована конкретная версия выгрузки `7710568760-REGISTAGREEMENT`; поэтому сырые названия её колонок не объявляются контрактом этой карточки. В коде использован только явный нормализованный стейджинг.

## Периодичность обновления

Задаётся **моментом генерации** для файлов, собранных через **«Сформировать выгрузку»** и ответов **`/api/egisu/open-data`**, и политикой обновления данных в ответах **API** поиска и интерфейсе; единого регламента для «всех таблиц ГИС „Наука“» нет. Фиксируйте **дату снимка** и параметры, с которыми получена выгрузка.

## Ограничения и особенности

- **Фрагментарность связи «НИОКТР — рубль бюджета»**: не каждая строка научного реестра содержит сумму; доводите до исполнения через **[ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)**.
- **`open-data` и завершённые периоды:** выгрузка за **текущий** календарный месяц и годовой срез с `month=all_months` за **ещё не закончившийся** год могут быть **недоступны** до закрытия периода (см. **[how-to](/howto/access/gisnauka)**).
- **`/api/egisu/base/search`** — внутренний эндпоинт без опубликованной спецификации; при автоматизации копируйте **полный** HTTP-запрос из DevTools со страницы [глобального поиска](https://gisnauka.ru/global-search) и закладывайте поломку при обновлении фронтенда.
- Автоматический доступ к **корню gisnauka.ru** из скриптов может блокироваться из‑за **TLS** или политики сайта; для конвейеров предпочитайте **`open-data`** с валидной цепочкой доверия или **стабильные файлы** после **«Сформировать выгрузку»**.

## Примеры доступа

Проверка доступности страницы глобального поиска (диагностика сети):

```bash
curl -sS -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" "https://gisnauka.ru/global-search"
```

Ожидаемый признак успеха — код **200** (при доступности хоста и маршрута на дату проверки).

Проверка, что хост API отвечает (без воспроизведения полного поискового запроса — параметры и метод снимайте из браузера):

```bash
curl -sS -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" "https://gisnauka.ru/api/egisu/base/search"
```

Без тел запроса, как в интерфейсе [глобального поиска](https://gisnauka.ru/global-search), ответ часто будет **405** или **400**; рабочий вызов повторяйте из вкладки **Network**.

Пример **открытой** выгрузки (завершённый месяц; в проверенном срезе ответ — JSON):

```bash
curl -sS -L -o "ikrbs_2024_04.json" \
  -A "Mozilla/5.0 (compatible; finguide-recon/1.0)" \
  "https://gisnauka.ru/api/egisu/open-data?year=2024&month=04&card_type=ikrbs"
```

Прямая ссылка вида `https://gisnauka.ru/api/egisu/open-data?year=2026&month=04&card_type=ikrbs` (апрель **2026**) станет содержательной только **после** завершения этого месяца и при политике публикации оператора.

## Связанные страницы wiki

- **[Доступ к данным ГИС «Наука» (how-to)](/howto/access/gisnauka)** — параметры `open-data`, типы `card_type`, ограничения по периодам.
- **[ГИС «Наука» (gisnauka.ru)](/information-systems/federal/gisnauka)** — информационная система и границы контура.
- **[Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets)** — субсидии, соглашения и исполнение для склейки с организациями из научных реестров.
- **[Соглашения (субсидии и субвенции)](/data-sources/federal/subsidy)** — реестр соглашений и типичная семантика полей.
- **[Реестр участников бюджетного процесса](/data-sources/federal/orgsinfo)** — bridge ОГРН→ИНН между карточкой науки и бюджетным контуром.
- **[Единая площадка мер финансовой поддержки](/data-sources/federal/promote-budget-gov-ru)** — контекст отборов на меры поддержки из бюджета (не замена учёта исполнения).
- **[Гранты](/glossary/grants)** — как отличить грантовый контур от субсидий при интерпретации сумм.

## Не путать с

- **[Открытые данные bus.gov.ru](/data-sources/federal/bus-opendata)** — уровень **конкретного учреждения** (ФХД, показатели деятельности); дополняет, но не подменяет реестры НИОКТР на уровне Минобрнауки.
