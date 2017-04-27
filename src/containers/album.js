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
    const { dispatch,albumList } = this.props
    if( albumList.info.specialid != this.props.params.id){
      dispatch(albumListAPI(this.props.params.id))
    }
  }

  musicBoxAdd(m){
    browserHistory.push(`play/${m.hash}`)
  }

  render() {
    const { dispatch,albumList,login,controll,currentMusic } = this.props
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
          <Album data={albumList} addMusic={(m) => this.musicBoxAdd(m)} currentHash={currentMusic.hash}/>
        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    albumList: state.album.albumList,
    message: state.message.message,
    musicPlayList: state.music.musicPlayList,
    currentMusic: state.music.currentMusic,
    controll:state.music.controll
  }
}

export default connect(map)(App)
