<template>
  <div class="box" @mousemove="onMousemove">
    <h2>自己写的比较失败</h2>

    <p>拖拽,</p>
    <p>点击进行拖拽,</p>
    <p>再次点击停止拖拽</p>

    <!-- 传送组件 -->
    <Teleport to="body">
      <div class="poa" @mousedown="onMousedown"></div>
    </Teleport>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// mouseover / mouseout   一对      支持事件冒泡
// mousedown    鼠标按下
// mouseup      鼠标抬起
// 鼠标移动 mousemove

// clientX	以浏览器窗口左上顶角为原点，定位 x 轴坐标	所有浏览器，不兼容 Safari
// clientY	以浏览器窗口左上顶角为原点，定位 y 轴坐标	所有浏览器，不兼容 Safari
// offsetX	以当前事件的目标对象左上顶角为原点，定位 x 轴坐标	所有浏览器，不兼容 Mozilla
// offsetY	以当前事件的目标对象左上顶角为原点，定位 y 轴坐标	所有浏览器，不兼容 Mozilla
// pageX	  以 document 对象（即文档窗口）左上顶角为原点，定位 x 轴坐标	所有浏览器，不兼容 IE
// pageY	  以 document 对象（即文档窗口）左上顶角为原点，定位 y 轴坐标	所有浏览器，不兼容 IE
// screenX	计算机屏幕左上顶角为原点，定位 x 轴坐标	所有浏览器
// screenY	计算机屏幕左上顶角为原点，定位 y 轴坐标	所有浏览器
// layerX	  最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 x 轴坐标	Mozilla 和 Safari
// layerY	  最近的绝对定位的父元素（如果没有，则为 document 对象）左上顶角为元素，定位 y 轴坐标	Mozilla 和 Safari

// 盒子坐标
const top = ref('300px')
const left = ref('300px')

/**
 * 1. 需要获得距离盒子的坐标 和 距离视口左上角的坐标
 * 2. 用距离视口左上角的坐标 - 距离盒子坐上角的坐标 = 盒子左上角距离视口左上角的坐标
 */

// 距离盒子坐上角的坐标
const elOffsetX = ref(0)
const elOffsetY = ref(0)

const flag: any = ref(false)
/**
 * 鼠标按下
 * 1. 需要获得距离盒子的坐标
 */
const onMousedown = (e: MouseEvent) => {
  flag.value = !flag.value
  if (flag.value) {
    elOffsetX.value = e.offsetX
    elOffsetY.value = e.offsetY
  }
  console.log(e.offsetX, e.offsetY)
}

/**
 * 鼠标移动
 * 1. 距离视口左上角的坐标
 * 2. 用距离视口左上角的坐标 - 距离盒子坐上角的坐标 = 盒子左上角距离视口左上角的坐标
 */
const onMousemove = (e: MouseEvent) => {
  // console.log()
  if (flag.value) {
    left.value = e.pageX - elOffsetX.value + 'px'
    top.value = e.pageY - elOffsetY.value + 'px'
  }
  // console.log(e.pageX - elOffsetX.value + 'px');

  // console.log(e.pageX, e.pageY)
}
</script>

<style scoped lang="scss">
.box {
  // position: relative;
  width: 100%;
  height: 500px;
  background-color: aquamarine;
}

.poa {
  position: absolute;
  width: 20px;
  height: 20px;
  top: v-bind(top);
  left: v-bind(left);
  background-color: #000;
}
</style>
