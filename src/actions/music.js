import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const MUSICLIST = 'MUSICLIST'

export const CURRENTMUSIC = 'CURRENTMUSIC'


export const KRC = 'KRC'
export const PLAY = 'PLAY'
export const TIME = 'TIME'

export const playList = (obj) =>{
	return {
		type: PLAYLIST,
		obj
	}
}

export const music = (obj) =>{
	return {
		type: MUSIC,
		obj
	}
}

export const krc = (obj) => {
	return {
		type : KRC,
		obj
	}
}

export const play = (obj) => {
	return {
		type : PLAY,
		obj
	}
}

export const time = (obj) => {
	return {
		type : TIME,
		obj
	}
}

export function playListAPI(id){
	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.playListAPI.replace('id',id) );
	 		let d = {
	 			list:data.list.list.info,
	 			info:data.info.list
	 		}
		 	dispatch(playList(d))
		 	dispatch(spinHidden());
		}catch(error){
			console.log('error',error);
		}
	}
}



export function musicAPI(id){
	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.musicAPI.replace('HASH',id) );
	 		let krcData = await api( Config.krcAPI.replace('HASH',id).replace('TIMELENGTH',data.timeLength+'000'), 'get', {}, {'Accept':'text/html'});
		 	dispatch(music(data))
		 	dispatch(krc(krcData))
		 	dispatch(play('play'))
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}
}

export function musicControll(status){
	return  dispatch => {
		dispatch(play(status))	
	}
}

export function timeAPI(obj){
	return  dispatch => {
		dispatch(time(obj))	
	}
}