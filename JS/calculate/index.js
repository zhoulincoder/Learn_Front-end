//计算年终奖 
// S 5; A 3; B 2; C 1;
var calculateBounce = function (performanceLevel, salary) {
  switch(performanceLevel){
    case 'X': return performanceX(salary)
    case 'S': return performanceS(salary); break;
    case 'A': return performanceA(salary); break;
    case 'B': return performanceB(salary); break;
    case 'C': return performanceC(salary); break;
  }
}
//分为策略函数
var performanceX = function (salary) {
  return salary * 60
}
var performanceS = function (salary) {
  return salary * 5
}
var performanceA = function (salary) {
  return salary * 4
}
var performanceB = function (salary) {
  return salary * 2
}
var performanceC = function (salary) {
  return salary * 1
}
//
console.log(calculateBounce('X', 10));