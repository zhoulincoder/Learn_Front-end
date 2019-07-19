
// const Koa = require('./lib/application.js')
// const app = new Koa
// const delegates = require('delegates')

// app.listen(3000, () => {
//   console.log('server is running 3000');
  
// })
// const ctx = {
//   request: {
//     url: 'baidu.com'
//   },
//   response: {
//     body: '这是响应的文字'
//   }
// }
// delegates(ctx, 'request')            //代理request
// .access('url')                       //可读可写
// delegates(ctx, 'response')
// .access('body')

// console.log(ctx.url === ctx.request.url)
// ctx.body = '修改后的文字'
// ctx.url = 'google'
// console.log(ctx);



