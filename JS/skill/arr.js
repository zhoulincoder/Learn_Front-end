const arr = [99, 0, 33, 1, 2, [101 , 202]];

function getMax(arr) {
  // return Math.max.apply(null, arr);

  //return Math.max.call(null, ...arr);  

  return Math.max.call(null, ...arr)
}

console.log(getMax(arr) + 'max');  

console.log(Math.max(99, 0, 33, 1, 2))