import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const HOME = 'HOME'
export const RECOMMENDMUSIC = 'RECOMMENDMUSIC'
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

export function homeAPI(){

	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.homeAPI );
	 		let musicList = await api( Config.musicListAPI,'get',{page:1,json:true} );
	 		data.recommendMusics = musicList.plist.list.info
		 	dispatch(home(data))
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}

	

	
}


