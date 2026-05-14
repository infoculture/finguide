---
title: 'Свердловская область: Департамент государственных закупок (goszakaz.midural.ru)'
sidebar_label: Закупки Свердловской области (goszakaz.midural.ru)
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14T00:00:00.000Z
slug: /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
source_url: 'https://goszakaz.midural.ru/'
data_source_kind: mixed
jurisdiction: regional
access: open
formats:
  - html
status: current
last_verified: 2026-05-14
description: >-
  Официальный портал Департамента государственных закупок Свердловской области
  на домене Правительства региона и смежная региональная витрина закупок
  (torgi.egov66.ru); дополняют ЕИС, но не заменяют контрактный реестр 44-ФЗ/223-ФЗ.
content_type: data_source
entity_type: data-source
related_pages:
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-city-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
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

# Свердловская область: Департамент государственных закупок (goszakaz.midural.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | **Свердловская область** — **областной** контур госзаказа: департамент и связанная **информационная витрина** закупок региона |
| Тип доступа | **Публичный портал** департамента на инфраструктуре **midural.ru**; отдельный вход **torgi.egov66.ru** для реестров и карточек закупок в региональном контуре |
| Основные форматы | **HTML**; вложения (**PDF** и др.); при наличии — выгрузки и формы на **torgi.egov66.ru** (см. актуальные разделы сайта) |
| Оператор | **Департамент государственных закупок Свердловской области** |
| Режим доступа | Открытое чтение публичных разделов (отдельные кабинеты заказчиков — по правилам портала) |

Коротко: **официальный вход** к **региональной** политике и методике госзаказа области и к **дополнительной** витрине закупок; для **извещений и контрактов** по **44-ФЗ** и **223-ФЗ** в общероссийском реестре опирайтесь на **[ЕИС](/information-systems/federal/zakupki)** и **[сведения о закупках](/data-sources/federal/procurement)** с фильтром по заказчикам Свердловской области.

## Описание

Портал **goszakaz.midural.ru** публикует **новости**, **нормативные** и **методические** материалы департамента, сведения для заказчиков и ссылки на смежные сервисы. **Информационная система в сфере закупок** области доступна по домену **torgi.egov66.ru** (реестры, карточки процедур и контрактов в **региональном** оформлении). **Юридическую** полноту и **унифицированные** массовые выгрузки по федеральному контуру сверяйте с **ЕИС** по **реестровым номерам**, **ИНН** и датам.

## Оператор

**Департамент государственных закупок Свердловской области** — https://goszakaz.midural.ru/

## URL и точки доступа

| Назначение | URL |
| --- | --- |
| Корень портала департамента | https://goszakaz.midural.ru/ |
| Региональная витрина закупок (ИС) | https://torgi.egov66.ru/ |

Структура разделов и поддомены **меняются** при обновлении порталов; закладку держите на **корне** департамента и переходите по актуальным ссылкам на **torgi.egov66.ru** с его страницы.

## Качество и верификация

| Измерение | Значение |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота | **Частичная относительно ЕИС** — региональный контур **дополняет** федеральный; пересечения по контрактам проверяйте по идентификаторам |
| Машиночитаемость | **Преимущественно HTML** на сайтах; **массовые** XML/выгрузки по 44/223 — через **ЕИС** |
| Юридическая значимость | **Официальный** орган исполнительной власти Свердловской области |

## Объекты данных и показатели

- **Методические материалы и разъяснения** департамента для заказчиков области.
- **Реестры и карточки** на **torgi.egov66.ru** — для сопоставления с **ЕИС** (дублирование возможно).
- **Связка с федеральным контрактным следом** — через **[ЕИС](/information-systems/federal/zakupki)** по идентификаторам закупки и контракта.

## Периодичность обновления

По мере публикаций департамента и событий в региональной ИС; для федерального реестра — дата в **ЕИС**.

## Ограничения и особенности

- Не подменяйте **юридическую** фиксацию процедуры материалами региональных сайтов без сверки с **ЕИС** и **[44-ФЗ](/legal/44fz)** / **[223-ФЗ](/legal/223-fz)**.
- **Муниципальные** заказчики могут иметь **собственные** публикации; эта карточка описывает **областной** контур.

## Примеры доступа

```bash
curl -fsSL -A "finguide-goszakaz66-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://goszakaz.midural.ru/"
```

## Связанные страницы wiki

- [Навигатор по региональным закупкам](/data-sources/regional/regional-procurement-sources-overview).
- [Закупки Москвы (tender.mos.ru)](/data-sources/regional/moscow-city-procurement-tender-mos), [СПб (gz-spb.ru)](/data-sources/regional/saint-petersburg-procurement-gz-spb), [Татарстан](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [Краснодарский край](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [РС(Я) (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag), [Кузбасс (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [Югра (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [Калининградская область (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) — другие **субнациональные** витрины.

## Не путать с

- **[ЕИС](/information-systems/federal/zakupki)** — федеральный **контрактный** реестр; региональные порталы **не** заменяют его для массовой юридической фиксации по 44/223.

## Частые вопросы

**В:** Контракт есть на torgi.egov66.ru, но в моей выгрузке ЕИС его нет (или наоборот).

**О:** Сверяйте **реестровый номер**, **ИНН заказчика** и **дату**; возможны **задержки** синхронизации или **разные** контуры публикации (региональный срез vs федеральная выгрузка).
