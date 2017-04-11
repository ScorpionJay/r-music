/**
* Collapse component TODO
*/
import React, { Component } from 'react'

export  default class Collapse extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        active:this.props.active | 0 ,// default first pane
    }
  }

  render() {
    return (
      <div  style={Styles.container}>

            {
              React.Children.map( this.props.children , (element,index) => {

                  let cStyle = Object.assign( {},cStyle,this.state.active===index ? Styles.active : '' )

                  return(
                    <div key={index} style={Styles.controller}>
                      <div style={cStyle}   onClick={()=>this.setState({active:index})}>
                        {`${index+1}.  `}{ element.props.name}
                      </div>
                      <div  style={(this.state.active!==index ? Styles.hidden :Styles.show )}>
                        { element }
                      </div>
                    </div>
                  )
                }
              )
            }

      </div>
    )
  }
}

export class Panel extends Component {
  render(){
    return(
      <div style={Styles.panel}>
       {this.props.children}
      </div>
    )
  }
}

const Styles = {
  container:{
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',  
    fontSize: '1.2rem', 
    color:'#333',
    backgroungColor: '#f0f0f0',
    padding:'1rem'
  },
  controller:{
    flex:1,
    padding:'1rem',
    border:'1px solid #eee',
    color:'#999'
  },
  active:{
     color: '#333',
  },
  content:{
    margin:'1rem .5rem'
  },
  hidden:{
    display:'none'
  },
  show:{
    display:'block'
  },
  panel:{
    padding:'2rem .8rem'
  }
}



