import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const MUSICBOX = 'MUSICBOX'
export const MUSICBOXADD = 'MUSICBOXADD'
export const CURRENTMUSIC = 'CURRENTMUSIC'
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const CHANGETIME = 'CHANGETIME'

const musicBox = (obj) => {return { type: MUSICBOX, obj }}
const musicBoxAdd = (obj) => {return { type: MUSICBOXADD, obj } }
const currentMusic = (obj) => {return { type:CURRENTMUSIC, obj }}
const play = (obj) => {return { type:PLAY, obj }}
const pause = (obj) => {return { type:PAUSE, obj }}
const changetime = (obj) => {return { type:CHANGETIME, obj }}

export function musicBoxInit(obj){
	return dispatch => { 
		dispatch(musicbox(obj))
	}
}

export function musicBoxAddAPI(obj){
	return dispatch => { 
		dispatch(musicBoxAdd(obj))
	}
}

export function currentMusicAPI(id){
	return async dispatch => {
		// dispatch(spin());
	 	try{
	 		let data = await api( Config.musicAPI.replace('HASH',id) );
	 		let krc = await api( Config.krcAPI.replace('HASH',id).replace('TIMELENGTH',data.timeLength+'000'), 'get', {}, {'Accept':'text/html'});
		 	let krcArray = []
		 	await krc.split('\n').map((item,index)=>{
		 		let t = item.substring(1,item.indexOf(']'))
		 		let tt = parseInt(t.substring(0,t.indexOf(':'))) * 60 + parseFloat(t.substring(t.indexOf(':')+1))
		 		krcArray.push({
		 			time: tt ,
		 			str: item.substring(item.indexOf(']')+1),
		 			index:index
		 		})
		 	})
		 	krcArray.pop()

		 	let music = {
		 		krc:krcArray,
		 		hash:id,
		 		url:data.url,
		 		singerName:data.singerName,
		 		songName:data.songName,
		 		imgUrl:data.imgUrl,
		 		duration:data.timeLength
		 	}
		 	await dispatch(musicBoxAddAPI({
		 		hash:data.hash,
      			name:data.songName
		 	}))
		 	await dispatch(currentMusic(music));
			await dispatch(controllAPI('play'))
		 	// dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}
}


export function changetimeAPI(obj){
	return dispatch => { 
		dispatch(changetime(obj))
	}
}


export function controllAPI(obj){
	return dispatch => { 
		if( obj === 'play' ){
			dispatch(play(obj))
		}else if( obj === 'pause' ){
			dispatch(pause(obj))
		}
		
	}
}

export function changeMusicAPI(state,type){
	return dispatch => { 
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

        if(type !== 'pre'){
        	if( index === state.musicBox.length-1){
	          index = 0
	        }else{
	          index = index+1
	        }
        }else{
			if( index === 0  ){
	          index = state.musicBox.length-1
	        }else{
	          index = index-1
	        }
        }

      }
	  dispatch(currentMusicAPI(state.musicBox[index].hash))
	}
}



