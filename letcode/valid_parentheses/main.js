/**
 * 功能是 决定字符串符号的正确性
 * @params str 字符串，里面包含()[]{}
 */ 
// const isValid = (str) =>{
//     let obj = [];
//     obj["{"] = "}";
//     obj["("] = ")";
//     obj["["] = "]";
//     // 将符号字符入栈
//     //    1.空栈先入栈
//     //    2.将栈顶元素匹配的消除规则元素与待入栈元素相比较，相同则pop,否则入栈
//     //    3.重复2
//     //    4.判断数组的长度，返回bool
//      sta.push(str[0]);
//     for(let i=0;i<str,length;i++){
//          //0作为栈底  str.length-1顶部 
        
//         if(obj[sta[sta.length-1]]===str[i+1]){
//             sta.pop();
//         }else sta.push(str[i]);
//     }
//      console.log(!sta.length);
// }

// const isValid = (str) => {
//     let sta = [],obj = {};
//     obj["{"] = "}";
//     obj["("] = ")";
//     obj["["] = "]";
// for(let i=0;i<str.length;i++){
//     if(!sta.length){
//         sta.push(str[i]);
//     } else {
//         if (str[i]===obj[sta[sta.length-1]]){
//             sta.pop();
//         } else {
//             sta.push(str[i]);
//         }
//     }
// }

// return !sta.length;

// }


const isValid = (str) =>{
    let sta = [],obj = {};
    obj["{"] = "}";
    obj["["] = "]";
    obj["("] = ")";

    for(let i =0;i<str.length;i++){
        if(!sta.length){
            sta.push(str[i]);
        } else { 
            if(obj[sta[sta.length-1]]===str[i])
            sta.pop();
            else {
                sta.push(str[i]);
            }
        }
    }
    return !sta.length;
}

console.log(isValid('()'));  //true
console.log(isValid('()[]{}'))//true
console.log(isValid('{[]}')); //true
console.log(isValid('(])'));  //false
