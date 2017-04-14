import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentDidUpdate(){
    const { dispatch } = this.props

    // 播放状态 play pause 
    this.timer && clearTimeout(this.timer)
    switch(this.props.play) {
      case 'play':
            
            // 有卡顿现象，这里需要判断 TODO
            this.refs.music.currentTime = this.props.time
           
            this.refs.music.play()
            this.timer = setInterval(
              () => {
                if( this.refs.music.currentTime === this.refs.music.duration ){
                  this.timer && clearTimeout(this.timer)
                }else{
                  this.props.getCur( this.refs.music  )
                }
              },
              1000
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
          <audio src={this.props.src}  ref='music' />
        </div>
      )
  }
}

