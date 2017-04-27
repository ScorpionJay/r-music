/**
* 推荐歌单组件
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

/**
* 推荐歌单列表
*/
export default class MusicList extends Component { 
  render() {
      return (
        <div>
          {
            this.props.data.length === 1 ?
              <div></div>
            : 
              <div>
                <div className='recommod'>
                  <span style={{lineHeight: '1.6rem'}}>推荐歌单</span>
                  <span className='arrow-right'></span>
                </div>
                <div style={Styles.container}>
                  {
                    this.props.data.map((obj)=> <MusicItem data={obj} scrollTop={this.props.scrollTop} /> )
                  }
                </div>
              </div>
          }
        </div>
      )
  }
}

/**
* 推荐歌单详情
*/
class MusicItem extends Component { 

  goAlbum(){
    this.props.scrollTop()
    browserHistory.push(`album/${this.props.data.specialid}`)
  }

  render() {
      const {specialname,imgurl,intro,playcount,specialid} = this.props.data;
      const imgurl2 = imgurl.replace('{size}',400);
      return (
        <div style={Styles.containerItem} onClick={()=>this.goAlbum()}>
          <div style={Styles.item}>
            <div style={Styles.count}>{ parseInt(playcount/10000) + '万'}</div>
            <img src={imgurl2} style={Styles.img} />
            <div style={Styles.name}>{specialname}</div>
          </div>
          
        </div>
      )
  }
}


const Styles = {
  container:{
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around',
  },
  containerItem:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    color:'#333',
    backgroungColor: '#f0f0f0',
    marginBottom:'1rem'
  },
  name:{
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize:'1rem',
    width:'9rem'
  },
  item:{
    position: 'relative'
  },
  img:{
    width:'9rem',
  },
  count:{
    position:'absolute',
    width:'100%',
    textAlign: 'right',
    color:'#fff',
    top:0,
    left:0,
    fontSize:'.8rem',
    backgroundColor:'rgba(153, 153, 153, 0.4)'
  }
}