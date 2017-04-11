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

/**
* promise
*/
// export function userAPI(token){
// 	// return dispatch => { 
// 	// 	fetch(Config.test,{
// 	// 		method: 'POST',
// 	// 		headers: {
// 	// 		Accept: 'application/json',
// 	// 		Authorization: `bearer ${token}`
// 	// 		}
// 	// 	})
// 	// 	.then((response) => response.json() )
// 	// 	.then((data) => {
// 	// 		if(!data.error){
// 	// 			dispatch(user(data))
// 	// 		}else{
// 	// 		}
// 	// 	})
// 	// 	.catch(function(ex) {
// 	// 	console.log('parsing failed', ex)
// 	// 	})
// 	// }

// 	 return dispatch => {
// 	 	dispatch(spin());
// 	 	api( Config.test,'post',{},{Authorization: `bearer ${token}`} )
// 	 		.then(data=> {
// 	 			dispatch(user(data)); 
// 	 			dispatch(spinHidden());
// 	 		})
// 	 		.catch((e) => console.log(e))
// 	 }
// }

/**
* async 
*/
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


