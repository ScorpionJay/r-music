import React , {Component } from 'react';
import { connect } from 'react-redux';
import Spin from './components/common/Spin';
import Message from './components/common/Message';
import Audio from './components/music/audio';
class App extends Component{
	render(){
		const {music,play,spin,message} = this.props;
		return (
			<div className='root'>
				<Spin spin={spin}/>
				<Message data={message}/>
				<div className='root'>{this.props.children}</div>

				<Audio src={music.url} play={play}/>
			
			</div>
		)
	};
}

function map(state) {
  return {
  	music: state.playList.music,
  	play: state.playList.play,
    spin: state.spin.spin,
    message:state.message.message
  };
}

export default connect(map)(App);