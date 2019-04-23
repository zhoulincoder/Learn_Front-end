// // let arr = [];
// // arr.push("{");
// // //console.log(arr,arr.length);
// // //console.log(typeof arr);
// // arr.push("}");//向数组的末尾添加一个或更多元素，并返回新的长度。
// // //console.log(arr);
// // arr.pop();//删除并返回数组的最后一个元素
// // //console.log(arr);
// // arr.unshift("]");//向数组的开头添加一个或更多元素，并返回新的长度。
// // console.log(arr);
// // arr.shift();//删除并返回数组的第一个元素  ?
// // console.log('---',arr);
// // arr.forEach(item =>{
// //     console.log(item);
// // })

// //如何来做匹配规则
let obj = {};
obj["{"] = "}";
obj["("] = ")";
obj["["] = "]";
// "("; sta[0] = "("")"
let sta = ["("];
let s = ")";
if(obj[sta[sta.length-1]] ===s){
    sta.pop();
}
console.log(!sta.length);//当为0时取反得到true
