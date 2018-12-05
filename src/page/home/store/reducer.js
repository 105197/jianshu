import {fromJS} from 'immutable'
import * as actionTypes from './actionType'
const defaultState = fromJS({
	writeList:[],
	hotList:[],
	writeListpage:1,
	scrollShow: false
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_HOME:
			return state.merge({
				writeList: fromJS(action.writeList),
				hotList: fromJS(action.hotList)
			})
		case actionTypes.ADD_LOAD:
			return state.merge({
				'writeList': state.get('writeList').concat(action.list),
				'writeListpage': action.newpage
			})
		case actionTypes.CHANGE_TOP:
			return state.set('scrollShow',action.show)
		default:
			return state
	}
}