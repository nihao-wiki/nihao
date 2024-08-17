import { createRequire } from 'module';
import { defineConfig, type DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { bottomNav } from './bottom-nav';
import sidebar from './sidebar';
import pkg from '../../../../package.json';

const require = createRequire(import.meta.url);

export const en = defineConfig({
  lang: 'en-US',
  description: pkg.description,
  themeConfig: {
    nav: nav(),
    // @ts-ignore
    bottomNav: bottomNav(),
    outlineTitle: 'On this page',
    sidebar,
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
