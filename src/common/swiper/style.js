import styled from 'styled-components'

export const ImageItem =styled.div`
	width:625px
  height: 270px
  overflow:hidden
  position:relative
  background: beige
  img{
  width: 625px
  height:270px
  text-align:center
  }
`
export const BannerPagination =styled.div`
	text-align: center !importmant
	opacity: 1
	.swiper-pagination-bullet  {
	background: #a3d0ff;opacity: 1}
	.swiper-pagination-bullet-active {
	background: #fff
	}
`
export const IconLeft =styled.div`
	position: absolute  
  height: 50px
  width: 40px
  top: 40%
  left:0px
  text-align:center 
   line-height:50px
  cursor: pointer
  &.show{
    opacity:0.4
    background: #000
    z-index:100
    color:#fff
  }
`
export const IconRight =styled.div`
	position:absolute
  height: 50px
  width: 40px
  line-height:50px
  top: 40%
  z-index:1
  text-align:center 
  right:0px
  cursor: pointer
  &.show{
    opacity:0.4
    background: #000
    z-index:100
    color:#fff 
  }
  .swiper-button-prev{
   height: 50px
   width: 40px
   line-height:50px
   top: 40%
   z-index:1
   text-align:center 
   right:0px
   cursor: pointer
  }
`