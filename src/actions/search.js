import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'

import Storage from '../storage'
import union from 'lodash/union';

export const SEARCH_HOT = 'SEARCH_HOT'
export const SEARCH_RESULT = 'SEARCH_RESULT'

const searchHot = (obj) => {return {type:SEARCH_HOT, obj}}
const searchResult = (obj) => {return {type:SEARCH_RESULT, obj}}

//搜索热门关键字
export function searchHotAPI(){
	return async dispatch => {
		try{
			let hots = await api( Config.searchHotAPI );
			dispatch(searchHot(hots.data.info));
		} catch(error) {
			console.log(error);
		}
	}
}

//通过关键字搜索
export function searchResultAPI(keyword,page){
	return async dispatch => {
		try {
			let result = await api( Config.searchResultAPI, 'get', {keyword,page} );
			setSearchHistory(keyword);
			dispatch(searchResult(result.data.info));

		} catch(error) {
			console.log(error);
		}
	}
}

//清空搜索结果
export function clearSearchResultAPI(){
	return dispatch => dispatch(searchResult([]))
}

//记录搜索历史，存入localStorage
function setSearchHistory(keyword){
	let searchHistory = (Storage.get('searchHistory')||'').split(',');
	searchHistory = union([keyword],searchHistory)
	Storage.put('searchHistory',searchHistory);

}

