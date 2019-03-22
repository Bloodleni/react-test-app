import { combineReducers } from 'redux'
import { stackOverflowReducer } from './stackOverflowReducer'
import { gitHubRepositories } from './gitHubReducer'
import { repositoryDetail } from './detailScreenReducer'

export const rootReducer = combineReducers({
  stackOverflow: stackOverflowReducer,
  gitHub: gitHubRepositories,
  repositoryDetail: repositoryDetail,
})
