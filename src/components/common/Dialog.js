import React ,{Component} from 'react'

export default class Dialog extends Component {

	fnConfirm(){
	    if( this.props.fnConfirm )
	       this.props.fnConfirm()
	}

	fnCancle(){
		if( this.props.fnCancle )
	       this.props.fnCancle()
	}

	render() {
		return (
			<div>
			{
				this.props.data.message ? 
					<div style={  Styles.show  }>
						<div style={Styles.content}>
							{this.props.data.message}
							<div style={Styles.footer}>
								<div style={Styles.btn}  onClick={this.fnConfirm.bind(this)}>确认</div>
								<div style={Styles.btn} onClick={this.fnCancle.bind(this)}>取消</div>
							</div>
						</div>
						
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
		flexDirection: 'column',
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
		padding:'1.5rem 2rem',
		backgroundColor:'#fff',
		zIndex: 10,
		minWidth:'10rem',
		textAlign:'center',
		fontSize:'1.4rem'
	},
	footer:{
		display:'flex',
		justifyContent:'space-around',
		marginTop:'1rem'
	},
	btn:{
		display:'flex',
		backgroundColor:'#999',
		justifyContent:'center',
		padding:'.4rem 1rem',
		color:'#fff',
		fontSize:'1rem'
	}
}