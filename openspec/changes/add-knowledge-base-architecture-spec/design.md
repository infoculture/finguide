## Context
The project is transitioning from legacy wiki-style content organization to a structured knowledge base intended for both human navigation and retrieval-augmented generation (RAG). The source guide defines a target domain model, mandatory metadata, content templates, and rollout priorities.

## Goals / Non-Goals
- Goals:
  - Normalize content into a predictable, machine-readable architecture.
  - Improve retrieval quality through one-concept-per-file and consistent semantic anchors.
  - Preserve Docusaurus usability while optimizing for chunking and indexing.
  - Support incremental manual and automated content growth.
- Non-Goals:
  - Building a full ingestion pipeline in this change.
  - Rewriting all legacy content in a single step.
  - Defining external search infrastructure details.

## Decisions
- Decision: Treat `_dev/dev_guide_20260510.md` as the normative source for architecture and transform it into explicit SHALL-level requirements.
  - Alternatives considered:
    - Keep guide as informal documentation only: rejected because it cannot be validated or tracked as a formal change.
    - Implement directly without spec: rejected because migration scope is broad and requires acceptance criteria.
- Decision: Introduce one capability (`knowledge-base-architecture`) with multiple focused requirements instead of many small capabilities.
  - Alternatives considered:
    - Split by each section (`glossary`, `organizations`, etc.): rejected for initial adoption complexity.

## Risks / Trade-offs
- Migration drift between old and new structure may cause broken links.
  - Mitigation: enforce sidebar and link checks in CI.
- Metadata backfill effort can delay rollout.
  - Mitigation: phase-based delivery and automation of repetitive sections.
- RAG-focused structure may reduce editorial flexibility.
  - Mitigation: allow optional subsection details while preserving mandatory schema.

## Migration Plan
1. Approve this spec change.
2. Map existing `wiki/**` to target domains and create missing scaffolding.
3. Backfill frontmatter and template sections for prioritized files.
4. Enable automation scripts and CI validation.
5. Expand to lower-priority domains.

## Open Questions
- Should canonical docs remain under `wiki/` or move to `docs/` while preserving redirects?
- Which metadata fields must be strictly required at CI time versus initially recommended?
