<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useData } from 'vitepress';

const interval = 5000;
const frontmatter = useData().frontmatter;
const timer = ref();
const current = ref(0);

const slide = () => {
  const { poi } = frontmatter.value;
  const { text, brand, link } = poi[current.value];

  const heroText: HTMLDivElement | null = document.querySelector('.VPHomeHero .text');
  if (heroText) heroText.innerHTML = text;
  const heroButton: HTMLLinkElement | null = document.querySelector('.VPHomeHero .action a.brand');
  if (heroButton) {
    heroButton.innerText = brand;
    heroButton.href = link;
  }

  current.value = current.value < poi.length - 1 ? current.value + 1 : 0;
  timer.value = setTimeout(slide, interval);
};

onMounted(() => {
  slide();
});

onUnmounted(() => {
  clearTimeout(timer.value);
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
