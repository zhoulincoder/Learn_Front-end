
const http = require('http')
const url = require('url')
const querystring = require('querystring')
http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return
  const urlObj = url.parse(req.url)
  const queryObj = querystring.parse(urlObj.query)
  console.log(urlObj)
  console.log(queryObj)
  console.log(req.url)
  // {query: '蜗牛',type:'all}
  res.writeHead(200, {
    'Content-Type':'text/html;charset=utf-8'
  })
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${JSON.stringify(queryObj)}
  </body>
  </html>
  `)
})
    .listen(8080, () => {
      console.log('服务正在 8080 端口')
    })
