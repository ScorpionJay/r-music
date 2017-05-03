/**
* 导航组件
*/

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component { 

  render() {

    const nav = [
      {to:'home',name:'发现音乐'},
      {to:'music',name:'我的音乐'},
      {to:'friend',name:'朋友'},
      {to:'account',name:'帐号'}
    ]

    return (
      <nav style={Styles.nav} className='footer'>
        {
          nav.map( (item) =>  <Link to={item.to} activeClassName="active" style={Styles.tab}><span></span>{item.name}</Link> )
        }
      </nav>
    )
  }
}

const Styles = {
  nav:{
    display:'flex',
    height:60,
    justifyContent:'space-between',
    borderTop:'1px solid #e1e1e1',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#000'
  },
  tab:{
    flex:1,
    textAlign:'center',
    lineHeight:'60px',
    textDecoration: 'none'
  }
}


