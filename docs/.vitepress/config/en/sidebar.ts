import { type DefaultTheme } from 'vitepress';

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Visa',
          link: 'visa',
        },
        {
          text: 'Best Seasons',
          link: 'seasons',
        },
        {
          text: 'Mobile Payment',
          link: 'paying',
        },
        {
          text: 'Communication',
          link: 'communication',
        },
        {
          text: 'Safety Tips',
          link: 'safety',
        },
        {
          text: 'Expenses',
          link: 'currency',
        },
        {
          text: 'Say "Nihao"',
          link: 'hello',
        },
      ],
    },
    {
      text: 'Transportation',
      items: [
        {
          text: 'High-Speed Train',
          link: 'train',
        },
      ],
    },
    {
      text: 'Destination',
      items: [
        {
          text: 'Beijing',
          link: '../beijing/impressions',
        },
        {
          text: 'Shanghai',
          link: '../shanghai/impressions',
        },
        {
          text: 'Hangzhou',
          link: '../hangzhou/impressions',
        },
        {
          text: 'Chongqing',
          link: '../chongqing/impressions',
        },
        {
          text: 'Chengdu',
          link: '../chengdu/impressions',
        },
        {
          text: 'Qingdao',
          link: '../qingdao/impressions',
        },
        {
          text: 'Yunnan',
          link: '../yunnan/kunming/impressions',
        },
      ],
    },
    {
      text: 'Wonders',
      items: [
        {
          text: 'Snow Mountains',
          link: 'snowmountains',
        },
      ],
    },
  ];
}

function sidebarChongqing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chongqing',
      items: [
        { text: 'How to Arrive', link: 'visa-free' },
        { text: 'First Impressions', link: 'impressions' },
        {
          text: 'Essential Routes',
          items: [{ text: 'One Day Urban Tour', link: 'cityscape' }],
        },
        {
          text: 'Optional Routes',
          items: [
            { text: 'Panda, Zoo', link: 'panda' },
            { text: 'Cultural Journey', link: 'culture' },
          ],
        },
        {
          text: 'Rural Routes',
          items: [
            { text: 'Dazu Rock Carvings', link: 'dazu' },
            { text: 'Three Gorges', link: 'three-gorges' },
            { text: 'Fishing City', link: 'hechuan' },
            { text: 'Wulong Karst', link: 'wulong' },
          ],
        },
        {
          text: 'Sensational Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Breakfast', link: 'breakfast' },
            { text: 'Street Food', link: 'street-food' },
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
          ],
        },
      ],
    },
  ];
}

function sidebarYunnan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Kunming',
      items: [
        { text: 'First Impressions', link: 'kunming/impressions' },
        { text: 'Kunming Lake', link: 'kunming/lake' },
        { text: 'Minority Cultures', link: 'kunming/minority' },
      ],
    },
    {
      text: 'Dali',
      items: [
        { text: 'First Impressions', link: 'dali/impressions' },
        { text: 'Ancient Towns', link: 'dali/cityscape' },
        { text: 'Natural Wonders', link: 'dali/wonders' },
      ],
    },
    {
      text: 'Lijiang',
      items: [
        { text: 'First Impressions', link: 'lijiang/impressions' },
        { text: 'Ancient Towns', link: 'lijiang/cityscape' },
      ],
    },
    {
      text: 'Shangri-la',
      items: [{ text: 'Natural Wonders', link: 'shangri-la/wonders' }],
    },
    {
      text: 'Xishuangbanna',
      items: [{ text: 'First Impressions', link: 'xishuangbanna/impressions' }],
    },
    {
      text: 'Cuisine',
      items: [{ text: '"Intoxicating" Mushroom', link: 'cuisine/mushroom' }],
    },
  ];
}

function sidebarHainan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Haikou',
      items: [{ text: 'First Impressions', link: 'haikou/impressions' }],
    },
    {
      text: 'Sanya',
      items: [{ text: 'First Impressions', link: 'sanya/impressions' }],
    },
  ];
}

function sidebarQingdao(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'First Impressions', link: 'impressions' },
    {
      text: 'Cuisine',
      items: [
        { text: 'Tsingtao Beer', link: 'beer' },
        { text: 'Dumplings', link: 'dumplings' },
        { text: 'Seafood', link: 'seafood' }
      ],
    },
  ];
}

function sidebarChengdu(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'First Impressions', link: 'impressions' },
    { text: 'Panda Base', link: 'panda' },
  ];
}

function sidebarBeijing(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'First Impressions', link: 'impressions' },
    { text: 'Imperial Traces', link: 'imperial' },
    { text: 'Halal Culture', link: 'halal' },
  ];
}

export default {
  '/guide/': { base: '/guide/', items: sidebarGuide() },
  '/chongqing/': { base: '/chongqing/', items: sidebarChongqing() },
  '/yunnan/': { base: '/yunnan/', items: sidebarYunnan() },
  '/hainan/': { base: '/hainan/', items: sidebarHainan() },
  '/qingdao/': { base: '/qingdao/', items: sidebarQingdao() },
  '/chengdu/': { base: '/chengdu/', items: sidebarChengdu() },
  '/beijing/': { base: '/beijing/', items: sidebarBeijing() },
};
