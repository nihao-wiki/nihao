<script setup>
import useCurrency from '../hooks/useCurrency';

const { currency, currencies } = useCurrency();
</script>

<template>
  <select v-model="currency">
    <option v-for="(c, name) in currencies" :value="name">{{ c.unit }} - {{ name }}</option>
  </select>
</template>
