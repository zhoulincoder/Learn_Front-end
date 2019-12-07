Function.prototype.mybind = function () {
  if (typeof this !== "function") {
    throw new TypeError(this + 'must be a function');
  }
  let _this = this
  var [thisArg, ...args] = [...arguments]
  console.log(thisArg);
  
  let fTemp = function () {}

  function fn () {
    let tempargs = [...arguments] 
    let newargs = args.concat(tempargs)
    console.log(this, '12');
    
    _this.apply(this instanceof fTemp ? this : thisArg || window, newargs)
  }

  fTemp.prototype = _this.prototype
  fn.prototype = new fTemp()
  return fn
 }
 
var zhou = {
  age: 18,
  love: 'coding',
  hello: function (age,a,b,c,d,e) {
    console.log("hello world, i am zhou," + age + "," + this.love);
    console.log(a,b,c,d,e);
    
  }
};

var wang= {
  age: 19,
  love: 'sleeping'
};

let bound = zhou.hello.mybind(wang, 23, 25, 90, 8)
bound()
// let a = new bound()
// console.log(a); // hello {}
