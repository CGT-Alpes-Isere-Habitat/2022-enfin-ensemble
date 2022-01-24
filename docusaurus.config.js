// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2022, Enfin Ensemble !',
  tagline: 'Liste pour les élections professionnelles 2022 au sein d\'Alpes Isère Habitat',
  url: 'https://cgt-alpes-isere-habitat.github.io/',
  baseUrl: '/2022-enfin-ensemble/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CGT-Alpes-Isere-Habitat', // Usually your GitHub org/user name.
  projectName: '2022-enfin-ensemble', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CGT-Alpes-Isere-Habitat/2022-enfin-ensemble/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CGT-Alpes-Isere-Habitat/2022-enfin-ensemble/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Accueil',
        logo: {
          alt: 'Accueil Logo',
          src: 'img/square.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Nos valeurs',
          },
          {
            type: 'doc',
            docId: 'engagements',
            position: 'left',
            label: 'Nos engagements',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',          
        copyright: `Copyright © ${new Date().getFullYear()} CGT Alpes Isère Habitat - 2022, Enfin Ensemble!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
