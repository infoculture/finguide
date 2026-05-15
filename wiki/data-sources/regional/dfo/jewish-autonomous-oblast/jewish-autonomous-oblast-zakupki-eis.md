---
title: 'Еврейская автономная область: закупки и ЕИС (zakupki.gov.ru)'
sidebar_label: 'Закупки ЕАО (ЕИС)'
tags:
  - data-source
  - regional
  - procurement
last_updated: 2026-05-14
slug: /data-sources/regional/jewish-autonomous-oblast-zakupki-eis
source_url: 'https://zakupki.gov.ru/epz/main/public/home.html'
data_source_kind: mixed
jurisdiction: multilevel
access: open
formats:
  - html
  - xml
status: current
last_verified: 2026-05-14
data_completeness: partial
machine_readability: mixed
description: >-
  Единая информационная система в сфере закупок: федеральная витрина для отбора
  извещений и контрактов заказчиков с территорией Еврейской автономной области.
content_type: data_source
entity_type: data-source
related_pages:
  - /information-systems/federal/zakupki
  - /data-sources/federal/zakupki-xml
  - /data-sources/regional/jewish-autonomous-oblast-minfin
  - /data-sources/regional/subject-jewish-autonomous-oblast-sources-overview
  - /data-sources/regional/how-to-find-regional-data
---

# Еврейская автономная область: закупки и ЕИС (zakupki.gov.ru)

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Федеральная ИС с отбором по заказчикам и территории (в т.ч. ЕАО) |
| Тип доступа | Веб-портал и машиночитаемые каналы по регламенту оператора |
| Основные форматы | HTML, XML (через федеральные сервисы отдачи) |
| Оператор | ЕИС в сфере закупок |
| Режим доступа | Открытый просмотр; массовые выгрузки — по правилам оператора |

Коротко: **не отдельный** региональный портал, а та же [ЕИС](/information-systems/federal/zakupki), через которую публикуются закупки **государственных и муниципальных** заказчиков ЕАО; фильтруйте по **региону заказчика**, **ИНН** и реестровым номерам.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-05-14 |
| Полнота (`data_completeness`) | Высокая по охвату закупок при корректной фильтрации; **не** заменяет бюджетное исполнение по КБК |
| Машиночитаемость (`machine_readability`) | Смешанный: HTML + XML — см. [zakupki-xml](/data-sources/federal/zakupki-xml) |
| Юридическая значимость (`legal_significance`) | Официальная публикация закупочных документов |
| Задержка обновления (`update_lag`) | Оперативная по мере размещения |
| Глубина архива (`archive_depth`) | Регламентируется правилами ЕИС |
| Лицензия (`license_or_terms`) | Пользовательское соглашение и правила ЕИС |

## Описание

Карточка заведена в контуре **Еврейской автономной области** как удобная точка входа. Канонический URL — **главная** ЕИС; ранее в импорте использовалась страница расширенного поиска, она **не** является устойчивым идентификатором всего источника.

## Оператор

См. карточку ИС [ЕИС Закупки](/information-systems/federal/zakupki).

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная ЕИС | https://zakupki.gov.ru/epz/main/public/home.html | HTML |
| Машиночитаемые выгрузки | см. [XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml) | XML / ZIP (по регламенту) |

## Объекты данных и показатели

- **Извещения, протоколы, контракты** заказчиков ЕАО (государственные и муниципальные).
- **Ключи связки**: реестровый номер контракта, ИНН заказчика, ОКТМО, КБК (если заполнено в документах).

## Периодичность обновления

Непрерывно по мере размещения документов.

## Примеры доступа

```bash
curl -fsSL -A "finguide-check/1.0" -o /dev/null -w "%{http_code}\n" \
  "https://zakupki.gov.ru/epz/main/public/home.html"
```

## Связанные страницы wiki

- [ЕИС Закупки (ИС)](/information-systems/federal/zakupki) — назначение и каналы доступа.
- [XML-выгрузки ЕИС](/data-sources/federal/zakupki-xml) — машиночитаемый контур.
- [Департамент финансов ЕАО](/data-sources/regional/jewish-autonomous-oblast-minfin) — лимиты и бюджетный контекст.
- [Сводная страница субъекта](/data-sources/regional/subject-jewish-autonomous-oblast-sources-overview) — все источники по ЕАО.

## Не путать с

- **[Депфин](/data-sources/regional/jewish-autonomous-oblast-minfin)** — бюджетное планирование; ЕИС **не** является бюджетной ИС.
