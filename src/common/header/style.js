import styled from 'styled-components'
import logopic from '../../statics/jianshu.png'
export const HeaderWrapper =styled.div`
	position: relative
	height:56px
	border-bottom: 1px solid #f0f0f0
`
export const Nav =styled.div`
	position: relative
	width: 960px
	height: 100%
	margin: 0 auto
	padding-right: 50px
	box-sizing:border-box
`
export const NavItem =styled.div`
	line-height:56px
	padding: 0 15px
	font-size: 17px
	cursor: pointer
	&.left{
	float: left
	color: #333
	}
	&.right{
	float: right
	color: #969696
	}
	&.active {
	color: #ea6f5a;
	}
`
export const NavSearch =styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px
	height: 38px
	padding: 0 35px 0 20px
	margin-top: 9px
	margin-left: 40px
	box-sizing:border-box
	border: none
	outline:none
	border-radius: 19px
	background: #eee
	font-size: 14px
	color:#777
	&.focused {
		width: 240px
	}
	&::placeholder {
	color: #999
	}
	&.slide-enter {
		width:160px
		transition:all .2s ease-out
	}
	&.slide-enter-active { 
		width:240px
	}
	&.slide-exit {
		transition:all .2s ease-out
	}
	&.slide-exit-active{
		width:160px
	}
`
export const SearchWrappr =styled.div`
	float:left
	position:relative
	.zoom {
		position:absolute 
		right: 5px
		bottom: 5px
		width: 30px
		line-height: 30px
		border-radius:15px 
		text-align: center
		&.focused {
			background: #777
			color:#fff
		}
	}
`
export const Logo =styled.a`
	position: absolute  
	top: 0
	left: 0
	display: block
	width: 100px
	height: 56px
	background: url(${logopic});
	background-size: contain;
`
export const Addition =styled.div`
	position: absolute  
	top:0
	right:0 
	height: 56px
	float:left
`
export const Button =styled.div`
	float: right
  width: 80px
  height: 35px
  line-height: 35px
  margin: 10px 15px 0 10px
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px
  font-size: 15px
  text-align: center
  &.active {
  background-color: #ea6f5a;
  width: 100px
  color: #fff;
  }
  &.zhunbei { 
  color: #ea6f5a
  }
`
export const SearchInfo =styled.div`
	width: 240px
	margin-top: 10px
	margin-left: 38px
	position: absolute  
	border-radius: 6px;
	left: 0;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background: #fff;
	z-index: 100
	cursor: pointer
`
export const SearchTitle =styled.div`
	width: 210px
	margin: 20px auto 
  top: 1px
  left: 15px
  color:#777
  font-size: 14px
`
export const SearchSwitch =styled.div`
	float: right;
	right: 15px
  font-size: 14px;
  color: #969696;
  .changepage {
    display: block
    float: left
    margin-right: 6px
    font-size: 12px
    transition: all .2s ease-in
    transform-origin: center center
  }
`
export const SearchInfoItem =styled.div`
	float: left
	margin-left: 15px
	margin-bottom: 10px
	color:#777
	font-size: 14px
	border: 1px solid #ccc9c9
	padding: 2px 6px;
	
`
export const SearchList =styled.div`
	overflow: hidden;
`