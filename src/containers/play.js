import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { changetimeAPI,controllAPI} from '../actions/music';

class App extends Component {

  constructor(props) {
    super(props);
     const { dispatch,music } = this.props
     const {currentTime ,duration} = this.props.time
    this.state = {
      slider: duration === 0 ? 0 : currentTime / duration *100
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(111)
  //   return true;
  // }

  componentWillReceiveProps(){
    const {currentTime ,duration} = this.props.time
    this.setState({
      slider: duration === 0 ? 0 : currentTime / duration *100
    })
  }

  musicControll(status){
    const { dispatch } = this.props
    console.log(status)
    dispatch(controllAPI(status))
    
  }


 formatSeconds(value) { 
    var theTime = parseInt(value);// 秒 
    var theTime1 = 0;// 分 
    var theTime2 = 0;// 小时 
    // alert(theTime); 
    if(theTime >= 60) { 
    theTime1 = parseInt(theTime/60); 
    theTime = parseInt(theTime%60); 
    // alert(theTime1+"-"+theTime); 
    if(theTime1 > 60) { 
    theTime2 = parseInt(theTime1/60); 
    theTime1 = parseInt(theTime1%60); 
    } 
    } 
    var result = parseInt(theTime); 
    result = (result >= 10  ) ? ""+parseInt(theTime) : "0"+parseInt(theTime); 
    if(theTime1 > 0) { 
      var m = parseInt(theTime1)
      m = m >= 10  ? ""+m : "0"+m; 
      result = ""+m+":"+result; 
    }else{
       result = '00:'+result 
    } 

    if(theTime2 > 0) { 
    result = ""+parseInt(theTime2)+":"+result; 
    } 

    return result; 
  } 

  changeSlider(value){
    this.setState({
      slider:value
    })
    const {currentTime ,duration} = this.props.time
    // const { dispatch,time } = this.props
    // console.log(value/100 * time.total)
    this.props.dispatch(changetimeAPI({
      currentTime: value/100 * duration ,
      duration,
      changeTimeFlag: true
    }))
    
  }

  render() {
    const { dispatch,data,login,krc,time,music } = this.props
    const {currentTime ,duration} = this.props.time


    // 获取当前歌词
    //<div style={{textAlign:'center',color:'rgb(206, 61, 62)'}}>{s ? s.str : ''}</div>
          // <div>
          //   {
          //     music.currentMusic.krc.map((item)=> 
          //      currentTime > item.time ? <div>{item.time}  {item.str}</div> :''
          //     )
          //   }
          // </div>
    let krc2 =  music.currentMusic.krc.filter((item)=>
      currentTime > item.time
    )
    let s = krc2.pop()
    s = s? s : {time: 0 ,
          str: '',
          index:0}
    
    

    return (
      <div className='root'>
        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>browserHistory.goBack()} style={{display:'flex',flex:1}}>返回</div>
          <div style={{display:'flex',flex:1,justifyContent: 'center'}}>{ music.currentMusic.songName }</div>
          <div style={{display:'flex',flex:1}}></div>
        </div>

        <div className="container" >
          <div onClick={()=>this.musicControll('play')}>播放</div>  
          <div onClick={()=>this.musicControll('pause')}>暂停</div>  
          
          <div style={{display:'flex'}}>
            <div style={{padding:'0 1rem'}}> {this.formatSeconds(currentTime)} </div>
            <div style={{display:'flex',flex:1}}>
              <Slider onChange={(value)=>this.changeSlider(value)}  step={0.1} value={ this.state.slider}/>
            </div>
            <div style={{padding:'0 .5rem'}}> {this.formatSeconds(duration)} </div> 
          </div>

          

          <div style={{height:'400px',overflowY: 'auto',textAlign:'center'}}>
            {
              music.currentMusic.krc.map((item,index)=> 
                s && s.time === item.time ? <div style={{color:'rgb(206, 61, 62)',transform: 'translateY(-'+  (s.index> 8?(s.index-8)*18 :0 )+'px)'}} >{item.str}</div> : <div style={{transform: 'translateY(-'+ (s.index>8? (s.index-8)*18 :0 )+'px)'}}>{item.str}</div>
              )
            }
          </div>

        </div>


      </div>
    )
  }
}

function map(state) {
  return {
    music: state.music.musicBox,
    time:state.music.time
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
