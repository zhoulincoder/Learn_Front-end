
var arr = [1,2,3,4]
const averge = (...nums) => {
  // rest 收起
  nums.reduce((accc, val) => acc + val, 0) / nums.length;
  // var sum= 0
  // for(ele in arr){
  //   sum += ele
  // }
}

console.log(averge(...[1,2,3,4]))