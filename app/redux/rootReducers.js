import { combineReducers } from 'redux'

import nav from './nav'
import menuReducer from '../design/reducers'

const appReducer = combineReducers({
  nav,
  menuReducer
})

export default appReducer
