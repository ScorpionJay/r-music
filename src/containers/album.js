import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Nav from '../components/common/Nav'
import Album from '../components/music/album'
import { albumListAPI } from '../actions/album'
import Beat from '../components/music/beat'
import { musicBoxAddAPI,currentMusicAPI,changetimeAPI,controllAPI } from '../actions/music'

class App extends Component {

  back(){
      browserHistory.goBack()
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(albumListAPI(this.props.params.id))
  }

  async musicBoxAdd(m){
    const { dispatch,music } = this.props
    if( music.currentMusic.hash !== m.hash ){
      await dispatch(musicBoxAddAPI(m))
      await dispatch(currentMusicAPI(m.hash))
      await dispatch(changetimeAPI({
        currentTime: 0,
        duration: 0
      }))
      await dispatch(controllAPI('play'))
    }
    browserHistory.push('play')
  }

  render() {
    const { dispatch,data,login,controll } = this.props
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}>返回</div>
          <div style={{display:'flex',flex:1,justifyContent: 'center'}}>歌单</div>
          <Link style={{display:'flex',flex:1,justifyContent: 'flex-end'}}  to='/play'>
            <Beat  beat={controll === 'play'} />
          </Link>
        </div>
        
        <div className="container">
          <Album data={data} addMusic={(music) => this.musicBoxAdd(music)}/>
        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.album.albumList,
    music: state.music.musicBox,
    controll:state.music.controll,
    login: state.login.login
  }
}

export default connect(map)(App)
