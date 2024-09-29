---
layout: page
title: Special Thanks
ignoreCheck: true
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import IraqLaowangzzg from './assets/avatar/Iraq-laowangzzg.jpg'
import TwoMadExplorers from './assets/avatar/TwoMadExplorers.jpg'

const members = [
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
      Special Thanks
    </template>
    <template #lead>
      A special thanks to youtuber for
      sharing yours travel experiences.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
