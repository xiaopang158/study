import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
import logIn from '../views/login/index.vue'
import LayOut from '@/layout/LayOut.vue'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
// console.log(import.meta.env.VITE_API_BASEPATH)

const routes = [
  {
    path: '/',
    name: '登录页',
    id: '1',
    // component: logIn
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/layout',
    name: '首页',
    id: '2',
    component: () => import('@/layout/LayOut.vue'),
    // component: LayOut,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: '/layout/home',
        name: '页面1',
        id: '2_1',
        component: () => import('../views/HomeView.vue')
        // component: UserProfile
      },
      {
        path: '/layout/about',
        name: 'about',
        id: '2-2',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/layout/teXiao',
        name: '特效',
        id: '2-3',
        component: () => import('../views/specialEffects/特效.vue')
      }
    ]
  },
  {
    path: '/vuedemo',
    name: '首页2',
    id: '3',
    component: LayOut,
    children: [
      {
        path: '/vuedemo/index',
        name: 'vuedemo',
        id: '3-1',
        component: () => import('../views/vueDemo/index.vue')
      }
    ]
  },
  {
    path: '/cs',
    name: '首页3',
    id: '4',
    component: LayOut,
    children: [
      {
        path: '/cs/select',
        name: 'select选择器',
        id: '5',
        component: () => import('../views/ElementSelect/index.vue')
      }
    ]
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
