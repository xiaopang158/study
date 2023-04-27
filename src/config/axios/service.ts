import axios from 'axios'
import qs from 'qs'
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError
} from 'axios'

import { config } from './config'

import { ElMessage } from 'element-plus'

const { result_code, base_url }: any = config
console.log(base_url)

export const PATH_URL = base_url[import.meta.env.VITE_API_BASEPATH]

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout // 请求超时时间
})

// request 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (
      config.method === 'post' &&
      (config.headers as AxiosRequestHeaders)['Content-Type'] ===
        'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(config.data)
    }

    // ;(config.headers as AxiosRequestHeaders)['Token'] = 'test test'
    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url as string
      url += '?'
      const keys = Object.keys(config.params)
      for (const key of keys) {
        if (config.params[key] !== void 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
      config.url = url
    }
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // debugger
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response
    } else if (response.data.code === result_code) {
      return response.data
    } else {
      ElMessage.error(response.data.message)
      // return Promise.resolve(response.data)
    }
  },
  (error: any) => {
    console.log('err' + error) // for debug
    ElMessage.error(error.message)
    // return Promise.reject(error)
    return Promise.resolve(false)
  }
)

export { service }
