# Change: Define Open Government Finances Knowledge Base Specification

## Why
The repository currently contains content migration work but no formal OpenSpec requirements that define the target information architecture, document schema, and content quality baseline. The `_dev/dev_guide_20260510.md` guide provides this target state and should be converted into normative requirements so implementation and review can proceed consistently.

## What Changes
- Add a new capability spec delta `knowledge-base-architecture` based on `_dev/dev_guide_20260510.md`.
- Define required documentation domains, directory taxonomy, and canonical section boundaries.
- Define required frontmatter metadata and section templates for glossary terms, information systems, and data sources.
- Define phased content rollout priorities and minimum completion criteria for each phase.
- Define automation requirements for machine-generated content sections and update tracking.

## Impact
- Affected specs: `knowledge-base-architecture` (new capability)
- Affected code/content:
  - `wiki/**` content and future `docs/**` structure
  - `docusaurus.config.ts` and `sidebars.ts`
  - future `scripts/**` and CI workflows for automated refresh
