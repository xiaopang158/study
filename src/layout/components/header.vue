<template>
  <el-header class="header">
    <div class="flex">
      <div>
        <div class="icon">
          <el-icon v-show="!isCollapse" @click="changeEmit"><Fold /></el-icon>
          <el-icon v-show="isCollapse" @click="changeEmit"><Expand /></el-icon>
        </div>

        <el-breadcrumb :separator-icon="ArrowRight" v-if="getRouterOptions.length > 0">
          <el-breadcrumb-item :to="{ path: item.path }" v-for="item in getRouterOptions">
            {{ item.name }}
          </el-breadcrumb-item>
          <!-- <el-breadcrumb-item>promotion</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>

      <div class="photo_box">
        <div class="photo"></div>
        <div>
          {{ data.userName }}
        </div>
        <div class="poa">
          <div class="outIn_top"></div>
          <ul @click="onClick">
            <li>退出登录</li>
          </ul>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, unref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { userInfo } from '@/stores/userInfo'
const piniaUserInfo = userInfo()
const router = useRouter()
const instance = getCurrentInstance()
const isCollapse = ref(false)
const { getRouterOptions } = storeToRefs(piniaUserInfo)
// console.log(getRouterOptions)

const data = reactive({
  userName: '学员'
})

/**
 * mitt 传参
 */
const changeEmit = () => {
  isCollapse.value = !isCollapse.value
  instance?.proxy?.$Bus.emit('on-xin', unref(isCollapse))
}

/**
 * 点击事件
 */
const onClick = (e: any) => {
  if (e.target.innerText) {
    router.push('/')
  }
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  background-color: aqua;
}
.flex {
  justify-content: space-between;
  height: 100%;
  & > div {
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: all 0.5s;
    &:last-child:hover {
      background-color: antiquewhite;
      cursor: pointer;
      .poa {
        // display: block;
        z-index: 2;
        opacity: 1;
      }
    }
    // .photo_box &:hover {
    //   .poa {
    //     display: block;
    //   }
    // }
    .photo {
      width: 40px;
      height: 40px;
      background-color: rgb(20, 5, 7);
      border-radius: 50%;
      background-image: url(@/assets/img/photo.png);
      background-size: contain;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
.poa {
  // display: none;
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: -90%;
  width: 120px;
  height: 50px;
  background-color: #999;
  z-index: -1;
  transition: all 0.5s;

  ul {
    text-align: center;
  }
}

.outIn_top {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  // background-color: black;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #999;
}
.el-breadcrumb {
  margin-left: 20px;
}

.icon {
  margin-top: 4px;
  font-style: 20px;
  cursor: pointer;
}
</style>
