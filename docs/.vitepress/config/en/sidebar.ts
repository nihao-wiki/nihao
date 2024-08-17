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
          text: 'High Season',
          link: 'high-season',
        },
        {
          text: 'Payment',
          link: 'payment',
        },
      ],
    },
    {
      text: 'Destination',
      items: [
        {
          text: 'Chongqing',
          link: '../chongqing/impressions'
        }
      ]
    }
  ];
}

function sidebarChongqing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Chongqing',
      items: [
        { text: 'Visa Free', link: 'visa-free' },
        { text: 'Impressions', link: 'impressions' },
        { text: '8D Cyberpunk', link: 'cityscape' },
        { text: 'Culture', link: 'culture' },
        {
          text: 'Sensational Cuisine',
          base: '/chongqing/cuisine/',
          items: [
            { text: 'Noodles', link: 'noodles' },
            { text: 'Street Food', link: 'street-food' },
            { text: 'Hot Pot', link: 'hot-pot' },
            { text: 'Jianghu Cuisine', link: 'jianghu-cuisine' },
            { text: 'Sichuan Cuisine', link: 'sichuan-cuisine' },
          ],
        },
        {
          text: 'Essential Routes',
          link: 'routes',
        },
      ],
    },
  ];
}

export default {
  '/guide/': { base: '/guide/', items: sidebarGuide() },
  '/chongqing/': { base: '/chongqing/', items: sidebarChongqing() },
};
