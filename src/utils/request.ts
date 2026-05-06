import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_SERVE,
  timeout: 5000
}) 

request.interceptors.request.use(
  (config) => {

    return config
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {

    const code = response.data.code
    if (code !== 200) {
      // 提示错误信息
      ElMessage({
        type: 'error',
        message: response.data.message,
      })
      // 抛出错误
      return Promise.reject( response.data)
    }
    // 返回数据
    return Promise.resolve(response)
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default request