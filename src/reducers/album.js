/**
* album reducer
*/

import { combineReducers } from 'redux'
import { ALBUMLIST } from '../actions/album'
let vo = {
  list:[],
  info:{
      specialname: "",
      nickname: "",
      publishtime: "",
      singername: "",
      intro: "",
      songcount: 0,
      imgurl: "",
      specialid: 0,
      suid: 0,
      collectcount: 0,
      playcount: 0,
      slid: 0
    }
}


function albumList(state = vo, action) {
  switch (action.type) {
    case ALBUMLIST:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  albumList
})

export default Reducers