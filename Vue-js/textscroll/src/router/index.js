import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import f1 from '@/components/view/demo1/father'
import f2 from '@/components/view/demo2/father'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/f1',
      name: 'f1',
      component: f1
    },
    {
      path: '/f2',
      name: 'f2',
      component: f2
    }

  ]
})
