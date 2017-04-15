import { combineReducers } from 'redux'
import  home from './home'
import  login from './login'
import  spin from './spin'
import  message from './message'
import  dialog from './dialog'
import  user from './user'
import  playList from './playList';
import  music from './music';

const reducers = combineReducers({
  home,
  login,
  spin,
  message,
  dialog,
  user,
  playList,
  music
})

export default reducers