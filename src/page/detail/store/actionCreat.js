import axios from 'axios'
import * as actionType from './actionType'
const changeDetail = (title, content) =>({
	type: actionType.DETAIL_LIST,
	title,
	content
})
export const getDetailList= (id)=> {
	return(dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data
			dispatch(changeDetail(result.title, result.content))
		}).catch(()=> {
			console.log('error')
		})
	}
}
