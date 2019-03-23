import { combineReducers } from 'redux'
import { stackOverflowReducer } from './stackOverflowReducer'
import { gitHubRepositories } from './gitHubReducer'
import { repositoryDetail } from './repositoryDetailReducer'
import {postDetail } from './postDetailReducer'


export const rootReducer = combineReducers({
  stackOverflow: stackOverflowReducer,
  gitHub: gitHubRepositories,
  repositoryDetail: repositoryDetail,
  postDetail: postDetail
})
