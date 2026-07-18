## ADDED Requirements

### Requirement: Document discovery and section retrieval separation

Документация машинного слоя SHALL разделять роли артефактов: потребители RAG SHOULD использовать [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl) для discovery, фильтрации документов и разрешения канонических slug, а [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl) — как стандартный вход для секционного retrieval.

Потребитель MAY дополнительно делить `text` чанка под ограничения своей модели, но SHALL сохранять `document_slug`, канонический `url`, исходный `chunk_id` или явное поле происхождения, позволяющее восстановить экспортированный чанк.

При формировании ответа потребитель SHOULD цитировать канонический URL с `heading_anchor`, если найденный чанк относится к адресуемому разделу; отсутствие якоря у введения страницы SHALL приводить к цитированию URL документа без вымышленного фрагмента.

#### Scenario: Retrieval result remains traceable

- **GIVEN** потребитель дополнительно делит длинный экспортированный чанк
- **WHEN** подчасть попадает в результат retrieval
- **THEN** результат сохраняет трассировку до исходного `chunk_id`, `document_slug` и канонического URL

#### Scenario: Section citation uses canonical anchor

- **GIVEN** найденный чанк имеет непустой `heading_anchor`
- **WHEN** ассистент формирует ссылку на источник
- **THEN** ссылка использует экспортированный канонический URL раздела, а не файловый путь или самостоятельно вычисленный якорь

### Requirement: Production chunk filtering

Потребители продакшен-RAG SHALL исключать записи `knowledge-chunks.jsonl` с `draft: true`. Они SHOULD учитывать `rag_priority` и доступные discovery/quality metadata при фильтрации или ранжировании, не меняя содержания исходного `text` без явной downstream-обработки.

Политика SHALL быть документирована единообразно в [`wiki/intro/rag-guide.md`](../../../../../wiki/intro/rag-guide.md) и [`KNOWLEDGE.md`](../../../../../KNOWLEDGE.md).

#### Scenario: Draft chunk excluded

- **GIVEN** chunk-запись имеет `draft: true`
- **WHEN** строится продакшен-индекс retrieval
- **THEN** запись не индексируется и не используется для ответа по умолчанию

## MODIFIED Requirements

### Requirement: Production RAG draft exclusion

Потребители продакшен-RAG SHALL исключать документы с `draft: true` из discovery и retrieval, опираясь на согласованные значения `draft` в [`exports/knowledge-index.jsonl`](../../../../../exports/knowledge-index.jsonl) и [`exports/knowledge-chunks.jsonl`](../../../../../exports/knowledge-chunks.jsonl).

Репозиторий MUST документировать это поведение в [`wiki/intro/rag-guide.md`](../../../../../wiki/intro/rag-guide.md) и в [`KNOWLEDGE.md`](../../../../../KNOWLEDGE.md) единообразно (ссылка из howto-playbook и machine-readable-export допускается вместо дублирования длинного текста).

#### Scenario: Consumer filters draft document and chunks

- **GIVEN** документная запись и связанные с ней chunk-записи имеют `draft: true`
- **WHEN** потребитель строит продакшен discovery- и retrieval-индексы
- **THEN** документ и все его чанки не включаются по умолчанию

#### Scenario: Draft flags remain consistent

- **GIVEN** Markdown-страница имеет `draft: true`
- **WHEN** выполняется экспорт знаний
- **THEN** документная запись и все созданные из неё chunk-записи имеют одинаковое значение `draft: true`
