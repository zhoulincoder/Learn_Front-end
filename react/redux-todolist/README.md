## 写在前面

"待办事项列表"这个例子是redux文档推荐的，但是对于新人来说，官方文档和网上博客的相关解释都不是很好，没有思路分析到代码实现整个个过程，这令我在学习的时候非常头疼。看着不分文件、不梳理数据流向、不解释代码思路的各种文章，我决定自己写一篇redux入门实例——简单的待办事项列表。</br>
[github](https://github.com/HenleyZ/Learn_Front-end/tree/master/react/redux-todolist)

## 效果展示

![](https://user-gold-cdn.xitu.io/2019/7/7/16bcca8b36bef205?w=307&h=245&f=gif&s=776418)

## 开始之前

### redux的基本原则

- 整个应用的`state`被储存一个`object tree`中，并且这个`object tree`只存在于唯一的`store`中。
- 唯一改变`state`的方法是通过`dispatch`触发`action`，`action`是一个描述修改意图的普通对象，例如：`{ type: add, value }`。
- 当`store`收到`action`后，开始在`reducer`中计算，最后返回一个新的`state`。
- [Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)， [官方文档](http://cn.redux.js.org/docs/introduction/ThreePrinciples.html)

### 命令行

```
create-react-app redux-todolist
cnpm i redux react-redux -S
```

### 目录结构

![](https://user-gold-cdn.xitu.io/2019/7/7/16bccb394ea5cd94?w=365&h=955&f=png&s=37978)
## 准备

### 使用Provider

在根组件外用`provider`包裹，可以让所有组件都能拿到`state`。

```javascript
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './containers/addtodo'; //注意引用的位置
import ShowList from './containers/showlist'; //注意引用的位置
import Filter from './containers/filter' //注意引用的位置
import store from './redux/store' //注意引用的位置
function App() {
  return (
    <Provider store = {store}>
      <AddTodo />
      <ShowList />
      <Filter />
    </Provider>
  );
}
export default App;

```

### 触发Reducer自动执行

实际应用中，dispatch方法需要触发 `reducer` 的自动执行，从而对`state`进行修改。为此，`store` 需要知道 `reducer` 函数，做法就是在生成 `store` 的时候，将 `reducer` 传入`createStore`方法。

```javascript
// redux/store
import {createStore} from 'redux'
import reducers from './reducers/reducers'
// createStore接受 reducers 作为参数，生成一个新的Store。
// 以后每当dispatch发送过来一个新的 action，就会自动调用reducers(多个reducer的组合)，得到新的 State。
const store = createStore(reducers)
export default store 
```

## 添加事项

### UI组件AddTodo 

 新建`AddTodo`组件，当点击添加时，将输入框内的值`value`通过调用`props`接收到的`addTodoText`方法，传递到`containers`下的容器组件`addtodo`中。

```javascript
//components/addtodo/AddTodo
import React, { Component } from 'react';
class AddTodo extends Component {
  handleAdd() {
    if(this.refs.inputText.value) {
      this.props.addTodoText(this.refs.inputText.value)
      // 调用接受到的addTodoText方法
      // 这个方法会在containers下的容器组件addtodo中与组件AddToDo连接
      this.refs.inputText.value = ''
    }
  }
  render() { 
    return ( 
      <div>
        <input type="text" ref="inputText" />
        <button onClick={this.handleAdd.bind(this)}>添加</button>
      </div>
    );
  }
}
export default AddTodo;
```

### 容器组件addtodo

`connect`方法会将UI组件`AddTodo`进行包装，并添加业务逻辑:输入逻辑`mapStateToProps`、输出逻辑`mapDispatchToProps`，最后得到一个容器组件 `addtodo`。这里只用到了输出逻辑（用户在组件上的操作如何变为action对象，点击的‘添加事项’会从这里传出去）。

```javascript
// containers/addtodo
import AddTodo from '../components/addtodo/AddTodo';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
// 这是一个重点，一定要理解
const mapDispatchToProps = (dispatch) => {
  return {
    addTodoText: (text)=> {
      //console.log('传递成功',text);
      dispatch(addTodo(text))
      // dispatch 会发出action-addTodo
      // 在redux/actions下存储了多个action
    }
  }
}
export default connect(null, mapDispatchToProps)(AddTodo)
```

```javascript
// redux/actions
import * as actionTypes from './actionTypes'
export function addTodo(text) {
  return { type: actionTypes.ADD, text, completed: false}
  // 在actionTypes 下存储了多个用来描述修改意图的参数
}
```

```javascript
//   redux/actionTypes
export const ADD = "ADD"
// 添加事件
```

### 触发reducer

在容器组件`addtodo`中触发了`dispatch`并传递一个新的`action`，自动调用`reducers`中的`todolist`。

```javascript
 // reducers/todolist
 function NewList(state = [], action) {
 //调用时的state内容是上次添加完成后的内容
 //新内容在action中
  switch(action.type){
    case 'ADD': 
      state = [{text: action.text, completed: action.completed}, ...state] 
      return state
    default: return state
  }
}
export default NewList
```

```javascript
// reducers/reducers
import { combineReducers } from 'redux'
import NewList from './todolist'
export default combineReducers({
  NewList,
  // 有多个reducer要在这里引入
})

```

### 获取reducer处理完成后的数据

这里将会使用UI组件`ShowList`的容器组件`showlist`，`showlist`通过输入逻辑` mapStateToProps`获取`reducer`处理完成后的`state`，并将其映射到UI组件`ShowList`的`props`中。

```javascript
//  containers/showlist
// 只有容器组件才能获取state
import { connect } from 'react-redux';
import ShowList from '../components/showlist/ShowList';
const mapStateToProps = (state) => {
  return {
    list: state.NewList
  }
}
export default connect (mapStateToProps, null)(ShowList)
```

### 组件ShowList渲染数据

`state`经过容器组件的传递，可在UI组件的`this.props`中获取。

```javascript
import React, { Component } from 'react';
class ShowList extends Component {
  render() {
    let { list } = this.props //终于拿到点击添加后的事项
    return (
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>
              {item.text}
            </li>
          ))
        }
      </ul>
    );
  }
}
export default ShowList;
```

## 完成事项

实现：点击事项，出现删除线，表示已完成

### UI组件ShowList

为每条事项添加点击事件，将点击的事项`id`传给容器组件上的`dispatch`，从而触发`reducer`进行修改。

```javascript
class ShowList extends Component {
  handleDone(index) {
    return () => {
      this.props.completedThing(index)
    }
  }
  render() {
    let { list } = this.props
    return (
      <ul>
        {
          list.map((item, index) => (
            <li onClick={this.handleDone(index)} key={index}
              className={item.completed ? 'line-through' : ''}
              ref='node'>
                 // 在css文件中更改样式
              {item.text}
            </li>    
          ))
        }
      </ul>
    );
  }
}
export default ShowList;
```

### 容器组件showlist

通过UI组件的触发，在`mapDispatchToProps`中发起`dispatch`请求（与添加事项相似）。

```javascript
// containers/showlist
import { connect } from 'react-redux';
import ShowList from '../components/showlist/ShowList';
import { completed } from '../redux/actions'   
//  引入action
const mapStateToProps = (state) => {
  return {list: state.NewList}    // 之前写过的
}
const mapDispatchToProps=(dispatch)=>{
  return {
    completedThing:(index)=>{
      // console.log('传递成功',index);
      dispatch(completed(index))
      }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(ShowList)
```

```javascript
// actions
export function completed(index) {
  return { type: actionTypes.DONE, index}
  //将点击的事项的id传给reduce
}

// actionTypes
// 完成事件
export const DONE = 'DONE'
```

### 触发reducer

同样调用`reducers`中的`todolist`。

```javascript
//  reducers/todolist 
function NewList(state = [], action) {
  ......
    case 'DONE':
      return (() => {
        state = state.slice(0)
        state[action.index].completed = !state[action.index].completed; 
        // 修改事项中的complete参数 再返回数据
        return state
      })()
    default: return state
  }
}
export default NewList
```

### 获取和渲染

修改过`state`，UI组件`ShowList`会重新渲染，相关办法不改变。

## 筛选事项

### UI组件Filter

添加三个按钮的点击事件，分别对应容器组件上的方法。

```javascript
// components/filter/Filter
import React, { Component } from 'react';
class Filter extends Component {
  handleAll() {
   this.props.renderAll()
  }
  handleActive() {
    this.props.renderActive()
  }
  handleGone() {
    this.props.renderGone()
  }
  render() { 
    return ( 
      <div>
        <button onClick={this.handleAll.bind(this)}>全部</button>
        <button onClick={this.handleActive.bind(this)}>未完成</button>
        <button onClick={this.handleGone.bind(this)}>已完成</button>
      </div>
    );
  }
}
export default Filter;
```

### 容器组件filter

通过UI组件的触发，在`mapDispatchToProps`中发起`dispatch`请求。

```javascript
import { connect } from 'react-redux';
import Filter from '../components/filter/Filter';
import { selectAll, selectActive, selectGone } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    renderAll: () => {
      //console.log('加载全部');
      dispatch(selectAll())
    },
    renderActive: () => {
      //console.log('加载未完成');
      dispatch(selectActive())
    },
    renderGone: () => {
      //console.log('加载已完成');
      dispatch(selectGone())
    }
  }
}
export default connect(null, mapDispatchToProps)(Filter)
```

```javascript
// actions
export function selectAll() {
  return { type: actionTypes.ALL }
  //注意这里传递的是点击的按钮参数 ‘ALL’
}
export function selectActive() {
  return { type: actionTypes.ACTIVE }
}
export function selectGone() {
  return { type: actionTypes.GONE }
}

// actionTypes
// 加载全部事件
export const ALL = 'ALL'
// 加载未完成事件
export const ACTIVE = 'ACTIVE'
// 加载已完成事件
export const GONE = 'GONE'
```

### 触发reducer

调用`reducers`下的`filter`，返回对应的参数放在 `FilterTtpe`中。

```javascript
// reducers/filter
function FilterType(state, action) {
  switch(action.type) {
    case 'ACTIVE':
      return 'ACTIVE'
    case 'GONE':
      return 'GONE'
    default:
      return 'ALL'
      // 默认点击‘全部’，加载全部事项
  }
}
export default FilterType
```

### 获取和渲染

在容器组件`showlist`中通过接收到的`NewList`和`FilterType`，对`list`进行筛选，返回给UI组件筛选完成后的新表。UI组件`ShowList`重新渲染。**因为在点击筛选按钮的过程中没有添加新的事项，所以`state`中`NewList`一直是最后一次添加完成后的内容。**

```javascript
import { connect } from 'react-redux';
import ShowList from '../components/showlist/ShowList';
import { completed } from '../redux/actions'

const mapStateToProps = (state) => {
  //console.log(state.NewList);
  let fileList = []
  switch(state.FilterType) {
    case 'ACTIVE':
      fileList = state.NewList.filter(item => item.completed === false)
      return { list: fileList}
    case 'GONE':
      fileList = state.NewList.filter(item => item.completed === true)
      return { list: fileList}
    default:
      return { list: state.NewList}
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    completedThing:(index)=>{
      //console.log('传递成功',index);
      dispatch(completed(index))
      }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(ShowList)
```

## 总结

- `components`文件夹下的UI组件只负责渲染数据，不负责业务逻辑；参数都由 `this.props`提供，不使用 `this.state`。
- `containers`文件夹下的容器组件负责数据管理和业务逻辑，主要通过 `mapStateToProps, mapDispatchToProps`来获取或处理数据。
- `react-redux`提供的`connect`方法用于生成容器组件。
- `mapStateToProps`负责输入逻辑，将`reducer`返回的`state`映射到UI组件的 `props`中。
- `mapDispatchToProps`负责输出逻辑，将用户的反馈参数映射在 `action`中，并通过发起 `dispatch`来传递给 `reducer`进行修改。