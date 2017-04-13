import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentWillReceiveProps(){
    const { dispatch } = this.props
    this.props.play ===1 ? this.refs.music.play() : this.refs.music.pause()
    if(this.props.play ===1){
      this.timer = setInterval(
          () => {
            this.props.getCur( this.refs.music.currentTime  )
          },
          1000
      )
    }else{
      this.timer && clearTimeout(this.timer)
    }
  }

  render() {
      return (
        <div>
          <audio src={this.props.src}  ref='music' />
        </div>
      )
  }
}

