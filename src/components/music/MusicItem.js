/**
 * 歌曲列表中的一行
 **/

import { Component } from 'react'
import { browserHistory } from 'react-router'

export default class MusicItem extends Component {
  render() {
      let { index, music, currentHash } = this.props

      return (
        <div onClick={()=>browserHistory.push(`/play/${music.hash}`)}
             style={Object.assign( {}, Styles.row,  currentHash === music.hash ? {color:'rgb(206, 61, 62)'} : {} )}>

          <div>{index+1}</div>
          <div style={Styles.name}>{music.filename}</div>
        </div>
      )
  }
}

const Styles = {
	row: {
		display:'flex',
	    flexFlow:'row nowrap',
	    justifyContent:'flex-start',
	    fontSize:'1.3rem',
	    color: '#444',
	    margin:'2rem',
	    borderBottom:'1px solid #aaa'
	},
	index: {

	},
	name: {
		marginLeft: '.7rem'
	}
}
