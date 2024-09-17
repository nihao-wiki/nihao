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
      link: '/chongqing/impressions',
      activeMatch: '/chongqing/',
    },
    {
      text: 'Destinations',
      items: [
        {
          text: 'Beijing',
          link: '/beijing/impressions',
          activeMatch: '/beijing/',
        },
        {
          text: 'Shanghai',
          link: '/shanghai/impressions',
          activeMatch: '/shanghai/',
        },
        {
          text: 'Chengdu',
          link: '/chengdu/impressions',
          activeMatch: '/chengdu/',
        },
        {
          text: 'Hainan',
          link: '/hainan/sanya/impressions',
          activeMatch: '/hainan/',
        },
        {
          text: 'Hangzhou',
          link: '/hangzhou/impressions',
          activeMatch: '/hangzhou/',
        },
        {
          text: 'Qingdao',
          link: '/qingdao/impressions',
          activeMatch: '/qingdao/',
        },
        {
          text: 'Yunnan',
          link: '/yunnan/kunming/impressions',
          activeMatch: '/yunnan/',
        },
      ],
    },
    // {
    // text: 'Destinations',
    // items: [
    //     {
    //       text: 'Beijing',
    //       link: 'javascript:void;',
    //       activeMatch: '/beijing/',
    //     },
    //     {
    //       text: 'Shanghai',
    //       link: '/shanghai/impressions',
    //       activeMatch: '/shanghai/',
    //     },
    //     {
    //       text: 'Nanjing',
    //       link: '/nanjing/impressions',
    //       activeMatch: '/nanjing/',
    //     },
    //     {
    //       text: 'Hangzhou',
    //       link: '/hangzhou/impressions',
    //       activeMatch: '/hangzhou/',
    //     },
    //     {
    //       text: 'Guangzhou',
    //       link: '/guangzhou/impressions',
    //       activeMatch: '/guangzhou/',
    //     },
    //     {
    //       text: 'Shenzhen',
    //       link: '/shenzhen/impressions',
    //       activeMatch: '/shenzhen/',
    //     },
    //     {
    //       text: 'Chengdu',
    //       link: '/chengdu/impressions',
    //       activeMatch: '/chengdu/',
    //     },
    //     {
    //       text: 'Kunming',
    //       link: '/kunming/impressions',
    //       activeMatch: '/kunming/',
    //     },
    //     {
    //       text: 'Lijiang',
    //       link: '/lijiang/impressions',
    //       activeMatch: '/lijiang/',
    //     },
    //     {
    //       text: 'Xishuangbanna',
    //       link: '/xishuangbanna/impressions',
    //       activeMatch: '/xishuangbanna/',
    //     },
    //     {
    //       text: 'Xiamen',
    //       link: '/xiamen/impressions',
    //       activeMatch: '/xiamen/',
    //     },
    //     {
    //       text: 'Xi\'an',
    //       link: '/xian/impressions',
    //       activeMatch: '/xian/',
    //     },
    //     {
    //       text: 'Wuhan',
    //       link: '/wuhan/impressions',
    //       activeMatch: '/wuhan/',
    //     },

    // ],
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
