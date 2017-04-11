// import 'whatwg-fetch'
import { spin,spinHidden } from './spin'
import Config from '../config'
export const INVERST_LIST = 'INVERST_LIST'
export const INVERST_ITEM = 'INVERST_ITEM'
import Storage from '../storage'

export const inverstList = (list) => {
	return {
		type: INVERST_LIST,
    list
	}
}

export const inverstItem = (inverst) =>{
	return {
		type: INVERST_ITEM,
    inverst
	}
}

export function inverstListApi(index){
	 return dispatch => {
	 	dispatch(spin())

    let h = {}
    if( Storage.get('token') ){
      h =  { 'Auth-Token': Storage.get('token')} 
    }


    fetch(Config.inverstApi,{
      //mode: "cors",// 跨域
          headers:h,
          method: 'get'
    })


	 	// fetch(Config.inverstApi,{
			// //mode: "cors"
			// })
  .then(function(response) {
				
    return response.json()
  }).then(function(json) {
    console.log(json)
    if( json.status === 401 ){
      Storage.remove('token')
      dispatch(inverstListApi())
      return
    }


     dispatch(inverstList(json.data))
     dispatch(spinHidden())
  }).catch(function(ex) {
     console.log('parsing failed', ex)
     dispatch(spinHidden())
  })}
}


export function inverstItemApi(index){
	 return dispatch => {
	 	dispatch(spin())

	 	fetch(Config.tybApi,{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
  	 // let inverst 
  	 // for( let obj of json ){
  	 // 	 if( obj.id == index ){
  	 // 	 	inverst = obj
  	 // 	 	break
  	 // 	 }
  	 // }

     dispatch(inverstItem(json))
     dispatch(spinHidden())
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    dispatch(spinHidden())
  })}
}