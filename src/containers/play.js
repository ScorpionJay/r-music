import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { musicAPI } from '../actions/playList';

import { browserHistory } from 'react-router';
import Nav from '../components/common/Nav';

class App extends Component {

  constructor(props) {
    super(props);
  }

  back(){
      browserHistory.goBack()
  }

  componentDidMount(){
    const { dispatch } = this.props
    console.log(this.props.params.hash)
    dispatch(musicAPI(this.props.params.hash))
  }

  render() {
    const { dispatch,data,login,krc } = this.props
    const {singerName,url} = data
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}>返回</div>
          <div style={{display:'flex',flex:1,justifyContent: 'center'}}>{singerName}</div>
          <div style={{display:'flex',flex:1}}></div>
        </div>

        <div className="container" >
          {
            krc.split('\n').map((item)=><div>{item}</div>)
          }
        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.playList.music,
    krc: state.playList.krc,
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
