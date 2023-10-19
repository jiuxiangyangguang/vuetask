<script setup lang="ts">
import { computed, ref } from 'vue'
const num = ref(1)
</script>
<script lang="ts">
export default {
  name: 'Button'
}
</script>

<template>
  <button @click="numAdd">测试</button>
  <div>
    <span class="sss">{{ num }}</span>
  </div>
</template>

<style lang="less">
button {
  color: red;
}
div {
  .sss {
    color: dodgerblue;
  }
}
</style>
