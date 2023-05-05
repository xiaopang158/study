<template>
  <template v-for="item in options" :key="item.id">
    <!-- {{ item }} -->
    <!-- 没有 item.children -->
    <el-menu-item :index="item.path" v-if="!item.children">
      <el-icon><Sunny /></el-icon>
      <template #title>
        {{ item.name }}
      </template>
    </el-menu-item>

    <!-- item.children 只有一个item -->
    <el-menu-item v-else-if="item.children.length === 1" :index="item.children[0].path">
      <el-icon><Bell /></el-icon>
      <template #title>
        {{ item.children[0].name }}
      </template>
    </el-menu-item>

    <!-- item.children 有多个item -->
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <!-- <el-menu-item v-for="item2 in item.children" :index="item2.id">{{ item2.name }}</el-menu-item> -->
      <Imenu :options="item.children"></Imenu>
    </el-sub-menu>
  </template>
</template>
<script lang="ts" setup>
import { ref, reactive, defineProps } from 'vue'
import Imenu from './Imenu.vue'

defineProps({
  options: <any>[]
})
</script>
<style scoped lang="scss">
.link {
  width: 100%;
}
.el-icon {
  color: #000;
}
</style>
