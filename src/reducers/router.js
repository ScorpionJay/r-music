import { combineReducers } from 'redux'
import { DISCOVER_TAB } from '../actions/router'

function discover(state = '', action){
  switch(action.type) {
    case DISCOVER_TAB:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  discover
})

export default Reducers