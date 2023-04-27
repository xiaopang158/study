<template>
  <div class="common-layout">
    <el-container>
      <Iaside></Iaside>
      <el-container class="min">
        <Iheader></Iheader>
        <el-main>
          <!-- <slot></slot> -->
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Iaside from './components/aside.vue'
import Iheader from './components/header.vue'
</script>
<style scoped>
/* 侧边栏 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<style>
/* .common-layout {
  width: 100%;
  display: flex;
} */
</style>
