import { combineReducers } from 'redux'
import { ALBUMLIST } from '../actions/album'
let vo = {
  list:[
    {
      pay_type_320: 0,
      m4afilesize: 0,
      price_sq: 0,
      filesize: 0,
      bitrate: 0,
      price: 0,
      inlist: 1,
      fail_process_sq: 0,
      pay_type: 0,
      topic_url: "",
      rp_type: "audio",
      pkg_price: 0,
      feetype: 0,
      filename: "",
      price_320: 0,
      extname: "mp3",
      hash: "",
      audio_id: 0,
      privilege: 0,
      pkg_price_320: 0,
      sqfilesize: 0,
      topic_url_320: "",
      '320filesize': 0,
      rp_publish: 1,
      duration: 0,
      topic_url_sq: "",
      '320privilege': 0,
      remark: "",
      '320hash': "",
      fail_process: 0,
      fail_process_320: 0,
      has_accompany: 0,
      mvhash: "",
      pay_type_sq: 0,
      album_id: "0",
      sqprivilege: 0,
      pkg_price_sq: 0,
      sqhash: ""
      }
  ],
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