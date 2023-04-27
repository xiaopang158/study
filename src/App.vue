<template>
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from './router/index'
import LayOut from '@/layout/LayOut.vue'
const routerList = ref({ ...router.options.routes })

const num = ref(0)

const onClick = (index: number) => {
  num.value = index
}
</script>

<style scoped>
main {
  padding: 20px;
}
header {
  min-height: 1000px;
  background-color: aqua;
}
.wrapper {
  /* display: flex;
  flex-direction: column; */
}
nav {
  width: 200px;
  display: flex;
  flex-direction: column;
}
.active {
  background-color: beige;
}
</style>
