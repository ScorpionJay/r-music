/**
* Tab switching component
*/
import React, { Component } from 'react'

export  default class Tabs extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        active:this.props.active | 0 ,// default first pane
        size:this.props.size | 0 // default big size 0=big 1=small
    }
  }

  render() {
    return (
      <div  style={Styles.container}>

          <div style={Styles.controller}>
            {
              React.Children.map( this.props.children , (element,index) => {
                  let cStyle = Object.assign( {}, this.state.size===0 ? Styles.tabBig : Styles.tabSmall )
                  cStyle = Object.assign( cStyle,this.state.active===index ? (this.state.size===0 ? Styles.tabBigActive:Styles.tabSmallActive) : '' )
                  return(
                    <div style={cStyle}  key={index} onClick={()=>this.setState({active:index})}>
                      { element.props.name}
                    </div>
                  )
                }
              )
            }
          </div>

          <div style={Styles.content}>
            {
              React.Children.map( this.props.children , (element,index) => {
                  return(
                    <div key={index} style={(this.state.active!==index ? Styles.hidden :Styles.show )}>
                      { element }
                    </div>
                  )
                }
              )
            }
          </div>

      </div>
    )
  }
}

export class Tabpane extends Component {
  render(){
    return(
      <div>
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
  },
  controller:{
    display: 'flex',
    flex:1,
    justifyContent:'center',
  },
  tabBig:{
    display: 'flex',
    flex:1,
    justifyContent:'center',
    padding:'.8rem',
    color:'#333'
  },
  tabSmall:{
    display: 'flex',
    justifyContent:'center',
    padding:'.8rem',
    color:'#333'
  },
  tabBigActive:{
     borderBottom: 'solid 2px #ff7461',
  },
  tabSmallActive:{
     color: '#ff7461',
  },
  content:{
    margin:'1rem .5rem'
  },
  hidden:{
    display:'none'
  },
  show:{
    display:'block'
  }
}



