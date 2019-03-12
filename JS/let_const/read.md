#作用域 Scope
- document DOM 
    getElementByTagname
    getElementByClassName
    querySelector
    querySelectorAll
- window BOM
    全局定义了 var name="zl";
    全局变量  前端js 就是由window管理
    局部变量  function() { }
- window js 内嵌在浏览器中的脚本语言，他与其他语言不一样的地方在于 有个顶级的window  全局变量挂载在window上，所以调用名字 console.log(name); console.log(window.name)
- window 类型 用typeof 得到  是object
  const let比var 优秀的地方：遵守块级作用域
  全局->函数局部->块级作用域
  scope 范围

- setTime 异步的内置函数
  for 循环 立即同步执行
  1s 之后 i var 变成了10
  使用let 之后立即生成块级作用域 for循环的每一次构建一个块级作用域，1s之后，还能找到i