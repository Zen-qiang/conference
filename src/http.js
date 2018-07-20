/*
 * @Author: yyl
 * @Date: 2018-04-26 11:24:09
 * @Last Modified by: yyl
 * @Last Modified time: 2018-04-26 11:27:58
 */
import axios from 'axios'
import qs from 'querystring'
// import { Toast } from 'mint-ui'
axios.defaults.retry = 1
axios.defaults.retryDelay = 3000
// 响应时间
axios.defaults.timeout = 20000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加凭证
axios.defaults.withCredentials = true

axios.defaults.baseURL = 'http://101.132.134.137:5300'

// http请求拦截器
axios.interceptors.request.use(
  config => {
    // 修改了axios的post调用方法，将post参数转化成键值对
    if (config.method === 'post' || config.method === 'put') {
      config.data = qs.stringify(config.data)
    }
    // Indicator.open({
    //   spinnerType: 'fading-circle'
    // })
    return config
  },
  error => {
    console.log(error, 'err1')
    return Promise.reject(error)
  })

// http响应拦截器
// axios.interceptors.response.use(
//   response => {
//     // response.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//     // if (response.data.code === 1002) {
//       // this.$router.push({ 'name': 'FairOrderList' })
//       // Indicator.close()
//     // }
//     return response
//   },
//   error => {
//     // Indicator.close()
//     console.log(error, 'err2')
//     Toast(error)
//     return Promise.reject(error)
//   })

axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }

  // Increase the retry count
  config.__retryCount += 1

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config)
  })
})

export default axios
