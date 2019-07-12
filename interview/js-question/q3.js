// 深浅拷贝
let obj = {
  name: '蜗牛',
  age: '18',
  like:['sing','rap']
}
let obj2 = Object.assign({}, obj)   // 浅拷贝
// obj.name = '大明'
// console.log(obj2);
// console.log(obj);

// let obj3 = {...obj}  // 浅拷贝方法2
// obj3.name = '蜗牛肉'
// obj2.like.push('coding')
// console.log(obj,obj2, obj3);
//浅拷贝后的数据：数据变化=》 基础数据类型不受影响，复杂数据类型（引用类型？）会受影响

let obj4 = JSON.parse(JSON.stringify(obj)) // 深拷贝
obj.name = '蜗牛小生'
obj.like.push('coding')
console.log(obj4);

//深浅拷贝的原理
//递归拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  // 如果不是复杂数据类型，直接返回
  if (obj === null || typeof obj !== 'object') return obj
  if (hash.has(obj)) {
    return hash.get(obj)
    //已存在一样的
  }
  // 如果obj是数组，那么obj.constructor是[Function: Array]
  // 如果obj是对象，那么obj.constructor是[Function: Object]
  let t = new obj.constructor()
  hash.set(obj, t)

  for (let key in obj) {
    // 递归
    if (obj.hasOwnProperty(key)) {
      // 是否是自己的属性
      t[key] = deepClone(obj[key], hash)
    }
  }
  return t
}


