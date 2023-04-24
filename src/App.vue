<template>
  <header>
    <div class="wrapper">
      <!-- 导航标签 -->
      <nav>
        <RouterLink
          v-for="(item, index) in routerList"
          :key="index"
          :to="item.path"
          :class="{ active: index == num }"
          @click="onClick(index)"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from './router/index'

const routerList = ref({ ...router.options.routes })

const num = ref(0)

const onClick = (index: number) => {
  num.value = index
}
</script>

<style scoped>
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
