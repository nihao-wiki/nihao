<script setup>
import useCurrency from '../hooks/useCurrency';

const { currency, currencies } = useCurrency();
</script>

<template>
  <select v-model="currency">
    <option v-for="(c, name) in currencies" :value="name">{{ name }}({{ c.unit }})</option>
  </select>
</template>
