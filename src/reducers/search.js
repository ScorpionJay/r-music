import { combineReducers } from 'redux'
import { SEARCH} from '../actions/search'

let searchVo = []

function search(state = searchVo, action) {
  switch (action.type) {
    case SEARCH:
      return action.obj 
    default:
      return state
  }
}

const Reducers = combineReducers({
  search
})

export default Reducers