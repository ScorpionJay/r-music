
import React, { Component, PropTypes } from 'react'

export default class ProductItem extends Component { 
  render() {
      const {specialname,imgurl,intro,playcount} = this.props.data
      const imgurl2 = imgurl.replace('{size}',400)
      return (
        <div style={Styles.container}>
          <div style={Styles.img}>
            <div style={Styles.count}>{ parseInt(playcount/10000) + '万'}</div>
            <img src={imgurl2} style={Styles.img} />
          </div>
          <div style={Styles.name}>{specialname}</div>
          
        </div>
      )
  }
}

const Styles = {
  container:{
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
  img:{
    width:'9rem'
  },
  count:{
    position:'absolute',
    width:'8.5rem',
    marginTop:'.5rem',
    textAlign: 'right',
    color:'#fff',
    fontSize:'.8rem'
  }
}

