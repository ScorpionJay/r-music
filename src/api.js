/**
* request api
* 封装的请求api,使用fetch，如果不支持则使用ajax
*/

import async from 'async'
require("babel-polyfill")
import Storage from './storage'

export default async ( url, method = 'get', data = {} ,headers = {} ) => {
  if(window.fetch){//浏览器支持fetch
      let requestConfig = {
      method:method,
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
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
          url = url + '?' +dataStr.substr(0,dataStr.lastIndexOf('&'));
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
        let data;
        switch(requestConfig.headers.Accept) {
          case 'application/json':
            data = response.json()
            break;
          case 'text/html':
            data = response.text()
            break;
        }
        return data
      }
    }catch(error){
      console.log('error aaa',error)
      throw new Error(error)
    }
  }else{//浏览器不支持fetch
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject;
    }

    let sendData = '';
    if (method == 'post') {
      sendData = JSON.stringify(data);
    }else{
      let dataStr = '';
      for (let [k, v] of Object.entries(data)) {
          dataStr += `${k}=${v}&`;
      }

      if( dataStr !== '' ){
          url = url + '?' +dataStr.substr(0,dataStr.lastIndexOf('&'));
      }
    }

    return new Promise( (resolve, reject) => {
      requestObj.open(method, url, true);
      requestObj.setRequestHeader('Content-Type', 'application/json');
      requestObj.setRequestHeader('Accept', headers.Accept||'application/json');
      requestObj.send(sendData);
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              switch(headers.Accept) {
                case 'text/html':
                  obj = obj;
                  break;
                default:
                  obj = JSON.parse(obj);
                  break;
              }
            }
            resolve(obj);
          } else {
            //reject()
          }
        }
      }
    });
  }

}