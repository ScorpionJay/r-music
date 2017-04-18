// import 'whatwg-fetch'
import Config from '../config';
import { spin,spinHidden } from './spin';
import api from '../api';
export const USER = 'USER';

export const user = (obj) =>{
	return {
		type: USER,
		obj
	}
}

export function userAPI(token){

	 return async dispatch => {
	 	dispatch(spin());
	 	try{
	 		let data = await api( Config.test,'post',{},{Authorization: `bearer ${token}`} )
		 	dispatch(user(data)); 
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	 	
	 }
}


