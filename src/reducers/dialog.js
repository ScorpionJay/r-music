import { combineReducers } from 'redux'
import { DIALOG_SHOW,DIALOG_HIDDEN } from '../actions/dialog'

function dialog(state = {}, action) {
  switch (action.type) {
    case DIALOG_SHOW:
      return {message:action.message}
     case DIALOG_HIDDEN:
      return {}
    default:
      return state
  }
}

const todoApp = combineReducers({
  dialog
})

export default todoApp