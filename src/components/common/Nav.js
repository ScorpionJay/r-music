import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component { 

  render() {
    return (
      <nav style={Styles.nav} className='footer'>
        <Link to="/home" activeClassName="active" style={Styles.tab}><span></span>发现音乐</Link>
        <Link to="/music" activeClassName="active" style={Styles.tab}><span></span>我的音乐</Link>
        <Link to="/friend" activeClassName="active" style={Styles.tab}><span></span>朋友</Link>
        <Link to="/account" activeClassName="active" style={Styles.tab}><span></span>帐号</Link>
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
    textDecoration: 'none',
    
  }
}


