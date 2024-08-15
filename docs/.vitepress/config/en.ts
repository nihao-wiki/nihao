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

    notFound: {
      quote: `As a child, winding down from school, I delighted in choosing untraveled paths home, even if they led me through narrow alleys and dead ends. With time, the maze became familiar, and I no longer got lost.`,
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Nihao.wiki <br/><a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">渝ICP备2024037934号-1</a>`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/visa',
      activeMatch: '/guide/',
    },
    {   
      text: 'Chongqing',
      link: '/chongqing/visa-free',
      activeMatch: '/chongqing/',
    },
    {
      component: 'NavReddit',
      props: {
        text: 'Community',
        link: 'https://www.reddit.com/r/nihaowiki/',
      },
    },
    {
      text: 'Sponsor',
      link: '/sponsor',
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
    {
      text: 'Payment',
      link: 'payment',
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
        { text: '8D Cyberpunk', link: 'cityscape' },
        { text: 'Culture', link: 'culture' },
        {
          text: 'Sensational Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Street Food', link: 'street-food' },
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
          ],
        },
        {
          text: 'Essential Routes',
          link: 'routes'
        },
      ],
    },
  ];
}
