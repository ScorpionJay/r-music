/**
* config
*/

let Config = {}

if (process.env.NODE_ENV === 'production') {
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
    bannerAPI:'/ad/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1',
    homeAPI:'./json/home.json',
    musicListAPI:'/kugou/plist/index',
    playListAPI:'/kugou/plist/list/id/?json=ture',
    musicSearchAPI:'/musicSearch/api/v3/search/song?page=PAGE&pagesize=20&keyword=KEYWORD',
    musicAPI:'/kugou/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: '/kugou/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
    searchHotAPI: '/mobilecdn/api/v3/search/hot',
    searchResultAPI: '/mobilecdn/api/v3/search/song',
    rankListAPI:'/mobilecdn/api/v3/rank/list?plat=2&withsong=1&showtype=2&parentid=0&apiver=4&version=8550',
    rankInfoAPI: 'kugou/rank/info/{rankid}?json=true'
  }
}else{
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
    bannerAPI:'/ad/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1',
  	homeAPI:'./json/home.json',
    musicListAPI:'/kugou/plist/index',
    musicSearchAPI:'/musicSearch/api/v3/search/song?page=PAGE&pagesize=30&keyword=KEYWORD',
    playListAPI:'/kugou/plist/list/id/?json=ture',
    musicAPI:'/kugou/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: '/kugou/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
    searchHotAPI: '/mobilecdn/api/v3/search/hot',
    searchResultAPI: '/mobilecdn/api/v3/search/song',
    rankListAPI:'/mobilecdn/api/v3/rank/list?plat=2&withsong=1&showtype=2&parentid=0&apiver=4&version=8550',
    rankInfoAPI: 'kugou/rank/info/{rankid}?json=true'
  }
}

export default Config