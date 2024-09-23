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
      text: 'Yunnan',
      link: '/yunnan/kunming/impressions',
      activeMatch: '/yunnan/',
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
          text: 'Nanjing',
          link: '/nanjing/impressions',
          activeMatch: '/nanjing/',
        },
      ],
    },
    // {
    // text: 'Destinations',
    // items: [
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
