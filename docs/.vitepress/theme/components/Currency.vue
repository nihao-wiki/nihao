<script setup>
import useCurrency from '../hooks/useCurrency';

const { currency, currencies } = useCurrency();
</script>

<template>
  <select>
    <option v-for="(c, name) in currencies" :value="name">{{ name }}({{ c.unit }})</option>
  </select>
</template>
