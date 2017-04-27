import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router'

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
        <Slider {...settings} ref={c=> this.slider =c} >
          {
            data.map((item) => <div><SliderItem {...item}/></div>)
          }
        </Slider>
      </div>
    )
  }
}

class SliderItem extends Component { 
  render() {
    return (
      <a href={this.props.extra.innerurl} target='_blank' rel="noopener">
        <img src={this.props.imgurl} />
      </a>
    )
  }
}