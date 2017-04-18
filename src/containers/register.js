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
            注册
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
