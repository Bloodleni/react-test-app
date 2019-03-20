import { combineReducers } from 'redux'
import stackOverflowReducer from './stackOverflowReducer'

const reducers = combineReducers({
    stackOverflowPosts: stackOverflowReducer
})

export default reducers