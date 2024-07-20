<template>
  <div class="flex"><slot></slot></div>
</template>

<style>
@media (min-width: 768px) {
  .flex {
    display: flex;
  }
  .flex > div {
    padding-right: 8px;
  }
  .flex > div:nth-last-child(1) {
    padding-right: 0;
  }
}
</style>
