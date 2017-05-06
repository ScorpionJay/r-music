/**
* 专辑组件
*/

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import MusicItem from './MusicItem'

/**
* 专辑列表
*/
export default class Album extends Component { 

  render() {
      let {specialname,intro,imgurl,playcount} = this.props.data.info
      let imgU = imgurl.replace('{size}',400)
      return (
        <div style={Styles.container}>
            <div style={Object.assign(Styles.mask,{backgroundImage:`url(${imgU})`} ) }></div>
            <div style={Styles.intro}>
                <div>
                  <img src={imgU} style={Styles.introImg} />
                </div>
                <div style={Styles.introName}>{specialname}</div>
            </div>
            <div>
              {
                this.props.data.list.length === 0 ? '' :
                this.props.data.list.map((obj,index)=>
                    <MusicItem index={index} music={obj} currentHash={this.props.currentHash}/>
                )
              }
            </div>
        </div>
      )
  }
}

/**
* 专辑详情
*/
class Item extends Component { 

  addMusic(){
    const {filename,imgurl,intro,playcount,hash,index} = this.props;
    this.props.addMusic({
      hash,name:filename
    })
  }

  render() {
      const {filename,imgurl,intro,playcount,hash,index,currentHash} = this.props;
      return (
        <div style={Object.assign( {},Styles.ItemContainer,  currentHash === hash ? {color:'rgb(206, 61, 62)'} : {} )}  onClick={()=> this.addMusic() } >
          <div style={Styles.index}>{index}</div>
          <div style={Styles.name}>{filename}</div>
        </div>
      )
  }
}

const Styles = {
  container:{
    display: 'flex',
    flex:1,
    flexDirection: 'column',
  },
  intro:{
    display:'flex',
    padding:'1rem',
    marginTop:'-13rem',
    zIndex: 2
  },
  introImg:{
    width:'12rem',
  },
  count:{
    position:'absolute',
    width:'11rem',
    marginTop:'.5rem',
    textAlign: 'right',
    color:'#fff',
    fontSize:'.8rem'
  },
  introName:{
    padding:'1rem'
  },
  mask:{
    height:'13.5rem',
    width:'100%',
    filter: 'blur(60px)',
  },
  ItemContainer:{
    display: 'flex',
    flex:1,
    padding:'1rem',
    color:'#333'
  },
  index:{
    padding:'1rem .6rem',
    fontSize:'1.2rem'
  },
  name:{
    display:'flex',
    flex:1,
    borderBottom:'.1rem solid #333',
    padding:'1rem .2rem',
    marginLeft:'1rem'
  }
}