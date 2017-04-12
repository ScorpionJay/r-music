import { combineReducers } from 'redux'
import { PLAYLIST } from '../actions/playList'

let vo = {
  list:[
    {
      pay_type_320: 0,
      m4afilesize: 0,
      price_sq: 0,
      filesize: 4636551,
      bitrate: 128,
      price: 0,
      inlist: 1,
      fail_process_sq: 0,
      pay_type: 0,
      topic_url: "",
      rp_type: "audio",
      pkg_price: 0,
      feetype: 0,
      filename: "习眀谣 - 四月",
      price_320: 0,
      extname: "mp3",
      hash: "99A71D3815032CC4105CA0C7D7F0698A",
      audio_id: 19525621,
      privilege: 0,
      pkg_price_320: 0,
      sqfilesize: 0,
      topic_url_320: "",
      '320filesize': 11590256,
      rp_publish: 1,
      duration: 289,
      topic_url_sq: "",
      '320privilege': 0,
      remark: "",
      '320hash': "F841DB205CDAEF6297951731CB0ECEAB",
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
            specialname: "人间四月天，花开正好时",
            nickname: "永不放弃",
            publishtime: "2017-04-01 00:00:00",
            singername: "",
            intro: "春天暖风吹，赶在夏天到来之前，带上满满的好心情，青涩的小心思，手牵手去赏花！",
            songcount: 21,
            imgurl: "http://imge.kugou.com/soft/collection/{size}/20170401/20170401174208269892.jpg",
            specialid: 123183,
            suid: 509004855,
            tags: [
            {
              tagname: "轻松",
              tagid: 577
              },
              {
              tagname: "旅途",
              tagid: 585
              }
            ],
            collectcount: 144,
            playcount: 395859,
            slid: 30
    }
}


function playList(state = vo, action) {
  switch (action.type) {
    case PLAYLIST:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  playList
})

export default Reducers