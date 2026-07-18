# Capability: ci-quality-gates

## Purpose

Непрерывная интеграция и редакционные ворота качества.
## Requirements
### Requirement: Extended CI pipeline

Workflow [.github/workflows/ci.yml](../../../.github/workflows/ci.yml) SHALL выполнять помимо `npm run typecheck` и `npm run build`:

- `npm run lint:frontmatter`
- `npm run lint:howto`
- `npm run export:knowledge -- --check`
- `npm run lint:qa`
- `npm run lint:related-pages`
- `npm run lint:corpus`

#### Scenario: Broken metadata fails PR

- **GIVEN** pull request нарушает правила frontmatter или структуры howto
- **WHEN** запускается job `build` на GitHub Actions
- **THEN** workflow завершается ошибкой

### Requirement: External link monitoring

Проект SHALL содержать [.github/workflows/links-weekly.yml](../../../.github/workflows/links-weekly.yml) с проверкой исходящих HTTP(S)-ссылок (например [lychee](https://github.com/lycheeverse/lychee)) по расписанию.

Проект SHALL дополнительно запускать [.github/workflows/links-pr.yml](../../../.github/workflows/links-pr.yml) на `pull_request` с тем же объёмом путей и **`continue-on-error: true`**, чтобы не блокировать merge при нестабильных внешних ответах.

#### Scenario: Мёртвая внешняя ссылка на карточке источника

- **GIVEN** еженедельный job проверки ссылок
- **WHEN** URL возвращает устойчивую ошибку
- **THEN** job может завершаться ошибкой для сигнала редакции (строгость настраивается в workflow)

#### Scenario: PR с внешними ссылками не блокируется из‑за lychee

- **GIVEN** pull request и advisory-workflow `links-pr`
- **WHEN** внешний сайт временно недоступен
- **THEN** основной CI (`ci.yml`) остаётся зелёным; сбой виден в логах advisory job

Канонической конфигурацией SHALL считаться [`docusaurus.config.ts`](../../../docusaurus.config.ts); дублирующие `docusaurus.config.js` и `sidebars.js` MUST NOT содержать расходящихся определений (избыточные файлы удалены или заменены реэкспортом).

### Requirement: Issue and PR hygiene

Проект SHALL использовать шаблоны Issues в [`.github/ISSUE_TEMPLATE/`](../../../.github/ISSUE_TEMPLATE/).

[`CONTRIBUTING.md`](../../../CONTRIBUTING.md) и [`AGENTS.md`](../../../AGENTS.md) SHALL содержать PR-чеклист для редакционных изменений.

#### Scenario: Editorial contribution has a checklist

- **GIVEN** автор готовит редакционное изменение
- **WHEN** он открывает `CONTRIBUTING.md` или шаблон pull request
- **THEN** он видит перечень обязательных локальных проверок и производных артефактов

### Requirement: Markdown heuristics

Репозиторий SHALL выполнять [`scripts/corpus-markdown-lint.mjs`](../../../scripts/corpus-markdown-lint.mjs) в CI (`npm run lint:corpus`): минимальная структура README-хабов, нижний порог объёма для карточек разделов, контроль «длинная страница без заголовков ##».

#### Scenario: Регрессия README-хаба ловится в CI

- **GIVEN** новый `README.md` в `wiki/` без разделов `##`, без достаточного числа внутренних ссылок и без развёрнутого текста
- **WHEN** выполняется `npm run lint:corpus`
- **THEN** проверка завершается с ошибкой

### Requirement: Machine-readable export integrity gate

Команда `npm run export:knowledge -- --check`, выполняемая в CI, SHALL проверять согласованность всех версионированных машинных артефактов: [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl), [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl) и [`exports/knowledge-graph.json`](../../../../../exports/knowledge-graph.json).

Проверка SHALL завершаться ошибкой минимум при следующих нарушениях:

- любой артефакт отсутствует или отличается от детерминированно генерируемого;
- `chunk_id` не уникален;
- `document_slug` чанка отсутствует в документном индексе;
- значения `draft`, `url` или основных типов документа противоречат соответствующей документной записи;
- конец ребра графа или `relationships[].target` отсутствует среди канонических slug;
- `schema_version` отсутствует или не соответствует поддерживаемой версии экспортера.

Режим `--check` SHALL быть read-only и SHALL NOT исправлять или перезаписывать артефакты.

#### Scenario: Orphan chunk fails CI

- **GIVEN** chunk-запись ссылается на `document_slug`, которого нет в документном индексе
- **WHEN** выполняется `npm run export:knowledge -- --check`
- **THEN** команда завершается с ненулевым кодом и указывает `chunk_id` и отсутствующий slug

#### Scenario: Check mode detects drift without writing

- **GIVEN** один из экспортных файлов устарел относительно `wiki/`
- **WHEN** выполняется режим `--check`
- **THEN** команда сообщает drift, завершается с ошибкой и не изменяет содержимое файла

#### Scenario: Broken typed edge fails CI

- **GIVEN** typed relationship указывает на отсутствующий target
- **WHEN** выполняется экспортная проверка
- **THEN** команда завершается с ошибкой до принятия артефакта графа
