<script setup>
import { defineProps } from 'vue';
const props = defineProps(['word', 'as', 'pinyin', 'ipa']);
</script>

<template>
  <div class="wrapper">
    <div class="word" v-for="w in props.word.split('')">
      <div class="text">{{ w }}</div>
      <div class="dash middle"></div>
      <div class="dash vertical"></div>
    </div>
    <div class="description">
      <div>{{ props.pinyin }} <Speech :as="props.as || props.word"></Speech></div>
      <div>/{{ props.ipa }}/</div>
      <div><slot></slot></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.word {
  display: inline-block;
  position: relative;
  font-family: '楷体', 'KaiTi', serif;
  font-size: 60px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: #000;
  text-align: center;
  background-color: #eee;
  border-radius: 4px;
  margin-right: 8px;
}

.word .text {
  z-index: 1
}

.word .dash {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.word .dash.middle {
  width: 100%;
  height: 50%;
  border-bottom: 1px dashed #999;
}
.word .dash.vertical {
  width: 50%;
  height: 100%;
  border-right: 1px dashed #999;
}
</style>
