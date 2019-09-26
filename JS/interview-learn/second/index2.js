// function Animal() {
//   this.eat = function () {
//     console.log('Animal eat');
//   }
// }

// function Dog() {
//   this.bark = function () {
//     console.log('Dog bark');
//   }
// }
// Dog.prototype = new Animal

// var hashiqi = new Dog
// hashiqi.bark()
// hashiqi.eat()

class Animal {
  constructor (name) {
    this.name = name
  }
  eat() {
    console.log(this.name, 'eat');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name 
  }
  say() {
    console.log(this.name, 'say');
  }
}

const hashiqi = new Dog('狗的名字')
hashiqi.eat()
hashiqi.say()