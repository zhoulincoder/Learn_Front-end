import * as actionTypes from './actionTypes'

export function addTodo(text) {
  return { type: actionTypes.ADD, text, completed: false}
}

export function completed(index) {
  return { type: actionTypes.DONE, index}
}

export function selectAll() {
  return { type: actionTypes.ALL }
}
export function selectActive() {
  return { type: actionTypes.ACTIVE }
}
export function selectGone() {
  return { type: actionTypes.GONE }
}