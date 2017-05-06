import Config from '../config'
import { spin,spinHidden } from './spin'
import api from '../api'


export const RANK_LIST = 'RANK_LIST'
export const RANK_INFO ='RANK_INFO'

const rankList = (obj) => {return {type:RANK_LIST, obj}}
const rankInfo = (obj) => {return {type:RANK_INFO, obj}}

//获取排行榜列表
export function rankListAction(){
	return async dispatch => {
		dispatch(spin());
		try{
			let data = await api( Config.rankListAPI );
			dispatch(rankList(data.data.info));
			dispatch(spinHidden());
		} catch(error) {
			console.log(error);
		}
	}
}

//根据rankid获取排行榜详情
export function rankInfoAction(rankid){
	return async dispatch =>{
		dispatch(spin());
		try{
			let data = await api( Config.rankInfoAPI.replace('{rankid}', rankid) );
			dispatch(rankInfo(data));
			dispatch(spinHidden());
		} catch(error) {
			console.log(error);
		}
	}
}

