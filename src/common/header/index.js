import React, {Component} from 'react'
import { connect } from 'react-redux'
import {actionCreat} from './store'
import {actionCreat as loginactionCreat} from '../../page/login/store'
import {CSSTransition} from 'react-transition-group'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrappr,
	SearchInfo,
	SearchTitle,
	SearchSwitch,
	SearchInfoItem,
	SearchList
				} from './style'
import {Link} from "react-router-dom";
class Header extends Component {
	getListSearch() {
		const {focused,list,mouseIn,page,totalPage,handleMouseEnter,handleMouseLeave,handlechangePage} =this.props
		const newList = list.toJS()
		const pageList = []
		if (newList.length) {
			for (let i = (page-1)*10;i < page*10 ;i++) {
				if (newList[i]) {
					pageList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					)
				}
			}
		}
		if (focused || mouseIn ){
			return(
				<SearchInfo
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
				>
					<SearchTitle>
						热门搜索
						<SearchSwitch onClick={() => handlechangePage(page,totalPage,this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon=icon} } className="iconfont changepage">&#xe606;</i>
							换一批
						</SearchSwitch>
					</SearchTitle>
					<SearchList>
						{pageList}
					</SearchList>
				</SearchInfo>
			)
		}
		else {
			return null
		}
	}
	render() {
		const {focused,handleInputFocus,handleInputBlur,list,Loginshow,LoginOut} =this.props
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{Loginshow ? <NavItem onClick={LoginOut} className='right'>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
					<NavItem className='right'>
						<i className="iconfont">&#xe607;</i>
					</NavItem>
					<SearchWrappr>
						<CSSTransition
								in={focused}
								timeout={200}
								classNames='slide'
						>
							<NavSearch
									className={focused ? 'focused' : ''}
									onFocus={() => handleInputFocus(list)}
									onBlur={handleInputBlur}

							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
						{this.getListSearch()}
					</SearchWrappr>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='active'>
							<i className="iconfont">&#xe616;</i>
							写文章
						</Button>
					</Link>
					<Button className='zhunbei'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		mouseIn: state.get('header').get('mouseIn'),
		page: state.get('header').get('page'),
		totalPage: state.get('header').get('totalPage'),
		Loginshow: state.get('login').get('Loginshow')
	}
}
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus (list) {
			if(list.size===0) {
				dispatch(actionCreat.headerList())
			}
			dispatch(actionCreat.searchFocus())
		},
		handleInputBlur () {
			dispatch(actionCreat.searchBlur())
		},
		handleMouseEnter () {
			dispatch(actionCreat.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreat.mouseLeave())
		},
		handlechangePage(page,totalPage,spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
			console.log(originAngle)
			if (originAngle) {
				originAngle = parseInt(originAngle,10)
			}else {
				originAngle=0
			}
			spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
			if (page < totalPage) {
				dispatch(actionCreat.changePage(page+1))
			}
			else {
				dispatch(actionCreat.changePage(1))
			}
		},
		LoginOut() {
			dispatch(loginactionCreat.changeOut())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header);