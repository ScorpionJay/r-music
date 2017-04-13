import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentWillReceiveProps(){
    const { dispatch } = this.props
    this.props.play ===1 ? this.refs.music.play() : this.refs.music.pause()
  }

  render() {
      return (
        <div>
          <audio src={this.props.src}  ref='music' />
        </div>
      )
  }
}

