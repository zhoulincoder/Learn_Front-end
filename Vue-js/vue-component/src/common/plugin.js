let Toast = {}
Toast.install = function(Vue, options) {
  // 加了install属性
  let opt = {
    defaultType: 'center',
    duration: '2000'
  }
  for(let property in options) {
    // 根据传递的参数来改值
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips, type) => {
    if(type) {
      opt.defaultType = type
    }
    if(document.getElementsByClassName('vue-toast').length) {
      // 保证只出现一个
      return 
    }
    let toastTpl = Vue.extend({
       // 扩展模板
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
    let tpl = new toastTpl().$mount().$el
    document.body.appendChild(tpl)  // 指定挂载的位置

    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  //toast 支持的参数
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.property.$toast(tips. type)
    }
  })
}

export {
  Toast
}