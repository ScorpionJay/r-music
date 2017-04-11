import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomeTop extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      weixin:false,
      li:false,
      account:false
    };
  }

  render() {
      return (
        <div className="header">

            <div className="topbar">
              <div className="innerbox">
                <ul className="topbarl dropdownmenuUl">
                  <li><Link className="mobile" to="mobile" >移动客户端</Link></li>
                  <li onMouseEnter={()=>this.setState({weixin:true})}  onMouseLeave={()=>this.setState({weixin:false})} className={this.state.weixin?'on' : ''}><a className="weixin" >微信{this.state.weixin}</a>
                    <div  className={!this.state.weixin?'popmain popmainHide' : 'popmain'} >
                      <em className="arrow"></em> <em className="arrow-over"></em>
                      <div className="popcontent">
                        <div className="WeiXinBox">
                          <img alt="关注善林宝微信" src={require("../../images/index/weixin.jpg")} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><i className="customservice" href="javascript:;">4000-858-308</i></li>
                </ul>
                <ul className="topbarr">
                  <li><Link to="/help/account">帮助中心</Link></li>
                  <li>|</li>
                  <li><Link to="/safe">安全保障</Link></li>
                  <li>|</li>
                  <li><Link to="/about/intro">关于我们</Link></li>
                  <li className="tip">市场有风险  投资需谨慎</li>
                </ul>

                </div>
            </div>

            <div className="hdmain">
              <div className="innerbox">
                <Link to="/" className="logo" />

                {
                  this.props.login ? 
                  (
                    <ul className="loginin dropdownmenuUl">
                      <li onMouseEnter={()=>this.setState({account:true})}  onMouseLeave={()=>this.setState({account:false})}><a className="text_overflow" >SLCF_000010000176<span className="arrow-down"></span></a>
                        <div  className="popmain" style={{display: this.state.account ? 'block':'none' }}>
                          <a href="user_message.html">消息 <span className="UnreadMessage">(3)</span></a>
                          <a href="user_bank_recharge.html">充值</a>
                          <a href="user_bank_withdrawals.html">提现</a>
                          <a onClick={()=>this.props.logout()}>退出</a>
                        </div>
                      </li>
                    </ul>  
                  )
                  :
                  (
                    <ul className="loginbox">
                      <li><Link to="/login">登录{}</Link></li>
                      <li className="last"><Link to="register">注册</Link></li>
                    </ul>
                  )
                }
                
                <ul className="topnav dropdownmenuUl">
                  <li className="current"><Link to="/">首页</Link></li>
                  <li onMouseEnter={()=>this.setState({li:true})}  onMouseLeave={()=>this.setState({li:false})}><a href="javascript:;">我要理财<span className="arrow-down"></span></a>
                    <div  className="popmain" style={{display: this.state.li ? 'block':'none' }}>
                      <a href="loan4.html">U融宝<span></span></a>
                      <a href="loan2.html">体验宝</a>
                    </div>
                  </li>
                  <li><Link to="/guide">新手指引</Link></li>
                  <li><Link to="/account/user">我的账户</Link></li>
                </ul>
                
              </div>
            </div>


          </div>
      )
  }
}



