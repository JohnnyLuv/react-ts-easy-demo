import { createStore, combineReducers } from 'redux'
import { userState } from './user'
import { countState } from './count'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    userState,
    countState,
  }),
  composeWithDevTools()
)

export default store