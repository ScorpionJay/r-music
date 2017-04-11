const serviceUrl = 'http://127.0.0.1:1026/' 

let Config = {}

if (process.env.NODE_ENV === 'production') {
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
  	homeAPI:'./json/home.json',
    // inverstApi:'./json/inverst.json',
    inverstApi:serviceUrl+'/inverst',
    // inverstApi:'/api/inverst',
    inverstsAPI: 'http://onejay.top/json/inversts.json',
    inverstAPI: 'http://onejay.top/json/inversts.json'
  }
}else{
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
  	homeAPI:'./json/home.json',
    calculator:'/shanlinbao/calculator/rzb',
    //inverstApi:'./json/inverst.json',
    inverstApi:serviceUrl+'/inverst',
    inverstsAPI: 'http://onejay.top/json/inversts.json',
    inverstAPI: 'http://onejay.top/json/inversts.json',
    tybApi: './json/tyb.json'
  }
}

export default Config