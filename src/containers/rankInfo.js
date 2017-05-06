import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link,browserHistory } from 'react-router'

import { rankInfoAction } from '../actions/rank'

import MusicItem from '../components/music/MusicItem'

class Rank extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { dispatch,params } = this.props;
    dispatch(rankInfoAction(params.rankid))
  }

  render() {
    const { data,currentHash } = this.props;
    return (
      <div className="root">
        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <span onClick={()=>browserHistory.goBack()}>返回</span>
          <div style={{fontSize:'1.2rem'}}>{data.info.rankname}</div>
          <div></div>
        </div>
        <div className="container">
          <div style={{width:'100%',height:'17rem',overflow:'hidden'}}>
            <img src={data.info.imgurl.replace('{size}','400')} style={{width:'100%',marginTop:'-5rem'}}/>
          </div>
          <div>
            { data.songs.list.map( (obj,index) => <MusicItem index={index} music={obj} currentHash={currentHash} /> ) }
          </div>
        </div>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.rank.info,
    currentHash: state.music.currentMusic.hash,
  }
}

export default connect(map)(Rank)
