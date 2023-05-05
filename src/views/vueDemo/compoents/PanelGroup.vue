<template>
  <el-row :gutter="24">
    <el-col :xs="24" :sm="4" :md="12" :lg="6" :xl="6">
      <div class="grid-content ep-bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="4" :md="12" :lg="6" :xl="6">
      <div class="grid-content ep-bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="4" :md="12" :lg="6" :xl="6">
      <div class="grid-content ep-bg-purple"></div>
    </el-col>
    <el-col :xs="24" :sm="4" :md="12" :lg="6" :xl="6">
      <div class="grid-content ep-bg-purple"></div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss">
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #fff;
  &:hover {
    /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.1);
    /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
    // box-shadow: 2px 2px 10px black;
  }
}
</style>
