import React, { Component, PropTypes } from 'react';

export default class Audio extends Component { 
  
  componentDidUpdate(){
    const { dispatch ,time} = this.props
    
    if( this.props.time.changeTimeFlag ){
      this.refs.music.currentTime = this.props.time.currentTime
    }

    switch(this.props.controll) {
      case 'play':
            if(this.props.data.url === '')return
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
          <audio 
            src={this.props.data.url}
            ref='music'
            onEnded={()=>this.props.changeMusic()} 
            onTimeUpdate={()=>this.update()}  />
        </div>
      )
  }
}

