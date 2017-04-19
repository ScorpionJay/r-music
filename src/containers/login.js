import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginFetch } from '../actions/login'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import {alert} from '../actions/message'

class Login extends Component {

  login(e){
    const { dispatch } = this.props
    // validate
    if(  !this.refs.username.value ){
      dispatch(alert('请输入用户名'))
      return
    }else if(  !this.refs.password.value ){
      dispatch(alert('请输入密码'))
      return
    }
    
    const page = this.props.params.page
    dispatch(loginFetch(this.refs.username.value,this.refs.password.value,()=>{
      browserHistory.push(page ? page.replace(/-/g,'/') : '/')
    }))
  }

  render() {
    const { dispatch,data,message } = this.props
    return (
      <div className='loginC'>

           <div className="container">
            <div className="innerbox">
              <div className="login clearfix">
                <div className="logForm">
                    <ul>
                      <li className="formgroup">
                        <div className="forminput">
                          <span className="login-form-username"></span><input className="input" type="text" name="user_name" placeholder="请输入手机号" maxLength="11" ref='username'/>
                        </div>
                      </li>
                      <li className="formgroup">
                        <div className="forminput">
                          <span className="login-form-password"></span><input id="password" className="input" type="password" name="password"  onfocus="this.type='password'" autocomplete="off" placeholder="请输入密码" ref='password'/>
                        </div>
                      </li>
                      <li className="formgroup">
                        <em className="fl"><input id="rememberMe" name="rememberMe" type="checkbox" />&nbsp;记住用户名</em>
                        <em className="fr"><a href="forget_password.html">忘记密码？</a></em></li>
                      <li className="formgroup btn">
                        <button id="submit_login" type="submit" className="ui-btn ui-btn-big" onClick= {(e) => this.login(e)}> <span>立即登录</span> </button>
                      </li>
                      <li className="formgroup">
                        <em className="fr">没有账号？ <Link to="register">立即注册</Link></em>
                      </li>
                    </ul>
                </div>
               
              </div>
            </div>
          </div>



      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
    message:state.message.message
  }
}

export default connect(map)(Login)
