const Koa = require('koa')

const views = require('koa-views')
// 配置模板引擎ejs
const koaStatic = require('koa-static')
// 配置静态资源
const bodyParser = require('koa-bodyparser')
const path = require('path')

//路由部分
const app = new Koa()
const signinRouter = require('./routers/signin.js')
const {PORT} = require('./config/default.js')

app.use(koaStatic(path.join(__dirname, './public')))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))  //     指定路径   和 扩展名

app.use(bodyParser({
  formLimit: '1mb'
}))
app.use(signinRouter.routes())
app.listen(PORT, () => {
  console.log( `server is running ${PORT}`)
})