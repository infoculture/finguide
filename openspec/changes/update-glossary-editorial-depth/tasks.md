## 1. OpenSpec

- [ ] 1.1 Убедиться, что дельты проходят `openspec validate update-glossary-editorial-depth --strict`.
- [ ] 1.2 После ревью и merge пропозала выполнить архивацию по правилам [`openspec/AGENTS.md`](../../AGENTS.md) (перенос в `changes/archive/`, обновление `openspec/specs/`).

## 2. Шаблон и инструкции репозитория

- [ ] 2.1 Обновить [`wiki/glossary/glossary-card-template.md`](../../../wiki/glossary/glossary-card-template.md): согласованные заголовки для блока происхождения и ответственности, подсказки для кодовых терминов, порядок разделов.
- [ ] 2.2 Обновить раздел «Глоссарий» в [`AGENTS.md`](../../../AGENTS.md): отсылка на [`glossary-card-content`](./specs/glossary-card-content/spec.md) в этом change (после архивации — канон [`openspec/specs/glossary-card-content/spec.md`](../../specs/glossary-card-content/spec.md)) и краткое резюме обязательных блоков по `glossary_kind`.

## 3. Волновая редакционная миграция карточек

Выполнять итерациями по подкаталогам `wiki/glossary/` (исключая `README.md`, `glossary-card-template.md`):

- [ ] 3.1 `budget-classification/`
- [ ] 3.2 `procurement/`
- [ ] 3.3 `budget-system/`
- [ ] 3.4 `subsidies-and-transfers/`
- [ ] 3.5 `state-programs/`
- [ ] 3.6 `org-types/`
- [ ] 3.7 `other/`

**Чеклист приёмки одной карточки** (сверка с [`glossary-card-content`](./specs/glossary-card-content/spec.md)):

- [ ] «Коротко» и «Определение» отвечают на «что / зачем в открытых финансовых данных» и границы понятия.
- [ ] Для `glossary_kind: classification` (и иных кодовых терминов по смыслу): формат кода, иерархия/префиксы, типичные ошибки аналитики — если применимо.
- [ ] Блок **происхождения** (причины введения / замены предшественника) и блок **ответственности** (ведение перечня vs применение в сфере) — без смешения ролей.
- [ ] «Правовая и нормативная основа» согласована с формулировками про органы и акты.
- [ ] «Примеры» либо содержательны и не дублируют определение, либо раздел удалён с кратким обоснованием в описании PR.
- [ ] «Где встречается», «Связанные термины» — по правилам [`AGENTS.md`](../../../AGENTS.md); `related_pages` для ключевых терминов не ухудшать относительно [`rag-corpus-navigation`](../../specs/rag-corpus-navigation/spec.md).

## 4. Опционально (отдельный change)

- [ ] 4.1 Расширить [`scripts/corpus-markdown-lint.mjs`](../../../scripts/corpus-markdown-lint.mjs) или иной линтер: эвристики для наличия обязательных заголовков при `glossary_kind: classification` (согласовать пороги с редакцией).
