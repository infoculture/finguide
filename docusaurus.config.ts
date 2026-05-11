import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Открытые государственные финансы',
  tagline: 'Книга по открытым данным о государственных финансах России',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://infoculture.github.io',
  baseUrl: '/opengovfinancesbook/',
  organizationName: 'infoculture',
  projectName: 'opengovfinancesbook',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  staticDirectories: ['static'],

  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          numberPrefixParser: false,
          editUrl:
            'https://github.com/infoculture/opengovfinancesbook/edit/master/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Открытые госфинансы',
      items: [
        {
          type: 'doc',
          docId: 'readme',
          position: 'left',
          label: 'Книга',
        },
        {
          type: 'doc',
          docId: 'glossary/README',
          position: 'left',
          label: 'Глоссарий',
        },
        {
          type: 'doc',
          docId: 'organizations/README',
          position: 'left',
          label: 'Организации',
        },
        {
          type: 'doc',
          docId: 'information-systems/README',
          position: 'left',
          label: 'ИС',
        },
        {
          type: 'doc',
          docId: 'data-sources/README',
          position: 'left',
          label: 'Источники данных',
        },
        {
          type: 'doc',
          docId: 'howto/README',
          position: 'left',
          label: 'How-to',
        },
        {
          type: 'dropdown',
          label: 'Разделы',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'budget-system/README',
              label: 'Бюджетная система',
            },
            {
              type: 'doc',
              docId: 'budget-classification/README',
              label: 'Бюджетная классификация',
            },
            {
              type: 'doc',
              docId: 'legal/README',
              label: 'Нормативная база',
            },
            {
              type: 'doc',
              docId: 'reporting/README',
              label: 'Бюджетная отчётность',
            },
            {
              type: 'doc',
              docId: 'reference/README',
              label: 'Справочники',
            },
          ],
        },
        {
          href: 'https://github.com/infoculture/opengovfinancesbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Содержание',
          items: [
            {label: 'Введение', to: '/intro'},
            {label: 'Глоссарий', to: '/glossary'},
            {label: 'Организации', to: '/organizations'},
            {label: 'Информационные системы', to: '/information-systems'},
            {label: 'Источники данных', to: '/data-sources'},
            {label: 'How-to', to: '/howto'},
            {label: 'Бюджетная система', to: '/budget-system'},
            {label: 'Бюджетная классификация', to: '/budget-classification'},
            {label: 'Нормативная база', to: '/legal'},
            {label: 'Бюджетная отчётность', to: '/reporting'},
            {label: 'Справочники', to: '/reference'},
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Infoculture',
              href: 'https://www.infoculture.ru/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/infoculture/opengovfinancesbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infoculture. Лицензия MIT.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
