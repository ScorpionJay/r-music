import { combineReducers } from 'redux'
import { INVERST_LIST,INVERST_ITEM } from '../actions/inverst'

function inverstList(state = [], action) {
  switch (action.type) {
    case INVERST_LIST:
      return action.list
    default:
      return state
  }
}

function inverstItem(state = {}, action) {
  switch (action.type) {
    case INVERST_ITEM:
      return action.inverst
    default:
      return state
  }
}

const reducers = combineReducers({
  inverstList,
  inverstItem
})

export default reducers