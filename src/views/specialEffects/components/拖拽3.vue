<template>
  <div class="box">
    <h2>使用的 useElementBounding 函数</h2>
    <div style="min-height: 300px">
      <textarea ref="el" readonly class="resizer" rows="18" :value="text" />
      <div class="poa"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
// import { stringify } from '@vueuse/docs-utils'
import { useElementBounding } from '@vueuse/core'
const el = ref(null)
const rect = reactive(useElementBounding(el))
console.log(rect)
const text = 666
// const text = stringify(rect)
</script>
<style scoped lang="scss">
.box {
  position: relative;
  // min-width: 400px;
  // min-height: 500px;
  background-color: aquamarine;
}
textarea {
  width: 100%;
  height: 100%;
}
.poa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: pink;
  margin-bottom: 20px;
}
</style>
