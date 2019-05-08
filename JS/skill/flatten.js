//数组扁平化
const _ = require('lodash');
const arr1 = [99, 0, 33, 1, 2, [101 , [303], 202], []];
const arr2 = [ 1, 2, 3, 2];
const users = [
  { user: 'fred', age: 48},
  { user: 'barney', age: 36},
  { user: 'fred', age: 40},
  { user: 'barney', age: 34}
]

const sortedUser = _.sortBy(users, ['user', 'age']);
const flattenArr1 = _.flattenDeep(arr1); //三维数组扁平化
//const flattenArr1 = _.flatten(arr1); //二维数组扁平化
const uniq2 = _.uniq(arr2);   //去重复元素  


console.log(flattenArr1);
console.log( Math.max.apply(null, flattenArr1));
console.log(uniq2);
console.log(sortedUser)