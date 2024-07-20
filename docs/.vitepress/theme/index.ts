import { h } from 'vue';
import defaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import HomeHeroImage from './components/HomeHeroImage.vue';
import References from './components/References.vue';
import Speech from './components/Speech.vue';
import Flex from './components/Flex.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  enhanceApp({ app }) {
    app.component('Flex', Flex);
    app.component('Speech', Speech);
  },
  Layout() {
    return h(defaultTheme.Layout, null, {
      'home-hero-image': () => h(HomeHeroImage),
      'doc-footer-before': () => h(References),
    });
  },
} satisfies Theme;
