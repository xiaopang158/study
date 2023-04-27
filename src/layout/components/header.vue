<template>
  <el-header class="header">
    <div class="flex">
      <div>
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">expand</el-radio-button>
          <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
      </div>
      <div class="photo_box">
        <div class="photo"></div>
        <div>
          {{ '学圆' }}
          <!-- {{ '学圆是傻狗' }} -->
        </div>
        <div class="poa">
          <div class="outIn_top"></div>
          <ul>
            <li>退出登录</li>
          </ul>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
const isCollapse = ref(false)
const isShow = ref(false)
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
    &:hover {
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
</style>
