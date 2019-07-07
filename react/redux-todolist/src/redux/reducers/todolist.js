
 function NewList(state = [], action) {
  //理解此时的state内容是上次添加完成后的内容
  switch(action.type){
    case 'ADD': 
      state = [{text: action.text, completed: action.completed}, ...state] 
      return state
    case 'DONE':
      return (() => {
        state = state.slice(0)
        state[action.index].completed = !state[action.index].completed; 
        return state
      })()
            
    default: return state
  }
}

export default NewList