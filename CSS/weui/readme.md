#weui
 来自于微信的前端开发框架
 - 前端生态开发：微信 ->公众号 小程序
                        weui.css 在它基础上开发
                APP ->内嵌的html
                PC  ->传统网站 Bootsrap

- 界面的编写过程
  - html 结构，独立于样式
    - 取类名很重要  
         BEM 规范
         Bloock 区块  weui-cell 
         weui-button  30-50个利用的组件
         Element 元素  区块中的元素用双下划线
         weui--cell__hd
         通用的词汇 hd+bd+ft
  - DOM 文档流  从左到右从上到小搭建盒子
  - 结构完成后做样式

  - 离开文档流
    文档流中的元素不再受其影响，before脱离了正常的文档流 
    boder 使用盒子模型的大小 元素在页面上的占位，是需要综合考虑：padding margin border  内容宽高 position 
  - 1px 边框
    1px 在手机里 CSS像素
    硬件物理像素   retina 2px 3倍retina 3px
    transform scaleY(0.5) 压一下
    浏览器不会处理小数点像素
    transform-origin（0 0）基点不动
    上边线从下往上亚 scaleY

  - flex 
    不受块级的约束   他的内部是一个新世界  
    弹性布局是父子们一起的布局
    优点：好用的对齐方式 justify-content:center; 水平居中
                        align-items;    垂直对齐
    flex:1; 这个元素成为主元素  其他元素占完自己的盒子模型内容后，余下的空间都交给主体元素