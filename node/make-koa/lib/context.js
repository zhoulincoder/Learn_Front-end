const delegates = require('delegates')

var proto = module.exports = {
  //代理
  //通过ctx.request.url 或者 ctx.url
}

delegates(proto, 'response')
.access('body')

delegates(proto, 'request')
.access('method')
.access('url')