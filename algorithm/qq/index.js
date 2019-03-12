let qq_number = "ss631758924";

// 常量赋值给变量  函数表达式
/**
 * 
 * @param qq type String
 * @return type Bool 
 * @功能  判断qq号的合格性
 * @desc  只能是数字  长度五位以上  13位以内
 *  
 */
const is_vaild_qq = (qq) =>{
    if(!qq) return false;
    if(/^[0-9]{5,13}$/.test(qq))
        return true;
    else {
        return false;
    }

    // console.log(qq);
    // return true;   
}
console.log(is_vaild_qq(qq_number));
//选择了一种数据结构  数组
let enc_qq = [6,3,1,7,5,8,9,2,4],
    qq = [],
    head = 0, //指针 就是数组的开始
    tail = 9; // 尾部指针
//拿到一个正确的数字，操作原来的两个数字
while(head < tail){
    qq.push(enc_qq[head]);
    head++;
    //第二个数移到末尾
    enc_qq[tail] = enc_qq[head]
    //
    tail++;
    head++;
}
 

 console.log(qq);
//  console.log(enc_qq.length);