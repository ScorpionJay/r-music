import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { rankInfoAction } from '../actions/rank'
import MusicItem from '../components/music/MusicItem'
import Beat from '../components/music/beat'

class Rank extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { dispatch,params } = this.props;
    dispatch(rankInfoAction(this.props.match.params.rankid))
  }
//<img src={data.info.imgurl.replace('{size}','400')} style={{width:'100%'}}/>
  render() {
    const { data,currentHash,controll } = this.props;
    let url = data.info.imgurl.replace('{size}','400')
    return (
      <div className="root">
        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <span onClick={()=>this.props.history.goBack()}>返回</span>
          <div style={{fontSize:'1.2rem'}}>{data.info.rankname}</div>
          <Link  to='/play'>
            <Beat  beat={controll === 'play'} />
          </Link>
        </div>
        <div className="container">
          <div style={{height:'17rem',backgroundSize:'cover',backgroundPosition:'center',backgroundImage:`url(${url})`}}>
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
    controll:state.music.controll
  }
}

export default connect(map)(Rank)
