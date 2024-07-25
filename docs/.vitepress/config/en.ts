import { createRequire } from 'module';
import { defineConfig, type DefaultTheme } from 'vitepress';
import pkg from '../../../package.json';

const require = createRequire(import.meta.url);

export const en = defineConfig({
  lang: 'en-US',
  description: pkg.description,

  themeConfig: {
    nav: nav(),
    outlineTitle: 'On this page',

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/chongqing/': { base: '/chongqing/', items: sidebarChongqing() },
    },

    editLink: {
      pattern: `${pkg.repository}edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} nihao.wiki`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/visa/',
      activeMatch: '/guide/',
    },
    {
      text: 'Destinations',
      items: [
        {
          text: 'Chongqing',
          link: '/chongqing/visa-free/',
          activeMatch: '/chongqing/',
        },
      ],
    },
    {
      text: 'Sponsor',
      link: '/contribute#become-a-sponsor',
      activeMatch: '/contribute/',
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Visa',
      link: 'visa',
    },
  ];
}

function sidebarChongqing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chongqing',
      items: [
        { text: 'Visa Free', link: 'visa-free' },
        { text: 'Impressions', link: 'impressions' },
        { text: '3D Cityscape', link: 'cityscape' },
        {
          text: 'Sensational Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Hot Pot', link: 'hot-pot' },
          ],
        },
      ],
    },
  ];
}
