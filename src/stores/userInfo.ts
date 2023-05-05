import { defineStore } from 'pinia'

export const userInfo = defineStore('userInfo', {
  state: () => {
    return {
      routerOptions: <any>[]
    }
  },
  getters: {
    getRouterOptions(state) {
      return state.routerOptions
    }
  },
  // 请求
  actions: {
    setRouterOptions(options: any) {
      this.routerOptions = options
    }
  }
})
