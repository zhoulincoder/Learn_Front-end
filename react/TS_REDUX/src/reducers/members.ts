import { MemberEntity } from "../model";

//状态的计算， reduce纯函数  返回当前状态
// state 初始值
export const membersRedecer = (state: MemberEntity[] = [], action) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED': return action.payload
  }
  return state
} 