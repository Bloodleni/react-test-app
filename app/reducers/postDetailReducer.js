import {
  GET_STACKOVERFLOW_POST_DETAIL,
  GET_STACKOVERFLOW_POST_DETAIL_SUCCESS,
  GET_STACKOVERFLOW_POST_DETAIL_FAIL
} from '../actions/DetailActions'

const initialState = {
  isFetching: false,
  details: [],
  error: ''
}

export function postDetail (state = initialState, action) {
  switch (action.type) {
    case GET_STACKOVERFLOW_POST_DETAIL:
      return {...state, isFetching:true, error: ''}
    case GET_STACKOVERFLOW_POST_DETAIL_SUCCESS:
      return {...state, details: action.payload, isFetching: false, error: ''}
    case GET_STACKOVERFLOW_POST_DETAIL_FAIL:
      return {...state, error: action.payload.message, isFetching: false}
    default:
      return state
  }
}
