import {reducer as headerReducer} from '../common/header/store'
import {combineReducers} from 'redux-immutable'
import homeReducer from '../page/home/store/reducer'
import loginReducer from '../page/login/store/reducer'
import detailReducer from '../page/detail/store/reducer'
import {reducer as swiperReducer} from '../common/swiper/store'
const reducer=combineReducers ({
	header: headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginReducer,
	swiper:swiperReducer
})
export default reducer
