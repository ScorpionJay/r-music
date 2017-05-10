import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAction,scrollTopAction } from '../actions/home'
import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import {  BrowserRouter as Router,
  Route,Link,Redirect,Switch } from 'react-router-dom'
import Beat from '../components/music/beat'
import Search from '../components/music/search'

import Recommend from './recommend'
import djradio from './djradio'
import playlist from './playlist'
import rank from './rank'

import { push } from 'react-router-redux'

const navArray = ['个性推荐','歌单','排行榜','主播电台']

class App extends Component {


  constructor(props) {
    super(props);
    let index
    switch(this.props.history.location.pathname) {
        case '/discover/recommend':
          index = 0
          break;
        case '/discover/playlist':
          index = 1
          break;
        case '/discover/rank':
          index = 2
          break;
        case '/discover/djradio':
          index = 3
          break;
      }

    this.state = {
      index: index,
      page:1
    };

    this.handleChangeTabs = (value) => () => {

const { dispatch} = this.props
      this.setState({
        index: value,
      });
      switch(value) {
        case 0:
          this.setState({flag0:true})
          setTimeout(()=> this.setState({flag0:false}),750) 
          this.props.history.push('/discover/recommend')
          // dispatch(push('/discover/recommend'))  why not working???
          break;
        case 1:
         this.setState({flag1:true})
          setTimeout(()=> this.setState({flag1:false}),750) 
          this.props.history.push('/discover/playlist')
          break;
        case 2:
         this.setState({flag2:true})
          setTimeout(()=> this.setState({flag2:false}),750) 
          this.props.history.push('/discover/rank')
          break;
        case 3:
         this.setState({flag3:true})
          setTimeout(()=> this.setState({flag3:false}),750) 
          this.props.history.push('/discover/djradio')
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

    // if( this.props.history.location.pathname.indexOf('/discover') > 0 ){
    //   this.props.history.replace('/discover/recommend')
    // }

    if( data.recommendMusics.length > 1){
      // 计算有问题
      //this.refs.container.scrollTop = scrollTop>0 ? scrollTop + this.refs.container.clientHeight / 2 - 50 : 0
    }else{
      dispatch(homeAction(data,this.state.page))
    }
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
          <Link style={{display:'flex',flex:10,justifyContent: 'center'}} to={'/search'} >
            <Search />
          </Link>
          <Link style={{display:'flex',flex:1,justifyContent: 'flex-end'}}  to='/play'>
            <Beat  beat={controll === 'play'} />
          </Link>
        </div>
          

        <div className='homeTab'>
            <div className='homeTab1'>
              {
                navArray.map( (item,i) => 
                  <div style={{position:'relative',width: '100%',height:'100%'}}>
                    <div style={ Object.assign({ display:'flex',flex:1,justifyContent: 'center',alignItems:'center'},  index === i ? { color: '#ce3d3e' } :{} )} onClick={this.handleChangeTabs(i)}>{item}</div>
                    {
                      this.state[`flag${i}`] ? <div className={this.state[`flag${i}`] ? 'ripple' : ''} style={{position: 'absolute',backgroundColor:'#999',left:0,width:'100%',height:'100%'}}></div> :''
                    }
                  </div>  
  
                )
              }
              
            </div>
            <div className="highlight" style={{transform:`translateX(${index}00%)`}}></div>
        </div>
        
       
        

        <Switch className='root'>
          <Route  path={`${this.props.match.url}/recommend`} component={Recommend} />
          <Route  path={`${this.props.match.url}/djradio`} component={djradio} />
          <Route  path={`${this.props.match.url}/playlist`} component={playlist} />
          <Route  path={`${this.props.match.url}/rank`} component={rank} />
          <Route component={Recommend}/>
         </Switch>

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