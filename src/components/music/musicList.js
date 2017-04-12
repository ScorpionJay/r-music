import React, { Component, PropTypes } from 'react'

import MusicItem from './musicItem'

export default class partners extends Component { 



  render() {
      return (
        <div style={Styles.container}>
            {
              this.props.data.map((obj)=>
                  <MusicItem data={obj}/>
              )
            }
        </div>
      )
  }
}


const Styles = {
  container:{
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around',
  }
}
