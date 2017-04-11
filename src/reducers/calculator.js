import { combineReducers } from 'redux'
import { CALCULATOR,CALCULATORRESET } from '../actions/calculator'

let data = [{
	principalInterest:'',
	principal:'',
	interest:'',
	remainderPrincipal:''
}]


function calculator(state = data, action) {
  switch (action.type) {
    case CALCULATOR:
      return action.data
    case CALCULATORRESET:
      return data
    default:
      return state
  }
}

const todoApp = combineReducers({
  calculator
})

export default todoApp