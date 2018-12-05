import styled from 'styled-components'
export const WriteWarpper =styled.div`
  overflow: hidden
  position: absolute
	left: 0
	right: 0
	bottom: 0
	top: 56px
`
export const WriteLeft =styled.div`
	float:left
	position: relative
	background: #404040
	color: #f2f2f2
	width: 16.6666%
	height: 100%
  overflow-y: auto
	span {
		color:#f2f2f2
		font-size: 16px
		height:30px
		line-height: 30px
		display:block
		margin: 30px auto
		text-align:center
		cursor:pointer
	}
`
export const Writetitle =styled.div`
	width:190px
	height:40px
	line-height:40px
	border: 1px solid #ec7259
	color:#ec7259
	text-align:center
	margin:20px auto
	border-radius:20px
	cursor:pointer
`

export const WriteMiddle =styled.div`
	float:left
	width:33.33%
	h3 {
	font-weight: 400px
	display: block
	margin:50px 0px 40px 50px
	cursor:pointer
	}
	span{
	font-weight: 400px
	display: block
	margin:50px 0px 40px 50px
	cursor:pointer
	}
`
export const WriteRight =styled.div`
	width:50%
	float:left
	p {
	color:#b3aeae
	right:20px
	top:20px
	cursor:pointer
	display:block
	margin-top: 30px
	}
`
export const WriteInput =styled.input`
	width: 100%
	padding: 0 80px 10px 40px
	margin-bottom: 0
	border: none
	font-size: 30px
	font-weight: 40
	line-height: 30px
	margin-top: 30px 
	:focus{outline:0}
`