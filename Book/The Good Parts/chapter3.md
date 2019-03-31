#对象 Objects
- 概要
    - JS中的简单数据类型包括数字、字符串、布尔值、null、undefined值 Symbol object
    - 数组 函数 正则表达式都是对象
    - 对象是属性的容器
    - 对象通过引用来传递，永远不会被复制 var x=stooge;

- 对象字面量是一种创建新对象值的表示法 Object Literals
    1. 对象字面量即Object，通过key:value的形式描述出对象，语法的规则是{}
    2. 对象有属性和方法 receiveFlower这个方法的对象，都可以收花。 接口 Inteface.
    3. const zl = {
            name:'周麟',
            age:22,
            single:true,
            hometown:'赣州',
    }；用逗号分隔多个“名/值”对；对象也是可以嵌套的。
    4. 如果属性名是一个合法的js标识符且不是保留字，则并不强制要求用引号括住属性名。

- 检索 Retrieval
    - 尝试从underfined的成员属性中取值将会导致TypeErrorr异常，这时，可以通过&&运算符号来避免错误。
        - 例如： //规避不合法的undefined
            if (animal && typeof animal.duckSinging==='function'){
                choir.push(animal);
                console.log('恭喜加入合唱团'); 
            }  console.log(choir.length);
            如果animal不为空且函数全等于才会执行后面的语句，避免没有animal加入时，数组将undefined算入，得到长度为一。

- 原型 Prototype
    - 原型连接只有在检索值的时候才被用到。如果我们尝试去获取对象的某个属性值，但该对象没有此属性名，那么JS会试着从原型对象中的获取属性值。如果那个原型对象也没有该属性，那么再从他的原型中寻找，依次类推，直到该过程最后到达终点Object.prototype。如果想要的属性完全不存在于原型链中，那么该结果就是undefined值。这个过程是委托。

- 反射 Reflection
     - 检查对象有什么属性用typeof操作符   typeof flight.status
     - 请注意原型链中的任何属性都会产生值：typeof flight.toString //'function'
        - 有两种方法处理掉这些不需要的属性。第一个是让你的程序检查并丢弃值为函数的属性。一般来说，当你想要对象再运动时动态获取自身信息时，你关注更多的是数据，而你应该意识到有些值可能会是函数。
        - 另一个方法是使用hasOwnProperty方法，如果对象拥有独特的属性，他将返回true。hasOwnProperty不会检查原型链。

- 枚举 Enumeration
    - for in语句可用来遍历一个对象中的所有属性名。 
        - for(name in another_stooge){
            if(typeof another_strooge[name] !=='function'){
                document.writeln(name+':'+another_stooge[name]);
            }
        }
    - 属性名的出现是不确定的，要确保属性以特定的形式出现可创建一个数组
        var properties = [
            'first_name',
            'middle_name',
            'last_name',
        ]

- 删除 Delte
    - 可用来删除对象的属性（删除对象的属性可能会让原型链中的属性透视出来）

- 减少全局变量污染 Gobal Abatement
    - 为你的应用创建唯一的全局变量
    - 把全局性的资源都纳入一个名称空间下，可减少程序与其他应用程序之间发生冲突的可能性