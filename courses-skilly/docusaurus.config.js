// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cursos - Skilly',
  tagline: 'Potencia tus skills, aprende de verdad 🚀 ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'skilly', // Usually your GitHub org/user name.
  projectName: 'skilly', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'skilly Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/', label: 'Inicio { 🏡 }', position: 'left'
          },
          {
            to: '/fundamentos', label: 'Fundamentos { 📚 }', position: 'left'
          },
          {
            to: '/herramientas', label: 'Herramientas { 🔧 }', position: 'left'
          },
          {
            to: '/programacion', label: 'Programación { 👩🏽‍💻 }', position: 'left'
          },
          {
            to: '/sistemas', label: 'Sistemas { 🖥️ }', position: 'left'
          },
          {
            to: '/bbdd', label: 'Bases de datos { 🗃️ }', position: 'left'
          },
          {
            to: '/modo-historia', label: 'Modo Historia \u00AE { 💼 }', position: 'left'
          },
          
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Fundamentos',
          //       to: '/docs/category/fundamentos',
          //     },
          //     {
          //       label: 'Herramientas',
          //       to: '/docs/category/herramientas',
          //     },
          //     {
          //       label: 'Programación',
          //       to: '/docs/category/programacion',
          //     },
          //     {
          //       label: 'Sistemas',
          //       to: '/docs/category/sistemas',
          //     },
          //     {
          //       label: 'Bases de datos',
          //       to: '/docs/category/bases-de-datos',
          //     },
          //     {
          //       label: 'Proyectos | Modo Historia\u00AE',
          //       to: '/docs/category/modo_historia',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/skilly-academy',
              },
              {
                label: 'Github',
                href: 'https://github.com/skilly-academy',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/users/689209701895766049',
              },
            ],
          }
        ],

        copyright: `<p>Desarrollado en Skilly desde Cantabria.</p> Copyright © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
