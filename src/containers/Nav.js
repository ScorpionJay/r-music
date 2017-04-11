import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Nav from '../components/home/homeTop'
import { logoutFetch } from '../actions/login'

class NavApp extends Component {

  componentDidMount(){
    const { dispatch } = this.props
  }

  logout(){
    const { dispatch } = this.props
    dispatch(logoutFetch(function(){
       browserHistory.push('/')
    }))
  }

  render() {
    const { dispatch,data,login } = this.props
    return (
      <div className='nav'>
         <Nav login={login} logout={this.logout.bind(this)} />
      </div>
    )
  }
}

function map(state) {
  return {
    login: state.login.login
  }
}

export default connect(map)(NavApp)
