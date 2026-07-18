---
title: Open Budget Survey — портал, данные и архив раундов
sidebar_label: Open Budget Survey (IBP)
description: Общий портал IBP с методологией, страновыми результатами и загрузками Open Budget Survey; навигатор к конкретному российскому срезу 2023 года.
tags: [data-source, international, budget]
last_updated: 2026-07-16
slug: /data-sources/international/ibp-open-budget-survey
content_type: data_source
entity_type: data-source
relationships:
  - type: published_by
    target: /organizations/international-budget-partnership
source_url: https://internationalbudget.org/open-budget-survey/
data_source_kind: portal
jurisdiction: multilevel
access: open
formats: [html, pdf]
status: current
last_verified: 2026-07-16
jurisdiction_level: international
data_completeness: partial
machine_readability: mixed
legal_significance: civil_repackaging
update_lag: by survey round
archive_depth: rounds since 2006; country coverage varies
license_or_terms: International Budget Partnership terms
related_pages:
  - /organizations/international-budget-partnership
  - /data-sources/international/open-budget-survey-russia-2023
  - /reference/international-gfs-cofog
  - /howto/analysis/international-fiscal-data
---

# Open Budget Survey — портал, данные и архив раундов

| Признак | Значение |
| :--- | :--- |
| Уровень и охват | Международное сравнительное исследование центральных бюджетов; состав стран зависит от раунда |
| Тип доступа | Веб-портал, страновые страницы, PDF и отдельная страница загрузки данных |
| Основные форматы | HTML, PDF; формат сводной выгрузки нужно проверять для выбранного раунда |
| Оператор | International Budget Partnership (IBP) |
| Режим доступа | Открытый просмотр; повторное использование — по условиям IBP |

Коротко: это общий навигатор по Open Budget Survey — методологии, страновым результатам, архиву и загрузкам. Для российского анализа переходите к отдельной карточке [OBS Russia 2023](/data-sources/international/open-budget-survey-russia-2023), чтобы не смешивать текущую страницу портала с временной границей конкретного раунда.

## Качество и верификация

| Измерение | Значение для этой карточки |
| --- | --- |
| Дата проверки (`last_verified`) | 2026-07-16 |
| Полнота (`data_completeness`) | Частичная: портал охватывает раунды с 2006 года, но набор стран и опубликованных приложений различается |
| Машиночитаемость (`machine_readability`) | Смешанная: HTML/PDF и отдельные загрузки, формат которых проверяется для каждого раунда |
| Юридическая значимость (`legal_significance`) | Независимая гражданская оценка, не официальный бюджетный регистр |
| Задержка обновления (`update_lag`) | По раундам исследования; показатель описывает cutoff раунда, а не состояние на день просмотра |
| Глубина архива (`archive_depth`) | Раунды с 2006 года; страновые ряды могут начинаться позднее |
| Лицензия (`license_or_terms`) | Условия International Budget Partnership на странице материала |

## Описание

Open Budget Survey оценивает три измерения: прозрачность бюджетной информации, формальные возможности общественного участия и эффективность законодательного/аудиторского надзора. Портал объединяет результаты разных раундов, поэтому название последнего раунда нельзя автоматически переносить на Россию: наличие страны и cutoff нужно проверять на страновой странице.

## Оператор

[International Budget Partnership](/organizations/international-budget-partnership) — независимый издатель методологии, страновых анкет и итоговых оценок.

## URL и точки доступа

| Тип доступа | URL | Формат |
| --- | --- | --- |
| Главная Open Budget Survey | https://internationalbudget.org/open-budget-survey/ | HTML |
| Загрузка данных по раундам | https://internationalbudget.org/open-budget-survey/download | HTML, файлы выбранного раунда |
| Страновые результаты | https://internationalbudget.org/open-budget-survey/country-results/ | HTML |
| Россия, раунд 2023 | https://internationalbudget.org/open-budget-survey/country-results/2023/russia | HTML, PDF |

## Объекты данных и показатели

- страна и раунд исследования;
- баллы прозрачности, участия и надзора по шкале 0–100;
- ответы анкеты и признаки доступности ключевых бюджетных документов;
- методические ключи: дата cutoff, оцениваемый финансовый год и версия анкеты.

## Периодичность обновления

Новые результаты публикуются раундами, а не как оперативный бюджетный ряд. На дату проверки IBP выпускал результаты OBS 2025 поэтапно по регионам; российский канонический срез в этой wiki остаётся раундом 2023 с cutoff 31 декабря 2022 года.

## Ограничения и особенности

- OBS измеряет доступность и институты, а не суммы исполнения бюджета по КБК.
- Результаты разных раундов сравниваются только после проверки неизменности вопроса и состава индикаторов.
- Сводный файл и страновой PDF могут иметь разные уровни детализации; первичные бюджетные документы сверяются у национальных органов.

## Связанные страницы wiki

- [Open Budget Survey Russia 2023](/data-sources/international/open-budget-survey-russia-2023) — российские баллы, документы и cutoff конкретного раунда.
- [International Budget Partnership](/organizations/international-budget-partnership) — организация-публикатор и границы её роли.
- [Как выбирать международный фискальный набор](/howto/analysis/international-fiscal-data) — отличие институционального индекса от статистических рядов IMF/OECD.
- [GFS и COFOG](/reference/international-gfs-cofog) — методическая рамка для количественных данных, которую OBS не заменяет.

## Не путать с

- **Open Budget Index** — это компонент прозрачности OBS, а не сумма трёх измерений и не отдельный реестр бюджетных операций.

