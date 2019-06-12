var http = require('http')
var fs = require('fs')
// 前端路由带来更好的用户体验  加载更快没有白屏   router  component
// 后端路由  http  server  / api 数据  服务于ajax
http.createServer(function (req, res) {
  var filepath = '.' + req.url
  // 请求路径
  if( filepath === './') {
    filepath = './index.html'
    //  
  }
  readFile(filepath, res)
  //传递res   才能向请求者返回数据
}).listen(80)

function readFile(path, res) {
  fs.readFile( path, 'utf-8', (err, data) => {
    if(err) {
      // throw new Error('出错了')
      readFile(path, res)
    } else {
      res.write(data)
      res.end()
    }
  })
}