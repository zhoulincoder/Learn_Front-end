const Koa = require('koa')

const app = new Koa()
//计算时间间隔
app.use(async(ctx, next) => {
  const start = Date.now()
  await next()
  const end = Date.now()
  const diff = end - start
  // console.log(diff)
  // 响应头 weiteHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`)
  console.log(`spend ${diff}ms`)
  
})
// response负责响应
// 每个中间件执行一个功能
app.use(async(ctx) => {
  ctx.body = 'hello koa'
})
app.listen(3001)