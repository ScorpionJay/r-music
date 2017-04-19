import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,data } = this.props
    return (
      <div>
          注册TODO
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home
  }
}

export default connect(map)(App)
