import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actionCreat from '../store/actionCreat'
import {Link} from 'react-router-dom'
import {
		WriteWrapper,
		WriteItem,
		LoadMore,
} from '../style'

class Write extends PureComponent{
	render() {
		const { writeList,page,handleLoadMore } = this.props;
		return(
			<WriteWrapper>
				{
					writeList.map((Item,index) => {
						return(
							<Link key={index} to={'/detail/' +Item.get('id')}>
								<WriteItem>
									<h3 className='title'>{Item.get('title')}</h3>
									<p className='contain'>
										{Item.get('contain')}
									</p>
								</WriteItem>
							</Link>
						)
					})
				}
				<LoadMore onClick={()=>handleLoadMore(page)}>加载更多</LoadMore>
			</WriteWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		writeList: state.get('home').get('writeList'),
		page: state.get('home').get('writeListpage')
	}
}
const mapDispatchToProps =(dispatch) => {
	return {
		handleLoadMore (page) {
			dispatch(actionCreat.GetLoadMore(page))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Write);