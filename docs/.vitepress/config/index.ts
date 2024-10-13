import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import { en } from './en';
import pkg from '../../../package.json';
import { srcExclude } from './en/destinations';

export default defineConfig({
  lang: 'en',
  title: 'Nihao.wiki',
  description: pkg.description,
  srcExclude,
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
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
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
      {},
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nnl0485bb7");`
    ],
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: { src: '/favicon.png', width: 24, height: 30 },
    outline: [2, 3],
    outlineTitle: '-',
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
