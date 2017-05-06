import React, { Component, PropTypes } from 'react'
import { Link,browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { homeAction,scrollTopAction } from '../actions/home'
import { rankListAction } from '../actions/rank'

import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import Beat from '../components/music/beat'
import Search from '../components/music/search'

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(rankListAction());
    
  }

  render() {
    const { data } = this.props
    return (
      <div className="container" style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around',marginTop:'.2rem'}}>
        {data.map((obj) => 
          <div onClick={()=>browserHistory.push(`/rankinfo/${obj.rankid}`)} style={{marginBottom:'1rem'}}>
            <img src={obj.imgurl.replace('{size}', '400')} style={{width:'9rem'}}/>
            <div>{obj.rankname}</div>
          </div>
        )}
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.rank.list,
  }
}

export default connect(map)(App)
