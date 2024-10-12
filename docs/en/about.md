---
layout: page
title: 'About Us: Why We Created This'
ignoreCheck: true
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import IraqLaowangzzg from './assets/avatar/Iraq-laowangzzg.jpg'
import TwoMadExplorers from './assets/avatar/TwoMadExplorers.jpg'

const members = [
  {
    avatar: 'https://www.github.com/chiaweilee.png',
    name: 'Chiawei Lee',
    title: 'Creator, Chongqing Local',
  },
]

const youtubers = [
  {
    avatar: IraqLaowangzzg,
    name: 'Iraq-laowangzzg',
    title: 'China\'s good brother',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@Iraq-laowangzzg' },
    ]
  },
  {
    avatar: TwoMadExplorers,
    name: 'TwoMadExplorers',
    title: 'A Couple Objectively Introducing China',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@TwoMadExplorers' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About Us
    </template>
    <template #lead>
      The development of Nihao.wiki is guided by an domestic
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Special Thanks
    </template>
    <template #lead>
      A special thanks to youtubers.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="youtubers"
  />
</VPTeamPage>
