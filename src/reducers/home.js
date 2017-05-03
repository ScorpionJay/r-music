/**
* home reducer
*/

import { combineReducers } from 'redux'
import { HOME,SCROLLTOP } from '../actions/home'
let homeVo = {
  banner:[],
  recommendMusics: []
}

function home(state = homeVo, action) {
  switch (action.type) {
    case HOME:
      return action.obj
    default:
      return state
  }
}

function scrollTop(state = 0, action) {
  switch (action.type) {
    case SCROLLTOP:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  home,scrollTop
})

export default Reducers