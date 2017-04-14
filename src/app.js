import React , {Component } from 'react';
import { connect } from 'react-redux';
import Spin from './components/common/Spin';
import Message from './components/common/Message';
import Audio from './components/music/audio';
import { timeAPI } from './actions/playList';
class App extends Component{

  getCur(t){
  	const { dispatch } = this.props
  	dispatch(timeAPI({
  		cur: t.currentTime,
  		total: t.duration
  	}))
  }


	render(){
		const {music,time,play,spin,message} = this.props;
		return (
			<div className='root'>
				<Spin spin={spin}/>
				<Message data={message}/>
				<div className='root'>{this.props.children}</div>

				<Audio src={music.url} play={play} getCur={(e)=>this.getCur(e)} time={time.cur}/>
			
			</div>
		)
	};
}

function map(state) {
  return {
  	music: state.playList.music,
  	play: state.playList.play,
  	time:state.playList.time,
    spin: state.spin.spin,
    message:state.message.message
  };
}

export default connect(map)(App);