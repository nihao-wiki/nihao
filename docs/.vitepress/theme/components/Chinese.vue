<script setup>
const props = defineProps(['word', 'as']);
</script>

<template>
  <div class="wrapper">
    <div class="word" v-for="w in props.word.split('')">
      <div>{{ w }}</div>
      <div class="dash middle"></div>
      <div class="dash vertical"></div>
    </div>
    <div class="description">
      <div><slot name="pinyin"></slot> <Speech :as="props.as || props.word"></Speech></div>
      <div><slot name="ipa"></slot></div>
    </div>
  </div>
  <div><slot></slot></div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.word {
  display: inline-block;
  position: relative;
  font-family: '楷体', 'KaiTi', serif;
  font-size: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  color: #000;
  text-align: center;
  background-color: #eee;
  border-radius: 4px;
  margin-right: 8px;
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
