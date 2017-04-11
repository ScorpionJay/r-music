import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Slider from '../components/home/slider'

import Nav from '../components/common/Nav';
class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }
// <Slider data={data.slider} />
  render() {
    const { dispatch,data,login } = this.props
    return (
      <div className='root'>

        <div className="header">
          帐号
        </div>

        <div className="container">
          
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

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
