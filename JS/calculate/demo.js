//干掉if else 
var PerformanceS = function() {
}
PerformanceS.prototype.calculate = function(salary) {
  return salary * 5 
}
var PerformanceA = function() {
}
PerformanceA.prototype.calculate = function(salary) {
  return salary * 3
}


var Bounce = function(salary) {
  this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
  return this.strategy.calculate(this.salary);
}

var bounce = new Bounce(2990);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

var bounce2 = new Bounce(20);
bounce.setStrategy(new PerformanceA());
console.log(bounce.getBounce());