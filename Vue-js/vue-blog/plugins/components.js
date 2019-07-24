import Vue from 'vue'
import List from '../components/list.vue'

// 界面声明
[List].forEach((component) => {
  Vue.component(component.name, component)
})