import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component { 

  render() {
    return (
      <nav style={Styles.nav}>
        <Link to="/home" activeClassName="active" style={Styles.tab}><span></span>精选</Link>
        <Link to="/inverst" activeClassName="active" style={Styles.tab}><span></span>投资</Link>
        <Link to="/asset" activeClassName="active" style={Styles.tab}><span></span>资产</Link>
        <Link to="/me" activeClassName="active" style={Styles.tab}><span></span>我</Link>
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
    color: '#787878',
    backgroundColor: '#fff'
  },
  tab:{
    flex:1,
    textAlign:'center',
    lineHeight:'30px',
    textDecoration: 'none',
    
  }
}


