<template>
  <div class="flex">
    <div class="logo_box">
      <div class="poa">
        <div class="logo">logo</div>
      </div>
    </div>
    <el-scrollbar>
      <el-aside class="p_aside">
        <!-- Aside侧边栏 -->

        <el-menu
          :default-active="active"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <Imenu :options="options"></Imenu>
        </el-menu>
      </el-aside>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import Imenu from './Imenu.vue'
import { useRouter, useRoute } from 'vue-router'
import { userInfo } from '@/stores/userInfo'

const piniaUserInfo = userInfo()
const router = useRouter()
const route = useRoute()

const instance = getCurrentInstance()
const active: any = ref('')
const options: any = router.options.routes.slice(1)
const isCollapse = ref(false)

onMounted(() => {
  active.value = route.path
  const arr = fouterFind(options, route.path, [])

  piniaUserInfo.setRouterOptions(arr)
})

/**
 * 获取当前路由的item
 * @param options 路由的
 * @param path 需要的
 * @param arr []
 */
const fouterFind = (options: any, path: any, arr: any[]) => {
  const a = options.find((item: any) => {
    if (item.path === path) {
      return item
    } else {
      if (item.children) {
        fouterFind(item.children, path, arr)
      } else {
        return false
      }
    }
  })
  if (a) {
    arr.unshift(a)
  }
  return arr
}

/**
 * sub-menu 展开的回调
 * @param key
 * @param keyPath
 */
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

/**
 * sub-menu 收起的回调
 * @param key
 * @param keyPath
 */
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

/**
 * 菜单激活回调
 * @param index 当前路由
 */
const handleSelect = (index: any) => {
  const arr = fouterFind(options, index, [])
  // console.log(arr)

  piniaUserInfo.setRouterOptions(arr)
}

/**
 * 兄弟传参
 * @param str
 */
const Bus = (str: any) => {
  isCollapse.value = str
}
// *代表所有的事件监听
instance?.proxy?.$Bus.on('on-xin', Bus)
// instance?.proxy?.$Bus.off('on-xin', Bus) //清楚on-xin事件的emit
// instance?.proxy?.$Bus.all.clear() //清除所有的emit
</script>
<style scoped lang="scss">
.logo_box {
  position: relative;
  height: 60px;
}
.poa {
  // position: fixed;
  // width: 200px;
  // width: 100%;
  // left: 0;
  // top: 0;
  z-index: 2;
}
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363434;
  color: #fff;
}

.flex {
  flex-direction: column;
}
</style>
