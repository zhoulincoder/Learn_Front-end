const Koa = require('koa')
// 配置模板引擎ejs
const views = require('koa-views')
const koaStatic = require('koa-static')
const path = require('path')
const app = new Koa()
const signinRouter = require('./routers/signin.js')
const {PORT} = require('./config/default.js')

app.use(koaStatic(path.join(__dirname, './public')))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))  //     指定路径   和 扩展名

app.use(signinRouter.routes())
app.listen(PORT, () => {
  console.log( `server is running ${PORT}`)
})