let a = 'hello',
      b = 123,
      c = true,
      d = undefined,
      e = null,
      // ———
      f = {},
      g = [],
      h = function () { };

function Student (name) {
  this.name = name
}
Student.prototype.setAge = function () {
  this.age = 18
}
// Student.prototype.setAge = 18

let wn = new Student('wen')
// console.log(wn.__proto__ === Student.prototype);
// console.log(wn.setAge);

function fn () {}
function instance_of (L, R) {
  let O = R.prototype
  L = L.__proto__
  while(true) {
    if(L === null) {
      return false
    }
    if(O === L) {
      return true
    }
    L = L.__proto__
  }
}
console.log(instance_of([],Array));
console.log(Object.prototype.toString.call([]));

