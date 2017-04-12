import { combineReducers } from 'redux'
import { HOME } from '../actions/home'

let homeVo = {
  slider:[
    {
      link:'',
      img:''
    }
  ],
  recommendMusics: [
    {
      "collectcount":2243,
      "imgurl":"",
      "intro":"",
      "playcount":1499235,
      "publishtime":"",
      "singername":"",
      "slid":29,
      "songcount":19,
      "specialid":123275,
      "specialname":"",
      "suid":509004763,
      "username":"",
      "verified":0
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