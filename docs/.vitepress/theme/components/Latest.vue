<script setup>
import { data as last } from '../data/lastUpdate.data';

const title = last.src?.split?.('#')?.[1];
const route = last.url?.split?.('/')?.slice?.(2)?.join?.('/');
</script>

<template>
  <div class="container">
    <span class="label">UPDATE</span>
    <a v-if="title && route" :href="route">{{ title }}</a>
  </div>
</template>

<style scoped>
.container {
  padding: 0 24px 24px 24px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}

.label {
  background-color: var(--vp-custom-block-important-bg);
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 800;
  user-select: none;
}
</style>
