function collectStrings(value, out = []) {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => collectStrings(item, out));
  }
  return out;
}

function stripTrailingPunctuation(value) {
  return value.replace(/[.,;:!?]+$/u, '').replace(/\)+$/u, (closing) => closing.slice(1));
}

export function validateExternalUrl(value) {
  const issues = [];
  if (/^https?:\/\/(?:\.{3}|…)?\/?$/iu.test(value)) return issues;
  if (/[\u0000-\u0020\u007f]/u.test(value)) issues.push('URL содержит пробел или управляющий символ');
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    issues.push('URL не разбирается стандартным парсером');
    return issues;
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    issues.push('разрешены только HTTP(S)-ссылки');
  }
  if (parsed.pathname.startsWith('/%20')) {
    issues.push('путь URL начинается с закодированного редакционного примечания');
  }
  return [...new Set(issues)];
}

export function collectExternalUrls(markdown, frontmatter = {}) {
  const candidates = [];
  const markdownLink = /\]\((https?:\/\/[^\n)]*)\)/giu;
  let match;
  while ((match = markdownLink.exec(markdown))) {
    const raw = match[1].trim();
    const titled = /^(\S+)\s+(?:"[^"]*"|'[^']*')$/u.exec(raw);
    if (titled) candidates.push({url: titled[1], context: raw, rawWhitespace: false});
    else candidates.push({url: raw, context: raw, rawWhitespace: /\s/u.test(raw)});
  }

  const plain = /https?:\/\/[^\s<>"'`]+/giu;
  while ((match = plain.exec(markdown))) {
    const url = stripTrailingPunctuation(match[0]);
    candidates.push({url, context: url, rawWhitespace: false});
  }

  for (const value of collectStrings(frontmatter)) {
    if (/^https?:\/\//iu.test(value.trim())) {
      candidates.push({url: value.trim(), context: value, rawWhitespace: /\s/u.test(value.trim())});
    }
  }

  const unique = new Map();
  for (const item of candidates) {
    const key = `${item.url}|${item.rawWhitespace}`;
    if (!unique.has(key)) unique.set(key, item);
  }
  return [...unique.values()];
}

export function lintMarkdownUrls(markdown, frontmatter = {}) {
  const issues = [];
  for (const candidate of collectExternalUrls(markdown, frontmatter)) {
    const reasons = validateExternalUrl(candidate.url);
    if (candidate.rawWhitespace) reasons.unshift('Markdown destination содержит необрамлённый текст после URL');
    for (const reason of new Set(reasons)) issues.push({url: candidate.url, reason});
  }
  return issues;
}
