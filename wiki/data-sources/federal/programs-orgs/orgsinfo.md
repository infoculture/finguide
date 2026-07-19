---
title: >-
  Сведения о государственных и муниципальных организациях (реестр участников
  бюджетного процесса)
sidebar_label: Участники БП и организации
tags:
  - data-source
  - federal
  - budget
last_updated: 2026-07-19T00:00:00.000Z
last_verified: 2026-07-19
slug: /data-sources/federal/orgsinfo
source_url: >-
  https://budget.gov.ru/бюджет/расходы/реестр-участников-и-неучастников-бюджетного-процесса
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - html
  - json
status: current
related_information_system: /information-systems/federal/giis-eb
description: >-
  Официальный реестр участников и неучастников бюджетного процесса: публичный
  интерфейс и постраничный JSON API с реквизитами организаций, бюджетными
  полномочиями, кодами классификаторов и счетами. Паспорт открытых данных не
  содержит файловой выгрузки или формальной структуры полей.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/giis-eb
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/federal/subsidy
  - /data-sources/federal/budorgs
  - /glossary/inn
  - /glossary/kbk
  - /glossary/grbs
  - /glossary/pbs
  - /glossary/oktmo
jurisdiction_level: federal
data_completeness: partial
machine_readability: mixed
legal_significance: official
update_lag: unknown
archive_depth: unknown
license_or_terms: not-explicit
relationships:
  - type: published_by
    target: /organizations/federal-treasury
  - type: operated_by
    target: /organizations/federal-treasury
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Сводный реестр участников и неучастников бюджетного процесса. В справочнике уровней API есть федеральный бюджет (`10`), бюджет субъекта (`20`), местные бюджеты (`30`–`38`) и бюджеты государственных внебюджетных фондов (`40`–`50`); в каждой записи уровень задают `info.budgetLvlCode` и `info.budgetLvlName`. |
| Тип доступа | Поиск и карточка организации в веб-интерфейсе; проверенный постраничный JSON API. В `meta.json` нет ссылок на CSV/XLS/XML-файлы. |
| Основные форматы | HTML; JSON в каталоге, паспортах и API. HTTP-ответы API имеют `application/json;charset=utf-8`; CSV-разделитель и денежные единицы для этого источника не применимы. |
| Оператор | Федеральное казначейство — `creator` во всех трёх проверенных паспортах; публичный контур [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb). |
| Состояние на 2026-07-19 | `7710568760-RUBPNUBP`: 351 892 записи, версия API `10`; `7710568760-IKO`: 124 162, версия `1`; `7710568760-IKY`: 12 939, версия `1`. Это счётчики API, а не архивный снимок. |

Коротко: **официальный сводный реестр** даёт идентификаторы, реквизиты, бюджетный уровень и полномочия организации в бюджетном контуре. Для машинной работы используйте постраничный JSON API, а не ожидайте файл: в паспорте набора `7710568760-RUBPNUBP` на дату проверки одновременно пусты `data` и `structure`.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | **2026-07-19**: получены `list.json`, три `meta.json`, API трёх наборов и справочники уровней/типов реестра. |
| Полнота (`data_completeness`) | **Частичная для машинного потребления**: постраничные JSON-записи доступны, но паспорт не объявляет обязательность, файловую структуру или архив выгрузок. |
| Машиночитаемость (`machine_readability`) | **Смешанная**: HTML-карточка и JSON API. Массовый CSV/XLS/XML-файл в `meta.json` отсутствует. |
| Юридическая значимость (`legal_significance`) | **Официальный оператор**: в паспортах создателем указан Федеральное казначейство; это не заменяет выписку из ЕГРЮЛ. |
| Задержка обновления (`update_lag`) | **Не раскрыта**. В паспорте RUBPNUBP `modified: 18.07.2026`; периодичность и допустимый лаг не указаны. |
| Глубина архива (`archive_depth`) | **Неизвестна**: каталог не даёт ряд файлов/версий. В строках есть даты регистрации и изменения, но это не архив снимков реестра. |
| Лицензия (`license_or_terms`) | **Явно не указана**: в трёх проверенных `meta.json` нет поля лицензии или условий использования. |

## Описание

В публичной части единого портала бюджетной системы реестр показывает организацию как участника бюджетного контура: её реквизиты, место и бюджет, связи с учредителем, бюджетные и закупочные полномочия, лицевые и казначейские счета. Одна строка `data[]` API — **карточка организации**, а не одна строка бухгалтерской отчётности или платёж.

Схема источника имеет два уровня. Верхний объект содержит `id`, объект `info` и массивы связанных сущностей: полномочия, счета, виды деятельности, контакты, правопреемство и др. Формального описания этих полей в `meta.json` нет; ниже приведены имена, фактически отданные API, а также поля редких массивов, которые использует JavaScript публичной карточки.

Сюда **не** входят: регистрационная полнота [ЕГРЮЛ](/information-systems/federal/egrul); план ФХД, госзадание и бухгалтерская отчётность учреждения на [bus.gov.ru](/information-systems/federal/bus-gov); контракты и процедуры [ЕИС](/information-systems/federal/zakupki). Реестр содержит только свой бюджетный срез организации.

## Оператор

**Федеральное казначейство** указано как `creator` в паспортах RUBPNUBP, IKO и IKY; публичная витрина работает в контуре `budget.gov.ru`.

- Карточка ИС: [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — система и публичный контур, в котором доступны реестр, НСИ и API.
- [Федеральное казначейство](/organizations/federal-treasury) — публикатор и оператор в машиночитаемых связях этой карточки.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Реестр участников и неучастников (публичный интерфейс) | https://budget.gov.ru/бюджет/расходы/реестр-участников-и-неучастников-бюджетного-процесса | HTML |
| API реестра RUBPNUBP | https://budget.gov.ru/epbs/opendata-api/7710568760-RUBPNUBP/data | JSON |
| Паспорт RUBPNUBP | https://budget.gov.ru/epbs/opendata/7710568760-RUBPNUBP/meta.json | JSON |
| Каталог наборов | https://budget.gov.ru/epbs/opendata/list.json | JSON |
| API и паспорт ИКО | https://budget.gov.ru/epbs/opendata-api/7710568760-IKO/data ; https://budget.gov.ru/epbs/opendata/7710568760-IKO/meta.json | JSON |
| API и паспорт ИКУ | https://budget.gov.ru/epbs/opendata-api/7710568760-IKY/data ; https://budget.gov.ru/epbs/opendata/7710568760-IKY/meta.json | JSON |
| НСИ уровней бюджета, используемая фильтром реестра | https://budget.gov.ru/epbs/registry/budlevelnsi/data?pageSize=100 | JSON |

Путь страницы реестра содержит кириллицу. HTTP-клиенты обычно кодируют путь сами; при ручной сборке URL применяйте percent-encoding. Ссылка на API RUBPNUBP взята из кнопки **«API»** на самой публичной странице, а не угадана по паспорту.

## Объекты данных и показатели

### Сущности и границы строки

- **`data[]` RUBPNUBP** — карточка одного участника или неучастника, включающая основной объект `info` и массивы дочерних сведений. Это не плоская CSV-строка: один `info` может иметь несколько счетов, ролей, видов деятельности и правопреемников.
- **Роль организации** не собрана в один гарантированный столбец. Для бюджетного участника смотрите `participantPermissions[]`, для неучастника — `nonParticipantPermissions[]`, для закупочной роли — `procurementPermissions[]`; общий тип дают `info.orgTypeCode`/`info.orgTypeName`. Поэтому ГРБС, ПБС и «иной участник» нужно определять по фактическому `name` полномочия и периоду, а не только по типу учреждения. Термины: [ГРБС](/glossary/grbs) и [ПБС](/glossary/pbs).
- **Уровень бюджета** — пара `info.budgetLvlCode` + `info.budgetLvlName`. НСИ портала подтверждает коды `10` (федеральный), `20` (субъект РФ), `30`–`38` (местные бюджеты) и `40`–`50` (государственные внебюджетные фонды). Не сводите муниципальный уровень к одному коду: например, `31` — бюджет городского округа.
- **`data[]` IKO и IKY** — по одной записи идентификационного кода заказчика, с названием, адресом, статусом и датой. Это самостоятельные справочные срезы, а не вложенные массивы RUBPNUBP.

### Конверт ответа API

В этом конверте числа — JSON-числа, а не строки; коды внутри `data[]` почти везде сериализованы строками. Обязательность не объявлена в паспорте: «наблюдалось» ниже означает наличие в ответе на дату проверки, а не контракт API.

| Поле | Тип | Формат | Обяз-ть | Пример значения | Семантика | Связь с НСИ/глоссарием |
| --- | --- | --- | --- | --- | --- | --- |
| `offset` | number | смещение; `-1` на первой странице | наблюдалось | `-1` | Смещение ответа; при `offset=10` портал отдал вторую страницу. | Техническое поле пагинации. |
| `pageNum`, `pageSize`, `pageCount` | number | нумерация с 1 | наблюдалось | `1`, `100`, `3519` | Номер, размер и число страниц. `pageSize=100` проверен; не означает обещанный максимум. | Технические поля. |
| `recordCount` | number | целое | наблюдалось | `351892` | Число карточек в текущем ответе API. | Размер реестра на дату запроса. |
| `version` | string | строковый номер версии | наблюдалось | `"10"` | Версия слоя RUBPNUBP API, не версия федерального стандарта паспорта. | В `meta.json` стандарт — `3.0`. |
| `data` | array | массив объектов | наблюдалось | `[{"id":"3321119", ...}]` | Карточки организаций. | Схема ниже. |

### Поля основной карточки `data[].info`

Все 128 полей `info`, наблюдавшиеся в первой странице из 100 карточек, были JSON-строками; отсутствие обычно передаётся как `""`, а флаги — строками `"0"`, `"1"`, `"false"`. Строка таблицы может перечислять несколько **буквальных** имён только когда они образуют пару «код + имя» или одну техническую группу. Поле «обяз-ть» везде `не объявлена`: `meta.json.structure` пуст.

| Поле | Тип | Формат | Обяз-ть | Пример значения | Семантика | Связь с НСИ/глоссарием |
| --- | --- | --- | --- | --- | --- | --- |
| `info.regNum` | string | буквенно-цифровой | не объявлена | `"Z3845"` | Учётный номер организации в реестре. | Не ИНН и не `recordNum`. |
| `info.code` | string | буквенно-цифровой | не объявлена | `"463Z3845"` | Код организации по Сводному реестру; основной внутрисистемный ключ карточки. | Связывает `parentCode`, `uoCode`, счета и карточки внутри реестра. |
| `info.recordNum` | string | длинный буквенно-цифровой | не объявлена | `"467480000331Z3845062"` | Номер реестровой записи. | Храните строкой; не заменяет `code`. |
| `info.guid`, `info.firstRegGuid`, `info.lastRegGuid` | string | UUID | не объявлена | `"688776AE-…"` | Идентификатор карточки и GUID первой/последней регистрационной операции. | Технические идентификаторы портала. |
| `info.firstRegDate`, `info.lastRegDate`, `info.lastRegNum`, `info.bidNum`, `info.controlNum`, `info.updateNum`, `info.updateReason`, `info.status` | string | даты `YYYY-MM-DD HH:mm:ss.S`; прочее — коды/номера | не объявлена | `"2019-01-31 20:55:17.0"`, `"E"` | Реквизиты регистрации и технического обновления записи. Семантика кодов `status`/`updateReason` в паспорте не раскрыта. | Не используйте как юридический статус организации. |
| `info.fullName`, `info.shortName`, `info.nameDocs` | string | текст UTF-8 | не объявлена | `"МУ «КДЦ ОКТЯБРЬСКИЙ»"` | Полное, сокращённое и документное наименование. | Для контроля джойна, но не самостоятельный ключ. |
| `info.inn`, `info.kpp`, `info.ogrn` | string | 10/12, 9, 13/15 цифр по применимому реквизиту | не объявлена | `"5027159125"`, `"502701001"`, `"1105027002740"` | Налоговые и регистрационные реквизиты организации. | [ИНН](/glossary/inn); для верификации регистрационных сведений — [ЕГРЮЛ](/information-systems/federal/egrul). |
| `info.regDate`, `info.egrulnotincluded` | string | дата-время; `"true"`/`"false"` | не объявлена | `"2010-02-17 00:00:00.0"`, `"false"` | Дата постановки на учёт в ФНС и признак, переданный API. | Не заменяет актуальную выписку ЕГРЮЛ. |
| `info.orgTypeCode`, `info.orgTypeName` | string | 2-значный код + текст | не объявлена | `"03"`, `"Учреждение"` | Тип организации. | НСИ портала: орган власти, фонд, учреждение, унитарное предприятие, госкорпорация/компания, иное юрлицо, Банк России. |
| `info.establishmentKindCode`, `info.establishmentKindName` | string | код + текст | не объявлена | `"2"`, `"Бюджетное"` | Вид учреждения/организации в карточке. | Не подменяет юридическую проверку типа учреждения. |
| `info.legalPersonKindCode`, `info.legalPersonKindName` | string | код + текст | не объявлена | `"11"`, `"Создание юридического лица"` | Способ образования юрлица. | Важен для истории, не для основного джойна. |
| `info.statusCode`, `info.statusName`, `info.orgStatus` | string | код + текст | не объявлена | `"2"`, `"недействующая"` | Статус, показанный реестром. | НСИ API перечисляет «действующая», «недействующая», «отсутствуют правоотношения», «специальные указания». |
| `info.isOGV`, `info.isObosob`, `info.isUch`, `info.isExcluded`, `info.isReorg`, `info.accMgmt`, `info.naibznachuch`, `info.dsp` | string | обычно `"0"`/`"1"`; формальный enum не опубликован | не объявлена | `"0"`, `"1"` | Флаги органа власти, обособленного подразделения, учредителя, исключения, реорганизации и др. | Для фильтра используйте вместе с текстом интерфейса; отдельная расшифровка `dsp` отсутствует. |
| `info.pubpCode`, `info.rubpCode`, `info.nubpCode`, `info.cpzCode`, `info.pgmyCode`, `info.firmName`, `info.kofkCode` | string | внутренние коды/текст | не объявлена | `"05980"`, `"А0950"`, `"Р4308"` | Поля, фактически отдаваемые API, но без описания в `meta.json`. | Не присваивайте им значение роли без проверки карточки; `kofkCode` не является полем БИК. |
| `info.okopfCode`, `info.okopfName` | string | код + наименование | не объявлена | `"75403"`, `"Муниципальные бюджетные учреждения"` | ОКОПФ. | НСИ ОКОПФ в портале; используется для типа организации. |
| `info.okfsCode`, `info.okfsName` | string | код + наименование | не объявлена | `"14"`, `"Муниципальная собственность"` | ОКФС. | НСИ ОКФС. |
| `info.okoguCode`, `info.okoguName`, `info.okpoCode` | string | коды + текст | не объявлена | `"3200100"`, `"66087787"` | ОКОГУ и ОКПО. | Общероссийские классификаторы; хранятся строками. |
| `info.okatoCode`, `info.okatoName`, `info.oksmCode`, `info.oksmName` | string | коды + текст | не объявлена | `""` | ОКАТО и ОКСМ, если заполнены. | Пустая строка — обычное отсутствие значения, а не `null`. |
| `info.oktmoCode`, `info.oktmoName` | string | код ОКТМО + текст | не объявлена | `"46748000"`, `"Люберцы"` | Муниципальная территория организации. | [ОКТМО](/glossary/oktmo); не смешивайте с кодом бюджета. |
| `info.ppotypecode`, `info.ppotypename` | string | код + текст | не объявлена | `"31"`, `"Городской округ"` | Вид публично-правового образования. | Сопоставляется с полями ППО ниже. |
| `info.creatorKindCode`, `info.creatorKindName`, `info.creatorPlaceCode`, `info.creatorPlaceName` | string | коды + текст | не объявлена | `"31"`, `"Городской округ"` | ППО, создавшее организацию/подразделение. | Территория ППО обычно кодируется ОКТМО. |
| `info.founderKindCode`, `info.founderKindName`, `info.founderPlaceCode`, `info.founderPlaceName` | string | коды + текст | не объявлена | `"31"`, `"Люберцы"` | ППО-учредитель. | Не путайте с `authorities[]`: там орган, осуществляющий полномочия учредителя. |
| `info.parentCode`, `info.parentName`, `info.parentrecordnum` | string | код + текст + номер | не объявлена | `"81302224"` | Вышестоящее юридическое лицо/связанная карточка. | Внутренний джойн на `info.code`; не гарантированный правопреемник. |
| `info.divisionParentCode`, `info.divisionParentName` | string | код + текст | не объявлена | `"001X9731"` | Организация, создавшая обособленное подразделение. | Внутренний джойн на `info.code`, когда он заполнен. |
| `info.uoCode`, `info.uoName` | string | код + текст | не объявлена | `"463D6559"` | Уполномоченная организация, представляющая сведения в реестр. | Внутренний джойн на `info.code`. |
| `info.ougvCode`, `info.ougvName` | string | код + текст | не объявлена | `"2"`, `"Организация не является…"` | Признак/вид органа управления. | Семантика берётся из подписи портала; отдельной структуры в паспорте нет. |
| `info.budgetLvlCode`, `info.budgetLvlName` | string | 2-значный код + текст | не объявлена | `"31"`, `"Бюджет городского округа"` | Уровень бюджета. | Главный признак уровня: `10` федеральный, `20` субъект, `30`–`38` местный, `40`–`50` фонды. |
| `info.budgetCode`, `info.budgetName` | string | код + текст | не объявлена | `"48031782"` | Бюджет, к которому отнесена карточка. | Не равен ОКТМО автоматически; проверяйте оба поля. |
| `info.kbkCode`, `info.kbkName` | string | код главы + текст | не объявлена | `"003"` | Глава по бюджетной классификации в карточке. | [КБК](/glossary/kbk); это поле главы, не обязательно полный код КБК строки расходов. |
| `info.orfkCode`, `info.orfkName`, `info.reforfkCode` | string | код КОФК + текст + относительный URL | не объявлена | `"4800"` | Территориальный орган Казначейства по месту организации и ссылка на его реестр. | Код казначейства, **не** БИК; `reforfkCode` — относительный URL портала. |
| `info.postIndex`, `info.regionCode`, `info.regionName`, `info.regionType`, `info.regionKladrCode` | string | индекс, региональные/КЛАДР-коды, текст | не объявлена | `"140060"`, `"50"` | Регион и почтовый индекс адреса. | Территориальная детализация, но не уровень бюджета. |
| `info.areaCode`, `info.areaType`, `info.areaName` | string | КЛАДР-подобный код + текст | не объявлена | `"5901700000000"`, `"РАЙОН"` | Район адреса. | Адресный слой. |
| `info.cityCode`, `info.cityType`, `info.cityName` | string | код + текст | не объявлена | `"5000005000000"`, `"ГОРОД"` | Город адреса. | Адресный слой. |
| `info.localCode`, `info.localType`, `info.localName` | string | код + текст | не объявлена | `"5000005002000"`, `"рп"` | Населённый пункт. | Адресный слой. |
| `info.streetCode`, `info.streetType`, `info.streetName`, `info.house`, `info.building`, `info.apartment`, `info.location` | string | код/текст | не объявлена | `"ДОМ 5"`, `"ПОМЕЩЕНИЕ II"` | Детали адреса. | Используйте только для ручной проверки, не как ключ джойна. |
| `info.inclusionDate`, `info.exclusionDate`, `info.startDate`, `info.endDate`, `info.dateUpdate`, `info.loadDate` | string | `YYYY-MM-DD HH:mm:ss.S` либо `""` | не объявлена | `"2025-11-13 22:48:36.0"` | Даты включения, исключения, действия, обновления и загрузки. | Не ISO 8601; приводите явно при обработке. |
| `info.reformationDocument`, `info.reformationDocumentNum`, `info.reformationDocumentDate`, `info.reformationCode`, `info.reformationName`, `info.reformationStartDate`, `info.reformationEndDate` | string | текст/код/дата-время | не объявлена | `"Ликвидация юридического лица"` | Сведения о ликвидации или реорганизации. | Проверяйте вместе с `successions[]`; не удаляйте старые коды при историческом анализе. |
| `info.specEventCode`, `info.speceventcodedop1`, `info.speceventcodedop2`, `info.speceventcodedop3` | string | цифровые коды | не объявлена | `"1"`, `"2"` | Специальные события. Интерфейс расшифровывает: `1` реорганизация, `2` ликвидация, `3` изменение подведомственности, `4` изменение типа учреждения, `5` изменение уровня бюджета. | Логика UI, не поле из `meta.json.structure`. |
| `info.contourTypeCode`, `info.planningstructuretype`, `info.planningstructurename` | string | код/текст | не объявлена | `"O"`, `""` | Технические/контурные поля API без отдельного описания паспорта. | Не применяйте как бизнес-ключ без сверки с интерфейсом. |

### Вложенные сущности RUBPNUBP

Ниже `string` означает фактическую сериализацию API. Для массивов, пустых в выборке из 100 карточек, имена полей отмечены как «UI»: они прочитаны из JavaScript той же публичной карточки; формальная спецификация всё равно отсутствует.

| Поле | Тип | Формат | Обяз-ть | Пример значения | Семантика | Связь с НСИ/глоссарием |
| --- | --- | --- | --- | --- | --- | --- |
| `authorities[]`: `authorityCode`, `authorityName`; `permissions[]`: `permissionCode`, `permissionName` | array of objects / string | код + текст | не объявлена | `"463D6563"` | Орган, осуществляющий функции учредителя, и его полномочия. | `authorityCode` ссылается на код Сводного реестра; не путайте с ППО-учредителем. |
| `activities[]`: `activityCode`, `activityName`, `activityKind` | array of objects / string | ОКВЭД + текст | не объявлена | `"91.01"`, `"основной"` | Основной и иные виды деятельности. | ОКВЭД; не является бюджетной ролью. |
| `heads[]`: `fio`, `post`, `docName`, `docNum`, `docDate`, `headMain` | array of objects / string | текст; дата-время; `"true"`/`"false"` | не объявлена | `"И.О. ДИРЕКТОРА"` | Руководитель и документ о назначении. | Персональные данные: не включайте в ненужные витрины. |
| `successions[]`: `parentCode`, `parentName`, `ogrn`, `datasource`, `docname`, `numberdoc`, `documentdate` | array of objects / string | коды/текст/дата | не объявлена | `"1021800587225"` | Сведения о правопреемстве. | Историческая связка; не заменяет проверку ЕГРЮЛ. |
| `facialAccounts[]`: `num`, `kindCode`, `kindName`, `openUfkCode`, `openUfkName`, `openTofkName`, `createDate`, `closeDate`, `status`, `srvUfkCode`, `srvUfkName`, `accountorgcode`, `accountorgfullname`, `ppocode`, `pponame`, `refopenUfkCode`, `refsrvUfkCode` | array of objects / string | номер/коды; даты-время | не объявлена | `"20486Z38450"`, `"4800"` | Лицевые счета в ТОФК и обслуживающие органы. | Коды Казначейства; не БИК и не ключ ЕИС. |
| `foAccounts[]`: `num`, `accountTypeName`, `foCode`, `foName` | array of objects / string | номер + текст/код | не объявлена | `"059400055"` | Лицевые счета в финансовых органах. | `foCode` — код связанной карточки реестра. |
| `participantPermissions[]`: `code`, `name`, `startDate`, `endDate` | array of objects / string | код; дата-время | не объявлена | `"114"`, `"Получателя бюджетных средств…"` | Бюджетные полномочия участника. | Здесь ищите фактическую роль, в том числе [ПБС](/glossary/pbs) и [ГРБС](/glossary/grbs), а не в названии организации. |
| `nonParticipantPermissions[]`: `name`, `code`, `registryNum`, `startDate`, `endDate`, `authBudgCode`, `authBudgName`, `authPPOCode`, `authPPOName`, `authKBKGlavaCode`, `authKBKGlavaName` | array of objects / string | код + дата-время | не объявлена | `"НУБП"`, `"303"` | Полномочия неучастника, привязанный бюджет, ППО и глава по БК. | `authKBKGlavaCode` — глава [КБК](/glossary/kbk). |
| `procurementPermissions[]`: `name`, `code`, `startDate`, `endDate` | array of objects / string | код + дата-время | не объявлена | `"заказчик"`, `"201"` | Полномочие в сфере закупок. | Это не ИКО/ИКУ и не контракт ЕИС; см. [ЕИС](/information-systems/federal/zakupki). |
| `contacts[]`: `phone`, `site`, `mail` | array of objects / string | текст/URL/e-mail | не объявлена | `"8 498…"` | Контактные данные карточки. | Не ключ джойна. |
| `acceptAuths[]`: `code`, `name`, `authGiverCode`, `authGiverName`, `authBudgCode`, `authBudgName`, `authPPOCode`, `authPPOName`, `authKBKGlavaCode`, `authKBKGlavaName`, `userArea`, `authRegNum`, `startDate`, `endDate` | array of objects / string | коды/текст/дата-время | не объявлена | `"П НУБП З"`, `"301"` | Принятые полномочия и организация, их передавшая. | Коды организации сшиваются внутри реестра; БК-поля — [КБК](/glossary/kbk). |
| `transfauth[]`: `authfomunicipalcode`, `authfomunicipalname`, `authfovillagescode`, `authfovillagesname`, `authfovillagesppocode`, `authfovillagespponame`, `authregnum`, `budgetcode`, `kbkglavacode`, `authstartdate`, `authenddate` | array of objects / string | коды/текст/дата-время | не объявлена | `"46302314"` | Передача полномочий финансового органа поселения органу муниципального района. | Муниципальный контур; глава — [КБК](/glossary/kbk). |
| `contracts[]` (UI): `contractnumber`, `signdate`, `orgcodecontract`, `orgnamecontract` | array of objects / string | номер; дата-время; код/текст | не объявлена; UI | `"…"` | Основание включения в сводный реестр, если массив заполнен. | Не заменяет реестр контрактов ЕИС. |
| `ubptransfauthbp[]` (UI): `ppocode`, `pponame`, `budlevelnsiname`, `budgetcode`, `budgetnsicode`, `budgetnsiname`, `kbkglavacode`, `codebk`, `headname` | array of objects / string | коды/текст | не объявлена; UI | `"…"` | Переданные бюджетные полномочия исполнительно-распорядительного органа. | Уровень и [КБК](/glossary/kbk). |
| `ubpfin[]` (UI): `findocname`, `findocnum`, `findocdate` | array of objects / string | текст/номер/дата-время | не объявлена; UI | `"…"` | Документ о праве получать дополнительное бюджетное финансирование. | Не денежная операция. |
| `ubptransfauthbu[]` (UI): `authbuauthorgcode`, `authbuauthname`, `authbustartdate`, `authbuenddate` | array of objects / string | код/текст/дата-время | не объявлена; UI | `"…"` | Переданные полномочия по ведению бюджетного учёта. | Внутренний код реестра. |
| `ksaccounts[]` (UI): `num`, `opendate`, `closedate`, `opentofkcode`, `opentofkname`, `refsrvufkcode`, `accountvidname`, `ppocode` | array of objects / string | номер/даты/коды | не объявлена; UI | `"…"` | Казначейские счета. | `opentofkcode` — код ТОФК, не БИК. |
| `attachment[]` (UI): `id`, `name`, `mime` | array of objects / string | ID, имя, MIME | не объявлена; UI | `"…"` | Дополнительные документы НСИ. | В 100 проверенных карточках массив был пуст; отдельный файловый URL из паспорта отсутствует. |

### Соседние наборы ИКО и ИКУ

В `list.json` есть оба идентификатора; их `meta.json` также содержат пустые `data` и `structure`, однако проверенный JSON API возвращает компактные строки. У `7710568760-IKO` в паспорте `modified: 03.12.2024`, у `7710568760-IKY` — та же дата. ИКО — код заказчика для реестра договоров; ИКУ — код заказчика для реестра банковских гарантий и договоров, как сформулировано в их паспортах.

| Поле | Тип | Формат | Обяз-ть | Пример значения | Семантика | Связь с НСИ/глоссарием |
| --- | --- | --- | --- | --- | --- | --- |
| `IKO.data[].name`, `IKY.data[].name` | string | текст UTF-8 | не объявлена | `"ПРОКУРАТУРА РЕСПУБЛИКИ АДЫГЕЯ"` | Наименование заказчика. | Только вспомогательная проверка соответствия; имя не ключ. |
| `IKO.data[].address`, `IKY.data[].address` | string | почтовый адрес | не объявлена | `"385002, РЕСПУБЛИКА АДЫГЕЯ…"` | Адрес заказчика. | Не используйте для автоматического join. |
| `IKO.data[].code`, `IKY.data[].code` | string | 20 символов, сохранять ведущие нули | не объявлена | `"50100009960010001001"` | Идентификационный код заказчика из соответствующего набора. | Отдельных карточек терминов ИКО/ИКУ в `wiki/glossary/` на дату проверки нет; для закупочного контура см. [ЕИС](/information-systems/federal/zakupki). |
| `IKO.data[].status` | string | текст | не объявлена | `"Действителен"` | Статус ИКО, как возвращает API. | Не преобразуйте в число. |
| `IKY.data[].status` | string | `"0"`/`"1"` в проверенной выборке | не объявлена | `"1"` | Код статуса ИКУ; легенды в паспорте нет. | Не приписывайте `0`/`1` смысл «действует» без первоисточника. |
| `IKO.data[].date`, `IKY.data[].date` | string | `YYYY-MM-DD HH:mm:ss.S` | не объявлена | `"2024-10-17 14:50:26.0"` | Дата, возвращаемая API. | Не ISO 8601. |

**Критическое ограничение джойна:** в проверенных строках ИКО и ИКУ нет ИНН, КПП, ОГРН, `info.code` или номера записи RUBPNUBP. Поэтому API не даёт проверенного прямого ключа `ИКО/ИКУ → реестр участников`; склейка только по названию/адресу небезопасна. Не извлекайте ИНН из 20-значного кода и не считайте его кодом Сводного реестра.

### Пример реальной структуры ответа

Ниже — сокращённая и частично обезличенная копия первой карточки, полученной из API 2026-07-19: ключи и форматы не изменены, полное наименование сокращено. Дата здесь — строка API, а не ISO 8601.

```json
{
  "id": "3321119",
  "info": {
    "regNum": "Z3845",
    "code": "463Z3845",
    "recordNum": "467480000331Z3845062",
    "fullName": "МУНИЦИПАЛЬНОЕ УЧРЕЖДЕНИЕ «…»",
    "inn": "5027159125",
    "kpp": "502701001",
    "ogrn": "1105027002740",
    "orgTypeCode": "03",
    "orgTypeName": "Учреждение",
    "budgetLvlCode": "31",
    "budgetLvlName": "Бюджет городского округа",
    "oktmoCode": "46748000",
    "kbkCode": "003",
    "statusCode": "2",
    "statusName": "недействующая",
    "dateUpdate": "2025-11-13 18:56:06.0"
  },
  "activities": [
    {
      "activityCode": "91.01",
      "activityName": "Деятельность библиотек и архивов",
      "activityKind": "основной"
    }
  ],
  "nonParticipantPermissions": [
    {
      "name": "НУБП",
      "registryNum": "Z3845",
      "code": "303",
      "startDate": "2018-07-18 00:00:00.0",
      "endDate": ""
    }
  ],
  "procurementPermissions": [
    {
      "name": "заказчик",
      "code": "201",
      "startDate": "2018-01-19 00:00:00.0",
      "endDate": ""
    }
  ]
}
```

### Ключи связки и правила сопоставления

| Ключ из RUBPNUBP | С чем стыкуется | Правило и ловушки |
| --- | --- | --- |
| `info.inn` | [Реестр соглашений](/data-sources/federal/subsidy), [обзор бюджетных организаций](/data-sources/federal/budorgs), наборы учреждений и данные ЕИС | Наиболее практичный ключ организации. Загружайте строкой: ИНН может описывать другую роль той же организации, а набор соглашений меняет схему по версии. Дополнительно сверяйте период, наименование и ОГРН. |
| `info.kpp` + `info.inn` | Срезы организаций с обособленными подразделениями | Используйте парой, когда КПП раскрыт с обеих сторон; один ИНН не отличает подразделения и смену постановки на учёт. |
| `info.code`, `info.regNum`, `info.recordNum` | Другие записи **этого** реестра: `parentCode`, `uoCode`, `authorityCode`, `foCode` | Это разные внутрисистемные идентификаторы. Для перехода по связям проверяйте, какой именно код ожидает поле; не заменяйте один другим и не используйте как внешний ключ ЕИС. |
| `info.oktmoCode`, `info.budgetCode`, `info.budgetLvlCode` | Территориальные и бюджетные срезы | [ОКТМО](/glossary/oktmo) — территория, а `budgetCode` — бюджет. Они не эквивалентны; уровень обязательно храните вместе с кодом и названием. |
| `info.kbkCode` и `authKBKGlavaCode` во вложенных массивах | [Реестр соглашений](/data-sources/federal/subsidy), роспись и справочники [КБК](/glossary/kbk) | Это код главы по БК в карточке, а не обещанный полный КБК. Джойн с расходной строкой возможен только после проверки длины и гранулярности конкретного файла. |
| `info.orfkCode`, `info.kofkCode`; коды ТОФК в счетах | Внутренние справочники Казначейства | В ответе **нет поля БИК**. Не выдавайте код КОФК/ТОФК за БИК банка; это разные идентификаторы. |
| `IKO.data[].code`, `IKY.data[].code` | Закупочный контур [ЕИС](/information-systems/federal/zakupki) | 20-символьные коды заказчика храните строкой. В ИКО/ИКУ нет проверенного ИНН или кода Сводного реестра, поэтому прямой join с RUBPNUBP не определён. |

При реорганизации и ликвидации не перезаписывайте исторические строки «актуальной» организацией: используйте `isReorg`, `reformation*`, `successions[]`, даты действия полномочий и статус. Один ИНН, название или код могут встречаться в разных периодах, у филиала и правопреемника; перед агрегацией проверяйте период записи и гранулярность роли.

### Форматы, кодировки и объёмы

- **Кодировка:** API отвечает `application/json;charset=utf-8`. В JSON кириллица передаётся без обязательного экранирования; сохраняйте UTF-8.
- **Даты:** в API — строка `YYYY-MM-DD HH:mm:ss.S` (например, `2025-11-13 22:48:36.0`); в `meta.json.modified` — `dd.mm.yyyy` (`18.07.2026`). Это не ISO 8601: при нормализации задавайте формат явно.
- **Коды:** ИНН, КПП, ОГРН, ОКТМО, КОФК/ТОФК, ИКО и ИКУ — строки. Особенно важно не потерять ведущие нули у 20-значных ИКО/ИКУ.
- **Деньги:** в проверенной карточке участника денежных полей и единицы измерения нет. Суммы ищите в [реестре соглашений](/data-sources/federal/subsidy) или других предметных наборах, а не в этом справочнике.
- **Файлы и CSV:** `RUBPNUBP`, `IKO`, `IKY` имеют `format: ""`, `data: []`, `structure: []` в паспортах. Поэтому кодировка CSV, разделитель и пример чтения файловой выгрузки **на дату проверки отсутствуют**.
- **Объём:** API сообщает 351 892 / 124 162 / 12 939 строк для RUBPNUBP / IKO / IKY. Используйте `page` (или `pageNum`) и `pageSize`; проверены первая и вторая страницы, а также `pageSize=100`.

## Периодичность обновления

Периодичность не опубликована в трёх паспортах. Единственный зафиксированный ориентир — `modified: 18.07.2026` у RUBPNUBP и `03.12.2024` у IKO/IKY; это дата метаданных, не обещание регулярного обновления. Перед повторяемой загрузкой сохраняйте дату запроса, `recordCount`, `version`, `meta.modified` и при необходимости хэш ответа страницы.

## Ограничения и особенности

- У всех трёх паспортов пусты `data` и `structure`: нет формальной декларации типов, обязательности, CSV-файлов и лицензии. Отсутствие файла не означает отсутствие живого API, но исключает «скачать один официальный полный CSV».
- Параметры `inn`, `kpp`, `search` и `budgetlvl`, добавленные напрямую к API RUBPNUBP в проверке 2026-07-19, вернули ту же первую страницу и тот же `recordCount`. Не стройте конвейер на недокументированной серверной фильтрации: скачивайте страницы или повторяйте сценарий интерфейса после отдельной проверки.
- Структура меню и URL портала менялись вместе с Liferay; при 404 начинайте с канонической страницы реестра. Для кириллического пути используйте percent-encoding.
- У части полей возможна пустая строка вместо `null`, у флагов — строка, а не boolean. `pd.json_normalize`/Pydantic-схему строьте с nullable-string, не с жёсткими `int`/`bool`.
- Состояние `statusName` и даты реестра не заменяют юридически значимую выписку [ЕГРЮЛ](/information-systems/federal/egrul). Данные не содержат отчётность учреждения: для неё используйте [bus.gov.ru](/data-sources/federal/bus-opendata).
- ИКО/ИКУ — не универсальный мост в реестр участников: API не публикует для них ИНН, КПП, ОГРН или код Сводного реестра. Нечёткое сопоставление по названию и адресу даёт дубли при реорганизациях и одноимённых организациях.

## Примеры доступа

Все команды ниже проверены 2026-07-19 против публичных ответов `200` без авторизации. Они не предполагают наличие отсутствующего CSV-файла.

Получить паспорта и найти три записи в каталоге:

```bash
curl -sS "https://budget.gov.ru/epbs/opendata/7710568760-RUBPNUBP/meta.json" -o rubpnubp-meta.json
curl -sS "https://budget.gov.ru/epbs/opendata/list.json" \
  | python3 -c 'import json,sys; ids={"7710568760-RUBPNUBP","7710568760-IKO","7710568760-IKY"}; print(*[x for x in json.load(sys.stdin)["meta"] if x["identifier"] in ids], sep="\n")'
```

Разобрать паспорт и честно вывести структуру/ссылки на файлы (на дату проверки оба списка пусты):

```bash
python3 -c 'import json; m=json.load(open("rubpnubp-meta.json", encoding="utf-8")); print({k:m.get(k) for k in ("identifier", "title", "created", "modified", "format", "data", "structure")})'
```

Запросить страницу API и вывести реальные поля первого объекта. `pageSize=100` был проверен; для обхода используйте следующий `page` и сохраняйте код/время ответа.

```bash
curl -sS "https://budget.gov.ru/epbs/opendata-api/7710568760-RUBPNUBP/data?pageSize=100" \
  | python3 -c 'import json,sys; p=json.load(sys.stdin); r=p["data"][0]; print({k:p[k] for k in ("pageNum","pageSize","recordCount","pageCount","version")}); print("top-level:", sorted(r)); print("info:", sorted(r["info"]))'
```

Нормализовать именно JSON API в `pandas` и сохранить ключи строками. Это рабочий вариант для API; пример чтения CSV намеренно не приводится, потому что официального файлового URL на дату проверки нет.

```python
import pandas as pd
import requests

url = "https://budget.gov.ru/epbs/opendata-api/7710568760-RUBPNUBP/data"
payload = requests.get(url, params={"page": 1, "pageSize": 100}, timeout=60).json()
orgs = pd.json_normalize(payload["data"], sep=".")

for column in ("info.inn", "info.kpp", "info.ogrn", "info.code", "info.recordNum"):
    orgs[column] = orgs[column].astype("string")
orgs["info.dateUpdate"] = pd.to_datetime(
    orgs["info.dateUpdate"], format="%Y-%m-%d %H:%M:%S.%f", errors="coerce"
)
print(payload["recordCount"], orgs[["info.code", "info.inn", "info.budgetLvlCode"]].head())
```

Минимальный join с локально загруженным реестром соглашений: сначала приведите **фактическую** колонку ИНН из версии выгрузки соглашений к имени `recipient_inn`. Функция ниже не предполагает, что файл соглашений всегда имеет это имя или что у получателя один ИНН на все исторические роли.

```python
def join_agreements(agreements: pd.DataFrame, orgs: pd.DataFrame) -> pd.DataFrame:
    if "recipient_inn" not in agreements:
        raise ValueError("Сначала переименуйте фактическую колонку ИНН получателя в recipient_inn")
    agreements = agreements.copy()
    agreements["recipient_inn"] = agreements["recipient_inn"].astype("string").str.strip()
    registry_keys = orgs[["info.inn", "info.kpp", "info.code", "info.fullName", "info.statusName"]].drop_duplicates()
    return agreements.merge(
        registry_keys,
        left_on="recipient_inn",
        right_on="info.inn",
        how="left",
        validate="m:m",  # исторические/ролевые дубли разбирайте датой и КПП
    )
```

Для ИКО и ИКУ используйте тот же конверт, но не пытайтесь автоматически соединить его с `orgs` по несуществующему в ответе ИНН:

```bash
curl -sS "https://budget.gov.ru/epbs/opendata-api/7710568760-IKO/data?pageSize=100" \
  | python3 -c 'import json,sys; p=json.load(sys.stdin); print(p["recordCount"], p["data"][0])'
```

## Связанные страницы wiki

- [Бюджетные организации: справочники и открытые данные](/data-sources/federal/budorgs) — тематическая карта идентификаторов учреждений, участников и типичных стыковок с другими федеральными витринами.
- [Наборы данных ГИИС «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — устройство `list.json`, паспорта и ограничения каталога, частью которого являются три идентификатора этой страницы.
- [Соглашения (субсидии и субвенции)](/data-sources/federal/subsidy) — другой реестр того же портала; ИНН стороны — практический, но требующий проверки периода мост к участнику.
- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — границы системы и отличия публичной витрины от рабочих подсистем.
- [ИНН](/glossary/inn) — основной реквизит организации для контролируемой склейки с соглашениями и учреждениями.
- [КБК](/glossary/kbk) — расшифровка главы по БК в `kbkCode` и связанных массивах; не всякий код в реестре является полным КБК.
- [ОКТМО](/glossary/oktmo) — территория `oktmoCode`, которую не следует подменять кодом бюджета.
- [ГРБС](/glossary/grbs) и [ПБС](/glossary/pbs) — бюджетные роли, которые ищут в массивах полномочий карточки, а не угадывают по названию учреждения.

## Не путать с

- [Портал ГМУ (bus.gov.ru)](/data-sources/federal/bus-opendata) — раскрывает деятельность и отчётность учреждения; это не сводный реестр ролей и полномочий бюджетного процесса.
- [ЕИС в сфере закупок](/information-systems/federal/zakupki) — контракты, процедуры и закупочные реестры. Наличие `procurementPermissions[]`, ИКО или ИКУ не превращает RUBPNUBP в полный реестр закупок.
- [ЕГРЮЛ](/information-systems/federal/egrul) — первичный источник актуальных регистрационных сведений о юрлице; статус и реквизиты в бюджетном реестре имеют другую предметную границу.

## Сводка для машинной обработки

```yaml
primary_url: "https://budget.gov.ru/epbs/opendata-api/7710568760-RUBPNUBP/data"
catalog_url: "https://budget.gov.ru/epbs/opendata/list.json"
dataset_identifier: "7710568760-RUBPNUBP"
metadata_url: "https://budget.gov.ru/epbs/opendata/7710568760-RUBPNUBP/meta.json"
formats: ["html", "json"]
encoding: "UTF-8 (HTTP: application/json;charset=utf-8)"
update_cadence: "not disclosed; meta.modified=18.07.2026"
api_pagination:
  checked_parameters: ["page", "pageSize"]
  checked_page_size: 100
  record_count_on_2026_07_19: 351892
  api_version: "10"
join_keys:
  - "info.inn: primary organization bridge; preserve as string"
  - "info.inn + info.kpp: disambiguates some branches/registrations"
  - "info.code: internal Svodny reestr key only"
  - "info.oktmoCode + info.budgetLvlCode: territorial/budget context, not an organization key"
  - "info.kbkCode: head code, not guaranteed full KBK"
typical_roles:
  - "participantPermissions[]"
  - "nonParticipantPermissions[]"
  - "procurementPermissions[]"
  - "orgTypeCode/orgTypeName"
related_datasets:
  - identifier: "7710568760-IKO"
    api_url: "https://budget.gov.ru/epbs/opendata-api/7710568760-IKO/data"
    record_count_on_2026_07_19: 124162
  - identifier: "7710568760-IKY"
    api_url: "https://budget.gov.ru/epbs/opendata-api/7710568760-IKY/data"
    record_count_on_2026_07_19: 12939
known_gaps:
  - "All three meta.json passports have data: [] and structure: []."
  - "No official bulk file URL, file schema, declared required fields, cadence, or license was found."
  - "IKO/IKY API rows do not expose INN, KPP, OGRN, RUBPNUBP code, or record number."
  - "Direct test of undocumented inn/kpp/search/budgetlvl parameters did not filter the RUBPNUBP API."
```

## Частые вопросы

**В:** Почему паспорт пуст, а API возвращает записи?

**О:** Это два разных слоя публикации. Проверенный `meta.json` содержит описание набора и пустые `data`/`structure`, но страница реестра раскрывает отдельную кнопку API, которая отдаёт постраничный JSON. Не делайте из этого вывод о существовании официального архива CSV.

**В:** Можно ли связать любой ИКО или ИКУ с участником бюджетного процесса по коду?

**О:** **Нет, не по этим трем API.** В ответах ИКО/ИКУ есть только `name`, `address`, `code`, `status`, `date`; нет ИНН, КПП, ОГРН и кода Сводного реестра. Сначала найдите дополнительный первичный мост в закупочном наборе, затем проверяйте ИНН и период.

**В:** Как определить, что запись — ПБС или ГРБС?

**О:** Не по `orgTypeName` и не по названию. Смотрите действующую на нужную дату запись в `participantPermissions[]`, её `name`, `code`, `startDate` и `endDate`, затем сверяйте терминологию с [ПБС](/glossary/pbs) и [ГРБС](/glossary/grbs).
