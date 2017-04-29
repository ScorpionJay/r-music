import { combineReducers } from 'redux'
import { SEARCH_HOT,SEARCH_RESULT } from '../actions/search'

function hots(state = [], action){
  switch(action.type) {
    case SEARCH_HOT:
      return action.obj;
    default:
      return state;
  }
}

function result(state = [], action){
  switch(action.type) {
    case SEARCH_RESULT:
      return action.obj;
    default:
      return state;
  }
}


const Reducers = combineReducers({
  hots,result,
})

export default Reducers