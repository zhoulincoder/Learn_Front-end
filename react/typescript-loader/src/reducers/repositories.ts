import { RepositoryEntity } from '../model/repositoryEntity';
import { actionTypes } from '../common/constants/actionTypes';

export const repositoriesReducer = (state: RepositoryEntity[] = [], action) => {
  switch(action) {
    case actionTypes.FETCH_REPOSITORIES_COMPLETED:
      return handleFetchRepositoriesCompleted(state, action.payload)
  }
  return state;
}


const handleFetchRepositoriesCompleted = (state: RepositoryEntity[], payload: RepositoryEntity[]) => {
  // 异步这里写
  return payload
}
