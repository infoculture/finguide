---
title: 'Кемеровская область — Кузбасс: Департамент контрактной системы (ugzko.ru)'
sidebar_label: Закупки Кузбасса (ugzko.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
source_url: 'https://ugzko.ru/'
data_source_kind: portal
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
description: >-
  Официальный портал Департамента контрактной системы Кемеровской области —
  Кузбасса: нормативка, новости и методическая поддержка заказчиков; дополняет
  ЕИС, но не заменяет контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-city-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /information-systems/federal/zakupki
  - /data-sources/federal/procurement
  - /reporting/procurement-contract-reporting
  - /legal/44fz
  - /legal/223-fz
  - /howto/analysis/procurement-analysis
---

# Кемеровская область — Кузбасс: Департамент контрактной системы (ugzko.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Кемеровская область — Кузбасс** — **региональный** орган и витрина политики **контрактной системы** в сфере закупок |
| Тип доступа | **Публичный портал** департамента |
| Основные форматы | **HTML**; вложения по ссылкам (часто **PDF**) |
| Оператор | **Департамент контрактной системы Кемеровской области — Кузбасса** (по подписи на сайте) |
| Режим доступа | Открытое чтение публичных разделов |

Коротко: **официальный вход** к **региональной** политике и методике госзаказа Кузбасса; для **извещений и контрактов** по **44-ФЗ** и **223-ФЗ** в общероссийском реестре используйте **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам региона.

## Описание

Сайт **ugzko.ru** публикует **новости**, **нормативные** и **методические** материалы департамента, сведения о деятельности и контакты. **Массовый контрактный след** и **единые** машиночитаемые выгрузки федерального контура сопоставляйте с **ЕИС** по **реестровым номерам**, **ИНН заказчика** и дате.

## Оператор

**Департамент контрактной системы Кемеровской области — Кузбасса** — https://ugzko.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень портала | https://ugzko.ru/ |

Структура меню **меняется** при обновлении сайта; ориентируйтесь на **корень** домена и актуальную навигацию.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — акцент на **региональной** политике и сопровождении заказчиков |
| Машиночитаемость | **Преимущественно HTML/PDF**; **массовые** выгрузки контрактов — через **ЕИС** |
| Юридическая значимость | **Официальный** орган исполнительной власти субъекта |

## Объекты данных и показатели

- **Нормативные и методические материалы** департамента для заказчиков Кузбасса.
- **Новости и разъяснения** по региональным особенностям закупок.
- **Связка с контрактами** — через **[ЕИС](/information-systems/federal/zakupki)**.

## Периодичность обновления

По мере публикаций департамента; для контрактов — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры материалами портала без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **TLS-сертификат** сайта при проверке из командной строки может **не проходить** стандартную проверку `curl` (ошибка вида «certificate problem»); для **smoke-проверки** допускается `curl -fkSL` или проверка через браузер.
- **Муниципальные** заказчики могут иметь **дополнительные** публикации; эта карточка — **областной** контур.

## Примеры доступа

Проверка доступности корня (при ошибке сертификата — флаг **`-k`**):

```bash
curl -fsSLk -A "finguide-ugzko-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://ugzko.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы](/data-sources/regional/moscow-city-procurement-tender-mos), [СПб](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [Свердловская область](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [РС(Я)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [РД](/data-sources/regional/dagestan-procurement-komzak-e-dag), [Югра (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [Калининградская область (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; департамент **не** заменяет его для полноты юридически значимых публикаций по 44/223.

## Частые вопросы

**В:** Почему `curl` без флагов падает с ошибкой сертификата?

**О:** Конфигурация **TLS** на стороне сайта может не совпадать с ожиданиями вашего клиента; для **ручной** проверки доступности используйте браузер или `curl -k` осознанно, а для **аналитики контрактов** опирайтесь на **ЕИС**.
