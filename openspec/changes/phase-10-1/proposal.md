# Change: phase-10-1 — быстрые победы

Связанная дорожная карта: [_dev/final_report.md](../../_dev/final_report.md), раздел 10.1.

## ADDED Requirements

### corpus-metadata

- Обязательное поле `description` для неслужебных страниц с исключениями в линтере.
- Поля `content_type` и `entity_type` в шаблонах и массовом заполнении корпуса.
- Контролируемый белый список тегов (`scripts/tag-allowlist.json`).

### howto-playbook

- Эвристическая проверка структуры опубликованных howto (`npm run lint:howto`).
- Чёткое правило для черновиков (`draft: true`).

### navigation-scenarios

- Страница [`wiki/intro/getting-started.md`](../../wiki/intro/getting-started.md).
- Доработка [`wiki/intro/data-map.md`](../../wiki/intro/data-map.md) с явными сценарными блоками.

### ci-quality-gates

- Команды `lint:frontmatter`, `lint:howto`, `export:knowledge --check` в CI.
- Удаление дублирующих `docusaurus.config.js` и `sidebars.js`.
- PR-чеклист в [`CONTRIBUTING.md`](../../CONTRIBUTING.md) и дополнение [`AGENTS.md`](../../AGENTS.md).

## MODIFIED Requirements

- Нет противоречий с существующими правилами [`AGENTS.md`](../../AGENTS.md): новые поля дополняют, не отменяют шаблоны карточек.

## Notes

Последующие фазы (10.2–10.3) расширяют `machine-readable-export`, `search-discovery` и `editorial-expansion`; см. [`phase-10-2/proposal.md`](phase-10-2/proposal.md) и [`phase-10-3/proposal.md`](phase-10-3/proposal.md), а также [`engineering-notes.md`](../engineering-notes.md).
