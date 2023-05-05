import MyComponent from './MyComponent/index.vue'
import type { App } from 'vue'
export const setupGlobCom = (app: App): any => {
  app.component('MyComponent', MyComponent)
}
