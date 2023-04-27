<template>
  <el-aside width="200px">
    <!-- Aside侧边栏 -->
    <div class="logo">logo</div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <Imenu :options="options"></Imenu>

      <el-sub-menu index="1-4">
        <template #title><span>select选择器 </span></template>

        <el-menu-item index="1-4-1">item one</el-menu-item>
        <el-menu-item index="1-4-2">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import Imenu from './Imenu.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(Imenu)

console.log(router.options.routes)
const active = ref('首页')
const options: any = router.options.routes
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  active.value = keyPath[0]
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped lang="scss">
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363434;
  color: #fff;
}
</style>
