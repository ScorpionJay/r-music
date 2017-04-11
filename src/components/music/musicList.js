import React, { Component, PropTypes } from 'react'

import MusicItem from './musicItem'

export default class partners extends Component { 

  render() {
      return (
        <div>
            {
              this.props.data.map((obj)=>
                  <MusicItem data={obj}/>
              )
            }
        </div>
      )
  }
}



