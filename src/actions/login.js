import Config from '../config'
import Storage from '../storage'

export const LOGIN = 'LOGIN'

export const LOGIN_ERROR = 'LOGIN_ERROR'

import {alert} from './message'

export function loginFetch(username,password,redirect){
	// fetch login
	return dispatch => { 
	 	fetch(Config.loginUrl,{
		      method: 'POST',
		      headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/x-www-form-urlencoded',
		        'Authorization': 'Basic YWNtZTphY21lc2VjcmV0'		// hard code
		      },
		      body: `username=${username}&password=${password}&grant_type=password`,
        })
        .then((response) => response.json() )
        .then((data) => {
               if(!data.error){
                	// 持久化
                   // for(var item in data){
                   // 	  Storage.put(item.toString(),data[item])
                   // }
                   Storage.put('custId',data.custId)
                   Storage.put('token',data.access_token)
	               dispatch(login(data.access_token))
	               // 页面跳转
	               if (redirect) redirect()
               }else{
               	 dispatch(alert('帐号或密码错误'))
               }
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })
	}

}




export const loginError = (message) => {
	return {
		type: LOGIN_ERROR,
		message
	}
}

export const login = (token) => {
	return {
		type: LOGIN,
		token
	}
}


export function logoutFetch(redirect){
	// fetch login
	return dispatch => { 
	 	fetch('./json/home.json',{
          method: 'get'
        })
        .then((response) => {
                	// 持久化
	               Storage.clear()
	               
	               dispatch(login(''))
	               // 页面跳转
	               if (redirect) redirect()
               

        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })
	}

}