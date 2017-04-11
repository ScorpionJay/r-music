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
// 
  render() {
    const { dispatch,data,login } = this.props
    return (
      <div className='root'>

        <div className="header">
          header
        </div>

        <div className="container">

          <Slider data={data.slider} />
          123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>123123<br/>
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
