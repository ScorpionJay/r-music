import { combineReducers } from 'redux'
import { SPIN_SHOW,SPIN_HIDDEN } from '../actions/spin'

function spin(state = false, action) {
  switch (action.type) {
    case SPIN_SHOW:
      return true
     case SPIN_HIDDEN:
      return false
    default:
      return state
  }
}

const todoApp = combineReducers({
  spin
})

export default todoApp