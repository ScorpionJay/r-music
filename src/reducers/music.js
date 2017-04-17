import { combineReducers } from 'redux'
import { MUSICBOX,MUSICBOXADD,CURRENTMUSIC,KRC,PLAY,PAUSE,CHANGETIME } from '../actions/music'

let vo = {
  musicBox:[
    {
      hash:'',
      name:''
    }
  ],
  currentMusic:{
    hash:'',
    name:'',
    krc:[{time:0,str:''}],
    singerName:'',
    songName:'',
    url:'',
    imgUrl:''
  },
  model:'',
  currentTime:0,
  duration:0,
  status:'pause',// 默认暂停
  changeTimeFlag:false
}


function musicBox(state = vo, action) {
  switch (action.type) {
    case MUSICBOX:// 初始化音乐盒
      state.musicBox = action.obj
      return state 
    case MUSICBOXADD:// 音乐盒添加音乐
      state.musicBox = state.musicBox[0].hash === '' ? [].concat(action.obj) : state.musicBox.concat( action.obj )
      return state 
    case CURRENTMUSIC:// 音乐盒当前音乐
      state.currentMusic = action.obj
      return state
    default:
      return state
  }
}

function time(state = {currentTime:0,duration:0,changeTimeFlag: false}, action){
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


const Reducers = combineReducers({
  musicBox,time,controll
})

export default Reducers