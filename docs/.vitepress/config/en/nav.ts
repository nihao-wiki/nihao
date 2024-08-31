import { type DefaultTheme } from 'vitepress';

export function nav(): DefaultTheme.NavItem[] {
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
    // {
    //   component: 'NavReddit',
    //   props: {
    //     text: 'Community',
    //     link: 'https://www.reddit.com/r/nihaowiki/',
    //   },
    // },
  ];
}
