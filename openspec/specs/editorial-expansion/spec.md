# Capability: editorial-expansion

Содержательное расширение корпуса (области из сводного отчёта).

Детализация по аналитическому отчёту [_dev/content_plan_20260514.md](../../../_dev/content_plan_20260514.md) и change [`content-plan-2026-05`](../../changes/content-plan-2026-05/proposal.md) вынесена в спеки:

- [`budget-classification-temporal`](../budget-classification-temporal/spec.md) — история классификации и связь с данными;
- [`reporting-landscape`](../reporting-landscape/spec.md) — обзор и связи форм отчётности;
- [`regional-municipal-pilot`](../regional-municipal-pilot/spec.md) — пилот регионов и муниципалитетов;
- [`reproducible-analytics`](../reproducible-analytics/spec.md) — сценарии и воспроизводимость;
- [`data-source-quality`](../data-source-quality/spec.md) — качество источников;
- [`state-sector-corporate-disclosure`](../state-sector-corporate-disclosure/spec.md) — корпоративное раскрытие;
- [`international-fiscal-comparability`](../international-fiscal-comparability/spec.md) — международная сопоставимость;
- [`rag-corpus-navigation`](../rag-corpus-navigation/spec.md) — RAG и связанные страницы.

Ниже сохраняются обобщённые требования верхнего уровня; **Definition of Done** по направлениям MUST оставаться явным в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md) или в Issue, без противоречия детальным спекам.

## Requirement: Regional and municipal coverage

Проект SHOULD расширять [`wiki/data-sources/regional/`](../../../wiki/data-sources/regional/) и методические страницы (например [`wiki/data-sources/regional/how-to-find-regional-data.md`](../../../wiki/data-sources/regional/how-to-find-regional-data.md)) с перекрёстными ссылками на ИС и отчётность.

Критерии готовности SHOULD согласовываться с [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md).

## Requirement: State-owned enterprises and corporations

Проект SHOULD добавлять карточки и навигаторы по отчётности и данным организаций с государственным участием (см. раздел 1 плана наполнения).

## Requirement: International sources

Проект SHOULD поддерживать карточки международных витрин с пояснением сопоставимости с российскими рядами (например IMF GFS, OECD, UN Stats — см. [`wiki/data-sources/international/`](../../../wiki/data-sources/international/)).

## Requirement: Glossary and reporting depth

Глоссарий SHOULD обогащаться прикладными связями (синонимы, «не путать с», коды и формы). Отчётность SHOULD получать практические разборы форм.

## Requirement: Diagrams

Ключевые карточки MAY содержать схемы Mermaid для сложных связей (фаза 3).

Каждое направление MUST иметь явный **Definition of Done** в [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md) или связанном Issue.
