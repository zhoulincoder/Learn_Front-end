const fs = require('fs')
// const util = require('util')
// const foo = () => {

// }

// 输入一个函数
const promisify = (func) => {
  //args  promisify  返回的参数
  return (...args) => {
    // 传递的参数都变成数组了
    return new Promise((resolve, reject) => {
      // 解构数组  每一项  一次展开
      func(...args, (err, data) => {
        if(err) reject(err)
        console.log(data)
      })
    })
  }
}

console.log( typeof fs.readFile)

// fs.readFile('./promisify2.html',{ encoding: 'utf8'}, (err, data) => {
//   if(!err) {
//     console.log(data)
//   }
// })
// fs.stat('.', (err,stats) => {
//   if(!err) {
//     console.log(stats)
//   }
// })
const readFile = promisify(fs.readFile)

readFile('./promisify2.html', {encoding: 'utf8'})
.then( res => {
  console.log(res)
})