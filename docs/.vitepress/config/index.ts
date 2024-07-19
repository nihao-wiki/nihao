import { defineConfig } from 'vitepress';
import nav from '../nav';
import sidebar from '../sidebar';
import { en } from './en';
import pkg from '../../../package.json';

export default defineConfig({
  lang: 'en',
  title: 'Nihao',
  description: pkg.description,
  locales: {
    root: { label: 'English', ...en },
  },
  rewrites: {
    'en/:rest*': ':rest*',
  },
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://nihao.wiki',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'));
    },
  },
  metaChunk: true,
  /* prettier-ignore */
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    logo: { src: '/nihao.svg', width: 30, height: 30 },
    nav: nav(),
    outline: [2, 3],
    outlineTitle: '-',
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: pkg.repository }],
    footer: {
      copyright: 'Copyright © 2024 nihao.wiki',
    },
    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
    // carbonAds: {
    //   code: '',
    //   placement: '',
    // },
  },
});
