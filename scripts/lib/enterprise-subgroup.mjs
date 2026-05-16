import fs from 'fs';
import path from 'path';

/** @typedef {'goscorp' | 'ppk' | 'ao' | 'gosnko' | 'other'} EnterpriseSubgroup */

export const ENTERPRISE_SUBGROUPS = /** @type {const} */ ({
  goscorp: { dir: 'goscorp', label: 'Госкорпорации', position: 1 },
  ppk: { dir: 'ppk', label: 'Публично-правовые компании', position: 2 },
  ao: { dir: 'ao', label: 'Акционерные общества', position: 3 },
  gosnko: { dir: 'gosnko', label: 'Гос НКО', position: 4 },
  other: { dir: 'other', label: 'Иные компании', position: 5 },
});

/**
 * Классификация по строке правового типа (таблица в карточке организации или xlsx).
 * @param {string | null | undefined} legalType
 * @returns {EnterpriseSubgroup}
 */
export function classifyEnterpriseSubgroup(legalType) {
  const t = String(legalType ?? '')
    .trim()
    .toLowerCase();
  if (!t) return 'gosnko';
  if (t.includes('государственная корпорация')) return 'goscorp';
  if (t.includes('публично-правовая')) return 'ppk';
  if (t.includes('публичное ао') || t.includes('федеральное ао')) return 'ao';
  if (
    t.includes('гос нко') ||
    t.includes('некоммерческ') ||
    t.includes('фонд / гос') ||
    t.includes('автономная некоммерческая')
  ) {
    return 'gosnko';
  }
  return 'other';
}

/**
 * Классификация по полному наименованию из реестра госНКО (как в import-federal-gos-ngo).
 * @param {string} orgName
 * @returns {EnterpriseSubgroup}
 */
export function classifyEnterpriseSubgroupFromRegistryName(orgName) {
  const n = String(orgName).toUpperCase();
  if (n.includes('ПУБЛИЧНО-ПРАВОВАЯ')) return 'ppk';
  if (n.includes('ГОСУДАРСТВЕННАЯ КОМПАНИЯ')) return 'other';
  if (n.includes('ГОСУДАРСТВЕННАЯ КОРПОРАЦИЯ')) return 'goscorp';
  if (n.includes('ПУБЛИЧНОЕ АКЦИОНЕРНОЕ') || n.includes(' ПАО ') || n.startsWith('ПАО ')) return 'ao';
  if (n.includes('ФОНД') || n.includes('НЕКОММЕРЧЕСК')) return 'gosnko';
  return 'gosnko';
}

/**
 * @param {string} root — корень репозитория
 * @param {EnterpriseSubgroup} subgroup
 * @returns {string}
 */
export function enterprisesSubgroupDir(root, subgroup) {
  return path.join(root, 'wiki/data-sources/federal/enterprises', ENTERPRISE_SUBGROUPS[subgroup].dir);
}

/**
 * @param {string} root
 * @param {EnterpriseSubgroup} subgroup
 * @param {string} disclosureSlug
 * @returns {string}
 */
export function enterpriseDisclosurePath(root, subgroup, disclosureSlug) {
  return path.join(enterprisesSubgroupDir(root, subgroup), `${disclosureSlug}.md`);
}

/**
 * @param {string} enterprisesRoot — wiki/data-sources/federal/enterprises
 */
export function ensureEnterpriseSubgroupCategories(enterprisesRoot) {
  for (const meta of Object.values(ENTERPRISE_SUBGROUPS)) {
    const dir = path.join(enterprisesRoot, meta.dir);
    fs.mkdirSync(dir, { recursive: true });
    const catPath = path.join(dir, '_category_.json');
    fs.writeFileSync(
      catPath,
      `${JSON.stringify({ label: meta.label, position: meta.position }, null, 2)}\n`,
      'utf8',
    );
  }
}

/**
 * Собирает карту disclosure_slug → правовой тип из карточек организаций.
 * @param {string} root
 * @returns {Map<string, string>}
 */
export function buildDisclosureLegalTypeMap(root) {
  const map = new Map();
  const orgDirs = [
    path.join(root, 'wiki/organizations/state-sector'),
    path.join(root, 'wiki/organizations/federal-gos-nko'),
  ];
  for (const dir of orgDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md') || file === 'README.md') continue;
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      const legal = content.match(/\| Правовой тип \(таблица\) \| ([^|]+) \|/);
      const refs = [
        ...content.matchAll(/\/data-sources\/federal\/([a-z0-9-]+-disclosure)/g),
      ];
      for (const [, slug] of refs) {
        if (legal) map.set(slug, legal[1].trim());
      }
    }
  }
  return map;
}

/**
 * @param {string} disclosureSlug
 * @param {Map<string, string>} legalTypeMap
 * @param {Array<{ disclosure_slug: string, name: string }>} [registry]
 * @returns {EnterpriseSubgroup}
 */
export function resolveEnterpriseSubgroup(disclosureSlug, legalTypeMap, registry = []) {
  const legal = legalTypeMap.get(disclosureSlug);
  if (legal) return classifyEnterpriseSubgroup(legal);
  const rec = registry.find((r) => r.disclosure_slug === disclosureSlug);
  if (rec) return classifyEnterpriseSubgroupFromRegistryName(rec.name);
  return 'gosnko';
}
