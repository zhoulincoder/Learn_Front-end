import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReduxThunk from './redux-thunk/index'  // 引入中间件
// import {}
// import  { createStore,combineReducers } from './redux/index'
import { createStore, combineReducers, applyMiddleware } from './redux/index'

function foo(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DE':
      return state - 1;
    default:
      return state
  }
}
function bar(state = 'INIT', action) {
  switch (action.type) {
    case 'CHANGE':
      return action.content;
    default:
      return state
  }
}
const index = combineReducers({
  foo,
  bar
})
const store = createStore(index, applyMiddleware(logger, ReduxThunk))
const logger = ({dispatch, getState}) => next => action => {
  console.log('[logger]即将执行', action);
  const res = next(action)
  console.log(['logger执行wanbi'], res)
  return res
}
class Home extends React.Component {
  handleAdd = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  handleAddAsync = () => {
    const asyncAdd = (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'ADD'
        })
      }, 1000)
    }

    store.dispatch(asyncAdd)
  }
  render() {
    const reduxStore = store.getState()
    return (
      <div>
        foo: {reduxStore.foo}
        bar: {reduxStore.bar}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddAsync}>async add </button>
      </div>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<Home />, document.getElementById('root'));
})