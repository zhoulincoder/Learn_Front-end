// const aa = Symbol()
// // const bb = Symbol()
// // const type = [aa, bb]
// // console.log(type);
// var test = [
//   { ty: aa }
// ]
// console.log(test.ty);

// switch (aa) {
//   case aa:
//     console.log('aa'); break;
//   case 'bb':
//     console.log('bb'); break;
//   default:
//     console.log('hehe');
// }

// console.log(Object.prototype.toString.call([])); // 标准类型判断方法
// console.log((0.1 + 0.2).toFixed(1) );
// var num = '100px'
// console.log(parseInt('100px'));
// console.log(Number.__proto__.__proto__ == Object.prototype);
var text = "cat, bat, sat, fat";
var pattern = /.at/;
//与pattern.exec(text)相同
var matches = text.match(pattern);
// alert(matches.index); //0
console.log(matches.input); //"cat"
// alert(pattern.lastIndex); //0



