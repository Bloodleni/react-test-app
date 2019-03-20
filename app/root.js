import React, { 
  Component
} from 'react'
import { 
  createStore, 
  applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import App from './components/App'

const store = createStore(reducers, applyMiddleware(thunk))

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}