import { combineReducers } from 'redux'
import  home from './home'
import  login from './login'
import  inverst from './inverst'
import  spin from './spin'
import  message from './message'
import  dialog from './dialog'
import  user from './user'
import  calculator from './calculator'

const reducers = combineReducers({
  home,
  login,
  inverst,
  spin,
  message,
  dialog,
  user,
  calculator
})

export default reducers