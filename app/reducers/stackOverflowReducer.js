import {
  GET_STACKOVERFLOW_POSTS,
  GET_STACKOVERFLOW_POSTS_SUCCESS,
  GET_STACKOVERFLOW_POSTS_FAIL
} from '../actions/StackOverfLowActions'

const initialState = {
  posts: [],
  isFetching: false,
  error: ''
}

export function stackOverflowReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STACKOVERFLOW_POSTS:
      return {...state, isFetching: true, error: ''}
    case GET_STACKOVERFLOW_POSTS_SUCCESS:
      return {...state, posts: action.payload, isFetching: false, error: ''}
    case GET_STACKOVERFLOW_POSTS_FAIL:
      return {...state, error: action.payload, isFetching: false}
    default:
      return state
  }
}