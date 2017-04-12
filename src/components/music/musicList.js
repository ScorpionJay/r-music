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
    alignItems:'flex-start',
    justifyContent: 'space-around',
    color:'#333',
    backgroungColor: '#f0f0f0',
  },

}
