// class Chameleon {
//   colorChange(newColor) {
//     this.newColor = newColor;
//     console.log(this.newColor);

//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//     console.log('原型链中',this.newColor);
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");
// 08
// console.log(freddie.colorChange("orange"))


//11
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
//   return `${this.firstName}${this.lastName}`
// }
// const member = new Person("Lydia", "Hallie");
// console.log(member.getFullName());

//#12
// function Person(firstName, lastName) {
//   console.log(this);

//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

// #16
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// getPersonInfo(person, age)

//#18
// function getAge(...args) {
//   console.log(args)
//   console.log(typeof args);
// }

// getAge(123);


// function add(x, y) {
//   return x + y;
// }
// var numbers = [4, 38];
// console.log(add(...numbers) )

// var promises = [1,2,3,4,5,6].map(function (id) {
//   return id
//  });
 
//  Promise.all(promises).then(function (posts) {
//   // ...
//   console.log(posts);
  
//  }).catch(function(reason){
//   // ...
//   console.log(reason);
  
//  });

//#29
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const person = { name: "Lydia" };

// function sayHi(age) {
//   console.log(`${this.name} is ${age}`);
// }

// sayHi.call(person, 21);
// sayHi.bind(person, 21);
var a = {
  b: function() {
    var _this = this; // 通过赋值的方式将this赋值给that
    var func = function() {
      console.log(_this.c + 'c');
    }
    func();
  },
  c: 'hello'
}
a.b(); // hello
console.log(a.c); // hello



