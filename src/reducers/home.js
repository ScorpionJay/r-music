import { combineReducers } from 'redux'
import { HOME,SCROLLTOP } from '../actions/home'
let homeVo = {
  slider:[
    {
      link:'',
      img:''
    }
  ],
  recommendMusics: [
    {
      "collectcount":0,
      "imgurl":"",
      "intro":"",
      "playcount":0,
      "publishtime":"",
      "singername":"",
      "slid":0,
      "songcount":0,
      "specialid":0,
      "specialname":"",
      "suid":0,
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

function scrollTop(state = 0, action) {
  switch (action.type) {
    case SCROLLTOP:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  home,scrollTop
})

export default Reducers