---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import laowangzzg from './assets/avatar/Iraq-laowangzzg.jpg'

const members = [
  {
    avatar: laowangzzg,
    name: 'Iraq-laowangzzg',
    title: 'China\'s good brother',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@Iraq-laowangzzg' },
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
