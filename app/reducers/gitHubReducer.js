import {
  GET_GITHUB_REPOSITORIES,
  GET_GITHUB_REPOSITORIES_SUCCESS,
  GET_GITHUB_REPOSITORIES_FAIL
} from '../actions/GitHubActions'

const initialState = {
  isFetching: false,
  repositories: [],
  error: ''
}

export function gitHubRepositories (state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_REPOSITORIES: 
      return {...state, isFetching:true, error: ''}
    case GET_GITHUB_REPOSITORIES_SUCCESS:
      return {...state, repositories: action.payload, isFetching: false, error: ''}
    case GET_GITHUB_REPOSITORIES_FAIL:
      return {...state, error: action.payload.message, isFetching: false}
    default:
      return state
  }
}