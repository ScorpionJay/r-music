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
            data.map((item) => <div style={{height:360}}><SliderItem {...item}/></div>)
          }
        </Slider>

        <div className="hd"><ul></ul></div>
          <a className="prev" onClick={()=>this.slider.slickPrev()}></a>
          <a className="next" onClick={()=>this.slider.slickNext()}></a>
          <div className="regbox  animated">
            <div className="con">
              <div className="headline">安心、稳盈、随时投</div>
              <div className="rate">预期年化收益 <span className="big">8%-10%</span></div>
              <div className="point">平台成立至今100%兑付</div>
            </div>
            <div className="btn">
              <Link to="/register" className="ui-btn">注册送红包</Link>
            </div>
            <div className="regbtn">
              已有账号？<Link to="login">马上登录</Link>
            </div>
        </div>

      </div>
    )
  }
}


class SliderItem extends Component { 
  render() {
    return (
      <a href={this.props.link} target='_blank' rel="noopener">
        <img src={this.props.img} />
      </a>
    )
  }
}