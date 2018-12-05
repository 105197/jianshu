import {fromJS} from 'immutable'
import * as actionTypes from './actionType'
const defaultState = fromJS({
	Loginshow:false
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_LIST:{
			return state.set('Loginshow',action.value)
		}
		case actionTypes.LOGIN_LIST_OUT: {
			return state.set('Loginshow', action.value)
		}
		default:
			return state
	}
}