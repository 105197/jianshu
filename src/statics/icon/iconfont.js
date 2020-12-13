import {createGlobalStyle} from 'styled-components'
export const Global = createGlobalStyle`
@font-face {
	font-family: "iconfont";
	src: url('./iconfont.eot?t=1544003602946'); /* IE9*/
	src: url('./iconfont.eot?t=1544003602946#iefix') format('embedded-opentype'), /* IE6-IE8 */
	url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	url('./iconfont.ttf?t=1544003602946') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	url('./confont.svg?t=1544003602946#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


