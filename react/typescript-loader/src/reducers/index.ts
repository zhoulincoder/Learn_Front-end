import { repositoriesReducer } from "./repositories";
import { combineReducers } from 'redux'
import { RepositoryEntity } from "../model";


export interface State{
  repositories: RepositoryEntity[]
  //reducers 执行完之后返回的类型
}

export const state = combineReducers<State>({  // State 泛型 对内部进行限制
  // 模块返回的类型
  repositories: repositoriesReducer
})