import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const HOME = 'HOME'

export const home = (obj) =>{
	return {
		type: HOME,
		obj
	}
}

export function homeAPI(){

	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.homeAPI );
	 		let musicList = await api( Config.musicListAPI,'get',{page:2,json:true} );
	 		console.log(musicList)
		 	dispatch(home(data))
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}

	

	
}


