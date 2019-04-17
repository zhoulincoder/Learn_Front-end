const fs = require('fs'); //引入node模块
const files = [];
//一步步 目录向下走
const walk = function (path) {
  fs
    .readdirSync(path)   //读取一个目录下的所有文件(子节点)
    .forEach(file => {
      //if()
      //文件？ -判断是不是js文件  正则
      //目录？ -递归
      const newPath = path + '/' + file;
      const stat = fs.statSync(newPath);
      // console.log(stat)
      if (stat.isFile()) {
        if (/\.js$/.test(file)) {
          files.push(file);
        }
      } else if (stat.isDirectory()) {
        walk(newPath);
      }
      // console.log(file);
    })

  // fs.readdir(path, function(err, items){
  //   console.log(items);
  // })
  // console.log('oooo');
}
walk('./src');
console.log(files);