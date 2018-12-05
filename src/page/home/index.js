import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Swiper from '../../common/swiper'
import {actionCreat as swiperactionCreat} from '../../common/swiper/store'
import {
	Contain,
	ContainLeft,
	ContainRight,
	ScrollTop,
} from './style'
import Hot from './components/hot'
import * as actionCreat from './store/actionCreat'
import Write from './components/write'
class Home extends PureComponent{
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}
	render() {
		const {swiperList} = this.props
		return(
				<Contain>
					<ContainLeft>
						<Swiper list={swiperList}/>
						<Write/>
					</ContainLeft>
					<ContainRight>
						<Hot/>
					</ContainRight>
					{this.props.scrollShow ? <ScrollTop onClick={this.handleScrollTop}>回到顶部</ScrollTop> :null}
				</Contain>
		)
	}
	componentDidMount() {

		this.props.getSwiperList()
		this.props.HomechangeData()
		this.addElement()
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.showTop)
	}
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	addElement() {
		window.addEventListener('scroll', this.props.showTop)
	}
}
const MapStateToProps=(state) =>{
	return {
		scrollShow: state.get('home').get('scrollShow'),
		swiperList: state.get('swiper').get('swiperList')
	}
}
const MapDispatchToProps= (dispatch) => ({
	HomechangeData() {
		const action = actionCreat.HomeChange()
		dispatch(action)
	},
	getSwiperList(){
		const action = swiperactionCreat.SwiperChange()
		dispatch(action)
	},
	showTop() {
		if(document.documentElement.scrollTop > 100){
			const action = actionCreat.ChangeShow(true)
			dispatch(action)
		}else {
			const action = actionCreat.ChangeShow(false)
			dispatch(action)
		}

	}
})
export default connect(MapStateToProps,MapDispatchToProps)(Home)