import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAction,scrollTopAction } from '../actions/home'
import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import { Link } from 'react-router'
import Beat from '../components/music/beat'
import Search from '../components/music/search'
import { browserHistory } from 'react-router'

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      index: 0,
      page:1
    };

    this.handleChangeTabs = (value) => () => {
      this.setState({
        index: value,
      });
      switch(value) {
        case 0:
          browserHistory.push('/discover/recommend')
          break;
        case 1:
          browserHistory.push('/discover/playlist')
          break;
        case 2:
          browserHistory.push('/discover/rank')
          break;
        case 3:
          browserHistory.push('/discover/djradio')
          break;
      }
    };

    this.handleChangeIndex = (index) => {
      this.setState({
        index,
      });
    };

  }

  componentDidMount(){
    const { dispatch,data,scrollTop } = this.props
    if( data.recommendMusics.length > 1){
      // 计算有问题
      //this.refs.container.scrollTop = scrollTop>0 ? scrollTop + this.refs.container.clientHeight / 2 - 50 : 0
    }else{
      dispatch(homeAction(data,this.state.page))
    }
  }

  // 记录当前div滚动高度，以便返回时复原
  scrollTopHandler(){
    const { dispatch } = this.props
    dispatch(scrollTopAction(this.refs.container.scrollTop))
  }

  // scroll(){
  //   const { dispatch,data } = this.props
  //   // console.log('offsetHeight',this.refs.container.offsetHeight)
  //   // console.log('scrollHeight',this.refs.container.scrollHeight)
  //   // console.log('clientHeight',this.refs.container.clientHeight)
  //   // console.log('scrollTop',this.refs.container.scrollTop)    
    
  //   if( this.refs.container.scrollTop + this.refs.container.clientHeight ===  this.refs.container.scrollHeight){
  //     // 这里有问题
  //     dispatch(homeAction(data,this.state.page+1))
  //     this.setState({page:this.state.page+1})
  //   }
  // }

  gotoSearch(){
     browserHistory.push('search')
  }

  render() {
    const { dispatch,data,login,controll} = this.props
    const {
      index,
    } = this.state;
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}></div>
          <div style={{display:'flex',flex:10,justifyContent: 'center'}} onClick={()=>this.gotoSearch()}>
            <Search />
          </div>
          <Link style={{display:'flex',flex:1,justifyContent: 'flex-end'}}  to='/play'>
            <Beat  beat={controll === 'play'} />
          </Link>
        </div>

        <div className='homeTab'>
            <div className='homeTab1'>
              <div style={index === 0 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(0)}>个性推荐</div>
              <div style={index === 1 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(1)}>歌单</div>
              <div style={index === 2 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(2)}>排行榜</div>
              <div style={index === 3 ? { color: '#ce3d3e' } :{}} onClick={this.handleChangeTabs(3)}>主播电台</div>
            </div>
            <div className="highlight" style={{transform:`translateX(${index}00%)`}}></div>
        </div>
        
        {this.props.children}

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.home,
    scrollTop: state.home.scrollTop,
    login: state.login.login,
    controll:state.music.controll
  }
}

export default connect(map)(App)
