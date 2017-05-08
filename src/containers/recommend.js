import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAction,scrollTopAction } from '../actions/home'
import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import { Link } from 'react-router-dom'
import Beat from '../components/music/beat'
import Search from '../components/music/search'
import { browserHistory } from 'react-router'

class App extends Component {

  componentDidMount(){
    const { dispatch,data} = this.props
    if( !data.recommendMusics.length > 1){
     dispatch(homeAction(data,0))
    }
  }

  render() {
    const { dispatch,data,login,controll} = this.props

    return (
        <div className='container'  ref='container'>
          
          <Slider data={data.banner} />

          <div className='recommod'>
            <span style={{lineHeight: '1.6rem'}}>推荐歌单</span>
            <span className='arrow-right'></span>
          </div>
           
          <RecommendList data={data.recommendMusics.slice(0,6)} scrollTop={()=>{}}  history={this.props.history} />

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
