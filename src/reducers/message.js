import { combineReducers } from 'redux'
import { MESSAGE_SHOW,MESSAGE_HIDDEN } from '../actions/message'

function message(state = {}, action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return {message:action.message}
     case MESSAGE_HIDDEN:
      return {}
    default:
      return state
  }
}

const todoApp = combineReducers({
  message
})

export default todoApp