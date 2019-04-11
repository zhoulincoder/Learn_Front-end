// fs 模块   是node后端开发的一部分
const fs = require('fs');  // 文件读取功能
// 读文件是异步的
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data)
//   fs.readFile('./b.txt', 'utf8', function (err, data) {
//     console.log('--------', data);
//   })
// });
const fileAPromise = new Promise((resolve, reject) => {
    // 一个空间装着耗时的任务  
    fs.readFile('./a.txt', 'utf8', (err, data) => {
      //流程的控制权怎么移交
      resolve(data);
      //console.log(data)
    });
  }
)

const fileBPromise = new Promise((resolve, reject) => {
  fs.readFile('./b.txt', 'utf8',  (err, data) => {
    if(err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
})
//  function fsB () {
//   fs.readFile('./b.txt', 'utf8',  (err, data) => {
//     console.log('--------', data);
//   })
// }
//将内部的耗时任务运行
fileAPromise
  .then((data) => {
    console.log(data);
    return fileBPromise;
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('error')
  })