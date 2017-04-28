/**
* 搜索组件
*/

import React, { Component, PropTypes } from 'react'


export default class Search extends Component { 

  render() {
      return (
          <input placeholder='搜索音乐' style={styles.search} />
      )
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
  }
}

