import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentDidUpdate(){
    const { dispatch ,time} = this.props
    
    // 播放状态 play pause 
    this.timer && clearTimeout(this.timer)
    if( this.props.time.changeTimeFlag ){
      this.refs.music.currentTime = this.props.time.currentTime
    }

    switch(this.props.controll) {
      case 'play':
            this.refs.music.play()
            this.timer = setInterval(
              () => {
                if( this.refs.music.currentTime === this.refs.music.duration ){
                  this.timer && clearTimeout(this.timer)
                }else{
                  this.props.getCur( this.refs.music  )
                }
              },
              100
            )
        break;
      case 'pause':
            this.refs.music.pause()
            this.timer && clearTimeout(this.timer)
        break;
    }




  }

  render() {
      return (
        <div>
          {this.props.data.url}
          <audio src={this.props.data.currentMusic.url}  ref='music' />
        </div>
      )
  }
}

