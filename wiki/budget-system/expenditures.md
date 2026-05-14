---
title: Классификация расходов
sidebar_label: Классификация расходов
tags:
  - budget-system
last_updated: 2026-05-12T00:00:00.000Z
content_type: concept
description: >-
  Расходы бюджета по БК РФ и расходный КБК: ГРБС, функциональная классификация,
  КВР и связка с открытыми данными ГИИС и Казначейства.
related_pages:
  - /budget-system
  - /budget-system/revenues
  - /budget-system/federal-budget
  - /budget-classification/overview
  - /budget-classification/expense-codes
  - /glossary/kbk
  - /glossary/kvr
  - /information-systems/federal/giis-eb
---

# Классификация расходов

## Описание

**Расходы бюджета** в смысле [БК РФ](https://www.consultant.ru/document/cons_doc_LAW_19702/) — это выплаты из бюджета, не отнесённые к [источникам финансирования дефицита](/glossary/deficit-financing); в открытых данных их отличают по типу [КБК](/glossary/kbk) от доходов и ИФД (см. [доходы и расходы бюджета](/glossary/budget-revenues-expenditures)).

В **плане и исполнении** расходы детализируют **20-значным расходным КБК**: в начале строки — административный разрез (**[ГРБС](/glossary/grbs)** как первые три знака практического «кода главного администратора»), далее **функциональная классификация** (разделы **01–14**, подразделы, целевые статьи в связке с [госпрограммами](/glossary/gov-programs) и [национальными проектами](/glossary/national-projects)), затем элементы и подвиды расхода и **[КВР](/glossary/kvr)** — экономический «вид» расхода. **[КОСГУ](/glossary/kosgu)** не подставляется в КБК бюджета, но задаёт учётно-отчётный разрез операций учреждений и согласуется с КВР по официальным таблицам соответствия (см. [обзор бюджетной классификации](/budget-classification/overview)).

## Ключевые элементы

- Функциональная классификация расходов (разделы 01–14, подразделы, целевые статьи)
- Связка целевых статей с [госпрограммами](/glossary/gov-programs) и [нацпроектами](/glossary/national-projects)
- [КВР](/glossary/kvr) в составе расходного [КБК](/glossary/kbk)
- [КОСГУ](/glossary/kosgu) в бюджетном учёте и отчётности учреждений
- [ГРБС](/glossary/grbs) и иерархия распорядителей ([ПБС](/glossary/pbs) и др.)

## Где найти данные

- [ГИИС «Электронный бюджет»](/information-systems/federal/giis-eb) — планирование, роспись, открытые наборы на `budget.gov.ru`
- [Портал Минфина](/information-systems/federal/minfinsite) — открытые данные и публикации по бюджету
- [Портал Казначейства](/information-systems/federal/roskazna-portal) — отчётность об исполнении
- [Наборы данных портала «Электронный бюджет»](/data-sources/federal/budget-gov-ru-datasets) — машиночитаемые ряды по расходам и классификаторам (сверяйте год и справочники)
- [Отчёты об исполнении бюджетов](/data-sources/federal/otchety-ob-ispolnenii-byudzhetov) и [отчёты Федерального казначейства](/data-sources/federal/roskazna-reports) — факт по КБК; [агрегированные витрины](/data-sources/federal/roskazna-datamarts) — сводные срезы для аналитики
- [Открытые данные Минфина России](/data-sources/federal/minfin-opendata) — закон о бюджете и приложения с ведомственной и программной структурой расходов

## Связанные термины

- [Доходы и расходы бюджета](/glossary/budget-revenues-expenditures) — юридическое определение расходов бюджета и граница с ИФД
- [КБК](/glossary/kbk) — состав расходного кода и связь классификаторов
- [КВР](/glossary/kvr) — виды расходов по экономическому содержанию в хвосте расходного КБК
- [КОСГУ](/glossary/kosgu) — операции в учёте; соответствие КВР — по [таблице Минфина](/budget-classification/kvr-kosgu-mapping)
- [ГРБС](/glossary/grbs) — главный распорядитель и административный префикс расходного КБК
- [Госпрограммы](/glossary/gov-programs) и [национальные проекты](/glossary/national-projects) — программный контекст целевых статей
- [Казначейское исполнение](/glossary/treasury-execution) — как расходы доходят до кассового факта
- [Коды расходов](/budget-classification/expense-codes) — разбор структуры расходного КБК по позициям
