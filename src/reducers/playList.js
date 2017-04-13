import { combineReducers } from 'redux'
import { PLAYLIST,MUSIC,KRC } from '../actions/playList'
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
      filename: "",
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
            specialname: "",
            nickname: "",
            publishtime: "",
            singername: "",
            intro: "",
            songcount: 21,
            imgurl: "",
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


let musicVo = {
  url: "http://fs.open.kugou.com/a0a6a6e1427e3f53764c554e71845d17/58ee374e/G009/M00/09/07/SQ0DAFUOHNOIV3OlAA9DWzOmPlgAABBmwPF_pwAD0Nz944.m4a",
  bitRate: 32,
  choricSinger: "",
  songName: "",
  req_hash: "9283C8FEA2871E449328BCD49D283471",
  singerHead: "",
  privilege: 0,
  status: 1,
  stype: 11323,
  ctype: 1009,
  singerName: "",
  fileName: "",
  singerId: 6076,
  topic_url: "",
  intro: "",
  errcode: 0,
  extName: "m4a",
  imgUrl: "",
  timeLength: 243
}

function music(state = musicVo, action) {
  switch (action.type) {
    case MUSIC:
      return action.obj
    default:
      return state
  }
}

let krcVo = '';

function krc(state = musicVo, action){
  switch (action.type) {
    case KRC:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  playList,music,krc
})

export default Reducers