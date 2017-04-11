import { combineReducers } from 'redux'
import { LOGIN,LOGIN_ERROR } from '../actions/login'


// function loginError(state = '', action) {
//   switch (action.type) {
//     case LOGIN_ERROR:
//       return action.message
//     default:
//       return state
//   }
// }

function login(state = '', action) {
  switch (action.type) {
    case LOGIN:
      return action.token
    default:
      return state
  }
}

const todoApp = combineReducers({
  login
})

export default todoApp