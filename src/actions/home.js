// import 'whatwg-fetch'
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

	 // return dispatch => {
	 // 	( async (url) => {
	 // 		dispatch(spin())
	 // 		let data = await api.request(url)
	 // 		dispatch(home(data))
	 // 		dispatch(spinHidden())
	 // 	})(Config.homeAPI)
	 // }
	return dispatch => {

		dispatch(spin());
	 	api( Config.homeAPI )
	 		.then(data=> {
	 			dispatch(home(data))
			 	dispatch(spinHidden())
	 		})



	 // 	fetch(Config.homeAPI,{
		// 	}).then(function(response) {
		// 		return response.json()
		// 	}).then(function(json) {
		// 	 	dispatch(home(json))
		// 	 	dispatch(spinHidden())
		// 	}).catch(function(ex) {
		// 		console.log('parsing failed', ex)
		// 		dispatch(spinHidden())
		// 	}
		// )
	 }

	
}


