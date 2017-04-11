import { combineReducers } from 'redux'
import { HOME } from '../actions/home'

let homeVo = {
  slider:[
    {
      link:'',
      img:''
    }
  ],
  products: [
    {
      "id": "",
      "projectName": "",
      "yearRate": 0,
      "awardRate": 0,
      "projectStatus": "",
      "typeTerm": "",
      "termUnit": "",
      "currUsableValue": 0,
      "investScale": 1,
      "releaseDate": 0,
      "isNewOwner": "",
      "repaymnetMethod": "",
      "fullScaleDate": "",
      "termDays": "",
      "createDate": "",
      "effectDate": ""
    }
  ]
}


function home(state = homeVo, action) {
  switch (action.type) {
    case HOME:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  home
})

export default Reducers