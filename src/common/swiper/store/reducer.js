import {fromJS} from 'immutable'
import * as actionTypes from './actionType'
const defaultState = fromJS({
	swiperList: [],
	swiperShow: false
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_SWIPER:
			return state.set('swiperList',fromJS(action.list))
		case actionTypes.MOUSE_IN:
			return state.set('swiperShow',fromJS(action.value))
		case actionTypes.MOUSE_OUT:
			return state.set('swiperShow',fromJS(action.value))
		default:
			return state
	}
}