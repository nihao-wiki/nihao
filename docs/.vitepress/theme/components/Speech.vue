<script setup lang="ts">
import { useSlots, computed, defineProps, ref } from 'vue';

const props = defineProps({
  as: {
    type: String,
    required: false,
  },
});

const reading = ref(false);
const fill = computed(() => (reading.value ? 'var(--vp-badge-tip-text)' : 'var(--vp-c-default-1)'));
const slots = useSlots();

const speak = () => {
  const text: unknown = props.as ? props.as : slots.default?.()?.[0]?.children;
  if (typeof text === 'string' && 'speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance();
    utterance.onstart = () => (reading.value = true);
    utterance.onend = () => (reading.value = false);
    utterance.text = text;
    utterance.lang = 'zh-CN';
    utterance.rate = 0.6;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }
};
</script>

<template>
  <span>
    <slot></slot>
    <span class="speak-icon" @click="speak">
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          :fill="fill"
          d="M972.8 167.0656c-14.1824-78.0288-85.0944-127.6416-163.072-113.4592L455.2704 110.336c-70.8608 14.1824-120.5248 70.8608-120.5248 141.824v361.472H228.4544A175.5136 175.5136 0 0 0 51.2 790.9376a175.5136 175.5136 0 0 0 177.2544 177.2544 175.5136 175.5136 0 0 0 177.2032-177.2544V252.1088c0-35.4304 28.3648-63.7952 56.7296-70.912l354.4576-56.6784c42.496-7.1168 77.9776 14.1824 85.0432 56.6784v361.5744h-106.3424a175.5136 175.5136 0 0 0-177.2032 177.2544 175.5136 175.5136 0 0 0 177.2032 177.2032A175.5136 175.5136 0 0 0 972.8 720.0256V188.3136v-21.248zM334.7456 790.8864c0 56.7296-49.6128 106.3424-106.2912 106.3424-56.7296 0-106.3424-49.664-106.3424-106.3424 0-56.7296 49.6128-106.3424 106.3424-106.3424h106.2912v106.3424z m567.1424-70.8608c0 56.6784-49.6128 106.2912-106.3424 106.2912-56.6784 0-106.2912-49.6128-106.2912-106.2912 0-56.7296 49.6128-106.3424 106.2912-106.3424h106.3424v106.3424z"
        ></path>
      </svg>
    </span>
  </span>
</template>

<style scoped>
.speak-icon {
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 8px 0 2px;
  svg,
  path {
    width: 12px;
    height: 12px;
  }
}
</style>
