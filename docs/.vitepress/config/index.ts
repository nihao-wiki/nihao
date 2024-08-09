import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
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
  },
  metaChunk: true,
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7L0HBZJ593' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7L0HBZJ593');`
    ],
    [
      'script',
      { async: '', crossorigin: 'anonymous', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7020972576331869' }
    ],
    [
      'script',
      {},
      `(adsbygoogle = window.adsbygoogle || []).push({});`
    ],
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: { src: '/favicon.svg', width: 30, height: 30 },
    outline: [2, 3],
    outlineTitle: '-',
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: pkg.repository }],
    search: {
      provider: 'local',
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('../theme/components/VPFooter.vue', import.meta.url)),
        },
      ],
    },
  },
});
