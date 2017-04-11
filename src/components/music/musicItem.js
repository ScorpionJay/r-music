/**
* home product item
*/

import React, { Component, PropTypes } from 'react'

// {
//               this.props.data.map((obj)=>
//                   <div>
//                     item
//                   </div>
//               )
//             }

export default class ProductItem extends Component { 
  render() {
      return (
        <div>
          {this.props.data.projectName}
        </div>
      )
  }
}



