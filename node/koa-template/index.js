const Koa = require('koa')
//构造函数
const app = new Koa()
//应用的实例
const admin = new Koa()

app.use(async (ctx,next) => {
  console.log(1)
  //no koa 没有回应 自己处理了 not found
  await next()
  //交给下一个中间件
  console.log(2)
})
app.use(async (ctx, next) => {
  await next()
  console.log(4)
  ctx.body = 'hello koa'

})
app.use(async (ctx) => {
  console.log(3)
})
app.listen(3000, () => {
  console.log('server is running 3000')
})
//ctx 就是对req, res的封装
// .use里面 是中间件 middleWare
//一个中间件处理完 可以交给下一个中间件
//是一个async方法

admin.use(async (ctx ) => {
  ctx.body = 'hello world'
})
admin.listen(4000, () => {
  // console.log('server is running 4000')
})

