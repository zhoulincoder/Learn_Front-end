import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//vue钩子函数 跳转之前   常用于登录
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  // 登录判断
  // if(document.cookie = '') {
  //   location.href '',
  //   this.router.push(to.path)
  // }
  next()
})
