数值 字符串 布尔 null undefined 基本数据类型
其他的都是对象   Arry是个可遍历的对象
JSON object 对象字面量是可枚举的对象
fuction 也是对象
document.querySelectorAll('a'); 对象集合 类数组
- 字符串是字符的数组    
    .length sttr[0]
    运算符匹配问题是，选择数组作为数据结构
    只在顶部做操作 push pop 模仿栈Stack的功能
    算法+数据结构
    sta []
        sta.push("(")  入栈 sta.length=1
        sta[0]="("
        栈不为空，跟顶部元素比较，如果是一对，顶部元素pop
        或者 push为新顶部
        如果sta 为空 返回 true|false