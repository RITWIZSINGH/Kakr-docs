// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kakr Labs Documentation',
  tagline: 'Cryptographic proof of authority — for humans and AI agents.',
  customFields: {
    gaMeasurementId: 'G-1653V7W1ZT',
  },
  favicon: 'favicon.ico',
  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],

  url: 'https://docs.pteri.org', // change to your real docs domain before deploying
  baseUrl: '/',

  organizationName: 'RITWIZSINGH',
  projectName: 'Kakrlabs_documentation',

  // Warn instead of failing the build while you're still cleaning up links
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // routeBasePath: '/',  // uncomment to serve docs at site root instead of /docs
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'KakrLabs',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/docs/api-reference', label: 'API Reference', position: 'left' },
          {
            href: 'https://github.com/RITWIZSINGH/Kakrlabs_documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Documentation',
            items: [
              { label: 'Foundations', to: '/docs/foundations' },
              { label: 'API Reference', to: '/docs/api-reference' },
              { label: 'SDKs & Integration', to: '/docs/sdks-and-integration' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'Pricing Plans', to: '/docs/product-and-access' },
              { label: 'Use Cases', to: '/docs/use-cases' },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/RITWIZSINGH/Kakrlabs_documentation',
              },
              { label: 'pteri.org', href: 'https://www.pteri.org' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KakrLabs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
    }),
};

export default config;
