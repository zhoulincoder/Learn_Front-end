
// let a = {
//   user: '蜗牛',
//   fn: function (e, f) {
//     console.log(this.user);
//     console.log(e + f );
    
//   }
// }
// let b = a.fn
// // b.call(a, 2)  
// // a.fn()
// // b.apply(a, [1])
// b.bind(a)
// let c = b.bind(a,2)
// c(99999,9)

//call 的原理
Function.prototype.call = function () {
  let [thisArg, ...args] = [...arguments]
  if(!thisArg) {
    thisArg = typeof window === 'undefined' ? global : window
  } 
  //如果this的指向是当前函数 func 
  thisArg.func = this 
  //执行函数
  let result = thisArgs.func(...args)
  //thisArg 上并没有func属性
  delete thisArg.func
  return result
}
