import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ mode, command }: any) => {
  console.log('current command is ', command)
  console.log(loadEnv(mode, process.cwd()))
  // 我们就可以通过环境变量这个值 做一些事情比如 切换接口url 等

  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      // host: '0.0.0.0',
      host: '127.0.0.1',
      // port: 8008,
      open: true
    }
  })
}
