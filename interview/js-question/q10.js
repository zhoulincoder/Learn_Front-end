// function _new(construct) {
//   let target = {}
//   let [construct, ...args] = [arguments]
//   target.__proto__ = construct.prototype
//   let result = construct.apply(target, args)
//   if(result && (typeof(result) === 'object' || 
//   typeof(result) === 'function')) {
//     return result
//   }
//   return target
// }


// const p1 = new Promise((resolve) => {
//   console.log(3);
//   resolve(4);
// });
// const p2 = new Promise((resolve) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(6)
//   }, 0);
//   resolve(2);
// });
// p1.then((res) => {
//   console.log(res)
// });
// p2.then((res) => {
//   console.log(res)
// });
// console.log(5);

setTimeout(function () {
  console.log('1')
}, 0);

new Promise(function (resolve) {
  console.log('2');
  resolve();
}).then(function () {
  console.log('3')
});

console.log('4');
