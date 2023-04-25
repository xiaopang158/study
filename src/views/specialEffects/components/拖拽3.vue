<template>
  <div class="box">
    <h2>使用的 useElementBounding 函数</h2>
    <h2>拖拽右下角</h2>
    <div>
      <textarea ref="el" readonly class="resizer" rows="18" :value="text" />
      <div class="poa">
        <div class="flex">最上面的盒子</div>
      </div>
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
  background-color: aquamarine;
}
textarea {
  // width: 200px;
  width: 100%;
  min-width: 440px;
}
.poa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 20px);
  background-color: pink;
  // margin-bottom: 20px;
}

.flex {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
