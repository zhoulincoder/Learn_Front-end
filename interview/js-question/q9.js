// function Person(name){
//   this.name = name
// }
// let p = new Person('wn')
// console.log(p.__proto__ === Person.prototype);
// console.log(Person.__proto__ === Function.prototype);


// var foo = {}, F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a);
// console.log(foo.b);
// console.log(F.a);

// function Person(name){
//   this.name = name
//   return null || 666

//   // 构造函数不需要返回值
//   // new 实例 如果返回return的是对象，那就是返回对象
//   // 如果返回的不是对象(包括null)，它会忽略你设置的返回值
// }
// let p = new Person('wn')
// console.log(p);

// function Person(name){
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student // 把自己设置成构造函数
// let p = new Student('wn')
// console.log(p);
// console.log(p instanceof Person);+


// for(var i = 0; i < 10; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 0)
// }
// let 和 var区别
// let 每次循环生成一个封闭的块级作用域和setTimeout绑定，var每次循环会覆盖掉上一次的作用域

//for in迭代和for of有什么区别
Array.prototype.method = function () {
  console.log("hehe");
}
const arr = [2, 3, 4, 55]
arr.name = '蜗牛肉'
for (let i of arr) {
  console.log(i);
}
for (j in arr) {
  // console.log(arr[j]);
}
// for..in  index  是索引(字符串型数字，不能进行几何运算) 
// 会遍历Array上的所有可枚举属性（添加的属性，原型链上的）遍历的顺序可能不是按照实际数组内部的顺序
// 它更适合遍历对象
// for..of  index  是数组元素   它遍历的只是数组元素，不包括数组的原型属性、方法和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
// [1,2,3,4,5,6,7,3,2,8]
function outputArr(arr) {
  var res = []
  for (let i of arr) {
    if (Array.isArray(i)) {
      res = res.concat(outputArr(i))
    } else {
      res.push(i)
    }
  }
  return res
}
console.log(outputArr(gArr));


function outputArr2(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr2(item) : item)
  }, [])
}
console.log(outputArr2(gArr));