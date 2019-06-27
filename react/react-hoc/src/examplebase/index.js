//defineProperty(obj, key, { value: })
//  Object .defineProperty(Base, 'add', {
//   value: () => {}
// })

// descriptor  拿到了add 这个方法的 descriptor
// function log(target, name, descriptor) {
//   const method = descriptor.value;
//   descriptor.value = function(...args) {
//     console.log('log type: add ');
//     return method(...args)
//   }
// };


function log(logType) {
  return function log(target, name, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
      console.log('log type: add ' + logType);
      return method(...args)
    }
  }
}
// 修饰符是一个函数
// @log log 
// @log('add')  @log('divide)  也是
class Base {
  @log('add')
  add(a, b) {
    // console.log('log type add:')
    return a + b;
  }

  @log('divide')
  divide(a, b) {
    return a / b
  }
}

const base = new Base()
console.log('add', base.add(1, 2));
console.log('divide', base.divide(2, 2));

//加日志
//有了更好 没有也行的 装饰器
export default base