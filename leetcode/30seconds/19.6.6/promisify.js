const fs = require('fs')
const promisify = (func) => {
  return (...args) => {
    // promisify return 出去的结果
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) reject
        else {
          resolve(result)
        }
      })
    })
  }
}
// fs.readFile('./promisify.html', { encoding: 'utf8' }, (err, data) => {
//   if (!err) {
//     console.log(data)
//   }
// })
const promiseReadfile = promisify(fs.readFile)
promiseReadfile('./promisify.html', { encoding: 'utf8'})
.then((data) => {
  console.log(data)
})