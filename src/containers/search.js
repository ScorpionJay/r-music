import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchAction } from '../actions/search'
import Slider from '../components/common/slider'
import Nav from '../components/common/Nav'
import RecommendList from '../components/music/recommendList'
import { Link } from 'react-router'
import Beat from '../components/music/beat'
import Search from '../components/music/search'
import { browserHistory } from 'react-router'

class SearchApp extends Component {

  componentDidMount(){
    this.refs.search.focus()
  }

  searchHandler(){
    const { dispatch,data } = this.props
    dispatch(searchAction( this.refs.search.value , 1 ))
  }

  render() {
    const { search } = this.props

    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div onClick={()=>this.back()} style={{display:'flex',flex:1}}></div>
          <div style={{display:'flex',flex:10,justifyContent: 'center'}}>
             <input placeholder='搜索音乐' style={styles.search} ref='search' onChange={ () => this.searchHandler() } />
          </div>
          <div style={{display:'flex',flex:1,justifyContent: 'flex-end'}}  onClick={() => browserHistory.goBack()}>
            取消
          </div>
        </div>

        <div className="container" >
          {
            search.length === 0 ? 
              <div></div>
              : 
              search.map(
                (item) =>
                <Item {...item} />
              )
          }
        </div>

        <Nav/>

      </div>
    )
  }
}

class Item extends Component { 

  gotoPlay(){
    const {hash} = this.props;
    browserHistory.push(`play/${hash}`)
  }

  render() {
      const {filename} = this.props;
      return (
        <div style={ styles.item } onClick={()=>this.gotoPlay()}>{filename}</div>
      )
  }
}

function map(state) {
  return {
    data: state.home.home,
    scrollTop: state.home.scrollTop,
    login: state.login.login,
    controll:state.music.controll,
    search:state.search.search
  }
}

const styles = {
  search:{
    width:'100%',
    borderRadius:'1rem',
    border:'.1rem solid #fff',
    height:'1.5rem',
    paddingLeft:'1rem',
    color:'#333'
  },
  item:{
    padding:'1rem',
    borderBottom:'.03rem solid #eee',
    margin:'0 1rem'
  }
}

export default connect(map)(SearchApp)
