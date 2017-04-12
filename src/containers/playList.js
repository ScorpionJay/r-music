import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { playListAPI } from '../actions/playList';

import { browserHistory } from 'react-router';
import Nav from '../components/common/Nav';
import PlayList from '../components/music/musicPlayList';

class App extends Component {

  constructor(props) {
    super(props);
  
  }

  back(){
      browserHistory.goBack()
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(playListAPI(this.props.params.id))
  }

  render() {
    const { dispatch,data,login } = this.props
    console.log(data)
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}>返回</div>
          <div style={{display:'flex',flex:1,justifyContent: 'center'}}>歌单</div>
          <div style={{display:'flex',flex:1}}></div>
        </div>
        

        <div className="container">
          <PlayList data={data} />
        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.playList.playList,
    login: state.login.login
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
