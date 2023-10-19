<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  // 非ts专有声明  是我们自己定义的HOT类型
  options: {
    type: Object as () => Cirques,
    default: () => {},
    required: true
  },
  min: {
    type: Number,
    default: 20
  },
  max: {
    type: Number,
    default: 100
  },
  meter: {
    type: Boolean,
    default: false
  }
})

const d = [
  `M 50 50
        m 0 -47
        a 47 47 0 1 1 0 94
        a 47 47 0 1 1 0 -94`,
  `M 50 50
        m 0 47
        a 47 47 0 1 1 0 -94
        a 47 47 0 1 1 0 94`
]

const def = ref<Cirques>(
  Object.assign(
    {
      outColor: '#ebeef5',
      inColor: '#red',
      strokeW: '5px',
      size: '50px'
    },
    props.options
  )
)
const offset = computed(() => {
  return props.min / props.max
})
</script>

<script lang="ts">
export default {
  name: 'Cirque'
}
</script>

<template>
  <div class="cirque-box" :style="{width:def.size +'px',height:def.size +'px'}">
    <svg viewBox="0 0 100 100" width="100%">
      <path :d="d[meter?1:0]" :stroke="def.outColor" fill="none" stroke-linecap="round" :stroke-width="def.strokeW" :style="`stroke-dasharray: ${meter?'225':'300'}px, 300px; stroke-dashoffset: ${meter?'-35.47':'0'}px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;`"></path>
      <path :d="d[meter?1:0]" :stroke="def.inColor" fill="none" stroke-linecap="round" :stroke-width="def.strokeW" :style="`stroke-dasharray: ${offset*(meter?225:300)}, 300px; stroke-dashoffset: ${meter?'-35.47':'0'}px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;`"></path>
    </svg>
    <div class="cirque-text">{{offset*100}}%</div>
  </div>
</template>

<style lang="less">
.cirque-box {
  position: relative;
}
.cirque-text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  transform: translateY(-50%);
  font-size: 12px;
  color: #606266;
}
</style>
