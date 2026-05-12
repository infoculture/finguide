# Capability: howto-playbook

Стандарт практических инструкций в [`wiki/howto/`](../../../wiki/howto/).

## Requirement: Uniform howto structure

Каждая опубликованная страница под `wiki/howto/**/*.md` (кроме `README.md`, черновиков `draft: true` и шаблонов) SHALL содержать заголовки второго уровня, покрывающие блоки:

1. Назначение и аудитория (или эквивалент «Зачем» / «Назначение»)
2. Входные данные
3. Инструменты
4. Шаги
5. Воспроизводимый пример
6. Проверка результата
7. Ограничения и типовые ошибки
8. Связанные страницы

Проверка Keywords выполняется эвристикой в [`scripts/howto-structure-lint.mjs`](../../../scripts/howto-structure-lint.mjs).

### Scenario: Review checklist blocks incomplete howto

- **GIVEN** pull request меняет файл под `wiki/howto/` без `draft: true`
- **WHEN** выполняется `npm run lint:howto`
- **THEN** отсутствие обязательных разделов даёт ошибку CI

## Requirement: Draft and stub handling

Неполные страницы SHALL иметь `draft: true` или не входить в [`sidebars.ts`](../../../sidebars.ts) до готовности.

### Scenario: Draft excluded from RAG-ready export

- **GIVEN** страница помечена `draft: true`
- **WHEN** генерируется [`exports/knowledge-index.jsonl`](../../../exports/knowledge-index.jsonl)
- **THEN** запись содержит `"draft": true` и потребители могут отфильтровать документ из продакшен-индекса

## Requirement: Priority backlog

Проект SHOULD содержать не менее **3–5** полноценных инструкций в горизонте фазы 2 и **10–15** в горизонте фазы 3; backlog MAY трассируется через [`wiki/intro/wiki-filling-plan.md`](../../../wiki/intro/wiki-filling-plan.md).
