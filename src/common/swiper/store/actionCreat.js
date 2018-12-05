import axios from 'axios'
import * as actionType from './actionType'


const changeswiper= (result) =>({
	type: actionType.CHANGE_SWIPER,
	list: result.swiperList
})

export const swipermouseIn=() =>({
	type: actionType.MOUSE_IN,
	value: true
})
export const swipermouseOut=() =>({
	type: actionType.MOUSE_OUT,
	value: false
})
export const SwiperChange = () => {
	return (dispatch) => {
		axios.get('/api/swiper.json').then((res) => {
			const result = res.data.data
			console.log('123')
			console.log(result)
			dispatch(changeswiper(result[0]))
		}).catch(()=> {
			console.log('error')
		})
	}
}