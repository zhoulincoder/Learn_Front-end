class 类 js 现在也有
es5 没有class关键字？ 如何做面向对象？
js 是面向对象的，Function是一等对象 可以被执行的对象
普通函数 Player（）
new Player();  作为类的构造函数被运行
es5 构造函数（也是类本身） function Player(){ this }
this 一直都在，函数里的一个常在，像一个指针指向一个对象
this 指向一个Object {}      

- 函数运行方式的不同，里面的this指向不同

作为普通函数被运行时，this指针没有使命， 他指向全局 
在前端指向underfined    node中指向global

函数作为构造函数被运行时， new Player();   this会指向实例化的对象
这是构造函数需要的过程 

- 函数可以用来构造类   通过this
- this 是一直在的 作为一个指针指向实例化的对象 
- new 过程中发生了什么
this => {} constructor //指向对象
this.name = name 传递需要的参数
- 函数运行的方式导致 this指向不一样
    - 普通函数 this => 全局widow||global
     如果代码启动严格模式(use strict)， this =>undefined

- 函数名大写就是作为一个类
this =>   object play1 { name: "蛋蛋"  }

