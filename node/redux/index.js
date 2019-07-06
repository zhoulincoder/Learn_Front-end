const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const reducer = require('./reducer/index')
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store change:', store.getState());
})

store.dispatch({
  type: 'ADD_FILM',
  id: 0,
  name: '流浪'
}),

store.dispatch((dispatch) => {
  
  setTimeout(() => {
    dispatch({
      type: 'DELETE_FILM',
      id: 1,
      name: '流浪'
    })
    dispatch({
      type: 'ADD_FILM',
      id: 2444,
      name: '啦啦啦'

    })
    dispatch(addtodo('哈利路亚'))
  }, 3000)

  function addtodo(text) {
    return {
      type: 'ADD',
      id: 323,
      name: text
    }
  }

})

console.log(store.getState());
