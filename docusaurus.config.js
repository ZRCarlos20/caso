// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación Chat Buho',
  tagline: 'Guia oficial completa y definitiva de Chat Buho',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ZRCarlos20.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/caso/',

  // GitHub pages deployment config.
  organizationName: 'ZRCarlos20',
  projectName: 'caso1',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          routeBasePath: '/'
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    'plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Documentación de Chat Buho',
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Geraldine_A._Ferraro_Signature.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Configuracion inicial',
            position: 'left',
            items: [        {
              label: 'Datos Generales',
              to: '/Configuracion-inicial/datos-generales'  
              },
              {
                label: 'Perfil de Usuario',
                to: '/Configuracion-inicial/Perfil-Usuario'   
              },
              {
                label: 'Agentes',
                to: '/Configuracion-inicial/agentes'   
              },
              {
                label: 'Equipos',
                to: '/Configuracion-inicial/Equipos'   
              },
              {
                label: 'Plantillas de mensajes',
                to: '/Configuracion-inicial/Plantillas-de-mensajes'   
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Configuracion Adicional',
            position: 'left',
            items: [
              {
                label: 'Asignar Conversaciones',
                to: '/configuracion-adicional/Asignar-conversaciones'
              },
              {
                label: 'Asignar Prioridad',
                to: '/configuracion-adicional/Asignar-prioridad'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Tercer Menú',
            position: 'left',
            items: [
              {
                label: 'Opción A',
                to: '/tercer-menu/opcion-a'
              },
              {
                label: 'Opción B',
                to: '/tercer-menu/opcion-b'
              }
            ]
          }
      
  
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
      imageZoom: {
        selector: '.markdown img',
      },
    }),
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
};

module.exports = config;