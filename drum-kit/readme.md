- 1.flex布局 
    display:flex|block
    块级元素 div.keys
    - .keys 有什么异常
        .key 被flex 管理起来
    - 水平居中 justify-content 水平即主轴
    - align-items 纵轴
- 2.相对单位
    px 是绝对大小
    vh 相对于屏幕
    rem 相对于html 根元素
- 3. let声明的变量只在let命令所在代码块内有效
     const声明的一个只读常量，声明后，常量的值不能改变
- 4. querySelector() 接收一个CSS选择符，返回与该模式匹配的第一个元素，如果没有返回null.
    - var myId = document.querySelector("#myId");
    取得Id为"myId"的元素
    - var myClass = document.querySelector(".myClass");
    取得类为"myClass"的元素
    - var myimg = document.querySelector("img.myClass");
    取得类为"myClass"的第一个图像元素