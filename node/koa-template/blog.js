const Koa = require('koa')
const views = require('koa-views')
const path = require('path')

const app = new Koa()
//ejs 提供了转html的中间件
//模板引擎在哪个位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)
const user = {
  name: '哈和二',
  posts: [
    { id: 0, title: '六冲动的愤愤然' },
    { id: 1, title: '六冲愤然' },
    { id: 2, title: '动的愤愤然' }
  ]
}
const article = [
  {
    id: 0,
    content: 'sdfosdhfdsjid0'
  },
  {
    id: 1,
    content: 'sdfossjid1'
  },
  {
    id: 2,
    content: '<strong>sid2</strong>'
  }
]
app.use(async (ctx) => {
  // req res
  //   /user  用户的主页
  //req.url 用户请求地址栏     解析出请求的地址
  if (ctx.path === '/user') {
    // user  ejs
    await ctx.render('user', {
      //渲染模板引擎的时候把user信息传递过去
      user
    })
  } else if (ctx.path === '/post') {
    const { id } = ctx.query
    //query 封装好的get请求 查询参数 ?name=a&age=b => {name: a}
    const post = article.find(item => item.id == id);
    await ctx.render('post', { post })
  } else {
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})
app.listen(8080, () => {
  console.log('server is running 8080')
})