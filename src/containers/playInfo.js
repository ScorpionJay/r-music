import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { musicControll,timeAPI } from '../actions/playList';

import { browserHistory } from 'react-router';
import Nav from '../components/common/Nav';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class App extends Component {

  constructor(props) {
    super(props);
    const { dispatch,time } = this.props
    this.state = {
      slider: time.total === 0 ? 0 : time.cur / time.total *100
    };
  }

  componentWillReceiveProps(){
    const { dispatch,time } = this.props
    this.setState({
      slider:time.total === 0 ? 0 : time.cur / time.total *100 
    })
  }

  back(){
      browserHistory.goBack()
  }

  musicControll(status){
    const { dispatch } = this.props
    dispatch(musicControll(status))
    
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
    const { dispatch,time } = this.props
    console.log(value/100 * time.total)
    dispatch(timeAPI({
      cur: value/100 * time.total ,
      total: time.total
    }))
    
  }

  render() {
    const { dispatch,data,login,krc,time } = this.props
    const {singerName,url} = data

    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}>返回</div>
          <div style={{display:'flex',flex:1,justifyContent: 'center'}}>{singerName}</div>
          <div style={{display:'flex',flex:1}}></div>
        </div>

        <div className="container" >
          <div onClick={()=>this.musicControll('play')}>播放</div>  
          <div onClick={()=>this.musicControll('pause')}>暂停</div>  

          
          <div style={{display:'flex'}}>
            <div style={{padding:'0 1rem'}}> {this.formatSeconds(time.cur)} </div>
            <div style={{display:'flex',flex:1}}>
              <Slider onChange={(value)=>this.changeSlider(value)} onBeforeChange={()=>this.musicControll('pause')} onAfterChange={()=>this.musicControll('play')}   step={0.1} value={ this.state.slider}/>
            </div>
            <div style={{padding:'0 .5rem'}}> {this.formatSeconds(time.total)} </div> 
          </div>


          <div>
          {
            krc.split('\n').map((item)=><div>{item}</div>)
          }
          </div>
        </div>


      </div>
    )
  }
}

function map(state) {
  return {
    data: state.playList.music,
    krc: state.playList.krc,
    login: state.login.login,
    time:state.playList.time
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
