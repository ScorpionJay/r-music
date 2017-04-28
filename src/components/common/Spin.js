import React ,{Component} from 'react'

export default class Spin extends Component {

	render() {
		return (
			<div>
				{
					this.props.spin ? 
					<div style={Styles.container}>
						<div style={ Styles.show  }>Loading...</div>
					</div>
					:
					''
				}
			</div>
		)
	}
} 

const Styles = {
	container:{
		position: 'fixed',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    zIndex: 9999,
	},
	show:{
	    display:'flex',
	   	height:'100%',
	   	margin: '0 auto',
	   	maxWidth: '640px',
	    justifyContent:'center',
		alignItems:'center',
	    color: 'rgb(51, 51, 51)',
	    backgroundColor: '#b1abab',
	    opacity:'0.8'
	}
}