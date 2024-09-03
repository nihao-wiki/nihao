<script setup>
import { data as last } from '../data/lastUpdate.data';
const title = last?.src?.split?.(/[#\n]/)?.filter(Boolean)?.[0]?.trim();
const date = last?.timestamp && new Date(last.timestamp).toDateString();
const route = last?.url?.split?.('/')?.slice?.(2)?.join?.('/');
</script>

<template>
  <div v-if="title && route" class="container">
    <span class="label">UPDATE</span>
    <a :href="route">
      <span>{{ title }}</span>
      <span style="margin-left: 8px">({{ date }})</span>
    </a>
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
