/**
* 轮播组件
*/ 

import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component { 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:true,
      arrows:false,
      lazyLoad:true
    }
      
    const { data } = this.props
    return (
      <div className='fullSlide'>
        {
          data.length === 0 ? '' :
            <Slider {...settings}  >
              {
                data.map((item) => <div><SliderItem {...item}/></div> )
              }
            </Slider>
        }
      </div>
    )
  }
}

/**
* 轮播子组件
*/
class SliderItem extends Component { 
  render() {
    return (
      <a href={this.props.extra.innerurl} target='_blank' rel="noopener">
        <img src={this.props.imgurl} />
      </a>
    )
  }
}