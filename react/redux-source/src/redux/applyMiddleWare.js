export default function (...middlewares) {
  return (createStore) => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
        'Other middleware would not be applied to this dispatch.'
      )
    }
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
      
    }

    function compose(...funcs) {
      if (funcs.length === 0) {
        return arg => arg
      }

      if (funcs.length === 1) {
        return funcs[0]
      }

      return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }

    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    // [thunk(middlewareAPI), log(middlewareAPI)];
    // [next=> action => {}]
    // next(形参)  === action=> {}
    // 中间件返回的结果
    const composeRes = compose(...chain)
    dispatch = composeRes(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}