import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { reducer as weather } from './search/reducer' 

const reducer = combineReducers({
  weather
})

export const store = createStore(reducer, applyMiddleware(thunk)) 