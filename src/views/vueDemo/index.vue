<template>
  <div>
    <!-- <MyComponent></MyComponent> -->
    <PanelGroup></PanelGroup>
    <button v-demo="'demo2'">点击</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import PanelGroup from './compoents/PanelGroup.vue'
</script>
<style scoped lang="scss"></style>
