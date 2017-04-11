import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Slider from '../components/home/slider'
import Nav from '../components/nav'
// import Product from '../components/homeProduct'

import HomeTop from '../components/home/homeTop'
import Footer from '../components/home/footer'
import Tool from '../components/home/tool'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,data } = this.props
    return (
      <div>

          <HomeTop/>

            注册
          <Footer/>
          <Tool/>

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
