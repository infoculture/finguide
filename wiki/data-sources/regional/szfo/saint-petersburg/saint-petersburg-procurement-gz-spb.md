---
title: 'Санкт-Петербург: Комитет по государственному заказу (gz-spb.ru)'
sidebar_label: Закупки СПб (gz-spb.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-15
slug: /data-sources/regional/saint-petersburg-procurement-gz-spb
source_url: 'https://www.gz-spb.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-15
description: >-
  Официальный портал Комитета по государственному заказу Санкт-Петербурга:
  система госзаказа города, АИС ГЗ, методические материалы; дополняет ЕИС, но
  не заменяет контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/saint-petersburg-finance-committee-fincom
  - /data-sources/regional/saint-petersburg-open-data-gov-spb
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /howto/analysis/procurement-analysis
---

# Санкт-Петербург: Комитет по государственному заказу (gz-spb.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Санкт-Петербург** (субъект РФ) — политика и инфраструктура **государственного заказа** города; смежные страницы Администрации могут дублировать входы — ориентируйтесь на **актуальную** ссылку с `gz-spb.ru` |
| Тип доступа | **Публичный портал** комитета |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**) |
| Оператор | **Комитет по государственному заказу Санкт-Петербурга** |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный вход** к **системе закупок** Санкт-Петербурга (в т.ч. **АИС ГЗ**); для **извещений и контрактов** по **44-ФЗ** и **223-ФЗ** используйте **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам города.

## Описание

Портал **gz-spb.ru** публикует **нормативные** и **организационные** материалы комитета, сведения об **автоматизированной информационной системе государственного заказа (АИС ГЗ)** и сопутствующие сервисы. **Контрактный след** и **унифицированные XML-выгрузки** массовых процедур сопоставляйте с **ЕИС** по **реестровому номеру**, **ИНН заказчика** и дате.

## Оператор

**Комитет по государственному заказу Санкт-Петербурга** — https://www.gz-spb.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень портала | https://www.gz-spb.ru/ |

Структура меню и подразделы **меняются** при редизайне; для постоянной закладки используйте **корень** домена и переходите по актуальным разделам («Нормативные акты», «АИС ГЗ», «Обучение» и т.п.).

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-15 |
| Полнота | **Частичная относительно ЕИС** — акцент на городской политике закупок и АИС |
| Машиночитаемость | **Преимущественно HTML/PDF** на сайте; **массовые** таблицы контрактов — через **ЕИС** |
| Юридическая значимость | **Официальный** орган Администрации Санкт-Петербурга |

## Объекты данных и показатели

- **Методические материалы и разъяснения** комитета для заказчиков города.
- **Сведения об АИС ГЗ** — как оформлен доступ, обновления и ограничения (читайте текст на странице комитета).
- **Связка с контрактами** — через **[ЕИС](/information-systems/federal/zakupki)** по идентификаторам заказчика (ИНН/ОГРН органов СПб).

## Периодичность обновления

По мере публикаций комитета; для контрактов — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры сайтом комитета без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- Смежные разделы на **gov.spb.ru** (например ведомственные «госзаказ») могут **дублировать** или **перенаправлять** на `gz-spb.ru` — проверяйте **дату** и **источник** на странице.

## Примеры доступа

```bash
curl -fsSL -A "finguide-gz-spb-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://www.gz-spb.ru/"
```

## Связанные страницы wiki

- [Комитет финансов СПб](/data-sources/regional/saint-petersburg-finance-committee-fincom) — бюджет и лимиты заказчиков города.
- [Открытые данные СПб](/data-sources/regional/saint-petersburg-open-data-gov-spb) — смежные наборы по темам Администрации.
- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы (tender.mos.ru)](/data-sources/regional/moscow-procurement-tender-mos) — аналогичная роль **городского** оператора закупочной политики.
- [Закупки Татарстана (goszakupki.tatarstan.ru)](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan) — **региональный** комитет по закупкам субъекта РФ.
- [Закупки Краснодарского края (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar) — **краевой** департамент по регулированию контрактной системы.
- [Закупки Свердловской области (goszakaz.midural.ru)](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural) — **областной** департамент госзаказа и витрина **torgi.egov66.ru**.
- [Закупки РС(Я) (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov) — **республиканский** центр закупок на домене Правительства.
- [Закупки РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag) — **республиканский** комитет и ИС **goszakaz.e-dag.ru**.
- [Закупки Кузбасса (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko) — **областной** департамент контрактной системы.
- [Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao) — **окружная** региональная ИС на домене Правительства ХМАО — Югры.
- [Закупки Калининградской области (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — **региональная** ИС **39** региона и централизованная модель через Конкурсное агентство.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** контур; комитет СПб **не** заменяет реестр извещений и контрактов.

## Частые вопросы

**В:** Где скачать все контракты заказчиков СПб одним архивом?

**О:** Используйте **выгрузки ЕИС** и фильтры по **ИНН/региону** заказчика; портал комитета даёт **контекст** и **методику**, а не полный дубликат массовых данных ЕИС.
