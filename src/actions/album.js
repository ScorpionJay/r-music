import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'
export const ALBUMLIST = 'ALBUMLIST'

export const albumList = (obj) =>{
	return {
		type: ALBUMLIST,
		obj
	}
}

export function albumListAPI(id){
	return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.playListAPI.replace('id',id) );
	 		let d = {
	 			list:data.list.list.info,
	 			info:data.info.list
	 		}
		 	dispatch(albumList(d))
		 	dispatch(spinHidden());
		}catch(error){
			console.log('error',error);
		}
	}
}


