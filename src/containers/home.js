import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Slider from '../components/home/slider'

import Nav from './nav'
import Footer from '../components/home/footer'
import Tool from '../components/home/tool'
import Product from '../components/home/product'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,data,login } = this.props
    return (
      <div>

          <Nav/>

          <Slider data={data.slider} />

          <div className="hd">
            <div className="innerbox clearfix">
              <div className="indexleft">
                  <Product data={data.products}/>
              </div>

            </div>
          </div>

          <Footer/>
          <Tool/>

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
