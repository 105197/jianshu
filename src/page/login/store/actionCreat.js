import axios from 'axios';
import * as actionTypes from './actionType';
const changeLogin=() => ({
	type: actionTypes.LOGIN_LIST,
	value: true
})

export const changeOut= () => ({
		type: actionTypes.LOGIN_LIST_OUT,
		value: false
})
export const loginData= (account,password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account='+account+'&password='+password).then((res) =>{
			const result = res.data.data
			if (result) {
				dispatch(changeLogin())
			} else {
				alert('登陆失败')
			}
		})
	}
}
