import { createElement,render, renderDOM } from './element'

// ul.list>li.item*3

let virtualDOM = createElement('ul',{ 
    class: 'list' 
  },
  [
    createElement('li', { class: 'item' }, ['周晶晶']),
    createElement('li', { class: 'item' }, ['王力宏']),
    createElement('li', { class: 'item' }, ['林俊杰']),
  ])

console.log(virtualDOM);
let el = render(virtualDOM)
// 遍历dom树去比较不同，更新不同的地方
renderDOM(el, document.getElementById('root'))