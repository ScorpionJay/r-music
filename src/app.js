import React , {Component } from 'react'
import { connect } from 'react-redux'
import Spin from './components/common/Spin'
import Message from './components/common/Message'
import Audio from './components/music/audio'
import { musicBoxAddAPI,currentMusicAPI,changetimeAPI,controllAPI,changeMusicAPI } from './actions/music'

class App extends Component{

	getCur(t){
		const { dispatch } = this.props
		dispatch(changetimeAPI({
			currentTime: t.currentTime,
			changeTimeFlag: false
		}))
	}

	changeTime(){
		dispatch(changetimeAPI({
			currentTime: t.currentTime,
			changeTimeFlag: false
		}))
	}

	changeMusic(){
		const { dispatch,musicPlayList,currentMusic } = this.props
		dispatch(changeMusicAPI(musicPlayList,currentMusic))
	}

	controllMusic(){
		const { dispatch } = this.props
		dispatch(controllAPI('pause'))
	}
	 
	render(){
		const {currentMusic,time,controll,spin,message} = this.props;
		return (
			<div className='root'>
				<Spin spin={spin}/>
				<Message data={message}/>
				<div className='root'>{this.props.children}</div>

				<Audio data={currentMusic} 
					getCur={(e)=>this.getCur(e)}
					time={time}
					changeTime={()=>this.changeTime()} 
					changeMusic={()=>this.changeMusic()}
					controllMusic = {() => this.controllMusic()}
					controll={controll} />
			
			</div>
		)
	};
}

function map(state) {
  return {
  	time:state.music.time,
    spin: state.spin.spin,
    message: state.message.message,
    musicPlayList: state.music.musicPlayList,
    currentMusic: state.music.currentMusic,
    controll:state.music.controll
  };
}

export default connect(map)(App)