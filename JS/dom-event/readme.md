Document Object Model Event(事件)
- DOM 
    onclick 只能注册一个事件 DOM-0
    addEventListener('click') 不限 DOM-2
    addEventListrner('keyup') 不限 DOM-3
- DOM 事件流
    捕获（capture)
    window->documt(doucument.documentElement)->body->parent->children

    冒泡（bubble)
     window<-documt(doucument.documentElement)<-body<-parent<-children