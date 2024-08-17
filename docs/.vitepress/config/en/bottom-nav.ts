import { type DefaultTheme } from 'vitepress';

export function bottomNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Destination',
      items: [
        {
          text: 'Chongqing',
          link: '/chongqing/impressions',
        },
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
          text: 'Paying Ways',
          link: '/guide/paying',
        },
        {
          text: 'Safety',
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
          text: 'Privacy',
          link: '/privacy',
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
    {
      text: 'Sponsor',
      items: [
        {
          text: 'Sponsor',
          link: '/sponsor',
        },
      ],
    },
  ];
}
