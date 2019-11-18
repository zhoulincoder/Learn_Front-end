var targetObj = {
  age: 1,
  msgCenter: []
}

function observerA(val) {
  console.log(val);
  console.log('监听触发A事件');
  // ...
}
function observerB(val) {
  console.log(val);
  console.log('监听触发B事件');

}

Object.defineProperty(targetObj, 'triger', {
  enumerable: true,
  configurable: true,
  get: function () {
    return (function (type, fn) {
      if(!this.msgCenter[type]) {
        this.msgCenter[type] = []
      }
      this.msgCenter[type].push(fn)
    })
  },
  set: function (val) {
    let eventType = val.type
    let funcs = this.msgCenter[eventType]
    if(!funcs || funcs.length === 0) {
      return false
    }
    for(let i = 0, func; func = funcs[i++];) {
      func.apply(this, arguments)
    }
    // if (val.type === 'happy') {
    //   console.log('a');
    //   observerA(val)
    // } else {
    //   console.log('b');
    //   observerB(val);
    // }
  }
})
targetObj.triger('happy', observerA)
targetObj.triger('sad', observerB)

targetObj.triger = {
  type: 'sad',
  arg: 'xxx'
}
// targetObj.triger(2)
// console.log(targetObj.name)
// function doSomeThings() {
//   // ...
//   targetObj.triger = {
//     type: 'happy',
//     arg: 'xxxx'
//   }
// }
// console.log(targetObj.triger);

// doSomeThings()
