import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})
const searchList =(data) => ({
	type: actionTypes.SEARCH_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length/10)
})
export const headerList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) =>{
			const data = res.data
			dispatch(searchList(data.data))
			}
		).catch(() => {
			console.log('error')
		})
	}
}
export const mouseEnter = () => ({
	type: actionTypes.SEARCH_MOUSE_ENTER
})
export const mouseLeave = () => ({
	type: actionTypes.SEARCH_MOUSE_LEAVE
})
export const changePage = (page) => ({
	type: actionTypes.SEARCH_CHANGE_PAGE,
	page
})