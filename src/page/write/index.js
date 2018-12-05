import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {
	WriteWarpper,
	WriteLeft,
	Writetitle,
	WriteMiddle,
	WriteInput,
	WriteRight
	} from './style'
// import * as actionCreat from './store/actionCreat'
import {Redirect,Link} from 'react-router-dom'
class Write extends PureComponent{
	render() {
		const {Loginshow} =this.props
		if (Loginshow) {
			return(
					<WriteWarpper>
						<WriteLeft>

							<Link to='/'>
								<Writetitle >回到首页</Writetitle>
							</Link>
							<span >新建文集</span>
							<span >随笔</span>
						</WriteLeft>
						<WriteMiddle>
							<h3>新建文章</h3>
							<span>无标题文章</span>
						</WriteMiddle>
						<WriteRight>
							<p>保存</p>
							<WriteInput placeholder='无标题文章'></WriteInput>
						</WriteRight>
					</WriteWarpper>
			)
		}
		else {
			return <Redirect to='./login'/>
		}
	}
}
const MapStateToProps =(state) => {
	return {
		Loginshow:state.get('login').get('Loginshow')
	}
}

export default connect(MapStateToProps,null)(Write)