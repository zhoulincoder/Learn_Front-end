

var singleNumber = function (nums) {
  let a = nums[0];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      a = a ^ nums[i];
      console.log(a);
    }
  }
  return a;
}
arr = [4, 1, 2, 1, 2,]
var res = singleNumber(arr)
console.log(res);

console.log('123');

