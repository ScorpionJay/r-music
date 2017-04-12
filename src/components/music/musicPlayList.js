import React, { Component, PropTypes } from 'react';

export default class partners extends Component { 
  render() {
      let {specialname,intro,imgurl,playcount} = this.props.data.info
      let imgU = imgurl.replace('{size}',400)
      return (
        <div style={Styles.container}>
            <div>
              <div style={Styles.intro}>
                  <div>
                    <img src={imgU} style={Styles.introImg} />
                  </div>
                  <div style={Styles.introName}>{specialname}</div>
              </div>
              <div style={Object.assign(Styles.mask,{backgroundImage:`url(${imgU})`} ) }>
            </div>

            </div>

            {
              this.props.data.list.map((obj,index)=>
                  <Item index={index+1}  {...obj} />
              )
            }
        </div>
      )
  }
}

class Item extends Component { 
  render() {
      const {filename,imgurl,intro,playcount,specialid,index} = this.props;
      return (
        <div style={Styles.ItemContainer}>
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
    // filter: 'blur(.1rem)'
    zIndex:'2',
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
    height:'13rem',
    width:'100%',
    filter: 'blur(80px)',
    zIndex:'1',
    marginTop:'-15rem'
  },
  ItemContainer:{
    display: 'flex',
    flex:1,
    padding:'1rem',
  },
  index:{
    padding:'0 .6rem'
  },
  name:{
    display:'flex',
    flex:1,
  },
  name:{
    borderBottom:'.1rem solid #333'
  }
}