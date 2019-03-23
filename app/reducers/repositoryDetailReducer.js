import {
  GET_GITHUB_REPOSITORY_DETAIL,
  GET_GITHUB_REPOSITORY_DETAIL_SUCCESS,
  GET_GITHUB_REPOSITORY_DETAIL_FAIL,
} from '../actions/DetailActions'

const initialState = {
  isFetching: false,
  details: [],
  error: ''
}

export function repositoryDetail (state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_REPOSITORY_DETAIL:
      return {...state, isFetching:true, error: ''}
    case GET_GITHUB_REPOSITORY_DETAIL_SUCCESS:
      return {...state, details: action.payload, isFetching: false, error: ''}
    case GET_GITHUB_REPOSITORY_DETAIL_FAIL:
      return {...state, error: action.payload.message, isFetching: false}
    default:
      return state
  }
}
