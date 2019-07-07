import { combineReducers } from 'redux'
import NewList from './todolist'
import FilterType from './filter'
export default combineReducers({
  NewList,
  FilterType
})
