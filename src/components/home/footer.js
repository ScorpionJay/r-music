import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component { 

  render() {
      return (
          <span>
            <div className="footer-sink"></div>

            <div id="footer">
              <div className="innerbox">
                <div className="footer">
                  <div className="helpmain line">
                    <dl>
                      <dt>公司信息</dt>
                      <dd>
                        <Link to="/about/intro">关于我们</Link>
                      </dd>
                      <dd>
                        <Link to="/about/news">最新动态</Link>
                      </dd>
                    </dl>
                    <dl>
                      <dt>帮助中心</dt>
                      <dd>
                        <Link to="/guide">新手指引</Link>
                      </dd>
                      <dd>
                        <Link to="/help/account">帮助中心</Link>
                      </dd>
                      <dd>
                        <Link to="/about/contact">联系我们</Link>
                      </dd>
                    </dl>
                    <dl>
                      <dt>友情链接</dt>
                      <dd><a href="http://www.zhaolicaiwang.com/" rel="noopener" target="_blank">找理财网</a></dd>
                    </dl>
                  </div>
                  <div className="ft-contact line">
                    <h3>客服热线<span>（每日09:00~21:00）</span></h3>
                    <div className="tel">4000-858-308</div>
                    客服QQ：4000858308<br /> 客服邮箱：service@shanlinbao.com
                  </div>
                  <div className="ft-service">
                    <h3>微信公众号</h3>
                    <div>
                      <img src={require("../../images/index/weixin.jpg")} width="130" height="130" alt="微信公众号"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyrightwp">
                <div className="innerbox">
                  <div className="verification">
                    <a className="verification-item szfw" href="https://credit.szfw.org/CX20150807010661550139.html" target="_blank" rel="noopener" title="善林宝荣获中国电子商务协会“诚信网站”认证殊荣"></a>
                  </div>
                  <div className="copyright">&copy; 2015 善林宝 All rights reserved | 善林（上海）金融信息服务有限公司 | 沪ICP备14001535号-3 </div>
                </div>
              </div>
            </div>
        </span>
      )
  }
}



