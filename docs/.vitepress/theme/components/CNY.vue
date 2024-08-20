<script setup>
import { definedSlots } from 'vue';
import useCurrency from '../hooks/useCurrency';

const slots = definedSlots();
const { formattedAmount } = useCurrency(slots?.default?.()?.[0]?.children || 0);
</script>

<template>
  {{ formattedAmount}}
</template>
