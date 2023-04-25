<template>
  <div>
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="火苗" name="火苗"></el-tab-pane>
      <el-tab-pane label="拖拽" name="拖拽"></el-tab-pane>
      <el-tab-pane label="拖拽2" name="拖拽2"></el-tab-pane>
      <el-tab-pane label="拖拽3" name="拖拽3"></el-tab-pane>
    </el-tabs>
  </div>
  <KeepAlive>
    <component :is="tap[componentIdnex].comName"></component>
  </KeepAlive>
</template>

<script lang="ts" setup>
import { ref, reactive, markRaw } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import flame from './components/火苗.vue'
import tuoZhuai from './components/拖拽.vue'
import tuoZhuai2 from './components/拖拽2.vue'
import tuoZhuai3 from './components/拖拽3.vue'
const tap = reactive([
  {
    name: '火苗',
    comName: markRaw(flame)
  },
  {
    name: '拖拽',
    comName: markRaw(tuoZhuai)
  },
  {
    name: '拖拽2',
    comName: markRaw(tuoZhuai2)
  },
  {
    name: '拖拽3',
    comName: markRaw(tuoZhuai3)
  },
  {
    name: '拖拽',
    comName: markRaw(tuoZhuai)
  }
])
const activeName = ref('火苗')

const componentIdnex: any = ref('0')
// 标签被选中
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.props.label, event)
  const a = tap.findIndex((item: any) => {
    return item.name === tab.props.label
  })
  if (a >= 0) {
    componentIdnex.value = a + ''
  }
}
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
