const http = require('http')
const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200
  // 写入一个状态码的另外一种方法
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello world')
})
server.listen(port)