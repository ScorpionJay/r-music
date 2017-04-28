import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const HOME = 'HOME'
export const RECOMMENDMUSIC = 'RECOMMENDMUSIC'
export const SCROLLTOP = 'SCROLLTOP'

export const home = (obj) =>{
	return {
		type: HOME,
		obj
	}
}

export const recommendMusic = (obj) =>{
	return {
		type: RECOMMENDMUSIC,
		obj
	}
}


export const scrollTop = (obj) =>{
	return {
		type: SCROLLTOP,
		obj
	}
}

export function homeAPI(d,page){

	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data ={}
	 		let banner = await api( Config.bannerAPI )
	 		let musicList = await api( Config.musicListAPI,'get',{page:page,json:true} )
	 		data.banner = banner.data.info
	 		data.recommendMusics = page ===1 ? musicList.plist.list.info : d.recommendMusics.concat( musicList.plist.list.info )
		 	dispatch(home(data))
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}
}

export function scrollTopAction(obj){
	return  dispatch => {
	 	dispatch(scrollTop(obj));
	}
}



