<template>
  <div class="box" ref="el" :style="style" style="position: fixed">
    <div class="drag">
      <!-- Drag me! I am at {{ x }}, {{ y }} -->
      我可以拖拽哦
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, type Ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 240, y: 140 }
})
</script>

<style scoped lang="scss">
.box {
  width: 400px;
  height: 500px;
  background-color: aquamarine;
}
.size {
  width: 50px;
  height: 50px;

  background-color: #000;
}
.drag {
  background-color: rgba($color: #000000, $alpha: 0.5);
}
</style>
