import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentDidUpdate(){
    const { dispatch ,time} = this.props
    
    if( this.props.time.changeTimeFlag ){
      this.refs.music.currentTime = this.props.time.currentTime
    }
    // alert(this.props.controll)
    switch(this.props.controll) {
      case 'play':
            if(this.props.data.currentMusic.url === '')return
            this.refs.music.play()
        break;
      case 'pause':
            this.refs.music.pause()
        break;
    }
  }

  update(){
    this.props.getCur( this.refs.music  )
  }

  render() {
      return (
        <div>
          {this.props.data.url}
          <audio src={this.props.data.currentMusic.url}  ref='music' onEnded={()=>this.props.nextMusic()} onTimeUpdate={()=>this.update()}  onCanplay={()=>alert('over')} />
        </div>
      )
  }
}

