import axios from 'axios'
import { stringify } from 'qs'  //对象转字符串
import { Toast } from 'mand-mobile'
import store from '../store/index.js'

let tmpTrip = store.state.trip 
axios.defaults.timeout = 1000
axios.defaults.withCredentials = false // 允许携带cookie 凭证  可用来做跨域请求的携带

// 请求拦截
axios.interceptors.request.use(
  config => {
    // token
    // 每次请求之前判断vuex中是否存在token 
    // 如果存在，则统一请求的header都加上token，后台可以根据token判断你的登录状态
    // 用localstorage太低级太明显了，植入需要的字段，容易被假冒
    // 即使本地存在token，也可能是过期的，所以要在响应拦截器中对返回的状态进行判断
    config.header['Content-type'] = 'application/x-www-form-urlencoded'  //form 表单格式提交请求
    return config 
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error(error)
  }
)