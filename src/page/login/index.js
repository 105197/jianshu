import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actionCreat from './store/actionCreat'
import {Redirect} from 'react-router-dom'
import {
	LoginWarpper,
	LoginItem,
	LogintitleWarpper,
	LogintitleRight,
	LogintitleLeft,
	LoginInput,
	Loginbutton
} from './style'
class Login extends PureComponent{
	render() {
		const {Loginshow} =this.props
		if (!Loginshow) {
			return(
					<LoginWarpper>
						<LoginItem>
							<LogintitleWarpper>
								<LogintitleLeft>登录</LogintitleLeft>
								<LogintitleRight>注册</LogintitleRight>
							</LogintitleWarpper>
							<LoginInput placeholder="手机号或邮箱" ref={(input) => {this.account = input}}/>
							<LoginInput placeholder="密码" ref={(input) => {this.password=input} }/>
							<Loginbutton onClick={()=>this.props.Login(this.account,this.password)}>登录</Loginbutton>
						</LoginItem>
					</LoginWarpper>
			)
		}
		else {
			return <Redirect to='./'/>
		}

	}
}
const MapStateToProps =(state) => {
	return {
		Loginshow:state.get('login').get('Loginshow')
	}
}
const MapDispatchToProps =(dispatch) => {
	return {
		Login(account,password) {
			dispatch(actionCreat.loginData(account,password))
		}
	}
}
export default connect(MapStateToProps,MapDispatchToProps)(Login)