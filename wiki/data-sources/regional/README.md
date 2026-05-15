---
title: Региональные источники
sidebar_label: Региональные
tags:
  - data-source
  - regional
last_updated: 2026-05-14T00:00:00.000Z
content_type: reference
description: >-
  Региональные и муниципальные витрины, консолидированные бюджеты субъектов и методика поиска официальных публикаций.
related_pages:
  - /data-sources
  - /data-sources/federal
  - /data-sources/regional/cfo
  - /data-sources/regional/szfo
  - /data-sources/regional/yufo
  - /data-sources/regional/skfo
  - /data-sources/regional/pfo
  - /data-sources/regional/urfo
  - /data-sources/regional/sfo
  - /data-sources/regional/dfo
  - /data-sources/regional/subject-moscow-sources-overview
  - /data-sources/regional/subject-moscow-oblast-sources-overview
  - /data-sources/regional/subject-saint-petersburg-sources-overview
  - /data-sources/regional/subject-republic-of-tatarstan-sources-overview
  - /data-sources/regional/subject-krasnodar-krai-sources-overview
  - /data-sources/regional/subject-sverdlovsk-oblast-sources-overview
  - /data-sources/regional/subject-republic-of-sakha-yakutia-sources-overview
  - /data-sources/regional/subject-republic-of-dagestan-sources-overview
  - /data-sources/regional/subject-kemerovo-oblast-kuzbass-sources-overview
  - /data-sources/regional/subject-khmao-yugra-sources-overview
  - /data-sources/regional/subject-kaliningrad-oblast-sources-overview
  - /data-sources/regional/subject-novosibirsk-oblast-sources-overview
  - /data-sources/regional/subject-nizhny-novgorod-oblast-sources-overview
  - /data-sources/regional/subnational-debt-overview
  - /data-sources/regional/regional-extrabudgetary-health-overview
  - /data-sources/regional/moscow-mgfoms
  - /data-sources/regional/moscow-oblast-tfoms-mofoms
  - /data-sources/regional/regional-procurement-sources-overview
  - /data-sources/regional/moscow-procurement-tender-mos
  - /data-sources/regional/saint-petersburg-procurement-gz-spb
  - /data-sources/regional/tatarstan-procurement-goszakupki-tatarstan
  - /data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar
  - /data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural
  - /data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov
  - /data-sources/regional/dagestan-procurement-komzak-e-dag
  - /data-sources/regional/kemerovo-kuzbass-procurement-ugzko
  - /data-sources/regional/khmao-yugra-procurement-zakupki-admhmao
  - /data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39
  - /data-sources/regional/regional-disclosure-matrix
  - /data-sources/regional/large-city-budgets
  - /data-sources/regional/novosibirsk-city-open-budget-mayor
  - /data-sources/regional/nizhny-novgorod-city-open-budget-budgetnn
  - /data-sources/regional/how-to-find-regional-data
  - /data-sources/regional/consolidated-budgets
  - /data-sources/regional/municipal-budgets
  - /reporting/0503317
  - /howto/analysis/regional-budget-execution-case
  - /howto/analysis/regional-budget-analysis
  - /intro/data-map
---

# Региональные и муниципальные источники данных

Карточки описывают **субнациональный** контур: сайты субъектов РФ, консолидированные и местные бюджеты, открытые наборы и типовые ограничения при сопоставлении с федеральными агрегатами.

Файлы карточек источников в репозитории сгруппированы по **федеральному округу** и **субъекту** (`wiki/data-sources/regional/<округ>/<субъект>/`); публичные URL остаются плоскими: `/data-sources/regional/<slug>`. Оглавление по округам: [ЦФО](/data-sources/regional/cfo), [СЗФО](/data-sources/regional/szfo), [ЮФО](/data-sources/regional/yufo), [СКФО](/data-sources/regional/skfo), [ПФО](/data-sources/regional/pfo), [УрФО](/data-sources/regional/urfo), [СФО](/data-sources/regional/sfo), [ДФО](/data-sources/regional/dfo). Сводная страница субъекта имеет вид `/data-sources/regional/subject-<субъект>-sources-overview` (см. [`_dev/regional-directory.yaml`](../../../_dev/regional-directory.yaml)).

## Для кого

- Аналитикам региональной и муниципальной тематики, журналистам и исследователям.
- Разработчикам, которым нужна **методика поиска** до перехода к конкретному URL субъекта.

## Быстрые входы

| Задача | Материал |
| --- | --- |
| Маршрут: портал → закон → исполнение | [Как искать региональные бюджетные данные](./how-to-find-regional-data.md) |
| Консолидированный бюджет субъекта | [Консолидированные бюджеты субъектов РФ](./consolidated-budgets.md) |
| Муниципальный уровень | [Муниципальные бюджеты](./municipal-budgets.md) |
| Порталы «Открытый бюджет» | [Региональные порталы](./regional-portals.md) |
| Долг субъектов и МО (федеральный свод) | [Навигатор по субнациональному долгу](./subnational-debt-overview.md), [статистика Минфина](/data-sources/federal/minfin-debt-constituent-entities) |
| ОМС и территориальные внебюджетные фонды | [Навигатор](./regional-extrabudgetary-health-overview.md), [МГФОМС](/data-sources/regional/moscow-mgfoms), [МОФОМС](/data-sources/regional/moscow-oblast-tfoms-mofoms), [ФФОМС](/organizations/ffoms) |
| Региональные и муниципальные закупки | [Навигатор](./regional-procurement-sources-overview.md), примеры: [tender.mos.ru](/data-sources/regional/moscow-procurement-tender-mos), [gz-spb.ru](/data-sources/regional/saint-petersburg-procurement-gz-spb), [goszakupki.tatarstan.ru](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan), [drcs.krasnodar.ru](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar), [goszakaz.midural.ru](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural), [zakupki.sakha.gov.ru](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov), [komzak.e-dag.ru](/data-sources/regional/dagestan-procurement-komzak-e-dag), [ugzko.ru](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko), [zakupki.admhmao.ru](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao), [zakupki.gov39.ru](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39) |
| Форма и федеральные зеркала | [0503317](/reporting/0503317), how-to [кейс исполнения](/howto/analysis/regional-budget-execution-case), [анализ региональных бюджетов](/howto/analysis/regional-budget-analysis) |
| Пилот: раскрытие и трансферты (10 субъектов) | [Матрица раскрытия](./regional-disclosure-matrix.md), how-to [межбюджетные трансферты](/howto/analysis/interbudgetary-transfers) |
| Крупные города (агрегированный вход) | [Крупные городские бюджеты](./large-city-budgets.md) |
| Федеральный контекст | [Федеральные источники](/data-sources/federal/) |

## Типовые вопросы

**Почему нет единого API по всем субъектам?** Публикации зависят от ведомств и порталов субъекта; карточки фиксируют типовые входы, а не полный реестр URL.

**Как не смешать консолидированный бюджет субъекта с федеральным?** См. карточку [консолидированных бюджетов](./consolidated-budgets.md) и отчётность [0503317](/reporting/0503317).

## Тематические карточки

- [Как искать региональные бюджетные данные (методика)](./how-to-find-regional-data.md)
- [Консолидированные бюджеты субъектов РФ](./consolidated-budgets.md)
- [Региональные порталы «Открытый бюджет»](./regional-portals.md)
- [Муниципальные бюджеты](./municipal-budgets.md)
- [Пилотная матрица раскрытия (10 субъектов)](./regional-disclosure-matrix.md)
- [Крупные городские бюджеты](./large-city-budgets.md)
- [Новосибирск: бюджет для граждан и opendata мэрии](/data-sources/regional/novosibirsk-city-open-budget-mayor)
- [Нижний Новгород: открытый бюджет (budgetnn.ru)](/data-sources/regional/nizhny-novgorod-city-open-budget-budgetnn)
- [Субнациональный долг: навигатор](./subnational-debt-overview.md)
- [Региональное ОМС и территориальные внебюджетные фонды](./regional-extrabudgetary-health-overview.md)
- [Московский городской фонд ОМС (МГФОМС)](/data-sources/regional/moscow-mgfoms)
- [ТФОМС Московской области (МОФОМС)](/data-sources/regional/moscow-oblast-tfoms-mofoms)
- [Региональные и муниципальные закупки (навигатор)](./regional-procurement-sources-overview.md)
- [Закупки Москвы (tender.mos.ru)](/data-sources/regional/moscow-procurement-tender-mos)
- [Закупки Санкт-Петербурга (gz-spb.ru)](/data-sources/regional/saint-petersburg-procurement-gz-spb)
- [Закупки Татарстана (goszakupki.tatarstan.ru)](/data-sources/regional/tatarstan-procurement-goszakupki-tatarstan)
- [Закупки Краснодарского края (drcs.krasnodar.ru)](/data-sources/regional/krasnodar-krai-procurement-drcs-krasnodar)
- [Закупки Свердловской области (goszakaz.midural.ru)](/data-sources/regional/sverdlovsk-oblast-procurement-goszakaz-midural)
- [Закупки РС(Я) (zakupki.sakha.gov.ru)](/data-sources/regional/sakha-yakutia-procurement-zakupki-sakha-gov)
- [Закупки РД (komzak.e-dag.ru)](/data-sources/regional/dagestan-procurement-komzak-e-dag)
- [Закупки Кузбасса (ugzko.ru)](/data-sources/regional/kemerovo-kuzbass-procurement-ugzko)
- [Закупки Югры (zakupki.admhmao.ru)](/data-sources/regional/khmao-yugra-procurement-zakupki-admhmao)
- [Закупки Калининградской области (zakupki.gov39.ru)](/data-sources/regional/kaliningrad-oblast-procurement-zakupki-gov39)
