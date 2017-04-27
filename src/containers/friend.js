import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Nav from '../components/common/Nav';
class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
  }
  render() {
    const { dispatch,data,login } = this.props
    return (
      <div className='root'>

        <div className="header"  style={{backgroundColor:'#ce3d3e',color:'#fff'}}>
          朋友
        </div>

        <div className="container">
          TODO
        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home,
    login: state.login.login
  }
}

export default connect(map)(App)
