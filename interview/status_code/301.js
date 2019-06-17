var http = require('http')

var server = http.createServer(function (req, res) {
  res.writeHead(301, {'Location': 'http://itbilu.com/'})
  // 响应头
  console.log(res._header)
  res.end()
})

server.listen(3000)