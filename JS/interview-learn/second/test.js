// console.log('Hello World!');
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


console.log('1');
setTimeout(function() {
    console.log('2');
    new Promise ((resolve) => {
      console.log('a');
      resolve()
    }).then(() => {
      console.log('b');
    })
    setTimeout(() => {
      new Promise(function(resolve) {
        console.log('3');
        resolve();
    }).then(function() {
        console.log('4')
      })
    })
})
new Promise(function(resolve) {
    console.log('5');
    resolve();
}).then(function() {
    console.log('6')
})
setTimeout(function() {
    console.log('7');
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})
// console.log('10');
// new Promise(function(resolve) {
//   console.log('11');
//   resolve();
// }).then(function() {
//   console.log('12')
// })
// setTimeout(function() {
//   console.log('13');
//   new Promise(function(resolve) {
//       console.log('14');
//       resolve();
//   }).then(function() {
//       console.log('15')
//   })
// })

// setTimeout(function() {
//   console.log('setTimeout');
// })
// new Promise(function(resolve) {
//   resolve()
//   console.log('promise');
// }).then(() => {
//   console.log('then');
// })

// console.log('console');