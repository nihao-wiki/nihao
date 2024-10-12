import { type DefaultTheme } from 'vitepress';

interface Destinations extends DefaultTheme.NavItemWithLink {
  WIP?: true;
}

export const allDestination: Destinations[] = [
  {
    text: 'Shanghai',
    link: '/shanghai/impressions',
    activeMatch: '/shanghai/',
    WIP: true,
  },
  {
    text: 'Chongqing',
    link: '/chongqing/impressions',
    activeMatch: '/chongqing/',
  },
  // { text: 'Zhangjiajie' },
  // { text: 'Shenzhen' },
  // { text: 'Dalian' },
  // { text: 'Guangzhou' },
  {
    text: 'Beijing',
    link: '/beijing/impressions',
    activeMatch: '/beijing/',
    WIP: true,
  },
  // { text: 'Haerbin' },
  // { text: 'Wuhan' },
  // { text: 'Xiamen' },
  // { text: 'Suzhou' },
  {
    text: 'Qingdao',
    link: '/qingdao/impressions',
    activeMatch: '/qingdao/',
    WIP: true,
  },
  {
    text: 'Lijiang',
    link: '/yunnan/lijiang/impressions',
    activeMatch: '/yunnan/lijiang/',
    WIP: true,
  },
  {
    text: 'Nanjing',
    link: '/nanjing/impressions',
    activeMatch: '/nanjing/',
    WIP: true,
  },
  {
    text: 'Chengdu',
    link: '/sichuan/chengdu/impressions',
    activeMatch: '/sichuan/chengdu/',
    WIP: true,
  },
  // { text: 'Tianjin' },
  // { text: 'Changsha' },
  // { text: "Xi'an" },
  {
    text: 'Hainan',
    link: '/hainan/sanya/impressions',
    activeMatch: '/hainan/',
    WIP: true,
  },
  {
    text: 'Hangzhou',
    link: '/hangzhou/impressions',
    activeMatch: '/hangzhou/',
    WIP: true,
  },
  {
    text: 'Kunming',
    link: '/yunnan/kunming/impressions',
    activeMatch: '/yunnan/kunming/',
    WIP: true,
  },
  {
    text: 'Dali',
    link: '/yunnan/dali/impressions',
    activeMatch: '/yunnan/dali/',
    WIP: true,
  },
  {
    text: 'Xishuangbanna',
    link: '/yunnan/xishuangbanna/impressions',
    activeMatch: '/yunnan/xishuangbanna/',
    WIP: true,
  },
];

export const destination: DefaultTheme.NavItemWithLink[] =
  process.env.NODE_ENV === 'development'
    ? allDestination.map((dest) => {
        if (dest.WIP) dest.text += ' 🏗';
        return dest;
      })
    : allDestination.filter((dest) => !dest.WIP);

export const srcExclude =
  process.env.NODE_ENV === 'development'
    ? []
    : allDestination
        .filter((dest) => dest.WIP)
        .map((dest) => '*' + dest.link.split('/').slice(0, -1).join('/') + '/*');
