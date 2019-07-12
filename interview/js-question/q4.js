// function foo () {
//   var a = 2
//   function fn() {
//     console.log(a);
//   }
//   return fn()
// }

// foo()

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("Rose", 18);
console.log(Object.prototype.toString.call(Person));