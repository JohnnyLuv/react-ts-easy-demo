import { createStore, combineReducers } from 'redux'
import { countState } from './count'
import { keyState } from './key'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    countState,
    keyState,
  }),
  composeWithDevTools()
)

export default store