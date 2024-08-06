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
      component: 'NavReddit',
      props: {
        text: 'Community',
        link: 'https://www.reddit.com/r/nihaowiki/',
      },
    },
    {
      text: 'Contribute',
      items: [
        {
          text: 'How to Contribute',
          link: '/contribute',
        },
        {
          text: 'Our Team',
          link: '/team',
        },
        {
          text: 'Special Thanks',
          link: '/thanks',
        },
      ],
    },
    {
      text: 'Sponsor',
      link: '/sponsor',
      activeMatch: '/sponsor/',
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Visa',
      link: 'visa',
    },
    {
      text: 'High Season',
      link: 'high-season',
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
        { text: 'Culture', link: 'culture' },
        {
          text: 'Sensational Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Street Food', link: 'street-food' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
          ],
        },
      ],
    },
  ];
}
