import { combineReducers } from 'redux'
import { HOME,SCROLLTOP } from '../actions/home'
let homeVo = {
  banner:[
    {
      imgurl: "",
      title: "",
      id: 5845,
      type: 2,
      extra: {
        albumname: "",
        imgurl: "",
        privilege: 0,
        albumid: 2104644,
        singerid: 3060,
        singername: "",
        intro: "",
        publishtime: ""
      },
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