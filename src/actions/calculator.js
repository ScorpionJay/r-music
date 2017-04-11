export const CALCULATOR = 'CALCULATOR';
export const CALCULATORRESET = 'CALCULATORRESET';
import Config from '../config';
import { spin,spinHidden } from './spin';
import api from '../api';

export const calculator = (data) => {
	return {
		type: CALCULATOR,
		data
	}
}

export const calculatorReset = () => {
	return {
		type: CALCULATORRESET
	}
}

export const calculatorAPI = (data) => {
	return async dispatch => {
	 	let data = {
	 		tradeAmount:'1',
			typeTerm:3,
			termUnit:'月',
			yearRate:2,
			repaymentMethod:'等额本息'
	 	}
	 	let headers= {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      }
	 	try{
	 		let result = await api( Config.calculator,'get',data,headers )
		 	dispatch(calculator(result));
		 	dispatch(spinHidden());
		 }catch(error){
			console.log('error',error);
		}
	}
}

export const calculatorResetAPI = () => {
	return  dispatch => {
		dispatch(calculatorReset())
	}
}

