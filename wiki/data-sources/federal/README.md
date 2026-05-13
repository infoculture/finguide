---
title: Федеральные источники
sidebar_label: Федеральные источники
sidebar_position: 0
tags:
  - data-source
  - federal
last_updated: 2026-05-13T12:00:00.000Z
content_type: reference
description: >-
  Открытые данные федеральных органов и операторов ГИС: каталог data.gov.ru,
  бюджетные выгрузки, закупки, учреждения и статистика по единым шаблонам карточек.
related_pages:
  - /data-sources
  - /data-sources/regional
  - /data-sources/federal/minfin-opendata
  - /data-sources/federal/budget-gov-ru-datasets
  - /data-sources/federal/roskazna-reports
  - /information-systems/federal/giis-eb
  - /intro/data-map
---

# Федеральные источники данных

Открытые данные федеральных органов власти и операторов государственных информационных систем.

Карточки сгруппированы по подпапкам в репозитории (`catalog/`, `budget/`, `zakupki/`, `programs-orgs/`, `statistics/`, `nalog/`, `legacy/`); публичные URL вида `/data-sources/federal/<slug>` сохранены через поле `slug` в frontmatter.

## Для кого

- Аналитикам федерального контура: план, исполнение, закупки, учреждения, налоговая и макростатистика.
- Разработчикам пайплайнов, которым важны **стабильные идентификаторы** (КБК, ИНН, период) и границы каждой витрины.

## Быстрые входы

| Задача | Карточка |
| --- | --- |
| Сшить роспись и исполнение с КБК | [Наборы ГИИС «Электронный бюджет»](./budget/ebudget/budget-gov-ru-datasets.md), [открытые данные Минфина](./budget/minfin/minfin-opendata.md) |
| Касса и отчёты об исполнении | [Отчёты Казначейства](./budget/roskazna/roskazna-reports.md), [витрины datamarts](./budget/roskazna/roskazna-datamarts.md) |
| Закупки и контракты | [ЕИС](./zakupki/procurement.md), [ЕАТ](./zakupki/agregatoreat-ru.md), [статистика на главной ЕИС](./zakupki/zakupki-eis-statistics.md), [XML ЕИС](./zakupki/zakupki-xml.md) |
| Субнациональный контур | [Региональные источники](/data-sources/regional/) |
| Сценарий без названия набора | [Карта данных](/intro/data-map) |

## Типовые вопросы

**Почему так много карточек Росказначейства?** Разные срезы одного портала вынесены отдельно, чтобы в карточке были чёткие URL и ограничения.

**Где оператор системы, а не только файлы?** См. раздел [Информационные системы](/information-systems/federal/) (например [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb)).

## Федеральный каталог открытых данных

- [Портал data.gov.ru](./catalog/data-gov-ru.md)
- [e-disclosure.ru — раскрытие эмитентов (Интерфакс)](./catalog/e-disclosure-ru.md)
- [ПАО «Газпром»: раскрытие для инвесторов](./catalog/gazprom-investor-disclosure.md)
- [РЖД: корпоративное раскрытие (company.rzd.ru)](./catalog/rzd-holding-disclosure.md)

## Бюджетные данные

- [Наборы данных ГИИС «Электронный бюджет»](./budget/ebudget/budget-gov-ru-datasets.md)
- [Единая площадка мер финансовой поддержки (promote.budget.gov.ru)](./budget/ebudget/promote-budget-gov-ru.md)
- [Открытые данные Минфина](./budget/minfin/minfin-opendata.md)
- [Дополнительные нефтегазовые доходы федерального бюджета (fedbud/oil)](./budget/minfin/minfin-fedbud-oil.md)
- [Данные о движении средств и результатах управления ФНБ (statistics/fonds/fnb)](./budget/minfin/minfin-fnb-statistics.md)
- [Краткая информация об исполнении федерального бюджета (fedbud/execute)](./budget/minfin/minfin-fedbud-execute.md)
- [Краткая информация об исполнении консолидированного бюджета РФ и ГВФ (conbud/execute)](./budget/minfin/minfin-conbud-execute.md)
- [Краткая информация об исполнении консолидированных бюджетов субъектов (subbud/execute)](./budget/minfin/minfin-subbud-execute.md)
- [Краткая информация об исполнении бюджетов государственных внебюджетных фондов (outbud/execute)](./budget/minfin/minfin-outbud-execute.md)
- [Объём и структура госдолга субъектов РФ и долга муниципальных образований (gov_debt/debt_constituent_entities)](./budget/minfin/minfin-debt-constituent-entities.md)
- [Отчёты Казначейства (обзор раздела «Исполнение бюджетов»)](./budget/roskazna/roskazna-reports.md)
- [Казначейство: иллюстрированное издание об исполнении бюджетов](./budget/roskazna/roskazna-illustrated-budget-publication.md)
- [Казначейство: федеральный бюджет](./budget/roskazna/roskazna-federal-budget-execution.md)
- [Казначейство: консолидированный бюджет РФ и бюджеты ГВФ](./budget/roskazna/roskazna-consolidated-rf-and-ebf-execution.md)
- [Казначейство: консолидированные бюджеты субъектов РФ](./budget/roskazna/roskazna-consolidated-subjects-execution.md)
- [Казначейство: бюджеты государственных внебюджетных фондов](./budget/roskazna/roskazna-extrabudgetary-funds-execution.md)
- [Казначейство: статистика государственных финансов РФ](./budget/roskazna/roskazna-state-finances-statistics.md)
- [Казначейство: свод по федеральным бюджетным и автономным учреждениям](./budget/roskazna/roskazna-federal-institutions-execution-summary.md)
- [Казначейство: свод по учреждениям субъектов РФ (местных бюджетов)](./budget/roskazna/roskazna-regional-institutions-execution-summary.md)
- [Казначейство: использование выделяемых бюджетных средств](./budget/roskazna/roskazna-budget-funds-use.md)
- [Казначейство: исполнение ПП РФ № 658](./budget/roskazna/roskazna-pp658-execution.md)
- [Казначейство: размещение средств ЕКС (финансовые операции)](./budget/roskazna/roskazna-finops-treasury-account-placements.md)
- [Казначейство: размещение средств единого счёта федерального бюджета](./budget/roskazna/roskazna-finops-federal-budget-account-placements.md)
- [Казначейство: размещение средств Фонда пенсионного и социального страхования РФ](./budget/roskazna/roskazna-finops-pension-social-fund-placements.md)
- [Казначейство: привлечение средств на ЕКС](./budget/roskazna/roskazna-finops-treasury-account-fundraising.md)
- [Казначейство: операционный день](./budget/roskazna/roskazna-finops-operating-day.md)
- [Витрины данных Казначейства](./budget/roskazna/roskazna-datamarts.md)

## Закупки, контракты и имущественные торги

- [Минфин: мониторинг закупок (отчёты PDF)](./zakupki/minfin-purchases-monitoring.md)
- [ЕИС Закупки: статистика на главной (госзакупки и контракты)](./zakupki/zakupki-eis-statistics.md)
- [Сведения о закупках и контрактах (ЕИС)](./zakupki/procurement.md)
- [Единый агрегатор торговли (agregatoreat.ru)](./zakupki/agregatoreat-ru.md)
- [XML-выгрузки ЕИС Закупки](./zakupki/zakupki-xml.md)
- [ГИС «Торги» (torgi.gov.ru)](./zakupki/torgi-gov-ru.md)

## Учреждения, госпрограммы и внешний контроль

- [Мониторинг образования: организации ВО (monitoring.miccedu.ru)](./programs-orgs/miccedu-monitoring-vpo.md)
- [ГИС «Наука»: НИОКТР, РИД и связь с бюджетным финансированием](./programs-orgs/gisnauka-niokr-rid-budget.md)
- [Открытые данные bus.gov.ru](./programs-orgs/bus-opendata.md)
- [programs.economy.gov.ru — веб-клиент АИС ГП](./programs-orgs/programs-economy-ais-gp.md)
- [Данные ГАС «Управление»](./programs-orgs/gasu-programs.md)
- [ГАС «Управление» — реестр документов стратегического планирования](./programs-orgs/gasu-stratdocuments.md)
- [Перечень объектов капитального строительства (PDF, government.ru)](./programs-orgs/perechen-obektov-kapitalnogo-stroitelstva.md)
- [Реестр соглашений о защите и поощрении капиталовложений (СпИК, budget.gov.ru)](./programs-orgs/szpk-registry.md)
- [Счётная палата: открытые данные и материалы аудита](./programs-orgs/accounts-chamber-opendata.md)

## Налоговая служба (открытые данные ФНС)

Машиночитаемые **наборы открытых данных** с паспортами на сайте ФНС ([витрина «Открытые данные»](https://www.nalog.gov.ru/rn77/opendata/)): отдельная карточка на каждый идентификатор `7707329152-*` в каталоге [`nalog/`](./nalog/). Это **не** то же самое, что сводные таблицы **налоговой статистики** и **госрегистрации** ниже: там другие URL, прежде всего HTML/XLSX-витрины разделов «Статистика и аналитика».

- [ГИР БО — бухгалтерская (финансовая) отчётность организаций (bo.nalog.gov.ru)](./nalog/bo-nalog-gov-ru.md) — публичный поиск и просмотр отчётности юрлиц, представленной в ФНС; не путать с паспортами opendata и с отчётностью учреждений на bus.gov.ru.
- [Единый реестр субъектов МСП — публичный портал (rmsp.nalog.ru)](./nalog/rmsp-nalog-ru.md) — поиск, статистика и Excel по реестру МСП; машиночитаемые выгрузки — в наборе [7707329152-rsmp](./nalog/7707329152-rsmp.md).
- [Сервис «Прозрачный бизнес» (pb.nalog.ru)](./nalog/pb-nalog-ru.md) — сводные карточки организаций и ИП, отраслевые ориентиры и калькулятор налоговой нагрузки; не путать с каталогом opendata и с ГИР БО по полноте форм отчётности.

## Налоговая, таможенная и банковская статистика

- [Налоговая статистика ФНС](./statistics/nalog-statistics.md)
- [Статистика государственной регистрации ЮЛ и ИП (ФНС)](./statistics/nalog-regstats.md)
- [Таможенная статистика и ОД ФТС](./statistics/fts-customs-statistics.md)
- [Росстат: статистика внешней торговли](./statistics/rosstat-external-trade.md)
- [Официальная статистика Росстата (ЕМИСС, открытые данные)](./statistics/rosstat-opendata.md)
- [Росстат: Show Data — finder (showdata.rosstat.gov.ru)](./statistics/rosstat-showdata-finder.md)
- [Росстат: публичный BI-портал (Contour BI, bi.rosstat.gov.ru)](./statistics/rosstat-bi-portal.md)
- [Статистика Банка России](./statistics/cbr-statistics.md)
- [СФР: поступление и расходование средств (согласованный перечень показателей)](./statistics/sfr-receipt-expenditure.md)

## Сводные данные открытых данных (legacy)

Описания типов данных из старой версии книги:

- [Бюджетная роспись](./legacy/budgetrosp.md)
- [Бюджетные организации](./programs-orgs/budorgs.md)
- [Государственные задания](./programs-orgs/govtasks.md)
- [ЛБО](./legacy/lbo.md)
- [Муниципальные бюджеты](./legacy/municipalnye-byudzhety.md)
- [Национальные проекты](./programs-orgs/natproj.md)
- [Сведения об организациях](./programs-orgs/orgsinfo.md)
- [Отчёты об исполнении бюджетов](./legacy/otchety-ob-ispolnenii-byudzhetov.md)
- [Закупки](./zakupki/procurement.md)
- [Региональные бюджеты](./legacy/regionalnye-byudzhety.md)
- [Расходные обязательства](./legacy/spendingobligations.md)
- [Субсидии](./programs-orgs/subsidy.md)
- [ФЦП](./programs-orgs/fcp.md)
