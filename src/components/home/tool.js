/** 
*  工具组件
**/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Tool extends Component { 

  constructor(props) {
    super(props);
  
    this.state = {
    };

  }

  /** 
  * 回到页面顶部  替换window.scrollTo(0,0) ref http://www.jb51.net/article/56318.htm
  * @param acceleration 加速度 
  * @param time 时间间隔 (毫秒) 
  **/
  goTop(that,acceleration,time) { 
      var that = this;
      acceleration = acceleration || 0.1; 
      time = time || 16; 
       
      var x1 = 0; 
      var y1 = 0; 
      var x2 = 0; 
      var y2 = 0; 
      var x3 = 0; 
      var y3 = 0; 
       
      if (document.documentElement) { 
        x1 = document.documentElement.scrollLeft || 0; 
        y1 = document.documentElement.scrollTop || 0; 
      } 
      if (document.body) { 
        x2 = document.body.scrollLeft || 0; 
        y2 = document.body.scrollTop || 0; 
      } 
      var x3 = window.scrollX || 0; 
      var y3 = window.scrollY || 0; 
       
      // 滚动条到页面顶部的水平距离 
      var x = Math.max(x1, Math.max(x2, x3)); 
      // 滚动条到页面顶部的垂直距离 
      var y = Math.max(y1, Math.max(y2, y3)); 
       
      // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小 
      var speed = 1 + acceleration; 
      window.scrollTo(Math.floor(x / speed), Math.floor(y / speed)); 
       
      // 如果距离不为零, 继续调用迭代本函数 
      if(x > 0 || y > 0) { 
        setTimeout(function(){
          that.goTop(this,acceleration,time)
        }, time); 
      } 
  } 

  render() {
      return (
          <div >
            <ul className="toolbars">
              <li onMouseEnter={()=>this.setState({cur1:true})}  onMouseLeave={()=>this.setState({cur1:false}) } className={this.state.cur1? 'cur':''} >
                <Link className="toolbars-title tbcalculator" to="calculator">收益<br/>计算</Link>
              </li>
              <li onMouseEnter={()=>this.setState({cur2:true})}  onMouseLeave={()=>this.setState({cur2:false}) } className={this.state.cur2? 'cur':''}  >
                <Link className="toolbars-title tbmobile" to="mobile">移动<br/>客户端</Link>
              </li>
              <li onMouseEnter={()=>this.setState({cur3:true})}  onMouseLeave={()=>this.setState({cur3:false}) } className={this.state.cur3? 'cur':''} >
                <a className="toolbars-title tbservice" href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAyMTgwMl8zMDYzNzVfNDAwMDg1ODMwOF8yXw" target="_blank" rel="noopener">在线<br/>客服</a>
                <div className="toolmain">
                  每周一至周日9：00~21：00
                </div>
              </li>
              <li onMouseEnter={()=>this.setState({cur4:true})}  onMouseLeave={()=>this.setState({cur4:false}) } className={this.state.cur4? 'cur':''} >
                <a className="toolbars-title tbfeedback" id="FeedbackBtn" href="javascript:;">意见<br/>反馈</a>
              </li>
              <li onMouseEnter={()=>this.setState({cur5:true})}  onMouseLeave={()=>this.setState({cur5:false}) } className={this.state.cur5? 'cur':''} >
                <a className="toolbars-title tbgototop" id="gototop" onClick={this.goTop.bind(this)}>回到<br/>顶部</a>
              </li>
            </ul>
          </div>
      )
  }
}



