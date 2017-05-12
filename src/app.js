/**
* 总组件
*/

import React , {Component } from 'react'
import { connect } from 'react-redux'
import Spin from './components/common/Spin'
import Message from './components/common/Message'
import Audio from './components/music/audio'
import { musicBoxAddAPI,currentMusicAPI,changetimeAPI,controllAPI,changeMusicAPI } from './actions/music'

import Home from './containers/home'
import music from './containers/music'
import friend from './containers/friend'
import account from './containers/account'
import search from './containers/search'
import album from './containers/album'
import play from './containers/play'
import rankinfo from './containers/rankinfo'

import {
  Route,
  Switch,
} from 'react-router-dom'

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
	 
	componentDidMount(){
	    if( this.props.history.location.pathname ===  '/' ){
	      this.props.history.replace('/discover/recommend')
	    }
	}

	render(){
		const {currentMusic,time,controll,spin,message} = this.props;
		return (
			<div className='root'>
				<Spin spin={spin}/>
				<Message data={message}/>

				<Audio data={currentMusic} 
					getCur={(e)=>this.getCur(e)}
					time={time}
					changeTime={()=>this.changeTime()} 
					changeMusic={()=>this.changeMusic()}
					controllMusic = {() => this.controllMusic()}
					controll={controll} />

				<Switch className='root'>
					  <Route  path="/discover" component={Home} />
					  <Route  path="/music" component={music} />
				  	  <Route  path="/friend" component={friend} />
				  	  <Route  path="/account" component={account} />
				  	  <Route  path="/search" component={search} />
				  	  <Route  path="/album/:id" component={album} />
				  	  <Route  path="/play/:id" component={play} />
				  	  <Route  path="/play" component={play} />
				      <Route  path="/rankinfo/:rankid" component={rankinfo} />
				</Switch>
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