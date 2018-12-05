import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actionCreat from './store/actionCreat'
import {withRouter} from 'react-router-dom'
import {
	DetailWrapper,
	Header,
	Content
} from './style'
class Detail extends PureComponent{
	render() {
		return(
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content
						dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
		)
	}
	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}
const MapStateToProps =(state) => {
	return {
		title: state.getIn(['detail', 'title']),
		content: state.getIn(['detail', 'content'])
	}
}
const MapDispatchToProps =(dispatch) => {
	return {
		getDetail(id) {
			dispatch(actionCreat.getDetailList(id))
		}
	}
}
export default connect(MapStateToProps,MapDispatchToProps)(withRouter(Detail))