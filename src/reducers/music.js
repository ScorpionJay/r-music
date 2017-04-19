import { combineReducers } from 'redux'
import { MUSICBOX,MUSICBOXADD,CURRENTMUSIC,KRC,PLAY,PAUSE,CHANGETIME,PRE,NEXT } from '../actions/music'

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
  }
}


function musicBox(state = vo, action) {
  switch (action.type) {
    case MUSICBOX:// 初始化音乐盒
      state.musicBox = action.obj
      return state 
    case MUSICBOXADD:// 音乐盒添加音乐
      let flag = true
      for(let i=0; i<state.musicBox.length; i++){
          if(state.musicBox[i].hash === action.obj.hash){
            flag = false
            break
          }
        }
      if( flag ){
        state.musicBox = state.musicBox[0].hash === '' ? [].concat(action.obj) : state.musicBox.concat( action.obj )
      }  
      return state 
    case CURRENTMUSIC:// 音乐盒当前音乐
      state.currentMusic = action.obj
      return state
    case NEXT:// 下一首
      let index = 0
      if(state.musicBox.length === 1){
        index = 0
      }else{
        for(let i=0; i<state.musicBox.length; i++){
          if(state.musicBox[i].hash === state.currentMusic.hash){
            index = i;
            break
          }
        }
        if( index === state.musicBox.length-1){
          index = 0
        }else{
          index = index+1
        }
      }

      state.currentMusic = state.musicBox[index]
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