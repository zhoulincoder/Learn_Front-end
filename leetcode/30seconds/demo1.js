// 高阶函数的考题 n 
// ary 运行结果是函数
const ary = (fn, n) => (...args) => fn(...args.slice(0, n)); 
const firstTwoMax = ary(Math.max, 2);
console.log([[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)));