- 相对单位是为了自适应不同的移动设备
    750px
    iphone  XR 小手机
    小米，华为
    iPhone Max 大手机
    小米，华为
    vw和vh是按比例分配宽/高，用百分比，20vh,100vh来做主体容器
    em移动端少用px  em是相对于自身字体大小来比例的
                   rem是相对于heml根元素的frontSize  细致的每个盒子或盒子模型的大小等比例定义

- :before  :after 伪元素
    没有标签，但却可以像真正的元素一样在页面上占位子。
    在dom的文档流不需要写这个元素，没有副作用，不会影响内容的显示
    使用css来声明，content属性是必需的

- html 默认字体大小为16px   如果没有设置，会使用父级，或body font-size

