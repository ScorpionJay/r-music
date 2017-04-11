import React, { Component, PropTypes } from 'react'

import ProductItem from './productItem'

export default class partners extends Component { 

  render() {
      return (
        <div>
          <div className="homeproducts">
            <div className="box module rzb">
              <a href="/lease/list">
                <div className="lie5">
                  <div className="Limit">当日计息，<br />平台贴息！</div>
                  优质债权，信息透明更可靠
                </div>            
              </a>
           
              

            <div className="pro">
            <div className="tit"><h3>优选融租</h3><span>投资当日计息，募集期平台贴息!</span></div>

            <div className="loading" style={{display:'none'}}></div>


            <ProductItem data={this.props.data}/>

    
            <div className=" last">
              <div className="btn">
                <a href="loan4_detail.html" className="ui-btn">查看全部项目</a>
              </div></div>
                
            
          </div>


          </div>

          </div>
       




          <div className="homeproducts">
            <div className="box module tyb">
              <div className="lie">
                专享投资，收益日结
              </div>
              <div className="pro">
                <div className="tit"><h3>活动专享</h3><span>298592人已购买</span></div>
                <div className="con">
                  <div className="boxline rate">
                    <div className="name">年化收益</div>
                    <div className="cont">8.0%</div>
                  </div>
                  <div className="boxline date">
                    <div className="name">投资期限</div>
                    <div className="cont">10天</div>
                  </div>
                  <div className="boxline money">
                    <div className="name">剩余金额</div>
                    <div className="cont">144,921,194 元</div>
                  </div>
                  <div className="btn">
                    <a href="#" className="ui-btn">立即购买</a>
                    <div className="progress">
                      <div className="bar_bg">
                        <div  className="bar_con"></div>
                      </div>
                      <div className="bar_num">26%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      )
  }
}



