import React, { 
  Component
} from 'react'
import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/index'
import App from './components/App'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}