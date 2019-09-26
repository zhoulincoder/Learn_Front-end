class Mathhandle {
  constructor(x, y) {
     this.x = x
     this.y = y
  }
  add() {
    return this.x + this.y
  }
}

const m = new Mathhandle(1, 2)
console.log(m.add());

console.log(Mathhandle.prototype.constructor === Mathhandle);
console.log(m.__proto__ === Mathhandle.prototype);

