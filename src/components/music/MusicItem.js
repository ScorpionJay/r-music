/**
 * 歌曲列表中的一行
 **/

import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MusicItem extends Component {
  render() {
      let { index, music, currentHash } = this.props

      return (
        <Link to={`/play/${music.hash}`} 
             style={Object.assign( {}, Styles.row,  currentHash === music.hash ? {color:'rgb(206, 61, 62)'} : {} )}>

          <div style={ Styles.index }>{index+1}</div>
          <div style={Styles.name}>{music.filename}</div>
        </Link>
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
	    margin:'1rem',
	    padding:'.5rem',
	    borderBottom:'1px solid #eee'
	},
	index: {
		color:'#999',
		padingRight:'.8rem'
	},
	name: {
		marginLeft: '.7rem',
		textOverflow:'ellipsis',
	    whiteSpace:'nowrap',
	    overflow:'hidden'
	}
}
