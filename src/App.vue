<script setup lang="ts">
import { ref } from 'vue'
// import Cirque from './components/Cirque/Cirque.vue'
import Button from './components/Button/Button.vue'
import HoverCard from './components/HoverCard/HoverCard.vue'
// import { Cirque, Button } from 'vuetask'
// exec(`start C:/gl/SQL`)
const options = ref({
  inColor: '#F20',
  strokeW: '5px',
  size: 50
})
</script>

<template>
  <!-- <BB :options="options" :min="5" :max="10"></BB> -->
  <Cirque :options="options" :min="1" :max="50" meter></Cirque>
  <Button />
  <HoverCard />
</template>

<style lang="less"></style>
