/**
 * Сборка раздела «Об организации» для карточек госНКО (enterprises/gosnko).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROFILES_PATH = path.join(__dirname, '../data/federal-gos-ngo-org-profiles.json');

export const ABOUT_MARKER_START = '<!-- gosnko-org-about:start -->';
export const ABOUT_MARKER_END = '<!-- gosnko-org-about:end -->';

/** @typedef {{ sector?: string, mission?: string, activity?: string, status?: string, curator?: string, aliases?: string[], analytics?: string, legal_form?: string }} OrgProfile */

let profilesCache = null;

export function loadOrgProfiles() {
  if (!profilesCache) {
    profilesCache = JSON.parse(fs.readFileSync(PROFILES_PATH, 'utf8'));
  }
  return profilesCache;
}

function legalTypeLabel(rec) {
  const n = String(rec?.name ?? '').toUpperCase();
  if (n.includes('ПУБЛИЧНО-ПРАВОВАЯ')) return 'публично-правовая компания';
  if (n.includes('ГОСУДАРСТВЕННАЯ КОМПАНИЯ') || n.includes('ГОСУДАРСТВЕННАЯ КОРПОРАЦИЯ'))
    return 'государственная компания / корпорация';
  if (n.includes('ФОНД')) return 'фонд (государственная / подведомственная НКО)';
  return 'автономная некоммерческая организация (гос НКО)';
}

function fmtFounder(rec, profile) {
  if (profile?.curator) return profile.curator;
  const f = rec?.founder;
  if (!f) return '— (в срезе субсидий не указан; уточняйте в [ЕГРЮЛ](/information-systems/federal/egrul))';
  return String(f).replace(/\n/g, '; ');
}

function defaultAnalytics(shortName, rec) {
  const hasSubsidy =
    rec?.subsidy_total != null && Number(rec.subsidy_total) > 0
      ? 'крупный получатель **субсидий** в срезе 2017–2020'
      : 'субсидии в исследовательском срезе нулевые или не выделены';
  return (
    `Для открытой аналитики по **${shortName}**: сверяйте **${hasSubsidy}** (таблица ниже) с **[соглашениями о субсидиях](/data-sources/federal/subsidy)** и **закупками** в **[ЕИС](/data-sources/federal/procurement)** по ИНН **${rec?.inn ?? '—'}**. Показатели **не** продолжают строки **[федерального бюджета](/data-sources/federal/minfin-fedbud-execute)** и **[форм учреждений](/reporting/institution-financial-statements)** — иной правовой контур [госНКО](/glossary/gosudarstvennye-nko).`
  );
}

/**
 * @param {object} rec — запись federal-gos-ngo-registry или синтетика для skolkovo/fasie/frp
 * @param {OrgProfile | undefined} profile
 * @param {{ site?: string, note?: string } | null} urls
 */
export function buildOrgAboutMarkdown(rec, profile = {}, urls = null) {
  const shortName = rec.short_name || rec.name;
  const orgName = rec.name;
  const legalForm = profile.legal_form || legalTypeLabel(rec);
  const sector = profile.sector || 'государственные / общественные функции (уточняйте по уставу)';
  const mission = profile.mission || '';
  const activity = profile.activity || '';
  const status = profile.status || '';
  const aliases =
    profile.aliases?.length > 0
      ? profile.aliases.join(', ')
      : shortName !== orgName
        ? shortName
        : '—';
  const site = urls?.site || rec.source_url || '—';
  const siteRow =
    site !== '—' ? `[${site}](${site})` : 'см. раздел «URL и точки доступа» или [ЕГРЮЛ](/information-systems/federal/egrul)';

  const rows = [
    `| Полное наименование | ${orgName} |`,
    `| Краткое имя | ${shortName} |`,
    `| Правовая форма | **${legalForm}**; категория [госНКО](/glossary/gosudarstvennye-nko) |`,
    `| Направление деятельности | ${sector} |`,
    `| Учредитель / куратор (срез субсидий) | ${fmtFounder(rec, profile)} |`,
    `| ИНН | ${rec.inn ?? '—'} |`,
    `| Публичный контур | ${siteRow} |`,
  ];
  if (status) rows.push(`| Статус (срез) | ${status} |`);
  if (aliases !== '—') rows.push(`| Обозначения | ${aliases} |`);

  const body = [];
  if (mission) body.push(mission);
  if (activity) body.push(activity);
  if (urls?.note) body.push(`> ${urls.note}`);
  body.push(profile.analytics || defaultAnalytics(shortName, rec));

  return `## Об организации

| Признак | Значение |
| :--- | :--- |
${rows.join('\n')}

${body.join('\n\n')}`;
}

/**
 * @param {string} content
 * @param {string} aboutBlock — без маркеров
 */
export function patchAboutIntoDisclosure(content, aboutBlock) {
  const wrapped = `${ABOUT_MARKER_START}\n${aboutBlock.trim()}\n${ABOUT_MARKER_END}`;
  const re = new RegExp(
    `${ABOUT_MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${ABOUT_MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
  );
  if (re.test(content)) {
    return content.replace(re, wrapped);
  }

  const orgLinkRe = /(Карточка организации: \[[^\]]+\]\([^)]+\)\.\n\n)/;
  if (orgLinkRe.test(content)) {
    return content.replace(orgLinkRe, `$1${wrapped}\n\n`);
  }

  const descAnchor = '## Описание\n\n';
  if (content.includes(descAnchor)) {
    const idx = content.indexOf(descAnchor) + descAnchor.length;
    const rest = content.slice(idx);
    const nextH2 = rest.search(/\n## /);
    if (nextH2 >= 0) {
      return content.slice(0, idx) + `${wrapped}\n\n` + rest;
    }
  }

  const beforeOp = '## Оператор';
  if (content.includes(beforeOp)) {
    return content.replace(beforeOp, `${wrapped}\n\n${beforeOp}`);
  }
  return `${content.trim()}\n\n${wrapped}\n`;
}

export function orgSlugFromDisclosurePath(filePath) {
  const base = path.basename(filePath, '.md');
  return base.endsWith('-disclosure') ? base.slice(0, -'-disclosure'.length) : null;
}
