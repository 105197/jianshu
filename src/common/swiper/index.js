import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css';
import * as actionCreat from './store/actionCreat'
import { connect } from 'react-redux'
import {
	ImageItem,
	BannerPagination,
	IconLeft,
	IconRight
} from './style'

class Slideshow extends Component {
	componentDidMount() {
		new Swiper(this.swiperID, {
			loop: true,
			autoplay: {
				delay:1000,
				disableOnInteraction: false
			},
			pagination: {
				el: this.paginateID,
				clickable: true,
			},
			observer: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	}

	renderList() {

		const items = this.props.list
		const result = items.map((item, index) => {
			return (
					<li className="swiper-slide" key={index}>
						<img src={item.get('imgpic')} alt="" />
					</li>
			)
		})
		return result
	}

	render() {
		const items = this.renderList()
		const {MouseEnter,MouseLeave,swiperShow}= this.props
		return (
				<ImageItem
						onMouseEnter={MouseEnter}
						onMouseLeave={MouseLeave}>
					<section className="new_custom swiper-container" ref={self => this.swiperID = self}>
						<IconLeft className={swiperShow ? 'show swiper-button-prev' : 'swiper-button-prev'}>
							<i  className='iconfont '>&#xe600;</i>
						</IconLeft>
						<IconRight className={swiperShow ? 'show swiper-button-next' : 'swiper-button-next '}>
							<i className='iconfont'>&#xe780;</i>
						</IconRight>
						<ul className="swiper-wrapper">
							{items}
						</ul>
						<BannerPagination className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></BannerPagination>
					</section>
				</ImageItem>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		swiperShow: state.get('swiper').get('swiperShow')
	}
}
const mapDispathToProps = (dispatch) => {
	return {
		MouseEnter() {
			dispatch(actionCreat.swipermouseIn())
		},
		MouseLeave() {
			dispatch(actionCreat.swipermouseOut())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Slideshow);