/**
* home product item
*/

import React, { Component, PropTypes } from 'react'

export default class ProductItem extends Component { 
  render() {
      return (
        <div>
            {
              this.props.data.map((obj)=>
                 <div className="con">
                    <div className="titPro">
                      <h3><span className="text_overflow">{obj.projectName}</span></h3>
                      <span className="ev_x">新手专享</span>
                    </div>
                    <div className="boxline rate">
                      <div className="name">年华收益</div>
                      <div className="cont">
                        <span className="text">{(obj.yearRate*100).toFixed(2)}%<span className="include">+{(obj.awardRate*100).toFixed(2)}%</span></span>
                      </div>
                    </div>
                    <div className="boxline date">
                      <div className="name">投资期限</div>
                      <div className="cont">{obj.typeTerm + obj.termUnit}</div>
                    </div>
                    <div className="boxline money">
                      <div className="name">到期还本付息</div>
                      <div className="cont">{obj.repaymnetMethod}</div>
                    </div>
                    <div className="btn">
                      <a href="#" className="ui-btn">立即购买</a>
                      <div className="progress">
                        <div className="bar_bg">
                          <div  className="bar_con" style={{width: obj.investScale*100 + '%'}}></div>
                        </div>
                        <div className="bar_num">76%</div>
                      </div>
                    </div>
                  </div>
              )
            }
        </div>
      )
  }
}



