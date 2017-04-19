import { combineReducers } from 'redux'
import { USER } from '../actions/user'

let vo = {}

function user(state = vo, action) {
  switch (action.type) {
    case USER:
      return action.obj;
    default:
      return state;
  }
}

const Reducers = combineReducers({
  user
});

export default Reducers;