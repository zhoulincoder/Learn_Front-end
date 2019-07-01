import { combineReducers } from 'redux'  
//合并多个reducers
import { MemberEntity } from '../model'
import { membersRedecer } from './members'

export interface State{
  members: MemberEntity[]
  // MemberEntity 类型的数组
}

export const state = combineReducers<State>({
  members: membersRedecer,

})