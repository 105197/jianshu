import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {
		HotWrapper,
		HotItem
}  from '../style'
class Hot extends PureComponent{
	render() {
		return(
			<HotWrapper>
				{this.props.hotList.map((Item) => {
					return (
						<Link key={Item.get('id')} to='/detail'>
							<HotItem >
								<img className='hotimage' src={Item.get('imgPic')} alt=""/>
							</HotItem>
						</Link>
					)
				})}
			</HotWrapper>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		hotList: state.get('home').get('hotList')
	}
}
export default connect(mapStateToProps,null)(Hot)