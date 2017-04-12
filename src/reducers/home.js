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
      "imgurl":"http://imge.kugou.com/soft/collection/{size}/20170406/20170406190354967508.jpg",
      "intro":"趁今天天气正好，好好整理自己的心情，是时候再次出发了！",
      "playcount":1499235,
      "publishtime":"2017-04-06 00:00:00",
      "singername":"",
      "slid":29,
      "songcount":19,
      "specialid":123275,
      "specialname":"打扫一段心情，好好爱自己",
      "suid":509004763,
      "username":"殇葬",
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