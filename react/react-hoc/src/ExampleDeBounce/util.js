/** 防抖 
 * func wait
*/
export function debounce(func, wait) {
  var result, timeout;
  return function () {
    // this
    // 参数
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      result = func.apply(this, args)
    }, wait);
    return result;
  }
}

/** 可用于装饰的 防抖 */
// 装饰器都是函数
export function decDebounce(wait) {
  return function (taget, key, descriptor) {
    var callBack = descriptor.value;
    var fn = debounce(callBack, wait);
    descriptor.value = fn;
  }
}

export function decArrowDebounce(wait) {
  return function (taget, key, descriptor) {
    // 拿到原来的
    var callBack = descriptor.initializer && descriptor.initializer()
    var fn = debounce(callBack, wait)
    // value  属性 =》 方法
    //  get 方法 =》 属性
    // descriptor.vale 
    // 改变原来的  ||  返回新的
    return {
      configurable: true,
      get: function () {
        return fn;
      }
    }
  }
}

// hoc  高阶组件  装饰整个组件
// 装饰一个class
// 修饰类的
export function decDisplayName(displayname) {
  return function(target) {
    target.displayName = displayname
  }
}

class Base {
  a() {
    console.log('a');
  }
  // a是属性
  b = () => {
    console.log('b');
  }
  // b是方法
}
const base = new Base()
console.log('base', base);
