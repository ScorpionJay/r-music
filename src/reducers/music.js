import { combineReducers } from 'redux'
import { MUSICBOX,MUSICBOXADD,CURRENTMUSIC,KRC,PLAY,PAUSE,CHANGETIME,PRE,NEXT,FIRSTTIME } from '../actions/music'

let musicPlayListVo = [
    {
      hash:'',
      name:''
    }
]

function musicPlayList(state = musicPlayListVo, action) {
  switch (action.type) {
    case MUSICBOX:// 初始化音乐盒
      return state 
    case MUSICBOXADD:// 音乐盒添加音乐
      let flag = true
      for(let i=0; i<state.length; i++){
          if(state[i].hash === action.obj.hash){
            flag = false
            break
          }
        }
      if( flag ){
        state = state[0].hash === '' ? [].concat(action.obj) : state.concat( action.obj )
      }  
      return state 
    default:
      return state
  }
}

let currentMusicVo = {
  hash:'',
  name:'',
  krc:[{time:0,str:''}],
  singerName:'',
  songName:'',
  url:'',
  imgUrl:'',
  duration:0
}
function currentMusic(state = currentMusicVo, action){
  switch (action.type) {
    case CURRENTMUSIC:
      return action.obj
    default:
      return state
  }
}

function time(state = {currentTime:0,changeTimeFlag: false}, action){
  switch (action.type) {
    case CHANGETIME:
      return action.obj
    default:
      return state
  }
}

function controll(state = 'pause', action){
  switch (action.type) {
    case PLAY:
      return action.obj
    case PAUSE:
      return action.obj
    default:
      return state
  }
}


function firstTime(state = true, action){
  switch (action.type) {
    case FIRSTTIME:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  musicPlayList,currentMusic,time,controll,firstTime
})

export default Reducers