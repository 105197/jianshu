import styled from 'styled-components'
export const LoginWarpper =styled.div`
  position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`
export const LoginItem =styled.div`
	background: #fff
	width:400px
	margin:100px auto
	text-align: center
	box-shadow: 0 0 8px rgba(0,0,0,.1)
`

export const LogintitleWarpper =styled.div`
	overflow:hidden
	margin:0 auto
	width:200px
`
export const LogintitleLeft =styled.div`
	width:50px
	height: 50px
	line-height: 50px
	font-weight: 700
	float:left
	left: 100px
	top: 20px
	color: #777
`
export const LogintitleRight =styled.div`
	width:50px
	height: 50px
	line-height: 50px
	font-weight: 700
	float:right
	right: 100px
	color: #777
`
export const LoginInput =styled.input`
	display: block;
	width: 200px;
	height: 30px;
	margin-top: 60px 
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
	border: 1px solid #c8c8c8
	outline:none
`
export const Loginbutton =styled.button`
	width: 200px
	background: #3194d0
	color:#fff
	height:30px
	margin: 30px auto
	line-height:30px
	text-align:center
	border-radius:10px
	cursor: pointer
	border: none
	:focus{outline:0}
`