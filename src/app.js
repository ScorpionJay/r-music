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
		const { dispatch,music } = this.props
		dispatch(changeMusicAPI(music))
	}

	render(){
		const {music,time,controll,spin,message} = this.props;
		return (
			<div className='root'>
				<Spin spin={spin}/>
				<Message data={message}/>
				<div className='root'>{this.props.children}</div>

				<Audio data={music} 
					getCur={(e)=>this.getCur(e)}
					time={time}
					changeTime={()=>this.changeTime()} 
					changeMusic={()=>this.changeMusic()}
					controll={controll} />
			
			</div>
		)
	};
}

function map(state) {
  return {
  	music: state.music.musicBox,
  	time:state.music.time,
  	controll:state.music.controll,
    spin: state.spin.spin,
    message:state.message.message
  };
}

export default connect(map)(App)