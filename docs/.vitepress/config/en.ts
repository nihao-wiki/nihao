import { createRequire } from 'module';
import { defineConfig, type DefaultTheme } from 'vitepress';
import pkg from '../../../package.json';

const require = createRequire(import.meta.url);

export const en = defineConfig({
  lang: 'en-US',
  description: pkg.description,

  themeConfig: {
    nav: nav(),

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
      link: '/guide/what-is-vitepress',
      activeMatch: '/visa/',
    },
    {
      text: 'Destinations',
      items: [
        {
          text: 'Chongqing',
          link: '/chongqing/',
          activeMatch: '/visa/',
        },
        {
          text: 'Chengdu',
          link: '/chengdu/',
          activeMatch: '/visa/',
        },
      ],
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [];
}

function sidebarChongqing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chongqing',
      items: [
        { text: 'Arrival', link: 'arrival' },
        { text: 'Traffic', link: 'traffic' },
        { text: 'Wonders', link: 'wonders' },
        {
          text: 'Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Noodles', link: 'noodles' },
          ],
        },
      ],
    },
  ];
}
