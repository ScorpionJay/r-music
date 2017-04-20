/**
* 音乐按钮组件
*/

import React, { Component, PropTypes } from 'react'

import './musicBtn.scss'

export class PlayBtn extends Component { 
  render() {
      return (
        <div className='musicBtn'>
          <div className='music'>
            <div className='play-arrow'></div>
          </div>
        </div>
      )
  }
}

export class StopBtn extends Component { 
  render() {
      return (
        <div className='musicBtn'>
          <div className='music'>
            <div className='stop-line'></div>
            <div className='stop-line'></div>
          </div>
        </div>
      )
  }
}

export class NextBtn  extends Component { 
  render() {
      return (
        <div className='musicBtn'>
          <div className='music3'>
            <div className='vertical-line'></div>
            <div className='right-arrow'></div>
          </div>
        </div>
      )
  }
}

export class PreBtn extends Component { 
  render() {
      return (
        <div className='musicBtn'>
          <div className='music3'>
            <div className='left-arrow'></div>
            <div className='vertical-line'></div>
          </div>
        </div>
      )
  }
}

export class ListBtn extends Component { 
  render() {
      return (
        <div className='musicBtn'>
          <div className='music2'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>
      )
  }
}

