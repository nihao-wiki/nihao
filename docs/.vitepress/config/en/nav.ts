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
    //   text: 'Destinations',
    //   items: [
    //     {
    //       text: 'Beijing',
    //       link: 'javascript:void;',
    //       activeMatch: '/beijing/',
    //     },
    //     {
    //       text: 'Shanghai',
    //       link: '/shanghai/visa-free',
    //       activeMatch: '/shanghai/',
    //     },
    //     {
    //       text: 'Nanjing',
    //       link: '/nanjing/visa-free',
    //       activeMatch: '/nanjing/',
    //     },
    //     {
    //       text: 'Hangzhou',
    //       link: '/hangzhou/visa-free',
    //       activeMatch: '/hangzhou/',
    //     },
    //     {
    //       text: 'Guangzhou',
    //       link: '/guangzhou/visa-free',
    //       activeMatch: '/guangzhou/',
    //     },
    //     {
    //       text: 'Shenzhen',
    //       link: '/shenzhen/visa-free',
    //       activeMatch: '/shenzhen/',
    //     },
    //     {
    //       text: 'Chengdu',
    //       link: '/chengdu/visa-free',
    //       activeMatch: '/chengdu/',
    //     },
    //     {
    //       text: 'Kunming',
    //       link: '/kunming/visa-free',
    //       activeMatch: '/kunming/',
    //     },
    //     {
    //       text: 'Lijiang',
    //       link: '/lijiang/visa-free',
    //       activeMatch: '/lijiang/',
    //     },
    //     {
    //       text: 'Xishuangbanna',
    //       link: '/xishuangbanna/visa-free',
    //       activeMatch: '/xishuangbanna/',
    //     },
    //     {
    //       text: 'Xiamen',
    //       link: '/xiamen/visa-free',
    //       activeMatch: '/xiamen/',
    //     },
    //     {
    //       text: 'Xi\'an',
    //       link: '/xian/visa-free',
    //       activeMatch: '/xian/',
    //     },
    //     {
    //       text: 'Wuhan',
    //       link: '/wuhan/visa-free',
    //       activeMatch: '/wuhan/',
    //     },
    //     {
    //       text: 'Qingdao',
    //       link: '/qingdao/visa-free',
    //       activeMatch: '/qingdao/',
    //     },
    // ]
    // },
    // {
    //   component: 'NavReddit',
    //   props: {
    //     text: 'Community',
    //     link: 'https://www.reddit.com/r/nihaowiki/',
    //   },
    // },
  ];
}
