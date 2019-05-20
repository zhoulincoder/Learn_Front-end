function MyPromise(callback) {
  var self = this 
  var state = null 
  //记录resolve的参数
  var param = null 

  //执行传入的**方法，并改变promise对象的状态
  callback(resolve, reject) 

  //resolve方法
  function resolve(data) {
    let parmise 
    //改变状态
    state = true 
    param = data
    nextResolve(asynconFullfilled(param))
    //执行记录 onFullfilled
    parmise = asynconFullfilled(param)
    if( parmise === undefined ){
       //如果为true，这里就不能解析parmise.constructor
    } else if(parmise.constructor === self.constructor) {
      //等待传递的promise对象执行完毕，然后根据传递进来的promise对象的状态执行resolve或reject
      //注意，这个param是个形参，在then方法的promise中执行
      promise.then(function (param) {
        resolve(param)
      }, function(param) {
        reject(param)
      })
    } else { 
      //这是前面的.then方法没有返回promise对象
      resolve(promise)
    }
  }
  //reject 方法
  function reject(err) {
    state = false
    param = err
    nextReject(asynconRejected(param))
  }

  //promise 没有执行完，就应该等着
  var nextResolve = null 
  var nextReject = null 
  //记录then方法的参数， onFullfilled和Rejected
  var asynconFullfilled = null 
  var asynconRejected = null 

  //then 方法里面也有 promise
  this.then = function (onFullfilled, onRejected) {
    //接受两个函数
    //返回一个新的promise对象
    return new self.constructor(function(resolve, reject) {
      if(state === true) {
        //param 是promise完成后的结果
        resolve(onFullfilled(param))
      } else if( state === false) {
        reject(onRejected(param))
      } else {
        nextResolve = resolve
        nextReject = reject
        asynconFullfilled = onFullfilled
        asynconRejected = onRejected
      }
    })
  }
}