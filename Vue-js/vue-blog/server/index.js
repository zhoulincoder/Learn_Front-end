const {
  Nuxt,
  Builder  // mvc  req  res   pages/index.vue
} = require('nuxt')

require('./models')//引入模型文件

const express = require('express')
const app = express()
const path = require('path')
const config = require('../nuxt.config')
const start = async () => {
  const nuxt = new Nuxt(config)
  if(true) {
    // 开发阶段实时编译
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(nuxt.render)  //都使用此中间件
  // 前端/pages  路由
  // nuxt/index/about .vue  template
  app.listen(() => {
    app.listen(3025, () => {
      console.log('server started at port 3025');
    })
  })
}
start()