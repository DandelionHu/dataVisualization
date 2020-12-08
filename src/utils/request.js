import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})
// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 400) {
      Message({
        message: '参数错误',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (error.response.status === 401) {
      Message({
        message: '无授权',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (error.response.status === 403) {
      Message({
        message: 'Forbidden',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (error.response.status === 404) {
      Message({
        message: '接口不存在',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (error.response.status === 406) {
      MessageBox.confirm('登录失效，是否重新登录', '确认登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 清除token
        location.reload()
      })
    }
    if (error.response.status === 408) {
      Message({
        message: '无操作权限',
        type: 'error',
        duration: 5 * 1000
      })
    }
  }
  return Promise.reject(error)
}

// 请求拦截
service.interceptors.request.use(config => {
  return config
}, errorHandler)

// 响应拦截
service.interceptors.response.use(response => {
  return response.data
}, errorHandler)

export default service
