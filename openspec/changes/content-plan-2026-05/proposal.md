# Change: content-plan-2026-05 — корпус по аналитическому отчёту

Связанный документ: [_dev/content_plan_20260514.md](../../_dev/content_plan_20260514.md) (Wide Research, 13 мая 2026).

Этот change фиксирует **нормативные требования** к развитию wiki, метаданных, экспорта и QA. Полный текст статей и карточек остаётся в [`AGENTS.md`](../../AGENTS.md), шаблонах `wiki/**/*-template.md` и [`wiki/intro/wiki-filling-plan.md`](../../wiki/intro/wiki-filling-plan.md). При расхождении приоритетов между **wiki-filling-plan** и **content_plan** редакция SHOULD явно зафиксировать решение в Issue или в теле соответствующего `spec.md`.

**Канон путей для муниципальных источников данных:** карточки под [`wiki/data-sources/regional/`](../../wiki/data-sources/regional/) (отдельный каталог `wiki/data-sources/municipal/` не используется без отдельного изменения правил репозитория).

## Scope

- Историзация бюджетной классификации и связь с отчётностью и данными.
- Ландшафт бюджетной отчётности: обзор, связи форм, задачи аналитика.
- Пилот регионально-муниципального раскрытия и сопоставимая матрица.
- Воспроизводимые аналитические сценарии (how-to, примеры кода).
- Слой качества данных и верификации источников.
- Корпоративное раскрытие госкомпаний (отдельно от бюджетной отчётности).
- Международная сопоставимость (GFS, COFOG, SNA и осторожные сравнения).
- RAG-навигация: `related_pages`, расширяемые поля выборки, QA-запросы, политика черновиков.

## ADDED / MODIFIED (трассировка на specs)

| Capability | Файл spec | Изменения |
|------------|-----------|-----------|
| `budget-classification-temporal` | [`specs/budget-classification-temporal/spec.md`](../specs/budget-classification-temporal/spec.md) | **ADDED** |
| `reporting-landscape` | [`specs/reporting-landscape/spec.md`](../specs/reporting-landscape/spec.md) | **ADDED** |
| `regional-municipal-pilot` | [`specs/regional-municipal-pilot/spec.md`](../specs/regional-municipal-pilot/spec.md) | **ADDED** |
| `reproducible-analytics` | [`specs/reproducible-analytics/spec.md`](../specs/reproducible-analytics/spec.md) | **ADDED** |
| `data-source-quality` | [`specs/data-source-quality/spec.md`](../specs/data-source-quality/spec.md) | **ADDED** |
| `state-sector-corporate-disclosure` | [`specs/state-sector-corporate-disclosure/spec.md`](../specs/state-sector-corporate-disclosure/spec.md) | **ADDED** |
| `international-fiscal-comparability` | [`specs/international-fiscal-comparability/spec.md`](../specs/international-fiscal-comparability/spec.md) | **ADDED** |
| `rag-corpus-navigation` | [`specs/rag-corpus-navigation/spec.md`](../specs/rag-corpus-navigation/spec.md) | **ADDED** |
| `corpus-metadata` | [`specs/corpus-metadata/spec.md`](../specs/corpus-metadata/spec.md) | **MODIFIED** — опциональные поля навигации и качества |
| `howto-playbook` | [`specs/howto-playbook/spec.md`](../specs/howto-playbook/spec.md) | **MODIFIED** — аудит воспроизводимости |
| `machine-readable-export` | [`specs/machine-readable-export/spec.md`](../specs/machine-readable-export/spec.md) | **MODIFIED** — контракт JSONL при расширении полей |
| `navigation-scenarios` | [`specs/navigation-scenarios/spec.md`](../specs/navigation-scenarios/spec.md) | **MODIFIED** — редакционный маршрут в начале тематических пакетов |
| `editorial-expansion` | [`specs/editorial-expansion/spec.md`](../specs/editorial-expansion/spec.md) | **MODIFIED** — ссылки на новые capabilities |
| `search-discovery` | [`specs/search-discovery/spec.md`](../specs/search-discovery/spec.md) | **MODIFIED** — фасеты после появления полей в индексе |

## Exit criteria по горизонтам (разд. 6 отчёта)

### Ближайший горизонт (1–2 месяца)

- Единая точка входа в логику форм отчётности и их место в процессе (`reporting-landscape` — Requirement: Reporting overview entry point).
- 5–10 разобранных примеров КБК с перекрёстными ссылками (`budget-classification-temporal` — Requirement: Worked KBK examples).
- Раздел качества в шаблоне карточки источника и справочник измерений (`data-source-quality`).
- Завершённый аудит how-to на воспроизводимость с артефактом списка (`reproducible-analytics`, `howto-playbook`).
- Заполнение `related_pages` для согласованного набора ключевых страниц (`rag-corpus-navigation`).

### Средний горизонт (3–6 месяцев)

- Матрица пилотных 10 субъектов РФ с едиными признаками раскрытия (`regional-municipal-pilot`).
- Карточки крупных муниципалитетов или городов-миллионников в рамках того же capability.
- Страница хронологии и артефакты соответствия кодов между годами для ключевых переходов (`budget-classification-temporal`).
- How-to по межбюджетным трансфертам (`reproducible-analytics`).
- Карта «форма → КБК/классификация → источник → how-to» (`reporting-landscape` совместно с `budget-classification-temporal`).

### Дальний горизонт (6–12 месяцев)

- Мини-набор воспроизводимых скриптов или notebooks в согласованном каталоге репозитория (`reproducible-analytics`).
- Слой международной сопоставимости и связанные материалы (`international-fiscal-comparability`).
- Расширенный навигатор по корпоративному раскрытию госкомпаний (`state-sector-corporate-disclosure`).
- Регулярный контент-аудит актуальности НПА, форм и API (процесс: Issues, расписание, связь с `ci-quality-gates` и `data-source-quality`; детали SHOULD согласовываться с редакцией).
- Визуальная карта данных и граф связей разделов (Mermaid/PNG или производный артефакт из `exports/knowledge-graph.json`; требования MAY уточняются в `navigation-scenarios` / `machine-readable-export`).

## Примечание по реализации

После существенных правок корпуса по [`AGENTS.md`](../../AGENTS.md) по-прежнему выполняются `npm run export:knowledge` и коммит артефактов экспорта, если менялось содержимое `wiki/`.
