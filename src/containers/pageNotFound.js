import React, { Component} from 'react'
import { Link } from 'react-router'

export default class PageNotFound extends Component {
  render() {
    return (
          <div style={Styles.container}>
                <p>您访问的页面不存在</p>
                <Link to="/" style={Styles.back}>返回首页</Link>
          </div>
    )
  }
}

const Styles = {
  container:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'1.5rem',
    flexDirection: 'column',
    color:'rgb(206, 61, 62)'
  },
  back:{
    color:'rgb(253, 5, 6)'
  }
} 
