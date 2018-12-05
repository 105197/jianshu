import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'

const changeresult= (result) => ({
	type: actionType.CHANGE_HOME,
	writeList: result.writeList,
	hotList:  result.hotList
})
const addload= (list,newpage) => ({
	type: actionType.ADD_LOAD,
	list: fromJS(list),
	newpage
})
export const HomeChange = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data
			dispatch(changeresult(result[0]))
		}).catch(()=> {
			console.log('error')
		})
	}
}
export const GetLoadMore= (page)=> {
	return(dispatch) => {
		axios.get('/api/loadmore.json?page='+page).then((res) => {
			const result = res.data.data
			dispatch(addload(result,page+1))
		}).catch(()=> {
			console.log('error')
		})
	}
}

export const ChangeShow = (show) => ({
	type: actionType.CHANGE_TOP,
	show
})