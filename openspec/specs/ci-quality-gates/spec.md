# Capability: ci-quality-gates

Непрерывная интеграция и редакционные ворота качества.

## Requirement: Extended CI pipeline

Workflow [.github/workflows/ci.yml](../../../.github/workflows/ci.yml) SHALL выполнять помимо `npm run typecheck` и `npm run build`:

- `npm run lint:frontmatter`
- `npm run lint:howto`
- `npm run export:knowledge -- --check`
- `npm run lint:qa`
- `npm run lint:related-pages`
- `npm run lint:corpus`

### Scenario: Broken metadata fails PR

- **GIVEN** pull request нарушает правила frontmatter или структуры howto
- **WHEN** запускается job `build` на GitHub Actions
- **THEN** workflow завершается ошибкой

## Requirement: External link monitoring

Проект SHOULD содержать [.github/workflows/links-weekly.yml](../../../.github/workflows/links-weekly.yml) с проверкой исходящих HTTP(S)-ссылок (например [lychee](https://github.com/lycheeverse/lychee)) по расписанию.

Проект SHOULD дополнительно запускать [.github/workflows/links-pr.yml](../../../.github/workflows/links-pr.yml) на `pull_request` с тем же объёмом путей и **`continue-on-error: true`**, чтобы не блокировать merge при нестабильных внешних ответах.

### Scenario: Мёртвая внешняя ссылка на карточке источника

- **GIVEN** еженедельный job проверки ссылок
- **WHEN** URL возвращает устойчивую ошибку
- **THEN** job может завершаться ошибкой для сигнала редакции (строгость настраивается в workflow)

### Scenario: PR с внешними ссылками не блокируется из‑за lychee

- **GIVEN** pull request и advisory-workflow `links-pr`
- **WHEN** внешний сайт временно недоступен
- **THEN** основной CI (`ci.yml`) остаётся зелёным; сбой виден в логах advisory job


Канонической конфигурацией SHALL считаться [`docusaurus.config.ts`](../../../docusaurus.config.ts); дублирующие `docusaurus.config.js` и `sidebars.js` MUST NOT содержать расходящихся определений (избыточные файлы удалены или заменены реэкспортом).

## Requirement: Issue and PR hygiene

Проект SHOULD использовать шаблоны Issues в [`.github/ISSUE_TEMPLATE/`](../../../.github/ISSUE_TEMPLATE/).

[`CONTRIBUTING.md`](../../../CONTRIBUTING.md) и [`AGENTS.md`](../../../AGENTS.md) SHALL содержать PR-чеклист для редакционных изменений.

## Requirement: Markdown heuristics

Репозиторий SHALL выполнять [`scripts/corpus-markdown-lint.mjs`](../../../scripts/corpus-markdown-lint.mjs) в CI (`npm run lint:corpus`): минимальная структура README-хабов, нижний порог объёма для карточек разделов, контроль «длинная страница без заголовков ##».

### Scenario: Регрессия README-хаба ловится в CI

- **GIVEN** новый `README.md` в `wiki/` без разделов `##`, без достаточного числа внутренних ссылок и без развёрнутого текста
- **WHEN** выполняется `npm run lint:corpus`
- **THEN** проверка завершается с ошибкой
