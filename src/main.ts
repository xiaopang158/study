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
import './assets/css/index.scss'

// 引入mock
import '@/mock'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
