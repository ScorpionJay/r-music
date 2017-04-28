import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

export const SEARCH = 'SEARCH'

const search = (obj) => {return { type: SEARCH, obj }}

export function searchAction(keyword,page){
	return async dispatch => {
	 	try{
	 		let data = await api( Config.musicSearchAPI.replace('KEYWORD',keyword).replace('PAGE',page) );
		 	dispatch(search(data.data.info));
		 }catch(error){
			console.log('error',error);
		}
	}
}






