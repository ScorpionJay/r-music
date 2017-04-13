import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

import Slider from '../components/home/slider'
import Nav from '../components/common/Nav';
import MusicList from '../components/music/musicList';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      index: 0,
    };

    this.handleChangeTabs = (value) => () => {
      this.setState({
        index: value,
      });
    };

    this.handleChangeIndex = (index) => {
      this.setState({
        index,
      });
    };

  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }

  render() {
    const { dispatch,data,login } = this.props
    const {
      index,
    } = this.state;
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}></div>
          <div style={{display:'flex',flex:2,justifyContent: 'center'}}>首页</div>
          <Link style={{display:'flex',flex:1,justifyContent: 'flex-end'}}  to='/playInfo'>...</Link>
        </div>

        <div className='homeTab'>
            <div className='homeTab1'>
              <div style={index === 0 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(0)}>个性推荐</div>
              <div style={index === 1 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(1)}>歌单</div>
              <div style={index === 2 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(2)}>主播电台</div>
              <div style={index === 3 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(3)}>排行榜</div>
            </div>
            <div className="highlight" style={{transform:`translateX(${index}00%)`}}></div>
        </div>
        

        <div className="container">
          
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div>
                <Slider data={data.slider} />
                <div className='recommod'>
                  <span>推荐歌单</span>
                  <span className='arrow-right'></span>
                </div>
                <MusicList data={data.recommendMusics}/>
            </div>
            <div>
              todo
            </div>
            <div >
              todo
            </div>
            <div >
              todo
            </div>
          </SwipeableViews>

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
