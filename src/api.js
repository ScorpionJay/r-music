import async from 'async';
require("babel-polyfill");
import Storage from './storage';	

export default async ( url, method = 'get', data = {} ,headers = {'Content-Type':'application/json'} ) => {
        let requestConfig = {
			method:method,
			headers:{
				'Accept':'application/json',
			}
		}

		if( method === 'post' ){
			Object.defineProperty(requestConfig, 'body', { value: data });
		}else{
			let dataStr = '';
			for (let [k, v] of Object.entries(data)) {
			    dataStr += `${k}=${v}&`;
			}

			if( dataStr !== '' ){
				dataStr.substr(0,dataStr.lastIndexOf('&'));
				url = url + '?' +dataStr;
			}
		}

		// header
		if( Object.keys(headers).length !== 0  ){
			Object.assign( requestConfig.headers, headers );
		}

		try{
			let response = await fetch(url,requestConfig);
			// 这里处理的感觉还不是太好
			// token 过期
			if( response.status === 401 ){
				// throw new Error('token 过期');
				Storage.clear();
				location.href = '/';
			}else{
				let data = await response.json();
				return data
			}
		}catch(error){
			console.log('error aaa',error)
			throw new Error(error)
		}
}







