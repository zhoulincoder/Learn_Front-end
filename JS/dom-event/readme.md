Document Object Model Event(事件)
- DOM 
    onclick 只能注册一个事件 DOM-0
    addEventListener('click') 不限 DOM-2
    addEventListrner('keyup') 不限 DOM-3
- DOM 事件流
    捕获（capture)
    window->documt(doucument.documentElement)->body->parent->target

    冒泡（bubble)
     window<-documt(doucument.documentElement)<-body<-parent<-target

- event 
    event.stopProgration() 阻止事件冒泡
    event.stopImmidaiteProgration()  阻止后面的注册事件

- 事件按照 DOM流的顺序执行我们的事件回调
    出于目标阶段时，事件调用顺序取决于事件注册的顺序

- 事件代理（事件委托）
    把需要绑定的每一个元素的事件 委托在它的父级上
    原理就是事件冒泡
    const big = document.getElementById('lists')
        //点击每个li
        //console.log()出里面的内容
        big.addEventListener('click', (event) => {
            // event.stopImmediatePropagation();
            if(event.target.tagName == 'LI'){
                console.log(event.currentTarget,event.target.innerHTML)
            }
        })