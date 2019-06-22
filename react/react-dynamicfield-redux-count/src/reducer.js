export default (state = 0, action) => {
  console.log(action);
  switch(action.type) {
    case 'INCREMENT': return ++state
    case 'DECREMENT': return --state
    default:  return state
  }
}