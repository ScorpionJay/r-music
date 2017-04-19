/**
* 跳动组件
*/

import React, { Component, PropTypes } from 'react'

import './beat.scss'

export default class Beat extends Component { 

  render() {
    console.log(this.props.beat)
      return (
        <div className={ this.props.beat ? 'beat t' : 'beat' }>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
  }
}


