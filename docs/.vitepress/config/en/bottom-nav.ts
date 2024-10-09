import { type DefaultTheme } from 'vitepress';

export function bottomNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Top Destination',
      items: [
        // { text: 'Shanghai' },
        { text: 'Chongqing', link: '/chongqing/impressions' },
        // { text: 'Zhangjiajie' },
        // { text: 'Shenzhen' },
        // { text: 'Dalian' },
        // { text: 'Guangzhou' },
        // { text: 'Beijing' },
        // { text: 'Haerbin' },
        // { text: 'Wuhan' },
        // { text: 'Xiamen' },
        // { text: 'Suzhou' },
        { text: 'Qingdao', link: '/qingdao/impressions' },
        { text: 'Lijiang', link: '/yunnan/lijiang/impressions' },
        { text: 'Nanjing', link: '/nanjing/impressions' },
        { text: 'Dali', link: '/dali/impressions' },
        { text: 'Chengdu', link: '/sichuan/chengdu/impressions' },
        // { text: 'Tianjin' },
        // { text: 'Changsha' },
        // { text: "Xi'an" },
        { text: 'Hangzhou', link: '/hangzhou/impressions' },
      ],
    },
    {
      text: 'Guide',
      items: [
        {
          text: 'Visa',
          link: '/guide/visa',
        },
        {
          text: 'Mobile Payment',
          link: '/guide/paying',
        },
        {
          text: 'Safety Tips',
          link: '/guide/safety',
        },
        {
          text: 'Communication',
          link: '/guide/communication',
        },
      ],
    },
    {
      text: 'About',
      items: [
        {
          text: 'Our Team',
          link: '/team',
        },
        {
          text: 'Privacy Policy',
          link: '/privacy',
        },
        {
          text: 'Statement',
          link: '/statement',
        },
      ],
    },
    {
      text: 'Contribute',
      items: [
        {
          text: 'Contribute',
          link: '/contribute',
        },
        {
          text: 'Thanks',
          link: '/thanks',
        },
      ],
    },
  ];
}
