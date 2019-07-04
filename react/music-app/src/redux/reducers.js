import { combineReducers } from 'redux'
import * as Actiontype from './actionTypes'

const initialState = {
  // 默认值
  showStatus: false,
  song: {}, //当前播放的一首歌
  songs: []  //播放列表
}
/**
 * {type: 'SHOW_PLAYER', showStatus: true}
 */
function showStatus (showStatus = initialState.showStatus, action) {
  // reducers 纯函数
  switch (action.type) {
    case Actiontype.SHOW_PLAYER:
      return action.showStatus
    default: 
      return showStatus
  }
}
//{type: 'CHANGE_SONG', song:{}}
// 除了type  其他传过来的都是payload
function song(song = initialState.song, action) {
  switch (action.type) {
    case Actiontype.CHANGE_SONG:
      return action.song
    default: 
      return song
  }
}

export default combineReducers({
  showStatus,
  song
})