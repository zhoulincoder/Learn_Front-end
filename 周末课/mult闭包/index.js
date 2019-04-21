let cache = {};
//1 2 3    4 5 6 
//key string <= arguments 类数组
function mult () {
  let a = 1;
  let key = Array.prototype.join.call(arguments, ',');
  if( cache[key]) {
    console.log('从缓存中取');
    return cache[key]
  }
  
  for(var i=0, l=arguments.length; i<l; i++){
    a = a * arguments[i];
  } 
  
  cache[key] = a;
  return a;
}
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));
