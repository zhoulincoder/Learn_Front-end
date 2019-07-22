
const Koa = require('./lib/application.js')
const app = new Koa
const delegates = require('delegates')

//实现koa的洋葱模型
app.use(async (ctx, next) => {
  console.log(1);
  await next()
  console.log(2);
})
app.use(async (ctx) => {
  console.log(3);
  ctx.body = '<h2>hello koa</h2>'  
})


app.listen(3000, () => {
  console.log('server is running 3000');
  
})
const ctx = {
  request: {
    url: 'baidu.com'
  },
  response: {
    body: '这是响应的文字'
  }
}
delegates(ctx, 'request')            //代理request
.access('url')                       //可读可写
delegates(ctx, 'response')
.access('body')

console.log(ctx.url === ctx.request.url)
ctx.body = '修改后的文字'
ctx.url = 'google'
console.log(ctx);



