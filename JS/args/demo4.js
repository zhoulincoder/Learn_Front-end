function sum (num = err('first param is not defined'), othernum = err('second param is not defined')) {
  return num + othernum
}
const err = (message) => {
  throw new Error(message)
}
console.log(sum(10)) //报错，第二个参数没定义
console.log(sum(1,2))  //3
console.log(sum(undefined, 10))// 报错，第一个参数没定义

