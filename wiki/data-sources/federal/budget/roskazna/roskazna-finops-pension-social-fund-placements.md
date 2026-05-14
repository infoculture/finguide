---
title: >-
  Казначейство: размещение средств Фонда пенсионного и социального страхования
  РФ (отчёты о финансовых операциях)
sidebar_label: 'Казначейство: размещение средств Фонда ПФР и соцстраха'
tags:
  - data-source
  - federal
  - budget
  - reporting
last_updated: 2026-05-12T00:00:00.000Z
slug: /data-sources/federal/roskazna-finops-pension-social-fund-placements
source_url: >-
  https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii
data_source_kind: mixed
jurisdiction: federal
access: open
formats:
  - html
  - docx
  - xml
status: current
related_information_system: /information-systems/federal/roskazna-portal
description: >-
  отчётные материалы по размещению средств фонда в логике раздела «Финансовые
  операции»; для исполнения бюджетов ГВФ в формах казначейства см. отдельный
  подраздел исполнения и Минфин outbud/execute.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/roskazna-portal
  - /data-sources/federal/roskazna-extrabudgetary-funds-execution
  - /data-sources/federal/minfin-outbud-execute
  - /organizations/sfr
  - /data-sources/federal/roskazna-reports
  - /budget-system/extrabudgetary-funds
---

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Федеральный внебюджетный контур**: публикации по **размещению средств Фонда пенсионного и социального страхования Российской Федерации** (по структуре меню на дату обращения — напр. банковские депозиты и счета) |
| Тип доступа | HTML-раздел с переходами к листовым страницам; **файлы выгрузок** по ссылкам из таблиц |
| Основные форматы | HTML; типично **DOCX** и **XML** в `storage/operation-day-files/` |
| Оператор | Федеральное казначейство |
| Режим доступа | Открытый |

Коротко: отчётные материалы по **размещению средств фонда** в логике раздела **[«Финансовые операции»](https://roskazna.gov.ru/finansovye-operacii)**; для **исполнения бюджетов ГВФ** в формах казначейства см. **[отдельный подраздел исполнения](/data-sources/federal/roskazna-extrabudgetary-funds-execution)** и **[Минфин outbud/execute](/data-sources/federal/minfin-outbud-execute)**.

## Описание

Карточка описывает ветку https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii . На сайте параллельно может быть **архив** с историческими материалами по **[Фонду социального страхования РФ](https://roskazna.gov.ru/finansovye-operacii/archive)** — при анализе длинных рядов проверяйте **оба** оглавления.

**Не входит**: полная замена **[открытых данных СФР](/organizations/sfr)** или **[bus.gov.ru](/data-sources/federal/bus-opendata)**; бухгалтерская отчётность фонда в других витринах без сверки методики.

## Оператор

**[Федеральное казначейство](/organizations/federal-treasury)** — канонический URL ветки см. выше.

- Карточка ИС: **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)**.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Ветка размещения средств фонда ПФР и соцстраха | https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii | HTML |
| Родительский раздел | https://roskazna.gov.ru/finansovye-operacii | HTML |
| Пример листовой страницы (депозиты) | https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii-na-bankovskih-depozitah | HTML; файлы |

## Объекты данных и показатели

- **Строки архива публикаций** по размещению средств фонда — дата, набор вложений (DOCX/XML), пояснения на странице.
- **Ключи связки** — прежде всего **дата** и **вид размещения** (депозит/счёт и т.д. по меню); связь с **[КБК](/glossary/kbk)** и формами **[ГВФ](/glossary/extrabudgetary-funds)** требует отдельной методики.

**Пробелы**: исторические публикации могут быть перенесены в **[архив раздела](https://roskazna.gov.ru/finansovye-operacii/archive)**; скриптам может понадобиться `User-Agent`.

## Периодичность обновления

По мере размещения новых файлов в таблице на листовых страницах; точные интервалы зависят от операций фонда и регламента раскрытия на портале Казначейства.

## Ограничения и особенности

- Национальное объединение **[ПФР и ФСС](/organizations/sfr)** ведёт собственные публичные контуры; эта ветка — **казначейская витрина** финансовых операций размещения, а не полный реестр всех данных фонда.
- Не смешивайте с **[исполнением бюджетов ГВФ в разделе «Исполнение бюджетов»](/data-sources/federal/roskazna-extrabudgetary-funds-execution)** без проверки показателей.

## Примеры доступа

```bash
path=$(curl -fsSL -A 'Mozilla/5.0' \
  'https://roskazna.gov.ru/finansovye-operacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii/razmeschenie-sredstv-fonda-pensionnogo-i-socialnogo-strahovaniya-rossiyskoy-federacii-na-bankovskih-depozitah' \
  | sed -n 's/.*href="\(/storage\/operation-day-files\/[^"]*\)".*/\1/p' | head -1)
curl -fsSL -A 'Mozilla/5.0' -O "https://roskazna.gov.ru${path}"
```

## Связанные страницы wiki

- **[Социальный фонд России (организация)](/organizations/sfr)** — оператор социального страхования и пенсионного страхования после реорганизации ПФР и ФСС.
- **[Казначейство: бюджеты государственных внебюджетных фондов](/data-sources/federal/roskazna-extrabudgetary-funds-execution)** — **[формы исполнения ГВФ](/data-sources/federal/roskazna-extrabudgetary-funds-execution)** на `roskazna.gov.ru`, смежные по теме **фондов**, но другой тип отчётности.
- **[Портал Федерального казначейства](/information-systems/federal/roskazna-portal)** — общая витрина оператора.
- **[Минфин: исполнение бюджетов ГВФ](/data-sources/federal/minfin-outbud-execute)** — макро-XLSX Минфина для сопоставления с казначейскими формами **ГВФ**.

## Не путать с

- **[Размещение средств единого счёта федерального бюджета](/data-sources/federal/roskazna-finops-federal-budget-account-placements)** — операции **федерального бюджета**, а не размещение средств **фонда** ПФР и соцстраха.
