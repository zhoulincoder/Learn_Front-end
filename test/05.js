love = 'window love'
Function.prototype.mybind = function () {
  if (typeof this !== "function") {
    throw new TypeError(this + 'must be a function');
  }
  let _this = this
  var [thisArg, ...args] = [...arguments]
  let fTemp = function () {}

  function fn () {
    let tempargs = [...arguments] 
    let newargs = args.concat(tempargs)
    _this.apply(thisArg, newargs)
  }

  // fTemp.prototype = _this.prototype
  // fn.prototype = new fTemp()
  return fn
  
}
// Function.prototype.testBind = function(that){
//   var _this = this,
//       slice = Array.prototype.slice,
//       args = slice.apply(arguments,[1]),
//       fNOP = function () {},
//       bound = function(){
//           //这里的this指的是调用时候的环境
//           return _this.apply(this instanceof  fNOP ?　this : that||window,
//               args.concat(Array.prototype.slice.apply(arguments,[0]))
//           )
//       }    
//   fNOP.prototype = _this.prototype;

//   bound.prototype = new fNOP();

//   return bound;
// }
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
let a = new bound()
console.log(a);
