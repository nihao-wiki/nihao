# Is Travel in China Really Expensive?

## Exchange Rate

<script setup>
import { currencies } from '../../.vitepress/theme/hooks/useCurrency';
</script>

<table>
  <thead>
    <tr>
      <th>Currency</th>
      <th>Unit</th>
      <th>Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(currency, key) in currencies" :key="currency.unit">
      <td>{{ key }}</td>
      <td>{{ currency.unit }}</td>
      <td>{{ currency.ratio }}</td>
    </tr>
  </tbody>
</table>

## Expenses

<YouTube link="https://youtu.be/grWAN8GEJ-I?si=-9PqXF4IWr59AoU9">
<template #cover><img src="../assets/youtube/full-supermarket-tour-in-china-ks.jpg" alt="CHINA: Supermarket Tour 2024" /></template>
<template #title>CHINA: Supermarket Tour 2024 (SHOCKING PRICES) </template>
<template #author>KSquared</template>
<template #description>I went to a supermarket in Chongqing, China. I was shocked to see how affordable many of the items were.</template>
</YouTube>