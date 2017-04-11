import React, { Component} from 'react'
import { Link } from 'react-router'

export default class PageNotFound extends Component {
  render() {
    return (
      <div className='notFound'>
          <div id="header">
            <div className="headermain">
                <div className="innerbox">
                    <a className="logo" href="/"><img alt="善林宝" src={require("../images/index/logo.png")}/></a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="innerbox">
              <div className="errorpage">
                <img alt="404错误页" src={require("../images/common/404.png")} className="fl"/>
                <p className="title">您访问的页面不存在</p>
                <p className="info">可能该服务已经过期，或者您输入的地址有误。<br/>返回<Link className="btn" to="/">善林宝首页</Link></p>
              </div>
            </div>
          </div>
          <div id="sink-footer"></div>
          <div className="footer">
            <div className="innerbox">
              <div className="copyright">
                &copy; 2015 善林宝 All rights reserved | 善林（上海）金融信息服务有限公司 | 沪ICP备xxxxxxx号
              </div>
            </div>
          </div>

      </div>
    )
  }
}

const Styles = {

} 
