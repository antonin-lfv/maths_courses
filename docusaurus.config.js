// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mathématiques',
  tagline: 'Cours de maths de la 6ème à la terminale',
  favicon: 'img/pi_logo.png', // 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'antonin-lfv', // Usually your GitHub org/user name.
  projectName: 'maths_courses', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
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
          // editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Maths',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_maths.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'DocDocusaurus',
            position: 'left',
            label: 'Doc Docusaurus',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours6eme',
            position: 'left',
            label: '6ème',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours5eme',
            position: 'left',
            label: '5ème',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours4eme',
            position: 'left',
            label: '4ème',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours3eme',
            position: 'left',
            label: '3ème',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours2nde',
            position: 'left',
            label: '2nde',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Cours1ere',
            position: 'left',
            label: '1ère',
          },
          {
            type: 'docSidebar',
            sidebarId: 'CoursTerminale',
            position: 'left',
            label: 'Terminale',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://antonin-lfv.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Antonin LEFEVRE, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
