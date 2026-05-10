import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Открытые государственные финансы',
  tagline: 'Wiki по открытым данным о государственных финансах',
  future: {
    v4: true,
  },
  url: 'https://infoculture.github.io',
  baseUrl: '/opengovfinancesbook/',
  organizationName: 'infoculture',
  projectName: 'opengovfinancesbook',
  onBrokenLinks: 'warn',
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
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
          exclude: ['**/SUMMARY.gitbook.md'],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Открытые госфинансы',
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://github.com/infoculture/opengovfinancesbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
