import styled from 'styled-components'
export const Contain =styled.div`
	position: relative
	width: 960px
	margin: 0 auto
	overflow: hidden
`
export const ContainLeft =styled.div`
 width:625px
 float: left
 margin-top: 30px
`
export const ContainRight =styled.div`
  margin-top: 30px
	width:280px
	float: right
`
export const HotWrapper =styled.div`
	overflow: hidden
`
export const HotItem =styled.div`
	width: 100%
	float: left
	margin-bottom: 6px
	boder-radius: 5px
	.hotimage{
		height: 50px
		cursor: pointer
	}
`
export const WriteWrapper =styled.div`
	width:625px
	margin-top: 30px
	border-top: 1px solid #f0f0f0	
	
`
export const WriteItem =styled.div`
	border-bottom: 1px solid #f0f0f0	
	position: relative
	width: 100%
	margin: 10px 0 10px
	padding: 15px 2px 10px 0
	font-size: 14px
	color: #999
	.title {
		color: #969696
		margin-bottom: 6px
		font-size: 18px
		cursor: pointer
		:hover{
		color: #000
	}
	}
	.contain {
		line-height: 24px	
	}

`
export const LoadMore =styled.div`
	width: 100%
	background: #a5a5a5
	border-radius: 20px
	height: 40px
	line-height: 40px
	margin: 20px auto
	text-align: center
	font-size: 16px
	color: #fff
`
export const ScrollTop =styled.div`
	position: fixed
	cursor: pointer
	width: 60px
	height: 60px
	line-height:60px
	text-align: center
	right: 100px
	font-size: 12px
	bottom: 100px
	color: #969696
	border: 1px solid #eae8e8
`