import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入路由
import router from './router'

// 引入全局样式
import './assets/css/index.scss'

// 全局组件
import { setupGlobCom } from '@/components/index'

// 引入mock
import '@/mock'

// 引入mitt
import mitt from 'mitt'
//创建Mitt实例
const Mit = mitt()
//Typescript 注册
//由于必须要扩展ComponentCustomProperties类型才能获取类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

// 权限
import { setupPermission } from './directives'

const app = createApp(App)

setupGlobCom(app)

setupPermission(app)
//vue挂载全局api
app.config.globalProperties.$Bus = Mit

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
