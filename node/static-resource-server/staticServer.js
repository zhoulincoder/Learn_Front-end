const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer((req, res) => {
  // console.log(req.url)
  //  /static/index.html 
  //  /static/xxx.png
  const url = req.url
  // ^ 以..开头
  if(/^\/static\//.test(url)) {
    staticServer(req, res)
    return false
  }
  // fs.readFile('./static/index.html', 'binary',
  // (err, file) => {
  //   res.write(file, 'binary');
  //   res.end();
  // })
})
.listen(1314, () => { 
  console.log('server is running 1314');
})
function staticServer(req, res) {
  let url = req.url
  console.log('url',url)
   //请求url 和 磁盘url
  if(url === '/static/') url += 'index.html'
  
  const filePath = path.join(__dirname, url)
  // 物理路径
  fs.exists(filePath, exists => {
    if(!exists) {
      res.end(`the request url: ${url} not be found`)
    } else{
      fs.readFile(filePath, 'binary', (err, file) => {
        if(!err) {
          res.write(file, 'binary')
          res.end()
        }
      })
    }
  })
}