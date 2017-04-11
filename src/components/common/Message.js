import React ,{Component} from 'react';

export default class Message extends Component {

	render() {
		return (
			<div>
			{
				this.props.data.message ? 
					<div style={  Styles.show  }>
						<div style={Styles.content}>{this.props.data.message}</div>
				  	</div> 
					:''
			}
			</div>
		)
	}

} 

const Styles = {
	show:{
	    position: 'fixed',
	    display:'flex',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    justifyContent:'center',
		alignItems:'center',
	    color: 'rgb(51, 51, 51)',
	    backgroundColor: '#b1abab',
	    zIndex: 2,
	    opacity:'.9'
	},
	content:{
		padding:'2rem',
		backgroundColor:'#fff',
		zIndex: 10,
	}
}