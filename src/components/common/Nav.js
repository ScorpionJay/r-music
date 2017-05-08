/**
* 导航组件
*/

import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'

export default class Nav extends Component { 

  render() {

    const nav = [
      {to:`/discover`,name:'发现音乐'},
      {to:'/music',name:'我的音乐'},
      {to:'/friend',name:'朋友'},
      {to:'/account',name:'帐号'}
    ]
    // return (
    //   <i></i>
    // )
    return (
      <nav style={Styles.nav} className='footer'>
        {
          nav.map( (item) =>  <NavItem to={item.to} label={item.name}/> )
        }
      </nav>
    )
  }
}

const Styles = {
  nav:{
    display:'flex',
    height:'3.5rem',
    justifyContent:'space-between',
    borderTop:'1px solid #e1e1e1',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#000'
  },
  tab:{
    flex:1,
    textAlign:'center',
    lineHeight:'3.5rem',
    textDecoration: 'none'
  }
}

//<Link to={item.to} activeClassName="active" style={Styles.tab}>{match }{item.name}</Link> 

const NavItem = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}  style={Styles.tab}>
      <Link to={to}>{ label}</Link>
    </div>
  )}/>
)

