const http = require('http');

http.createServer((req, res) => {
  console.log(req.method, req.url);
  console.log('content-type',req.headers['content-type'])
  if (req.method === 'POST' && req.url === '/user') {
    //分开获取信息 爬虫?
    let data = ''; 
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if(req.headers['content-type'] === 'application/json')
      res.writeHead(200, {
        'Content-Type':'application/json;charset=utf-8'
      })
      //结束请求
      res.end(data)
    })
  }

})
  .listen(3000, () => {
    console.log('在3000 端口');
  })