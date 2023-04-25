import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
import logIn from '../views/login/index.vue'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
console.log(import.meta.env.VITE_API_BASEPATH)

const routes = [
  {
    path: '/',
    name: '首页',
    component: logIn
    // component: () => import('../views/login/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/teXiao',
    name: '特效',
    component: () => import('../views/specialEffects/特效.vue')
  },
  {
    path: '/select',
    name: 'select选择器',
    component: () => import('../views/ElementSelect/index.vue')
  }
]
console.log(import.meta.env)

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL), // history 模式
  routes
})

export default router
